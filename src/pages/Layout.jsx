import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import DrawerLogin from "../components/DrawerLogin";
export default function Layout({ children }) {
  return (
    <>
      <Stack direction="row" className="grayBlock" justifyContent="space-between" p={5}>
        <Heading className="grayBlock">
          Stream audio
        </Heading>
        <DrawerLogin />
      </Stack>

      <Box>{children}</Box>
    </>
  );
}
