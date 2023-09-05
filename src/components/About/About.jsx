import './About.css';
import { getImageUrl } from "../../utils";
const About = () => {
    return (
        <section className="container" id="about">
            <h2 className="title">About</h2>
            <div className="content">
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className="aboutImage"
                />
                <ul className="aboutItems">
                    <li className="aboutItem">
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className="aboutItemText">
                            <h3>Full Stack Developer</h3>
                            <p>
                                I am a Full Stack developer with experience in building responsive
                                and optimized sites
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className="aboutItemText">
                            <h3>Backend Developer</h3>
                            <p>
                                I have experience developing fast and optimised back-end systems
                                and APIs
                            </p>
                        </div>
                    </li>
                    <li className="aboutItem">
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className="aboutItemText">
                            <h3>UI Designer</h3>
                            <p>
                                I have designed multiple landing pages and have created design
                                systems as well
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default About;