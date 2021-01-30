import React,{useState} from 'react';
import PopupItems from './PopupsItems'

const Notifications = (props) => {
    const [notifications,setNotifications] = useState(null)

    const addPopup = (props) => {
        setNotifications(props.type)
    }

    return (
        <>
            {props.children.map((item) => {
                const newObj = Object.assign({},item,{props:{...props.props,addPopup:addPopup}})
                return newObj
            })}
            {notifications !== null ? (
                Object.assign({},PopupItems[notifications],{props:{...props.props,setNotifications:setNotifications}})
            ) : null}
        </>
    )
}

export default Notifications
