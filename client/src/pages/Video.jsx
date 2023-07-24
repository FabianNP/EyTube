import React from 'react'
import styled from "styled-components"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import Bs from "../components/img/BBS.png"
import Comment from '../components/Comment';
import Comments from '../components/Comments';


const Container = styled.div`
  display: flex;
  gap: 24px;
`

const Content = styled.div`
  flex: 6;
`

const VideoWrapper = styled.div`
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
            height="720" 
            src="https://www.youtube.com/embed/bef8QLNHubw" 
            title="YouTube video player" 
            style={{ border: 0 }}
            // frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>

          </iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154  •  Jun 22, 2022</Info>
          <Buttons>
            <Button><ThumbUpOutlinedIcon /> 123</Button>
            <Button><ThumbDownOffAltOutlinedIcon /> Dislike </Button>
            <Button><ReplyOutlinedIcon /> Share </Button>
            <Button><AddTaskOutlinedIcon /> Save </Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Img src={Bs}/>
            <ChannelDetail>
              <ChannelName>Adan</ChannelName>
              <ChannelCounter>200 k subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro reprehenderit obcaecati placeat ex sapiente earum molestiae nulla, id soluta. Natus maxime odio laborum! Suscipit esse voluptatem ad minus cupiditate mollitia.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <Comments/>
      </Content>
      <Recommendation>recommendation</Recommendation>
    </Container>
  )
}

export default Video