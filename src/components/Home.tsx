import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillGithub, AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function HomeComponent() {
  useEffect(() => {
    Aos.init({ duration: 500, easing: "ease-out" });
  });

  return (
    <div
      id="#"
      className="overflow-hidden md:mt-0 mt-20 w-full flex items-center justify-center h-[800px] bg-[#121111]"
    >
      <div className="max-w-[1140px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="md:flex items-center justify-between">
          <div className="md:w-1/2">
            <p className="texto-digitado font-bold text-4xl md:text-5xl lg:text-6xl text-white">
              Olá, sou Deyvid Tavares
            </p>
            <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4">
              Desenvolvedor Front-end
            </p>
            <p className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#70F700] mb-5">
              Conecte-se comigo
            </p>
            <div className="font-bold flex gap-3 text-4xl md:text-5xl lg:text-6xl text-white">
              <a 
              className="relative hover:scale-150 hover:duration-500"
              href="https://github.com/DevDeyvidTav" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
              <a 
              className="relative hover:scale-150 hover:duration-500"
              href="https://linkedin.com/in/deyvid-tavares-37918b236" target="_blank" rel="noopener noreferrer">
                <TiSocialLinkedinCircular />
              </a>
              <a
              className="relative hover:scale-150 hover:duration-500"
              href="https://api.whatsapp.com/send?phone=5581997210434" target="_blank" rel="noopener noreferrer">
                <AiOutlineWhatsApp />
              </a>
              <a 
              className="relative hover:scale-150 hover:duration-500"
              href="https://instagram.com/deyvid_tavar" target="_blank" rel="noopener noreferrer">
                <AiOutlineInstagram />
              </a>
            </div>
            <a
              href="/Cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-lg md:text-xl lg:text-2xl mt-10 hover:scale-90 hover:transition-all hover:ease-in-out3333 hover:duration-500 hover:bg-transparent hover:border-white border-2 hover:text-white border-transparent  bg-[#70F700] px-8 md:px-12 py-4 rounded-full inline-block"
            >
              Veja meu currículo
            </a>
          </div>
          <div className="md:w-1/2  mt-10 md:mt-0">
            <img
              className="mx-auto md:mx-0"
              src="/pc.png"
              alt=""
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-duration="800"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
