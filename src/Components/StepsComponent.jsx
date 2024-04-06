import React from 'react'

function StepsComponent() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3' id='stepscomponent'>
            <div className='bg-themecolor text-white pt-5 p-10 ps-10 border-b-2 md:border-r-2 border-black relative'>
                <div>
                    <header className='mb-3 text-gray-400 text-xl'>01</header>
                    <p>We stay connected</p>
                </div>
                <div className='absolute bottom-5 right-5 text-white'>
                    <a href='#infoComponentId'>
                        <img src='./icons/whiterightarrow.png' className='w-10' />
                    </a>
                </div>
            </div>
            <div className='bg-themecolor text-white pt-5 p-10 ps-10 border-b-2 md:border-r-2 border-black relative'>
                <div>
                    <header className='mb-3 text-gray-400 text-xl'>02</header>
                    <p>We believe in diversity & inclusion</p>
                </div>
                <div className='absolute bottom-5 right-5 text-white'>
                    <a href='#bridgeComponentId'>
                        <img src='./icons/whiterightarrow.png' className='w-10' />
                    </a>
                </div>
            </div>
            <div className='bg-themecolor text-white pt-5 p-10 ps-10 border-b-2 md:border-r-2 border-black relative'>
                <div>
                    <header className='mb-3 text-gray-400 text-xl'>03</header>
                    <p>We celebrate success</p>
                </div>
                <div className='absolute bottom-5 right-5 text-white'>
                    <a href='#imageComponentId'>
                        <img src='./icons/whiterightarrow.png' className='w-10' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StepsComponent