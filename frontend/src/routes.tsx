import Dashboard from "@/components/dashboard";
import { Layout } from "@/components/ui/layout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      {
        path: "owners",
        element: <>Owners</>,
      },
      {
        path: "animals",
        element: <>animals</>,
      },
      {
        path: "appointments",
        element: <>appointments</>,
      },
    ],
  },
]);

export { router };
