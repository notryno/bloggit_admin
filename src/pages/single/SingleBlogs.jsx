import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";


const SingleBlogs = () => {
    return (
        <div className="single">
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                alt=""
                                className="itemImg"
                            />
                            <div className="details">
                                {/* username */}
                                <h1 className="itemTitle">Jane_Doe_starj</h1>
                                <div className="detailItem">
                                    <span className="itemKey">Name:</span>
                                    <span className="itemValue">Jane Done</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Email:</span>
                                    <span className="itemValue">janedone@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Gender:</span>
                                    <span className="itemValue">
                                        Female
                                    </span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country:</span>
                                    <span className="itemValue">Nepal</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="individualBlogsContainer">
                            <div className="individualDataContainer">


                                <div className="individualBlogSection">
                                    <div className="left">
                                        <span className="title">Upvotes</span>
                                        <span className="counter">
                                            20
                                        </span>

                                        <span className="link">Totals</span>
                                        <div className="right">

                                            <ArrowUpwardIcon className="icon"
                                                style={{
                                                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                                                    color: "goldenrod",
                                                }} />
                                        </div>
                                    </div>
                                </div>

                                <div className="individualBlogSection">
                                    <div className="left">
                                        <span className="title">Downvotes</span>
                                        <span className="counter">
                                            20
                                        </span>

                                        <span className="link">Totals</span>
                                        <div className="right">

                                            <ArrowDownwardIcon
                                                className="icon"
                                                style={{
                                                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                                                    color: "purple",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="individualBlogSection">
                                    <div className="left">
                                        <span className="title">Comments</span>
                                        <span className="counter">
                                            20
                                        </span>

                                        <span className="link">Totals</span>
                                        <div className="right">

                                            <ChatOutlinedIcon
                                                className="icon"
                                                style={{
                                                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                                                    color: "goldenrod",
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SingleBlogs
