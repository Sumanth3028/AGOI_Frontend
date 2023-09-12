import React from 'react'

const Navbar = () => {

    const homeHandler=(e)=>{
        e.preventDefault()
        const element=document.getElementById('formId')
        if(element){
          
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const aboutHandler=(e)=>{
        e.preventDefault()
        const about=document.getElementById('aboutId')
        if(about){
            console.log('hey')
            about.scrollIntoView({ behavior: 'smooth' });
        }
    }
  return (
    <div className='bg-white w-full h-[50px]  flex border gap-[50px] items-center '>
        <img src='https://akashgroupofinstitutions.com/images/logo.jpg' className='mx-[200px] '></img>
        <a href='/home' className='text-blue-900 text-lg hover:underline ml-[100px] font-bold' onClick={homeHandler} >HOME</a>
        <a href='/about' className='text-blue-900 text-lg hover:underline font-bold' onClick={aboutHandler} >ABOUT US</a>
        <a href='/programmes' className='text-blue-900 text-lg hover:underline font-bold ' >PROGRAMMES</a>
        <a href='/placements' className='text-blue-900 text-lg hover:underline font-bold ' >PLACEMENT</a>
    </div>
  )
}

export default Navbar