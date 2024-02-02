import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" exact element={<Home />} ></Route>      
          <Route path="/about" exact element={<About />} ></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
