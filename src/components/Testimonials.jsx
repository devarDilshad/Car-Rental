import { poter, ron } from '../assets'

const Testimonials = () => (
    <section id='testimonials' className="bg-[#f8f8f8] py-[7rem] text-secondary">
        <div className='max-w-[130rem] mx-auto px-8'>
            <div className="flex flex-col justify-center items-center">
                {/* Title container */}
                <div className='text-center lg:max-w-[70%]'>
                    <h4 className="font-poppins text-xl font-semibold ">
                        Reviewed by People
                    </h4>
                    <h2 className="font-poppins text-[2.7rem] font-bold mb-5">
                        Client's Testimonials
                    </h2>
                    <p className='font-poppins text-[1rem] text-dimGrey'>
                        Discover the positive impact we've made on the our clients by reading through their testimonials. 
                        Our clients have experienced our service and results, 
                        and they're eager to share their positive experiences with you.
                    </p>
                </div>
                {/* Testimonials Card */}
                <div className="flex justify-between mt-[6rem] space-x-8">
                    {/* First Feedback */}
                    <div className="bg-white font-poppins text-secondary flex flex-col justify-between p-11 max-w-[32rem] drop-shadow-2xl">
                        <p className="text-[1.25rem] font-medium">
                            "We rented a car from this website and had an amazing experience! 
                            The booking was easy and the rental rates were very affordable. "
                        </p>
                        <div className="flex flex-row my-6 justify-between items-start">
                            <div className='flex justify-between'>
                                <img src={poter} alt="poter" className='w-[4.25rem] h-[4.25rem] object-contain rounded-full' />
                                <div className="flex flex-col justify-center items-start ml-4">
                                    <h4 className='font-bold text-lg'>
                                        Parry Kuro
                                    </h4>
                                    <p>
                                        Belgrade
                                    </p>
                                </div>
                            </div>
                            <span className='text-primary text-6xl hidden ss:block mr-4'>
                                <i className="fa-solid fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                    {/* Second Feedback */}
                    <div className="bg-white font-poppins text-secondary hidden flex-col justify-between p-11 max-w-[32rem] drop-shadow-2xl lg:flex">
                        <p className="text-[1.25rem] font-medium">
                        "The car was in great condition and made our trip even better. 
                        Highly recommend for this car rental website!"
                        </p>
                        <div className="flex flex-row my-6 justify-between items-start">
                            <div className='flex justify-between'>
                                <img src={ron} alt="ron" className='w-[4.25rem] h-[4.25rem] object-contain rounded-full' />
                                <div className="flex flex-col justify-center items-start ml-4">
                                    <h4 className='font-bold text-lg'>
                                        Ron Mavarick
                                    </h4>
                                    <p>
                                        Milan
                                    </p>
                                </div>
                            </div>
                            <span className='text-primary text-6xl hidden ss:block mr-4'>
                                <i className="fa-solid fa-quote-right"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )

export default Testimonials