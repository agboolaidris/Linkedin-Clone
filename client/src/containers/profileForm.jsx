import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProfileFormComponent from "../components/profileForm/profileForm";
import { postUserProfile } from "../redux/action/profile";

function ProfileUserForm() {
  const profile = useSelector((state) => state.Profile.profile);
  const dispatch = useDispatch();
  //select option for status selectListGroup
  const listOption = [
    {
      label: "--select option--",
    },
    {
      value: "currently working",
      label: "currently working",
    },
    {
      value: "looking for job",
      label: "looking for job",
    },
    {
      value: "self-employed",
      label: "self-employed",
    },
  ];

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
    twiter: "",
    facebook: "",
    instagram: "",
    linkedin: "",
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
      skills: profile?.skills.join(),
      bio: profile?.bio,
      github: profile?.github,
      twiter: profile.social?.twiter,
      facebook: profile.social?.facebook,
      instagram: profile.social?.instagram,
      linkedin: profile.social?.linkedin,
    });
  }, [profile]);

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
      avater: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUserProfile(state));
  };

  return (
    <ProfileFormComponent
      state={state}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      listOption={listOption}
    />
  );
}
export default ProfileUserForm;
