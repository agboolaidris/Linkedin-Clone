import React, { useState, useEffect } from "react";
import ProfileFormComponent from "../components/profileForm/profileForm";
import { useSelector, useDispatch } from "react-redux";

function ProfileUserForm() {
  const profile = useSelector((state) => state.Profile.profile);
  const [state, setstate] = useState({
    username: "",
    email: "",
    avater: "",
    handle: "",
    company: "",
    website: "",
    status: "",
    skills: "",
    bio: "",
    github: "",
  });

  useEffect(() => {
    setstate({
      ...state,
      username: profile?.username,
      email: profile?.email,
      avater: profile?.avater,
      handle: profile?.handle,
      company: profile?.company,
      website: profile?.website,
      status: profile?.status,
      skills: profile?.skills,
      bio: profile?.bio,
      github: profile?.github,
    });
  }, [profile]);

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
  return <ProfileFormComponent />;
}
export default ProfileUserForm;
