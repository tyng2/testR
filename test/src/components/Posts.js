import { Card, Stack } from "react-bootstrap";

export default function Posts({list}) {
    return (
        <Stack gap={3}>
            {
                list.map((v, i)=>(
                    <Card key={v.id} className="mb-3">
                        <Card.Body>
                            <Card.Title>{v.title} | {v.id}</Card.Title>
                            <Card.Subtitle>{v.userId}</Card.Subtitle>
                            <Card.Text>{v.body}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </Stack>
    );
}
