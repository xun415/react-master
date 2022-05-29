import {ECategory, IToDo, toDoState} from "../Atoms";
import {useRecoilState} from "recoil";

function ToDo({text, category, id}: IToDo) {
    const [toDos, setToDos] = useRecoilState(toDoState);
    const onClick = (newCategory: ECategory) => {
        console.log('i wanna go to ', newCategory, id)

        setToDos((oldToDos) => {
            const targetIdx = oldToDos.findIndex(toDo => toDo.id === id)

            const oldTodo = oldToDos[targetIdx]
            const newTodo = {text, id, category: newCategory }
            console.log(oldTodo, newTodo)
            const frontArr = oldToDos.slice(0, targetIdx)
            const backArr = oldToDos.slice(targetIdx +1);

            return [...frontArr, newTodo, ...backArr];
        })


    }
    return (
        <li>
            <span>{text}</span>
            {category !== ECategory.DOING && <button onClick={() => onClick(ECategory.DOING)} >Doing</button>}
            {category !== ECategory.TO_DO && <button onClick={() => onClick(ECategory.TO_DO)} >To Do</button>}
            {category !== ECategory.DONE && <button onClick={() => onClick(ECategory.DONE)} >Done</button>}

        </li>
    )
}

export default ToDo;