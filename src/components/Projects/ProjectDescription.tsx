import React, { useRef } from 'react';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  description: string;
  title: string;
  visit?: string;
}

export const Modal = ({ isOpen, onClose, videoUrl, description, title, visit }: ModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <div
      className={` fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
    >
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div
        className={`bg-[#202020] text-white rounded-md w-full md:max-w-3xl lg:max-w-4xl max-w-2xl p-8 transform transition-all duration-300 ${isOpen ? 'scale-100' : 'scale-90'
          }`}
      >
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-3/5">
            <video className="w-full h-auto md:max-h-96 mb-6" ref={videoRef} src={videoUrl} controls />
            <div className="">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
          <div className="w-full md:w-2/5 md:pl-6">
            <div className="md:flex md:flex-col md:justify-center md:h-full">
              <div className="md:hidden mb-4">
              </div>
              {
                visit &&
                <a
                className='md:w-full'
                 href={visit}
                 target='_blank'>
                <button
                  className="mt-6 bg-gray-800 mr-2 md:mr-0 md:w-full text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-700 focus:outline-none"
  
                >
                  Visite
                </button>
                </a>
              }
              <button
                className="mt-6 bg-gray-800 mr-2 md:mr-0 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-700 focus:outline-none"
                onClick={handleClose}
              >
                Código
              </button>
              <button
                className="mt-6 bg-gray-800 text-white py-2 px-4 rounded-md text-sm font-semibold hover:bg-gray-700 focus:outline-none"
                onClick={handleClose}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
