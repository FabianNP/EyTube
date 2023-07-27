import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import Card from "../components/Card"
import axios from "axios"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 30px;
`

const Home = ({type}) => {

  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      const res = await axios.get(`api/videos/${type}`)
      console.log(res)
      setVideos(res.data)
    }
    fetchVideos()
  }, [type])

  return (
    <Container>
      {videos?.map((video) => (
        <Card key={video._id} video={video}/>
      ))}
    </Container>
  )
}

export default Home