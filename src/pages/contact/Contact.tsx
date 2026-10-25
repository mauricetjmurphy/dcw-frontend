import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  Link,
  Radio,
  RadioGroup,
  SimpleGrid,
  Text,
  Textarea,
} from '@chakra-ui/react';
import { IconCircleCheck } from '@tabler/icons-react';
import { useState } from 'react';
import { Container } from '@/components/container/Container';
import { PageIntro } from '@/components/page-intro/PageIntro';
import { sendMessage } from '@/services/api/message';

const budgets = [
  { value: '1-5', label: '€1K – €5K' },
  { value: '5-10', label: '€5K – €10K' },
  { value: '10-20', label: '€10K – €20K' },
  { value: '20+', label: 'More than €20K' },
];

const contactFormSchema = z.object({
  name: z
    .string({ required_error: 'Enter your name' })
    .min(1, 'Enter your name'),
  email: z
    .string({ required_error: 'Enter your email address' })
    .email('Enter a valid email address'),
  phone: z.string().optional(),
  message: z
    .string({ required_error: 'Tell us a little about the process' })
    .min(1, 'Tell us a little about the process'),
  budget: z.enum(['1-5', '5-10', '10-20', '20+'], {
    errorMap: () => ({ message: 'Choose a budget range' }),
  }),
});

const inputStyles = {
  bg: 'paper',
  borderColor: 'rule',
  size: 'lg',
  _hover: { borderColor: 'ink.300' },
} as const;

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');

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
      setStatus('idle');
      try {
        await sendMessage(values);
        setStatus('sent');
        resetForm();
      } catch (e) {
        console.log('Error: ', e);
        setStatus('error');
      }
    },
  });

  const invalid = (field: keyof typeof formik.values) =>
    !!(formik.touched[field] && formik.errors[field]);

  if (status === 'sent') {
    return (
      <Box
        role="status"
        bg="sheet"
        borderRadius="panel"
        p={{ base: 6, md: 10 }}
      >
        <Box as={IconCircleCheck} size={32} color="ok" />
        <Heading as="h2" mt={4} fontSize="xl">
          Message sent
        </Heading>
        <Text mt={2} color="ink.700">
          Thanks for getting in touch. We'll reply by email to arrange a call.
        </Text>
        <Button mt={6} variant="secondary" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </Box>
    );
  }

  return (
    <Box
      as="form"
      noValidate
      onSubmit={formik.handleSubmit}
      bg="sheet"
      borderRadius="panel"
      p={{ base: 6, md: 10 }}
    >
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
        <FormControl isInvalid={invalid('name')} isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            {...inputStyles}
            autoComplete="name"
            {...formik.getFieldProps('name')}
          />
          <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={invalid('email')} isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            {...inputStyles}
            type="email"
            autoComplete="email"
            {...formik.getFieldProps('email')}
          />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>
      </SimpleGrid>

      <FormControl mt={5} isInvalid={invalid('phone')}>
        <FormLabel>
          Phone{' '}
          <Text as="span" color="ink.500" fontWeight={400}>
            (optional)
          </Text>
        </FormLabel>
        <Input
          {...inputStyles}
          type="tel"
          autoComplete="tel"
          {...formik.getFieldProps('phone')}
        />
      </FormControl>

      <FormControl mt={5} isInvalid={invalid('message')} isRequired>
        <FormLabel>What would you like to automate or build?</FormLabel>
        <Textarea
          {...inputStyles}
          rows={5}
          placeholder="For example: every new client fills in a form, then someone retypes it into three documents."
          _placeholder={{ color: 'ink.300' }}
          {...formik.getFieldProps('message')}
        />
        <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
      </FormControl>

      <FormControl
        as="fieldset"
        mt={6}
        isInvalid={invalid('budget')}
        isRequired
      >
        <FormLabel as="legend">Budget</FormLabel>
        <RadioGroup
          name="budget"
          value={formik.values.budget}
          onChange={(value) => formik.setFieldValue('budget', value)}
        >
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={3} mt={1}>
            {budgets.map((budget) => (
              <Radio
                key={budget.value}
                value={budget.value}
                colorScheme="signature"
                borderColor="ink.300"
                bg="paper"
              >
                {budget.label}
              </Radio>
            ))}
          </SimpleGrid>
        </RadioGroup>
        <FormErrorMessage>{formik.errors.budget}</FormErrorMessage>
      </FormControl>

      {status === 'error' && (
        <Text role="alert" mt={6} color="red.600">
          Your message wasn't sent. Check your connection and try again, or
          email us at info@documated.com.
        </Text>
      )}

      <Button
        type="submit"
        size="lg"
        mt={8}
        isLoading={formik.isSubmitting}
        loadingText="Sending"
      >
        Send message
      </Button>
    </Box>
  );
}

export default function Contact() {
  return (
    <>
      <PageIntro title="Tell us about your process">
        <p>
          Describe the work you'd like to stop doing by hand. We'll come back
          with a time for a short call and an honest view of whether software
          can help.
        </p>
      </PageIntro>

      <Container sx={{ mt: { base: 12, md: 16 } }}>
        <Grid
          templateColumns={{ base: '1fr', lg: '2fr 1fr' }}
          gap={{ base: 12, lg: 16 }}
          alignItems="start"
        >
          <ContactForm />

          <Flex direction="column" gap={10}>
            <Box>
              <Text fontWeight={600}>Email</Text>
              <Link
                mt={1}
                display="inline-block"
                href="mailto:info@documated.com"
                color="signature.600"
              >
                info@documated.com
              </Link>
            </Box>
            <Box as="address" fontStyle="normal">
              <Text fontWeight={600}>Office</Text>
              <Text mt={1} color="ink.700">
                77 Sir John Rogerson's Quay
                <br />
                Grand Canal Dock
                <br />
                Dublin D02 NP08, Ireland
              </Text>
            </Box>
          </Flex>
        </Grid>
      </Container>
    </>
  );
}
