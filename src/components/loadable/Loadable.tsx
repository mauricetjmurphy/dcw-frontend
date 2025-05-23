import { Box, Progress } from "@chakra-ui/react";
import { Suspense, ElementType } from "react";

const Loader = () => {
  return (
    <Box pt={3}>
      <Progress colorScheme="black" size="xs" isIndeterminate />
    </Box>
  );
};

const Loadable = (Component: ElementType) => (props: any) =>
  (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
