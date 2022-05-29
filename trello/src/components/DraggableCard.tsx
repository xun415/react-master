import {Draggable} from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  margin-bottom: 4px;
  border-radius: 5px;
  padding: 10px 10px;
  background-color: ${(props => props.theme.cardColor)};
`;
interface IDraggableCardProps {
    todo: string;
    index: number;
}
function DraggableCard({todo, index}: IDraggableCardProps) {
    console.log(todo, 'card has been rendered')
    return (
        <Draggable draggableId={todo} key={todo} index={index}>
            {(provided) => (
                <Card
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {todo}
                </Card>
            )}
        </Draggable>
    )
}

export default React.memo(DraggableCard);
