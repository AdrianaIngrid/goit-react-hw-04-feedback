import React from "react";
import styles from './FeedbackOptions.module.css';
import propType from 'prop-types';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
 
    return (
      <div className = {styles.btnContainer}>
        {options.map(option => (
            <button className={styles.buttons}
              key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
};
FeedbackOptions.propTypes = {
  options: propType.object,
  onLeaveFeedback: propType.func,
}
export default FeedbackOptions;