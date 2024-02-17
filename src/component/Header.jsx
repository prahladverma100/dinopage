import React, { useState } from 'react'
import { Discord, Insta, Tiwtter } from './Icon';
import Hamburger from 'hamburger-react';
import aroplane from '../assets/image/webp/aroplane.webp'
import dinsorue from '../assets/image/webp/dinosorue.webp'
import dinosour1 from '../assets/image/webp/dinosour1.webp'
const Header = () => {
    const [isOpen, setOpen] = useState(false);
    const [Show, setShow] = useState(false);
    if (Show === true) {
        document.body.classList.add("max-md:overflow-hidden");
    }
    else {
        document.body.classList.remove("max-md:overflow-hidden");
    };
    return (
        <div className='bg_img bg-no-repeat overflow_hidden bg-cover bg-full bg-center lg:min-h-screen h-[796px] relative'>
            <img className=' absolute w-full lg:max-w-[131px] max-w-[100px] bottom-[17%] left-0 sm:left-[50%] animation_cortoon1' src={dinsorue} alt="" />
            <img className=' absolute bottom-[8%] right-[7%] w-full lg:max-w-[190px] max-w-[150px] animation_cortoon' src={dinosour1} alt="" />
            <div
                className=' mx-auto px-3 max-w-[1133px] pt-7'>
                <nav className=' bg-white flex justify-between py-[15px] ps-6 pe-2 items-center  rounded-[61px] border-b-[4px] border-black'>
                    <div className=' relative z-30 cursor-pointer'>
                        <h5 className='ff_lucky font-normal text-[39px] mb-0 leading-[37px]' data-aos="fade-left"><span className=' text-[#FBA11D]'>D</span><span className=' text-[#23aaac]'>i</span><span className='text-[#d45b07]'>n</span><span className='text-[#8ec627]'>o</span><span className='text-[#fcca2b]'>L</span><span className='text-[#8f78d2]'>F</span><span className='text-[#23aaac]'>G</span></h5>
                    </div>
                    <ul className={`flex  justify-center gap-[16px] ${Show ? "left-0" : "left-[-100%]"} h-full max-lg:w-full bg-white flex-col lg:flex-row top-0 text-center z-20    items-center duration-500 fixed lg:static`}>
                        <li><a href="#About" onClick={() => { setShow(false); setOpen(false) }} className="ff_chewy  font-normal text-lg  text-black leading-6 relative after:absolute after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 "> About</a></li>
                        <li><a href="#Tokenomics" onClick={() => { setShow(false); setOpen(false) }} className=" ff_chewy font-normal text-lg  text-black leading-6 relative after:absolute after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 "> Tokenomic</a>  </li>
                        <li><a href="#Roadmap" onClick={() => { setShow(false); setOpen(false) }} className=" ff_chewy font-normal text-lg  text-black leading-6 relative after:absolute after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 ">Roadmap</a></li>
                        <li><a href="#FAQ" onClick={() => { setShow(false); setOpen(false) }} className=" ff_chewy font-normal text-lg  text-black leading-6 relative after:absolute after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 after:ease-linear hover:after:w-full after:bottom-0 after:start-0 ">FAQ</a></li>
                        <div className=" lg:hidden block">
                            <button className=' hover:text-white transition-all duration-300 ease-linear  btn_img bg-no-repeat bg-cover bg-center px-8 pt-[11px] pb-[19px] ff_chewy text-lg leading-6  font-normal rounded-none'>Join Now</button>
                        </div>
                    </ul>
                    <div className=' items-center lg:block hidden gap1'>
                        <span className=' d-flex gap-2 flex items-center'>
                            <a className='cursor-pointer hover:scale-[1.2] ease-in-out duration-150' href="https://twitter.com/?lang=en">  <Tiwtter /></a>
                            <a className='cursor-pointer hover:scale-[1.2] ease-in-out duration-150' href="https://discord.com/channels/@me"><Discord /></a>
                            <a className='cursor-pointer hover:scale-[1.2] ease-in-out duration-150' href="https://www.instagram.com/accounts/login/"><Insta /></a>
                            <button className='hover:text-white transition-all duration-300 ease-linear btn_img bg-no-repeat bg-cover bg-center px-8 pt-[11px] pb-[19px] ff_chewy text-lg leading-6  font-normal rounded-none'>Join Now</button>
                        </span>
                    </div>
                    <div className="z-30 lg:hidden " onClick={() => setShow(!Show)}>
                        <button className="{show?} text-[black]">
                            <Hamburger toggled={isOpen} toggle={setOpen} />
                        </button>
                    </div>
                </nav>
                <div className=' lg:flex-row flex pt-2 md:pt-14 lg:pt-[83px] flex-col-reverse' id='About'>
                    <div className=' w-full lg:w-5/12'>
                        <div className=' ps-5'>
                            <img className=' w-full lg:max-w-[394px] md:max-w-[300px] max-w-[270px] aroplane' src={aroplane} alt="" />
                        </div>
                    </div>
                    <div className='w-full lg:w-7/12'>
                        <h1 className='ff_lucky fw-normal text-center lg:text-[175.64px] md:text-[120.64px] text-[67.64px] sm:text-[120.64px] leading-[143.85px] drop-shadow-[0px_6px_0px_#000] mb-0 ' data-aos="fade-left"> <span className='text-[#FBA11D]'>D</span><span className='text-[#23aaac]'>I</span><span className='text-[#d45b07]'>N</span><span className='text-[#8ec627] '>O</span><br /><span className='text-[#8EC627]'>L</span><span className='text-[#FCCA2B]'>F</span><span className='text-[#8F78D2]'>G</span></h1>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Header