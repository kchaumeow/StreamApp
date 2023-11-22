import {
  Button,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { createRoom } from "../api";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors";
import { showErrorLogOpts, showSuccessLogOpts } from "../utils/Toasts";

export default function ModalCreateRoom() {
  const user = useSelector(userSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [private_room, setPrivate] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();

  return (
    <>
      <Button onClick={onOpen}>Create new room</Button>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        className="grayBlock"
      >
        <ModalContent>
          <ModalHeader className="blackBlock">Create your room</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form
              id="my-form"
              onSubmit={async (e) => {
                e.preventDefault();
                let room;
                try {
                  room = await createRoom(name, private_room, pass, user.id);
                } catch {
                  toast(showErrorLogOpts);
                  return;
                }
                toast(showSuccessLogOpts);
              }}
            >
              <Stack gap={5}>
                <Input
                  placeholder="Name of room"
                  type="text"
                  required
                  onChange={(e) => setName(e.target.value)}
                  borderColor="#55bd79"
                />
                <Checkbox
                  isRequired
                  onChange={(e) => setPrivate(e.target.checked)}
                >
                  Private room
                </Checkbox>
                {private_room && (
                  <InputGroup>
                    <Input
                      placeholder="Room password"
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
                )}
              </Stack>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              form="my-form"
              type="submit"
              colorScheme="green"
              color="#242424"
              bgGradient="linear(to-r, green.400, green.500, green.600)"
            >
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
