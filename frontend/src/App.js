import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes/routes";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <>
      <Routes>
        {routes.map(({ path, name, component: Component }) => (
          <Route key={name} element={<MainLayout />}>
            <Route key={name} path={path} element={<Component />} />
          </Route>
        ))}
      </Routes>
      {/* Other content can go here if needed */}
    </>
  );
}

export default App;
