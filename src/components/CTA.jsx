import { appstore, googleapp } from '../assets'

const CTA = () => (
    <section className="bg-[#f8f8f8] w-full h-auto py-[5rem] cta-bg mb-10">
        {/* Container */}
        <div className='max-w-[130rem] mx-auto px-10'>
            <div className="flex flex-col md:max-w-[45rem] md:px-12 gap-5 text-center sm:text-left pb-10">
                <h2 className='font-poppins font-bold text-[2.5rem] sm:text-[2.8rem] tracking-wide'>
                    Download our app to get most out of it
                </h2>
                <p className="font-rubik font-normal text-gray-500 leading-6 text-sm sm:text-base">
                    Thrown shy denote ten ladies though ask saw. Or by to he going think order event music. 
                    Incommode so intention defective at convinced. Led income months itself and houses you.
                </p>
                <div className="flex flex-col mm:flex-row gap-6 justify-center items-center sm:justify-start sm:items-start">
                    <a href="https://play.google.com/store/games?hl=en&gl=US&pli=1" target='_blank'>
                        <img src={googleapp} alt="playstore" className='w-[14rem] h-16 object-contain' />
                    </a>
                    <a href='https://www.apple.com/app-store/' target='_blank'>
                        <img src={appstore} alt="appstore" className='w-[14rem] h-16 object-contain' />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )


export default CTA