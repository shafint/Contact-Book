import Table from "./component/tableCpnt/Table"
import Login from "./component/loginPage/Login.jsx";
import Ragister from "./component/loginPage/Ragister.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Ccontact from "./component/createContact/Ccontact.jsx"
import EditData from "./component/editDAta/EditData.jsx"
function App() {
  const mainUser = useSelector(state => state.rightUser.ruser);
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login/ragister" component={Ragister} />
        <Route exact path="/table" component={mainUser ? Table : Login} />
        <Route exact path="/table/create-contact" component={mainUser ? Ccontact : Login} />
        <Route exact path="/table/edit/:id" component={mainUser ? EditData : Login} />
        <Redirect to={Login} />
      </Switch>
    </>
  );
}

export default App;
