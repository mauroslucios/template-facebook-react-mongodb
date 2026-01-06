import './rightbar.css';
import { Users } from "../../dummyData";
import Online from "../online/Online";
export default function Rightbar({profile}) {

  const HomeRightBar = () => {
    return (
      <>
       <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/boxBirthday.png" alt="" />
          <span className="birthdayText">
            <b>Mauro Lucio</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/date-of-birth-969957_1280.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
  const user = Users.find((u) => u.id === 1);
  const friends = Users.filter((u) => u.id !== 1);

  return (
    <>
      <h4 className="rightbarTitle">User information</h4>

      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">{user.city}</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">
            {user.from} - {user.uf}
          </span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">{user.relationship}</span>
        </div>
      </div>

      <h4 className="rightbarTitle">User friends</h4>

      <div className="rightbarFollowings">
        {friends.map((friend) => (
          <div className="rightbarFollowing" key={friend.id}>
            <img
              src={friend.profilePicture}
              alt={friend.username}
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName" title={friend.username}>
              {friend.username}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};


  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightBar />}
      </div>
    </div>
  );
}