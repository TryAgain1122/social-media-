//Username password firstname, lastname isAdmin, profilePicture about, lives in worksAt relationship, followers, following

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    profilePicture: String,
    coverPhoto: String,
    about: String,
    livesIn: String,
    worksAt: String,
    relationship: String,
    followers: [],
    following: [],
  },
  { Timestamp: true }
);

const userModel = mongoose.model("user",userSchema);
export default userModel;
