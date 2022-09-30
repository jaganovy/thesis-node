import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

// routes import
import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import Register from "./routes/Register";
import CalendarApp from "./routes/Calendar";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import store from './api/store';
import reducers from "./reducers";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(reducers, compose(applyMiddleware(thunk)));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/app" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/competitions" element={<CompetitionsList />} /> */}
          <Route path="/app" element={<App />}>
            <Route path="/app/dashboard" element={<Dashboard />} />
            <Route path="/app/calendar" element={<CalendarApp />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
