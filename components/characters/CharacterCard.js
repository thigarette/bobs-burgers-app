import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
    Grid,
  } from "@mui/material"
  
  const CharacterCard = ({ character }) => {
    return (
      <Grid item xs={12} sm={6} md={6} lg={4}>
        <Card sx={{ maxWidth: 350 }}>
          <CardMedia
            component="img"
            alt={character.name}
            height="150"
            image={character.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {character.occupation}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  }
  
  export default CharacterCard
  