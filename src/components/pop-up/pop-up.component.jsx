import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import './pop-up.styles.scss';
import { selectShouldShowPopup } from "../../store/cart/cart.selector";
import { setShouldShowPopup } from "../../store/cart/cart.action";

const Popup = () => {
  const shouldShowPopup = useSelector(selectShouldShowPopup)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!shouldShowPopup) return null;

  const handleConfirm = () => {
    dispatch(setShouldShowPopup(false));
  };

  const handleCancel = () => {
    dispatch(setShouldShowPopup(false));
    navigate("/checkout");
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="title">Czy chcesz kontynuować zakupy?</span>
        <div className="popup-buttons">
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleCancel}
          >
            Nie, idźmy do kasy!
          </Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={handleConfirm}
          >
            Tak, nie pytaj mnie więcej.
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;