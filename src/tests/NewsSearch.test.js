import React from "react";
import ReactDOM from "react-dom";
import NewsSearch from "../components/NewsSearch.jsx";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NewsSearch />, div);
  ReactDOM.unmountComponentAtNode(div);
});
