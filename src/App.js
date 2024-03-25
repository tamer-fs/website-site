import NavBar from "./components/NavBar/NavBar";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry);
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  useEffect(() => {
    window.onscroll = () => {
      const hiddenElements = document.querySelectorAll(".hidden");
      hiddenElements.forEach((element) => observer.observe(element));
    };
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
