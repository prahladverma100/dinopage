import React from 'react'
import aroplan1 from '../assets/image/webp/aroplane1.webp'
import roadmapline from '../assets/image/webp/roadmapline.webp'
import roadmap_tree from '../assets/image/webp/roadmap_tree.webp'
import roadmap_dino from '../assets/image/webp/roadmap_dino.webp'
import grass from '../assets/image/webp/grass.webp'

const Roadmap = () => {
    return (

        <div className=' bg-[#09655A] overflow_hidden' id='Roadmap'>
            <h3 className=' ff_chewy font-normal text-[42px]  sm:text-[50px] lg:text-[64px]leading-[83.63px] text-center text-white pt-12 lg:pb-24 md:pb-10 ' data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">Roadmap</h3>
            <div className='  lg:pl-[140px] container xl:max-w-[1400px] md:mx-auto mx-0 px-3 lg:pe-[240px] pb-10 md:pb-28 relative'>
                <div className="md:hidden block absolute left-[60px] top-[9%] bottom-[155px] sm:bottom-[110px] w-[15px] border-l-[11px] border-dashed border-[#0a4740]"></div>
                <img src={aroplan1} alt="" className=' max-w-[120px] top-[3px] left-[-0px] absolute md:hidden block' />
                <img src={roadmap_tree} alt="" className=' max-w-[100px] top-[23%] left-[1pxpx] absolute md:hidden block' />
                <img src={roadmap_dino} alt="" className=' max-w-[100px] top-[51%] left-[1pxpx] absolute md:hidden block' />
                <img src={grass} alt="" className=' max-w-[100px] bottom-[12%] left-[1pxpx] absolute md:hidden block' />
                <div className=' absolute top-0 bottom-0 md:block hidden px-3 left-0 xl:pl-[68px] right-0'>
                    <img className=' mt-[-30px]' src={roadmapline} alt="" />
                </div>
                <div className='pl-32 sm:pl-40 md:pl-0 pt-5'>
                    <div className=' flex md:flex-row justify-start flex-col  md:items-center relative z-10 md:pb-28 pb-0' data-aos="fade-right">
                        <h4 className=' ff_chewy font-normal text-[50px] md:text-[100px] lg:text-[120px] xl:text-[200px] box-shadow-[ 0px_18.41269874572754px_18.41269874572754px_0px_#00000040] text-[#FBA11D]'>01</h4>
                        <ol className=' list-disc md:ps-11'>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Launch $DINO & Website & Social Media.</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl md:py-4 py-1 leading-5 !list-disc'>Building the community.</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Marketing hase 1.</li>
                        </ol>

                    </div>
                </div>
                <div className='pl-32 sm:pl-40 md:pl-0 pt-9 md:pt-0'>
                    <div className=' flex md:items-center md:flex-row flex-col md:justify-center pl-0 md:pl-24 justify-start xl:pt-44 lg:pt-48 xl:mt-7 pt-0  md:pt-24 relative z-10' data-aos="fade-left">
                        <h4 className=' ff_chewy font-normal text-[50px] md:text-[100px] lg:text-[120px] xl:text-[200px] box-shadow-[ 0px_18.41269874572754px_18.41269874572754px_0px_#00000040] text-[#8EC627]'>02</h4>
                        <ol className=' list-disc md:ps-11'>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Launch $DINO & Website & Social Media.</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 md:py-4 py-1 !list-disc'>Building the community.</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Marketing hase 1.</li>
                        </ol>

                    </div>
                </div>
                <div className='pl-32 sm:pl-40 md:pl-0 pt-9 md:pt-0'>
                    <div className=' flex md:items-center md:flex-row flex-col  justify-center md:justify-start pb-0 md:pb-20 pt-0 md:pt-36 lg:pt-48 relative z-10' data-aos="fade-right">
                        <h4 className=' ff_chewy font-normal text-[50px] md:text-[100px] lg:text-[120px] xl:text-[200px] box-shadow-[ 0px_18.41269874572754px_18.41269874572754px_0px_#00000040] text-[#D45B07]'>03</h4>
                        <ol className=' list-disc md:ps-11'>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Utility and Usecase Introduction.</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 md:py-4 py-1 !list-disc'>CEX Listings</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Marketing Phase 3.</li>
                        </ol>
                    </div>
                </div>
                <div className='pl-32 sm:pl-40 md:pl-0 pt-9 md:pt-0'>
                    <div className=' flex md:items-center md:flex-row flex-col pt-0 justify-start md:justify-center lg:justify-center xl:justify-center md:pt-20 md:pb-40 lg:pt-60 xl:mt-2 relative z-10' data-aos="fade-left">
                        <h4 className=' ff_chewy font-normal text-[50px] md:text-[100px] lg:text-[120px] xl:text-[200px] box-shadow-[ 0px_18.41269874572754px_18.41269874572754px_0px_#00000040] text-[#23AAAC]'>04</h4>
                        <ol className=' list-disc md:pl-11'>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>staking Introduction</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 md:py-4 py-1 !list-disc'>DINO NFT collection</li>
                            <li className='ff_balsamiq font-normal text-white text-sm md:text-xl leading-5 !list-disc'>Marketing hase 4.</li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Roadmap