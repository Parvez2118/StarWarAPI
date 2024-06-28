import axios from "axios";
import { useEffect, useState } from "react";
import './fetch.css';
import { FaHeart  } from "react-icons/fa";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button } from '@chakra-ui/react'
import Pagination from "./Pagination";
import{
  Link
} from "react-router-dom";

function FetchApi() {

  // const [backgroundColor, setBackgroundColor] = useState('white');

  // const handleClick = (e) => {
  //   Calculate the width at which the click occurred
  //   const clickX = e.nativeEvent.offsetX;
  //   const divWidth = e.target.offsetWidth;
  //   console.log(clickX, divWidth);
  //   const percentage = (clickX / divWidth) * 100;

  //   Set the background color up to the clicked point
  //   const color = `linear-gradient(90deg, red ${percentage}%, white ${percentage}%)`;
  //   setBackgroundColor(color);
  // };





  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);



  const [user, setuser] = useState([]);
  const [user1, setuser1] = useState([]);

  // using axios
  const handle = async () => {

    const response = await axios.get("https://dummyjson.com/users");
    setuser(response.data);
    console.log(response)

    const responsenew = await axios.get("https://dummyjson.com/products");
    console.log(responsenew)

  }

  // using FETCH API
  const handel = async () => {

    const response = await fetch("https://swapi.dev/api/people/")
      .then((res) => res.json());
    console.log(response)
    setuser1(response.results);
  }


  useEffect(() => {
    // handle();
    handel();
  }, [])

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = user1.slice(firstPostIndex, lastPostIndex);

  return (
    <div style={{backgroundColor:'#414a4c', height:'1000px'}}>
     <h1 style={{color:"white", justifyContent:"center", alignItems:"center", display:"flex", marginBottom:'40px'}}><span style={{color:'skyblue', paddingRight:'7px'}}>Star </span> Wars <span style={{color:'#ff9248', paddingLeft:'7px'}}> Characters</span></h1>
      <SimpleGrid spacing={6} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {currentPosts.map((post,index) => (

          <Card>
           
            <CardHeader>
              <Heading size='md'>{post.name} <FaHeart style={{float:'right'}} className="color"/></Heading>
            </CardHeader>
            {/* <CardBody>
      <Text>View a summary of all your customers over the last month.</Text>{`/userr/${a._id}`}
    </CardBody> */}
            <CardFooter>
            <Link to={`/people/${index+1}`}><Button>View Details</Button></Link>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
      <Pagination  totalPosts={user1.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}></Pagination>










      {/* <h1>using fetch</h1>
      <ul>
        {user1.map((post) => (
          <li >{post.name}</li>
        ))}
      </ul>  */}


      {/* <h1>using axios</h1> */}
      {/* <ul>
        {user.map((post) => (
          <div className="itemmaindiv">
            <div className="itemmaindiv1">
              <img src={post.image} width="100px"></img>
            </div>

            <div className="itemmaindiv2">
             {post.title}
              <Star stars={post.rating.rate}></Star> */}
      {/* {star(post.rating.rate)}
              <AiTwotoneStar color="red" className="starcolor" /><AiTwotoneStar size={30} color='aliceblue' /><AiTwotoneStar size={30} style={{ fill: 'black' }} /><AiTwotoneStar /><AiTwotoneStar />
              <div style={{ color: 'blue' }}>
                <AiTwotoneStar size={32} />
              </div> */}
      {/* </div>


          </div>

        ))}
      </ul> */}




      {/* <div style={{width:"500px", border:"1px solid red",height:"250px"}}>
        <div></div>
      </div> */}





      {/* <div
      className="color-changing-div"
      onClick={handleClick}
      style={{ background: backgroundColor }}
    >
      Click me to change my background color!
    </div> */}



      {/* <div class="one">
      <div class="one1">
        <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1146517111%2Fphoto%2Ftaj-mahal-mausoleum-in-agra.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3DvcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk%3D&tbnid=O5RXpwJLOupVkM&vet=12ahUKEwiN88-OrZ2CAxVx3DgGHSwbCTwQMygGegQIARBV..i&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Findia&docid=6IoBNFOol7ssrM&w=612&h=411&q=image&ved=2ahUKEwiN88-OrZ2CAxVx3DgGHSwbCTwQMygGegQIARBV"></img>
        
      </div>
      <div class="one2">
        <div style={{border:"1px solid red"}}>

        </div>
        <div style={{border:"1px solid red"}}>
          
        </div>
        <div style={{border:"1px solid red"}}> 
          
        </div>
        <div style={{border:"1px solid red"}}>
          
        </div>
        <div style={{border:"1px solid red"}}>
          
        </div>

      </div>

    </div> */}


    </div>

  )
}
export default FetchApi;