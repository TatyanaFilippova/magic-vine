import Header from "./Header";


export default {
    title: "Header",
    component: Header
}

export const Default={
    render:()=><Header title={"Заголовок"} text={"Описание"}></Header>
}