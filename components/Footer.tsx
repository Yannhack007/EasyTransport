import React from 'react'
import Image from 'next/image'
import playstore from "../public/google_play.png"
import Link from 'next/link'
import facebook from "../public/facebook.png"
import linked from "../public/linkedin.png"
import github from "../public/github.png"
import tweet from "../public/twitter.png"

const Footer = () => {
  return (
    <div className='bg-black text-white flex h-[70vh]'>
      <div className="gauche">
        <div className="g1 relative top-[10%] h-[80%] left-[10%] flex flex-col">
          <span className="logo">logoblanc</span>
          <span className="descfoot relative top-[20%] text-xl flex flex-row">With our worldwide inclusion,strong <br /> travel organization and industry</span>
          <span className='text-2xl absolute font-bold top-[60%]'>Suscribe to our Newsletter</span>
          <input type="email" className='absolute h-[3rem] w-[15rem] top-[70%]' name="newsEmail" placeholder='Enter your email' id="" />
          <button className='send absolute top-[70%] left-[80%] h-[3rem] w-[3rem] items-center justify-center flex font-bold hover:text-black'>send</button>
          <span className='w-[400%] left-[-10%] h-[2px] bg-white absolute top-[90%]'></span>
          <div className="social-network flex flex-row gap-3 top-[75%] relative">
            <span>
              <Link href="www.facebook.com"><Image src={facebook} width={40} height={40} alt=''/></Link>
            </span>
            <span>
              <Link href="www.linkedin.com"><Image src={linked} width={40} height={40} alt=''/></Link>
            </span>
            <span>
              <Link href="www.github.com"><Image src={github} width={40} height={40} alt=''/></Link>                          
            </span>
            <span>
              <Link href="www.twitter.com"><Image src={tweet} width={40} height={40} alt=''/></Link>                        
            </span>
          </div>
        </div>
        <div className="g2 relative top-[-70%] h-[80%] left-[130%] flex flex-col">
          <span className='text-orange text-4xl font-bold'>Contact Us</span>
          <span className='text-xl relative top-[15%]'>(+237)654-062-523</span>
          <span className='text-xl relative top-[20%]'>yannbiko@gmail.com</span>
        </div>
      </div>
      <div className="droite">
        <div className="d1 relative left-[110%] top-[10%] flex flex-col h-[80%]">
          <span className='text-4xl text-orange font-bold'>Download our App</span>
          <Link href="www.google.com"  className='relative top-[15%] items-center justify-center'><Image src={playstore} width={256} height={256} alt=''/></Link>
        </div>
        <div className="d2 relative top-[10%] left-[150%]">
          <span>Designed & Developped by <b>Yann Biko</b></span>
        </div>
      </div>
    </div>
  )
}

export default Footer