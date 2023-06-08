import PropTypes from 'prop-types';
import { OptionsList, OptionButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => (
        <li key={option}>
          <OptionButton
            type="button"
            name={option}
            onClick={() => {
              onLeaveFeedback(option);
            }}
          >
            {option}
          </OptionButton>
        </li>
      ))}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
