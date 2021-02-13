import React from "react";
import Jumbo from "../components/Jumbotron";
import { Container, Table } from "react-bootstrap";

function About() {
  return (
    <>
      <h1>About</h1>
      <Jumbo />
      <Container>
        <h2>Title</h2>
        <Table stripped bordered hover>
          <thead>
            <tr>
              <th colSpan="2">1</th>
              <th colSpan="">2</th>
              <th colSpan="2">3</th>
              <th colSpan="2">4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default About;
