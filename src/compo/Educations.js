import React from 'react'
import '../styles/education.css'
import Edu from '../files/pic2.jpg'

const Educations = () => {
    return (
        <div className="education" id="eductaion">
            <h1>Education & Certificats & Skills</h1>
            <div className="education__content">
                <div className="education__content__left">
                    <ul className="education__content__left__part">
                        <h3>Education</h3>
                        <li><span>2016</span> : High school diploma ( baccalauréat ) in Math science.
                        Tarik ibn ziad high school</li>
                        <li><span>2016 - 2018 </span>: Completed two Years Studies in CS. superior School of Technology Meknes</li>
                    </ul>
                    <ul className="education__content__left__part">
                        <h3>Certificats</h3>
                        <li>Full-Stack Web Development with React</li>
                        <p>In this specialization I learnt to (1) Design a full-fledged Web client
                            application using Bootstrap 4 and React, (2) Design a hybrid mobile
                            application using React Native, and (3) Develop server-side support for
                            the web application using Node.js, ExpressJS together with database
                            support using MongoDB.
                        </p>
                        <li>Python for Everybody</li>
                        <p>
                            This Specialization builds on the success of the Python for Everybody
                            course and will introduce fundamental programming concepts
                            including data structures, networked application program interfaces,
                            and databases, using the Python programming language. In the
                            Capstone Project, you’ll use the technologies learned throughout the
                            Specialization to design and create your own applications for data
                            retrieval, processing, and visualization.
                        </p>
                    </ul>
                    <ul className="education__content__left__part">
                        <h3>Skills <label>(languages and technologies)</label></h3>
                        <h5>HTML, CSS, JAVASCRIPT, React.Js, Node.Js, MongoDB, Express.Js, SQL, Python, Bootstrap, GIT, GITHUB, Redux, React Native, MySQL, SQLite, C .</h5>
                    </ul>
                </div>
                <img src={Edu} alt="" />
            </div>
        </div>
    )
}

export default Educations
