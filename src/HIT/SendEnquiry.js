import axios from 'axios'
import React, { Component } from 'react'

export default class sendEnquiry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"",
         mobile:"",
         email:"",
         course:"",
         message:""
      }
    }
    changeData = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(e.target.name,e.target.value)
    }
    validate = (e)=>{
        e.preventDefault()
        console.log(this.state)
        const {name,mobile,email,course,message}= this.state

        const nameError = document.getElementById("nameError")
        const mobileError = document.getElementById("mobileError")
        const emailError = document.getElementById("emailError")
        const courseError = document.getElementById("courseError")
        const messageError = document.getElementById("messageError")
        const alphaExp = /^[a-z A-z]+$/
        const mobileExp = /^[0-9]+$/
        const emailExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const messageExp = /^[a-z A-Z]+$/
        let nameStatus = false
        let mobileStatus = false
        let emailStatus = false
        let messageStatus = false

        if(name ===""){
            nameError.textContent = " please enter your name"
        }
        else{
            if(name.match(alphaExp)){
                nameError.textContent =""
                nameStatus = true
            }
            else{
                nameError.textContent = "please enter only alphabets"
            }
        }


        if(mobile ===""){
            mobileError.textContent = "please enter your mobile number"
        }
        else{
            if(mobile.match(mobileExp)){
                if(mobile.length ===10){
                    mobileError.textContent=""
                    mobileStatus = true
                }
                else{
                    mobileError.textContent = "please enter 10 digits"
                }
            }
            else{
                mobileError.textContent = "please enter only digits"
            }
        }



        if(email ===""){
            emailError.textContent = "please enter your email"
        }
        else{
            if(email.match(emailExp)){
                emailError.textContent = ""
                emailStatus = true
            }
            else{
                emailError.textContent = "please enter your email "
            }
        }



        if(course ===""){
            courseError.textContent = " please select your course"
        }



        if(message ===""){
            messageError.textContent = " please enter any message"
        }
        else{
            if(message.match(messageExp)){
                messageError.textContent = ""
                messageStatus=true
            }
            else{
                messageError.textContent = " please enter only alphabets"
            }
        }

        //post data in to api

        if(nameStatus && mobileStatus && emailStatus && messageStatus){
            axios.post(`http://localhost:4001/enquiries`,this.state)
            .then((res)=> alert("Your Enquiry Sent"))
            .catch((err)=> console.log(err))
        }








        
    }
  render() {
    const {name,mobile,email,course,message}= this.state
    return (
        <form onSubmit={this.validate}>
            <input className=' form-control mb-3' placeholder='Enter Name' name='name' value={name} onChange={this.changeData}/>
            <p id='nameError'></p>
            <input className=' form-control mb-3' placeholder='MobileNumber' name='mobile' value={mobile} onChange={this.changeData}/>
            <p id='mobileError'></p>
            <input className=' form-control mb-3' placeholder='Email Adress' name='email' value={email} onChange={this.changeData}/>
            <p id='emailError'></p>
            <select className=' form-select mb-3' name='course' value={course} onChange={this.changeData}>
                <option hidden>Select Courses</option>
                <option value='mern'>Mern Full stack</option>
                <option value='ui'>Ui Development</option>
                <option value='ui ux'>Ui Ux Designing</option>
                <option value='java'>Java Full stack</option>
                <option value='python'>Python Full stack</option>
            </select>
            <p id='courseError'></p>
            <input className=' form-control mb-3' placeholder='Message' name='message' value={message} onChange={this.changeData}/>
            <p id='messageError'></p>
            <input type='submit' className=' form-control mb-3 btn btn-danger'/>
            </form>
    )
  }
}
