import React, { Component } from "react";
import Jumbo from "../components/Jumbotron";
import { Container, Table } from "react-bootstrap";
import withAuthContext from "../components/hoc/withAuthContext";
import Pexel from "../components/Pexel";
import pexelApi from "../services/pexelApi";

class About extends Component {
  state = {
    query: "cats",
    page: 1,
    gallery: [],
  };
  componentDidMount() {
    const { query, page } = this.state;
    pexelApi.getFetch(query, page).then((result) => {
      console.log(result);
      this.setState({ gallery: result })
    });
  }
  componentDidUpdate(prevProps, prevState) {}
  render() {
    const { auth } = this.props;
    const { gallery } = this.state;
    return (
      <>
        {auth.user ? <h2>About {auth.user.name}</h2> : <h2>About</h2>}
        <h1>About</h1>
        <Jumbo />
        <Container>
          <Pexel gallery={gallery} />
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
}

export default withAuthContext(About);
