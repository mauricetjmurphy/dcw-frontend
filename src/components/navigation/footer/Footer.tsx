import {
  Box,
  Button,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/icons/logo.svg';
// import { IconArrowAutofitContent } from '@tabler/icons-react';
import { socialMediaProfiles } from '../../social-media/SocialMedia';
import { FadeIn } from '../../fade-in/FadeIn';
import Logo from '../../logo/Logo';

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Process', href: '/process' },
      { title: 'Contact us', href: '/contact' },
    ],
  },
  {
    title: 'Connect',
    links: socialMediaProfiles,
  },
  {
    title: 'Work',
    links: [{ title: 'DIY Divorce Solutions', href: '/' }],
  },
];

interface Link {
  title: string;
  href: string;
  external?: boolean;
}

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <Box as="nav">
      <List
        role="list"
        display="grid"
        gridTemplateColumns={{ base: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)' }}
        gap={8}
        m={0}
        p={0}
      >
        {navigation.map((section, sectionIndex) => (
          <ListItem key={sectionIndex}>
            <Text fontSize="sm" fontWeight="bold" letterSpacing="wider">
              {section.title}
            </Text>
            <List
              role="list"
              mt={4}
              fontSize="sm"
              color="neutral.700"
              listStyleType="none"
              m={0}
              p={0}
            >
              <Box mt={4}>
                {section.links.map((link: Link, index: number) => (
                  <ListItem key={index}>
                    {link.external && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.href}
                        style={{
                          background: 'transparent',
                          fontWeight: 300,
                          height: '40px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'start',
                          padding: 0,
                          fontSize: '14px',
                        }}
                      >
                        {link.title}
                      </a>
                    )}
                    {!link.external && (
                      <Button
                        sx={{
                          bg: 'transparent',
                          fontWeight: 300,
                          display: 'flex',
                          justifyContent: 'start',
                          p: 0,
                          fontSize: '14px',
                        }}
                        onClick={() => {
                          navigate(link.href);
                        }}
                        transition="color 0.2s"
                        _hover={{ color: 'gray.700', bg: 'transparent' }}
                      >
                        {link.title}
                      </Button>
                    )}
                  </ListItem>
                ))}
              </Box>
            </List>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

// const NewsletterForm = () => {
//   return (
//     <Box as="form" maxW="sm">
//       <Heading
//         as="h2"
//         fontSize="sm"
//         fontWeight="semibold"
//         letterSpacing="wider"
//         color="neutral.950"
//       >
//         Sign up for our newsletter
//       </Heading>
//       <Text mt={4} fontSize="sm" color="neutral.700">
//         Subscribe to get the latest design news, articles, resources and
//         inspiration.
//       </Text>
//       <Box position="relative" mt={6}>
//         <Input
//           type="email"
//           placeholder="Email address"
//           autoComplete="email"
//           aria-label="Email address"
//           w="full"
//           borderRadius="2xl"
//           border="1px solid"
//           borderColor="neutral.300"
//           bg="transparent"
//           py={4}
//           pl={6}
//           pr={20}
//           fontSize="base"
//           color="neutral.950"
//           transition="ring 0.3s ease"
//           _focus={{
//             borderColor: 'neutral.950',
//             ring: 4,
//             ringColor: 'neutral.950',
//             outline: 'none',
//           }}
//         />
//         <Box
//           position="absolute"
//           insetY={1}
//           right={1}
//           display="flex"
//           justifyContent="end"
//         >
//           <Button
//             type="submit"
//             aria-label="Submit"
//             aspectRatio="1"
//             h="full"
//             display="flex"
//             alignItems="center"
//             justifyContent="center"
//             borderRadius="xl"
//             bg="neutral.950"
//             color="white"
//             transition="background-color 0.2s"
//             _hover={{ bg: 'neutral.800' }}
//           >
//             <IconArrowAutofitContent color="#000" size={'14px'} />
//           </Button>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

const Footer = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box
      bg={'#fff'}
      sx={{
        pt: { base: '6rem', sm: '8rem', lg: '10rem' },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box as="footer" px={'32px'} mx={'auto'} maxWidth={'80rem'}>
        <FadeIn>
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            columnGap="24rem"
            rowGap="4rem"
          >
            <GridItem>
              <Navigation />
            </GridItem>

            {/* <GridItem>
              <NewsletterForm />
            </GridItem> */}
          </Grid>

          <Box
            mb={isLargerThan600 ? '3rem' : '32px'}
            mt={isLargerThan600 ? '3rem' : '32px'}
            pt={isLargerThan600 ? '3rem' : '32px'}
            display="flex"
            flexWrap="wrap"
            alignItems={isLargerThan600 ? 'flex-end' : 'center'}
            justifyContent="space-between"
            columnGap="1.5rem"
            rowGap="1rem"
            borderTop="1px solid"
            borderColor="gray.300"
          >
            <Link to="/" aria-label="Home">
              <Logo logoSrc={logo} width={120} />
            </Link>
            <Text fontSize="sm" color="#000">
              © {new Date().getFullYear()} Gemtech Solutions Ltd
            </Text>
          </Box>
        </FadeIn>
      </Box>
    </Box>
  );
};

export default Footer;
