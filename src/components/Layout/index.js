import React from "react"
import { Header } from "../Header"
import { GlobalStyle } from "../../styles/config"
import { Container } from "../Container/styles.js"
import { StyledMain } from "./styles"
import { Footer } from "../Footer"
import { Separator } from "../../styles"

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>
        <Container>{children}</Container>
      </StyledMain>
      <Separator mt={100} mb={100} mmt={40} mmb={50} />
      <Footer />
    </>
  )
}
