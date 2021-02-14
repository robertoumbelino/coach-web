import axios from 'axios'

/**
 * Reponse interface.
 */
export interface IRandomMessageResponse {
  phrase: string
  wallpaperWeb: string
}

/**
 * Base URL.
 */
const BASE_URL = 'https://br-coach-api.herokuapp.com/phrases/depressions'

export const useRandomMessage = () => {
  /**
   * Get random phrase.
   */
  const fetchRandomPhrase = async () => {
    const response = await axios.get<IRandomMessageResponse>(BASE_URL)
    return response.data
  }

  return { fetchRandomPhrase }
}
