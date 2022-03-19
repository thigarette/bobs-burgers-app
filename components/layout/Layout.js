import { Container, Box }  from "@mui/material"
import { styled } from "@mui/system"
import Footer from "./Footer"

import Meta from "./Meta"
const Layout = ({ children }) => {
  return (
    <FlexContainer>
        <Meta/>
        <Container>{children}</Container>
        <Footer/>
    </FlexContainer>
  )
}

const FlexContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  })

export default Layout