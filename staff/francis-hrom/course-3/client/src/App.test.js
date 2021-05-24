// import { render, screen } from "@testing-library/react";
import ReactDOM from "react-dom";
import App from "./App";

/*default test
 test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

//it("Landing component should render without crashing", () => {});
//it("Landing component snapshot with Enzyme", () => {});
