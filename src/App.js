import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { useState } from 'react';


function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const incrementFeedback = stateName => {
    setState(prevState => ({ ...prevState, [stateName]: prevState[stateName] + 1 }))
  };


  const countTotalFeedback = () => Object.values(state).reduce((total, stateQuantity) => total + stateQuantity, 0);

  const countPositiveFeedbackPercentage = () => countTotalFeedback() > 0 ? Math.round(state.good / countTotalFeedback() * 100) : 0;
  

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={incrementFeedback}
        ></FeedbackOptions>

      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? <Statistics
          good={state.good} neutral={state.neutral} bad={state.bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()}
        ></Statistics> : <Notification message="No feedback given" />}

      </Section>
    </Container>);



}

export default App;
