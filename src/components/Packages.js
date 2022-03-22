import { ListGroup, Container, ListGroupItem } from "react-bootstrap"

export default function Packages(props) {
    const displayPackages = props.packages.map((eachPackage) => <ListGroup.Item>{eachPackage}</ListGroup.Item>)

    return (
        <Container>
            <div className="packages">
                <div className="packagesHeader">
                    <h1>Our Packages</h1>
                </div>
                <ListGroup>
                    {displayPackages}
                </ListGroup>
            </div>
        </Container>
    )
}