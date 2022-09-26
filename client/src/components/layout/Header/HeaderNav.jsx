import "./header.module.scss";
import Anchor from './Anchor';
import {
    Phone,
    Smartwatch,
    Headphone,
    Laptop,
    Tablet,
    Pc,
    Down,
} from "../Icons";
function HeaderNav() {
    const anchors = [
        { name: "Điện thoại", path: "/dienthoai", firstIcon: Phone },
        { name: "Laptop", path: "/laptop", firstIcon: Laptop },
        { name: "Tablet", path: "/tablet", firstIcon: Phone },
        {
            name: "Phụ kiện",
            path: "/phukien",
            firstIcon: Headphone,
            secondIcon: Down,
            tooltip: true,
            content: "AccesContent",
        },
        { name: "Smartwatch", path: "/smartwatch", firstIcon: Smartwatch },
        {
            name: "PC, Máy in",
            path: "/pc",
            firstIcon: Pc,
            secondIcon: Down,
            tooltip: true,
            content: "PcContent",
        },
        
    ];
    return (
        <nav>
            {anchors.map((anchor) => {
                return (
                    <Anchor
                        key={anchor.name}
                        name={anchor.name}
                        path={anchor.path}
                        firstIcon={anchor.firstIcon}
                        secondIcon={anchor.secondIcon}
                    />
                );
            })}
        </nav>
    );
}

export default HeaderNav;
