import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import CreateUserPage from "./Components/CreateUserPage";
import NotFoundPage from "./Components/NotFoundPage";
import LoginForm from "./Components/LoginForm";
import PrivatePage from "./Components/PrivatePage";
import PrivateRoute from "./Components/PrivateRoute";
import NotAuthorized from "./Components/NotAuthorized";
import ProductForm from "./Components/ProductForm";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/private" element={<PrivatePage />} />
          </Route>

          <Route path="/not-authorized" element={<NotAuthorized />} />

          {/* <Route path="/" element={<h1>Login Page</h1>} /> */}
          {/* <Route path="/login" element={<LoginForm />} /> */}
          <Route path="/" element={<LoginForm />} />
          <Route path="/create-user" element={<CreateUserPage />} />
          <Route path="/private" element={<PrivatePage />} />

          <Route path="/main" element={<GroceriesAppContainer />} />

          <Route
            path="/add-product"
            element={<ProductForm isEditing={false} />}
          />
          <Route
            path="/edit-product/:id"
            element={<ProductForm isEditing={true} />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
