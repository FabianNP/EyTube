import React from 'react'
import styled from "styled-components"
import Bs from "./img/BBS.png"
import Comment from './Comment'


const Container = styled.div``

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({theme}) => theme.soft};
  background-color: transparent;
  color: ${({theme}) => theme.text};
  padding: 5px;
  outline: none;
  width: 100%;
  /* &:focus{
    outline: none
  } */
`

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={Bs} />
        <Input type="text" placeholder="Add a comment..." />
      </NewComment>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  )
}

export default Comments