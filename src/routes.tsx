import { createBrowserRouter } from "react-router-dom";
import App from "./Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

export default router;
