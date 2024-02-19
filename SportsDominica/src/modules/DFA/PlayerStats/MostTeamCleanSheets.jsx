

export default function TeamCleanSheets(players_data){

  console.log(players_data);

  // Calculate total goals for each team
  let teamCleanSheets = players_data.reduce((cleanSheetByTeam, player) => {
    cleanSheetByTeam[player.team] = (cleanSheetByTeam[player.team] || 0) + player.Clean_Sheets;
    return cleanSheetByTeam;
  }, {});

  // Convert teamCleanSheets to an array of objects with teamName and totalGoals keys
  teamCleanSheets = Object.keys(teamCleanSheets).map(teamName => ({ teamName, totalCleanSheets: teamCleanSheets[teamName] })).sort(Sort);

  // console.log(teamCleanSheets);

  return teamCleanSheets
}

function Sort(a, b){

  return b.totalGoals - a.totalGoals
}