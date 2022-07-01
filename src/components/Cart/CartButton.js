import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { UIActions } from "../../Slice/UISlice";

const CartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch(UIActions);
  const toggleHandler = () => {
    dispatch(UIActions.toogle());
  };

  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
