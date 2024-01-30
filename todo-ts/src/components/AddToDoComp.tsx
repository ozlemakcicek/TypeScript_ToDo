import  {Box} from '@mui/material'
import  {Button} from '@mui/material'
import  {Container} from '@mui/material'
import  {TextField }from '@mui/material'
import  SaveIcon from '@mui/icons-material/Save'
import React, { useState } from 'react'

//? inputun verisini yakalamak icin onChange() ve verileri tutacagimiz bir state e ihtiyacimiz var react tada Typescriptte de.

//*

const AddToDoComp = () => {
  const [text, setText] = useState(""); //! her zaman type belirtmemize gerek yok. TypeScript type inference özelligi sayesinde initial degerine gore otomatik type atamasi yapiyor. ve artik text i value olarak TextFielde yazabiliirz.boylece inputa girilen verileri tutacagimiz statei olusturduk.


 //! buton onClick oldugunda handleClick calissin diyelim Button da.yn

  const handleClick=()=>{
    console.log(text);
    

  }

  return (
    <Container>
      <Box
      sx={{
        display:{ xs:"block", sm:"flex"},
        justifyContent:"center",
        m:{xs:4, sm:"auto"},
        height:{xs:"120px", sm:"80px"}
      }}>
        <TextField
        id='outlined-basic'
        
        label="New Todo"
        variant='outlined'
        sx={{minWidth: {xs:"100%", sm:"50%"}, height:"50px", m:1}}
        inputProps={{maxLength:40}}
        value={text}
        //! simdi de inputa yazilan verileri yakalayalim
        onChange={(e)=>setText(e.target.value)}
        />
       
          <Button
          variant='contained'
          sx={{minWidth:{xs:"100%", sm:"15%"}, height:"55px", m:1}}
          endIcon= {<SaveIcon/>}
          onClick={handleClick}
          disabled={!text.trim()} //! input bosken de butona basinca yazmaya devm ediyor.buna engel olmak icin text yaz.Inputta bir yazi yoksa buton da soluklassin ve basilamaz durumda olsun istersek basina ! koyariz.
          //? ama bu seferde space tusuna basinca bikac kez buton iptal durumuna gecmiyor.cunku space truti bir deger.o nedenle basdaki ve sondaki bosluklar kaldir deiyp trim() methodunu yzariz ki buton aktif olmasin

          >
            Save To_Do
          </Button>

        
      </Box>
      
    </Container>
  )
}

export default AddToDoComp
