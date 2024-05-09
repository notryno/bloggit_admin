import "./modal.scss";

const Modal = ({ open, handleClose, handleLogout }) => {
  return (
    <div className={open ? "modal open" : "modal"}>
      <div className="modal-content">
        <h2>Logout Confirmation</h2>
        <p>Are you sure you want to logout?</p>
        <div className="button-containerModal">
          <button onClick={handleClose}>Cancel</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
