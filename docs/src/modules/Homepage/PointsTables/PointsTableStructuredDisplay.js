



export default function PointsTableStructuredDisplay(data){

  let points_data = data.data

  // Function to organize teams in proper order



  let premierTable = points_data.map(item => {

    let teamPoints = {}

    teamPoints['Team'] = item.attributes['dfa_team'].data.attributes['Name']
    teamPoints['Played'] = item.attributes['Played']
    teamPoints['Won'] = item.attributes['Won']
    teamPoints['Drawn'] = item.attributes['Drawn']
    teamPoints['Lost'] = item.attributes['Lost']
    teamPoints['GF'] = item.attributes['GF']
    teamPoints['GA'] = item.attributes['GA']
    teamPoints['GD'] = findGoalDifference(item)
    teamPoints['Points'] = findPoints(item)

    return teamPoints    
  })

  // console.log(premierTable);

  premierTable = sortTablePoints(premierTable)

  return premierTable
}

function findGoalDifference(team){

  let GF = Number(team.attributes['GF']);
  let GA = Number(team.attributes['GA']);
  let GD = GF - GA;
  return GD
}

function findPoints(team){

  let gamesWon = Number(team.attributes['Won']);
  let gamesDrawn = Number(team.attributes['Drawn']);
  let totalPoints = 3 * gamesWon + gamesDrawn;

  return totalPoints;
}

function sortTablePoints(data){

  let sortedData = data.sort(SortPoints)
  return sortedData;
}



function SortPoints(a, b) {
  return b.Points - a.Points;
}

