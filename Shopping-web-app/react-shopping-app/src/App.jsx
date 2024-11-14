import { BrowserRouter as Router,Routes,Route  } from "react-router-dom"
import Header from "./Components/Header/Header"
import ProductList from "./Components/Product/ProductList"
import CartPage from "./Components/CartPage/CartPage"
import ProductPage from "./Components/Product/ProductPage"
import Layout from "./Components/Layout"
import About from "./Components/PAges/About"
import Contact from "./Components/PAges/Contact"
import Wishlist from "./Components/Wishlist/Wishlist"
import AdminLayout from "./Admin/AdminLayout"

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path="/collection" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/admin" element={<AdminLayout/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
