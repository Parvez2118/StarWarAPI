import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image, Stack } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import axios from 'axios';
function CharacterInfo() {
    const { id } = useParams();
    const [userData, setuserData] = useState({});
    const [films, setFilms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handel = async () => {
        try {
            const response = await fetch(`https://swapi.dev/api/people/${id}`)
                .then((res) => res.json());
            setuserData(response);

            const filmsData = await Promise.all(response.films.map(async (url) => {
                const response1 = await axios.get(url);
                return response1.data;
            }));
            console.log(filmsData)
            setFilms(filmsData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handel();
    }, [])


    if (loading) return <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '50px' }}><CircularProgress isIndeterminate color='green.300' /></span>;
    if (error) return <p>Error loading films: {error.message}</p>;


    return (
        <div style={{backgroundColor:'#EEF7FF'}}>
            <Card style={{backgroundColor:'#EEF7FF'}}>
                <CardBody>
                    <Center >
                    <Text fontSize='5xl' style={{color:'#7AB2B2'}}>Character Information</Text>
                    </Center>
                    
                </CardBody>
            </Card>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
              
                style={{backgroundColor:'#EEF7FF', marginTop:'20px', border:'none'}}
            >
                <Center >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src='https://cdn.pixabay.com/photo/2019/07/22/10/11/darth-vader-4354735_640.jpg'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                    <TableContainer>
  <Table variant='simple'>
    <Tbody>
    <Tr>
        <Td>Nameee</Td>
        <Td>{userData.name}</Td>
      </Tr>
      <Tr>
        <Td>Birth Year</Td>
        <Td>{userData.birth_year}</Td>
      </Tr>
      <Tr>
        <Td>Eye Color</Td>
        <Td>{userData.eye_color}</Td>
      </Tr>
      <Tr>
        <Td>Gender</Td>
        <Td>{userData.gender}</Td>
      </Tr>
      <Tr>
        <Td>Height</Td>
        <Td>{userData.height}</Td>
      </Tr>
      <Tr>
        <Td>Skin Color</Td>
        <Td>{userData.skin_color}</Td>
      </Tr>
      <Tr>
        <Td>Mass</Td>
        <Td>{userData.mass}</Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
                        {/* <Heading size='md' style={{paddingBottom:'8px'}}>Name: {userData.name}</Heading>
                        <Heading size='md' style={{paddingBottom:'8px'}}>Birth Year: {userData.birth_year}</Heading>
                        <Heading size='md' style={{paddingBottom:'8px'}}>Eye Color: {userData.eye_color}</Heading>
                        <Heading size='md' style={{paddingBottom:'8px'}}>Gender: {userData.gender}</Heading>
                        <Heading size='md' style={{paddingBottom:'8px'}}>Height: {userData.height}</Heading>
                        <Heading size='md' style={{paddingBottom:'8px'}}>Skin Color: {userData.skin_color}</Heading>
                        <Heading size='md' style={{paddingBottom:'8px'}}>Mass: {userData.mass}</Heading> */}
                        {/* 
      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text> */}
                    </CardBody>

                    {/* <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter> */}
                </Stack></Center>
            </Card>

            <Card style={{backgroundColor:'#EEF7FF', marginTop:'20px', border:'none'}}>
                <CardBody>
                    <Center >
                    <Text fontSize='3xl' style={{color:'#7AB2B2'}}>Movies List</Text>
                    </Center>
                    
                </CardBody>
            </Card>
            <SimpleGrid spacing={20} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {films.map((data, index) => (
                    <Card key={index} style={{backgroundColor:'#EEF7FF', marginTop:'20px'}}>
                        <CardHeader>
                            <Heading size='md' style={{color:'#80A3A2'}}>{data.title}</Heading>
                            <Text fontSize='lg' style={{color:'#80A3A2'}}>{data.release_date.split('-')[0]}</Text>
                        </CardHeader>
                        <CardBody>
                        <Text fontSize='md' ><b>Director: </b>  <span style={{color:'#003285'}}>{data.director}</span></Text>
                            <Text ><b>Description: </b>{data.opening_crawl}</Text>
                        </CardBody>
                        {/* <CardFooter>
                            <Button>View here</Button>
                        </CardFooter> */}
                    </Card>
                ))}
            </SimpleGrid>
        </div>
    )
}

export default CharacterInfo;