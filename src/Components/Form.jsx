import { useState } from "react";
export default function Form() {
    const [formData, setFormData] = useState({
        email: "", password:"", confirmPassword: "", wantNewsletter: true
    })
    function handleSubmit(event) {
        event.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            console.log("Passwords don't match!")
            alert("Passwords don't match!")
        } else if (formData.email==="") {
            alert("You need to enter your email")
        } else if (formData.password===""){
            alert("You need to enter a password");
        } else {
            const whatNewsLetter = formData.wantNewsletter? "welcome to the newsletter": "maybe sign up to the newsletter?"
            alert(`Everything matches, ${whatNewsLetter}`)
        }
    }
    function handleChange(event) {
        const {name, value, type} = event.target;
        setFormData(prevFormData => {
            return type!="checkbox"? {
                ...prevFormData,
                [name]: value
            }:
            {
                ...prevFormData,
                [name]: !prevFormData.wantNewsletter
            }
        })
    }
    console.log(formData);
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    name="email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    onChange={handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="wantNewsletter"
                        checked={formData.wantNewsletter}
                        onChange={handleChange}
                    />
                    <label id="label-newsletter" htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
