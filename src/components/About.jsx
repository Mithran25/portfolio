import { useState,useEffect } from "react";
import { motion } from "framer-motion";
function About(){

    const[about,setAbout]=useState(false);
    useEffect(()=>{
      const timer=setTimeout(()=>{
        setAbout(true)
      },1000);
      return()=>clearTimeout(timer);
    },[]);
   
    return(
      <>
      {about && (<motion.section 
      initial={{ opacity: 0, y: 100}}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }}
      className="about">
        <div className="about_know"><h2>know</h2></div>
        <div className="about_me"><h2>About Me</h2></div>
        <div className="about_img">
           <img src="src/components/myImage.jpg"></img>
        </div>
          
        <section className="about_content">
            <div>
                <h3>MySelf</h3>
            </div>
            <div className="about_para">
            <p>
                Aspiring Full Stack and Software Developer with hands-on experience in front-end technologies like HTML, CSS, and JavaScript, along with strong knowledge of Java and SQL.<br></br><br></br> Passionate about building responsive, 
                user-centric applications and solving real-world problems through clean, efficient code and eager to expand programming capabilities by contributing to real-world software solutions.</p>
            </div>
        </section>
      </motion.section>)}
      </>
    );
}

export default About;