import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import '../App.css';
import Header from "./Header";

function Blog() {
  return (
    <>
    <Header/>
    <Card>
      <Card.Body>
        <Card.Title>Happy</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">my story</Card.Subtitle>
        <Card.Text>
          happy to write my frist blog 
        </Card.Text>
        <Card.Link href="#Update">Update</Card.Link>
        <Button as="input" type="Delete" value="Delete" />
      </Card.Body>
    </Card>
    
    <Card>
        <Card.Body>
        <Card.Title>Happy</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">my story 2</Card.Subtitle>
        <Card.Text>
          happy to write my second blog 
        </Card.Text>
        <Card.Link href="#Update">Update</Card.Link>
        <Button as="input" type="delete" value="Delete" />
      </Card.Body>
    </Card>
    
    </>
  );
}

export default Blog;