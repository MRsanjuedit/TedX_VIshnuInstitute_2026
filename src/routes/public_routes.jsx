import Home from "../pages/home";
import About from "../pages/about";
import Speakers from "../pages/speakers";
import Team from "../pages/team";
import Gallery from "../pages/gallery";

export default [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/speakers", element: <Speakers /> },
  { path: "/team", element: <Team /> },
  { path: "/gallery", element: <Gallery /> },
];
