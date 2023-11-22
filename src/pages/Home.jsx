import { useEffect } from "react";
import RoomsStack from "../components/RoomsStack";
import { getUserRooms } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { roomsSelector, userSelector } from "../store/selectors";
import { setRooms } from "../store/roomSlice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const rooms = useSelector(roomsSelector);
  useEffect(() => {
    if (user) getUserRooms(user.id).then((res) => dispatch(setRooms(res)));
  }, [user]);
  return <RoomsStack rooms={rooms} />;
}
