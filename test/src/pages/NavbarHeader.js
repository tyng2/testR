import data from "../data/data.json";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarHeader({props}){

    const menu = data.menu;

    const rendering = () => {
        const result = [];
        menu.map((v, i)=>{
            let link = (v.param) ? v.link + '/' + props : v.link;
            result.push(<Nav.Link href={link} key={i} className="btn p-2">{v.name}</Nav.Link>);
        })
        return result;
    }

    return (
        <Navbar expand="sm" className="bg-body-tertiary mb-3">
            <Container>
                <Navbar.Brand href="/"><Logo height="40px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        { rendering() }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
