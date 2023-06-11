import { useState } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export const App = ({feedback}) => {  
  const [options, setOptions] = useState(feedback);

  const onLeaveFeedback = option => {
    setOptions(prevOptions => {
      return { ...prevOptions, [option]: prevOptions[option] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (!options.good) {
      return 0;
    }

    return Math.round((options.good * 100) / total).toString() + '%';
  };

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            options={Object.entries(options)}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
};

App.propTypes = {
  defaultProps: PropTypes.PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
