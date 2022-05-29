import {useRecoilState, useRecoilValue} from "recoil";
import {categoryState, ECategory, toDoSelector} from "../Atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";


function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState)
    const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const Category = Object.values(ECategory).find(value => value === event.currentTarget.value)!;
        setCategory(Category);
    }
    return (
        <div>
            <h1>To Dos</h1>
            <hr/>
            <select value={category} onInput={onInput}>
                {Object.values(ECategory).map((value) =>
                    <option value={value}>{value}</option>
                )}
            </select>
            <CreateToDo></CreateToDo>
            {toDos?.map(todo => <ToDo key={todo.id} {...todo}></ToDo>)}

        </div>
    );

}

export default ToDoList;