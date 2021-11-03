import { Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import { auth } from './services/firebase';
// import Show from './pages/Show';




function App() {
  const [ user, setUser ] = useState(null);
  auth.onAuthStateChanged(user => console.log('user is : ' , user))
  return (
    <>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
          <Route path="/login">
            <Login />
            <Route path="/dashboard">
              <Dashboard />
            </Route>
        </Route>
      </Switch>
    <Footer />
    </>
  );
}

export default App;
