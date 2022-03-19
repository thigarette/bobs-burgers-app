import { Grid } from "@mui/material"
import CharacterCard from "./CharacterCard"
const CharacterList = ({ characters }) => {
  return (
    <Grid container spacing={2}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character}/>
      ))}
    </Grid>
  )
}

export default CharacterList
