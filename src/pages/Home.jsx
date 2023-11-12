import RoomsStack from "../components/RoomsStack";
const rooms = [
  {
    id: 1,
    desc: "Listen to the greatest singer Marina and the diamonds with friends right now!",
  },
  {
    id: 2,
    desc: "Listen to the coolest song Fahrasattel with friends sein right now!",
  },
];
export default function Home() {
  return <RoomsStack rooms={rooms} />;
}
