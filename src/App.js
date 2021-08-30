import Home from './components/pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './components/pages/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ Product }  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
