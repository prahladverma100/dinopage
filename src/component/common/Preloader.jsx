import React from 'react'
function Preloader() {
    setTimeout(() => {
        document.getElementById("none").classList.add("hidden");
        document.body.classList.remove("overflow_hidden");
    }, 3000);

    return (
        <div>
            <div id="none" className="h-screen w-full bg-[#C2E8FF]  fixed top-0 start-0  z-40">
                <div className="flex justify-center items-center h-screen">
                    <div className=' animate-bounce relative'>
                        <h5 className='ff_lucky font-normal text-[60px] lg:text-[90px] xl:text-[120px] mb-0 leading-[37px]'><span className=' text-[#FBA11D]'>D</span><span className=' text-[#23aaac]'>i</span><span className='text-[#d45b07]'>n</span><span className='text-[#8ec627]'>o</span><span className='text-[#fcca2b]'>L</span><span className='text-[#8f78d2]'>F</span><span className='text-[#23aaac]'>G</span></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Preloader