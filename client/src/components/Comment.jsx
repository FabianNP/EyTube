import React from 'react'
import styled from "styled-components"
import Bs from "./img/BBS.png"

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 10px;
`

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({theme}) => theme.text};
`

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`
const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 13px;
`
const Text = styled.span`
  font-size: 14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://www.kennedy-center.org/globalassets/education/resources-for-educators/classroom-resources/artsedge/media/art-space/art-space-169.jpg"/>
      <Details>
        <Name>
          Fab 
          <Date>1 day ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ipsum optio ullam quasi omnis sed eius, commodi consequuntur temporibus odio, illum facere alias unde assumenda doloremque impedit distinctio numquam vel?
        </Text>
      </Details>
    </Container> 
  )
}

export default Comment