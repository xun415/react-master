import {useForm} from "react-hook-form";
import {useRecoilValue, useSetRecoilState} from "recoil";
import {toDoState, ECategory, categoryState} from "../Atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {
    const {
        register, handleSubmit, setValue
    } = useForm<IForm>()

    const setToDos = useSetRecoilState(toDoState)
    const category = useRecoilValue(categoryState);
    const handleValid = ({ toDo }: IForm) => {
        setToDos((prev) => [{text: toDo, category, id: Date.now()} ,...prev])
        setValue("toDo", "")
    }
    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input {...register("toDo", {
                required: "Please write a To Do"
            })} type="text" placeholder="Write a to do"/>
            <button>Add</button>
        </form>
    )

}

export default CreateToDo;