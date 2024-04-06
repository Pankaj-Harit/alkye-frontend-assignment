import React, { useRef } from 'react'
import Slider from "react-slick";


function generateRandomFeedback() {
    const names = ['John Doe', 'Jane Doe', 'Alice Smith', 'Bob Johnson'];
    const messages = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Ut sodales turpis et lacinia fermentum.',
        'Curabitur vestibulum at arcu sed blandit.',
        'Fusce euismod libero ut eros tempus, id condimentum sapien vestibulum.',
        'Nulla facilisi. Aliquam id tempor lectus, et ultrices magna.',
        'Duis non libero tincidunt, suscipit augue sed, laoreet tortor.',
        'Phasellus auctor turpis in odio dictum, sit amet ultrices tortor congue.',
    ];

    const randomIndex = Math.floor(Math.random() * names.length);
    const name = names[randomIndex];
    const message = messages[Math.floor(Math.random() * messages.length)];

    return { name, message };
}

const RandomFeedback = () => {
    const { name, message } = generateRandomFeedback();

    return (
        <div className='flex flex-row text-white max-w-8xl mx-auto p-10 pt-0 lg:pt-10 relative justify-center'>
            <div>
                <img src='./feeback.png' className='w-48' alt='Feedback' />
            </div>
            <div className='pt-0 lg:p-10'>
                <div className='ps-5 lg:p-5'>
                    <p className={`relative before:absolute before:content-['\"'] before:text-[#F36F2B] before:text-4xl before:w-16 before:h-16 before:-top-5 before:-left-5 z-20`}>
                        {message}
                    </p>
                    <div className='mt-5'>
                        <p className=''>{name}</p>
                        <p>Feedback Title</p>
                    </div>
                    <div className='text-white mt-5 flex gap-2'>
                        <img src='./icons/whiterightarrow.png' className='w-6 h-6' alt='Right Arrow' />
                        <span className=''>Read my story</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeedBackComponent() {

    let sliderRef = useRef(null);

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
        <div className='bg-themecolor py-10 relative' id='peopleComponentId'>
            <Slider {...settings} ref={sliderRef} className=''>
                    {[1, 2, 3, 4, 5].map((data, index) => (<div key={"fee" + index}>{RandomFeedback()}</div>))}
            </Slider>
            <div className='absolute bottom-5 right-10 text-white flex gap-2 z-10'>
                <img src='./icons/leftarrow.png' className='w-10' onClick={previous} />
                <img src='./icons/rightarrow.png' className='w-10' onClick={next} />
            </div>
        </div>
    )
}




export default FeedBackComponent