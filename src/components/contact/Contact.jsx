import './Contact.css'
import { getImageUrl } from "../../utils";
const Contact = () => {
    return (
        <footer id="contact" className="container">
            <div className="text">
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className="links">
                <li className="link">
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                    <a href="mailto:Sunilkohar86@gmail.com">Mail me</a>
                </li>
                <li className="link">
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a href="https://www.linkedin.com/in/sunil-kohar/">Sunil Kohar</a>
                </li>
                <li className="link">
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                    <a href="https://github.com/SunilKohar">Sunil Kohar</a>
                </li>
            </ul>
        </footer>
    )
}

export default Contact