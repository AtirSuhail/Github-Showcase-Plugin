import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DevCard from "./DevCard.jsx";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const pluginEle = document.getElementById("github-profile");
if (pluginEle) {
  const username = pluginEle.getAttribute("username");
  ReactDOM.createRoot(pluginEle).render(<DevCard username={username} />);
}
