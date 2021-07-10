import PropTypes from "prop-types";
import style from './Statistics.module.css'



const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p className={style.total}>Total: {total}</p>
    <p className={style.total}>Positive feedback: {positivePercentage} %</p>
  </div>);

Statistics.defaultProps = {
  total: 0,
  positivePercentage: 0
}

Statistics.propTypes ={
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}

export default Statistics;