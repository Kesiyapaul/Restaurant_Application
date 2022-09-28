import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Restaurentcard from './Restaurentcard'
import { listRestaurants } from '../actions/restaurantActions'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
    //fetching restaurent.json data during home page loading 
    //for done this used by a hook called useeffect
    const dispatch = useDispatch()
    // useselector pull data from store
    const restaurantData = useSelector(state => state.restaurentReducer)
    //destructuring data
    const { restaurants } = restaurantData


    useEffect(() => {
      //async and await promises resolving methods
      //async - synchrnous data to asynchronous
      // await - wait and execute
      //API consumption
      // async function fetchData(){
      //   await fetch('/restaurants.json')
      //   .then((data) => data.json())
      //   .then((res) => setRest(res.restaurants))
      dispatch(listRestaurants())
    }, [])
    
    console.log('my data is ',restaurants)
    return (
    <Row>
      
      {restaurants.map(item =>(
        <Col sm={12} md={8} lg={6} xl={3}>
        <Restaurentcard item={item}/>
        </Col>
      ))}
    </Row>
  )
}
export default Home