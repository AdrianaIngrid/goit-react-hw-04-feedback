import React from "react";
import styles from "./Notification.module.css";
import propType from 'prop-types';
function Notification ({message}) {
    return (
        <p className={styles.message}>{message}</p>
    )
}
Notification.propType = {
    message: propType.string,
}
export default Notification;