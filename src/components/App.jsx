import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import React from "react";
import Notification from "./Notification/Notification";
import { useState } from "react";

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  function handleStatisticChange(option) {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        break;
    }
  }
   function countTotalFeedback() {
          return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
   
    const total = countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round( good / total * 100) ;
  }


  //  const { good, neutral, bad } = this.state;
    const total = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good' , 'neutral', 'bad']}
            onLeaveFeedback={handleStatisticChange}
          />
        </Section>
        <Section 
          title="Statistics">
          {good === 0 && neutral === 0 && bad === 0 ? (<Notification message= {'There is no feedback'}/>) : 
          (<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
          />)}        
        </Section>        
      </div>
    );
  }

export default App;
