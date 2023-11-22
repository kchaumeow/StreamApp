import { useEffect, useState } from "react";
import RoomsStack from "../components/RoomsStack";
import { getUserRooms } from "../api";
import { useSelector } from "react-redux";
import { userSelector } from "../store/selectors";

export default function Home() {
  const user = useSelector(userSelector);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    if (user) setRooms(getUserRooms(user.id).then((res) => res));
  }, []);
  return <RoomsStack rooms={rooms} />;
}
