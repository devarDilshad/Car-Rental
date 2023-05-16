import { useState } from 'react'
import { accordionData } from '../constants'


const Accordion = ({title, content }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex flex-col lg:w-[50rem]">
      {/* heading */}
      <div onClick={()=>setIsActive(!isActive)} className={`flex flex-row justify-between items-center font-poppins font-bold text-lg cursor-pointer py-5 px-11 transition-all ease-linear duration-150 ${ isActive ?'bg-primary text-white shadow-2xl shadow-primary' : ''}`}>
        <p>
            {title}
        </p>
        <i className={`fa-solid font-black ${isActive?'fa-angle-up':'fa-angle-down'}`}></i>
      </div>
      {/* content */}
      {isActive && (
        <div className="font-rubik overflow-hidden font-normal bg-white text-base text-dimGrey cursor-pointer py-7 px-9">
          {content}
        </div>
      )}
    </div>
  );
};


const FAQ = () => {
  return (
    <section id='faq' className='faq-bg'>
        <div className='max-w-[130rem] mx-auto px-[2.5rem]'>
            {/* FAQ Text Content */}
            <div className="flex flex-col justify-center items-center">
                <div className='text-center lg:max-w-[70%]'>
                    <h4 className="font-poppins text-xl font-semibold ">
                        FAQ
                    </h4>
                    <h2 className="font-poppins text-[2.7rem] font-bold mb-5">
                        Frequently Asked Questions
                    </h2>
                    <p className='font-poppins text-[1rem] text-dimGrey max-w-[50rem]'>
                        Frequently Asked Questions About the Car Rental Booking Process on Our Website: 
                        Answers to Common Concerns and Inquiries.
                    </p>
                </div>
                {/* Dropdown List Container */}
                <div className='flex flex-col items-center mt-24 shadow-2xl bg-white'>
                    {/* accordion item container */}
                    {accordionData.map((accordion, index) => (
                        <Accordion key={accordion.id} title={accordion.title} content={accordion.content} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FAQ