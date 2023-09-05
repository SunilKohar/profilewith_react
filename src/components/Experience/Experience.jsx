import './Experience.css';
import { getImageUrl } from "../../utils";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
const Experience = () => {
    return (
        <section className="container" id="experience">
            <h2 className="title">Experience</h2>
            <div className="content">
                <div className="skills">
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className="skill">
                                <div className="skillImageContainer">
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className="history">
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className="historyItem">
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo`}
                                />
                                <div className="historyItemDetails">
                                    <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <ul>
                                        {historyItem.experiences.map((experience, id) => {
                                            return <li key={id}>{experience}</li>;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Experience;