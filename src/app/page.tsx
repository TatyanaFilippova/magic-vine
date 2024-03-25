import Image from "next/image";
import css from "./page.module.scss";
import Header from "@/components/Header/Header";
import BannerMiddle from "@/components/BannerMiddle/BannerMiddle";
import ProductCard from "@/components/ProductCard/ProductCard";
import ReviewCard from "@/components/ReviewCard/ReviewCard";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return <div>
        <Header></Header>
        <div className={css.productCardWrapper}>
            <ProductCard title={"Товар 1"} text={"Описание товара"}></ProductCard>
            <ProductCard title={"Товар 1"} text={"Описание товара"}></ProductCard>
            <ProductCard title={"Товар 1"} text={"Описание товара"}></ProductCard>
            <ProductCard title={"Товар 1"} text={"Описание товара"}></ProductCard>
            <ProductCard title={"Товар 1"} text={"Описание товара"}></ProductCard>
            <ProductCard title={"Товар 1"} text={"Описание товара"}></ProductCard>
        </div>
        <BannerMiddle description={"Описанние баннера"} text1={"Длинное описание баннера, акции"}
                      text2={"Может быть в несколько строк"}></BannerMiddle>
        <div className={css.text}> Отзывы
           <div className={css.reviewCardWrapper}><ReviewCard text1={"Ирина Васильевна"} text2={"Очень классная корзинка, прям вообще огонь"}></ReviewCard>
               <ReviewCard text1={"Ирина Васильевна"} text2={"Очень классная корзинка, прям вообще огонь"}></ReviewCard>
               <ReviewCard text1={"Ирина Васильевна"} text2={"Очень классная корзинка, прям вообще огонь"}></ReviewCard>
           </div>

        </div>
        <Footer number={"8 800 555 35 35"} address={"г. Сыктывкар, республика Коми"}></Footer>
    </div>;

}
