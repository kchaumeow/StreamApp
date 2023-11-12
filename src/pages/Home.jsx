import { Stack } from "@chakra-ui/react";
import AudioCard from "../components/AudioCard";
export default function Home() {
  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      className="grayBlock"
      justifyContent="center"
    >
      <AudioCard
        name="Marina and the diamonds"
        desc="Listen to the greatest singer Marina and the diamonds with friends right now!"
      />
      <AudioCard
        name="Fahradsattel sein"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
      <AudioCard
        name="Fahradsattel sein"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
      <AudioCard
        name="Fahradsattel sein"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
      <AudioCard
        name="Fahradsattel sein"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
      <AudioCard
        name="Fahradsattel sein"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
      <AudioCard
        name="Fahradsattel sein"
        desc="Listen to the coolest song Fahrasattel with friends sein right now!"
      />
    </Stack>
  );
}
