//! https://www.npmjs.com/package/sweetalert sitesinden getiriyosuz importunu.
//* bir fonksiyon yazip swal kismini yine siteden getirip istedigimizi alip, degistirip type ni da fonksiyon icinde yaziyoruz.
//z.Beispiel  
// swal({
//   title: "Are you sure?",
//   text: "Are you sure that you want to leave this page?",
//   icon: "warning",
//   dangerMode: true,
// })

import swal from "sweetalert";

export const notify = (msg:string, color:string) =>
  swal({
    title: "Todo App",
    text:msg,
    icon: color,
    timer:2000,
    
  });
