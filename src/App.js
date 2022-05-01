import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Main, MyPage} from "./pages";
import {Header, Footer} from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path={"/mypage"} element={<MyPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;