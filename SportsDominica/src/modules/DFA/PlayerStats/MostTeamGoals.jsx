

export default function TeamGoalsStructure(players_data){


  // Calculate total goals for each team
  let teamGoals =   players_data.reduce((goalsByTeam, player) => {
    goalsByTeam[player.team] = (goalsByTeam[player.team] || 0) + player.Goals;
    return goalsByTeam;
  }, {});

  // Convert teamGoals to an array of objects with teamName and totalGoals keys
  teamGoals = Object.keys(teamGoals).map(teamName => ({ teamName, totalGoals: teamGoals[teamName] })).sort(Sort);

  return teamGoals
}

function Sort(a, b){

  return b.totalGoals - a.totalGoals
}