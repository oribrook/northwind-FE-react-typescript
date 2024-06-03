import { Route, Routes } from 'react-router-dom';
import Products from './components/products/Products';
import AddProduct from './components/products/AddProduct';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import ProductPage from './components/products/ProductPage';
import Home from './components/home/Home';


export function SiteRoutes() {
    return (<> 
        <div style={{padding: '2%'}}>
            <Routes>
                <Route path='/products' element={<Products/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/product/:id' element={<ProductPage/>} />
                <Route path='/add-product' element={<AddProduct/>} />
                <Route path='/register' element={<Register/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </div>
    </>)
}
