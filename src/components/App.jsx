import { FeedbackForm } from './FeedbackForm/FeedbackForm.jsx';

const FEEDBACK_OPTIONS = ["good", "neutral", "bad"];

export const App = () => {
  return (
    <>
      <FeedbackForm options={ FEEDBACK_OPTIONS } />
    </>
  );
};
