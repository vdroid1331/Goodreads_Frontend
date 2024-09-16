import Signin from "Pages/Auth/Signin";
import Signup from "Pages/Auth/Signup";
import BookDescription from "Pages/BookDescription";
import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import NotFound from "Pages/NotFound";
import { Route, Routes } from "react-router-dom";

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/book/description" element={<BookDescription />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
