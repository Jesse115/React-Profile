import Card from "./Card";
import findmythrone from "../imgs/findmythrone.png";


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
        gitLink: "https://mmelan000.github.io/FindMyThrone/",
    },
];
export function Profile() {
    return (
        <div>
            <div className="Profile-container d-flex">
                {profileCards.map((profileCard) => (
                    <Card data={profileCard} key={profileCard.id} />
                ))}
            </div>
        </div>
    );
}




