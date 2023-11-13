import { Button, Heading, Stack } from "@chakra-ui/react";
import DrawerRegister from "../components/DrawerRegister";
import { Link, Outlet } from "react-router-dom";
import DrawerLogin from "../components/DrawLogin";
// const user = {
//   id: 1,
//   username: "Edward",
//   email: "ed@gmail.com",
// };
const user = undefined;
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
        <Stack direction="row" gap={3}>
          {user ? (
            <>
              <Link to={`/users/${1}`}>
                <Button color="#242424" colorScheme="green">
                  {user.username} profile
                </Button>
              </Link>
              <Button colorScheme="red" color="#242424">
                Logout
              </Button>
            </>
          ) : (
            <>
              <DrawerLogin />
              <DrawerRegister />
            </>
          )}
        </Stack>
      </Stack>

      <Outlet />
    </>
  );
}
