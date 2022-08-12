import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './js/components/Footer';
import Navbar from './js/components/navbar';
import { Home } from './js/pages/home';



export const Layout = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/' exact component={ Home } />
        <Route path='/' exact component={ Home } />
        <Route path='/' exact component={ Home } />
        {/* <Route path='/' exact component={ Post } /> */}

      </Switch>
      <Footer />
    </Router>
  );
}


