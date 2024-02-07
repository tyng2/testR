import Stack from "react-bootstrap/Stack";
import data from "../data/data.json";
import { Link } from "react-router-dom";

export default function Header({props}){

    const menu = data.menu;

    const rendering = () => {
        const result = [];
        menu.map((v, i)=>{
            let link = (v.param) ? v.link + '/' + props : v.link;
            result.push(<Link to={link} key={i} className="btn p-2">{v.name}</Link>);
        })
        return result;
    }

    return (
        <>
            <Stack direction="horizontal" gap={3}>
                { rendering() }
            </Stack>
        </>
    );
}
