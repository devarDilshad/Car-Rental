import { footerLinks } from "../constants";

const FirstFooterCol = () => (
  <div className="flex flex-col text-secondary text-center sm:text-left">
    <h4 className="font-poppins font-bold text-3xl mb-6">
      CAR <span className="font-normal"> Rental </span>
    </h4>
    <p className="font-poppins text-dimGrey text-lg mb-6">
      We offers a big range of vehicles for all your driving needs. We have the
      perfect car to meet your needs.
    </p>
    <ul className="space-y-1">
      <li>
        <a
          href="tel:123456789"
          className="hover:text-primary font-rubik font-bold"
        >
          <i className="fa-solid fa-phone mr-1"></i> (123) -456-789
        </a>
      </li>
      <li>
        <a
          href="mailto: carrental@gmail.com"
          className="hover:text-primary font-rubik font-bold"
        >
          <i className="fa-solid fa-envelope mr-1"></i> carrental@gmail.com
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/devar-dilshad-81196a24a"
          className="hover:text-primary font-poppins font-light text-sm"
          target="_blank"
        >
          Developed by Devar.Dev
        </a>
      </li>
    </ul>
  </div>
);

const SecondFooterCol = () => (
  <div className="flex flex-col text-center sm:text-left">
    <ul className="font-poppins text-secondary list-none">
      <h4 className="font-bold text-[1.75rem] mb-3">COMPANY</h4>
      {footerLinks.map((link, index) => (
        <li key={index} className="mb-[0.8rem]">
          <a href={link.link} className=" hover:text-primary">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const ThirdFooterCol = () => (
  <div className="flex flex-col text-center sm:text-left">
    <ul className="font-poppins text-secondary list-none">
      <li className="font-bold text-[2rem] mb-3">WORKING HOURS</li>
      <li className="mb-[0.8rem]">Mon - Fri: 9:00AM - 9:00PM</li>
      <li className="mb-[0.8rem]">Sat: 9:00AM - 19:00PM</li>
      <li className="mb-[0.8rem]">Sun: Closed</li>
    </ul>
  </div>
);

const FourthFooterCol = () => (
  <div className="flex flex-col text-center sm:text-left">
    <ul className="font-poppins text-secondary list-none">
      <li className="font-bold text-[2rem] mb-3"> SUBSCRIPTION </li>
      <li className="mb-[0.8rem]"> <p> Subscribe your Email address for latest news & updates. </p> </li>
      <li className="mb-[0.8rem]"> <input type="email" placeholder="Enter Email Address" className="bg-[#ececec] border-transparent border-[1px] font-rubik text-sm font-normal leading-8 mt-4 outline-none py-[10px] px-[60px] w-full"/> </li>
      <li className="mb-[0.8rem]"> <button type="submit" className="bg-primary border-primary border-[2px] rounded[0.25rem] text-white cursor-pointer font-bold py-4 px-8 no-underline w-full shadow-md shadow-primary/60"> Submit </button> </li>
    </ul>
  </div>
);

const Footer = () => (
  <section id="footer" className="bg-white font-poppins py-10">
    {/* Container */}
    <div className="max-w-[130rem] mx-auto px-[2.5rem]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-4 mm:px-12 gap-10">
        <FirstFooterCol />
        <SecondFooterCol />
        <ThirdFooterCol />
        <FourthFooterCol />
      </div>
    </div>
  </section>
);

export default Footer;
