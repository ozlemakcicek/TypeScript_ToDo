import { Grid, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import ToDoListItem from "./ToDoListItem";
//ister asagiya React.FC yaz ister burda import et sadece FC yaz asagiya

// Main den gelen props u karsiladik ama type tanimlanmasi istiyor yine

interface ITodos {
  todos: TodoType[]; // bunun type i Main de TodoType olarak tanimlanmisti ama burdan ulasamyiz.o yuzden globale tasiyalim yine main dekini..Type TodoType array oldu.gelen veriler array icinde tutulacak tabiki
  // mainden gelen propsun type ni burda tanimlayalim ki algilayabilsin.asagida da karsilayalim.burdan da todoListItem a gonder
  deleteTodo: DeleteFn;
  toggleTodo:ToggleFn;
}
const ToDoList: FC<ITodos> = ({ todos, deleteTodo,toggleTodo }) => {
  // todo larin isDone lari false olanlarini ayri, true olanlarini ayri sergileyelim deersek 2 ayri satate olusturalim ve typelarini belirtelim.

  

  const [completedTodos, setCompletedTodos] = useState<TodoType[]>([]);
  const [progressTodos, setProgressTodos] = useState<TodoType[]>([]);

  // gelen todos dan verileri süzüp ilgili state lere dagitabilirz. Bunu direkt initialda(useState icindeki[]) mi yapmak mantikli yoksa useEffect icinde mi?useEffect icinde yapariz.verilerin gelmesi icin daha guvenli

  useEffect(() => {
    setCompletedTodos(todos.filter((todo) => todo.isDone));
    setProgressTodos(todos.filter((todo) => !todo.isDone));
  }, [todos]); // isDone i true olani completed, flase olani progress statine at ve bunu her todos da yap dedik buraya todos yazarak

  //? artik stateler dolu bunu ekrana basabiliriz.ilgili stateleri ilgili ekran alanalrinda acalim ve conditionlari kuralim

  return (
    <Grid
      container
      sx={{
        d: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid purple",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        {/* artik todoList i ekrana basabiliriz. mui ile yapiyi kurduktan sonra
        state leri ilgili yerlerde ac ve conditionlarini yaz. su kontrolu de
        yapablrz.eger veri varsa(length i true(1) ise progressTodosu map le ve
        todoListItema itemi props olarak gonder. degilse no progress todos yazdir.  */}
        <Typography variant="h4" align="center" color="secondary">
          In Progress Todos
        </Typography>
        {progressTodos.length ? (
          progressTodos.map((item) => (
            // guncelleme islemini textin uzerine click yapilinca olacak
            <ToDoListItem
              key={item.id}
              item={item}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
            // karsila bunu ToDoListItem da
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Progress todos!{" "}
          </Typography>
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={5}
        sx={{
          border: "1px solid green",
          borderRadius: "0.5rem",
          p: "1rem",
          minHeight: "350px",
        }}
      >
        <Typography variant="h4" align="center" color="secondary">
          Completed Todos
        </Typography>
        {completedTodos.length ? (
          completedTodos.map((item) => (
            <ToDoListItem
              key={item.id}
              item={item}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            /> // karsila bunu ToDoListItem da
          ))
        ) : (
          <Typography color="error" mt={3}>
            No Completed todos!{" "}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default ToDoList;
