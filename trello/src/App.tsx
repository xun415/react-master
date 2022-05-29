import React from 'react';
import {DragDropContext, Droppable, DropResult} from 'react-beautiful-dnd';
import DraggableCard from './components/DraggableCard'
import {useRecoilState} from "recoil";
import {toDoState} from "./Atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props => props.theme.boardColor)};
  border-radius: 5px;
  min-height: 200px;
  
`;



function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onDragEnd = ({draggableId, destination, source}:DropResult) => {
        if (!destination) return;
        setToDos((oldToDos)=> {
            const copyToDos = [...oldToDos]
            copyToDos.splice(source.index, 1)
            copyToDos.splice(destination?.index, 0, draggableId)
            return copyToDos
        })
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
            <Droppable key="one" droppableId="one" >
                {(provided) =>(
                <Board ref={provided.innerRef} {...provided.droppableProps}>
                    {toDos.map((todo,index) =>
                        <DraggableCard index={index} todo={todo} key={todo}></DraggableCard>)
                    }
                    {provided.placeholder}
                </Board>
                )
            }
            </Droppable>
                </Boards>
            </Wrapper>

        </DragDropContext>
    );
}

export default App;
