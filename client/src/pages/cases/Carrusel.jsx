import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';



function Carrusel ({ children,
  autoSlide = false,
  autoSlideInterval = 3000,}) {


const slides = [
    {
      url: 'https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/12/05154106/Autos-mas-vendidos-Argentina-Ford-Focus.jpg',
    },
    {
      url: 'https://blog.karvi.com.ar/wp-content/uploads/2020/11/Emgrand-GS.jpg',
    },
    {
      url: 'https://cdn.motor1.com/images/mgl/Mk3qz6/s3/renault-12-tl-de-1994-en-la-planta-de-santa-isabel-cordoba.-ph-renault-argentina..jpg',
    },

    {
      url: 'https://fotos.perfil.com/2020/05/29/nueva-generacion-ford-ranger-963962.jpg',
    },
    {
      url: 'https://fotos.perfil.com/2022/06/08/fiat-scudo-1368738.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);    
  };

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(nextSlide, autoSlideInterval)
    return () => clearInterval(slideInterval)
  },)

  return (
    <div className=' p-4'>

    <div className='max-w-[1280px] lg:h-[720px] h-[320px] md:h-[640px] sm:h-[420px] w-full m-auto py-12 px-4 relative group' /*max-w-[1280px] h-[720px] w-full m-auto py-12 px-4 relative group */>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
        {children}
      </div>
    </div>
    </div>
  );
}

export default Carrusel