import styles from "./navbar.module.css"

import Input from "../forms/input/input"
import CartButton from "../forms/cartButton/cartButton"
import Logo from "../logo/logo"

export default function Navbar({ cart, onRemove}) {
    return (
        <nav className={styles.navbar}>
            <Logo/>
            <div className={styles.search}>
                <Input placeholder="Buscar" fullWidth/>
            </div>
            <CartButton
                cart={cart}
                onRemove={onRemove}
            />
        </nav>
    )
}