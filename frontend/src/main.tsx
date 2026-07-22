import ProviderTheme from "@/components/theme/provider";
import { router } from "@/routes";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ProviderTheme>
      <RouterProvider router={router} />
    </ProviderTheme>
  </React.StrictMode>,
);
