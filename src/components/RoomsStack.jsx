import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";

export default function RoomsStack({ rooms }) {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      className="grayBlock"
      justifyContent="center"
    >
      {rooms.map((room) => {
        return <RoomCard id={room.id} desc={room.desc} />;
      })}
    </Stack>
  );
}
