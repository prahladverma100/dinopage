import React from 'react'
import foter_img from '../assets/image/webp/foter_img.webp'
import { Discord1, Insta1, Tiwtter1 } from './Icon'

const Last_section = () => {
    return (
        <div className=' bg-[#0A4740] overflow_hidden relative lg:pt-32 mt-[-2px] pt-0'>
            <div className=' w-full absolute bottom-0'>
                <img className=' w-full ' src={foter_img} alt="" />
            </div>
            <div className='lg:pb-[267px] pb-20 ' data-aos="zoom-in-up">
                <h3 className='ff_lucky fw-normal text-center text-5xl lg:text-[76.64px] leading-[76.85px] drop-shadow-[0px_2.745px_0px_#000] mb-0 '> <span className='text-[#FBA11D]'>D</span><span className='text-[#23aaac]'>I</span><span className='text-[#d45b07]'>N</span><span className='text-[#8ec627] '>O</span><span className='text-[#8EC627]'>L</span><span className='text-[#FCCA2B]'>F</span><span className='text-[#8F78D2]'>G</span></h3>
                <p className=' ff_balsamiq font-normal text-sm leading-4 max-w-[376px] mx-auto text-center py-3 md:py-5 lg:py-[33px] text-white relative z-10'>Sed tempus pretium est, vestibulum dapibus mauris viverra id. Curabitur feugiat porta lorem,  </p>
                <div className=' z-10 relative flex gap-2 justify-center'>
                    <a className='cursor-pointer hover:scale-[1.2] ease-in-out duration-150' href="https://twitter.com/?lang=en">  <Tiwtter1 /></a>
                    <a className='cursor-pointer hover:scale-[1.2] ease-in-out duration-150' href="https://discord.com/channels/@me"><Discord1 /></a>
                    <a className='cursor-pointer hover:scale-[1.2] ease-in-out duration-150' href="https://www.instagram.com/accounts/login/"><Insta1 /></a>
                </div>
            </div>
        </div>
    )
}

export default Last_section