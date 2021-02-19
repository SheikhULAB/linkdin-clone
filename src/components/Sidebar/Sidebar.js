import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1547534887-8d299f2c126b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHw%3D&auto=format&fit=crop&w=700&q=60"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Sheikh Yeamin</h2>
        <h4>sheikhyeamin@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>who viewd you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>who viewd you</p>
          <p className="sidebar__statNumber">2,444</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareEngineering")}
        {recentItem("design")}
        {recentItem("algorithm")}
      </div>
    </div>
  );
};

export default Sidebar;
