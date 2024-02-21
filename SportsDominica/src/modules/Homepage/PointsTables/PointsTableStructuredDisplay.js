



export default function PointsTableStructuredDisplay(data){

  let points_data = data.data

  // Function to organize teams in proper order



  let premierTable = points_data.map(item => {

    let teamPoints = {}

    teamPoints['Team'] = TeamNameChange(item.attributes['dfa_team'].data.attributes['Name'])
    // teamPoints['Team'] = item.attributes['dfa_team'].data.attributes['Name']
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

function TeamNameChange(team_data_point){

  switch(team_data_point){

    case 'Blue Waters Bath Estate FC':
      return 'BEFC';

    case 'Bombers FC':
      return 'BFC';
    
    case 'CCCUL Dublanc FC':
      return 'DFC';

    case 'Connect 767 East Central FC':
      return 'EFC';
    
    case 'Mahaut Soca Strikers FC':
      return 'MFC';

    case 'Petro Caribe Point Michel FC':
      return 'PMFC';
    
    case 'Promex Harlem FC':
      return 'HFC';

    case 'Sagicor South East FC':
      return 'SSC';
    
    case 'Tranquility Beach Middleham United FC':
      return 'MIDFC';

    case 'Valvoline We United FC':
    return 'WEFC';
    
    default:
      return team_data_point;

  }
}

