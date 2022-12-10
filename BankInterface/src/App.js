
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import { SignIn, UserForm } from './Pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
         <BrowserRouter>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<SignIn />} />
            {/* <Route path="/" element={<SignIn />} /> */}
            {/* <Route path="/clientdata" element={<ClientData />} />
            <Route path="/paymentdata" element={<PaymentData />} />
            <Route path="/csvfileupload" element={<CsvfileUpload />} /> */}
          </Routes>
        </BrowserRouter>
      {/* <Dashboard />
      <SignIn /> */}
    </div>
  );
}

export default App;
