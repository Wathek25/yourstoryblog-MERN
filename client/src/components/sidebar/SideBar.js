import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";

export default function SideBar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span>
        <img
          src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1644571755/Your%20stories%20blog/logo/stories_logo_vngcfk.jpg"
          alt="logoImg"
        />
        <p>
          Anyone can write on YOUR STORY. Thought-leaders, journalists, experts,
          and individuals with unique perspectives share their thinking here.
          You’ll find pieces by independent writers from around the globe,
          stories we feature and leading authors, and smart takes on our own
          suite of blogs and publications.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">
                {c.name}
                <hr />
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i
            className="sidebarIcon fab fa-facebook-square"
            style={{ color: "#3b5998" }}
          ></i>
          <i
            className="sidebarIcon fab fa-twitter-square"
            style={{ color: "#00acee" }}
          ></i>
          <i
            className="sidebarIcon fab fa-pinterest-square"
            style={{ color: "#E60023" }}
          ></i>
          <i
            className="sidebarIcon fab fa-instagram-square"
            style={{ color: "#e95950" }}
          ></i>
        </div>
      </div>
    </div>
  );
}
