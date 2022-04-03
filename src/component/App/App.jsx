import {Component} from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import ProductItem from '../ProductItem/ProductItem';
import ProductList from '../ProductList/ProductList';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component{
    state={
      name:'hadeel',
      age:22
    }
    render(){
      return (
        <>
<Navbar />

 <Router>
 <Routes>
    <Route path='/' element={<ProductList />}/>
    <Route path='ProductItem' element={<ProductItem />}/>
    <Route path='ProductList' element={<ProductList />}/>
    <Route path='*' element={<NotFound />}/>
</Routes> 
</Router>

<Footer />
      </>
      )
    }
  }