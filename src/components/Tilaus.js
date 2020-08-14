import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCustomer(props) {
  const [open, setOpen] = React.useState(false);
  const [asiakas, setAsiakas] = React.useState({ nimi: '', osoite: '', puhelin: '', email: '',ostoskori: props.ostoskori,kokonaissumma:props.summa })
  const [alv, setAlv] = React.useState(0);
  const [veroton, setVeroton] = React.useState(0);

  const handleClickOpen = () => {
    setAlv(props.summa * 0.24)
    setVeroton(props.summa - (props.summa * 0.24))
    setAsiakas({ ...asiakas, kokonaissumma: props.summa });
    setOpen(true);
  }

  const handleClose = () => {
    if (asiakas.nimi === '' || asiakas.osoite === '' || asiakas.puhelin === '' || asiakas.email === '') {
      alert('Täytä asiakastiedot')
    } else {
      alert('Kiitos tilauksestanne\n\nTässä kohtaa tilaus voitaisiin insertoida/postata tietokantaan\nTässä projektissa sellaista ei ole.')
      setOpen(false);
    }
  }

  const handleCancel = () => {
    setOpen(false);
  }

  const inputChanged = (event) => {
    setAsiakas({ ...asiakas, [event.target.name]: event.target.value });
  }

  const tuotteet = props.ostoskori.map((lista) => {

    return (

      <tr key={lista.id} >
        <td width={10}></td>
        <td>{lista.tuote}</td>
        <td width={50}></td>
        <td>{lista.hinta.toLocaleString()}€</td>
      </tr>

    )
  }
  )

  return (
    <div>
      <h1> </h1>
      <Button style={{ margin: 10 }} variant="outlined" color="primary" onClick={handleClickOpen}>
        Kassalle
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Tilaus</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nimi"
            name="nimi"
            value={asiakas.nimi}
            onChange={inputChanged}
            label="Nimi"
            fullWidth

          />
          <TextField
            margin="dense"
            id="osoite"
            name="osoite"
            value={asiakas.osoite}
            onChange={inputChanged}
            label="Osoite"
            fullWidth
          />

          <TextField
            margin="dense"
            id="puhelin"
            name="puhelin"
            value={asiakas.puhelin}
            onChange={inputChanged}
            label="Puhelin"
            fullWidth
          />
          <TextField
            margin="dense"
            id="email"
            name="email"
            value={asiakas.email}
            onChange={inputChanged}
            label="Sähköposti"
            fullWidth
          />


        </DialogContent>
        <table>
          {tuotteet}
        </table>
        <br></br>
        <div className="App" >
          <div>Veroton: {veroton.toLocaleString()}</div>
          <div>Alv: {alv.toLocaleString()}</div>
          <div>Yhteensä: {props.summa.toLocaleString()}</div>
        </div>

        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Keskeytä
          </Button>
          <Button onClick={handleClose} color="primary">
            Vahvista
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  )
}