

export default function PlayerStatsDisplayStructure(data){

  // console.log(data[0].attributes['dfa_team']);

  // let final_data = {};
  
  
  let structured_data = data.map(item => {

    let stat = {};

    stat['First_Name'] = item.attributes['dfa_player'].data.attributes['First_Name']
   
    stat['Last_Name'] = item.attributes['dfa_player'].data.attributes['Last_Name']

    stat['Gender'] = item.attributes['dfa_player'].data.attributes['Gender']

    stat['Season'] = item.attributes['Season']
    
    stat['Matches_Played'] = item.attributes['Matches_Played']
    
    stat['Goals'] = Number(item.attributes['Goals'])
    
    stat['Assists'] = item.attributes['Assists']
    
    stat['Yellow_Cards'] = item.attributes['Yellow_Cards']
    
    stat['Red_Cards'] = item.attributes['Red_Cards']
    
    stat['Clean_Sheets'] = item.attributes['Clean_Sheets']

    stat['url'] = item.attributes['Profile_Pic'].data.attributes['formats']['medium']['url']

    stat['league'] = item.attributes['all_league'].data.attributes['name']
    
    stat['team'] = item.attributes['dfa_team'].data.attributes['Name']

    return stat
  })

  return structured_data
}

