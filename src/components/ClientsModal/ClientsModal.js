import { useEffect } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import ClientTable from "../Table/Table";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ClientsModal(props) {
  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <>
      <Modal
        open={true}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lista de potenciais clientes
          </Typography>
          <ClientTable rows={props.users} />
        </Box>
      </Modal>
    </>
  );
}

export default ClientsModal;
