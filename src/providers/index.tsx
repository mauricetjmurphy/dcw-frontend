import { FC } from 'react';

import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from '@/utils/ScrollToTop';
import { theme } from '@/theme';

interface AppProviderProps {
  children: React.ReactNode;
}

// The router wraps this: BrowserRouter in main.tsx, StaticRouter when
// prerendering (entry-server.tsx).
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </>
  );
};

export default AppProvider;
