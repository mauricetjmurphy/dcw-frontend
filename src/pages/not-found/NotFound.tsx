import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { PageIntro } from '@/components/page-intro/PageIntro';
import { Container } from '@/components/container/Container';
import { usePageMeta } from '@/lib/seo/usePageMeta';

export default function NotFound() {
  usePageMeta({ title: 'Page not found', noindex: true });

  return (
    <>
      <PageIntro title="This page doesn't exist">
        <p>
          The link may be out of date, or the address may have a typo. Try the
          home page, or tell us what you were looking for.
        </p>
      </PageIntro>
      <Container sx={{ mt: 8 }}>
        <Flex gap={3} wrap="wrap">
          <Button as={Link} to="/" size="lg">
            Go to the home page
          </Button>
          <Button as={Link} to="/contact" size="lg" variant="secondary">
            Contact us
          </Button>
        </Flex>
      </Container>
    </>
  );
}
