import React from "react";
import faq_img from '../assets/image/webp/faq_img.png'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
        <svg className={`${id === open ? "rotate-180" : ""} h-[36px] w-[36px] bg-[white] rounded-full transition-transform`} width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="18" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 36 36)" fill="white" />
            <path d="M12.2857 14L18 19.625L23.7143 14L26 15.125L18 23L10 15.125L12.2857 14Z" fill="#0A4740" />
        </svg>
    );
}

export function Faq() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <div className=" overflow-hidden bg-[#0A4740] overflow_hidden relative lg:pb-32 pb-10 md:pb-28" id="FAQ">
            <img className=" absolute top-[-2px] w-full" src={faq_img} alt="" />
            <h3 className=" ff_chewy font-normal text-white text-[42px]  sm:text-[50px] lg:text-[64px] leading-[83.63px] text-center lg:pb-[60px] md:pb-10 pb-5 lg:pt-40 md:pt-20 mt-24" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">FAQs</h3>
            <div className=" container mx-auto px-4 max-w-[801px] gap-[26px] flex flex-col" data-aos="fade-up"
                data-aos-duration="3000">
                <Accordion className=" border-[#FFFFFF] border-[1px] md:ps-14 ps-4 md:pt-[29px] pt-4 md:pb-[26px] pb-4  md:pe-[53px] pe-4 bg-[#09655A]  rounded-[42px] flex justify-between flex-col" open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader className=" ff_balsamiq font-bold md:text-xl text-base text-start leading-6 text-white" onClick={() => handleOpen(1)}>Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                    <AccordionBody>
                        <p className=" ff_balsamiq font-normal text-white md:text-xl text-base pt-4  ">  Wre not always in the position that we want to be at.e constantly
                            growing.re constantly making mistakes. Were constantly trying to express
                            ourselves and actualize our dreams.</p>
                    </AccordionBody>
                </Accordion>
                <Accordion className=" border-[#FFFFFF] bg-[#09655A] border-[1px] md:ps-14 ps-4 md:pt-[29px] pt-4 md:pb-[26px] pb-4  md:pe-[53px] pe-4 rounded-[42px] flex justify-between flex-col" open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader className=" ff_balsamiq font-bold md:text-xl text-base leading-6 text-start text-white" onClick={() => handleOpen(2)}>Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                    <AccordionBody>
                        <p className=" ff_balsamiq font-normal text-white md:text-xl text-base pt-4 ">  Wre not always in the position that we want to be at.e constantly
                            growing.re constantly making mistakes. Were constantly trying to express
                            ourselves and actualize our dreams.</p>
                    </AccordionBody>
                </Accordion>
                <Accordion className=" border-[#FFFFFF] bg-[#09655A] border-[1px] md:ps-14 ps-4 md:pt-[29px] pt-4 md:pb-[26px] pb-4  md:pe-[53px] pe-4 rounded-[42px] flex justify-between flex-col" open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader className=" ff_balsamiq font-bold md:text-xl text-base leading-6 text-start text-white" onClick={() => handleOpen(3)}>Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                    <AccordionBody>
                        <p className=" ff_balsamiq font-normal text-white md:text-xl text-base pt-4  ">  Wre not always in the position that we want to be at.e constantly
                            growing.re constantly making mistakes. Were constantly trying to express
                            ourselves and actualize our dreams.</p>
                    </AccordionBody>
                </Accordion>
                <Accordion className=" border-[#FFFFFF] bg-[#09655A] border-[1px] md:ps-14 ps-4 md:pt-[29px] pt-4 md:pb-[26px] pb-4  md:pe-[53px] pe-4 rounded-[42px] flex justify-between flex-col" open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader className=" ff_balsamiq font-bold md:text-xl text-base leading-6 text-start text-white" onClick={() => handleOpen(4)}>Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                    <AccordionBody>
                        <p className=" ff_balsamiq font-normal text-white md:text-xl text-base pt-4  ">  Wre not always in the position that we want to be at.e constantly
                            growing.re constantly making mistakes. Were constantly trying to express
                            ourselves and actualize our dreams.</p>
                    </AccordionBody>
                </Accordion>
                <Accordion className=" border-[#FFFFFF] bg-[#09655A] border-[1px] md:ps-14 ps-4 md:pt-[29px] pt-4 md:pb-[26px] pb-4  md:pe-[53px] pe-4 rounded-[42px] flex justify-between flex-col" open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader className=" ff_balsamiq font-bold md:text-xl text-base leading-6 text-start text-white" onClick={() => handleOpen(5)}>Maecenas laoreet, sapien vel cursus ultricies?</AccordionHeader>
                    <AccordionBody>
                        <p className=" ff_balsamiq font-normal text-white md:text-xl text-base pt-4  ">  Wre not always in the position that we want to be at.e constantly
                            growing.re constantly making mistakes. Were constantly trying to express
                            ourselves and actualize our dreams.</p>
                    </AccordionBody>
                </Accordion>

            </div>
        </div>
    );
}
export default Faq