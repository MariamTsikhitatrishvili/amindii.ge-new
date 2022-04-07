import './globals.css';
import Layout from './components/Layout'

import Header from './components/Header'
import { Store } from './components/Store'
import Sidebar from './components/Sidebar'
import Home from './Home';

function Main() {
  return (
    <Store>
    <Layout>
      <Header />
      <div className="flex md:flex-row flex-col container items-start">
        <Sidebar />
        <Home />
      </div>
    </Layout>
  </Store>
  );
}

export default Main;
