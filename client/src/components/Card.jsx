import { styled } from "styled-components";
import { Link } from "react-router-dom"
import Bs from "./img/BBS.png"

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`
const Img = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
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

const Card = () => {
  return (

    <Link to="video/test" style={{textDecoration: "none"}}>
      <Container>
        <Img src={"https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/art-space/art-space-169.jpg"}/>
        <Details>
          <ChannelImage src={Bs}/>
          <Texts>
            <Title>Test Video</Title> 
            <ChannelName>Adan</ChannelName>
            <Info>660,908 • 1 day ago </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card