import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../../../Contex/AuthProvider";

const ManageMyPackages = () => {
  const { user } = useContext(AuthContext);
  const [myPackages, setMyPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [editPackage, setEditPackage] = useState(null);
  console.log(editPackage)

  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:3000/tour-packages?guideEmail=${user.email}`)
        .then((res) => setMyPackages(res.data))
        .finally(() => setLoading(false));
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/tour-packages/${id}`).then(() => {
          setMyPackages(myPackages.filter((pkg) => pkg._id !== id));
          Swal.fire("Deleted!", "Your tour package has been deleted.", "success");
        });
      }
    });
  };


  const handleEdit = (pkg) => {
    setEditPackage(pkg);
    setShowModal(true);
  };


  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const form = e.target;

      const updatedData = {
        tour_name: form.tour_name.value,
        destination: form.destination.value,
        price: Number(form.price.value),
        image:form.image.value,
        departure_location: form.departure_location.value,
        duration: form.duration.value,
        package_details: form.package_details.value,
        guide_name: editPackage.guide_name, // keep guide info as is
        guide_email: editPackage.guide_email,
        guide_photo: editPackage.guide_photo,
      };

      const res = await axios.patch(`http://localhost:3000/tour-packages/${editPackage._id}`, updatedData);

      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", "Tour package updated successfully!", "success");

        setMyPackages((prev) =>
          prev.map((pkg) => (pkg._id === editPackage._id ? { ...pkg, ...updatedData } : pkg))
        );

        setShowModal(false);
        setEditPackage(null);
      } else {
        Swal.fire("Info", "No changes were made.", "info");
      }
    } catch (err) {
      Swal.fire("Error", err.message || "Failed to update package.", "error");
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
    <div className="px-4 md:px-10 lg:px-20 my-20">
      <h2 className="text-3xl font-bold text-center mb-8">Manage My Packages</h2>

      {myPackages.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          You haven't added any tour packages yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-base-300 rounded-lg">
            <thead>
              <tr className="bg-base-200 text-base font-semibold text-base-content">
                <th>#</th>
                <th>Tour Name</th>
                <th>Destination</th>
                <th>Price</th>
                <th>Departure</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {myPackages.map((pkg, index) => (
                <tr key={pkg._id} className="hover">
                  <td>{index + 1}</td>
                  <td>{pkg.tour_name}</td>
                  <td>{pkg.destination}</td>
                  <td>${pkg.price}</td>
                  <td>{pkg.departure_location}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleEdit(pkg)}
                      className="btn btn-sm btn-info text-white flex items-center gap-1"
                    >
                      <FaEdit /> Edit
                    </button>
                    <button
                      onClick={() => handleDelete(pkg._id)}
                      className="btn btn-sm btn-error text-white flex items-center gap-1"
                    >
                      <FaTrash /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Modal for Editing */}
      {showModal && editPackage && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-xl mb-4">Edit Tour Package</h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="label">Tour Name</label>
                <input
                  name="tour_name"
                  type="text"
                  defaultValue={editPackage.tour_name}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Image</label>
                <input
                  name="image"
                  type="text"
                  defaultValue={editPackage.image}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Destination</label>
                <input
                  name="destination"
                  type="text"
                  defaultValue={editPackage.destination}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Price</label>
                <input
                  name="price"
                  type="number"
                  defaultValue={editPackage.price}
                  className="input input-bordered w-full"
                  required
                  min={0}
                />
              </div>
              <div>
                <label className="label">Departure Location</label>
                <input
                  name="departure_location"
                  type="text"
                  defaultValue={editPackage.departure_location}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Duration</label>
                <input
                  name="duration"
                  type="text"
                  defaultValue={editPackage.duration}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="label">Package Details</label>
                <textarea
                  name="package_details"
                  defaultValue={editPackage.package_details}
                  className="textarea textarea-bordered w-full"
                  rows={4}
                  required
                ></textarea>
              </div>

              <div className="modal-action flex justify-end gap-2">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setShowModal(false);
                    setEditPackage(null);
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default ManageMyPackages;
