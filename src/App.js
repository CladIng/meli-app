import './App.sass';

// Views
import Home from './ui/home/home.view';
import Search from './ui/search/search.view';
import DetailProductView from './ui/detail-product/detail-product.view';


import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
          <Route exact path="/" component={Home} />
          <Route exact path="/items" component={Search} />
          <Route exact path="/items/:id" component={DetailProductView} />
      </div>
    </Router>
  );
}

export default App;
