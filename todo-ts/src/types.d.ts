//! .d.ts uzantisini typescript global alan olarak görüyor. Ve bu uzantidaki dosyalarda   tanimladigimiz type lara herhangibir export-inport yapmadan erisim saglayabiliyorz.

//? ayni type tanimlamasina sahip degerleri global alanda tanimlayip gerekli sayfalarda o tanimlama ismini kullnamamiz yeterli. typeScript dosya yapisindaki react-app-env.d.ts dosyasi butun type tanimlamalari icin global alan olusturma iznini veriyordu


type AddFn = (text: string) => void; 


//? Main ve ToDoList deki ortak type bu idi

interface TodoType {
  id: string | number;
  task: string;
  isDone: boolean;
}




//! Delete islemi icin yine main den gonderip, todolist de karsilarken kulanacgmz ortek type i yaziyoruz

type DeleteFn = (id: string | number) => void; 




//? Update islemleri icin;

type ToggleFn=( item:TodoType ) =>void;  // direkt item ile islem yapar bu