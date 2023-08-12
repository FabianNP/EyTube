import styled from "styled-components"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({theme}) => theme.bgLighter};
  padding: 10px 20px;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0 40px;
  position: relative;
`
const Search = styled.div`
  width: 50%;
  position: absolute;
  left: -300px;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 18px;
  color: ${({theme}) => theme.textSoft};
`
const Input = styled.input`
  color: ${({theme}) => theme.text};
  border: none;
  background-color: transparent;
  width: 90%;
  font-size: 16px;
  padding: 0 7px;
  &:focus {
    outline: none;
  }
`
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #2ea6ff;
  border-radius: 3px; 
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({theme}) => theme.text};
`

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #999;
`

export const Navbar = () => {
  const {currentUser} = useSelector(state => state.user)

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"/>
          <SearchOutlinedIcon />
        </Search>
        {currentUser 
          ? <User>
              <VideoCallOutlinedIcon />
              <Avatar  src={currentUser.img}/>
              {currentUser.name}
            </User> 
          : <Link to="signin" style={{textDecoration: "none"}}>
          <Button>
            <AccountCircleOutlinedIcon/>
            SIGN IN
          </Button>
        </Link>}
      </Wrapper>
    </Container>
  )
}
