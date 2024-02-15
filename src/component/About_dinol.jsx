import React from 'react'
import cartoon from '../assets/image/webp/cartoon.webp'
import tree from '../assets/image/webp/tree.webp'

const About_dinol = () => {
    return (
        <div className=' relative bg-[#09655A] z-[2]    '>
            <img className=' right-0 lg:bottom-[-22%] bottom-[-14%] lg:max-w-[300px]  max-w-[200px] w-full absolute z-[-1]' src={cartoon} alt="" />
            <img className=' left-0 lg:bottom-[-25%] bottom-[-14%] lg:max-w-[207px] max-w-[120px] w-full absolute z-[-1]' src={tree} alt="" />
            <div className=' px-3 lg:pt-[76px] pt-0 pb-4' data-aos="zoom-in">
                <h3 className='text-center lg:text-[64px] text-4xl leading-[83.63px] lg:pb-[42px] pb-0 font-normal text-white ff_chewy'>About <span className='ff_lucky fw-normal lg:text-[69.67px] text-4xl leading-[66.19px]  drop-shadow-[0px_2.800px_0px_#fff]'><span className='text-[#FBA11D]'>D</span><span className='text-[#23aaac]'>I</span><span className='text-[#d45b07]'>N</span><span className='text-[#8ec627]'>O</span><span className='text-[#8EC627]'>L</span><span className='text-[#FCCA2B]'>F</span><span className='text-[#8F78D2]'>G</span></span></h3>
                <p className='ff_balsamiq font-normal lg:text-2xl md:text-base text-sm leading-7  text-white text-center max-w-[]'>  is a meme coin with very strong utility.</p>
                <p className='ff_balsamiq font-normal lg:text-2xl md:text-base text-sm leading-7 text-white text-center lg:pt-[18px] pt-1 lg:pb-[10px] pb-1 max-w-[560px] mx-auto'>Biggest problem of meme coins is lack of utility and usecase, <span className='text-[#8EC627]'>$</span><span className='text-[#FBA11D]'>D</span><span className='text-[#23AAAC]'>I</span><span className='text-[#D45B07]'>N</span><span className='text-[#FB5352]'>O</span> is going to fix it.</p>
                <p className='ff_balsamiq font-normal lg:text-2xl md:text-base text-sm leading-7 text-white text-center max-w-[522px] mx-auto'>We want to bring a lot of usecases and utility to  holders, just $DINO sit back and relax.</p>
                <p className='ff_balsamiq font-normal lg:text-2xl md:text-base text-sm leading-7 text-white text-center max-w-[599px] pt-3 mx-auto'>In $DINO, we want to build a very strong community, that’s why we are going to have a lot of games and crypto tips in our Telegram and Twitter.</p>
            </div>
        </div>
    )
}

export default About_dinol