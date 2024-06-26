import NavBar from "./components/NavBar/NavBar";
import {
  createHashRouter,
  Router,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

import Home from "./pages/Home";
import Service from "./pages/Service";
import About from "./pages/About";
import Planning from "./pages/Planning";
import Design from "./pages/Design";
import Development from "./pages/Development";
import { useEffect } from "react";
import Quote from "./pages/Quote";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service/planning",
    element: <Planning />,
  },
  {
    path: "/service/design",
    element: <Design />,
  },
  {
    path: "/service/development",
    element: <Development />,
  },
  {
    path: "service/quote",
    element: <Quote />,
  },
]);

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        entry.target.classList.add("show");
      }
    });
  });

  useEffect(() => {
    window.onscroll = () => {
      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach((element) => observer.observe(element));
    };
  }, []);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
