import { Box, Heading, Stack } from "@chakra-ui/react";
import DrawerLogin from "../components/DrawerLogin";
import { Link, Outlet } from "react-router-dom";
export default function Layout({ children }) {
  return (
    <>
      <Stack
        direction="row"
        className="grayBlock"
        justifyContent="space-between"
        p={5}
      >
        <Link to="/">
          <Heading className="grayBlock">Stream audio</Heading>
        </Link>
        <DrawerLogin />
      </Stack>

      <Outlet />
    </>
  );
}
