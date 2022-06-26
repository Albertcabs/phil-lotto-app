import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LottoLists from "./Components/LottoList/LottoLists";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <BrowserRouter>
            <React.StrictMode>
                  <Routes>
                        <Route path="/" element={<App />}>
                              {LottoLists().map((e, i) => (
                                    <Route
                                          key={e.id}
                                          path={`/${e.path}`}
                                          element={e.name}
                                    />
                              ))}
                        </Route>
                  </Routes>
            </React.StrictMode>
      </BrowserRouter>
);
