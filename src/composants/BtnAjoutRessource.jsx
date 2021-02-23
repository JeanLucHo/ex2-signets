import './sass/BtnAjoutRessource.scss';
import { Fab } from '@material-ui/core';

export default function BtnAjoutRessource() {
  return (
    <button  className="BtnAjoutRessource">
      <Fab aria-label="add" className="Fab BtnAjoutRessource"> +</Fab>
    </button>
  );
}