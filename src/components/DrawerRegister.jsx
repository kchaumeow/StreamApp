import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { registerReq } from "../api";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

async function registerUser(name, email, pass) {
  return await registerReq(name, email, pass);
}

export default function DrawerRegister() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="green"
        textColor="black"
        onClick={onOpen}
      >
        Register
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton textColor="white" />
          <DrawerHeader className="blackBlock" fontSize="x-large">
            Login to your account
          </DrawerHeader>
          <DrawerBody className="grayBlock">
            <form
              id="my-form"
              onSubmit={async (e) => {
                e.preventDefault();
                const user = await registerUser(name, email, pass);
                console.log(user);
                dispatch(setUser(user));
              }}
            >
              <Stack gap={5}>
                <Input
                  placeholder="Type your username"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  borderColor="#55bd79"
                />
                <Input
                  placeholder="Type your email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  borderColor="#55bd79"
                />
                <InputGroup>
                  <Input
                    placeholder="Type your password"
                    type={show ? "text" : "password"}
                    required
                    onChange={(e) => setPass(e.target.value)}
                    borderColor="#55bd79"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      size="sm"
                      colorScheme="green"
                      color="black"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Stack>
            </form>
          </DrawerBody>

          <DrawerFooter className="blackBlock">
            <Button
              variant="outline"
              colorScheme="green"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              colorScheme="green"
              textColor="black"
              form="my-form"
              type="submit"
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
