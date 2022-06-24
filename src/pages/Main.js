import React, {useEffect, useState} from 'react';
import {Col, Container, Row, Modal, Button,Form} from "react-bootstrap";
import {Helmet} from 'react-helmet';
import getD_Day from './dDay'
import Home from "../components/Home";
import PrivateLetters from "../components/PrivateLetters";
import Heart from "react-animated-heart";
import TypingName from "../components/TypingName";


const Main = () => {

    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    };

    const [page, setpage] = useState(0);
    useEffect(() => {
        setClick(true);
    }, []);
    const [isClick, setClick] = useState(false);

    function changePage(params) {
        if (page === 0) setpage(1);
        else setpage(0);

    }
    return (
        <div className="App" style={styles}>
            <Helmet>
                <style>{'body { background-color: #FFEBCD; }'}</style>
            </Helmet>

            <div align="center">
                    <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
                     {page === 0 ? <Home setpage={setpage} /> : null}
                     {page === 0 ? <TypingName /> : null}
                    {page === 1 ? <PrivateLetters setpage={setpage} /> : null}
                <br/>   <br/>
                <Button  onClick={changePage}>
                    {page === 0 ? "편지" : "처음으"}로 가기
                </Button>
                <br/>   <br/>   <br/>   <br/>   <br/>

                <h1 dangerouslySetInnerHTML={{__html: getD_Day()}}></h1>
         </div>
        </div>
    )
}

export default Main;