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
    field: "firstName",
    headerName: "First Name",
    width: 200,
  },
  {
    field: "lastName",
    headerName: "Last Name",
    width: 200,
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
    field: "blogtitle",
    headerName: "Title",
    width: 300,
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
    field: "createddate",
    headerName: "Created On",
    width: 150,
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
    username: "John Snow",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    firstName: "John",
    lastName: "Snow",
    email: "johnsnow@gmail.com",
    country: "Nepal",
    gender: "Male",
  },
  {
    id: 2,
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/2252290/pexels-photo-2252290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    firstName: "Jamie",
    lastName: "Lannister",
    email: "jamielannister@gmail.com",
    country: "China",
    gender: "Male",
  },
  {
    id: 3,
    username: "Tyrion Lannister",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    firstName: "Tyrion",
    lastName: "Lannister",
    email: "tyrionlannister@gmail.com",
    country: "Korea",
    gender: "Male",
  },
  {
    id: 4,
    username: "Arya Stark",
    img: "https://images.pexels.com/photos/2252290/pexels-photo-2252290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "aryastark@gmail.com",
    firstName: "Arya",
    lastName: "Stark",
    country: "Philippines",
    gender: "Female",
  },
  {
    id: 5,
    username: "Daenerys Targaryen",
    img: "https://images.pexels.com/photos/2953912/pexels-photo-2953912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "daenerystargaryen@gmail.com",
    firstName: "Daenerys",
    lastName: "Targaryen",
    country: "Indonesia",
    gender: "Female",
  },
  {
    id: 6,
    username: "Sansa Stark",
    img: "https://images.pexels.com/photos/2832080/pexels-photo-2832080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "sansastark@gmail.com",
    firstName: "Sansa",
    lastName: "Stark",
    country: "Malaysia",
    gender: "Female",
  },
  {
    id: 7,
    username: "Bran Stark",
    img: "https://images.pexels.com/photos/2944745/pexels-photo-2944745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "branstark@gmail.com",
    firstName: "Bran",
    lastName: "Stark",
    country: "Korea",
    gender: "Male",
  },
  {
    id: 8,
    username: "Cersei Lannister",
    img: "https://images.pexels.com/photos/2953912/pexels-photo-2953912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "cerseilannister@gmail.com",
    firstName: "Cersei",
    lastName: "Lannister",
    country: "Thailand",
    gender: "Female",
  },
  {
    id: 9,
    username: "Jon Snow",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "jonsnow@gmail.com",
    firstName: "Jon",
    lastName: "Snow",
    country: "Japan",
    gender: "Male",
  },
  {
    id: 10,
    username: "Robb Stark",
    img: "https://images.pexels.com/photos/2944745/pexels-photo-2944745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    email: "robbstark@gmail.com",
    firstName: "Robb",
    lastName: "Stark",
    country: "India",
    gender: "Male",
  },
];

//temporary data
export const blogRows = [
  {
    id: 1,
    blogtitle: "Discovering New Horizons",
    username: "Daenerys Targaryen",
    img: "https://images.pexels.com/photos/2953912/pexels-photo-2953912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "10 March",
    totalupvotes: 12,
    totaldownvotes: 8,
    totalcomments: 25,
    popularityPoints: 41,
  },
  {
    id: 2,
    blogtitle: "The Art of Cooking",
    username: "Jon Snow",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "5 March",
    totalupvotes: 6,
    totaldownvotes: 4,
    totalcomments: 18,
    popularityPoints: 26,
  },
  {
    id: 3,
    blogtitle: "Amazing Journey",
    username: "Sansa Stark",
    img: "https://images.pexels.com/photos/2832080/pexels-photo-2832080.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "20 March",
    totalupvotes: 19,
    totaldownvotes: 10,
    totalcomments: 29,
    popularityPoints: 57,
  },
  {
    id: 4,
    blogtitle: "Fitness and Wellness",
    username: "Robb Stark",
    img: "https://images.pexels.com/photos/2944745/pexels-photo-2944745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "1 March",
    totalupvotes: 27,
    totaldownvotes: 5,
    totalcomments: 12,
    popularityPoints: 61,
  },
  {
    id: 5,
    blogtitle: "Creative Writing",
    username: "Arya Stark",
    img: "https://images.pexels.com/photos/2252290/pexels-photo-2252290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "15 March",
    totalupvotes: 3,
    totaldownvotes: 14,
    totalcomments: 22,
    popularityPoints: 14,
  },
  {
    id: 6,
    blogtitle: "Technology Trends",
    username: "Cersei Lannister",
    img: "https://images.pexels.com/photos/2953912/pexels-photo-2953912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "25 March",
    totalupvotes: 18,
    totaldownvotes: 22,
    totalcomments: 5,
    popularityPoints: 19,
  },
  {
    id: 7,
    blogtitle: "Photography Passion",
    username: "Jamie Lannister",
    img: "https://images.pexels.com/photos/2252290/pexels-photo-2252290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "1 March",
    totalupvotes: 15,
    totaldownvotes: 3,
    totalcomments: 28,
    popularityPoints: 55,
  },
  {
    id: 8,
    blogtitle: "Health and Nutrition",
    username: "Bran Stark",
    img: "https://images.pexels.com/photos/2944745/pexels-photo-2944745.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "5 March",
    totalupvotes: 9,
    totaldownvotes: 13,
    totalcomments: 11,
    popularityPoints: 16,
  },
  {
    id: 9,
    blogtitle: "Travel Tales",
    username: "Tyrion Lannister",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "15 March",
    totalupvotes: 25,
    totaldownvotes: 7,
    totalcomments: 20,
    popularityPoints: 63,
  },
  {
    id: 10,
    blogtitle: "Exploring Nature's Beauty",
    username: "John Snow",
    img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    createddate: "10 March",
    totalupvotes: 11,
    totaldownvotes: 6,
    totalcomments: 15,
    popularityPoints: 31,
  },
];
