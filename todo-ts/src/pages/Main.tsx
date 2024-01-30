//? mui deki baslik tagimiz Typography icine yaziyoruz
//* importlarinin ayrei ayri olmasi performans icin daha iyi
//? variant ve componentin farki; SEO da h1 gibi ama gorunurde h2 seklinde olsun demek.
//* sonra imput alani ve eklenen todo larin gozuktugu list alanini ekliyoruz


import  {Container}  from '@mui/material';
import  {Typography}  from '@mui/material';

import React from 'react';
import AddToDoComp from '../components/AddToDoComp';
import ToDoList from '../components/ToDoList';


const Main = () => {
  return (
   <Container>
    <Typography color="error" variant='h2' component={"h1"} align='center' mt={3}>
        ToDo App with TypeScript

    </Typography>

    <AddToDoComp/>
    <ToDoList/>
   </Container>

  )
 
  
}

export default Main

