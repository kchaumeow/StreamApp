import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";

export default function RoomsStack({ rooms }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      className="grayBlock"
      justifyContent="center"
    >
      {rooms.map((room) => {
        return <RoomCard key={room.id} id={room.id} desc={room.desc} />;
      })}
      <ModalCreateRoom />
    </Stack>
  );
}
