import { useEffect } from "react"
import Aos from "aos"
import 'aos/dist/aos.css'
import emailjs from '@emailjs/browser';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useToast } from '@chakra-ui/react'

export function Contacts() {
    const toast = useToast({
        title: 'Mensagem eviada com sucesso!',
        description: "Em breve entrarei em contato",
        status: 'success',
        duration: 3000,
        isClosable: true,
    })
    useEffect(() => {
        Aos.init({ duration: 500, easing: "ease-out" })
    })
    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('gmailMessage', 'template_661aaee', e.target, '9VJYRY9AWwHbH7N7r')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        toast()
    };
    return (
<div id="contacts" className="w-full md:w-screen md:max-w-full">
  <div className="md:max-w-[1140px] md:mx-auto">
    <div className="text-white mt-10 text-4xl mb-10 w-full flex justify-start  py-2 pl-20 font-bold">
      Fale comigo!
    </div>
    <div className="flex flex-col md:flex-row w-full">
    <form
  onSubmit={(e) => sendEmail(e)}
  data-aos="fade-left"
  className="w-full md:w-1/2 flex flex-col gap-3 items-center py-10 text-zinc-300"
>
  <input
    name="name"
    className="bg-black border border-[#313030] px-5 w-full md:w-3/4 rounded-full h-10 focus:outline-none"
    placeholder="Seu nome"
    required
    type="text"
  />
  <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-2">
    <input
      name="email"
      className="bg-black border px-5 border-[#313030] w-full md:w-1/2 rounded-full h-10 mt-2 md:mt-0 focus:outline-none"
      required
      type="email"
      placeholder="Seu email"
    />
    <input
      name="phone"
      className="bg-black border px-5 border-[#313030] w-full md:w-1/2 rounded-full h-10 mt-2 md:mt-0 focus:outline-none"
      required
      type="tel"
      placeholder="Seu telefone"
    />
  </div>
  <textarea
    name="message"
    className="bg-black border px-5 pb-56 max-w-full border-[#313030] w-full md:w-3/4 rounded-3xl placeholder:pt-2 h-72 mt-2 resize-none focus:outline-none"
    required
    placeholder="Digite sua mensagem"
  ></textarea>
  <button className="bg-black text-white text-xl py-2 hover:shadow-2xl hover:bg-[#70F700] hover:shadow-[#70F700] hover:duration-300 px-4 rounded-full mt-2">
    Enviar
  </button>
</form>

      <div data-aos="fade-right" className="w-full md:w-1/2 h-[30rem] mt-10 md:mt-0">
        <LazyLoadImage
          width={300}
          className="w-full h-full object-cover"
          height={200}
          src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
    </div>
  </div>
</div>

    )
}