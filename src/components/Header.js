import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
    return (
        <header>
            {/*collapseOnSelect는 반응형*/}
            <Navbar bg={'dark'} variant={'dark'} expand={'lg'} collapseOnSelect>
                <Container>
                    <LinkContainer to={"/"}>
                        <Navbar.Brand>
                            StockService
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls={'basic-navbar-nav'}/>
                    {/*콜렙스는 토글 눌렀을 떄 일어나는 일 설정*/}
                    <Navbar.Collapse id={'basic-navbar-nav'}>
                        <Nav className={'ml-auto'}>
                            <LinkContainer to={"/mypage"}>
                                <Nav.Link>
                                    MyPage
                                </Nav.Link>
                            </LinkContainer>
                            {/*<Nav.Link>*/}
                            {/*    Main*/}
                            {/*</Nav.Link>*/}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;