import { createBrowserRouter } from "react-router";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import { FinallyRegister } from "./pages/auth/finally-register";
import { Forgot } from "./pages/auth/forgot";
import { ForgotCompleted } from "./pages/auth/forgot-completed";
import { Home } from "./pages/app/home";
import { TeacherList } from "./pages/app/teacher-list";

export const router = createBrowserRouter([
  { path: "/sign-in", element: <SignIn /> },
  { path: "/sign-up", element: <SignUp /> },
  { path: "/sign-up/finally-register", element: <FinallyRegister /> },
  { path: "/forgot", element: <Forgot /> },
  { path: "/forgot/send-email", element: <ForgotCompleted /> },
  { path: "/", element: <Home /> },
  { path: "/study", element: <TeacherList /> },
]);
