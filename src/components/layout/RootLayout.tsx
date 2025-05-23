import {
  Box,
  Button,
  Grid,
  GridItem,
  IconButton,
  SystemStyleObject,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { ReactNode, useState } from 'react';
import { IconMenu, IconX } from '@tabler/icons-react';
import logo from '../../assets/icons/logo.svg';
import logoWhite from '../../assets/svgs/logo-white.svg';
import Footer from '../navigation/footer/Footer';
import { SocialMedia } from '../social-media/SocialMedia';
import { Office } from '../offices/Office';
import Logo from '../logo/Logo';

interface HeaderProps {
  Icon: React.ComponentType;
  expanded: boolean;
  setExpanded: (arg: boolean) => void;
  inverted: boolean;
}

interface DropDownMenuProps {
  expanded: boolean;
  setExpanded: (arg: boolean) => void;
  inverted: boolean;
}

interface NavigationProps {
  expanded: boolean;
  setExpanded: (arg: boolean) => void;
}

interface NavigationRowProps {
  rows: string;
  columns: string;
  children: ReactNode;
}

interface NavigationItemProps {
  rowSpan: number;
  colSpan: number;
  children: ReactNode;
  path: string;
  sx?: SystemStyleObject;
  expanded: boolean;
  setExpanded: (arg: boolean) => void;
}

const Header = ({ Icon, setExpanded, expanded, inverted }: HeaderProps) => {
  const navigate = useNavigate();
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      px={'32px'}
      mx={'auto'}
      maxWidth={'80rem'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Link
        to="/"
        aria-label="Home"
        onClick={() => {
          if (expanded) {
            setExpanded(false);
          }
        }}
      >
        <Logo
          logoSrc={inverted ? logoWhite : logo}
          width={isLargerThan600 ? 160 : 120}
        />
      </Link>
      <Box display="flex" alignItems="center">
        {isLargerThan600 && (
          <Button
            bg={inverted ? '#fff' : '#000'}
            color={inverted ? '#000' : '#fff'}
            fontSize={'13px'}
            h={'36px'}
            px={'24px'}
            border={'1px solid #000'}
            borderRadius={'20px'}
            onClick={() => {
              if (expanded) {
                setExpanded(false);
              }
              navigate('/contact');
            }}
            _hover={{ bg: '#fff', color: '#000', border: '1px solid #000' }}
          >
            Contact us
          </Button>
        )}

        <IconButton
          isRound={true}
          bg={'transparent'}
          ml={4}
          onClick={() => setExpanded(!expanded)}
          aria-label="Expand dropdown"
          _hover={{
            color: expanded ? '#000' : '#fff',
            bg: 'gray.300',
          }}
          icon={
            <Box as={Icon} w={6} h={6} color={expanded ? '#fff' : '#000'} />
          }
        />
      </Box>
    </Box>
  );
};

const NavigationItem = ({
  rowSpan,
  colSpan,
  children,
  path,
  sx,
  setExpanded,
}: NavigationItemProps) => {
  const navigate = useNavigate();
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <GridItem
      w={'100%'}
      color={'#fff'}
      rowSpan={rowSpan}
      colSpan={colSpan}
      display={'flex'}
      justifyContent={isLargerThan600 ? 'end' : 'start'}
      textAlign={isLargerThan600 ? 'center' : 'left'}
      bg="#000"
      py={isLargerThan600 ? '64px' : '32px'}
      sx={{ ...sx }}
      onClick={() => {
        setExpanded(false);
        navigate(path);
      }}
      _hover={{ bg: 'gray.800', cursor: 'pointer' }}
    >
      <Button
        sx={{
          display: 'flex',
          justifyContent: 'start',
          ml: '64px',
          bg: 'transparent',
          color: '#fff',
          w: '100%',
          h: '100%',
          p: 0,
        }}
        _hover={{ bg: 'transparent' }}
      >
        <Text sx={{ fontSize: isLargerThan600 ? '40px' : '32' }}>
          {children}
        </Text>
      </Button>
    </GridItem>
  );
};

const NavigationRow = ({ rows, columns, children }: NavigationRowProps) => {
  return (
    <Grid templateRows={rows} templateColumns={columns} gap={0}>
      {children}
    </Grid>
  );
};

const Navigation = ({ expanded, setExpanded }: NavigationProps) => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  return (
    <Box as={'nav'}>
      <NavigationRow
        rows={isLargerThan600 ? '1fr' : '1fr 1fr 1fr'}
        columns={isLargerThan600 ? '1fr 1fr' : '1fr'}
      >
        {!isLargerThan600 && (
          <NavigationItem
            expanded={expanded}
            setExpanded={setExpanded}
            rowSpan={1}
            colSpan={1}
            path="/contact"
            sx={{
              borderLeft: '1px solid #262626',
              borderBottom: '1px solid #262626',
            }}
          >
            Contact Us
          </NavigationItem>
        )}
        <NavigationItem
          expanded={expanded}
          setExpanded={setExpanded}
          sx={{ ml: 'auto', borderBottom: '1px solid #262626' }}
          rowSpan={1}
          colSpan={1}
          path="/about"
        >
          About Us
        </NavigationItem>
        <NavigationItem
          expanded={expanded}
          setExpanded={setExpanded}
          rowSpan={1}
          colSpan={1}
          path="/process"
          sx={{
            borderLeft: '1px solid #262626',
            borderBottom: '1px solid #262626',
          }}
        >
          Our Process
        </NavigationItem>
      </NavigationRow>
    </Box>
  );
};

const DropDownMenu = ({
  expanded,
  setExpanded,
  inverted,
}: DropDownMenuProps) => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={
        expanded ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
      }
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      style={{ overflow: 'hidden' }}
    >
      <Box
        sx={{
          bg: '#000',
          width: '100%',
        }}
      >
        <Box sx={{ borderBottom: '1px solid #262626', p: '56px 0 64px 0' }}>
          <Header
            Icon={expanded ? IconX : IconMenu}
            expanded={expanded}
            setExpanded={setExpanded}
            inverted={inverted}
          />
        </Box>
        <Navigation expanded={expanded} setExpanded={setExpanded} />
        <Grid
          templateRows={'1fr'}
          templateColumns={isLargerThan600 ? '1fr 1fr' : '1fr'}
          gap={0}
          px={'32px'}
          mx={'auto'}
          maxWidth={'80rem'}
        >
          <GridItem py={'64px'} color={'#fff'} colSpan={1}>
            <Office invert />
          </GridItem>
          <GridItem
            p={isLargerThan600 ? '64px' : '0px 0px 32px 0px'}
            color={'#fff'}
            colSpan={1}
          >
            <SocialMedia />
          </GridItem>
        </Grid>
      </Box>
    </motion.div>
  );
};

const RootLayout = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box bg={'#000'} minHeight={'100vh'} maxWidth={'100vw'} overflow={'hidden'}>
      <DropDownMenu
        expanded={expanded}
        setExpanded={setExpanded}
        inverted={expanded}
      />

      <Box
        sx={{
          mt: '8px',
          pt: '56px',
          borderTopLeftRadius: '40px',
          borderTopRightRadius: '40px',
          bg: '#fff',
        }}
      >
        {!expanded && (
          <Header
            Icon={expanded ? IconX : IconMenu}
            expanded={expanded}
            setExpanded={setExpanded}
            inverted={expanded}
          />
        )}
      </Box>

      <main style={{ minHeight: 'calc(100vh - 105px)', background: '#fff' }}>
        <Outlet />
      </main>

      <Footer />
    </Box>
  );
};

export default RootLayout;
