import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CurvedHeader from './components/Molecule/Headers/CurvedHeader';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurvedHeader} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
