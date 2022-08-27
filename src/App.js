import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Navbar from "./Components/Navbar";
import TotalPrice from "./Pages/TotalPrice";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<TotalPrice />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
