import { Component } from 'react';
import { Section } from './Section/Section.jsx';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = event => {
    this.setState((prevState) => {
      return {
        [event.target.name]: prevState[event.target.name] + 1,
      }
    })
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    return totalCount;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalCount = good + neutral + bad;
    const positivePercent =
      totalCount > 0
        ? ((100 * good) / totalCount)
        : 0
    return Math.round(positivePercent);
  };

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
            />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </>
    );
  };
}
