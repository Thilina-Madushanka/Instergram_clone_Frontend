import React, { useEffect } from "react";
import ProfileUserDetails from "../../Components/ProfileComponents/ProfileUserDetails";
import ReqUserPostPart from "../../Components/ProfileComponents/ReqUserPostPart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  findUserByUserNameAction,
  getUserProfileAction,
} from "../../Redux/User/Action";
import { isFollowing, isReqUser } from "../../Config/Logic";

const Profile = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { username } = useParams();
  const { user } = useSelector((store) => store); // for redux

  const isReq = isReqUser(user.reqUser?.id, user.findByUsername?.id);
  const isFollowed = isFollowing(user.reqUser, user.findByUsername);
  console.log("----------", user);

  useEffect(() => {
    const data = {
      jwt: token,
      username,
    };
    dispatch(getUserProfileAction(token));
    dispatch(findUserByUserNameAction(data));
  }, [username, user.follower, user.following]);

  return (
    <div className="px-20">
      {user.reqUser && (
        <div>
          <div>
            <ProfileUserDetails
              user={isReq ? user.reqUser : user.findByUsername}
              isFollowing={isFollowed}
              isRequser={isReq}
            />
          </div>
          <div>
            <ReqUserPostPart
              user={isReq ? user.reqUser : user.findByUsername}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
