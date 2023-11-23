export const showErrorLogOpts = {
  title: "Account wasn't found.",
  description: "Check for errors in your info",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "bottom-left",
};

export const showSuccessLogOpts = {
  title: "Success",
  description: "You are logged in",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "bottom-left",
};

export function showErrorRegOpts(desc) {
  return {
    title: "Error creating account",
    description: desc,
    status: "error",
    duration: 3000,
    isClosable: true,
    position: "bottom-left",
  };
}

export const showErrorRoomName = {
  title: "Error creating room",
  description: "Room with this name already exists",
  status: "error",
  duration: 3000,
  isClosable: true,
  position: "bottom-left",
};

export const showSuccessRoomCreate = {
  title: "Success",
  description: "New room was created!",
  status: "success",
  duration: 3000,
  isClosable: true,
  position: "bottom-left",
};
