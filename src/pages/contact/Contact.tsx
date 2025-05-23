import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
  Box,
  Grid,
  Input,
  FormLabel,
  Text,
  Heading,
  Button,
  VStack,
  HStack,
  Radio,
  FormControl,
  GridItem,
  Textarea,
  Spinner,
  // useMediaQuery,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../../components/fade-in/FadeIn';
import { Office } from '../../components/offices/Office';
import { Border } from '../../components/border/Border';
import { PageIntro } from '../../components/page-intro/PageIntro';
import { Container } from '../../components/container/Container';
import { SocialMedia } from '../../components/social-media/SocialMedia';
import { ChangeEvent, useState } from 'react';
import { sendMessage } from '@/services/api/message';
import { IconCircleCheck } from '@tabler/icons-react';

interface RadioInputProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RadioInput({
  label,
  value,
  name,
  checked,
  onChange,
}: RadioInputProps) {
  return (
    <HStack>
      <Radio
        value={value}
        name={name}
        isChecked={checked}
        onChange={onChange}
        size="lg"
        borderColor="gray.300"
        _checked={{
          borderColor: 'gray.800',
          borderWidth: '0.5rem',
        }}
      />
      <Text fontSize="sm" color="gray.800">
        {label}
      </Text>
    </HStack>
  );
}

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
  budget: z.enum(['1-5', '5-10', '10-20', '20+'], {
    errorMap: () => ({ message: 'Please select a budget' }),
  }),
});

const FormError = (name: string) => {
  return (
    <Text sx={{ fontSize: '12px', pt: '8px', pl: '4px', color: 'red' }}>
      {name}
    </Text>
  );
};

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      budget: '',
    },
    validationSchema: toFormikValidationSchema(contactFormSchema),
    onSubmit: async (values, { resetForm }) => {
      try {
        setLoading(true);
        await sendMessage(values);
        setIsSent(true);
        setLoading(false);
        resetForm();
      } catch (e) {
        console.log('Error: ', e);
        resetForm();
      }
    },
  });

  return (
    <GridItem>
      <FadeIn>
        <Box as="form" onSubmit={formik.handleSubmit}>
          <Heading size="md" fontWeight="semibold" color="gray.800">
            Work inquiries
          </Heading>
          <VStack
            spacing={6}
            mt={6}
            p={6}
            border="1px"
            borderColor="gray.300"
            borderRadius="lg"
            bg="whiteAlpha.500"
          >
            <FormControl
              isInvalid={!!(formik.touched.name && formik.errors.name)}
            >
              <Input
                bg={'#f2f2f2'}
                type="text"
                placeholder="Name"
                size="lg"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name &&
                formik.errors.name &&
                FormError(formik.errors.name)}
            </FormControl>

            <FormControl
              isInvalid={!!(formik.touched.email && formik.errors.email)}
            >
              <Input
                bg={'#f2f2f2'}
                type="text"
                placeholder="Email"
                size="lg"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email &&
                formik.errors.email &&
                FormError(formik.errors.email)}
            </FormControl>

            <FormControl
              isInvalid={!!(formik.touched.phone && formik.errors.phone)}
            >
              <Input
                bg={'#f2f2f2'}
                type="text"
                placeholder="Phone"
                size="lg"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone &&
                formik.errors.phone &&
                FormError(formik.errors.phone)}
            </FormControl>

            <FormControl
              isInvalid={!!(formik.touched.message && formik.errors.message)}
            >
              <Textarea
                bg={'#f2f2f2'}
                placeholder="Please type your message here"
                size="md"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message &&
                formik.errors.message &&
                FormError(formik.errors.message)}
            </FormControl>

            <Box display={'flex'} justifyContent={'start'} w={'100%'}>
              <FormControl
                as="fieldset"
                isInvalid={!!(formik.touched.budget && formik.errors.budget)}
                maxW={'60%'}
              >
                <FormLabel as="legend" fontSize="sm" color="gray.500">
                  Budget
                </FormLabel>
                <Grid
                  mt={6}
                  templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
                  gap={8}
                >
                  {/* All RadioInput components share the same "name" for single selection */}
                  <RadioInput
                    label="€1K – €5K"
                    name="budget"
                    value="1-5"
                    checked={formik.values.budget === '1-5'}
                    onChange={formik.handleChange}
                  />
                  <RadioInput
                    label="€5K – €10K"
                    name="budget"
                    value="5-10"
                    checked={formik.values.budget === '5-10'}
                    onChange={formik.handleChange}
                  />
                  <RadioInput
                    label="€10K – €20K"
                    name="budget"
                    value="10-20"
                    checked={formik.values.budget === '10-20'}
                    onChange={formik.handleChange}
                  />
                  <RadioInput
                    label="More than €20K"
                    name="budget"
                    value="20+"
                    checked={formik.values.budget === '20+'}
                    onChange={formik.handleChange}
                  />
                </Grid>
                {formik.touched.budget &&
                  formik.errors.budget &&
                  FormError(formik.errors.budget)}
              </FormControl>
            </Box>
          </VStack>

          <Box display={'flex'} alignItems="center" mt={4}>
            <Button
              disabled={loading}
              type="submit"
              bg={'#000'}
              color={'#fff'}
              size="lg"
              fontWeight={300}
              borderRadius={'24px'}
              border={'2px solid #000'}
              _hover={{ bg: '#fff', border: '2px solid #000', color: '#000' }}
            >
              {loading ? (
                <Spinner
                  thickness="1px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="#fff"
                  size="md"
                />
              ) : (
                <Text>Let’s work together</Text>
              )}
            </Button>
            {isSent && (
              <Box sx={{ ml: 1 }}>
                <IconCircleCheck size={32} color="green" />
              </Box>
            )}
          </Box>
        </Box>
      </FadeIn>
    </GridItem>
  );
}

// Contact Details component
function ContactDetails() {
  return (
    <GridItem>
      <FadeIn>
        <Heading size="md" fontWeight="bold" color="gray.800">
          Our office
        </Heading>
        <Text mt={6} fontSize="sm" color="gray.600">
          Prefer meeting in person? We’re all about remote collaboration, but
          here is our office address — just in case you need it.
        </Text>

        <Office sx={{ mt: 10 }} title={false} />

        <Border sx={{ py: 16 }} />
        <Heading size="md" fontWeight="semibold" color="gray.800">
          Email us
        </Heading>
        <Grid
          mt={6}
          templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)' }}
          gap={8}
        >
          {[['Info', 'info@documated.com']].map(([label, email]) => (
            <Box key={email}>
              <Text fontWeight="semibold" color="gray.800">
                {label}
              </Text>
              <Link to={`mailto:${email}`}>
                <Text color="gray.600" _hover={{ color: 'gray.800' }}>
                  {email}
                </Text>
              </Link>
            </Box>
          ))}
        </Grid>

        <Border sx={{ py: 16 }} />
        <Heading size="md" fontWeight="semibold" color="gray.800">
          Follow us
        </Heading>
        <SocialMedia title={false} />
      </FadeIn>
    </GridItem>
  );
}

// Contact Page Component
export default function Contact() {
  // const [isLargerThan600] = useMediaQuery('(min-width: 600px)');

  return (
    <Box bg={'#fff'}>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <Text>We can’t wait to hear from you.</Text>
      </PageIntro>

      <Container
        sx={{
          mt: { base: 24, sm: 32, lg: 40 },
        }}
      >
        <Grid
          templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
          templateRows={'1fr'}
          gap={{ base: 8, lg: 24 }}
        >
          <ContactDetails />
          <ContactForm />
        </Grid>
      </Container>
    </Box>
  );
}
