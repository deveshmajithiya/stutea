import React from "react";
import { Link, Routes } from "react-router-dom";
import "../css/Dashboard.css";
import "../css/NotificationBar.css";
import { Questions } from "./Questions";

import { Route } from "react-router-dom";
import { QuestionTag } from "./QuestionTag";
// import {ReactComponent as NotifIcon} from "../Assets/Rest/Notification.svg"
import { ReactComponent as NotifIconActive } from "../Assets/Click/Notification.svg";
import { ReactComponent as CreditIcon } from "../Assets/Click/Credits.svg";
import { ReactComponent as ProfileIcon } from "../Assets/Click/Profile.svg";
import { NavItem } from "./Notifications/NavItem";
import { Dropdown } from "./Notifications/Dropdown";

const Dashboard = () => {
    return (
        <>
            <div className="dashboard-main">
                <div className="top-icons">
                    {/* <NotifIconActive className='icon-top'/> */}
                    <Link to="/favs">
                        <i className="fas fa-bookmark icon-top"></i>
                    </Link>
                    <NavItem icon={<NotifIconActive />}>
                        <Dropdown type="notif"></Dropdown>
                    </NavItem>
                    <NavItem icon={<CreditIcon />}>
                        <Dropdown type="credits"></Dropdown>
                    </NavItem>
                    <Link to="/profile">
                        <ProfileIcon className="icon-top" />
                    </Link>
                    {/* <NavItem icon={<ProfileIcon/>}>
                        <Dropdown type="profile"></Dropdown>
                    </NavItem> */}
                </div>
                <div className="heading-top">
                    <div className="heading">
                        <p className="line">The one place for all</p>
                        <p className="line">your questions</p>
                    </div>
                    <div className="add-button">
                        <Link className="add-link" to="/add">
                            <button className="add-ques">
                                Ask your Question
                            </button>
                        </Link>
                    </div>
                </div>
                <Routes>
                    <Route exact path="/" element={<Questions />} />

                    <Route exact path="/query" element={<QuestionTag />} />
                </Routes>
            </div>
        </>
    );
};

export default Dashboard;
