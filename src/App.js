import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Learn from './components/pages/Learn';
import Subscription from './components/pages/Subscription';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact Component={Home}/>
          <Route path='/Learn' exact Component={Learn}/>
          <Route path='/Sign-Up' exact Component={Subscription}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
