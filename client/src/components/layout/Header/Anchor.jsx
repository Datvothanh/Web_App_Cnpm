import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './header.module.scss';
function Anchor({ name, path, firstIcon, secondIcon }) {
    const Empty = () => {
        return <span></span>;
    };
    const FirstIcon = firstIcon || Empty;
    const SecondIcon = secondIcon || Empty;
    return (
        <Link to={path} className={clsx(styles.item, '')}>
            <i>
                <FirstIcon className="" />
            </i>
            {name}
            <i>
                <SecondIcon />
            </i>
        </Link>
    );
}

export default Anchor;
