import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import Women from "./pages/Women";
// import Men from "./pages/Men";
// import Kids from "./pages/Kids";
// import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import "./styles/style.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// export { Women, Men, Kids, Home }; from "./pages/Women";
// export { Men } from "./pages/Men";
// export { Kids } from "./pages/Kids";
// export { Home } from "./pages/Home";
