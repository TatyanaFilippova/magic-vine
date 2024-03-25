import Footer from "./Footer"
import exp from "node:constants";
import React from "react";

export default {
    title:"Footer",
    component: Footer
}

export const Default={
    render:()=> <Footer number={"8 800 555 35 35"} address={"г. Сыктывкар, республика Коми"}></Footer>
}