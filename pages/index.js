import CharacterList from "../components/characters/CharacterList"
import { server } from "../config"
export default function Home({ characters }) {
  return <CharacterList characters={characters}/>
}
export const getStaticProps = async () => {
  const response = await fetch(`${server}/characters/?limit=10`)
  const characters = await response.json()
  return {
    props: {
      characters,
    },
  }
}
