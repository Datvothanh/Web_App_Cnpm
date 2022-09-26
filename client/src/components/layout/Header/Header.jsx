import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderNav from "./HeaderNav";
import SearchInput from "./SearchInput";
import CartButton from "./CartButton";
import styles from "./header.module.scss";
import "./header.module.scss";
function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("cnpmm"));

    const handleLogOut = (e) => {
        
        localStorage.removeItem("cnpmm");
        setIsLoggedIn(false);
        window.location.reload();
    }
    return (
        <div>
            <header className={styles.heading} style={{ display: isLoggedIn ? 'none' : 'block' }}>
                <div className={styles.top}>
                    <div className={styles.wrap}>
                        <Link to="/">
                            <div className={styles.logo}></div>
                        </Link>
                        <Link to="/login">Đăng Nhập</Link>
                        {/* <SearchInput /> */}

                        {/* <Link to="/cart">
                        <CartButton />
                    </Link> */}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <HeaderNav />
                </div>
            </header>
            <header className={styles.heading} style={{ display: isLoggedIn ? 'block' : 'none' }}>
                <div className={styles.top}>
                    <div className={styles.wrap}>
                        <Link to="/">
                            <div className={styles.logo}></div>
                        </Link>
                        <Link onClick={(e) => handleLogOut(e.target.value)}>Đăng Xuất</Link>
                        {/* <SearchInput /> */}

                        {/* <Link to="/cart">
                        <CartButton />
                    </Link> */}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <HeaderNav />
                </div>
            </header>
        </div>
    );
}

export default Header;
