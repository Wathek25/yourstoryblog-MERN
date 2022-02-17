import "./Header.css";
export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleLg">Your Story</span>
        <span className=" headerTitleSm">
          " It's a place to post your thinking on any topic, and share new
          ideas."
        </span>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="headerImg"
        />
      </div>
    </div>
  );
}
