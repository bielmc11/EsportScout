const APIKEY = "¿¿¿¿¿¿?????";

export const getSummonerPuuid = async ({
  summonerName,
  tagName,
}: {
  summonerName: string;
  tagName: string;
}) => {
  //better take PUUID save it due the names can challenge  
  //https://developer.riotgames.com/apis#account-v1/GET_getByRiotId
  const response = await fetch(
    `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${summonerName}/${tagName}?api_key=???`
  );
  const data = await response.json();
  return data;
};
/* {
    "puuid": "9EBVQUv3IeWX9PvrCDy5DylNaXQ0J5eLCnvJxzvoUFVHrOizo-PkKbmwN2xOobhrn1-u1DEEEVe7oA",
    "gameName": "komanche uchiha",
    "tagLine": "elite"
} */

export const getDataByPuuid = async ({ puuid }: { puuid: string }) => {
  //https://developer.riotgames.com/apis#league-v4/GET_getLeagueEntriesByPUUID
  const response = await fetch(
    `https://euw1.api.riotgames.com/lol/league/v4/entries/by-puuid/${puuid}?api_key=${APIKEY}`
  );
  const data = await response.json();
  return data;
};
/*  [
    {
        "leagueId": "5ae4e101-9526-3e2b-a949-a495dd6c38a5",
        "queueType": "RANKED_SOLO_5x5",
        "tier": "GRANDMASTER",
        "rank": "I",
        "puuid": "9EBVQUv3IeWX9PvrCDy5DylNaXQ0J5eLCnvJxzvoUFVHrOizo-PkKbmwN2xOobhrn1-u1DEEEVe7oA",
        "leaguePoints": 972,
        "wins": 361,
        "losses": 324,
        "veteran": false,
        "inactive": false,
        "freshBlood": false,
        "hotStreak": false
    }
]*/


export const getQeue = async ({ puuid }: { puuid: string }) => {
    //https://developer.riotgames.com/apis#match-v5/GET_getMatchIdsByPUUID
    const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${APIKEY}`)
    const data = await response.json();
    return data;
}
/* [
    "EUW1_7436824655",
    "EUW1_7436790193",
    "EUW1_7436626197",
    "EUW1_7436609040",
    "EUW1_7436580525",
    "EUW1_7436520403",
    "EUW1_7434895856",
    "EUW1_7434715765",
    "EUW1_7434697137",
    "EUW1_7434675727",
    "EUW1_7434653559",
    "EUW1_7432544472",
    "EUW1_7432502632",
    "EUW1_7432465031",
    "EUW1_7432412276",
    "EUW1_7430888363",
    "EUW1_7430778838",
    "EUW1_7430504045",
    "EUW1_7429815379",
    "EUW1_7429800820"
] */

export const getMatch = async ({ matchId }: { matchId: string }) => {
    const response = await fetch(`https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${APIKEY}`)
}