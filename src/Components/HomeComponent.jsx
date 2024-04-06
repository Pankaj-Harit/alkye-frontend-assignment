import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";

function HomeComponent() {
    let sliderRef = useRef(null);



    useEffect(() => {

        const targetDiv = document.querySelector('.header-container');
        const homecomponent = document.getElementById('homecomponent');

        const observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    targetDiv.classList.remove("hide");
                } else {                    
                    targetDiv.classList.add("hide");
                }

            });

        });

        if (sliderRef.current) {
            observer.observe(homecomponent);
        }
        return () => {
            observer.disconnect();
        }
    }, [])



    const next = () => {
        sliderRef.current.slickNext();
    };
    const previous = () => {
        debugger
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        lazyLoad: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true,
    };
    return (
        <div className='relative' id='homecomponent'>
            <div className="slider-container">
                <Slider {...settings} ref={sliderRef} className=''>
                    <div className='h-screen relative'>
                        <div className="absolute w-full h-screen z-[-1] bg-cover bg-center" style={{ backgroundImage: "url(./HomePageBackground.png)" }}></div>
                        <div className='absolute bottom-32 left-10 text-white'>
                            <p className='text-sm'>Home / Why work with us</p>
                            <h5 className='text-4xl'>Headline #1</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                    <div className='h-screen relative'>
                        <div className="absolute w-full h-screen z-[-1] bg-cover bg-center" style={{ backgroundImage: "url(https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060)" }}></div>
                        <div className='absolute bottom-32 left-10 text-white'>
                            <p className='text-sm'>Home / Second section</p>
                            <h5 className='text-4xl'>Headline #2</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>

                </Slider>

                <div className='absolute bottom-10 right-10 text-white flex gap-2 z-10'>
                    <img src='./icons/leftarrow.png' className='w-10' onClick={previous} />
                    <img src='./icons/rightarrow.png' className='w-10' onClick={next} />
                </div>
            </div>
        </div >
    )
}

export default HomeComponent