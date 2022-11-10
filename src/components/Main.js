import { useState } from "react";
import { validateEmail } from "../utils/helpers";
import Card from "./Card";
import findmythrone from "../imgs/findmythrone.png";
import workday from "../imgs/workday.png";
import notetaker from "../imgs/notetaker.png";
import passwordgen from "../imgs/passwordgen.png";



export function About() {
    return (
        <div className="about-text">
            <p>
                Hello, my name is Jesse Ashford, I am a Full-stack web developer. Currently in search of a new job.
            </p>
            <br />
            <p>
                Take a look around hopefully you see something you like.
            </p>
            <br />
            <p>
                Thank you for your time and consideration, hope to talk to you soon.
            </p>
        </div>
    );
}

const profileCards = [
    {
        id: 1,
        imgLink: findmythrone,
        imgAltText:
            "Screenshot of Find My Throne showing the app.",
        cardTitle: "Find my throne",
        cardText:
            'Know how close every bathroom is ',
        cardLink: "https://mmelan000.github.io/FindMyThrone/",
        gitLink: "https://github.com/mmelan000/FindMyThrone",
    },
    {
        id: 2,
        imgLink: workday,
        imgAltText:
            "Screenshot of Work Day Scheduler showing the app.",
        cardTitle: "Work Day Scheduler",
        cardText:
            'A great way to schedule your day',
        cardLink: "https://jesse115.github.io/Work-Day-Scheduler/",
        gitLink: "https://github.com/Jesse115/Work-Day-Scheduler",
    },
    {
        id: 3,
        imgLink: notetaker,
        imgAltText:
            "Screenshot of Note Taker showing the app.",
        cardTitle: "Note Taker",
        cardText:
            'Note Taker for all your note needs',
        cardLink: "https://rocky-wildwood-19568.herokuapp.com/notes",
        gitLink: "https://github.com/Jesse115/My-Note-Taker",
    },
    {
        id: 4,
        imgLink: passwordgen,
        imgAltText:
            "Screenshot of Passwordgenerator showing the app.",
        cardTitle: "Passwordgenerator",
        cardText:
            'Passwordgenerator for when you need a great password',
        cardLink: "https://jesse115.github.io/Passwordgenerator/",
        gitLink: "https://github.com/Jesse115/Passwordgenerator",
    },

];
export function Profile() {
    return (
        <div>
            <div className="profile-container">
                {profileCards.map((profileCard) => (
                    <Card data={profileCard} key={profileCard.id} />
                ))}
            </div>
        </div>
    );
}
export function Resume() {
    return (
        <div className="resume-container">
            <div className="proficiencies">
                <ul>
                    <li>~ Proficiencies ~</li>
                    <li>Javascript</li>
                    <li>Node.js</li>
                    <li>React.js</li>
                    <li>Express.js</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <a href="https://docdro.id/22eMQtk">Link to Resume</a>
                </ul>
            </div>
        </div>
    );
}



export function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "name") {
            setName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleBlur = (e) => {
        if (e.target.name === "email") {
            if (!validateEmail(e.target.value)) {
                setErrorMessage("Please enter a valid email address.");
                return;
            }
        }
        if (e.target.name === "name" && e.target.value.length === 0) {
            setErrorMessage("Please enter a name.");
            return;
        }
        if (e.target.name === "message" && e.target.value.length === 0) {
            setErrorMessage("Please enter a message.");
            return;
        }
    };

    const handleFormSubmit = (e) => {
        if (!validateEmail(email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }
        if (name.length === 0) {
            setErrorMessage("Please enter a name.");
            return;
        }
        if (message.length === 0) {
            setErrorMessage("Please enter a message.");
            return;
        }
        alert(`Thanks for reaching out to me! I'll be in touch soon!`);

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
        e.preventDefault();
    };

    return (
        <div className="contact-parent">
            <form className="form contact-container">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="text"
                        className="form-control"
                        id="nameField"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        type="email"
                        className="form-control"
                        id="emailField"
                        placeholder="name@example.com"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Message</label>
                    <textarea
                        value={message}
                        name="message"
                        className="form-control"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        id="messageField"
                        rows="6"
                        col="10"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleFormSubmit}
                    className="btn btn-secondary"
                >
                    Submit
                </button>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </form>
        </div>
    );
}



