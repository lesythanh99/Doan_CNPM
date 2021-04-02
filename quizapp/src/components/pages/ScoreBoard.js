// import React from 'react';
// import Navbar from '../Navbar'
// import Container from "@material-ui/core/Container";
// import Card from "@material-ui/core/Card";
// import Typography from "@material-ui/core/Typography";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from '@material-ui/core/Button';
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import { Link,useHistory  } from 'react-router-dom';
// import CRUD from '../../services/crud';
// const useStyles = makeStyles({
//       card: {
//         maxWidth: 345,
//         boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
//         backgroundColor: "#fafafa",
//       },
//       media: {
//         height: 300,
//       },
//     });
// function ScoreBoard() {
//     const [data, setData] = React.useState([]);
  
//     const [currentPage, setcurrentPage] = React.useState(1);
//     const [itemsPerPage, setitemsPerPage] = React.useState(3);
  
//     const [pageNumberLimit, setpageNumberLimit] = React.useState(3);
//     const [maxPageNumberLimit, setmaxPageNumberLimit] = React.useState(3);
//     const [minPageNumberLimit, setminPageNumberLimit] = React.useState(0);

//     let history = useHistory();
    
//     const renderData = (data) => {
//         const vaothi = (id) => {
//             history.push('/play-test/'+id)
//         }
//         return (
//             <>
//             <h2 style={{textAlign: 'center'}}>Chọn bài thi</h2>
//             {data.map((todo) => {
//               return(
//                   <>
//                         <div>
                            
//                             <Container>
//                                 <Typography
//                                 color="textPrimary"
//                                 gutterBottom
//                                 variant="h2"
//                                 align="center"
//                                 >
                            
//                                 </Typography>
//                                 <Grid >
//                                     {/* <Grid item xs={12} sm={3} > */}
//                                     <Card >
//                                         <CardContent>
//                                         <Typography color="primary" variant="h5">
//                                             {todo.nameTest}
//                                         </Typography>
                
//                                         <Typography color="textSecondary" variant="subtitle2">
//                                             {todo.status}
//                                         </Typography>
//                                             <Button onClick = {() => vaothi(todo.idOfTest)} size="small" color="primary">
//                                                 Vào Làm
//                                             </Button>
//                                         </CardContent>
//                                     </Card>
//                                     {/* </Grid> */}
                            
//                                 </Grid>
//                             </Container>
//                         </div>
//                     </>
//                     );
//             })}
//             </>
//         );
//       };
//     const handleClick = (event) => {
//       setcurrentPage(Number(event.target.id));
//     };
  
//     const pages = [];
//     for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
//       pages.push(i);
//     }
  
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  
//     const renderPageNumbers = pages.map((number) => {
//       if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
//         return (
//           <li
//             key={number}
//             id={number}
//             onClick={handleClick}
//             className={currentPage == number ? "active" : null}
//           >
//             {number}
//           </li>
//         );
//       } else {
//         return null;
//       }
//     });
  
//     React.useEffect(() => {
//                 CRUD.getTest().then(res => {
//                     console.log(res);
//                     setData(res.data.data);
//                 }) ;
//     }, [data]);
  
//     const handleNextbtn = () => {
//       setcurrentPage(currentPage + 1);
  
//       if (currentPage + 1 > maxPageNumberLimit) {
//         setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
//         setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
//       }
//     };
  
//     const handlePrevbtn = () => {
//       setcurrentPage(currentPage - 1);
  
//       if ((currentPage - 1) % pageNumberLimit == 0) {
//         setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
//         setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
//       }
//     };
  
//     let pageIncrementBtn = null;
//     if (pages.length > maxPageNumberLimit) {
//       pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
//     }
  
//     let pageDecrementBtn = null;
//     if (minPageNumberLimit >= 1) {
//       pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
//     }
  
  
//     return (
//       <>
//         <Navbar />
//         {renderData(currentItems)}

//         <ul className="pageNumbers">
//           <li>
//             <button
//               onClick={handlePrevbtn}
//               disabled={currentPage == pages[0] ? true : false}
//             >
//               Prev
//             </button>
//           </li>
//           {pageDecrementBtn}
//           {renderPageNumbers}
//           {pageIncrementBtn}
  
//           <li>
//             <button
//               onClick={handleNextbtn}
//               disabled={currentPage == pages[pages.length - 1] ? true : false}
//             >
//               Next
//             </button>
//           </li>
//         </ul>
 
//       </>
//     );
//   }
  
//   export default ScoreBoard;