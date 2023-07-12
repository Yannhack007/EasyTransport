import Image from 'next/image'
import F2 from "../../public/eclat.png"
import credit from "../../public/carte-de-credit.png"
import BUS from "../../public/bus.png"  
import H24 from "../../public/assistance-telephonique.png"
import dol from "../../public/cercle-de-piece-de-monnaie-dollar-avec-symbole.png"
import grow from "../../public/fleche-superieure-droite.png"
import ticket from "../../public/park-tickets-couple.png"
import BUCA from "../../public/buca.jpg"
import touristiaue from "../../public/touristique.jpg"
import mentravel from "../../public/mentravel-logo.png"
import VV from "../../public/CAA-Virtual-Voyage-GA-Summit-2021.jpg"
import Link from 'next/link'

const Home =()=>{
  return (
    <div className='md:flex bg-white h-[435vh]'>
      <div className="gauche ">
        <div className="affiche1 p-5 md:flex md:flex-col md:flex-1 md:relative">
          <span className='text-3xl font-bold text-orange md:text-6xl'>Travel Reservation Solution</span>
          <span className='text-xl md:text-4xl flex md:relative md:top-[4rem]'>We provide services <br />in the bus travel reservation</span>
          <div className='md:flex-row md:flex p-4 md:items-center md:relative md:top-[8rem]'>          
            <button className='left-[-2rem] md:left-[0rem] md:flex md:text-xl md:w-7rem md:h-3.2rem md:mr-5 w-2rem h-1rem text-xm relative '>
              Our Services
            </button>
            <Link href="#" className='left-[-1rem] md:left-[0rem] md:flex hover:text-orange duration-500 md:text-2xl relative'>Learn More</Link>
          </div>
        </div>
        <div className="affiche2 relative top-[-25rem]">
          <div className="21 flex flex-column absolute justify-center items-center gap-[1rem] w-[10rem] h-[13rem] left-[20rem] top-[35rem]">         
            <span className='carre w-[4rem] h-[4rem] opacity-70 bg-orangered absolute'></span>
            <Image src={credit} width={200} height={200} alt='' className='md:scale-[0.2] absolute'/>
            <span className='relative top-[4rem] text-2xl font-bold'>Easy Payment </span>
            <span className='absolute top-[12rem] left-[0.5rem]'>Mobile methods or credit card</span>
          </div>
          <div className="22 flex flex-column absolute justify-center items-center gap-[1rem] w-[12rem] h-[13rem] left-[2rem] top-[35rem]">
          <span className='carre w-[4rem] h-[4rem] opacity-70 bg-orangered absolute'></span>     
            <Image src={F2} width={200} height={200} alt='' className='md:scale-[0.2] absolute'/>
            <span className='relative top-[4rem] text-2xl font-bold'>Fast Reservation </span>
            <span className='absolute top-[12rem] left-[2rem]'>It's very simple!</span>
          </div>
        </div>
        <div className="affiche3 absolute items-center justify-center bg-black top-[150%]
        h-[50vh] w-[100%] text-white flex flex-column">
          <span className='flex absolute left-[5%] top-[20%] text-4xl font-bold'>Why EasyTransport is the <br />best in Africa </span>
          <span className="description absolute left-[5%] top-[60%] font-lighter">description</span>
          <span className="barre-blanche absolute left-[40%] h-[70%] w-[2px] bg-white"></span>
        </div>
        <div className="affiche4 absolute items-center flex justify-center bg-transparent top-[210%] w-[100%] h-[100vh]">
          <div className='Title absolute top-[7%] flex flex-col items-center justify-center'>
            <span className='text-5xl'>Your Time Is Saved Via Reservation Solutions</span>
            <span>description skmvdlskmlmdscklmdkmlkl</span>
          </div>
          <div className='car hover:bg-orange hover:text-white duration-500 absolute w-[35rem] h-[13rem] bg-transparent left-[3%] items-center top-[30%]'>
            <span className='icon absolute top-[2%] left-[2%]'><Image src={H24} width={70} height={70} alt=''/></span>
            <span className="title text-3xl font-bold absolute top-[10%] left-[25%]">24/7 Assistance</span>
            <span className="desc absolute top-[50%] left-[25%]"><p>absolueoklfmgkslmoerklfmdokerjfmdoiskaokmedokfg <br />rejk;jldsnmoklxmler;dsm,fplcx;',ple;fwd.sk,;'elf;dkas,.</p></span>
          </div>
          <div className='car hover:bg-orange hover:text-white duration-500 absolute w-[35rem] h-[13rem] bg-transparent left-[3%] top-[62.5%]'>
            <span className='absolute top-[2%] left-[2%]'><Image src={dol} width={70} height={70} alt=''/></span>
            <span className="title text-3xl font-bold absolute top-[10%] left-[25%]">High Quality Management System</span>
            <span className='desc absolute top-[50%] left-[25%]'><p>je ne sais sdlkmdslcvk,.mdsklmsdklkmkl <br />kldfmscklmfdkslx</p></span>
          </div>
        </div>
        <div className="affiche5 text-white absolute items-center flex bg-black top-[320%] w-[100%] h-[65vh]">
          <div className="title items-center justify-center flex absolute left-[45%] top-[5%] text-4xl font-bold">
            <span>Our Partners</span>
          </div>
          <div className='w-[20rem] h-[10rem]  left-[0%] absolute  items-center justify-center flex top-[20%] hover:bg-orange duration-500 car '>
             <Image src={mentravel} width={100} height={100} alt=''/>
          </div>
          <div className='w-[20rem] h-[10rem]  left-[25%] absolute items-center justify-center flex top-[20%] hover:bg-orange duration-500  car '>
              <Image src={VV} width={100} height={100} alt=''/>
          </div>
          <div className='w-[20rem] h-[10rem]  left-[0%] absolute  top-[60%] hover:bg-orange duration-500 car '></div>
          <div className='w-[20rem] h-[10rem]  left-[25%] absolute top-[60%] hover:bg-orange duration-500 car '></div> 
        </div>
        <div className="affiche6 absolute text-black flex bg-white w-[100%] h-[70vh] top-[400%]">
        <span className="barre bg-orange h-[100px] w-[10px] absolute left-[5%] top-[5%]"></span>
          <span className="title text-5xl font-bold relative left-[7%] top-[5%]">World Largest Travel Reservation <br /> Service Company</span>
        </div>
      </div>
      <div className="droite flex relative justify-between flex-1">
        <div className="affiche1 flex absolute md:top-[10rem] md:left-[-5rem]
        transition-all ease-in duration-500 top-[-13rem]">         
          <Image src={BUS} width={280} height={280} alt='' className='md:scale-[4]' id='bus'/>
        </div>
        <div className="affiche3 absolute items-center justify-center bg-transparent top-[34%]
        h-[45vh] w-[130%] left-[-38%] text-white flex flex-column">
          <div className="h31 absolute hover:bg-orange w-[45%] h-[85%] left-[1%] top-[-50%]">
            <span className="barre bg-orange duration-500 h-[40px] w-[4px] absolute left-[5%] top-[5%]"></span>
            <span className="titre text-3xl absolute left-[10%] top-[6%]">Safe Reservation</span>
            <span className="desc text-xl absolute left-[10%] top-[30%]">rl;f,mdserklmf,dsl;k,.efd;l,.m</span>
          </div>
          <div className="h32 flex flex-column absolute hover:bg-orange w-[45%] h-[85%] left-[50%] top-[-50%]">
            <span className="barre bg-orange duration-500 h-[40px] w-[4px] absolute left-[5%] top-[5%]"></span>
            <span className="titre text-3xl absolute left-[10%] top-[6%]">Secured</span>
            <span className="titre text-xl relative  left-[10%] top-[30%]">wgskjbmbxzbj,.dcfnewhk</span>
          </div>
        </div>
        <div className="affiche4">
          <div className='car hover:bg-orange hover:text-white absolute w-[40rem] h-[15rem] bg-transparent left-[-34%] top-[47.2%] duration-500'>
            <span className='absolute top-[2%] left-[2%]'><Image src={ticket} width={100} height={100} alt=''/></span>
            <span className="title text-3xl font-bold absolute top-[10%] left-[25%]">High Quality Management System</span>
            <span className='desc absolute top-[50%] left-[25%]'><p>je ne sais sdlkmdslcvk,.mdsklmsdklkmkl <br />kldfmscklmfdkslx</p></span>
          </div> 
          <div className='car hover:bg-orange hover:text-white absolute w-[40rem] h-[11rem] bg-transparent left-[-34%] top-[55.8%] duration-500'>
            <span className='absolute top-[2%] left-[2%]'><Image src={grow} width={100} height={100} alt=''/></span>
            <span className="title text-3xl font-bold absolute top-[10%] left-[25%]">High Quality Management System</span>
            <span className='desc absolute top-[50%] left-[25%]'><p>je ne sais sdlkmdslcvk,.mdsklmsdklkmkl <br />kldfmscklmfdkslx</p></span>
          </div>
        </div>
        <div className="affiche5">
          <div className='w-[20rem] h-[10rem] items-center justify-center flex left-[-25%] absolute top-[68%]  hover:bg-orange car '>
            <Image src={BUCA} width={100} height={100} alt=''/>
          </div>
          <div className='w-[20rem] h-[10rem] items-center justify-center flex left-[38%] absolute top-[68%]   hover:bg-orange car '>
            <Image src={touristiaue} width={100} height={100} alt=''/>
          </div>
          <div className='w-[20rem] h-[10rem]  left-[-25%] absolute top-[73.95%]  hover:bg-orange car '>
          </div>
          <div className='w-[20rem] h-[10rem]  left-[38%] absolute top-[73.95%]  hover:bg-orange car '>
          </div>
        </div>
        <div className="affiche6  h-[50vh]  absolute text-black items-center flex bg-white"></div>
      </div>
    </div>
  )
}

export default Home


