import React from 'react'

function FooterComponent() {
    return (
        <div className='bg-black text-white p-10 ps-0 pb-2' id='footer'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-collapse '>
                <div className='p-10 pt-5 lg:border lg:border-t-0 lg:border-l-0 border-gray-700'>
                    <img src='./footerlogo.png' />
                    <img src='./socialicons.png' />
                </div>
                <div className='p-5 pt-5 lg:border lg:border-t-0 border-gray-700'>
                    <ul>
                        <li className='font-bold text-xl mb-3'>Expertise</li>
                        <li className='text-sm mb-2'>Design</li>
                        <li className='text-sm mb-2'>Specialist Expertise</li>
                        <li className='text-sm mb-2'>Commercial Advice</li>
                        <li className='text-sm mb-2'>Traffic & Transport</li>
                    </ul>
                </div>
                <div className='p-5 lg:border lg:border-t-0 lg:border-l-0 border-gray-700'>
                    <ul>
                        <li className='font-bold text-xl mb-3'>Sectors</li>
                        <li className='text-sm mb-2'>Road</li>
                        <li className='text-sm mb-2'>Tunner</li>
                        <li className='text-sm mb-2'>Bridge</li>
                        <li className='text-sm mb-2'>Others +</li>
                    </ul>
                </div>
                <div className='p-5 lg:border lg:border-t-0 lg:border-l-0 border-gray-700'>
                    <ul>
                        <li className='font-bold text-xl mb-3'>Our Business</li>
                        <li className='text-sm mb-2'>Work With Us</li>
                        <li className='text-sm mb-2'>Projects</li>
                        <li className='text-sm mb-2'>News</li>
                    </ul>
                </div>
                <div className='p-5 lg:border lg:border-t-0 lg:border-l-0 lg:border-r-0 border-gray-700'>
                    <ul>
                        <li className='font-bold text-xl mb-3' >Our Capabilities</li>
                        <li className='text-sm mb-2'>Engineers</li>
                        <li className='text-sm mb-2'>Contact</li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-between flex-col gap-2 md:flex-row p-2'>
                <div>
                    <p>© 2021 Case International. All right reserved.</p>
                </div>
                <div className='flex gap-2'>
                    <p>Terms & Condition</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default FooterComponent