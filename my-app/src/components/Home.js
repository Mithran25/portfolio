function Home(){
  return(
    <>
      <div className="main">
      <section className="main_content">
      <aside>
        <h3>Navamithran</h3>
        <p className="content_1"> 
          Aspiring Full-Stack Developer <br></br><span>| Software Developer</span>
        </p>
        <p className="content_2">
          Passionate about building responsive, user-centric applications and 
            solving real-world problems through clean, efficient code
        </p>
        <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>

        <div className="cv">
        <a href="/">Hire Me</a>
        <a href="/">Resume</a>
        </div>
        
        <div className="main_content_icon">
            <i class="fa-brands fa-linkedin-in"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
        </div>
      </aside>
      </section>
      <section>
        <article>
            <main>
                <img src="/images/IMG_4523-2.jpg"></img>
            </main>
        </article>
      </section>
      </div>
    </>
  );
}
export default Home;