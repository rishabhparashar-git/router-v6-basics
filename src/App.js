import { Routes, Navigate, Link, Route, useNavigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader.js";
import ProductDetail from "./pages/ProductDetail";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/welcome/*" />} />
          <Route path="/welcome/*" element={<Welcome />}>
            <Route
              path="new-user"
              element={
                <h3>
                  We Welcomes you as a New User in our Application{" "}
                  <button
                    style={{ marginLeft: "1rem" }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Close
                  </button>
                </h3>
              }
            />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productName" element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
