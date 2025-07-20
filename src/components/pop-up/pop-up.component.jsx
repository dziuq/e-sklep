import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

import "./pop-up.styles.scss";

const Popup = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;
   return (
    <div className="popup-overlay">
      <div className="popup-content">
        <span className="title">Do you wish to continue shopping?</span>
        <div className="popup-buttons">
          <Button buttonType ={BUTTON_TYPE_CLASSES.inverted} onClick={onCancel}>No, let's go to checkout!</Button>
          <Button buttonType ={BUTTON_TYPE_CLASSES.inverted} onClick={onConfirm}>Yes, don't ask me again.</Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
