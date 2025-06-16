import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { format } from "date-fns";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn, MdDateRange } from "react-icons/md";
import { AuthContext } from './../../../Contex/AuthProvider';
import axios from "axios";
import Swal from "sweetalert2";

const PackageDetails = () => {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);
  const {
    tour_name,
    image,
    guide_name,
    guide_photo,
    guide_email,
    guide_contact_no,
    duration,
    price,
    package_details,
    bookingCount,
    departure_location,
    departure_date,
    destination,
    _id,
  } = data;

  const { user } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    const form = e.target;
    const note = form.note.value;

    const bookingData = {
      tour_id: _id,
      tour_name,
      guide_name,
      guide_email,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      booking_date: new Date(),
      departure_date,
      notes: note,
      status: "pending"
    };

    try {
      const res = await axios.post("http://localhost:3000/bookings", bookingData);

      if (res.data.insertedId) {
        await Swal.fire({
          icon: 'success',
          title: 'Booking Successful!',
          text: 'Your booking request has been submitted.',
        });

        const updated = await axios.get(`http://localhost:3000/tour-packages/${_id}`);
        setData(updated.data);
        
        form.reset();
        setShowModal(false);
      } else {
        throw new Error('Booking failed');
      }
    } catch (err) {
      await Swal.fire({
        icon: 'error',
        title: 'Booking Failed',
        text: err?.message || 'Something went wrong. Please try again.',
      });
      console.error(err);
    }
  };

  return (
    <div className="my-24 md:my-32 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <img
          src={image}
          alt={tour_name}
          className="rounded-xl shadow-lg w-full max-h-[500px] object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{tour_name}</h2>
          <div className="flex items-center gap-3">
            <img
              src={guide_photo}
              alt={guide_name}
              className="w-12 h-12 rounded-full border-2 border-primary"
            />
            <div>
              <p className="font-semibold">{guide_name}</p>
              <p className="text-sm flex items-center gap-1 text-gray-500 dark:text-gray-300">
                <FaPhoneAlt /> {guide_contact_no}
              </p>
            </div>
          </div>
          <p>
            <strong>Duration:</strong> {duration}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Departure:</strong>{" "}
            <span className="inline-flex items-center gap-1">
              <MdLocationOn /> {departure_location}
              <MdDateRange /> {departure_date}
            </span>
          </p>
          <p>
            <strong>Destination:</strong> {destination}
          </p>
          <p>
            <strong>Booking Count:</strong> {bookingCount}
          </p>
          <p>
            <strong>Description:</strong> {package_details}
          </p>

          <button
            className="btn btn-primary mt-4"
            onClick={() => setShowModal(true)}
          >
            Book Now
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box space-y-3">
            <h3 className="font-bold text-xl mb-4">Book Tour Package</h3>
            <form onSubmit={handleBooking} className="space-y-4">
              <div>
                <label className="label">Tour Package Name</label>
                <input
                  type="text"
                  value={tour_name}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">Price</label>
                <input
                  type="text"
                  value={`$${price}`}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">Buyer Name</label>
                  <input
                    type="text"
                    value={user?.displayName}
                    disabled
                    className="input input-bordered w-full"
                  />
                </div>
                <div>
                  <label className="label">Buyer Email</label>
                  <input
                    type="text"
                    value={user?.email}
                    disabled
                    className="input input-bordered w-full"
                  />
                </div>
              </div>
              <div>
                <label className="label">Booking Date</label>
                <input
                  type="text"
                  value={format(new Date(), "PPPpp")}
                  disabled
                  className="input input-bordered w-full"
                />
              </div>
              <div>
                <label className="label">Special Note (Optional)</label>
                <textarea
                  name="note"
                  className="textarea textarea-bordered w-full"
                  placeholder="Any note for the guide..."
                ></textarea>
              </div>
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
                  Book Now
                </button>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default PackageDetails;
