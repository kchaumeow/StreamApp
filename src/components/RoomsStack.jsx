import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";
import { useSelector } from "react-redux";
import { roomsSelector, userSelector } from "../store/selectors";

export default function RoomsStack() {
  const user = useSelector(userSelector);
  const rooms = useSelector(roomsSelector);
  return (
    <Stack className="grayBlock" placeItems="center" spacing={15}>
      {user && (
        <>
          <Stack
            direction="row"
            flexWrap="wrap"
            w="70%"
            alignItems="center"
            gap={5}
          >
            {rooms.map((room) => {
              return <RoomCard key={room.id} id={room.name} desc={room.desc} />;
            })}
          </Stack>
          <ModalCreateRoom />
        </>
      )}
    </Stack>
  );
}
