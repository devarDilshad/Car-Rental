import { heroBg, redGolf } from "../assets";
import { useEffect, useState } from "react";

const Hero = () => {
  // Back to top state, handler and effect
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section className="bg-[#f8f8f8] w-full h-[97vh]">
      {/* Container */}
      <div className="max-w-[130rem] px-[6.7rem] mx-auto">
        {/* Bg Image */}
        <img
          src={heroBg}
          alt="bg-shape"
          className="hidden absolute top-0 right-0 z-[1] md:block"
        />
        {/* Hero Content */}
        <div className="flex flex-row justify-center items-start w-full h-[100vh] relative pt-10 md:pt-0 md:justify-start md:items-center">
          <div className="flex flex-col items-center text-center mt-[5rem] px-6 z-[3] md:text-start md:items-start md:px-0 lg:max-w-[40%]">
            <h4 className="font-rubik text-secondary text-base font-semibold sm:text-[1.4rem]">
              Plan your trip now
            </h4>
            <h1 className="font-poppins text-secondary font-bold text-[2.4rem] md:text-[3.2rem] leading-[1.3] mt-[0.6rem] mb-[1.5rem] max-w-full px-2 md:px-0 md:max-w-[50%] lg:max-w-full">
              Save<span className="mx-3 text-primary">big</span>
              with our car rental
            </h1>
            <p className="font-rubik text-[#706f7b] text-[0.87rem] md:text-[1rem] leading-[1.6] mb-[2.5rem] md:max-w-[46%] lg:max-w-full">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>

            <div className="flex flex-col items-center sm:flex-row gap-[1rem]">
              <a
                href="#"
                className="font-rubik font-bold text-[0.8rem] md:text-[1rem] text-white no-underline bg-primary border-2 border-primary rounded shadow-lg shadow-[#FF5330]/50 ease-in-out py-4 px-20 md:py-[1.1rem] md:px-[1.8rem]"
              >
                Book Ride &nbsp;
                <i className="fa-solid fa-circle-check"></i>
              </a>
              <a
                href="#"
                className="font-rubik font-bold text-[0.8rem] md:text-[1rem] text-white no-underline bg-secondary border-2 border-secondary rounded hover:bg-slate-50 hover:text-secondary ease-in-out py-4 px-20 md:py-[1.1rem] md:px-[1.8rem]"
              >
                Learn More &nbsp;
                <i className="fa-solid fa-angle-right"></i>
              </a>
            </div>
          </div>
          <img
            src={redGolf}
            alt="golf"
            className="hidden md:block absolute right-0 w-[65%] z-[2]"
          />
        </div>
      </div>
      <div
        onClick={scrollToTop}
        className={`${
          goUp ? "flex" : "hidden"
        } bg-primary border-white border-[3px] bottom-[3rem] text-white cursor-pointer text-4xl h-[2rem] p-[1.5rem] fixed right-[1rem] items-center w-4 z-20 justify-center`}
      >
        <i className="fa-solid fa-angle-up"></i>
      </div>
    </section>
  );
};

export default Hero;
