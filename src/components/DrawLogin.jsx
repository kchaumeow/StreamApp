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
} from "@chakra-ui/react";
import React, { useState } from "react";

function loginUser(email, pass) {
  console.log(email, pass);
}

export default function DrawerLogin() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <Button
        ref={btnRef}
        variant="outline"
        colorScheme="whatsapp"
        onClick={onOpen}
      >
        Login
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
            <Stack gap={5}>
              <Input
                placeholder="Type your email"
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                borderColor="#55bd79"
              />
              <Input
                placeholder="Type your password"
                type="email"
                required
                onChange={(e) => setPass(e.target.value)}
                borderColor="#55bd79"
              />
            </Stack>
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
              onClick={() => loginUser(email, pass)}
            >
              Login
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
