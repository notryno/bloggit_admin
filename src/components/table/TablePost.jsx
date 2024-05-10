import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ListPost = () => {
  const rows = [
    {
      id: 1,
      blogtitle: "the haunting house",
      product: "Acer Nitro 5",
      img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
      author: "John Smith",
      createddate: "1 March",
      time: "4pm",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 920,
    },
    {
      id: 2,
      blogtitle: "the kidnapping game",
      img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
      author: "Michael Doe",
      createddate: "1 March",
      time: "4pm",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 920,
    },
    {
      id: 3,
      blogtitle: "the treeclimbing",
      img: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg",
      author: "John Smith",
      createddate: "1 March",
      time: "4pm",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 920,
    },
    {
      id: 4,
      blogtitle: "the shooting game",
      img: "https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Jane Smith",
      createddate: "1 March",
      time: "4pm",
      totalupvotes: 30,
      totaldownvotes: 40,
      totalcomments: 80,
      popularityPoints: 920,
    },
    {
      id: 5,
      blogtitle: "the anime house",
      img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Harold Carol",
      createddate: "1 March",
      time: "4pm",
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
            <TableCell className="tableCell">Blog Title</TableCell>
            <TableCell className="tableCell">Author</TableCell>

            <TableCell className="tableCell">Created createddate</TableCell>
            <TableCell className="tableCell">Created Time</TableCell>
            <TableCell className="tableCell">Total Upvotes</TableCell>
            <TableCell className="tableCell">Total Downvotes</TableCell>
            <TableCell className="tableCell">Total Comments</TableCell>
            <TableCell className="tableCell">Popularity Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.blogtitle}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.author}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.createddate}</TableCell>
              <TableCell className="tableCell">{row.time}</TableCell>
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

export default ListPost;
