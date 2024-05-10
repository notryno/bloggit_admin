import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1,
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      bloggername: "John Smith",
      totalblogs: 10,
      date: "1 March",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 785,
    },
    {
      id: 2,
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      bloggername: "Michael Doe",
      totalblogs: 10,
      date: "1 March",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 900,
    },
    {
      id: 3,
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      bloggername: "John Smith",
      totalblogs: 10,
      date: "1 March",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 35,
    },
    {
      id: 4,
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      bloggername: "Jane Smith",
      totalblogs: 10,
      date: "1 March",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 920,
    },
    {
      id: 5,
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      bloggername: "Harold Carol",
      totalblogs: 10,
      date: "1 March",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 2000,
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">#</TableCell>
            <TableCell className="tableCell">Blogger Name</TableCell>
            <TableCell className="tableCell">Total Blogs</TableCell>
            <TableCell className="tableCell">Joined On</TableCell>
            <TableCell className="tableCell">Total Upvotes</TableCell>
            <TableCell className="tableCell">Total Downvotes</TableCell>
            <TableCell className="tableCell">Total Comments</TableCell>
            <TableCell className="tableCell">Populatrity Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.bloggername}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.totalblogs}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.totalupvotes}</TableCell>
              <TableCell className="tableCell">{row.totaldownvotes}</TableCell>
              <TableCell className="tableCell">{row.totalcomments}</TableCell>
              <TableCell className="tableCell">
                {row.popularityPoints}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
