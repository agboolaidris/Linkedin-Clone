import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserFormComponent from "../../components/profileForm/userForm/userForm";

function UserForm() {
  const user = useSelector((state) => state.Auth.user);

  const [state, setstate] = useState({
    email: "",
    username: "",
    avater: "",
  });

  useEffect(() => {
    setstate({
      ...state,
      email: user?.email,
      avater: user?.avater,
      username: user?.username,
    });
  }, [user]);

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <UserFormComponent
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default UserForm;
