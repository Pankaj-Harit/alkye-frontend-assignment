import React from 'react'

function WorldComponent() {
    return (
        <div id='careerComponentId'>
            <div className='p-10'>
                <h6 className='text-2xl text-center'>
                    As a <span className='text-[#F36F2B]'>global business,</span> we encourage you to contact <br /> us no matter where you are located in the world.
                </h6>
                <p className='text-center mt-10'>Browse our job opportunities across the globe.</p>
                <p className='text-center mt-5 text-[#F36F2B]'>OPEN ROLES -+</p>
                <div className='text-center mt-10'>
                    <img src='./public/worldmap.png' className='w-full max-w-4xl mx-auto' alt='world map'/>
                </div>
            </div>
        </div>
    )
}

export default WorldComponent