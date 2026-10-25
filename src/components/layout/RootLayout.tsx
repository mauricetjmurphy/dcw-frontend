import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { IconMenu2 } from '@tabler/icons-react';
import logo from '../../assets/icons/logo.svg';
import Footer from '../navigation/footer/Footer';
import Logo from '../logo/Logo';
import { Container } from '../container/Container';
import { navigation } from './navigation';

const NavItem = ({
  title,
  href,
  onClick,
}: {
  title: string;
  href: string;
  onClick?: () => void;
}) => (
  <ChakraLink
    as={NavLink}
    to={href}
    onClick={onClick}
    color="ink.700"
    fontWeight={500}
    _hover={{ color: 'ink.900', textDecoration: 'none' }}
    _activeLink={{ color: 'ink.900' }}
  >
    {title}
  </ChakraLink>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="rgba(255, 255, 255, 0.92)"
      backdropFilter="saturate(180%) blur(10px)"
      borderBottom="1px solid"
      borderColor="rule"
    >
      <Container>
        <Flex h="68px" align="center" justify="space-between">
          <Link to="/" aria-label="Documated home">
            <Logo logoSrc={logo} width={132} />
          </Link>

          <HStack as="nav" spacing={8} display={{ base: 'none', md: 'flex' }}>
            {navigation.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
            <Button as={Link} to="/contact" size="md">
              Book a call
            </Button>
          </HStack>

          <IconButton
            display={{ base: 'inline-flex', md: 'none' }}
            variant="ghost"
            aria-label="Open menu"
            icon={<IconMenu2 size={22} />}
            onClick={onOpen}
          />
        </Flex>
      </Container>

      <Drawer isOpen={isOpen} onClose={onClose} placement="right" size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton top={4} right={4} />
          <DrawerBody pt={20}>
            <Stack as="nav" spacing={6} fontSize="lg">
              {navigation.map((item) => (
                <NavItem key={item.href} {...item} onClick={onClose} />
              ))}
              <Button as={Link} to="/contact" size="lg" onClick={onClose}>
                Book a call
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

const RootLayout = () => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default RootLayout;
