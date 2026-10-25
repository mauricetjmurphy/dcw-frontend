import RootLayout from '@/components/layout/RootLayout';
import HomePage from '@/pages/home/Home';
import About from '@/pages/about/About';
import Contact from '@/pages/contact/Contact';
import Process from '@/pages/process/Process';
import NotFound from '@/pages/not-found/NotFound';

// Pages load eagerly: every page is prerendered, and the site is small
// enough that splitting it buys nothing.
const MainRoutes = {
  path: '/',
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/process',
      element: <Process />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default MainRoutes;
