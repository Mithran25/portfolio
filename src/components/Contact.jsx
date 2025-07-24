import { useState, useEffect } from "react";
import { motion} from "framer-motion";
function Contact(){
    const[page,setPage]=useState(false);
        useEffect(()=>{
            const timer=setTimeout(()=>{
                setPage(true)
            },1000)
            return()=>clearTimeout(timer);
        },[])
    return(
        <>
             {page && (<motion.section
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}}
                className="contact">
                <div className="contact-title"><h3>Contact</h3></div>
                    <div className="contact-list">
                        
                    <div className="contact-let"><h2>Let's Get</h2></div>
                    <div className="contact-conn"><h2>Connected</h2></div>
                    <div className="form">
                        <form>
                            <input className="name" type="text" placeholder="Name"></input>
                            <input className="email" type="email" placeholder="Email"></input>
                            <input className="message" type="text" placeholder="Message"></input>
                            <button className="button">Send Message</button>
                        </form>
                    </div>
                    </div>
                </motion.section>
            )}   
        </>
    )
}

export default Contact;