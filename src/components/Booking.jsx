import { useState } from "react";
import { selectComboBoxInfo } from "../constants";

const SelectComboBox = ({ id, icon, label, defaultOption, value }) => (
  <div className="flex flex-col">
    <label
      htmlFor={id}
      className="mb-3 font-semibold text-[1.rem] sm:text-[1.1rem]"
    >
      <i className={icon}></i>
      &nbsp; {label} <b className="text-primary">*</b>
    </label>
    <select
      name={id}
      id={id}
      className="font-rubik font-normal text-[#ababab] text-xl py-[12px] px-[13px] border-[1px] rounded-[3px] outline-none"
    >
      <option className="font-normal block whitespace-nowrap">
        {defaultOption}
      </option>
      {value.map((val, index) => (
        <option
          key={index}
          value={val}
          className="font-normal block whitespace-nowrap"
        >
          {val}
        </option>
      ))}
    </select>
  </div>
);

const Booking = () => {
  const [pickDate, setPickDate] = useState("");
  return (
    <section
      id="booking"
      className="text-[#fffdfd] relative bg-gradient-to-b from-[#f8f8f8] to-[#fff]"
    >
      {/* Container */}
      <div className="max-w-[130rem] px-[1.5rem] mx-auto md:px-[6.7rem] pb-[8rem]">
        {/* Booking Content */}
        <div className="flex flex-col relative z-[3] book-content__box w-full h-auto py-[4.5rem] px-8 md:px-12">
          <h2 className="font-poppins font-bold text-[2rem] mb-10">
            Book a car
          </h2>
          {/* Form action state */}
          <p className="hidden">
            All fields are required
            <i className="fa-solid fa-xmark"></i>
          </p>
          <p className="hidden">
            Check your email to confirm an order.
            <i className="fa-solid fa-xmark"></i>
          </p>
          {/* Form and Content */}
          <form
            action=""
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {selectComboBoxInfo.map((info) => (
              <SelectComboBox key={info.id} {...info} />
            ))}
            {/* Time */}
            <div className="flex flex-col relative">
              <label
                htmlFor="picktime"
                className="mb-3 font-semibold text-[1.rem] sm:text-[1.1rem]"
              >
                <i className="fa-solid fa-calendar-days text-primary"></i>
                &nbsp; Pick-up <b className="text-primary">*</b>
              </label>
              <input
                id="picktime"
                type="date"
                className="font-mono inline-flex items-center ps-[1px] border-solid border-[1px] border-[#ccd7e6] text-[#878585] outline-none py-2 pl-2 pr-8 overflow-hidden"
              />
            </div>
            <div className="flex flex-col relative">
              <label
                htmlFor="droptime"
                className="mb-3 font-semibold text-[1.rem] sm:text-[1.1rem]"
              >
                <i className="fa-solid fa-calendar-days text-primary"></i>
                &nbsp; Drop-off <b className="text-primary">*</b>
              </label>
              <input
                id="droptime"
                type="date"
                className="font-mono inline-flex items-center ps-[1px] border-solid border-[1px] border-[#ccd7e6] text-[#878585] outline-none py-2 pl-2 pr-8 overflow-hidden"
              />
            </div>
            {/* form Submit Button */}
            <button
              type="button"
              className="bg-primary text-white font-rubik font-medium h-fit text-lg p-[0.65rem] self-end cursor-pointer border-none shadow-md shadow-[#FF5330]/90 ease-in-out"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;
