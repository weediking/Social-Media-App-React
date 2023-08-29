import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
      <Sidebar/>
      <div className="profileRight">
        <div className="profileRightTop">
          <div className="profileCover">
            <img src="https://i.ibb.co/9Y9HHjX/3.jpg" alt="" className="profileCoverImg" />
            <img src="https://i.ibb.co/vmZypXX/mypic.jpg" alt="" className="profileUserImg" />
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Waleed Mehmood</h4>
            <span className="profileInfoDesc">I am a Website developer</span>
          </div>
        </div>
        <div className="profileRightBottom">
          <Feed/>
          <Rightbar profile/>
        </div>
      </div>
      </div>
    </>
  )
}
