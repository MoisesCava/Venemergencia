import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurvedHeader from './components/Organism/Headers/CurvedHeader';
import UpdateUser from './components/Screens/User/UpdateUser';
import UserTable from './components/Screens/User/UserTable';
import UserDetail from './components/Screens/User/UserDetail';
import Code from './components/Screens/Code/Code';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CurvedHeader} />
        <Route path="/Users" exact component={UserTable} />
        <Route path="/UpdateUser/:id" exact component={UpdateUser} />
        <Route path="/UserDetail/:id" exact component={UserDetail} />
        <Route path="/Code" exact component={Code} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
