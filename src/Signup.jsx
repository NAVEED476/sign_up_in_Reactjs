
import React, { useState } from 'react'

export const Signup = () => {

    const [data,setdata] = useState({
        firstname:"",
        lastname:"",
        email:"",
        password:"",
        confirm_password:""

    })

    const { firstname,lastname,email,password,confirm_password}= data;

    const handlechange = (e) =>{
        setdata({...data,[e.target.name]:e.target.value})
    }
  
    const submithandler = (e) =>{
        e.preventDefault()
        if(firstname.length<6){
            alert("Name must be length 6 or above")
        }

        else if(password.length<6){
            alert("please enter more than 6 digits")

        }
        else if(password !== confirm_password){
            alert("password and confirm password both must be same")
        }
        else if(password === confirm_password){
            alert("welcome to the site")
        }
        else{
            alert("Successfully Signed in")
        }

        
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <input type="text" name='firstname' onChange={handlechange} value={firstname} placeholder="Enter first_name"/><br />
                <input type="text" name='lastname' onChange={handlechange} value={lastname} placeholder="Enter last Name"/><br />
                <input type="email" name='email' onChange={handlechange} value={email} placeholder="Enter Email"/><br />
                <input type="password" name='password' onChange={handlechange} value={password} placeholder="Enter password"/><br />
                <input type="password" name='confirm_password' onChange={handlechange} value={confirm_password} placeholder="confirm Password"/><br />
                <input type="submit" name='submit' />
            </form>
        </div>
    )
}