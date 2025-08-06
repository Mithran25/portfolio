import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Home(){

    const[hero,setHero]=useState(false);    
    useEffect(()=>{
        const time=setTimeout(()=>{
                  setHero(true);
                },1000);
        return()=>clearTimeout(time);
    },[]);
    
    return(
        <>
        {
           hero && (<main>
          <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="main_content">
              <h3>Navamithran</h3>
              <p> 
                Aspiring Full-Stack Developer <br></br><span>| Software Developer</span>
              </p>
              <p>
                Passionate about building responsive, user-centric applications and <br></br>
                  solving real-world problems through clean, efficient code
              </p>
              <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

              <div className="resume">
              <a href="mailto:navamithran25@gmail.com">Hire Me</a>
              <a href="src/assets/Navamithran_resume.pdf">Resume</a>
              </div>
        
             <div className="main_content_icon">
              <a href="http://linkedin.com/in/navamithran"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/mr_.remo.__?igsh=ZWg1djFlNTk5OWQx&utm_source=qr"><i class="fa-brands fa-instagram"></i></a>
              <a href="https://github.com/Mithran25"><i class="fa-brands fa-github"></i></a>
             </div>

          </motion.section> 
        </main>)
        }
        </>
    );
}

export default Home;