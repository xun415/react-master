import styled,{keyframes} from "styled-components";
import Table from "./Table";
// const Father = styled.div`
//   display: flex;
// `;
//
// const Box = styled.div`
//   background-color: ${props => props.bgColor};
//   width:100px;
//   height: 100px;
// `;
//
// const Text = styled.h1`
//   color: white;
// `;
//
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;
//
// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;
//
// const Input = styled.input.attrs({required: true, minLength: 10})`
//   background-color: tomato;
//
// `;

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    transform: rotate(180deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
const EmojiSpan = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  
  &:hover{
    background-color: cadetblue;
  }
  ${EmojiSpan} {
    &:hover {
      font-size: 98px;

    }
  }
`;

const Title = styled.h1`
    color: ${props => props.theme.textColor}
    
`;
function App() {
  return (
    <Wrapper >
      <Box>
          <EmojiSpan as="p">😄</EmojiSpan>
      </Box>
        <Title>hi</Title>
        <Table></Table>
    </Wrapper>
  );
}

export default App;
