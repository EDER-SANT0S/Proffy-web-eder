import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";

export function App() {
  return (
    <>
      <Toaster richColors position="top-right" />
      <RouterProvider router={router} />
    </>
  );
}
