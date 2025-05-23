import { Box, Button, Text, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Container } from '../container/Container';
import { FadeIn } from '../fade-in/FadeIn';
import { Office } from '../offices/Office';

export function ContactSection() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const navigate = useNavigate();

  return (
    <Container
      sx={{
        mt: { base: 24, sm: 32, lg: 40 },
        bg: '#000',
        borderRadius: '40px',
        maxWidth: '100vw',
      }}
    >
      <FadeIn>
        <Box
          sx={{
            mx: 'auto',
            maxW: '4xl',
            p: isLargerThan600 ? '128px 48px' : '64px 0px',
          }}
        >
          <Box
            sx={{
              maxW: 'xl',
            }}
          >
            <Text
              variant={'h2'}
              sx={{
                fontFamily: "'Mona Sans', sans-serif",
                fontSize: { base: '3xl', sm: '4xl' },
                fontWeight: 'medium',
                color: 'white',
                overflowWrap: 'balance',
              }}
            >
              Tell us about your project
            </Text>
            <Box
              sx={{
                mt: 6,
                display: 'flex',
              }}
            >
              <Button onClick={() => navigate('/contact')}>Contact Us</Button>
            </Box>
            <Box
              sx={{
                mt: 10,
                borderTop: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                pt: 10,
              }}
            >
              <Office invert />
            </Box>
          </Box>
        </Box>
      </FadeIn>
    </Container>
  );
}
