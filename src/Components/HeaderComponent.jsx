import React, { useState } from 'react'



function HeaderComponent() {
    const [menuOption, setMenuOption] = useState(false);
    return (
        <header className='fixed z-40 top-0 header-container w-full'>
            <a className='relative lg:absolute lg:top-[50%] lg:left-[50%] lg:-translate-x-2/4 lg:-translate-y-2/4 w-16 z-20' href=''><img src='./Logo.png' /></a>
            <a className='absolute top-10 p-5 right-5 block lg:hidden z-50'><img src={!menuOption ? './menu.png' : './cross.png'} className='w-8' onClick={() => setMenuOption(!menuOption)}/></a>
            <div className={`mx-auto ${ menuOption ? "block" : "hidden" } flex-col lg:flex-row lg:flex items-center w-screen relative pt-0  lg:pt-10 pb-10 px-10 border-b-2`}>
                <ul className='flex flex-col lg:flex-row gap-2 lg:gap-9 lg:items-center '>
                    <li><a onClick={()=> setMenuOption(!menuOption)} href='' className='uppercase'>Projects</a></li>
                    <li><a onClick={()=> setMenuOption(!menuOption)} href='#infoComponentId'  className='uppercase'>Expertise</a></li>
                    <li><a onClick={()=> setMenuOption(!menuOption)} href='#bridgeComponentId' className='uppercase'>About Us</a></li>
                    <li><a onClick={()=> setMenuOption(!menuOption)} href='#peopleComponentId' className='uppercase'>People</a></li>
                </ul>
                
                <ul className='flex flex-col lg:flex-row gap-2 lg:gap-9 lg:justify-end flex-1'>
                    <li><a onClick={()=> setMenuOption(!menuOption)} href='#careerComponentId' className='uppercase'>Careers</a></li>
                    <li><a onClick={()=> setMenuOption(!menuOption)} href='#footer' className='uppercase'>Au</a></li>
                </ul>
            </div>
        </header>
    )
}

export default HeaderComponent