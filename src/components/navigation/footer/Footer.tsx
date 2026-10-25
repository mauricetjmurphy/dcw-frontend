import { Box, Grid, Link as ChakraLink, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
import Logo from '../../logo/Logo';
import { Container } from '../../container/Container';
import { navigation } from '../../layout/navigation';

const FooterLink = ({ href, children }: { href: string; children: string }) => (
  <ChakraLink as={Link} to={href} color="ink.700" _hover={{ color: 'ink.900' }}>
    {children}
  </ChakraLink>
);

const Footer = () => {
  return (
    <Box
      as="footer"
      mt={{ base: 20, md: 32 }}
      borderTop="1px solid"
      borderColor="rule"
      bg="sheet"
    >
      <Container sx={{ py: { base: 12, md: 16 } }}>
        <Grid
          templateColumns={{ base: '1fr', sm: '1fr 1fr', lg: '2fr 1fr 1fr' }}
          gap={10}
          fontSize="sm"
        >
          <Box maxW="22rem">
            <Logo logoSrc={logo} width={120} />
            <Text mt={4} color="ink.500">
              Automations and custom software for businesses that still run on
              spreadsheets, inboxes and copy-paste.
            </Text>
          </Box>

          <Stack as="nav" aria-label="Footer" spacing={3}>
            <Text fontWeight={600}>Company</Text>
            {navigation.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.title}
              </FooterLink>
            ))}
            <FooterLink href="/contact">Contact</FooterLink>
          </Stack>

          <Stack as="address" fontStyle="normal" spacing={3}>
            <Text fontWeight={600}>Get in touch</Text>
            <ChakraLink
              href="mailto:info@documated.com"
              color="ink.700"
              _hover={{ color: 'ink.900' }}
            >
              info@documated.com
            </ChakraLink>
            <Text color="ink.500">
              77 Sir John Rogerson's Quay
              <br />
              Grand Canal Dock, Dublin D02 NP08
            </Text>
          </Stack>
        </Grid>

        <Text
          mt={12}
          pt={6}
          borderTop="1px solid"
          borderColor="rule"
          fontSize="sm"
          color="ink.500"
        >
          © {new Date().getFullYear()} Gemtech Solutions Ltd
        </Text>
      </Container>
    </Box>
  );
};

export default Footer;
