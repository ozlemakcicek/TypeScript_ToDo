import { DeleteForever } from "@mui/icons-material";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";


interface IListItem {
  item: TodoType;
}

const ToDoListItem: React.FC<IListItem> = ({ item }) => {
  return (
    <ListItem
    sx={{
      cursor:"pointer",
      overflow:"hidden",   }}
      secondaryAction={
         <IconButton aria-label="comment" sx={{"&:hover": {color:"red"}}}>
        <DeleteForever/>
      </IconButton>
      }>
 
   <ListItemText primary={item.task} sx={{wordWrap:"break-word" }}/>
     
    </ListItem> 
  );
};

export default ToDoListItem;
