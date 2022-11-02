import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import HeaderNav from "./HeaderNav";
import { useNavigate } from "react-router-dom";
import CartButton from "./CartButton";
import styles from "./header.module.scss";

import "./header.module.scss";
import { AuthContext } from "../../../contexts/AuthContext";
function Header() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("cnpmm"));
    const [keyword, setKeyword] = useState();
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            navigate(`/search/${keyword}`);
        } else {
        }
    };

    const handleLogOut = (e) => {
        localStorage.removeItem("cnpmm");
        setIsLoggedIn(false);
        window.location.reload();
    };
    return (
        <div>
            <header
                className={styles.heading}
                style={{ display: isLoggedIn ? "none" : "block" }}
            >
                <div className={styles.top}>
                    <div className={styles.wrap}>
                        <Link to="/">
                            <div className={styles.logo}></div>
                        </Link>
                        {/* <SearchInput /> */}
                        <form onSubmit={submitHandler}>
                            <input
                                type="search"
                                placeholder="Tìm kiếm"
                                onChange={(e) => setKeyword(e.target.value)}
                            ></input>
                        </form>
                        <Link to="/register">Đăng Ký</Link>
                        <Link to="/login">Đăng Nhập</Link>

                        {/* <Link to="/cart">
                        <CartButton />
                    </Link> */}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <HeaderNav />
                </div>
            </header>
            <header
                className={styles.heading}
                style={{ display: isLoggedIn ? "block" : "none" }}
            >
                <div className={styles.top}>
                    <div className={styles.wrap}>
                        <Link to="/">
                            <div className={styles.logo}></div>
                        </Link>
                        
                        <form onSubmit={submitHandler}>
                            <input
                                type="search"
                                placeholder="Tìm kiếm"
                                onChange={(e) => setKeyword(e.target.value)}
                            ></input>
                        </form>
                        <Link to="/Profile">
                            Profile
                        </Link>
                        <Link to={"/Cart"}>
                            Giỏ hàng
                        </Link>
                        <Link onClick={(e) => handleLogOut(e.target.value)}>
                            Đăng Xuất
                        </Link>
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
