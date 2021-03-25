import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styles from "./styles/Header.module.css";
import Popover from "@material-ui/core/Popover";

const Header = () => {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [teste, setTeste] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleTeste = (event) => {
    setTeste(event.currentTarget);
  };

  const handleTesteClosed = (event) => {
    setTeste(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className={styles.main}>
        <div className={styles.teste}>
          <button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            Login
          </button>
          
          <button>teste</button>

          <button onClick={handleTeste}>Open Menu</button>
          <Menu
            id="simple-menu"
            anchorEl={teste}
            keepMounted
            open={Boolean(teste)}
            onClose={handleTesteClosed}
          >
            <MenuItem onClick={handleTesteClosed}>Profile</MenuItem>
            <MenuItem onClick={handleTesteClosed}>My account</MenuItem>
            <MenuItem onClick={handleTesteClosed}>Logout</MenuItem>
          </Menu>

          <div className={styles.ButtonDesign}>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              <p>Autenticar</p>
              <div className={styles.BoxInputs}>
                <input placeholder="CPF" />

                <input placeholder="SENHA" />

                <button>entrar</button>
              </div>
            </Popover>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
