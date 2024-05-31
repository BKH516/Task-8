// Hero.js
import './Hero.css';

const Hero = () => {
  return (
    <>
      <section className="Hero">
        <div className="text-hero">
          <h1>Hey !! Mario still here, But don’t forget that</h1>
          <p>
            At focal X agency, we are working to build something 
            different. Here you’ll have a group of creative people who specialize in:
            <br />
            Branding, Digital Marketing, Web/App Development, Ui/Ux
            <br />
            Content creation, Graphic design, Social media and More........
            <br />
            So you can take a tour in our website, OR just <b>Press Start :)</b>
          </p>
        </div>
        <div className="hero-image">
          <img className="img-1" src="../public/img/pattren.png" alt="Pattern" />
          
        </div>
      </section>
      <section>
        <footer>
          <div className="footer">
            <img className='footer-img-1' src="../public/img/fotter.svg" alt="Footer" />
            <img className='footer-img-2' src="../public/images/footer-mobile.png" alt="Footer" />
          </div>
          <div className="gameBoy">
            <img className='img-boy' src="../public/img/gameBoy-min.png" alt="Game Boy" />
            <img className="img-2" src="../public/img/pressStart.svg" alt="Press Start" />
            <img className="img-3" src="../public/images/gamefor-mobile.png" alt="Press Start" />
          </div>

      <div className="last-wave">
        <div className="hero-icon">
          <a href="https://www.facebook.com/focal.x.agency/">
            <img src="./images/facebook.png" />
          </a>
          <a href="https://www.behance.net/focal-x-agency">
            <img src="./images/behance.png" />
          </a>
          <a href="https://www.linkedin.com/company/focal-x-agency">
            <img src="./images/linkdin.png" />
          </a>
          <a href="https://focal-x.com/Www.Instagram.com/focal.x.agency">
            <img src="./images/instgram.png" />
          </a>
          <a href="https://x.com/focal_x_agency">
            <img src="./images/twitter.png" />
          </a>
        </div>
        <div className="hero-wave-p">
          <p>© 2021 - 2022 focal X agency All Right Reserved</p>
        </div>
      </div>
        </footer>
      </section>
    </>
  );
};

export default Hero;
