import { DeleteForever } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";


interface IListItem {
  item: TodoType;
  //delete icin mainden ToDoList e gonderilen ordan da buraya geln  propsu burda tanimlayalim
  deleteTodo:DeleteFn;
  toggleTodo: ToggleFn;
}

const ToDoListItem: React.FC<IListItem> = ({ item , deleteTodo, toggleTodo}) => {
  return (
    <ListItem
    sx={{
      cursor:"pointer",
      overflow:"hidden",   }}
      secondaryAction={
         <IconButton aria-label="comment" sx={{"&:hover": {color:"red"}}}>
          {/* artik delete butonuna basilinca todo yu silmesi lazim */}
        <DeleteForever onClick={()=> deleteTodo(item.id)}/>
      </IconButton>
      }>
 
   <ListItemText primary={item.task} sx={{wordWrap:"break-word" }} onClick={()=>toggleTodo(item)}/>
     
    </ListItem> 
  );
};

export default ToDoListItem;
