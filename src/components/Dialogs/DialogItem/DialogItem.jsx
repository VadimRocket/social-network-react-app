import React from "react";
import s from "./DialogItem.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
   let path = "/dialogs/" + id;

   return (
      <div className={s.dialog}>
         <NavLink to={path}> {name} </NavLink>
      </div>
   );
};

export default DialogItem;
