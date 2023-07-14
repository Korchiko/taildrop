import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

function App() {
  const slides = [
    
    {
      url: "https://images.unsplash.com/photo-1630048938504-bcca67d3f584?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",

      altTitle: "Akıllı Mercek",
      title:
        "50 yaş üstünde takılır ve ömür boyu gözde kalır. Sizi yakın ve uzak gözlükten kurtarır.",
        
        
    },
    {
      url: "https://images.unsplash.com/photo-1544126547-4c657414c37b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      altTitle: "Sarı Nokta Hastalığı",
      title:
        "Kuru ve yaş tip olmak üzere ikiye ayrılır ve artık tedavi edilebilir bir hastalıktır.",
    
    },
    {
      url: "https://images.unsplash.com/photo-1529259491550-3eeaa2780bfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      altTitle: "Diabet",
      title:
        "Mutlaka göze vurur ama iyi bir tedavi ve takiple tamamen tedavi edilebilir.",
    
    },
    {
      url: "https://images.unsplash.com/photo-1557585580-cdf0764d8393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      altTitle: "Gözde Sinek Uçuşması",
      title:
        "Gözde sinek uçuşması ve şimşek çakması varsa retina da yırtık olabilir. Bu acil bir durumdur.",
       
    },
    {
      url: "https://images.unsplash.com/photo-1516307318288-46d4194fe79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      altTitle: "Glokom",
      title:
        "Hiçbir belirti vermeden sizi kör edebilir. Erken teşhis ve damla ile çoğu tedavi edilebilir.",
       
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              slideIndex === currentIndex ? "opacity-80" : "opacity-0"
            }`}
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center text-white font-normal">
              <div className="px-4 text-start pb-8">
              <Link to={slide.link}className="text-6xl font-bold">{slide.altTitle}</Link>
                <div className="pt-12 text-start text-2xl ">{slide.title}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isHovered && (
        <>
          <BsChevronCompactLeft
            className="absolute top-1/2 -translate-y-1/2 left-5 text-4xl rounded-full  text-white cursor-pointer hover:bg-gray-800 transition-colors"
            onClick={prevSlide}
          />
          <BsChevronCompactRight
            className="absolute top-1/2 -translate-y-1/2 right-5 text-4xl rounded-full  text-white cursor-pointer hover:bg-gray-800 transition-colors"
            onClick={nextSlide}
          />
        </>
      )}
    </div>
  );
}

export default App;