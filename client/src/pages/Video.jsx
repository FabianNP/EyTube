import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Bs from "../components/img/BBS.png"
import Comments from '../components/Comments';
import Card from "../components/Card"
import { useSelector, useDispatch } from "react-redux"
import { useLocation } from 'react-router-dom';
import axios from "axios"
// import api from "../utils/api"
import { fetchSuccess } from "../redux/videoSlice"
import { format } from 'timeago.js';


const Container = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`

const Content = styled.div`
  flex: 5;
`

const VideoWrapper = styled.div`
  max-width: 1000px;
  min-width: 620px;
  height: 520px;
  margin: 0 auto;
`

const Title = styled.div`
  font-size: 18px;
  font-weight: 400;
  margin: 20px 0 10px 0;
  color: ${({theme}) => theme.text};
`

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
  font-size: 14px;
`

const Buttons = styled.div`
  display: flex;
  gap: 20px; 
  color: ${({theme}) => theme.text};
`
const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.soft};
`

const Recommendation = styled.div`
  flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Img = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
  /* margin-left: 10px; */
`

const ChannelName = styled.span`
  font-weight: 500;
`

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({theme}) => theme.textSoft};
`

const Description = styled.p`
  font-size: 14px;
`

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`


const Video = () => {
  const { currentUser } = useSelector((state) => state.user)
  const { currentVideo } = useSelector((state) => state.video)
  const dispatch = useDispatch()

  const path = useLocation().pathname.split("/")[2]
  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(path)
        // const videoRes = await axios.get(`api/videos/find/${path}`)
        const videoRes = await axios.get(`/api/videos/find/${path}`)
        console.log(videoRes)
        const channelRes = await axios.get(`/api/users/find/${videoRes.data.userId}`)
        
        // console.log(videoRes?.userId)
        // console.log(channelRes
        
        // setChannel(channelRes)
        dispatch(fetchSuccess(videoRes.data))

      }catch(err){
        console.log(err)
      }
    }
    fetchData()
  }, [path, dispatch])


  return (
    <Container>
      <Content>
        <VideoWrapper>
          {/* <iframe
            width="100%"
            height="720"
            src='https://WWW.youtube.com/embed/k3Vfj-e1Ma4'
            title='Toutube vide player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          >
          </iframe> */}
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/bef8QLNHubw" 
            title="YouTube video player" 
            style={{ border: 0 }}
            // frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>

          </iframe>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>{currentVideo?.views} views  •  {format(currentVideo?.createdAt)}</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon /> {currentVideo?.likes?.length}</Button>
            <Button><ThumbDownOffAltOutlinedIcon /> Dislike </Button>
            <Button><ReplyOutlinedIcon /> Share </Button>
            <Button><AddTaskOutlinedIcon /> Save </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Img src={channel?.ing}/>
            <ChannelDetail>
              <ChannelName>{channel?.name}</ChannelName>
              <ChannelCounter>{channel?.subscribers} subscribers</ChannelCounter>
              <Description>
                {currentVideo?.desc}  
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      {/* <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      </Recommendation> */}
    </Container>
  )
}

export default Video