//? mui deki baslik tagimiz Typography icine yaziyoruz
//* importlarinin ayrei ayri olmasi performans icin daha iyi
//? variant ve componentin farki; SEO da h1 gibi ama gorunurde h2 seklinde olsun demek.
//* sonra imput alani ve eklenen todo larin gozuktugu list alanini ekliyoruz


import  {Avatar, Card, CardContent, CardHeader, CardMedia, Container, IconButton}  from '@mui/material';

// import { red } from "@mui/material/colors";
import { blue } from "@mui/material/colors";

// import {img} from "../img"


import  {Typography}  from '@mui/material';

import React, { useEffect, useState } from 'react';
import AddToDoComp from '../components/AddToDoComp';
import ToDoList from '../components/ToDoList';
import axios from 'axios';
import { notify } from '../helper/sweetAlert';


//* objenin typeni yazarken interface ifadesi ve yanina istedigin ismi verirsin.ve API mizden goruyoruz ki array icinde bir objemiz var.id, task ve isDone key leri var.type larini da ordan bakarak yazdik.simdi bunu alip neverlardan olusan Arraye yazalim ki never gitsin.

// interface TodoType{
//   id:string | number;
//   task: string;
//   isDone: boolean;
// }

//? usttekini ToDoList de de kullanacagimiz icin global dosyaya tasidik. burda sadece ismini kullandik

const url = "https://64a7afb1dca581464b84939b.mockapi.io/todos"; // bir degiskene atadik API adresimizi

const Main = () => {
  // inputla girilen verileri API a gonderelim burda tanimlayip ilgili componentlere gonderelim
  const [todos, setTodos] = useState<TodoType[]>([]); // initial degerini bos array olarak verelim
  // useState ustune gelince never lardan olusan bir array gosteriyor.bu olmaz.API den gelecek veriyi biliyoruz adresinde.bir array icinde obje.o zaman type ni verebiliriz. TodoType i yukarida izah ettim
  //* obje lerin type ni verirken interface kullaniyoruz.ustte yazalim bunu.

  //? todo lari cekelim API den ve todos state ni dolduralim.veri cekme fonksiyonu yazalim. API den veri cekerken herzaman try catch kullanmak iyidir.

  //! Get islemi
  const getTodos = async () => {
    try {
      const { data } = await axios.get(url); //* url i tanimla ustte.mockAPI den aldigin adresini koy icine.
      console.log(data);

      // cektigin veriyi setTodos a ata.
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? useEffect icinde getTodos u acilista cagirmamiz lazim
  useEffect(() => {
    getTodos();
  }, []);

  //! inputtan gelen verileri simdi API ye gonderelim.post islemi yapacagiz.ama yine typelarini belirtmeliyiz.id yoi kendiu veriyor zaten digerlerini yaz.gonderince tekrar ekranda gormek icin getToDos fonksiyonunu cagir.

  //* async icine bir parametre alacak fakat any diyor sadece prmtre ismini yazinca.any demek js demke yani typescript kullanmamak demek.o zaman yine typeni belirtmeliyiz.iki sekilde yapablrz bunu. ya parametrenin type ni belirleriz ya da disarda belirleyebilirz.

  // const AddTodo= async(text:string)=>{
  //   const newTodo= {
  //     task:text,
  //     isDone:false,
  //   }
  //   try {
  //     await axios.post(url, newTodo);
  //     getTodos()

  //   } catch (error) {

  //   }
  // }

  // ! type AddFn=(text:string)=>void;
  // void demek,return olmayan func.lara denir.herhangibir veri dondurmez, emir aldigini yapar.boylece hem fonksiyona , hemde parametrenin type ni belirledik

  //* ayni tanimlama AddToDoComp da da var.bunlari global bir dosyaya tasidik(types.d.ts) burda adini cagiriyorz sadece

  //! Post islemi ;todo eklemek icin

  const addTodo: AddFn = async (text) => {
    const newTodo = {
      task: text,
      isDone: false,
    };
    try {
      await axios.post(url, newTodo);
      getTodos();
    } catch (error) {}
  };

  //* artik bunu ilgili componente gonderelim ve orda da karsilayalim

  //! Delete islemi icin;

  //* alert icin sweetalert dosyaindaki fonksiyonu ilgili yerlerde cagirip notumuzu yaziyorz

  const deleteTodo: DeleteFn = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      //url i guncelliyorz sildikten soinra
      getTodos();
      notify("Todo successfully deleted!", "success");
    } catch (error) {
      notify("Todo not successfully deleted!", "error");
    }
  };
  // simdi gonderelim todoListe props olarak.Fakat kizarir cunku bunu tanimlamadik todoList da type olarak.hemen interface icine yazalim

  //! Put islemi; sildikten sonra listenin guncellenmesi icin

  //* alert icin sweetalert dosyaindaki fonksiyonu ilgili yerlerde cagirip notumuzu yaziyorz

  const toggleTodo: ToggleFn = async (item) => {
    try {
      await axios.put(`${url}/${item.id}`, { ...item, isDone: !item.isDone });
      getTodos();
      notify("Todo successfully updated!", "success");
    } catch (error) {}
    notify("Todo not successfully updated!", "error");
  };




  return (

 <Card sx={{ maxWidth: 1000,  bgcolor:blue[100], mt:10}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[700] }} aria-label="recipe">
            ÖA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="My Todo App with TypeScript "
        subheader="Januar 30, 2024"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
      /> */}
      <CardContent>







 <Container >
      <Typography
        color="blue"
        variant="h3"
        component={"h1"}
        align="center"
        mt={2}
        mb={3}
      >
        ToDo App with TypeScript
      </Typography>

      <AddToDoComp addTodo={addTodo} />
      <ToDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      {/* verileri sergilemek icin props olarak gonderelim ve de karsilayalim */}
      {/* update islemini ToDoList de ToDoListItem da ListItemTexte tiklaninca yapilacak */}
    </Container>



       
      </CardContent>
     
    </Card>







   
  );
}

export default Main

