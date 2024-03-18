import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div>
            <div>Обычный</div>
            <div style={{fontWeight: 'bold'}}>Жирный</div>
        </div>);
}
