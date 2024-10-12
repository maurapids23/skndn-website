import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Learn from './components/pages/Learn';
import LearnMulesoft from './components/pages/LearnMulesoft';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact Component={Home}/>
          <Route path='/Learn' exact Component={Learn}/>
          <Route path='/Learn/Mulesoft' exact Component={LearnMulesoft}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
