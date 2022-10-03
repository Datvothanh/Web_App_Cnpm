import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/Home/HomePage";
import Landing from "./components/layout/Landing";
import Auth from "./views/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./views/Dashboard";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import ProtectedHome from "./components/routing/ProtectedHome"
import ProductContextProvider from "./contexts/ProductContext";
import CategoryContextProvider from "./contexts/CategoryContext";
import ProductByCategoryContextProvider from "./contexts/ProductByCategoryContext";
import HomeCategoryPage from "./views/Home/HomeCategoryPage";
function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
      <CategoryContextProvider>
      <ProductByCategoryContextProvider>
      <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path='/' element={<ProtectedHome/>}>
        <Route exact path="/home" element={<HomePage />} />
        <Route exact path='/search/:keyword' element={<HomePage />}  />
        <Route exact path="/category/:id_category" element={<HomeCategoryPage />} />
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
        <Route exact path='/' element={<ProtectedRoute/>}>
        <Route
          exact
          path="/dashboard"
          element={<Dashboard />}
        />
        </Route>
      </Routes>
     </Router>
      </ProductByCategoryContextProvider>
     </CategoryContextProvider>
     </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
