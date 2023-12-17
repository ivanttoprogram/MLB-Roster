/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL:
    "http://lookup-service-prod.mlb.com/json/named.roster_team_alltime.bam?start_season='2022'&end_season='2022'&team_id='121',",
})

const useApi = () => {
  return { instance }
}

export default useApi
