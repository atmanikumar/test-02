import './App.css';

import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Clipboard from './pages/Clipboard';
import CaptureSelfie from './pages/CaptureSelfie';
import Header from './components/Header';

import './media.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/clipboard">
            <Clipboard />
          </Route>
          <Route path="/selfie">
            <CaptureSelfie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
