import React, { useEffect, useState } from 'react'

/**
 * Styles.
 */
import { Container, ContainerText, Text } from './styles'

/**
 * Hooks.
 */
import {
  useRandomMessage,
  IRandomMessageResponse
} from './hooks/useRandomMessage'

/**
 * Component.
 */
const RandomMessage = () => {
  /**
   * Function to get a random phrase.
   */
  const { fetchRandomPhrase } = useRandomMessage()

  /**
   * States.
   */
  const [randomMessage, setRandomMessage] = useState<IRandomMessageResponse>({
    phrase: 'Pera aee...',
    wallpaperWeb: 'https://wallpapercave.com/wp/wp4371955.png'
  })

  useEffect(() => {
    fetchRandomPhrase().then(setRandomMessage).catch(console.log)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container webImage={randomMessage.wallpaperWeb}>
      <ContainerText>
        <Text>{randomMessage.phrase}</Text>
      </ContainerText>
    </Container>
  )
}

export default RandomMessage
