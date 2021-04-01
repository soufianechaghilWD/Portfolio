import React from 'react'
import "../styles/projects.css"
import Texting from "../files/pic4.png"
import Social from "../files/pic5.png"
import Real from "../files/pic6.png"


const Projetcs = () => {
    return (
        <div className="project" id="projects">
            <h1>Projects</h1>
            <div className="projects__content">
                <div className="projects__content__row">
                    <div>
                        <h4>A Texting App </h4>
                        <p>I  built a Texting app that lets the user Sign up using his Email and Password , then search for users using their username and sending them a text . The app has Seen functionality (if the contact sees the text you sent him you will be notified), Also the contacts are sorted (last conversation), and when you get a new text it gets highlighted until you text back .
                        In this project I used firebase for hosting and for the front end i used react.Js and CSS for styling .
                        </p>
                        <div className="project__btns">
                            <a href="https://textin-app.web.app" target="_blank">Live Website</a>
                            <a href="https://github.com/soufianechaghilWD/texting-app-firebase" target="_blank">Code on github</a>
                        </div>
                    </div>
                    <img src={Texting} alt="" />
                </div>
                <div className="projects__content__row">
                    <div>
                        <h4>A Social media App </h4>
                        <p>In this project I built a social media App , The user can sign up then follow other users, and search for other users, also he can post pictures with captions, and like and comment posts, It has a suggestions part and notifications part (if someone follows the user he gets notified or if his account is private and someone ask to follow him he gets notified ) .
                        I built this project using React for the front end and node.js , express.Js for the back end as a database I used mongoDB , for the authentification i used firebase authentification , I hosted the front end on firebase and the back end on heroku and the database on mongodb .
                        </p>
                        <div className="project__btns">
                            <a href="https://social-media-cs.web.app/
                            " target="_blank">Live Website</a>
                            <a href="https://github.com/soufianechaghilWD/social_back_end" target="_blank">Code on github</a>
                        </div>
                    </div>
                    <img src={Social} alt="" />
                </div>
                <div className="projects__content__row">
                    <div>
                        <h4>A Real estate website</h4>
                        <p>This is just a good looking website that i saw on the internet and i decieded to build it , it has no functionalities just the front end , and cool animations .
                        </p>
                        <div className="project__btns">
                            <a href="https://real-estate-2270c.web.app/" target="_blank">Live Website</a>
                            <a href="https://github.com/soufianechaghilWD/real-estate" target="_blank">Code on github</a>
                        </div>
                    </div>
                    <img src={Real} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Projetcs
