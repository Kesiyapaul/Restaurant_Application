import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import Review from './Review'
import { useSelector } from 'react-redux'


function Restaurentdetails() {
     const [data, setData] = useState([])
  //   const params = useParams()
  //   async function fetchData(){
  //     await fetch('/restaurants.json')
  //     .then((data) => data.json())
  //     .then((res) => setData(res.restaurants))
  // }
  // useEffect(() => {
  //   // fetchData()
   // }, [])
     const restaurantData = useSelector(state =>  state.restaurentReducer)
     const { id } = useParams()
     const { restaurants } = restaurantData
    //find method in js 
    // each element in the data called as item
    const details = restaurants.find(item => item.id == id)

    console.log("details",details)
    console.log("id",id)
  return (
   <> 
   <Link className='btn btn-outline-dark my-2 rounded btn-sm' to="/">Back</Link>
   {
    //restaurent data cannot be null to solve this render a UI if there is a data
    details ? (
      <Row className='my-3'>
        <Col md={3}>
          <Image className='img' src={details.photograph} alt={details.name} fluid></Image>
        </Col>
      <Col md={4}>

        <ListGroup.Item>
          <h2>{details.name}</h2>
          <p>{details.neighborhood}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Cuisine Type {details.cuisine_type}</p>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>Address {details.address}</p>
        </ListGroup.Item>
        </Col>
        <Col md={4}>
          <ListGroup.Item>
            <h4>Operating Hours:</h4>
            <p>Monday : {details.operating_hours.Monday}</p>
            <p>Tuesday : {details.operating_hours.Tuesday}</p>
            <p>Wednesday : {details.operating_hours.Wednesday}</p>
            <p>Thursday : {details.operating_hours.Thursday}</p>
            <p>Friday : {details.operating_hours.Friday}</p>
         </ListGroup.Item>
        </Col>
        <Row>
          <Card className='my-3 mx-3 p-3 rounded card'>
            <Review data={details.reviews}/>
          </Card>
        </Row>
      </Row>
    ): 'null'
  }
    </>
  )

}

export default Restaurentdetails