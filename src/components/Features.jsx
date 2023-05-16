import { features } from '../constants'

const Features = () => (
    <section id="features">
        <div className="max-w-[130rem] px-1 mt-[8rem] mx-auto">
            <div className="flex flex-col justify-center items-center mb-[10rem] px-6">
                <h2 className="font-rubik font-medium text-[1.5rem]">
                    Plan your trip now
                </h2>
                <h3 className="font-poppins font-bold text-[2.4rem] mt-4 mb-10 text-center">
                    Quick & easy car rental
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {features.map(feature => (
                        <div key={feature.id} className='flex flex-col justify-start items-center text-center mb-8 lg:mb-0'>
                            <img src={feature.img} alt="feature-icon" className=' w-44 h-44 object-contain mb-1'/>
                            <h2 className="font-rubik font-bold text-[1.5rem] mb-4">
                                {feature.title}
                            </h2>
                            <p className="font-rubik text-[#706f7b] text-[1rem] max-w-[60%] leading-5">
                                {feature.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )

export default Features