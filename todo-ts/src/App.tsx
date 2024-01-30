//! bu kisim js ile ayni. genel dosya yapisindan App, index ve react-app-env.d.ts dosyasi haric digerlerini silince burdan da divin icini tamamen temizleyelim.index.tsx dende alti cizilileri sil.
//* rafce ile  hazir gelen  div den kurtuluyoruz.biz Main kullaniyoruz cunku.
//? Yapiyi kuracagimiz Maini burda cagiriyoruz mui den getirdigimiz bir container icinde. 
//* css importunu sildik


import React from 'react';


import { Container } from '@mui/material';
import Main from './pages/Main';

function App() {
  return (
   
      <Container>
        <Main/>
      </Container>
  
  );
}

export default App;
