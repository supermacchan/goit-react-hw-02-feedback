import { Component } from 'react';
import { FeedbackForm } from './FeedbackForm/FeedbackForm.jsx';
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
        <FeedbackForm
          options={Object.keys(this.state)}
          method={this.handleButtonClick}
        />
        <Statistics
          options={Object.keys(this.state)}
          values={this.state}
          countTotal={this.countTotalFeedback}
          countPositive={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  };
}
