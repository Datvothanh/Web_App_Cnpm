import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/HomePage";
import Landing from "./components/layout/Landing";
import Auth from "./views/Authentication/Auth";
import Search from './views/Search'
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import ProtectedHome from "./components/routing/ProtectedHome"
import ProductContextProvider from "./contexts/ProductContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import ProductByCategoryContextProvider from "./contexts/ProductByCategoryContext";
import HomeCategoryPage from "./views/Home/HomeCategoryPage";
import Profile from "./views/Authentication/Profile/index"
import ProductDetail from "./views/ProductDetail";
import ProductDetailContextProvider from "./contexts/ProductDetailContext"
import CommentContextProvider from "./contexts/CommentContext";
import CartContextProvider from "./contexts/CartContext";
import Cart from "./views/Cart"
import Address from "./views/Pay/address";
function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
      <CategoryContextProvider>
      <ProductByCategoryContextProvider>
      <ProductDetailContextProvider>
      <CommentContextProvider>
      <CartContextProvider>
        
      <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path='/' element={<ProtectedHome/>}>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path='/search/:keyword' element={<Search />}  />
        <Route exact path="/category/:id_category" element={<HomeCategoryPage />} />
        <Route exact path="/product/:idProduct" element={<ProductDetail />} />
        <Route exact path='/' element={<ProtectedRoute/>}>
        <Route exact path="/Profile" element={<Profile />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/Address" element={<Address />} />
        </Route>
        
        </Route>
        <Route
          exact
          path="/login"
          element={<Auth authRoute="login" />}
        />
        <Route
          exact
          path="/register"
          element={<Auth authRoute="register" />}
        />
      </Routes>
      </Router>
      </CartContextProvider>
      </CommentContextProvider>
      </ProductDetailContextProvider>
      </ProductByCategoryContextProvider>
     </CategoryContextProvider>
     </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
