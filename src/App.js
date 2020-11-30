import { Route, Switch } from 'react-router-dom';
import './App.css';
import Bio from './component/Bio/Bio';
import Home from './component/Home/Home';
import Nav from './component/Nav/Nav';
import Social from './component/Social/Social';
import Tech from './component/Tech/Tech';


function App() {
  return (
    <div className="App">
      <div className="appContainer">
        <Nav />
        <Social />
        <Route render={({ location }) => (
          <Switch location={location}>
            <Route path="/" exact component={Home}/>
            <Route path="/bio"  component={Bio}/>
            <Route path="/technos"  component={Tech}/>
          </Switch>
        )} />


      </div>
    </div>
  );
}

export default App;
