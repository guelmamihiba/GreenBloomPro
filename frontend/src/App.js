import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import MainLayout from "./Layouts/MainLayout";
import { CartProvider } from "./pages/Shop/CartContext"; // Import CartProvider

// const Text = () => {
//   useEffect(() => {
//     return () => {
//       console.log("ComponentWillUnmount");
//     }
//   }, []);
//   return (<>This is text comp</>);
// }

// function App() {
//   const [toggle, setToggle] = React.useState(false);
//   const ab = "hello";

//   // ComponentDidMount
//   useEffect(() => {
//     console.log("ComponentDidMount");
//   }, []);

//   // ComponentDidUpdate
//   useEffect(() => {
//     console.log("ComponentDidUpdate");
//   }, [ab, toggle]);

//   return (
//     <div>
//       <button onClick={() => setToggle(!toggle)}>
//         Toggle
//       </button>

//       {toggle && (<Text />)}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          {routes.map(({ path, name, component: Component }) => (
            <Route key={name} element={<MainLayout />}>
              <Route key={name} path={path} element={<Component />} />
            </Route>
          ))}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
