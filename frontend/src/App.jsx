// // compare this SET A
// // 
// // :
// // import React from 'react';
// // import { Routes, Route, Navigate } from 'react-router-dom'; 
// // import Main from './components/Main';
// // import { Toaster } from 'react-hot-toast';
// // import Dashboard from './pages/Dashboard';
// // import Evaluate from './pages/Evaluate';
// // import Purchase from './pages/Purchase';
// // import Product from './pages/Products';
// // import Supplier from './pages/Suppliers';
// // import Department from './pages/Departments'
// // import PurchaseList from './pages/PurchaseList'
// // import EvaluateList from './pages/EvaluateList';
// // import Damage from './pages/Damage';
// // import Inventory from './pages/Inventory'
// // import Maintenance from './pages/Maintenance';
// // import ProductSupplier from './pages/ProductSupplier';
// // import DepartmentRequest from './pages/DepartmentRequest';

// // const App = () => {
// //   return (
// //     <>
// //       <Toaster /> {/* Notifications component from react-hot-toast */}
// //       <Routes>
// //         {/* Main wrapper for protected routes */}
// //         <Route path="/" element={<Main />}>
// //           {/* Dashboard Route */}
// //           <Route path="/dashboard" element={<Dashboard />} />
          
// //           {/* Evaluate Route */}
// //           <Route path="/evaluate" element={<Evaluate />} />

// //           {/* EvaluateList Route */}
// //           <Route path="/evaluate-list" element={<EvaluateList />} />

// //           {/* Damage Route */}
// //           <Route path="/evaluate-list" element={<EvaluateList />} />

// //            {/* Damage Route */}
// //            <Route path="/damage" element={<Damage />} />

// //           {/* Purchase Route */}
// //           <Route path="/purchase-request" element={<Purchase />} />

// //           {/* Purchase Route */}
// //           <Route path="/purchase-request-list" element={<PurchaseList />} />

// //           {/* Purchase Route */}
// //           <Route path="/inventory" element={<Inventory />} />

// //           {/* Maintenance Route */}
// //           <Route path="/maintenance" element={<Maintenance />} />

// //           {/* Maintenance Route */}
// //           <Route path="/product-supplier" element={<ProductSupplier />} />

// //           {/* Products Route */}
// //           <Route path="/products" element={<Product />} />

// //           {/* Supplier Route */}
// //           <Route path="/suppliers" element={<Supplier />} />

// //           {/* Supplier Route */}
// //           <Route path="/departments" element={<Department />} />
          
// //            {/* Department request Route */}
// //           <Route path="/department-request" element={<DepartmentRequest />} />

// //         </Route>
// //         {/* Redirect all other paths */}
// //         <Route path="*" element={<Navigate to="/dashboard" />} />
// //       </Routes>
// //     </>
// //   );
// // };

// // export default App;








// // compare this SET B:


import React, { useEffect } from "react";  
import { Routes, Route, Navigate } from 'react-router-dom'; 
import Main from './components/Main';
import { Toaster } from 'react-hot-toast';
import Dashboard from './pages/Dashboard';
import Evaluate from './pages/Evaluate';
import Purchase from './pages/Purchase';
import Product from './pages/Products';
import Supplier from './pages/Suppliers';
import Department from './pages/Departments';
import PurchaseList from './pages/PurchaseList';
import EvaluateList from './pages/EvaluateList';
import Damage from './pages/Damage';
import Inventory from './pages/Inventory';
import Maintenance from './pages/Maintenance';
import ProductSupplier from './pages/ProductSupplier';
import DepartmentRequest from './pages/DepartmentRequest';

const App = () => {
  // // Test backend connection on app load
  // useEffect(() => {
  //   const backendUrl =
  //     process.env.REACT_APP_BASE_URL || "/api"; // Default to proxy in development

  //   console.log("Backend URL:", backendUrl);  // Log the backend URL for checking

  //   fetch(`${backendUrl}/api/test`) // Proxies to backend in development
  //     .then((response) => response.json())
  //     .then((data) => console.log("Backend test response:", data))
  //     .catch((error) =>
  //       console.error("Error testing backend connection:", error)
  //     );
  // }, []);
  return (
    <>
      <Toaster /> {/* Notifications component from react-hot-toast */}
      <Routes>
        {/* Redirect root path to /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Main wrapper for protected routes */}
        <Route path="/" element={<Main />}>
          {/* Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Evaluate Route */}
          <Route path="/evaluate" element={<Evaluate />} />

          {/* EvaluateList Route */}
          <Route path="/evaluate-list" element={<EvaluateList />} />

          {/* Damage Route */}
          <Route path="/damage" element={<Damage />} />

          {/* Purchase Route */}
          <Route path="/purchase-request" element={<Purchase />} />

          {/* PurchaseList Route */}
          <Route path="/purchase-request-list" element={<PurchaseList />} />

          {/* Inventory Route */}
          <Route path="/inventory" element={<Inventory />} />

          {/* Maintenance Route */}
          <Route path="/maintenance" element={<Maintenance />} />

          {/* ProductSupplier Route */}
          <Route path="/product-supplier" element={<ProductSupplier />} />

          {/* Products Route */}
          <Route path="/products" element={<Product />} />

          {/* Supplier Route */}
          <Route path="/suppliers" element={<Supplier />} />

          {/* Departments Route */}
          <Route path="/departments" element={<Department />} />
          
          {/* Department Request Route */}
          <Route path="/department-request" element={<DepartmentRequest />} />
        </Route>

        {/* Redirect all other paths */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};

export default App;





// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom'; 
// import Main from './components/Main';
// import { Toaster } from 'react-hot-toast';
// import Dashboard from './pages/Dashboard';
// import Evaluate from './pages/Evaluate';
// import Purchase from './pages/Purchase';
// import Product from './pages/Products';
// import Supplier from './pages/Suppliers';
// import Department from './pages/Departments'
// import PurchaseList from './pages/PurchaseList'
// import EvaluateList from './pages/EvaluateList';
// import Damage from './pages/Damage';
// import Inventory from './pages/Inventory'
// import Maintenance from './pages/Maintenance';
// import ProductSupplier from './pages/ProductSupplier';
// import DepartmentRequest from './pages/DepartmentRequest';

// const App = () => {
//   return (
//     <>
//       <Toaster /> {/* Notifications component from react-hot-toast */}
//       <Routes>
//         {/* Main wrapper for protected routes */}
//         <Route path="/" element={<Main />}>
//           {/* Dashboard Route */}
//           <Route path="/dashboard" element={<Dashboard />} />
          
//           {/* Evaluate Route */}
//           <Route path="/evaluate" element={<Evaluate />} />

//           {/* EvaluateList Route */}
//           <Route path="/evaluate-list" element={<EvaluateList />} />

//           {/* Damage Route */}
//           <Route path="/evaluate-list" element={<EvaluateList />} />

//            {/* Damage Route */}
//            <Route path="/damage" element={<Damage />} />

//           {/* Purchase Route */}
//           <Route path="/purchase-request" element={<Purchase />} />

//           {/* Purchase Route */}
//           <Route path="/purchase-request-list" element={<PurchaseList />} />

//           {/* Purchase Route */}
//           <Route path="/inventory" element={<Inventory />} />

//           {/* Maintenance Route */}
//           <Route path="/maintenance" element={<Maintenance />} />

//           {/* Maintenance Route */}
//           <Route path="/product-supplier" element={<ProductSupplier />} />

//           {/* Products Route */}
//           <Route path="/products" element={<Product />} />

//           {/* Supplier Route */}
//           <Route path="/suppliers" element={<Supplier />} />

//           {/* Supplier Route */}
//           <Route path="/departments" element={<Department />} />
          
//            {/* Department request Route */}
//           <Route path="/department-request" element={<DepartmentRequest />} />

//         </Route>
//         {/* Redirect all other paths */}
//         <Route path="*" element={<Navigate to="/dashboard" />} />
//       </Routes>
//     </>
//   );
// };

// export default App;






// // import React from 'react';
// // import { Routes, Route, Navigate } from 'react-router-dom'; 
// // import Main from './components/Main';
// // import { Toaster } from 'react-hot-toast';
// // import Dashboard from './pages/Dashboard';
// // import Evaluate from './pages/Evaluate';
// // import Purchase from './pages/Purchase';
// // import Product from './pages/Products';
// // import Supplier from './pages/Suppliers';
// // import Department from './pages/Departments';
// // import PurchaseList from './pages/PurchaseList';
// // import EvaluateList from './pages/EvaluateList';
// // import Damage from './pages/Damage';
// // import Inventory from './pages/Inventory';
// // import Maintenance from './pages/Maintenance';
// // import ProductSupplier from './pages/ProductSupplier';
// // import DepartmentRequest from './pages/DepartmentRequest';

// // const App = () => {
// //   return (
// //     <>
// //       <Toaster /> {/* Notifications component from react-hot-toast */}
// //       <Routes>
// //         {/* Redirect root path to /dashboard */}
// //         <Route path="/" element={<Navigate to="/dashboard" replace />} />

// //         {/* Main wrapper for protected routes */}
// //         <Route path="/" element={<Main />}>
// //           {/* Dashboard Route */}
// //           <Route path="/dashboard" element={<Dashboard />} />
          

          
// //           {/* Evaluate Route */}
// //           <Route path="/evaluate" element={<Evaluate />} />

// //           {/* EvaluateList Route */}
// //           <Route path="/evaluate-list" element={<EvaluateList />} />

// //           {/* Damage Route */}
// //           <Route path="/damage" element={<Damage />} />

// //           {/* Purchase Route */}
// //           <Route path="/purchase-request" element={<Purchase />} />

// //           {/* PurchaseList Route */}
// //           <Route path="/purchase-request-list" element={<PurchaseList />} />

// //           {/* Inventory Route */}
// //           <Route path="/inventory" element={<Inventory />} />

// //           {/* Maintenance Route */}
// //           <Route path="/maintenance" element={<Maintenance />} />

// //           {/* ProductSupplier Route */}
// //           <Route path="/product-supplier" element={<ProductSupplier />} />

// //           {/* Products Route */}
// //           <Route path="/products" element={<Product />} />

// //           {/* Supplier Route */}
// //           <Route path="/suppliers" element={<Supplier />} />

// //           {/* Departments Route */}
// //           <Route path="/departments" element={<Department />} />
          
// //           {/* Department Request Route */}
// //           <Route path="/department-request" element={<DepartmentRequest />} />
// //         </Route>

// //         {/* Redirect all other paths */}
// //         <Route path="*" element={<Navigate to="/dashboard" />} />
// //       </Routes>
// //     </>
// //   );
// // };

// // export default App;
