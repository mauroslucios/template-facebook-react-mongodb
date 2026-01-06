import './profile.css';
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { Users } from "../../dummyData";
export default function Profile() {
    return (
            <>
               <Topbar />
                <div className="profile">
                    <Sidebar />
                    <div className="profileRight">
                        <div className="profileRightTop">
                            <div className="profileCover">
                                <img className="profileCoverImg" 
                                    src="assets/person/capa.jpg" 
                                    alt="" 
                                />
                                <img className="profileUserImg" 
                                    src={Users.filter((u) => u.id === 1)[0].profilePicture}
                                    alt=""
                                 />
                            </div>
                            <div className="profileInfo">
                                <h4 className="profileInfoName">{Users.filter((u) => u.id === 1)[0].username}</h4>
                                <span className="profileInfoDesc">Hello my friends!</span>
                            </div>
                        </div>
                        <div className="profileRightBottom">
                            <Feed />
                            <Rightbar profile />    
                        </div>
                    </div>
                </div>
            </>
        );
}

