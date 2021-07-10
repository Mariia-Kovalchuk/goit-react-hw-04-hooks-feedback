import PropTypes from "prop-types";
import { v4 } from 'uuid';
import style from './FeedbackOptions.module.css'



const FeedbackOptions = ({options, onLeaveFeedback}) =>
  <div className={style.optionsContainer}>
    {options.map(option =>
      <button type="button" key={v4() } onClick={()=>onLeaveFeedback(option)} className={style.button}>{ option}</button>
      )}
  </div>

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;