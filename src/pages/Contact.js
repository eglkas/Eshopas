import React, { useState } from "react";
import "../styles/Contact.css";
import { AirlineSeatReclineNormalTwoTone, Email, Message, Send, Subject } from "@mui/icons-material";
import userEvent from "@testing-library/user-event";

const Contact = () => {
  const[userData, setUserData] = useState(
    {
      Name: "", Email: "", Subject: "", Message: ""
    }
  )
  let Name, value
  console.log(userData)
  const data = (e) =>
    {
      Name = e.target.name
      value = e.target.value
      setUserData({...userData, [Name]:value})

    }
    const Send = async(e) => 
      {
        const {Name, Email, Subject, Message} = userData;
        e.preventDefault();
        const option = {
          method: "POST",
          Headers: {
            "Content-type": "aplication/json"
          },
          body : JSON.stringify({
            Name, Email, Subject, Message

          })
        }
        const res = await fetch("https://eshopass-7ea41-default-rtdb.firebaseio.com/Messages.json", option)
        console.log(res)
        if(res)
          {
            alert("Message Sent")
          }
      }
  return (
    <div className="container">
      <div className="contact_box">
        <form method="POST">
          <input type="text" name="Name" value={userData.Name} placeholder="Enter Your Full Name" autoComplete="off" onChange={data}></input>
          <input type="text" name="Email" value={userData.Email} placeholder="Enter Your E-mail" autoComplete="off"onChange={data}></input>
          <input type="text" name="Subject" value={userData.Subject} placeholder="Subject Of Message" autoComplete="off"onChange={data}></input>
          <textarea value={userData.Message} name="Message" placeholder="Message" autoComplete="off"onChange={data}></textarea>
          <button onClick={Send}>Send</button>
        </form>
      </div>
      
    </div>
  );
}

export default Contact;