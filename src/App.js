import React, {useState} from "react";

import Header from "@components/Header/Header";

import routesConfig from "./routes/routesConfig";
import {Route, Routes} from "react-router-dom";

function App() {

   return (
      <div className="todo-app">

         <div className="header">
            <Header />
         </div>

         <Routes>
            {routesConfig.map((route, index) => (
               <Route
                  key={index}
                  element={<route.element/>}
                  path={route.path}
               />
            ))}
         </Routes>

      </div>
   );
}

export default App;