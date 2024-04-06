import React from 'react'

function ImageGalleryComponent() {
    return (
        <div id='imageComponentId'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 gallery justify-content-center auto-cols-fr lg:auto-rows-[max(450px)]">
                <div className="item">
                    <img className='h-auto max-w-full' src="./gallery/1.png" />
                </div>
                <div className="item">
                    <img className='h-auto max-w-full' src="./gallery/2.png" />
                </div>
                <div className="item lg:row-start-1 lg:col-start-3 lg:row-span-2 hidden lg:block">
                    <img className='h-auto max-w-full' src="./gallery/3.png" />
                </div>
                <div className="item lg:col-start-1 lg:row-start-2 lg:row-span-2 hidden lg:block">
                    <img className='h-auto max-w-full' src="./gallery/4.png" />
                </div>
                <div className='item p-10 lg:px-16 min-h-fit mt-10'>
                    <h5 className='text-4xl mb-5'>We celebrate <span className='text-[#F36F2B]'>success</span></h5>
                    <p className='text-sm'>At Case we understand that every achievement, big or small, is a result of the hard work and dedication of our team members. We take pride in
                        celebrating these moments because they underscore the commitment and effort put into each project.
                    </p>
                    <p className='mt-4 text-sm'>
                        Some of our favourite events on the calendar include our coveted Melbourne Cup event and our always amazing Christmas Party. In-between, our
                        team celebrate together during team cycling events, regular team dinners and social morning teas to celebrate milestones and special days. Taking the time to celebrate wins is our way of showing gratitude and ensuring everyone knows their efforts make a difference.
                    </p>
                </div>
                <div className="item lg:col-span-2">
                    <img className='h-auto max-w-full' src="./gallery/5.png" />
                </div>
                <div className='item lg:col-span-3'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 lg:place-items-center h-full'>
                        <div className='px-5 lg:px-10'>
                            <h5 className='text-4xl mb-5'>Employee <span className='text-[#F36F2B]'>Appreciation Program</span></h5>
                            <p className='text-base'>Our Employee Appreciation Program is tailored to honor the ongoing commitment and efforts of our long-serving team members. Our 5 Year Club
                                and 10 Year Club are special milestones within this program, celebrating employees who have dedicated half a decade or a full decade to our
                                company mission. Each year, members of these clubs are invited to annual events held at select, memorable locations, reflecting our gratitude and
                                recognition of their unwavering dedication. It's our way of saying thank you and ensuring that every significant chapter in our collective journey is
                                celebrated with the grandeur it deserves
                            </p>
                        </div>
                        <div>
                            <img src='./gallery/6.png' alt='Employee Appreciation Program' />
                        </div>
                    </div>
                </div>
                <div className="item lg:col-span-2">
                    <img className='h-auto max-w-full' src="./gallery/7.png" />
                </div>
                <div className="item">
                    <img className='h-auto max-w-full' src="./gallery/8.png" />
                </div>
            </div>
        </div>
    )
}

export default ImageGalleryComponent