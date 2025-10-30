import {Routes, Route} from "react-router-dom"

import Navbar from './navigasi/Navbar'
import Dashboard from './content/Dashboard'
import BankProduct from "./content/BankProduct"
import EditApplication from "./content/EditApplication"
import './App.css'

function App() {
  return (
    <>
      {/* <div className="container-fluid p-0">
        <div className="row g-0 vh-100">
          <div className="col-12 col-lg-2 p-0 bg-white border-end">
            <Navbar />
          </div>
          <div className="col-12 col-lg-10 p-0 bg-light" style={{ overflow: "auto", height: "100vh"}}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/contact" element={<h5 className='p-4'>Contact Page</h5>} />
              <Route path="/loan" element={<h5 className='p-4'>Loan Page</h5>} />
              <Route path="/product" element={<h5 className='p-4'>Product Page</h5>} />
              <Route path="/bank" element={<h5 className='p-4'>Bank Page</h5>} />
            </Routes>
          </div>
        </div>
      </div> */}
      <div className="app-container">
      {/* Sidebar */}
      <Navbar />

      {/* Main content */}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/contact" element={<h5 className="p-4">Contact Page</h5>} />
          <Route path="/loan" element={<EditApplication />}/>
          <Route path="/bank-product" element={<BankProduct />}/>
          <Route path="/product" element={<h5 className="p-4">Product Page</h5>} />
          <Route path="/category-product" element={<h5 className="p-4">Category Product Page</h5>} />
          <Route path="/bank" element={<h5 className="p-4">Bank Page</h5>} />
          <Route path="/credit" element={<h5 className="p-4">Credit Page</h5>} />
          <Route path="/faq" element={<h5 className="p-4">FAQ Page</h5>} />
          <Route path="/pipeline" element={<h5 className="p-4">Pipeline Page</h5>} />
          <Route path="/pipeline-dev" element={<h5 className="p-4">Pipeline Dev Page</h5>} />
          <Route path="/marketing" element={<h5 className="p-4">Marketing Page</h5>} />
          <Route path="/whatsapp" element={<h5 className="p-4">WA Page</h5>} />
        </Routes>
      </main>
    </div>
    </>
  )
}

export default App
