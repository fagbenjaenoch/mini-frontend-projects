import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorPage from "./ErrorPage.jsx";
import ExampleBlogPage from "./pages/ExampleBlogPage/index.jsx";
import Dropdown from "./pages/Dropdown/index.jsx";
import MultiStageDropdown from "./pages/MultiStageDropdown/index.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/blog",
		element: <ExampleBlogPage />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/dropdown",
		element: <Dropdown />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/multi-stage-dropdown",
		element: <MultiStageDropdown />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
