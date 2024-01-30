import  {Box} from '@mui/material'
import  {Button} from '@mui/material'
import  {Container} from '@mui/material'
import  {TextField }from '@mui/material'
import  SaveIcon from '@mui/icons-material/Save'
import React, { useState } from 'react'

//? inputun verisini yakalamak icin onChange() ve verileri tutacagimiz bir state e ihtiyacimiz var react tada Typescriptte de.

//*main den gonderilen addTodo fonks.burda karsilayalim.ama typeni algilayamiyor. react da props alan bir component tanimliyorsak vce ona props gonderiyorsak gonderdigimiz propsun typeni belirtmeliyz.obje oldugu icin o kurala gore yaziyoruz

interface IAddToDo {
  //* addTodo:(text:string)=> void;
  // global alana tasidik.burda adini kullnadik sadece.ayni tanimlama Main da da var.bunlari global bir dosyaya tasidik(types.d.ts) burda adini cagiriyorz sadece
  addTodo: AddFn;
}

//? React.FC <AddTodo> yani diyoruzki bu bir reactFunctional componenttir, props olarak da AddTodo interface ine uygun olarak props gonderebilir hale getirdik. Props alan componentlerde React.FC yi belirtmemiz lazim

// const AddToDoComp = ({addTodo}) => {
  const AddToDoComp :React.FC<IAddToDo> = ({ addTodo }) => {
    const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. TypeScript type inference özelligi sayesinde initial degerine gore otomatik type atamasi yapiyor. ve artik text i value olarak TextFielde yazabiliirz.boylece inputa girilen verileri tutacagimiz statei olusturduk.

    //! buton onClick oldugunda handleClick calissin diyelim Button da.yn

    const handleClick = () => {
      
      //* gelen addTodo yu handleClick icinde yakalayalim (icine de parametre istiyor) ve sonra tekrar state i bosaltalim.
      addTodo(text)
      setText("")
      console.log(text);
    };

    return (
      <Container>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            justifyContent: "center",
            m: { xs: 4, sm: "auto" },
            height: { xs: "120px", sm: "80px" },
          }}
        >
          <TextField
            id="outlined-basic"
            label="New Todo"
            variant="outlined"
            sx={{ minWidth: { xs: "100%", sm: "50%" }, height: "50px", m: 1 }}
            inputProps={{ maxLength: 40 }}
            //* state te tutulan verileri bildirelim
            value={text}
            //! simdi de inputa yazilan verileri yakalayalim
            onChange={(e) => setText(e.target.value)} // yine type ni belirtmedik.otomatik yapar. setTextin ustune gelince void yazar.bu aldigi emri yerine getirir return etmeye gferek yok demek.
          />

          <Button
            variant="contained"
            sx={{ minWidth: { xs: "100%", sm: "15%" }, height: "55px", m: 1 }}
            endIcon={<SaveIcon />}
            onClick={handleClick}
            disabled={!text.trim()} //! input bosken de butona basinca yazmaya devm ediyor.buna engel olmak icin text yaz.Inputta bir yazi yoksa buton da soluklassin ve basilamaz durumda olsun istersek basina ! koyariz.
            //? ama bu seferde space tusuna basinca bikac kez buton iptal durumuna gecmiyor.cunku space truti bir deger.o nedenle basdaki ve sondaki bosluklar kaldir deiyp trim() methodunu yzariz ki buton aktif olmasin
          >
            Save To_Do
          </Button>
        </Box>
      </Container>
    );
  };

export default AddToDoComp
