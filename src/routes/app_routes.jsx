import { Routes, Route } from "react-router-dom";
import publicRoutes from "./public_routes";
import privateRoutes from "./private_routes";
import ProtectedRoute from "./protected_routes";
import NotFound from "../pages/not_found";
import Layout from "../layout/main_layout";

export default function AppRoutes() {
  const loginRoute = publicRoutes.find((r) => r.path === "/login");

  return (
    <Routes>
      {loginRoute && <Route path="/login" element={loginRoute.element} />}

      <Route element={<Layout />}>
        {publicRoutes
          .filter((r) => r.path !== "/login")
          .map(({ path, element }, i) => (
            <Route key={i} path={path} element={element} />
          ))}

        {privateRoutes.map(({ path, element }, i) => (
          <Route
            key={i}
            path={path}
            element={<ProtectedRoute>{element}</ProtectedRoute>}
          />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
