import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contex/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://wander-nest-server.vercel.app/bookings?email=${user.email}`, {
          withCredentials: true
        })
        .then((res) => setBookings(res.data))
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleConfirm = async (id) => {
    try {
     const response = await axios.put(
      `https://wander-nest-server.vercel.app/bookings/${id}`,
      { status: "completed" },
      { withCredentials: true }   
    );

      if (response.data.modifiedCount > 0) {
        Swal.fire("Success!", "Booking confirmed!", "success");
        setBookings((prev) =>
          prev.map((b) => (b._id === id ? { ...b, status: "completed" } : b))
        );
      }
    } catch (error) {
      Swal.fire("Error", "Failed to confirm booking", "error");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
   <>
   <Helmet><title>My Bookings - WanderNest</title></Helmet>
    <div className="px-4 min-h-[80vh] md:px-10 lg:px-20 my-20">
      <h2 className="text-3xl font-bold text-center mb-8">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-base-300 rounded-lg">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>#</th>
                <th>Tour Name</th>
                <th>Guide Info</th>
                <th>Departure Date</th>
                <th>Special Note</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id} className="hover">
                  <td>{index + 1}</td>
                  <td>{booking.tour_name}</td>
                  <td>
                    <div>
                      <p className="font-medium">{booking.guide_name}</p>
                      <p className="text-sm text-gray-500">{booking.guide_email}</p>
                    </div>
                  </td>
                  <td>{new Date(booking.departure_date).toLocaleDateString()}</td>
                  <td>{booking.notes || "N/A"}</td>
                  <td>
                    {booking.status === "completed" ? (
                      <span className="badge badge-success">Completed</span>
                    ) : (
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleConfirm(booking._id)}
                      >
                        Confirm
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
   </>
  );
};

export default MyBookings;
