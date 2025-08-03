import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'; 
import { useState } from 'react';
import { useEffect } from 'react';
function Header() {
    const[hero,setHero]=useState(false);    
    useEffect(()=>{
        const time=setTimeout(()=>{
                  setHero(true);
                },1000);
        return()=>clearTimeout(time);
    },[]);

    const[open,setOpen]=useState(false);
    const nav=()=>{
        setOpen(!open);
    }
    const[show,setShow]=useState(true);
    const[isTop,setIsTop]=useState(true);

    useEffect(()=>{
      let lastScroll=window.scrollY;

      const handleScroll=()=>{
        const currScroll=window.scrollY;

        setIsTop(currScroll < 50);
        
        if(currScroll > lastScroll && currScroll > 100){
          setShow(false);
        }
        else{
          setShow(true);
        }

        lastScroll=currScroll;
      };
      window.addEventListener('scroll',handleScroll);
      return()=>window.removeEventListener('scroll',handleScroll);
    },[]);

  return (
    <>
    {
      hero && (
        <header className={`header ${!show ? 'header--hidden' : ''} ${!isTop ? 'header--scrolled' : ''}`}>
            <h1>Navamithran</h1>
            <nav className={open?"navbar active":"navbar"}>
                <ul>
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </ul>
            </nav>

            <icon>
                {open?
                <FontAwesomeIcon onClick={nav} icon={faXmark} />:
                <FontAwesomeIcon onClick={nav} icon={faBars} />}
            </icon>

        </header>
      )
    }
    </>    
  );
}

export default Header;