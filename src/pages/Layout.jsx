import { Button, Heading, Stack } from "@chakra-ui/react";
import DrawerRegister from "../components/DrawerRegister";
import { Link, Outlet } from "react-router-dom";
import DrawerLogin from "../components/DrawLogin";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../store/selectors";
import { setUser } from "../store/userSlice";
import { useEffect } from "react";
import { getUserLocal, setUserLocal } from "../utils/localStorage";
import { getCurrUserReq } from "../api";

export default function Layout() {
  let user = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) user = getUserLocal();
    getCurrUserReq().then((res) => {
      setUserLocal(res);
      dispatch(setUser(res));
    });
  }, []);
  return (
    <Stack className="grayBlock" spacing={40}>
      <Stack direction="row" justifyContent="space-between" p={5}>
        <Link to="/">
          <Heading className="grayBlock">Stream audio</Heading>
        </Link>
        <Stack direction="row" gap={3}>
          {user ? (
            <>
              <Link to={`/users/${user.id}`}>
                <Button
                  colorScheme="green"
                  color="#242424"
                  bgGradient="linear(to-r, green.400, green.500, green.600)"
                >
                  {user.name} profile
                </Button>
              </Link>
              <Button
                colorScheme="red"
                color="#242424"
                onClick={() => dispatch(setUser(null))}
              >
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
    </Stack>
  );
}
