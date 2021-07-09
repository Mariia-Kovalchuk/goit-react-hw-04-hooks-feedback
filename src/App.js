import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import { Component } from 'react';

class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  incrementFeedback = stateName => {
    this.setState(prevState => ({
      [stateName]: prevState[stateName] + 1
    }))
  };

  countTotalFeedback = () => Object.values(this.state).reduce((total, stateQuantity) => total + stateQuantity, 0);

  countPositiveFeedbackPercentage = () => this.countTotalFeedback() > 0 ? Math.round(this.state.good / this.countTotalFeedback() * 100) : 0;
  

  render() {
    const { state, incrementFeedback, countTotalFeedback, countPositiveFeedbackPercentage} = this;

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


};


export default App;
