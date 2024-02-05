



export default function PointsTableStructuredDisplay(data, league){

  let points_data = data.data
  let table_data_ready;

  switch(league){
    
    case 'homepage':
    case 'dfa_premier_league':
      table_data_ready = structuredData_Homepage_PremierLeague(points_data, league)
      break;
    
    case 'daba_premier_league':
      table_data_ready = structuredData_DABA_PremierLeague(points_data, league)
      break;
      
  }

  // Function to organize teams in proper order


  return table_data_ready  
}


function structuredData_Homepage_PremierLeague(prem_data, league){

  let premierTable = prem_data.map(item => {

    let teamPoints = {}

    teamPoints['Team'] = item.attributes['dfa_team'].data.attributes['Name']
    teamPoints['Played'] = item.attributes['Played']
    teamPoints['Won'] = item.attributes['Won']
    teamPoints['Drawn'] = item.attributes['Drawn']
    teamPoints['Lost'] = item.attributes['Lost']
    teamPoints['GF'] = item.attributes['GF']
    teamPoints['GA'] = item.attributes['GA']
    teamPoints['GD'] = findGoalDifference(item)
    teamPoints['Points'] = findPoints(item, league)

    return teamPoints    
  })

  premierTable = sortTablePoints(premierTable)
  return premierTable
}

function structuredData_DABA_PremierLeague(daba_prem_data, league){

  let premierTable = daba_prem_data.map(item => {

    let teamPoints = {}

    teamPoints['Team'] = item.attributes['daba_team'].data.attributes['Name']
    teamPoints['Played'] = item.attributes['GP']
    teamPoints['Won'] = item.attributes['W']
    teamPoints['Lost'] = item.attributes['L']
    teamPoints['Points'] = findPoints(item, league)

    return teamPoints    
  })

  premierTable = sortTablePoints(premierTable)
  return premierTable
}


function findGoalDifference(team){

  let GF = Number(team.attributes['GF']);
  let GA = Number(team.attributes['GA']);
  let GD = GF - GA;
  return GD
}

function findPoints(team, league_name){

  if( league_name === 'homepage' || league_name === 'dfa_premier_league' ){
    
    let gamesWon = Number(team.attributes['Won']);
    let gamesDrawn = Number(team.attributes['Drawn']);
    let totalPoints = 3 * gamesWon + gamesDrawn;

    return totalPoints;
  }

  else if(league_name === 'daba_premier_league'){

    let gamesWon = Number(team.attributes['w']);
    let totalPoints = 2 * gamesWon;
    return totalPoints;
  }
}

  

function sortTablePoints(data){

  let sortedData = data.sort(SortPoints)
  return sortedData;
}



function SortPoints(a, b) {
  return b.Points - a.Points;
}

