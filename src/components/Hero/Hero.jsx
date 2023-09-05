import HeroImage from '../../assets/hero/myAvatar.svg'
import './Hero.css';
const Hero = () => {
    return (
        <section className="container">
            <div className="content">
                <h1 className="title">Hi, I am Sunil Kumar  </h1>
                <p className="description">
                    I am a full-stack developer with 1+ year of experience using React and
                    NodeJS and 12+ years overall in IT. Reach out to me, if you would like to learn more!
                </p>
                <a href="mailto:Sunilkohar86@email.com" className="contactBtn">
                    Contact Me
                </a>
            </div>
            <img
                src={HeroImage}
                alt="Hero image of me"
                className="heroImg"
            />
            <div className="topBlur" />
            <div className="bottomBlur" />
        </section>
    )
}

export default Hero;