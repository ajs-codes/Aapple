import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DealerRequest from "./components/DealerRequest";
import NewOrders from "./components/NewOrders";
import AllDealers from "./components/AllDealers";
import ProductPanel from "./components/ProductPanel";

//user dashboard

import UserDashboard from "./user-dashboard/userDashboard";
import Purchase from "./user-dashboard/Purchase";
import Transaction from "./user-dashboard/Transaction";

function App() {
  return (
    <Router>
      <>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dealer-request" element={<DealerRequest />} />
          <Route path="all-dealers" element={<AllDealers />} />
          <Route path="new-orders" element={<NewOrders />} />
          <Route path="product-panel" element={<ProductPanel />} />
        </Route>
        <Route path="/user-dashboard" element={<UserDashboard />}>
          <Route path="purchase" element={<Purchase />} />
          <Route path="transaction" element={<Transaction />} />
          
        </Route>
        </Routes>
      </>
    </Router>
  );
}

export default App;
