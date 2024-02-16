import React from 'react'
import dinosorue2 from '../assets/image/webp/dinosorue2.webp'
import dinosour1 from '../assets/image/webp/dinosour1.webp'
import tree_g from '../assets/image/webp/tree_g.webp'
import layer2 from '../assets/image/webp/layer2.webp'
import usecase_bottom_img from '../assets/image/webp/usecase_bottom_img.webp'

const Utility_usecas = () => {
  return (
    <div className='overflow_hidden'>
      <div className=' bg-[#0A4740]  relative pb-40'>
        <img className=' w-full top-0 ' src={layer2} alt="" />
        <div className=' w-full'>
          <img className=' bottom-[-2px] absolute w-full' src={usecase_bottom_img} alt="" /></div>
        <img className=' absolute right-0 bottom-[22%] ' src={tree_g} alt="" />
        <div className=' px-3 lg:pb-40 md:pb-14 pb-0'>
          <p className=' ff_chewy font-normal text-center text-[46px] lg:text-[64px] leading-[83.63px] pt-0 text-white lg:pb-28 md:mb-16 mb-0' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">Utility and Usecase</p>
          <div className=' max-w-[1014px] md:flex-row flex-col ps-3 lg:ps-10 lg:pe-6 pe-3 w-full  mx-auto flex justify-between border-[#fff] rounded-[20px] border-[1px]  bg-[#09655A] relative z-10' data-aos="fade-right">
            <div>
              <p className=' max-w-[681px ] ff_balsamiq font-normal text-white text-xl lg:text-[32px] pt-4 md:pt-[60px] leading-[38.4px]'>We are going to work hard in otder to add $DINO to main platforms as a form of payment
              </p>
              <p className=' max-w-[681px ] ff_balsamiq font-normal text-white text-xl lg:text-[32px] md:pt-7 pt-1 leading-[38.4px]'> You will be able to buy a lot of things with $DINO</p>
            </div>
            <img className=' md:max-w-[255px] max-w-[200px] w-full md:mt-[-55px]' src={dinosour1} alt="" />
          </div>
          <div className=' max-w-[1014px] md:pe-[27px] pe-2 w-full md:flex-row flex-col mt-[125px] items-center  mx-auto flex justify-between border-[#fff] rounded-[20px] border-[1px] bg-[#09655A] relative z-10' data-aos="fade-left">
            <img className='md:max-w-[267px] max-w-[200px] w-full mt-[-85px] ms-[-3px]' src={dinosorue2} alt="" />
            <div>
              <p className=' lg:max-w-[681px] ff_balsamiq flex md:text-end text-start md:pl-4 pl-2 font-normal text-white text-xl lg:text-[32px] md:pt-[60px] leading-[38.4px]'>We are going to have staking and buyback/burning mechanism
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Utility_usecas