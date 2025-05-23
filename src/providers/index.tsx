import { FC } from 'react';

import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import ScrollToTop from '@/utils/ScrollToTop';

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChakraProvider>{children}</ChakraProvider>
    </BrowserRouter>
  );
};

export default AppProvider;
