import { Routes, Route } from "react-router-dom";
import { NotFound } from "../Features/NotFound";
import { User } from "../Features/User";
import { Home } from "../Features/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="user/:user" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
