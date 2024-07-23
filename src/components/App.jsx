import FeedbackOptions from "./Feedback/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import React from "react";
import Notification from "./Notification/Notification";
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
    this.handleStatisticChange = this.handleStatisticChange.bind(this);
  }
    countTotalFeedback() {
     const { good, neutral, bad } = this.state;
     return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    const {good} = this.state;
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round( good / total * 100) ;
  }
  handleStatisticChange(option) {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    })
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleStatisticChange}
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
}
export default App;
