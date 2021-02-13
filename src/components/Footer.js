import React from "react";
import { Container } from "react-bootstrap"
import classes from "./Footer.module.css"

function Footer()  {
  return(
    <>
    <Container fluid style={{backgroundColor: "brown", color: "white"}} className={classes.footer}>
      <p>&copy; Copyright Renata Kovalova Special edition 2021</p>
    </Container>
    </>
  )
}

export default Footer;