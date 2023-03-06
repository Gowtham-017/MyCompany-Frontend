import Post from './Components/Post';
import Get from './Components/Get';
import Put from './Components/Put';
import Delete from './Components/Delete';
import Footer from './Components/Footer';
import Navigation from "./Components/Navigation";
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import './App.css'
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";



function App() {
return (
	<Router>
    <div className="App"> 
        <Switch>
       
        <Route exact path="/" component={Signin}></Route>
        <Route exact path="/Navigation" component={Navigation}></Route>
        <Route exact path="/Post" component={Post}></Route>
        <Route exact path="/Get" component={Get}></Route>
        <Route exact path="/Put" component={Put}></Route>
        <Route exact path="/Delete" component={Delete}></Route>
        <Route exact path="/Signin" component={Signin}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Navigation" component={Navigation}></Route>

    
       </Switch>
    </div> 
  </Router>
);
}

export default App;
