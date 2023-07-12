import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import LOGO from "../public/logo.png"
import Menu from "../public/menu.png"
import F1 from "../public/Sans titre-1.png"

const Navbar = () => {
  return (
    
    <nav className='p-5 bg-whitesmoke shadow md:flex md:items-center md:justify-between'>
       
        <div className="flex justify-between items-center ">

            <Link href="/">
                <Image
                    src={LOGO}
                    width={150}
                    height={150}
                    alt='EasyTransport'
                />
            </Link>

            <div  className='cursor-pointer mx-2 md:hidden block' id='menuimg'>
                 <Image
                    src={Menu} 
                    width={30}
                    height={33}
                    alt='MenuButton'
                    
                />
            </div>
        </div>
        
        <div className='droite'>
            <div className="onglets">
            
                <ul className='md:flex md:intems-center z-[-1] md:z-auto md:static 
                absolute bg-whitesmoke w-full left-0 md:w-auto 
                md:py-0 py-4 md:pl-0 pl-7
                md:opacity-100 hidden top-[-400px] 
                transition-all ease-in duration-500' id='menu'>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href="/"  className='text-2xl text-hover font-bold  duration-500'>Home</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href="#" className='text-2xl text-hover duration-500'>About us</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href="#" className='text-2xl text-hover duration-500'>Services</Link>
                    </li>
                    <li className='mx-4 my-6 md:my-0'>
                        <Link href="/">
                            <button className='text-2xl'>Join us</button>
                        </Link>
                    </li>
                </ul>
            </div>
            
        </div>
    </nav>
  )
}

export default Navbar