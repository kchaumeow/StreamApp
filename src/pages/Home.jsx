import { useEffect, useState } from "react";
import RoomsStack from "../components/RoomsStack";
import { useDispatch, useSelector } from "react-redux";
import { roomsSelector, userSelector } from "../store/selectors";
import { setRooms } from "../store/roomSlice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  const [rooms, setRoomsArr] = useState([]);
  const roomsRedux = useSelector(roomsSelector);
  useEffect(() => {
    if (user) {
      dispatch(setRooms(user.id));
      setRoomsArr(roomsRedux);
    } else {
      setRoomsArr([]);
    }
  }, [user]);
  return <RoomsStack rooms={rooms} />;
}
