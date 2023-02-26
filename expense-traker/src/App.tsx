import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
import ShowList from './components/DataList/ShowList';
import AppFooter from './components/header-footer/appFooter';
import AppHeader from './components/header-footer/AppHeader';

function App() {
  return (
    <>
    <AppHeader/>
      <Container>
        <Routes>
          <Route path="/" element={<ShowList />}></Route>
        </Routes>
      </Container>
    <AppFooter/>
    </>
  );
}

export default App;
