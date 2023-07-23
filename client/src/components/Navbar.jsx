import styled from "styled-components"
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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
  padding: 0 30px;
  position: relative;
`
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 30px;
`
const Input = styled.input`
  border: none;
  background-color: transparent;
  width: 90%;
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

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search"/>
          <SearchOutlinedIcon />
        </Search>
        <Button>
          <AccountCircleOutlinedIcon/>
          SIGN IN
        </Button>
      </Wrapper>
    </Container>
  )
}
