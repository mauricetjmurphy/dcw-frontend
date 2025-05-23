import { Box, Progress } from "@chakra-ui/react";
import styled from "@emotion/styled";

// styles
const LoaderWrapper = styled(Box)({
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: 1301,
  width: "100%",
});

// ==============================|| LOADER ||============================== //

const Loader = () => (
  <LoaderWrapper>
    <Progress colorScheme="black" size="sm" value={20} />
  </LoaderWrapper>
);

export default Loader;
