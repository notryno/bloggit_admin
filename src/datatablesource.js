export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field:"firstName",
    headerName:"First Name",
    width:200
  },
  {
    field:"lastName",
    headerName:"Last Name",
    width:200
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "gender",
    headerName: "Gender",
    width: 100,
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },

];


export const blogColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field:"blogtitle",
    headerName:"Title",
    width:300
  },
  {
    field: "username",
    headerName: "Author",
    width: 190,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field:"createddate",
    headerName:"Created On",
    width:150
  },
  {
    field: "totalupvotes",
    headerName: "Upvotes",
    width: 100,
  },

  {
    field: "totaldownvotes",
    headerName: "Downvotes",
    width: 100,
  },
  {
    field: "totalcomments",
    headerName: "Comments",
    width: 100,
  },
  {
    field: "popularityPoints",
    headerName: "Popularity",
    width: 100,
  },

];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    firstName: "yo",
    lastName: "hello",
    email: "1snow@gmail.com",
    country: "Nepal" ,
    gender: "Male"
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    email: "2snow@gmail.com",
    country: "China",
    gender: "Male"

  },
  {
    id: 3,
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Korea",
    email: "3snow@gmail.com",
    gender: "Male"


  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Philippines",
    gender: "Male"

  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Indonessia",
    gender: "Female"

   
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Malayasia",
    gender: "Female"

    
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Korea",
    gender: "Male"

  },
  {
    id: 8,
    username: "Muay",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Thailand",
    gender: "Female"

  },
  {
    id: 9,
    username: "Sujal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "Japan",
    gender: "Male"

  },
  {
    id: 10,
    username: "Ryan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    firstName: "yohilasd",
    lastName: "hellasdasdo",
    country: "India",
    gender: "Male"

  },
];



//temporary data
export const blogRows = [
  {
    id: 1,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Random",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,
  },
  {
    id: 2,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

  },
  {
    id: 3,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,


  },
  {
    id: 4,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

  },
  {
    id: 5,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

   
  },
  {
    id: 6,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

    
  },
  {
    id: 7,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

  },
  {
    id: 8,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Muay",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

  },
  {
    id: 9,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Sujal",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

  },
  {
    id: 10,
    blogtitle: "oiasdio oihi iaoshdas asdsad",
    username: "Ryan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    createddate: "1 March",
    totalupvotes: 30,
    totaldownvotes: 40,
    totalcomments: 80,
    popularityPoints: 785,

  },
];

