import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Datatable = ({datacolumns, datarows}) => {
  
  const [list, setList] = useState();
  const [data, setData] = useState(datarows);
  // const { data } = useFetch(`/users`);
 



  //whenever our data changes we update in the list
  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Users
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      {
        list && (

          <DataGrid
            className="datagrid"
            rows={list}
            columns={datacolumns.concat(actionColumn)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        )
      }
    </div>
  );
};

export default Datatable;
