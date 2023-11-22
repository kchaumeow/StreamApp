import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";

export default function RoomsStack({ rooms }) {
  return (
    <Stack className="grayBlock" placeContent="center">
      <Stack direction="row" flexWrap="wrap" w="70$">
        {rooms.map((room) => {
          return <RoomCard key={room.id} id={room.name} desc={room.desc} />;
        })}
        <ModalCreateRoom />
      </Stack>
    </Stack>
  );
}
