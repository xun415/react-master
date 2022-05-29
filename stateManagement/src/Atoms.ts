import { atom, selector } from "recoil";
import toDo from "./components/ToDo";

export interface IToDo {
    text : string;
    category: ECategory;
    id: number;
}

export enum ECategory {
    DONE = "DONE",
    DOING = "DOING",
    TO_DO = "TO_DO",



}

export const toDoState = atom({
    key: "toDo",
    default: [] as IToDo[],
})

export const categoryState = atom<ECategory>({
    key:"category",
    default: ECategory.TO_DO
})

export const toDoSelector = selector( {
    key: "toDoSelector",
    get: ({get}) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category)
    }
})
