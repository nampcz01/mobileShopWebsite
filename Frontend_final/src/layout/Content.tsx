/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "../routes";
 
const Content = () => {
    return (
      <Routes>
        {routes.map((route:any, idx:number) => {
          return (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                element={<route.element />}
              />
            )
          );
        })}
      </Routes>
    );
  };
  
  export default React.memo(Content);
  