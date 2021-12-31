import React from 'react'
import userImg from '../img/user.png'
const ContactCard = (props) => {
    const { id, name, email } = props.contact;
    return (
        <div className="item">
            <img className="ui avatar image" src={userImg} alt="user" />
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
                <i  onClick={() => props.clickHandler(id)} className="trash alternate outline icon" style={{color:"red" ,marginTop:"7px"}}></i>
            </div>
    )
}

export default ContactCard
