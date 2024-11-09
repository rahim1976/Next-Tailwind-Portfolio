import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact: React.FC = () => {
    return (
        <div id='contact' className='pt-32 container'>
            <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-8">
                    <h2 className="text-5xl" data-aos="zoom-in-up">Get In Touch</h2>
                    <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
                        Drop Me A Line, Give Me A Call OR Leave Me A Message
                    </p>
                    
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiOutlineMail size={30} className="text-white"/>
                        <a href="mailto:xyz@gmail.com" className="text-white hover:underline">
                            rahimali@gmail.com
                        </a>
                    </div>
                    
                    <div className="flex gap-3 items-center" data-aos="zoom-in-up">
                        <AiOutlinePhone size={30} className="text-white"/>
                        <a href="tel:+123334444666" className="text-white hover:underline">
                            (+1) 569-4444666
                        </a>
                    </div>
                
                </div>

                <div className="space-y-8">
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            className='h-[40px] bg-transparent border border-blue-600' 
                            id='name' 
                        />
                    </div>
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            className='h-[40px] bg-transparent border border-blue-600' 
                            id='email' 
                        />
                    </div>
                    <div className="flex flex-col gap-1" data-aos="zoom-in-up">
                        <label htmlFor="msg">Message</label>
                        <textarea 
                            className='bg-transparent border border-blue-600' 
                            id='msg' 
                            rows={8}
                        ></textarea>
                    </div>
                    <button className="bg-blue-600 p-2 px-6 text-white" data-aos="zoom-in-up">Send</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
