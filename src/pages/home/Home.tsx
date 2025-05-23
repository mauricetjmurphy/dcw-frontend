import { useEffect, useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { Container } from '../../components/container/Container';
import { FadeIn, FadeInStagger } from '../../components/fade-in/FadeIn';
import { SectionIntro } from '../../components/section-intro/SectionIntro';
import { StylizedImage } from '../../components/stylized-image/StylizedImage';
import { GridList, GridListItem } from '../../components/list/List';
import { Testimonial } from '../../components/testimonial/Testimonial';
import { ContactSection } from '../../components/contact-section/ContactSection';
import { loadCaseStudies } from '../../lib/mdx';

import techFastApi from '../../assets/icons/FastAPI.svg';
import techFlask from '../../assets/icons/Flask.svg';
import techAws from '../../assets/icons/AWS.svg';
import techDocker from '../../assets/icons/Docker.svg';
import techGithubActions from '../../assets/icons/GitHub-Actions.svg';
import techHashiCorp from '../../assets/icons/HashiCorp-Terraform.svg';
import techMySQL from '../../assets/icons/MySQL.svg';
import techNextJS from '../../assets/icons/NextJS.svg';
import techNodeJS from '../../assets/icons/NodeJS.svg';
import techPython from '../../assets/icons/Python.svg';
import techReact from '../../assets/icons/React.svg';
import techTypeScript from '../../assets/icons/TypeScript.svg';
import imageLaptop from '@/assets/images/laptop.jpg';
import diyLogo from '@/assets/images/diy-logo.png';
import { CaseStudy } from '@/lib/mdx';

const technologies = [
  ['Fast API', techFastApi],
  ['Flask', techFlask],
  ['AWS', techAws],
  ['Docker', techDocker],
  ['GitHub Actions', techGithubActions],
  ['Terraform', techHashiCorp],
  ['MySQL', techMySQL],
  ['NextJS', techNextJS],
  ['NodeJS', techNodeJS],
  ['Python', techPython],
  ['ReactJS', techReact],
  ['TypeScript', techTypeScript],
];

function Technologies() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      mt={{ base: 6, sm: 8, lg: 14 }}
      borderRadius="40px"
      bg="#000"
      py={isLargerThan600 ? '128px' : '64px'}
    >
      <Container>
        <HStack>
          <Text
            textAlign={{ base: 'center', sm: 'left' }}
            fontFamily="'Mona Sans', sans-serif"
            fontSize="16px"
            fontWeight="600"
            letterSpacing="0.1em"
            color="white"
          >
            Here are some of the technologies that we work with
          </Text>
          <Divider
            orientation="horizontal"
            flex="1"
            sx={{ border: '1px solid #ffffff30' }}
          />
        </HStack>

        <FadeInStagger faster>
          <Grid
            sx={{ width: '100%' }}
            templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
            gap={8}
            mt={10}
          >
            {technologies.map(([client, logo]) => (
              <GridItem key={client}>
                <FadeIn>
                  <Box display="flex" alignItems="center">
                    <img src={logo} alt={client} width={32} height={32} />
                    <Text fontSize={'14px'} pl={4} color="white">
                      {client}
                    </Text>
                  </Box>
                </FadeIn>
              </GridItem>
            ))}
          </Grid>
        </FadeInStagger>
      </Container>
    </Box>
  );
}

function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <>
      <SectionIntro
        sx={{
          mt: isLargerThan600 ? '10rem' : '6rem',
        }}
        title="Real Results with Tailored Automation"
      >
        <Text
          sx={{ color: 'gray', fontSize: isLargerThan600 ? '22px' : '20px' }}
        >
          Discover how we've transformed businesses through innovative
          automation, driving efficiency, and success across industries.
        </Text>
      </SectionIntro>
      <Container sx={{ marginTop: '4rem' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isLargerThan600 ? 'repeat(3, 1fr)' : '1fr',
            gap: '1rem',
          }}
        >
          {caseStudies.map((caseStudy: CaseStudy) => (
            <div
              key={caseStudy.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'stretch',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid #E2E8F0',
                transition: 'background-color 0.2s',
                backgroundColor: 'white',
                cursor: 'pointer',
                height: '100%',
                position: 'relative',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#F7FAFC')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'white')
              }
            >
              <h3>
                <span
                  style={{
                    position: 'absolute',
                    inset: '0',
                    borderRadius: '24px',
                  }}
                />
                <img src={caseStudy.logo} alt={caseStudy.client} />
              </h3>
              <div
                style={{
                  marginTop: '1.5rem',
                  display: 'flex',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#2D3748',
                }}
              >
                <time dateTime={caseStudy.date.split('-')[0]}>
                  {caseStudy.date.split('-')[0]}
                </time>
                <span
                  style={{
                    color: '#A0AEC0',
                    fontSize: '0.875rem',
                  }}
                >
                  /
                </span>
                <span>Case study</span>
              </div>
              <h3
                style={{
                  marginTop: '1.5rem',
                  fontSize: '1.875rem',
                  lineHeight: 1.2,
                  fontWeight: '600',
                  color: '#2D3748',
                }}
              >
                {caseStudy.title}
              </h3>
              <p
                style={{
                  marginTop: '1rem',
                  fontSize: '1rem',
                  color: '#718096',
                }}
              >
                {caseStudy.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

function Services() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box sx={{ pt: { base: 16, sm: 28, md: 32 } }}>
      <SectionIntro
        eyebrow="Services"
        title="Comprehensive Solutions for a Seamless Digital Experience"
      >
        <Text
          sx={{ color: 'gray', fontSize: isLargerThan600 ? '22px' : '20px' }}
        >
          Our services are designed to automate the complexities of your digital
          infrastructure, streamlining workflows, reducing manual effort, and
          helping your business thrive in an increasingly automated world.
        </Text>
      </SectionIntro>
      <Container sx={{ mt: 16 }}>
        <Box
          sx={{
            display: { lg: 'flex' },
            alignItems: { lg: 'center' },
            justifyContent: { lg: 'center' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: { base: 'center', lg: 'flex-end' },
              width: { lg: '100%' },
              pr: { lg: 12 },
            }}
          >
            {isLargerThan600 && (
              <FadeIn style={{ width: '600px' }}>
                <StylizedImage src={imageLaptop} />
              </FadeIn>
            )}
            {!isLargerThan600 && (
              <Box w={'100%'}>
                <img
                  src={imageLaptop}
                  alt="Laptop image"
                  style={{
                    width: '100%',
                    filter: 'grayscale(100%)',
                    borderRadius: '16px',
                  }}
                />
              </Box>
            )}
          </Box>
          <GridList
            templateColumns="1fr"
            templateRows="1fr 1fr 1fr 1fr"
            sx={{
              mt: { base: 16, lg: 0 },
              width: { lg: '100%' },
              pl: { lg: 4 },
            }}
          >
            <GridListItem title="Web development">
              Creating high-performing, beautiful websites should be effortless.
              Our web development services are designed to automate the
              technical complexities, ensuring your marketing pages are
              optimized and easy to manage, allowing you to focus on growth, not
              maintenance.
            </GridListItem>
            <GridListItem title="Application development">
              Our skilled developers leverage modern frameworks to automate the
              app development process, delivering robust, scalable applications
              quickly and efficiently. By automating repetitive tasks, we ensure
              your custom app is ready to meet your users' needs, faster.
            </GridListItem>
            <GridListItem title="Automated E-Commerce Solutions for Effortless Growth">
              Our automated e-commerce development takes the hassle out of
              setting up and managing your online store. From streamlined design
              templates to seamless integrations, we ensure your store is
              optimized for performance and growth—so you can focus on selling,
              not maintaining.
            </GridListItem>
            <GridListItem title="Automated CMS Solutions for Total Control and Efficiency">
              Managing content shouldn’t be a manual, time-consuming task. Our
              custom CMS solutions are designed to automate content management
              workflows, giving you the flexibility and control you need while
              reducing the overhead of daily operations.
            </GridListItem>
          </GridList>
        </Box>
      </Container>
    </Box>
  );
}

const HomePage = () => {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)');
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      const studies = (await loadCaseStudies()).slice(0, 3);
      setCaseStudies(studies);
    };
    fetchCaseStudies();
  }, []);

  return (
    <Box bg={'#fff'}>
      <Container
        sx={{
          pt: '128px',
          pb: '64px',
        }}
      >
        <FadeIn style={{ maxWidth: '48rem' }}>
          <Text
            sx={{
              fontFamily: 'Mona Sans',
              fontSize: isLargerThan600 ? '64px' : '36px',
              fontWeight: 'bold',
              letterSpacing: '-0.025em',
              textWrap: 'balance',
              color: '#111111',
              lineHeight: isLargerThan600 ? '68px' : '44px',
            }}
            variant={'h1'}
          >
            Revolutionize Your Workflow with Automation
          </Text>
          <Text
            mt={6}
            fontSize={isLargerThan600 ? '22px' : '20px'}
            color="gray"
          >
            From repetitive tasks to complex challenges, we implement automation
            systems that free your team to focus on what matters most.
          </Text>
        </FadeIn>
      </Container>

      <Technologies />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        sx={{
          mt: { base: 24, sm: 32, lg: 40 },
        }}
        client={{ name: 'DIY Divorce Solutions', logo: diyLogo }}
      >
        Working with Documated transformed our document automation process. They
        built a platform that automates client responses, securely stores data,
        and generates legal documents with incredible efficiency. Tasks that
        once took hours are now completed in minutes, with improved accuracy and
        minimal human error. The team's expertise and support made the
        transition seamless, and we've seen a significant boost in productivity.
        We highly recommend Documated for any organization looking to streamline
        their operations.
      </Testimonial>

      <Services />

      <ContactSection />
    </Box>
  );
};

export default HomePage;
