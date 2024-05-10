
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import TablePost from '../../components/table/TablePost';
import { useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import "./home.scss";

const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isToggledBlog, setIsToggledBlog] = useState(false);
  const [showDropdownBlog, setShowDropdownBlog] = useState(false);



  const handleToggleChange = () => {
    setIsToggled(!isToggled);
    setShowDropdown(!showDropdown);
  };

  
  const handleToggleBlogChange = () => {
    setIsToggledBlog(!isToggledBlog);
    setShowDropdownBlog(!showDropdownBlog);
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount= {27} />
          <Widget type="upvotes" amount={22}/>
          <Widget type="downvotes" amount={23}/>
          <Widget type="comments" amount={25}/>
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last blog post" aspect={2 / 1} />
        </div>
        <div className="dataContainer">

          <div className="listContainer">
            <div className="headingContainer">
              <div className="listTitle">Top 10 most popular bloggers</div>
              <div className="toggle-container">
                {showDropdown && (
                  <div className="dropdown-container">
                    <select className="dropdown">
                      <option value="">Select Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                )}
                <div className="toogleTitle">
                  All Time:
                </div>
                <Toggle
                  className="toggle-button"
                  defaultChecked={!isToggled}
                  icons={{
                    checked: "",
                    unchecked: "",  
                  }}
                  onChange={handleToggleChange}
                />
              </div>
            </div>
            <Table />
          </div>
        </div>
        <div className="dataContainer">

          <div className="listContainer">
            <div className="headingContainer">
              <div className="listTitle">Top 10 most popular post</div>
              <div className="toggle-container">
                {showDropdownBlog && (
                  <div className="dropdown-container">
                    <select className="dropdown">
                      <option value="">Select Month</option>
                      <option value="January">January</option>
                      <option value="February">February</option>
                      <option value="March">March</option>
                      <option value="April">April</option>
                      <option value="May">May</option>
                      <option value="June">June</option>
                      <option value="July">July</option>
                      <option value="August">August</option>
                      <option value="September">September</option>
                      <option value="October">October</option>
                      <option value="November">November</option>
                      <option value="December">December</option>
                    </select>
                  </div>
                )}
                <div className="toogleTitle">
                  All Time:
                </div>
                <Toggle
                  className="toggle-button"
                  defaultChecked={!isToggledBlog}
                  icons={{
                    checked: "",
                    unchecked: "",
                  }}
                  onChange={handleToggleBlogChange}
                />
              </div>
            </div>
            <TablePost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
