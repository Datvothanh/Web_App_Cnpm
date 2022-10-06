import "./header.module.scss";
import Anchor from "./Anchor";
// import {
//     Phone,
//     Smartwatch,
//     Headphone,
//     Laptop,
//     Tablet,
//     Pc,
//     Down,
// } from "../Icons";
import { CategoryContext } from "../../../contexts/CategoryContext";
import { useContext, useEffect } from "react";
function HeaderNav() {
    //Contexts
    const {
        categoryState: { categories, categoriesLoading },
        getCategories,
    } = useContext(CategoryContext);

    //Start: Get all products
    useEffect(() => {
        getCategories();
    }, []);

    let body = null;

    body = (
        <>
            <nav>
                {categories.map((category) => {
                    return (
                        <Anchor
                            key={category.name}
                            name={category.name}
                            path={"category/" + category._id}
                            // firstIcon={anchor.firstIcon}
                            // secondIcon={anchor.secondIcon}
                        />
                    );
                })}
            </nav>
        </>
    );

    return <>{body}</>;
}

export default HeaderNav;
