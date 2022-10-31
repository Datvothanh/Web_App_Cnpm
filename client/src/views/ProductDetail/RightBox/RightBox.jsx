import styles from "./rightBox.module.scss";
import { useContext, useState, useEffect } from "react";
import { discountInfo } from "./DiscountContent";
import { numberWithCommas } from "../../../utils";
import { CounterQuantity } from "../../../components/Selector";
import { Modal } from "flowbite-react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Link, useParams } from "react-router-dom";

const RightBox = ({ name, price, discount }) => {
    let idProduct = useParams();

    const {
        authState: { authLoading, isAuthenticated, user },
    } = useContext(AuthContext);

    const [modalShow, setModalShow] = useState(false);
    const [alertMess, setAlertMess] = useState({});

    let button = null;
    if (isAuthenticated) {
        button = (
            <button
                className={styles.button}
                onClick={() => setModalShow(true)}
            >
                Mua ngay
            </button>
        );
    } else {
        button = (
            <Link to="/login">
                <button className={styles.button}>Đăng nhập để mua hàng</button>
            </Link>
        );
    }

    const handleClickPay = (e) => {
        if (isAuthenticated) {
            e.preventDefault();
            const cart = {
                userId: `${user._id}`,
                id_product: `${idProduct}`,
                quantity: 1,
            };
            fetch("http://localhost:5000/api/addCart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(cart),
            }).then(() => {
                console.log("New cart added");
            });
            alert("Đã được thêm vào giỏ hàng");
        }
    };

    return (
        <div className={styles.rightBox}>
            <div className={styles.price}>
                {numberWithCommas(price - (price * discount) / 100)}đ
                <span className={`${styles.originPrice} ml-3`}>
                    {numberWithCommas(price)}đ
                </span>
                <span className={styles.discount}>(-{discount}%)</span>
            </div>

            <div className={styles.promo}>
                <div className={styles.promoTop}>
                    <h1>Khuyến mãi</h1>
                    Giá và khuyến mãi dự kiến áp dụng đến 31/12/2022
                </div>
                <div className={styles.promoBody}>
                    <ul className="p-4">
                        {discountInfo.map((item, index) => {
                            return (
                                <li className="" key={index}>
                                    <span className="bg-blue-300 rounded-full h-8 w-8 inline-block text-center text-white text-lg">
                                        {index + 1}
                                    </span>
                                    &emsp;
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div>
                {button}
                <Modal show={modalShow} onClose={() => setModalShow(false)}>
                    <Modal.Header>
                        <div className="p-4 text-2xl">
                            <p className="">{name}</p>
                            <strong className="text-red-400">
                                {numberWithCommas(
                                    price - (price * discount) / 100
                                )}
                                ₫
                            </strong>
                            <span className="line-through ml-3">
                                {numberWithCommas(price)}₫
                            </span>
                            <span>(-{discount}%)</span>
                            <div className="flex-1 w-60 mt-2">
                                <img
                                    src="https://cdn.tgdd.vn/Products/Images/42/230529/iphone-13-pro-max-xanh-la-thumb-600x600.jpg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p>Chọn số lượng:</p>
                            <CounterQuantity
                                value={1}
                                onChange={(quantity) => {
                                    cart = {
                                        ...cart,
                                        quantity: quantity,
                                    };
                                }}
                            />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="w-full">
                            <button
                                className="bg-yellow-300 w-full mb-4 block p-6 rounded-lg text-black font-bold"
                                onClick={handleClickPay}
                            >
                                THÊM VÀO GIỎ HÀNG
                            </button>
                            <Link
                                to="/Cart"
                                className="text-blue-500 block w-full text-center"
                            >
                                Xem giỏ hàng
                            </Link>
                        </div>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};
export default RightBox;
