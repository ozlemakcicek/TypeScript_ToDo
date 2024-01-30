//? mui deki baslik tagimiz Typography icine yaziyoruz
//* importlarinin ayrei ayri olmasi performans icin daha iyi
//? variant ve componentin farki; SEO da h1 gibi ama gorunurde h2 seklinde olsun demek.
//* sonra imput alani ve eklenen todo larin gozuktugu list alanini ekliyoruz


import  {Container}  from '@mui/material';
import  {Typography}  from '@mui/material';

import React, { useEffect, useState } from 'react';
import AddToDoComp from '../components/AddToDoComp';
import ToDoList from '../components/ToDoList';
import axios from 'axios';


//* objenin typeni yazarken interface ifadesi ve yanina istedigin ismi verirsin.ve API mizden goruyoruz ki array icinde bir objemiz var.id, task ve isDone key leri var.type larini da ordan bakarak yazdik.simdi bunu alip neverlardan olusan Arraye yazalim ki never gitsin.

interface TodoType{
  id:string | number;
  task: string;
  isDone: boolean;
}

const url = "https://64a7afb1dca581464b84939b.mockapi.io/todos";

const Main = () => {
  // inputla girilen verileri API a gonderelim burda tanimlayip ilgili componentlere gonderelim
  const [todos, setTodos] = useState<TodoType[]>([]); // initial degerini bos array olarak verelim
  // useState ustune gelince never lardan olusan bir array gosteriyor.bu olmaz.API den gelecek veriyi biliyoruz adresinde.bir array icinde obje.o zaman type ni verebiliriz. TodoType i yukarida izah ettim
  //* obje lerin type ni verirken interface kullaniyoruz.ustte yazalim bunu.

  //? todo lari cekelim API den ve todos state ni dolduralim.veri cekme fonksiyonu yazalim. API den veri cekerken herzaman try catch kullanmak iyidir.

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

  const addTodo:AddFn= async(text)=>{
    const newTodo= {
      task:text,
      isDone:false,
    }
    try {
      await axios.post(url, newTodo);
      getTodos()

      
    } catch (error) {
      
    }
  }

  //* artik bunu ilgili componente gonderelim ve orda da karsilayalim
 

  return (
    <Container>
      <Typography
        color="blue"
        variant="h2"
        component={"h1"}
        align="center"
        mt={3}
      >
        ToDo App with TypeScript
      </Typography>

      <AddToDoComp addTodo={addTodo} />
      <ToDoList />
    </Container>
  );
}

export default Main

