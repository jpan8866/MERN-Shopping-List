import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { useState } from 'react';

const AppNavbar = () => {
    const [showBar, setShowBar] = useState(false);
    const toggle = () => {
        setShowBar(!showBar);
    }

    return(
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">Shopping List</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={showBar} navbar> 
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="https://github.com/jpan8866">My GitHub</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/">Test 2nd element</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;