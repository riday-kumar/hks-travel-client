import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const AddTicket = () => {
  const axiosSecure = useAxiosSecure();
  const { currentUser } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const ticketName = data.title;
    const busDeparture = data.departure;
    const busFrom = data.from;
    const busTo = data.to;
    const transportType = data.transportType;
    const ticketPrice = Number(data.price);
    const ticketImage = data.image[0];
    const busPerks = data.perks;
    const ticketQuantity = Number(data.quantity);
    const remainingTicket = Number(data.quantity);
    const ticketCreatedBy = currentUser.email;

    // store ticket image in the imagebb server

    const formData = new FormData();
    formData.append("image", ticketImage);

    const image_Api_Url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_img_host
    }`;

    // image will save in the imagebb server
    axios.post(image_Api_Url, formData).then((res) => {
      // create ticket in the database
      const ticketInfo = {
        ticketName,
        busDeparture,
        busFrom,
        busTo,
        transportType,
        ticketPrice,
        ticketImage: res.data.data.url,
        busPerks,
        ticketQuantity,
        remainingTicket,
        ticketCreatedBy,
      };

      axiosSecure.post("/add-ticket", ticketInfo).then((res) => {
        if (res.data.insertedId) {
          toast.success("ticket created successfully");
        }
      });
    });
  };

  // reset form after submit
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const perksList = ["AC", "Breakfast", "Water", "Charging Port", "Wifi"];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-gray-900 p-6 rounded-xl border border-gray-700"
    >
      {/* Title */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">Ticket Title</label>
        <input
          {...register("title", { required: "Title is required" })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Ex: Dhaka to Chittagong"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      {/* From Location */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">From</label>
        <input
          {...register("from", { required: "Starting location is required" })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Ex: Dhaka"
        />
        {errors.from && (
          <p className="text-red-500 text-sm mt-1">{errors.from.message}</p>
        )}
      </div>

      {/* To Location */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">To</label>
        <input
          {...register("to", { required: "Destination is required" })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Ex: Chittagong"
        />
        {errors.to && (
          <p className="text-red-500 text-sm mt-1">{errors.to.message}</p>
        )}
      </div>

      {/* Transport Type */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">
          Transport Type
        </label>
        <select
          {...register("transportType", {
            required: "Transport type is required",
          })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        >
          <option value="">Select type</option>
          <option value="AC Bus">AC Bus</option>
          <option value="Non AC Bus">Non AC Bus</option>
          <option value="Sleeper Coach">Sleeper Coach</option>
        </select>
        {errors.transportType && (
          <p className="text-red-500 text-sm mt-1">
            {errors.transportType.message}
          </p>
        )}
      </div>

      {/* Price */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">
          Price (Per Ticket)
        </label>
        <input
          type="number"
          {...register("price", {
            required: "Price is required",
            min: { value: 1, message: "Price must be at least 1" },
          })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Ex: 1200"
        />
        {errors.price && (
          <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
        )}
      </div>

      {/* Quantity */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">
          Ticket Quantity
        </label>
        <input
          type="number"
          {...register("quantity", {
            required: "Quantity is required",
            min: { value: 1, message: "Minimum quantity is 1" },
          })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
          placeholder="Ex: 30"
        />
        {errors.quantity && (
          <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>
        )}
      </div>

      {/* Departure Date & Time */}
      <div>
        <label className="text-gray-300 text-sm mb-1 block">
          Departure Date & Time
        </label>
        <input
          type="datetime-local"
          {...register("departure", {
            required: "Departure date & time is required",
          })}
          className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700"
        />
        {errors.departure && (
          <p className="text-red-500 text-sm mt-1">
            {errors.departure.message}
          </p>
        )}
      </div>

      {/* Perks */}
      <div>
        <label className="text-gray-300 text-sm mb-2 block">Perks</label>
        <div className="grid grid-cols-2 gap-2">
          {perksList.map((perk) => (
            <label key={perk} className="flex items-center gap-2 text-gray-300">
              <input
                type="checkbox"
                value={perk}
                {...register("perks")}
                className="accent-green-500"
              />
              {perk}
            </label>
          ))}
        </div>
      </div>

      {/* Image Upload */}
      <div>
        <label className="text-gray-300 text-sm mb-2 block">Image Upload</label>
        <input
          type="file"
          {...register("image", { required: "Image is required" })}
          className="w-full text-gray-300"
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold"
      >
        Add Ticket
      </button>
    </form>
  );
};

export default AddTicket;
