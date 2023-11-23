import { Stack } from "@chakra-ui/react";
import RoomCard from "./RoomCard";
import ModalCreateRoom from "./ModalCreateRoom";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors";

export default function RoomsStack({ rooms }) {
  const user = useSelector(userSelector);
  return (
    <Stack className="grayBlock" placeItems="center" gap={15}>
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
      {user && <ModalCreateRoom />}
    </Stack>
  );
}
