import Image from "next/image"

import styles from "./saleCard.module.css"
import Button from "@/components/forms/button/button"

export default function SaleCard() {
    return(
        <div className={styles.saleCard}>
            <Image src="/products/league-of-legends.jpg" width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.prices}>
                        <p className={styles.oldPrice}>R$99,90</p>
                        <h4 className={styles.newPrice}>R$89,90</h4>
                    </div>
                </div>
                <Button>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}