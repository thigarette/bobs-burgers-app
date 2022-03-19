import { Grid, Link, Divider, Typography } from "@mui/material"
import { styled } from "@mui/system"

const date = new Date()
const Footer = () => {
  return (
    <StyledFooter>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} mb={1} mt={1}>
          <FooterLink href="https://en.wikipedia.org/wiki/Bob%27s_Burgers" target="_blank">Bob's Burgers Wikipedia Page</FooterLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mb={1} mt={1}>
          <FooterLink href="https://www.imdb.com/title/tt1561755/" target="_blank">Bob's Burgers IMDB Page</FooterLink>
        </Grid>
        <Grid item xs={12} sm={6} md={4} mb={1} mt={1}>
          <FooterLink href="https://www.rottentomatoes.com/tv/bobs_burgers" target="_blank">Bob's Burgers Rotten Tomatoes Page</FooterLink>
        </Grid>
      </Grid>
    </StyledFooter>
  )
}

const StyledFooter = styled("footer")({
  backgroundColor: "black",
  flexShrink: 0,
  width: "100%",
  padding: "4rem",
})

const FooterLink = styled(Link)({
  color: "white",
  textDecoration: "none",
  ":hover": {
    textDecoration: "underline",
  },
})

export default Footer
