import React from 'react'

function InfoComponent() {
    return (
        <div className='grid  grid-cols-1 lg:grid-cols-2 lg:min-h-screen ' id='infoComponentId'>
            <div className='h-fit pb-5'>
                <h3 className='text-5xl p-10'>We <span className='text-[#F36F2B]'>stay connected</span></h3>
                <ul className=''>
                    <li className='flex space-x-5 my-10 p-10 py-0'>
                        <img className='w-[30px] h-[30px] inline-block ' src='./icons/3.png' />
                        <div className='firstInfobox '>
                            <h6 className='font-bold'>Quarterly Business Updates</h6>
                            <p className='mt-5'>We strive to stay connected as a team through communication and collaboration. This materialises every quarter through our Quarterly Business Update events. These gatherings are immersive sessions where every team
                                member, regardless of rank or tenure, comes together to contribute to our overarching business strategy, and stay connected. They are opportunities to learn from our seasoned leaders and to also share personal insights and achievements that can steer our collective future. In an ever-evolving engineering landscape, staying connected isn’t just a benefit—it’s essential.</p>
                        </div>
                    </li>
                    <li className='flex space-x-5 mt-10 p-10 py-0'>
                        <img className='w-[30px] h-[30px] inline-block ' src='./icons/2.png' />
                        <div>
                            <h6 className='font-bold'>Quarterly Business Updates</h6>
                        </div>
                    </li>
                    <li className='flex space-x-5 mt-10 p-10 py-0'>
                        <img className='w-[30px] h-[30px] inline-block ' src='./icons/1.png' />
                        <div>
                            <h6 className='font-bold'>Quarterly Business Updates</h6>
                            <p className=''></p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='relative'>
                <div className="absolute inset-0 bg-cover z-[-1]" style={{ backgroundImage: "url(./second.png)" }}></div>
            </div>
        </div>
    )
}

export default InfoComponent