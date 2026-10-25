import { Box, Button, Flex, Grid, Spinner, Text } from '@chakra-ui/react';
import { useReducedMotion } from 'framer-motion';
import { IconCheck, IconPlayerPlay } from '@tabler/icons-react';
import { ReactNode, useEffect, useState } from 'react';

// A sample automation run, modelled on the intake-to-agreement workflow we
// built for a family-law practice. Names are fictional.
const steps = [
  {
    time: '09:41:02',
    title: 'Intake form received',
    detail: '14 answers from aoife.byrne@…',
  },
  {
    time: '09:41:03',
    title: 'Answers checked',
    detail: 'All required fields present',
  },
  {
    time: '09:41:05',
    title: 'Agreement drafted',
    detail: 'Separation_Agreement_Byrne.docx',
  },
  {
    time: '09:41:06',
    title: 'Sent for e-signature',
    detail: 'Waiting on 2 signatures',
  },
  {
    time: '09:41:06',
    title: 'Case file updated',
    detail: 'Saved to client folder',
  },
];

const STEP_MS = 750;

function StepIcon({ state }: { state: 'done' | 'running' | 'queued' }) {
  if (state === 'done') {
    return (
      <Flex
        boxSize="22px"
        borderRadius="full"
        bg="ok"
        color="white"
        align="center"
        justify="center"
      >
        <IconCheck size={14} stroke={3} />
      </Flex>
    );
  }
  if (state === 'running') {
    return (
      <Spinner
        boxSize="22px"
        thickness="2px"
        color="ink.900"
        emptyColor="rule"
        speed="0.8s"
      />
    );
  }
  return (
    <Box
      boxSize="22px"
      borderRadius="full"
      border="2px solid"
      borderColor="rule"
    />
  );
}

// A merged field in the generated document: blank until the draft step runs.
function Field({ filled, children }: { filled: boolean; children: ReactNode }) {
  return (
    <Box
      as="span"
      px="3px"
      mx="-1px"
      borderRadius="3px"
      bg={filled ? 'highlight' : 'sheet'}
      color={filled ? 'ink.900' : 'transparent'}
      transition="background-color 0.4s, color 0.4s"
    >
      {children}
    </Box>
  );
}

function DocLine({ w }: { w: string }) {
  return <Box h="7px" w={w} bg="rule" borderRadius="full" />;
}

export function RunLog() {
  const reduceMotion = useReducedMotion();
  // Starts at 0 in the prerendered HTML too, so hydration matches; with
  // reduced motion the run jumps straight to its finished state.
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduceMotion) setProgress(steps.length);
  }, [reduceMotion]);

  useEffect(() => {
    if (progress >= steps.length) return;
    const t = setTimeout(
      () => setProgress((p) => p + 1),
      progress === 0 ? 900 : STEP_MS
    );
    return () => clearTimeout(t);
  }, [progress]);

  const finished = progress >= steps.length;
  const drafted = progress >= 3;

  return (
    <Box
      bg="paper"
      border="1px solid"
      borderColor="rule"
      borderRadius="panel"
      boxShadow="0 1px 2px rgba(18, 18, 18, 0.06), 0 24px 48px -24px rgba(18, 18, 18, 0.28)"
      overflow="hidden"
      fontSize="sm"
    >
      <Flex
        align="center"
        justify="space-between"
        px={5}
        py={3}
        borderBottom="1px solid"
        borderColor="rule"
        bg="sheet"
        gap={4}
      >
        <Text fontWeight={600} noOfLines={1}>
          New client intake to signed agreement
        </Text>
        <Text
          as="span"
          role="status"
          flexShrink={0}
          px={2.5}
          py={0.5}
          borderRadius="full"
          fontWeight={600}
          fontSize="xs"
          bg={finished ? '#E3F4EC' : 'highlight'}
          color={finished ? 'ok' : 'ink.900'}
        >
          {finished ? 'Completed in 4.1s' : 'Running'}
        </Text>
      </Flex>

      <Grid templateColumns={{ base: '1fr', sm: '1.15fr 1fr' }}>
        <Box as="ol" listStyleType="none" m={0} px={5} py={4}>
          {steps.map((step, i) => {
            const state =
              i < progress ? 'done' : i === progress ? 'running' : 'queued';
            return (
              <Flex
                as="li"
                key={step.title}
                gap={3}
                py={2.5}
                opacity={state === 'queued' ? 0.45 : 1}
                transition="opacity 0.3s"
              >
                <StepIcon state={state} />
                <Box minW={0}>
                  <Text fontWeight={600} lineHeight="22px">
                    {step.title}
                  </Text>
                  <Text color="ink.500" noOfLines={1}>
                    {step.detail}
                  </Text>
                </Box>
                <Text
                  ml="auto"
                  fontFamily="mono"
                  fontSize="xs"
                  color="ink.300"
                  lineHeight="22px"
                  flexShrink={0}
                >
                  {state === 'queued' ? '' : step.time}
                </Text>
              </Flex>
            );
          })}
        </Box>

        <Box
          display={{ base: 'none', sm: 'block' }}
          bg="sheet"
          borderLeft="1px solid"
          borderColor="rule"
          p={5}
        >
          <Box
            bg="paper"
            borderRadius="4px"
            boxShadow="0 1px 3px rgba(18, 18, 18, 0.12)"
            p={5}
            fontSize="11px"
            lineHeight={1.9}
            color="ink.700"
            aria-hidden
          >
            <Text fontWeight={700} fontSize="12px" color="ink.900" mb={2}>
              Separation Agreement
            </Text>
            <Text>
              This agreement is made on{' '}
              <Field filled={drafted}>3 March 2026</Field> between{' '}
              <Field filled={drafted}>Aoife Byrne</Field> and{' '}
              <Field filled={drafted}>Cian Byrne</Field>.
            </Text>
            <Flex direction="column" gap={2} mt={3}>
              <DocLine w="100%" />
              <DocLine w="92%" />
              <DocLine w="96%" />
            </Flex>
            <Text mt={3}>
              Residence of the children:{' '}
              <Field filled={drafted}>14 Ashfield Road, Ranelagh</Field>
            </Text>
            <Flex direction="column" gap={2} mt={3}>
              <DocLine w="88%" />
              <DocLine w="64%" />
            </Flex>
            <Flex mt={5} gap={4}>
              {['Party A', 'Party B'].map((party) => (
                <Box
                  key={party}
                  flex={1}
                  borderTop="1px solid"
                  borderColor="ink.300"
                  pt={1}
                  color="ink.500"
                >
                  <Text as="span" whiteSpace="nowrap">
                    {party}
                  </Text>
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Grid>

      <Flex
        align="center"
        justify="space-between"
        px={5}
        py={3}
        borderTop="1px solid"
        borderColor="rule"
        color="ink.500"
        gap={4}
      >
        <Text>Previously hours of admin per client</Text>
        <Button
          size="sm"
          variant="ghost"
          color="ink.900"
          leftIcon={<IconPlayerPlay size={14} />}
          isDisabled={!finished}
          onClick={() => setProgress(0)}
        >
          Run again
        </Button>
      </Flex>
    </Box>
  );
}
