import React, { useState } from 'react'
import "../styles/contact.css"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillGithub } from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai"
import { SiGmail } from "react-icons/si"
import axios from "../axios"

const Contact = () => {

    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")
    const [sent, setSent] = useState(false)

    const submit = (e) => {
        e.preventDefault()

        axios.post('/', {
            email: email,
            name: name,
            msg: msg
        })
        .then((res) => {
            if(res.status === 200){
                setSent(true)
            }else{
                setSent(false)
            }
            setMsg('')
            setEmail("")
            setName("")
        })
        .catch(() => {
            setSent(false)
        })
    }

    return (
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <div className="contact__content">
                <form>
                    <div>
                        <label>Email*</label>
                        <input placeholder="Type your email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label>Name*</label>
                        <input placeholder="Type your name" type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Message*</label>
                        <textarea rows={6} placeholder="Type your message" type="text" value={msg} onChange={e => setMsg(e.target.value)} />
                    </div>
                    <button onClick={submit} disabled={email === "" || name === "" || msg === ""} >Submit</button>
                    {sent && <p>Your message has been sent</p>}
                </form>
                <div>
                    <h2>Or get in touch with me Here</h2>
                    <div>
                        <a href = "mailto: soufianechaghil@gmail.com"><SiGmail /></a>
                        <a href="https://www.linkedin.com/in/soufiane-chaghil-5bb488200/" target="_blank"><AiFillLinkedin /></a>
                        <a href="https://github.com/soufianechaghilWD" target="_blank"><AiFillGithub /></a>
                        <a href="https://www.facebook.com/profile.php?id=100005733767621" target="_blank"><AiFillFacebook /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
