import { Cart } from '../Icons';

function CartButton(props) {
    return (
        <div className="">
            <div className="">
                <span className="">1</span>
            </div>
            <i className="">
                <Cart />
            </i>
            <span className="">Giỏ hàng</span>
        </div>
    );
}

export default CartButton;
