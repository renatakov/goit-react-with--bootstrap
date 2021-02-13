import React from "react"
import insta from "../images/icons/img123.svg.webp"
import discord from "../images/icons/discord-512.webp"
import tiktok from "../images/icons/tiktok-icon-2.svg"
import facebook from "../images/icons/facebook-2.svg"

function Contacts() {
  return(
    <>
  <h1>Contacts</h1>
  <address>
    <p>Город Киев</p>
    <a href="tel:+380972211792">+380972211792</a>
    <a href="mailto:renatakov1010@gmail.com">renatakov1010@gmail.com</a>
  </address>
  <ul>
    <li>
      <a href="#">Instagram
      <img src={insta} alt="insta" width="30"/></a>
    </li>
    <li>
      <a href="#">Facebook
      <img src={facebook} alt="face" width="30" height="30px"/></a>
    </li>
    <li>
      <a href="#">Tik Tok
      <img src={tiktok} alt="tiktok" width="30"/></a>
    </li>
    <li>
      <a href="#">Discord
      <img src={discord} alt="di" width="30"/></a>
    </li>
  </ul>
  </>
  )
}

export default Contacts;