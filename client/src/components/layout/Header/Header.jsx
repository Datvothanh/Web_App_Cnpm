import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import SearchInput from './SearchInput';
import CartButton from './CartButton';
import styles from './header.module.scss';
import './header.module.scss';
function Header() {

    return (
        <header className={styles.heading}>
            <div className={styles.top}>
                <div className={styles.wrap}>
                    <Link to="/">
                        <div className={styles.logo}></div>
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
    );
}

export default Header;
