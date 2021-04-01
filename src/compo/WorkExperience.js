import React from 'react'
import "../styles/work.css"
import Work from "../files/pic3.svg"

const WorkExperience = () => {
    return (
        <div className="work" id="work">
            <h1>Work Experience</h1>
            <div className="work__content">
                <img src={Work} alt="" />
                <div>
                    <h2>Freelancer</h2>
                    <h4>Nov 2020 – Jan 2021 Full Stack Web Developer</h4>
                    <p>I built a web site for a taxi company in France  (The back end and the front end) and I deployed  it on Firebase .The web app lets the user enter the reservation informations ( The Starting adress , The Arriving adress, Time and personal informations) and give him back the price , then send the company an Email , if the company has available taxis for that time they can confirm or cancel .
                    </p>
                    <p>To build this project I used React.js for the front end and firebase cloud functions for the back end and firebase database to manage the data . In the front end i used material UI for styling and Google Maps API for autocompleting the adresses and to manage the state i used react context API  ( By the way the design was the client choice ) . In the back end I used Express to create the API to serve data for the front end like getting the distance between the adresses and calculate the price of the reservation , and I used Nodemailer to send Emails to comapny when a new reservation submitted and when they confirm or cancel a conversation ( I also built an admin platform to get all the reservations and confirm or cancel reservations without having to send emails manually) . </p>
                    <a href="https://www.central-taxi67.fr/" target="_blank">Live Website</a>
                </div>
            </div>
        </div>
    )
}

export default WorkExperience
