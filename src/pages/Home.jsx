import { Stack } from "@chakra-ui/react";
import RoomCard from "../components/RoomCard";
export default function Home() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      className="grayBlock"
      justifyContent="center"
    >
      <RoomCard
        name="Room 1"
        desc="Listen to the greatest singer Marina and the diamonds with friends right now!"
      />
      <RoomCard
        name="Room 2"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
    </Stack>
  );
}
