import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableBlogs from "../../components/datatable/DatatableBlogs"
import { blogColumns, blogRows } from "../../datatablesource"


const ListBlogs = () => {
  return (
    <div className="list">
    <Sidebar/>
    <div className="listContainer">
      <Navbar/>
      <DatatableBlogs datacolumns ={blogColumns}  datarows= {blogRows}/>
    </div>
  </div>
  )
}

export default ListBlogs