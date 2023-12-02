import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from 'reactstrap';

const Menu = () => {
    return (
        <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/subjects" action>Subjects</Link>
        {/* <Link className="list-group-item list-group-item-action" tag="a" to="/add-subject" action>Add Subject</Link> */}
        <Link className="list-group-item list-group-item-action" tag="a" to="/update-subject" action>Update Subject</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#" action>About</Link>
      </ListGroup>
    );
}

export default Menu;