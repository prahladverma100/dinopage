import React from 'react'
import layer from '../assets/image/webp/layer.webp'
import Tokenomics_img from '../assets/image/webp/tokenomice_img.webp'
import layer1 from '../assets/image/webp/layer1.webp'
import token from '../assets/image/webp/tocken.webp'
import tokennomic_layer from '../assets/image/webp/tokennomic_layer.webp'
import dinotree from '../assets/image/webp/dinotree.webp'
import tree1 from '../assets/image/webp/tree1.webp'
import tree2 from '../assets/image/webp/tree2.webp'
import tree3 from '../assets/image/webp/tree3.webp'
import grass from '../assets/image/webp/grass.webp'
import tokenomice_top_layer from '../assets/image/webp/tokenomice_top_layer.webp'

const Tokenomics = () => {
    return (
        <div className=' relative bg-[#0A4740] overflow_hidden pb-80' id='Tokenomics'>
            <div className=' w-full'>
                <img className=' absolute bottom-0 w-full' src={tokennomic_layer} alt="" />
            </div>
            <img className=' absolute bottom-0 lg:bottom-[4%] w-full left-[21%] max-w-[64px]' src={grass} alt="" />
            <img className=' absolute top-[12%] right-0 ' src={layer} alt="" />
            <img className='absolute bottom-0 w-full lg:max-w-[375px] md:max-w-[280px] max-w-[180px]' src={dinotree} alt="" />
            <img className=' w-full top-[-1px] absolute ' src={tokenomice_top_layer} alt="" />
            <img className=' lg:bottom-[6%] md:bottom-[0%] hidden sm:block bottom-[0%] absolute left-[33%]' src={tree1} alt="" />
            <img className=' bottom-[1%] absolute md:max-w-[194px]  w-full max-w-[120px] right-[10%]' src={tree3} alt="" />
            <img className=' bottom-[2%] w-full max-w-[81px] hidden sm:block absolute right-[33%]' src={tree2} alt="" />
            <div className='mx-auto px-3 max-w-[1133px] xl:pt-[276px]  lg:pt-32 pt-20'>
                <p className=' ff_chewy font-normal text-center text-[50px] lg:text-[64px] leading-[83.64px] lg:pb-20 pb-0 text-white' data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000">Tokenomics</p>
                <div className='flex justify-center pt-16 lg:pb-20 pb-0'>
                    <div className=' relative' data-aos="zoom-in">
                        <img className='absolute md:top-[-7%] lg:top-[-21%]  top-[-7%] left-[40%] sm:left-[40%]  w-[20%] sm:max-w-[133px]' src={Tokenomics_img} alt="" />
                        <img className='  absolute sm:top-[0] top-0 left-[28%] sm:max-w-[252px]: w-[42%]' src={layer1} alt="" />
                        <img className=' w-full max-w-[589px] ' src={token} alt="" />
                        <div className=' absolute top-[12%] lg:left-[-32%] xl:left-[-40%] hidden lg:flex'>
                            <div>
                                <p className=' ff_balsamiq font-normal xl:text-[32px] lg:text-[25px] leading-[38.4px] text-[#FBA11D]'>333,333,333</p>
                                <p className='ff_balsamiq font-normal text-2xl leading-[33.24px] text-white text-right'>Supply</p>
                            </div>
                            <div className=' border-[#D1D1D1] ms-3 mt-2 border-[1.48px] w-[15px] border-b-0 border-r-0  skew-y-[0deg] border-solid h-[88px]'></div>
                        </div>
                        <div className=' absolute bottom-[-10%] left-[-29%] hidden lg:flex'>
                            <div>
                                <p className=' ff_balsamiq font-normal text-[32px] leading-[38.4px] text-[#23AAAC] text-right'>95% Uniswa</p>
                                <p className='ff_balsamiq font-normal text-[32px] leading-[38.4px] text-[#23AAAC]'>5% Marketing</p>
                                <p className='ff_balsamiq font-normal text-2xl leading-[33.24px] text-white text-right'>Allocation</p>
                            </div>
                            <div className=' border-[#D1D1D1] ms-5 mt-2 border-[1.48px] w-[13px] border-b-0 border-r-0  skew-y-[-45deg] border-solid h-[102px]'></div>
                        </div>
                        <div className=' absolute bottom-[-34%] hidden lg:block left-[40%]'>
                            <div className=' bg-[#D1D1D1] w-[1px] h-[43px] ms-12'></div>
                            <p className='ff_balsamiq font-normal pt-2 text-[32px] leading-[38.4px] text-[#D45B07]'>No Tax</p>
                        </div>
                        <div className=' absolute bottom-[-12%] right-[-31%] hidden lg:flex'>
                            <div className=' border-[#D1D1D1] ms-5 mt-2 border-[1.48px] w-[13px] border-b-0 border-l-0  skew-y-[45deg] border-solid h-[102px]'></div>
                            <div>
                                <p className=' ff_balsamiq pt-9 font-normal ms-4 text-[32px] leading-[38.4px] text-[#FB5352]'>No Mint Function</p>
                            </div>
                        </div>
                        <div className=' absolute top-[8%] right-[-38%] hidden lg:flex'>
                            <div className=' border-[#D1D1D1] ms-5 mt-2 border-[1.48px] w-[13px] border-b-0 border-l-0  skew-y-[0deg] border-solid h-[88px]'></div>
                            <div>
                                <p className=' ff_balsamiq pt-4 font-normal ms-4 xl:text-[32px] lg:text-[25px] leading-[38.4px] max-w-[190px] text-[#8EC627]'>Liquidity lock for 1 year</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex items-center pt-5'>
                            <div className=' h-[50px] w-[50px] bg-[#FBA11D] '></div>
                            <div className='pl-3'>
                                <p className=' ff_balsamiq font-normal lg:text-[32px] text-[21px] leading-[38.4px] text-[#FBA11D]'>333,333,333</p>
                                <p className='ff_balsamiq font-normal text-2xl leading-[33.24px] text-white '>Supply</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex flex-row items-center'>
                            <div className=' h-[50px] w-[50px]  bg-[#23AAAC]'></div>
                            <div className='pl-3'>
                                <p className=' ff_balsamiq font-normal lg:text-[32px] text-[21px] leading-[38.4px] text-[#23AAAC] '>95% Uniswa 5% Marketing</p>
                                <p className='ff_balsamiq font-normal text-2xl leading-[33.24px] text-white '>Allocation</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex items-center'>
                            <div className=' h-[50px] w-[50px] bg-[#FBA11D]'></div>
                            <div className=' pl-3'>
                                <p className=' ff_balsamiq font-normal lg:text-[32px] text-[21px] leading-[38.4px] text-[#FBA11D]'>333,333,333</p>
                                <p className='ff_balsamiq font-normal text-2xl leading-[33.24px] text-white '>Supply</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex items-center'>
                            <div className=' h-[50px] w-[50px] bg-[#D45B07]'></div>
                            <div className=' pl-3'>
                                <p className='ff_balsamiq font-normal  lg:text-[32px] text-[21px] leading-[38.4px] text-[#D45B07]'>No Tax</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex items-center'>
                            <div className=' h-[50px] w-[50px] bg-[#FB5352] my-3'></div>
                            <div className=' pl-3'>
                                <p className=' ff_balsamiq  font-normal lg:text-[32px] text-[21px] leading-[38.4px] text-[#FB5352]'>No Mint Function</p>
                            </div>
                        </div>
                        <div className=' lg:hidden flex items-center '>
                            <div className=' h-[50px] w-[50px] bg-[#8EC627] '></div>
                            <div className=' pl-3'>
                                <p className=' ff_balsamiq  font-normal  lg:text-[32px] text-[21px] leading-[38.4px] text-[#8EC627]'>Liquidity lock for 1 year</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tokenomics