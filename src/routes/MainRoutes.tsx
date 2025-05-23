import { lazy } from "react";
import Loadable from "@/components/loadable/Loadable";

import RootLayout from "@/components/layout/RootLayout";
import HomePage from "@/pages/home/Home";

const About = Loadable(lazy(() => import("@/pages/about/About")));
const Contact = Loadable(lazy(() => import("@/pages/contact/Contact")));
const Process = Loadable(lazy(() => import("@/pages/process/Process")));

const MainRoutes = {
  path: "/",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/process",
      element: <Process />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ],
};

export default MainRoutes;
