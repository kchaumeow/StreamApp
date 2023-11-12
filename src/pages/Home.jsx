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
        id="1"
        desc="Listen to the greatest singer Marina and the diamonds with friends right now!"
      />
      <RoomCard
        id="2"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
    </Stack>
  );
}
