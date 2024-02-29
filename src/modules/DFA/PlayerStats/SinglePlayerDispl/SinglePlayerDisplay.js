

export default function SinglePlayerDisplay(data){

  console.log('single player', data['data']);
  let player = {};


  player['id'] = data.id
  player['FirstName'] = data.attributes['First_Name']
  player['Last_Name'] = data.attributes['Last_Name']
  player['BirthDate'] = data.attributes['Birth_Date']
  player['Age'] = data.attributes['Age']
  player['Gender'] = data.attributes['Gender']
  player['Position'] = data.attributes['Position']
  player['Appearances'] = data.attributes['Appearances']
  player['Goals'] = data.attributes['Goals']
  player['Assists'] = data.attributes['Assists']
  player['YellowCards'] = data.attributes['Yellow_Cards']
  player['RedCards'] = data.attributes['Red_Cards']
  player['Foot'] = data.attributes['Foot']
  player['Current_Team'] = data.attributes['dfa_team'].data.attributes['Name']
  player['League'] = leagueNameChange(data.attributes['all_league'].data.attributes['name'])
  player['url'] = data.attributes['Profile_Pic'].data.attributes.formats['small']['url']

  console.log(player);


  
  return player
}


function leagueNameChange(leagueName){

  switch(leagueName){

    case 'DFA_Division_one':     
    case 'DFA_Women':
    case 'DFA_Premier_League_Men':
      return 'DFA';
    
    case 'DABA_First_Division':
    case 'DABA_Premier_League':
    case 'DABA_Women':
      return 'DABA';

    case 'DAVA_MEN':
    case 'DAVA_WOMEN':
        return 'DAVA'
    
    default:
      return '';

  }
}