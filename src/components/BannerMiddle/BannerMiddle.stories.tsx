import BannerMiddle from "./BannerMiddle";


export default {
    title: "BannerMiddle",
    component: BannerMiddle,

}

export const Default= {
    render: () => <BannerMiddle
        description={"Описание баннера"} text1={"Длинное описание баннера, акции."}
        text2={" Может быть в несколько строк"}></BannerMiddle>,

}
