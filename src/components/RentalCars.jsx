import React, { useState } from "react";
import { cars } from "../constants";

const RentalCars = () => {
  const [carId, setCarId] = useState("audi_a1_s-line");
  const selecetdCar = cars.filter((car) => car.id === carId);

  function handleClick(id) {
    setCarId(id);
  }

  const CarsInformation = ({ title, content }) => {
    return (
      <div
        className={`font-poppins text-[0.87rem] border-b-2 border-x-2 text-center border-dimGrey grid grid-cols-2 py-2 px-1`}
      >
        <span className="border-r-2 border-dimGrey"> {title} </span>
        <span> {content} </span>
      </div>
    );
  };

  return (
    <section id="rental_fleet">
      <div className="max-w-[130rem] mx-auto px-[4rem]">
        {/* Flex Container */}
        <div className="flex flex-col mb-12 gap-[5rem] lg:gap-4">
          <div className="text-secondary mx-auto text-center">
            <h3 className=" font-poppins font-semibold text-[1.25rem] mb-2">
              Vehicle Models
            </h3>
            <h2 className="font-poppins font-bold text-[2.75rem] mb-2">
              Our rental fleet
            </h2>
            <p className="font-poppins text-dimGrey text-[1rem] mb-10">
              Choose from a variety of our amazing vehicles to rent for your
              next adventure or business trip
            </p>
          </div>
          {/* Car Models Selector, image and Info */}
          <div className="flex flex-col justify-between gap-[5rem] lg:flex-row lg:gap-4">
            {/* List of Cars with action */}
            <div className="flex flex-col gap-2">
              {cars.map((car) => (
                <button
                  onClick={() => handleClick(car.id)}
                  key={car.id}
                  type="button"
                  className={`${
                    car.id === carId
                      ? "bg-primary text-white"
                      : "bg-lightBg text-secondary"
                  } font-poppins font-semibold text-[1rem] text-left px-[2.5rem] py-[1rem] mb-3 w-full`}
                >
                  {car.mark + " " + car.model}
                </button>
              ))}
            </div>
            {/* Car Image, Description Container */}
            {selecetdCar.map((chosenCar) => (
              <div
                key={chosenCar.id}
                className="flex flex-col justify-center items-center gap-[4.5rem] mm:flex-row mm:justify-between mm:gap-5 xl:gap-[10rem]"
              >
                <div className="relative w-[20rem] ss:w-[30rem]  sm:w-[34rem]">
                  <img
                    src={chosenCar.img}
                    alt={chosenCar.model}
                    className="block mt-[5rem] w-full"
                  />
                </div>
                <div className="w-[15rem] lg:w-[13.5rem] xl:w-[18rem]">
                  <div className="font-poppins bg-primary text-white flex items-center py-1 px-6 whitespace-nowrap w-full gap-[1.4rem]">
                    <span className="font-semibold text-[1.8rem]">
                      {chosenCar.price}
                    </span>
                    / rent per day
                  </div>
                  <div className="grid grid-cols-1">
                    <CarsInformation title="Mark" content={chosenCar.mark} />
                    <CarsInformation title="Model" content={chosenCar.model} />
                    <CarsInformation title="Year" content={chosenCar.year} />
                    <CarsInformation title="Doors" content={chosenCar.doors} />
                    <CarsInformation title="AC" content={chosenCar.ac} />
                    <CarsInformation title="Transmission" content={chosenCar.transmission} />
                    <CarsInformation title="Fuel" content={chosenCar.fuel} />
                  </div>
                  <div className="font-poppins font-semibold text-[1.25rem] cursor-pointer bg-primary text-white flex py-1 px-6 whitespace-nowrap mt-3 drop-shadow-2xl">
                    <a href="#booking" className="px-7 py-2 text-center">
                      RESERVE NOW
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RentalCars;
