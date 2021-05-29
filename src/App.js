import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurvedHeader from './components/Molecule/Headers/CurvedHeader';
import UpdateUser from './components/Screens/User/UpdateUser';
import UserTable from './components/Screens/User/UserTable';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurvedHeader} />
        <Route path="/Users" exact component={UserTable} />
        <Route path="/UpdateUser/:id" exact component={UpdateUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
