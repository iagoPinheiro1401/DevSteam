import Image from "next/image"

import styles from "./saleCard.module.css"
import Button from "@/components/forms/button/button"

export default function SaleCard({ image, discount, fullPrice, discountPrice, onAdd }) {
    return(
        <div className={styles.saleCard}>
            <Image alt={image} src={`/products/${image}`} priority="high" width={250} height={300} />
            <div className={styles.info}>
                <h3 className={styles.title}>Oferta exclusiva</h3>
                <div className={styles.priceCard}>
                    <div className={styles.percent}>-{discount}</div>
                    <div className={styles.prices}>
                        <p className={styles.oldPrice}>R${fullPrice}</p>
                        <h4 className={styles.newPrice}>R${discountPrice}</h4>
                    </div>
                </div>
                <Button onClick={onAdd} fullWidth>Adicionar ao carrinho</Button>
            </div>
        </div>
    )
}

SaleCard.defaultProps = {
    image: 'league-of-legends.jpg',
    discount: '90%',
    fullPrice: '199,00',
    discountPrice: '100,00'
}