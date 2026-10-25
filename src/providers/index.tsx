import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from '@/utils/ScrollToTop';
import { theme } from '@/theme';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
