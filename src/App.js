import { Route, Switch } from 'react-router-dom';
import './App.css';
import Bio from './component/Bio/Bio';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import Nav from './component/Nav/Nav';
import Social from './component/Social/Social';
import Tech from './component/Tech/Tech';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Nav />
        <Social />
        <Route render={({ location }) => (
          
              <Switch location={location}>
                <Route path="/" exact component={Home} />
                <Route path="/bio" component={Bio} />
                <Route path="/technos" component={Tech} />
                <Route path="/contact" component={Contact} />
              </Switch>
        )} />
      </div>
    </div>
  );
}

export default App;
