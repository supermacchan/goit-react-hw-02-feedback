import { Component } from 'react';
import { FeedbackForm } from './FeedbackForm/FeedbackForm.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

const FEEDBACK_OPTIONS = ["good", "neutral", "bad"];

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <FeedbackForm options={FEEDBACK_OPTIONS} />
        <Statistics options={FEEDBACK_OPTIONS} values={this.state} />
      </>
    );
  };
}
