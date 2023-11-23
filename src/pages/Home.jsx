import { useEffect } from "react";
import RoomsStack from "../components/RoomsStack";
import { useDispatch, useSelector } from "react-redux";
import { roomsSelector, userSelector } from "../store/selectors";
import { setRooms } from "../store/roomSlice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector(userSelector);
  let rooms = [];
  useEffect(() => {
    if (user)
      dispatch(setRooms(user.id)).then(
        () => (rooms = useSelector(roomsSelector))
      );
  }, [user]);
  return <RoomsStack rooms={rooms} />;
}
