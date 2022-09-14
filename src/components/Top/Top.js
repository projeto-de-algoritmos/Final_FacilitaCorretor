import IconButton from "@material-ui/core/IconButton";
import ListIcon from "@material-ui/icons/List";


function Top(props) {
  return (
    <div>
      <IconButton onClick={() => props.onPressButton()}>
        Clique para ver lista de potenciais clientes
        <ListIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
}

export default Top;
