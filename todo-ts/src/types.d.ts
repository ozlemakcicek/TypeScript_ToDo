//! .d.ts uzantisini typescript global alan olarak görüyor. Ve bu uzantidaki dosyalarda   tanimladigimiz type lara herhangibir export-inport yapmadan erisim saglayabiliyorz.

//? ayni type tanimlamasina sahip degerleri global alanda tanimlayip gerekli sayfalarda o tanimlama ismini kullnamamiz yeterli. typeScript dosya yapisindaki react-app-env.d.ts dosyasi butun type tanimlamalari icin global alan olusturma iznini veriyordu


type AddFn = (text: string) => void; 