import { FeedbackForm } from './FeedbackForm/FeedbackForm.jsx';
import { Statistics } from './Statistics/Statistics.jsx';

const FEEDBACK_OPTIONS = ["good", "neutral", "bad"];

export const App = () => {
  return (
    <>
      <FeedbackForm options={FEEDBACK_OPTIONS} />
      <Statistics options={FEEDBACK_OPTIONS} />
    </>
  );
};
