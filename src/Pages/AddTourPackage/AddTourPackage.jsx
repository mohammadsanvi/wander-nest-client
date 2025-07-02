import axios from "axios";
import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contex/AuthProvider";
import { Helmet } from "react-helmet-async";

const steps = ["Basic Info", "Location & Price", "Details & Guide Info"];

const TourPackageForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { user } = use(AuthContext)


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });


  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://wander-nest-server.vercel.app/tour-packages",
        data, {
        withCredentials: true
      }
      );
      if (response.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Tour Package Added Successfully!",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Failed to add package. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      console.error(error);
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) setCurrentStep((s) => s + 1);
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  return (
    <>
      <Helmet><title>Add New Tour Package - WanderNest</title></Helmet>

      <div className="max-w-3xl min-h-[80vh] mx-auto p-8 my-24 rounded-box shadow-lg bg-base-100">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Add Tour Package</h1>
          <p className="text-base-content">
            Fill in the details below to add a new tour package.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mb-6 text-base-content">
          {steps[currentStep]}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {currentStep === 0 && (
            <>
              <input
                {...register("tour_name", { required: true })}
                placeholder="Tour Name"
                className="input input-bordered w-full"
              />
              <input
                {...register("image", { required: true })}
                placeholder="Image URL"
                className="input input-bordered w-full"
              />
              <input
                {...register("duration", { required: true })}
                placeholder="Duration"
                className="input input-bordered w-full"
              />
            </>
          )}

          {currentStep === 1 && (
            <>
              <input
                {...register("departure_location", { required: true })}
                placeholder="Departure Location"
                className="input input-bordered w-full"
              />
              <input
                {...register("destination", { required: true })}
                placeholder="Destination"
                className="input input-bordered w-full"
              />
              <input
                {...register("price", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
              <input
                {...register("departure_date", { required: true })}
                type="date"
                className="input input-bordered w-full"
              />
            </>
          )}

          {currentStep === 2 && (
            <>
              <textarea
                {...register("package_details", { required: true })}
                placeholder="Package Details"
                className="textarea textarea-bordered w-full"
              />
              <input
                {...register("guide_name", { required: true })}
                placeholder="Guide Name"
                defaultValue={user.displayName}
                className="input input-bordered w-full"
              />
              <input
                {...register("guide_email", { required: true })}
                type="email"
                defaultValue={user.email}
                placeholder="Guide Email"
                className="input input-bordered w-full"
              />
              <input
                {...register("guide_photo", { required: true })}
                placeholder="Guide Photo URL"
                defaultValue={user.photoURL}
                className="input input-bordered w-full"
              />
              <input
                {...register("guide_contact_no", {
                  required: true,
                  valueAsNumber: true,
                })}
                type="number"
                placeholder="Guide Contact Number"
                className="input input-bordered w-full"
              />
            </>
          )}

          <div className="flex justify-between mt-6">
            {currentStep > 0 && (
              <button
                type="button"
                onClick={prevStep}
                className="btn btn-outline btn-primary"
              >
                ← Previous
              </button>
            )}

            {currentStep < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="btn btn-primary ml-auto"
              >
                Next →
              </button>
            )}

            {currentStep === steps.length - 1 && (
              <button type="submit" className="btn btn-primary ml-auto">
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default TourPackageForm;
