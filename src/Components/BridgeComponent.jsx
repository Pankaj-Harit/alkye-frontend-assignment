import React from 'react'

function BridgeComponent() {
  return (
    <div className='bg-themecolor pt-10' id='bridgeComponentId'>
      <div className='grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto text-white p-10'>
        <div className=''>
          <h5 className='text-4xl'>
            We believe in <span className='text-[#F36F2B]'>diversity &  <br />inclusion</span>
          </h5>
        </div>
        <div>
          <div className='lg:pe-10 pt-10 lg:pt-0'>
            <p>
              At CaSE we do not just accept difference — we celebrate it, we support it, and we thrive on it for the benefit of our employees, our services, our industry and our community. We are proud to be an equal opportunity
              employer. Guided by our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them.
            </p>
            <p className='mt-10'>Our values and beliefs, we foster an inclusive workplace culture where employees thrive because of their differences, not in spite of them Our Commitment to reinventing the standard. With more than 20 nationalities represented in our global workforce, we firmly believe that our ability to deliver high-quality results is fueled by our active efforts to embed diversity and inclusion. We recognise, respect, and strive to create an environment where employees can excel and feel a true sense of belonging.</p>
            <p className='font-bold mt-10'>
              Some of our strategic initiatives include:
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src='./bridgepic.png' alt='bridge phto' className='w-full'/>
      </div>
    </div>
  )
}

export default BridgeComponent