import PropTypes from "prop-types";
import { v4 } from 'uuid';



const FeedbackOptions = ({options, onLeaveFeedback}) =>
  <div>
    {options.map(option =>
      <button type="button" key={v4() } onClick={()=>onLeaveFeedback(option)}>{ option}</button>
      )}
  </div>

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;