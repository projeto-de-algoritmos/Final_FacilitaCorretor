import { useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
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
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Lista de potenciais clientes
          </Typography>
          {props && props.users && props.users.length && props.users.map((o, i) => 
            <div>
              Cliente {i}
              <p>Veiculo: {o.vehicle}</p>
              <p>Proprietario: {o.name}</p>
              <p>distancia: {o.distance}</p>
              <p>idade: {o.age}</p>
              -------
            </div>
          )}

          {props && props.users && props.users.map((o) => {
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {o.name}
            </Typography>
          })}
        </Box>
      </Modal>
    </>
  );
}

export default ClientsModal;
