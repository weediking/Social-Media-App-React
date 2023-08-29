import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar({profile}){
  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img src="https://i.ibb.co/2Y84Mjh/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Abdullah Malik</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="https://i.ibb.co/wdzds6b/ad2.png" alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">Rawalpindi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Rawalpindi</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="righbarFollowings">
        <div className="righbarFollowing">
          <img src="https://i.ibb.co/GpW0y16/1.jpg" alt="" className="righbarFollowingImg" />
          <span className="rightbarFollowingName">Humaira Osad</span>
        </div>
        <div className="righbarFollowing">
          <img src="https://i.ibb.co/QrdZWHy/2.jpg" alt="" className="righbarFollowingImg" />
          <span className="rightbarFollowingName">Wasiq Abdullah</span>
        </div>
        <div className="righbarFollowing">
          <img src="https://i.ibb.co/6yZQ9zB/3.jpg" alt="" className="righbarFollowingImg" />
          <span className="rightbarFollowingName">Sparko Edith</span>
        </div>
        <div className="righbarFollowing">
          <img src="https://i.ibb.co/hYHbZ3k/4.jpg" alt="" className="righbarFollowingImg" />
          <span className="rightbarFollowingName">Fiza khan</span>
        </div>
        <div className="righbarFollowing">
          <img src="https://i.ibb.co/T1gLmGL/5.jpg" alt="" className="righbarFollowingImg" />
          <span className="rightbarFollowingName">Malaika Javed</span>
        </div>
        <div className="righbarFollowing">
          <img src="https://i.ibb.co/KXFnmHn/6.jpg" alt="" className="righbarFollowingImg" />
          <span className="rightbarFollowingName">Alvine Scarlett</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
