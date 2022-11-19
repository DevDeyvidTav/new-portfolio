import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';

export function Contacts() {
    useEffect(() => {
        Aos.init({duration: 2000, easing:"ease-out"})
    })
    const sendEmail = (e:any) => {
        e.preventDefault();
    
        emailjs.sendForm('gmailMessage', 'template_661aaee', e.target, '9VJYRY9AWwHbH7N7r')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <div className="w-[700px] md:w-screen md:max-w-full">
            <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start bg-gradient-to-r from-black to-[#121111] py-2 pl-20 font-bold">
                Talk to me
            </div>
            <div className="flex w-full">
                <form 
                onSubmit={(e) => sendEmail(e)}
                data-aos="fade-left" className="w-[90%] md:w-1/2 flex flex-col gap-3 items-center py-10 text-zinc-300 h-[32rem]">
                    <input name="name" className="bg-black border border-[#313030] px-5 w-[70%] rounded-full h-10" placeholder="Your Name" required type="text" />
                    <div className="flex w-[70%] gap-2">
                        <input name="email" className="bg-black border px-5 border-[#313030] w-1/2 rounded-full h-10" required type="email" placeholder="Email" />
                        <input name="phone" className="bg-black border px-5 border-[#313030] w-1/2 rounded-full h-10" required type="number" placeholder="Phone number" />
                    </div>
                    <input name="message" className="bg-black border px-5 pb-56 max-w-full border-[#313030] w-[70%] rounded-3xl h-72" required type="message" placeholder="Enter your message"/>
                    <button className="bg-black text-white text-xl hover:shadow-2xl hover:bg-[#70F700] hover:shadow-[#70F700] hover:duration-300 px-4 rounded-xl">Submit</button>
                </form>
                <img data-aos="fade-right" src="https://images.unsplash.com/photo-1604933762161-67313106146c?ixlib=rb-
                4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                 alt="" 
                 className=" md:w-[40%] hidden md:flex h-[32rem] py-10 rounded-md"
                 />
                <div>

                </div>
            </div>
        </div>
    )
}