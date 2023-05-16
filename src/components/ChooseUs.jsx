import { main } from '../assets'
import { services } from '../constants'

const ChooseUs = () => (
    <section id='choose_us'>
        <div className='max-w-[130rem] my-[1rem] mx-auto px-[2.5rem]'>
            <div className="flex flex-col gap-4">
                <img src={main} alt="car_fleet" className='mx-auto h-auto w-[90%]' />
                <div className='flex flex-col items-center text-center gap-10 lg:flex-row lg:items-start lg:text-start'>
                    <div className='flex flex-col mb-12 lg:mb-0 lg:max-w-[50%] lg:px-12 lg:mx-12'>
                        <h4 className="font-rubik font-bold text-xl text-secondary mb-[0.47rem]">
                            Why Choose Us
                        </h4>
                        <h2 className='font-rubik font-bold text-[2.7rem] text-secondary mb-[1rem]'>
                            Best valued deals you will ever find
                        </h2>
                        <p className="font-rubik text-[1rem] text-dimGrey mb-[2rem]">
                            Discover the best deals you'll ever find with our unbeatable offers. 
                            We're dedicated to providing you with the best value for your money, 
                            so you can enjoy top-quality services and products without breaking the bank. 
                            Our deals are designed to give you the ultimate renting experience, 
                            so don't miss out on your chance to save big.
                        </p>
                        <div className='bg-primary text-white text-center py-4 px-8 rounded-sm cursor-pointer max-w-[12rem] mx-auto lg:mx-0'>
                            <a href="#" className='font-bold'>
                                Find Details 
                                <i className="fa-solid fa-angle-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[4rem] max-w-[34rem] lg:max-w-[44rem]">
                        {services.map((service, index) => (
                            <div key={service.id} className='flex flex-col ss:flex-row items-center'>
                                <img src={service.img} alt="service" className='h-[6rem] w-[6rem] mr-4 object-contain overflow-clip' />
                                <div className='flex flex-col gap-1 items-center lg:text-left lg:items-start'>
                                    <h4 className="font-poppins text-black text-2xl font-bold my-1 sm:my-0">
                                        {service.title}
                                    </h4>
                                    <p className='font-rubik text-dimGrey text-base w-3/4 leading-6'>
                                        {service.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )


export default ChooseUs