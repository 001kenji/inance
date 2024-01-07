import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'

import { FaCircleChevronLeft } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { RiDoubleQuotesL } from "react-icons/ri"; //facing right quotes
import { RiDoubleQuotesR } from "react-icons/ri"; // lest facing quote
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

// footer sect icon
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { TfiYoutube } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import RepairImg from './assets/mechanic.png'
import imporoveImg from './assets/improve.png'
import maintainImg from './assets/maintenance.png'
import aboutImg from './assets/images/about-img.jpg'
import plumbingImg from './assets/images/s3.png'
import electricImg from './assets/images/s2.png'
import mainainImg from './assets/images/s1.png'
function App() {
  const [count, setCount] = useState(0)
  const [shownav, setShownav] = useState(false)
  const [clientScroll, setClientScroll] = useState(0)
  const [showScroller, setShowScroller] = useState(true)
  const [navScroller,setnavScroller] = useState(0)

  const {register, handleSubmit, formState} = useForm({
    defaultValues:{
      name : '',
      number : "",
      email :'',
      mesage :''
    },
    mode :'all'
  })
  const {errors, isDirty, isSubmitting} = formState
  function NavFunc(props) {

    if(props == 'show'){
      setShownav(true)
      setnavScroller(1)
    }else if(props == 'hide'){
      setShownav(false)
      setnavScroller(0)
    }
  }


  useEffect(() => {
    window.innerWidth >1023 ? setShownav(true) :''
  },[])

  window.onresize = function() {
    window.innerWidth >1023 ? setShownav(true) :''
  }

  const navstyler = {
    height : shownav ? window.innerWidth <= 1023 ?'180px' : '50px' : '0px',
    opacity : shownav ? '100' : '0'
  }

  const clientDB = [
    {
      img : '',
      name :'Jorch Moric',
      rate : 4,
      description : 'My experience with INANCE was absolutely first-rate! From the initial scheduling call to the completion of the repairs, everything was professional, efficient, and clear'
    },
    {
      img : '',
      name :'Mattin Morem',
      rate : 3,
      description : 'I\'ve used several repair companies before, but INANCE truly stands out. They took the time to understand my concerns and tailor their approach to my specific needs'
    },
    {
      img : '',
      name :'Clack Kent',
      rate : 5,
      description : 'INANCE went above and beyond my expectations! Not only did they fix the problem with my [appliance/system] quickly and effectively, but they also identified and addressed a potential future issue I wasn\'t even aware of. Their proactive approach saved me time and money in the long run'
    },
    {
      img : '',
      name :'Lex Pere',
      rate : 4,
      description : 'INANCE was friendly, communicative, and even cleaned up their work area before leaving. This company truly values customer satisfaction, and I couldn\'t be happier with their service. A++!'
    }

  ] 
   function ClientFunc(props) {
    if(props == 'left'){
      setClientScroll((e) => e == 0 ? clientDB.length -1  : e -1 )
    }else if(props == 'right'){
      setClientScroll((e) => e ==  clientDB.length -1 ? 0 : e +1 )
    }
  }

  function StarOne(props) {
    var DataImg = []
   for(var x = 1; x <= props.rate; x++){
    
    var Img = x
    DataImg.push(Img)
  
   }
   
   
   var mapdataimg = DataImg.map((item) => <CiStar className=' md:text-3xl text-center text-lg  text-yellow-500' /> )
   return(mapdataimg)
  }
  const clientMapper = clientDB.map((details) =>
      <div className=' shadow-lg shadow-slate-700 border-[1px] border-slate-200 rounded-sm' id='mapping-client-div'>
        <div className=' flex flex-col gap-3 align-middle text-center justify-center w-full'>
          <img className=' rounded-full border-[1px] max-w-[100px] mx-auto mt-2 min-w-[100px] min-h-[100px]' src={details.img} alt="" />
          <big className=' md:text-2xl text-center font-semibold text-xl'>{details.name}</big>
          <span className=' mx-auto flex flex-row gap-1'>{ <StarOne rate={details.rate} /> }</span>
        </div>
        <div className=' text-center  flex my-2'>
          <blockquote className=' md:text-lg mx-auto text-center text-slate-600 font-mono px-1 '>{details.description}</blockquote>
        </div>
      </div>)

const date = new Date()
const year = date.getFullYear()
window.addEventListener('scroll', function() {
  console.log('scrolled')
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    setShowScroller(true)
  } else {
    setShowScroller(false)
  }
})
const ToTopStyler ={
  display : showScroller ? 'flex' : 'none'
}

  return (
   <>
   {/* navbar section */}
   
   <div id='universal-nav-div'>
    <div className=' bg-slate-900' id='top-nav-div'>
      <span className='text-xs md:mx-auto md:text-base font-semibold  text-slate-50'><MdOutlineLocalPhone className=' md:text-2xl text-lg text-orange-600' /><p>Call: +254 7123456789</p></span>
      <span className='text-xs md:text-base font-semibold text-slate-50'><BiLogoGmail className=' md:text-2xl text-lg text-orange-600' /> <p>Email : yahoo@inance.com</p></span>
    </div>
    <div className=' bg-opacity-70 bg-cyan-300' id='botton-nav-div'>
      <div className='lg:w-[50%]   flex flex-row justify-around align-middle'>
        <h1 className=' mx-auto md:text-5xl w-[70%] text-center text-sky-700 text-3xl flex font-semibold'>INANCE</h1>
        <section className='w-[20%] overflow-hidden'>
        <div style={{transform: `translateX(-${navScroller * 100}%)`}} className=' lg:hidden flex flex-row ease-in-out transition-all duration-700 '>
          <GiHamburgerMenu onClick={() => NavFunc('show')} className=' cursor-pointer md:text-3xl hover:animate-ping w-[100%] min-w-[100%]  my-auto text-2xl' />
          <MdOutlineCancel onClick={() => NavFunc('hide')} className=' cursor-pointer md:text-3xl hover:animate-none w-[100%] min-w-[100%]  my-auto text-2xl' />
        </div>
        </section>
      </div>
      <div className=' lg:w-[50%]' id='botton-content-nav-div'>
        <ul style={navstyler} className=' lg:w-[100%] lg:justify-around  md:text-xl  transition-[height,opacity] transition-all duration-500 ease-in-out  font-semibold font-mono mx-auto pt-0 text-center flex lg:flex-row flex-col gap-4'>
          <li className=' lg:my-auto'><a href="#universal-nav-div">HOME</a></li>
          <li className=' lg:my-auto'><a href="#aboutSect">ABOUT</a></li>
          <li className=' lg:my-auto'><a href="#servicesSect">SERVICES</a></li>
          <li className=' lg:my-auto'><a href="#contact-container-div">CONTACT US</a></li>
        </ul>
      </div>
    </div>
   </div>
<div  style={ToTopStyler} className=' xl:mt-[20%] lg:mt-[25%] mt-[80%] sm:mt-[30%]  w-full  z-[99] flex fixed ease-in-out transition-all duration-500 animate-bounce '>
      <span className='  rotate-90 ml-auto mr-[2%] md:min-w-[40px] md:min-h-[40px]  w-fit  min-w-w[20px] bg-blue-700 flex flex-row p-2 rounded-full'> <a href="#universal-nav-div"><FaCircleChevronLeft className='rotate-90 animate-bounce md:text-xl   text-white'/></a></span>
    </div>
{/* home section */}
   <section id='home-section-container' className='  bg-[url("./assets/images/slider-img.png")]'>
   <div className=' bg-opacity-70   bg-cyan-300 ' id='universal-home-div'>
    <h1 className=' md:text-3xl text-center text-sky-700   font-bold  text-2xl'>Repair and Maintenance Services</h1>
    <blockquote className=' md:text-xl md:font-semibold'>Keep your equipment running smoothly and avoid costly breakdowns with our comprehensive repair and maintenance services</blockquote>
    <button className=' md:text-xl hover:bg-black hover:text-blue-500  hover:font-bold hover:text-base md:hover:text-2xl h-fit  min-w-[140px] transition-all duration-500 bg-orange-600 p-3 text-center text-sm font-semibold rounded-sm mx-auto grid align-middle text-slate-50'><p className=' transition-all ease-in-out duration-500 h-full hover:animate-bounce'>Contact Us</p></button>

   </div></section>
   {/* more section div */}
   <div id='universal-moreInfo-div' className=' py-4 bg-slate-50'>
    <div id='more-Contaienr-div' className='  hover:bg-orange-500 hover:shadow-pink-700 transition-all duration-500 hover:shadow-xl shadow-lg shadow-slate-400  border-[1px] flex flex-col w-full bg-slate-50 h-fit'>
      <img className=' mx-auto' src={RepairImg} alt="" />
      <big className=' text-3xl font-mono text-slate-600'>REPAIR</big>
    </div>
    <div id='more-Contaienr-div' className=' hover:bg-orange-500 hover:shadow-pink-700 transition-all duration-500 hover:shadow-xl shadow-lg shadow-slate-400  border-[1px] flex flex-col w-full bg-slate-50 h-fit'>
      <img className=' mx-auto' src={imporoveImg} alt="" />
      <big className=' text-3xl font-mono text-slate-600'>IMPROVE</big>
    </div>
    <div id='more-Contaienr-div' className=' hover:bg-orange-500 hover:shadow-pink-700 transition-all duration-500 hover:shadow-xl shadow-lg shadow-slate-400  border-[1px] flex flex-col w-full bg-slate-50 h-fit'>
      <img className=' mx-auto' src={maintainImg} alt="" />
      <big className=' text-3xl font-mono text-slate-600'>MAINTAIN</big>
    </div>
   </div>

   <div id='aboutSect'>
      <div className=' lg:w-[50%] flex flex-col align-middle gap-2 justify-center text-center'>
        <h1 className=' lg:text-5xl text-center text-black text-3xl font-semibold font-serif'>ABOUT US</h1>
        <blockquote className='lg:text-lg text-slate-500 font-mono text-center'>
        We offer flexible scheduling options and competitive rates to fit your needs.
          </blockquote>
          <button className='lg:min-w-[150px] bg-blue-600  mx-auto p-1 rounded-sm text-center text-slate-50 text-base w-fit min-w-[80px] '>READ MORE</button>
        
      </div>
      <div className=' py-3 px-3 flex '>
        <img className=' lg:p-16 hover:p-10 mx-auto p-2' src={aboutImg} alt="" />
      </div>
   </div>

   <div id='servicesSect' className=' flex flex-col align-middle gap-2 justify-center text-center'>
      <h1 className='lg:text-3xl md:text-2xl text-black text-2xl font-semibold font-serif'>WE PROVIDE PROFESSIONAL HOME SERVICES</h1>
      <blockquote className=' md:text-lg text-slate-500 font-mono text-center'>
      Say goodbye to honey-do lists and endless DIY projects! We're your one-stop shop for all your home's needs, from plumbing repairs to sparkling clean windows. Our team of expert technicians and friendly handymen is equipped to handle everything, big or small, with efficiency and a smile
        </blockquote>
        <button className=' md:text-lg md:min-w-[200px] bg-blue-600  mx-auto p-1 rounded-sm text-center text-slate-50 text-base w-fit min-w-[80px] '>READ MORE</button>
      
    </div>

    <div id='universal-moreInfo-div' className=' w-[100%] lg:flex lg:flex-col py-4 bg-slate-50'>
    <h1 className=' w-[100%] text-black text-2xl font-semibold font-serif text-center'>OUR SERVICES</h1>

    <div id='more-Contaienr-div' className='  hover:bg-orange-500 hover:shadow-pink-700 transition-all duration-500 hover:shadow-xl shadow-lg shadow-slate-400  border-[1px] flex flex-col w-full bg-slate-50 h-fit'>
      <img className=' mx-auto' src={mainainImg} alt="" />
      <big className=' text-3xl font-mono text-slate-600'>Maintenance</big>
      <blockquote className=' text-slate-500 font-mono px-2 text-center'>
       
Sure, here is a three-line paragraph that a company can use to describe their maintenance service:

Keep your equipment running smoothly and avoid costly breakdowns with our comprehensive maintenance service. Our experienced technicians will perform regular inspections
      </blockquote>
    </div>
    <div id='more-Contaienr-div' className=' hover:bg-orange-500 hover:shadow-pink-700 transition-all duration-500 hover:shadow-xl shadow-lg shadow-slate-400  border-[1px] flex flex-col w-full bg-slate-50 h-fit'>
      <img className=' mx-auto' src={electricImg} alt="" />
      <big className=' text-3xl font-mono text-slate-600'>Electrical</big>
      <blockquote className=' text-slate-500 font-mono px-2 text-center'>
      Powering homes and businesses safely and reliably is our top priority. From routine maintenance to emergency repairs, our skilled electricians are equipped to tackle any electrical challenge. 
      </blockquote>
    </div>
    <div id='more-Contaienr-div' className=' hover:bg-orange-500 hover:shadow-pink-700 transition-all duration-500 hover:shadow-xl shadow-lg shadow-slate-400  border-[1px] flex flex-col w-full bg-slate-50 h-fit'>
      <img className=' mx-auto' src={plumbingImg} alt="" />
      <big className=' text-3xl font-mono text-slate-600'>Plumbing</big>
      <blockquote className=' text-slate-500 font-mono px-2 text-center'>
      Clogged drains got you down? Leaks wreaking havoc? Don't stress, just splash! At INANCE, we're your one-stop shop for all things plumbing. From dripping faucets to major pipe repairs, our licensed pros tackle any problem with expertise and a smile. 
      </blockquote>
    </div>
    <div className='w-[100%] flex justify-center'> 
      <button className=' bg-blue-600  mx-auto p-1 rounded-sm text-center text-slate-50 text-base w-fit font-semibold min-w-[150px] '>READ MORE</button>
    
    </div>

   </div>

   <div>
    <div>
    <h1 className=' md:text-3xl text-center text-black text-2xl font-semibold font-serif'>WHAT OUR CLIENTS SAY</h1>
    </div>
    <section id='section-client' className=' overflow-hidden'>
        <div style={{transform: `translateX(-${clientScroll * 100}%)`}}  className=' ease-in-out transition-all duration-500' id='hosting-client-div'>{clientMapper}</div>
        <div className=' flex flex-row w-full justify-around my-4'>
          <FaLongArrowAltLeft onClick={() => ClientFunc('left')} className=' hover:text-orange-500 border-[1px] border-blue-600 rounded-sm min-w-[50px] text-3xl text-blue-600' />
          <FaLongArrowAltRight onClick={() => ClientFunc('right')}  className=' hover:text-orange-500 border-[1px] border-blue-600 rounded-sm min-w-[50px] text-3xl text-blue-600' />
        </div>
    </section>
    
   </div>
   {/* contact sect */}

   <div id='contact-container-div'>
        <div id='top-contact-div'>
            <div>
              <div className=' flex text-center mx-auto'>    <h1 className=' md:text-3xl text-center text-black text-2xl font-semibold font-serif'>CONTACT US</h1></div>
            </div>
            <form id='contact-form' onSubmit={handleSubmit()} noValidate>
              <input {...register('name',{
                required : 'Input Name',
                minLength:{
                  value : 10,
                  message : 'Enter more character'
                }
              })} placeholder='NAME' className=' p-4 bg-slate-100 shadow-md placeholder:text-slate-700 outline-none placeholder:font-mono shadow-slate-500 text-slate-800 text-left rounded-sm w-full placeholder:text-center' type="text" />
            {errors.name && <p className=' text-red-500 font-mono' id='error'>{errors.name?.message}</p>}
            <input {...register('number',{
                required : 'Input number',
                minLength:{
                  value : 10,
                  message : 'Enter more character'
                }
              })} placeholder='PHONE NUMBER' className=' p-4 bg-slate-100 shadow-md placeholder:text-slate-700 outline-none placeholder:font-mono shadow-slate-500 text-slate-800 text-left rounded-sm w-full placeholder:text-center' type="text" />
            {errors.number && <p className=' text-red-500 font-mono' id='error'>{errors.number?.message}</p>}
            
            
            <input {...register('email',{
                required : 'Input email'
              })} placeholder='EMAIL' className=' p-4 bg-slate-100 shadow-md placeholder:text-slate-700 outline-none placeholder:font-mono shadow-slate-500 text-slate-800 text-left rounded-sm w-full placeholder:text-center' type="email" />
            {errors.email && <p className=' text-red-500 font-mono' id='error'>{errors.email?.message}</p>}
            
            <textarea {...register('mesage',{
                required : 'Input message',
                minLength:{
                  value : 10,
                  message : 'Enter more character'
                }
              })} placeholder='MESAGE' className=' resize-y p-4 min-w-[50px] bg-slate-100 shadow-md placeholder:text-slate-700 outline-none placeholder:font-mono shadow-slate-500 text-slate-800 text-left rounded-sm w-full placeholder:text-center'></textarea>
            {errors.mesage && <p className=' text-red-500 font-mono' id='error'>{errors.mesage?.message}</p>}
            
            <button disabled={!isDirty || isSubmitting} type='submit' className=' md:text-lg hover:bg-black hover:text-blue-500  hover:font-bold h-fit  min-w-[140px] transition-all duration-500 bg-orange-600 p-3 text-center text-sm font-semibold rounded-sm mx-auto grid align-middle text-slate-50'><p className=' transition-all ease-in-out duration-500 h-full hover:animate-bounce'>PUSH</p></button>

            
            
            
            </form>
        </div>

        <div id='map-container-div'>

        </div>
   </div>
    
    <footer className=' bg-blue-900 text-slate-50' id='footer-section-div'>
    <div className=' flex text-center mx-auto'>    <h1 className=' text-center text-black text-2xl font-semibold font-serif'>GET IN TOUCH</h1></div>
    <div id='second-footer-sect'>
      <div className=' flex flex-col  mx-auto align-middle justify-center w-full'>
        <span className=' gap-1 flex flex-col lg:flex-row lg:align-middle align-middle mx-auto text-center'><p><FaLocationDot className=' mb-3 text-slate-50 bg-blue-700 p-4 text-6xl rounded-full' /></p><hr className=' mx-auto rotate-90 lg:my-auto lg:min-w-[200px] lg:rotate-0 bg-slate-400 min-h-[2.5px] min-w-8 max-w-10 mb-2'  /></span>
        <span className=' mx-auto text-center italic font-mono hover:text-yellow-500'>Kenya log(33'22'23) lat(23'12'3)</span>
      </div>
      <div className=' flex flex-col mx-auto align-middle justify-center w-full'>
        <span className=' lg:flex-row lg:align-middle gap-1 flex flex-col align-middle mx-auto text-center'><hr className='  lg:my-auto lg:min-w-[100px] lg:rotate-0 mx-auto rotate-90 bg-slate-400 min-h-[2.5px] min-w-8 max-w-10 my-3'  /><p><IoCall className=' mb-3 text-slate-50 bg-blue-700 p-4 text-6xl rounded-full' /></p><hr className='  lg:my-auto lg:min-w-[100px] lg:rotate-0 mx-auto rotate-90 bg-slate-400 min-h-[2.5px] min-w-8 max-w-10 mb-2'  /></span>
        <span className=' mx-auto text-center italic font-mono hover:text-yellow-500'>+2547 123456789</span>
      </div>
      <div className=' flex flex-col mx-auto align-middle justify-center w-full'>
        <span className=' lg:flex-row lg:align-middle gap-1 flex flex-col align-middle mx-auto text-center'><hr className='  lg:my-auto lg:min-w-[100px] lg:rotate-0 mx-auto rotate-90 bg-slate-400 min-h-[2.5px] min-w-8 max-w-10 my-3'  /><p><MdEmail className=' mb-3 text-slate-50 bg-blue-700 p-4 text-6xl rounded-full' /></p><hr className='  lg:my-auto lg:min-w-[100px] lg:rotate-0 mx-auto rotate-90 bg-slate-400 min-h-[2.5px] min-w-8 max-w-10 mb-2'  /></span>
        <span className=' mx-auto text-center italic font-mono hover:text-yellow-400'>yahoo@inance.com</span>
      </div>
    </div>
    <div className=' flex text-center mx-auto'>    <h1 className=' text-center text-black text-2xl font-semibold font-serif'>FOLLOW US</h1></div>
    <address className=' md:text-2xl mx-auto rounded-sm flex flex-row py-2 width-[70%] min-w-[200px] justify-around bg-slate-100 text-blue-600 text-lg'>
      <FaFacebookF className=' hover:text-yellow-500 hover:text-2xl hover:bg-black rounded-full hover:p-1' />
      <IoLogoTwitter className=' hover:text-purple-600 hover:text-2xl hover:bg-black rounded-full hover:p-1' />
      <TfiYoutube className=' hover:text-red-700 hover:text-3xl hover:bg-black rounded-full hover:p-1' />
      <IoLogoInstagram className=' hover:text-pink-500 hover:text-2xl hover:bg-black rounded-full hover:p-1' /> 
    </address>

    <div id='developer-div' className=' text-center grid grid-cols-1 align-middle mx-auto  justify-center w-full text-base'>
        <blockquote className=' w-full mx-auto text-center '>
        <span className=" md:text-xl text-center w-[90%] mx-auto text-base sm:mx-auto ">All Rights Reserved &#169; {year} . Designed by : </span>
         <a className=' md:text-xl hover:text-yellow-500 inline-flex   text-center mx-auto sm:mx-4 underline underline-offset-1 font-semibold' href="https://briannjuguna.netlify.app/">Brian Njuguna</a>

        </blockquote>

      </div>
    </footer>



   </> 
  )
}



export default App
