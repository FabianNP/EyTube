import { styled } from "styled-components";
import { Link } from "react-router-dom"
import Bs from "./img/BBS.png"
import {format} from "timeago.js"
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: ${(props) => props.type === "sm" && "340px" };
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: "10px";
`
const Img = styled.img`
  width: ${(props) => props.type === "sm" ? "60%" : "100%"};
  height: ${(props) => props.type === "sm" ? "100px" : "202px"};
  background-color: #999;
  border-radius: 13px;
  margin-right: 13px;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${(props) => props.type === "sm" && "none"};
`

const Texts = styled.div``

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
  margin: 10px 0;
`

const Info = styled.div` 
  font-size: 14px;
  color: ${({theme}) => theme.textSoft};
`

const Card = ({type, video}) => {
  const [channel, setChannel] = useState({})

  useEffect(() => {
    const fetchChannel = async () => {
      const res = await axios.get(`api/users/find/${video.userId}`)
      console.log(res)
      setChannel(res.data)
    }
    fetchChannel()
  }, [video.userId])

  return (
    <Link to="video/test" style={{textDecoration: "none"}}>
      <Container type={type}>
        <Img type={type} src={video.imgUrl}/>
        <Details type={type}>
          <ChannelImage type={type} src={channel.img}/>
          <Texts>
            <Title>{video.title}</Title> 
            <ChannelName>{channel.name}</ChannelName>
            <Info>{video.views} • {format(video.createdAt)} </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card