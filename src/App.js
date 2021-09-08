import './App.css';
import { Banner } from './components/Banner';
import Category from './components/Category';
import { MainPageData } from './components/MainPageData';
import ProductDetails from './components/ProductDetails';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const categories={
        men:{name:"men's clothing"},
        Women:{name:"women's clothing"},
        jewelery:{name:"jewelery"},
        electronics:{name:"electronics"},
    }
  return (
    <Router>
    <div className="App">
     <p/>
     <nav id="nav" >
        <ul>
        <li><Link to={"/"}><img src="https://images.indianexpress.com/2021/01/myntra.png" alt="" height="auto" width="100" /></Link></li>
        <li><Link className="active" to={"/Category/"+categories.men.name}>Men</Link></li>
        <li><Link to={"/Category/"+ categories.Women.name }>Women</Link></li>
        <li><Link to={"/Category/"+ categories.jewelery.name}>Jewelery</Link></li>
        <li><Link to={"/Category/"+ categories.electronics.name}>Electronics</Link></li>
        
        <li></li>
</ul>

        </nav>
     <Switch>
     <Route exact path="/"  ><Banner/><MainPageData/></Route>
     <Route exact path="/Category/:Category" component={Category} />
     <Route exact path="/Category/:category/:id" component={ProductDetails} />
     </Switch>
    </div>
    </Router>
  );
}

export default App;
