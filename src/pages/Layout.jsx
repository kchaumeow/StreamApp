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
import { useToast } from "@chakra-ui/react";
import { showErrorRegOpts } from "../utils/Toasts";

export default function Layout() {
  const toast = useToast();
  let user = useSelector(userSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) user = getUserLocal();
    getCurrUserReq()
      .then((res) => {
        setUserLocal(res);
        dispatch(setUser(res));
      })
      .catch((err) => {
        toast(showErrorRegOpts(err.response.data.message));
      });
  }, []);
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
              <Link to={`/users/${user.id}`}>
                <Button color="#242424" colorScheme="green">
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
    </>
  );
}
