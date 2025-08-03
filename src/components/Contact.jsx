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

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[message,setMessage]=useState("");
  const[status,setStatus]=useState("");

  const handleSubmit= async(e) => {
    e.preventDefault();

    try{
    const res=await fetch("http://localhost:8080/contacts/details",{
        method:"POST",
        headers:{"content-Type":"application/json"},
        body:JSON.stringify({name,email,message}),
    });

    if(res.ok){
        setStatus("message sent successfull");
        setName('');
        setEmail('');
        setMessage('');
    }
    else{
        setStatus("failed to send message");
    }
    }catch(err){
        console.log(err);
        setStatus("Error sending message");
    }
  }

    return(
        <>
             {page && (<motion.section
                initial={{opacity:0,y:100}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}} 
                viewport={{once:true,amount:0.2}}
                className="contact" id="contact">
                <div className="contact-title"><h3>Contact</h3></div>
                    <div className="contact-list">
                        
                    <div className="contact-let"><h2>Let's Get</h2></div>
                    <div className="contact-conn"><h2>Connected</h2></div>
                    <div className="form">
                        <form  onSubmit={handleSubmit}>
                            <input className="name" type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value)} required></input>
                            <input className="email" type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} required></input>
                            <input className="message" type="text" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></input>
                            <button className="button">Send Message</button>
                            {status && <p>{status}</p>}
                        </form>
                    </div>
                    </div>
                </motion.section>
            )}   
        </>
    )
}

export default Contact;