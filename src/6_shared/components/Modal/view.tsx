import Modal from "@mui/material/Modal";

interface TModalComponent {
  open: boolean;
  onClose: () => void;
  children: JSX.Element;
}

function ModalComponent({ open, onClose, children }: TModalComponent) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {children}
    </Modal>
  );
}

export default ModalComponent;
