

export default function PlayerStatsDisplayStructure(data){

  // console.log(data[0].attributes['dfa_team']);

  let final_data = {};
  
  
  let structured_data = data.map(item => {

    let stat = {};

    stat['First_Name'] = item.attributes['dfa_player'].data.attributes['First_Name']
   
    stat['Last_Name'] = item.attributes['dfa_player'].data.attributes['Last_Name']

    stat['Gender'] = item.attributes['dfa_player'].data.attributes['Gender']

    stat['Season'] = item.attributes['Season']
    
    stat['Matches_Played'] = item.attributes['Matches_Played']
    
    stat['Goals'] = item.attributes['Goals']
    
    stat['Assists'] = item.attributes['Assists']
    
    stat['Yellow_Cards'] = item.attributes['Yellow_Cards']
    
    stat['Red_Cards'] = item.attributes['Red_Cards']
    
    stat['Clean_Sheets'] = item.attributes['Clean_Sheets']

    stat['url'] = item.attributes['Profile_Pic'].data.attributes['formats']['medium']['url']

    stat['league'] = item.attributes['all_league'].data.attributes['name']
    
    stat['team'] = item.attributes['dfa_team'].data.attributes['Name']

    return stat
  })

  let dfa_prem_league_stats = structured_data.filter(item => item.league == 'DFA_Premier_League_Men')

  let dfa_division_one_stats = structured_data.filter(item => item.league == 'DFA_Division_One')

  let dfa_women_stats = structured_data.filter(item => item.league == 'DFA_Women')


  // Prem league top
  let topScorer_prem = dfa_prem_league_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Goals > maxPlayer.Goals ? currentPlayer : maxPlayer);

  let topAssist_prem = dfa_prem_league_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Assists > maxPlayer.Assists ? currentPlayer : maxPlayer);


  let topCleanSheet_prem = dfa_prem_league_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Clean_Sheets > maxPlayer.Clean_Sheets ? currentPlayer : maxPlayer);

  // Start of Premier League Major Stats
  final_data['season'] = topScorer_prem.Season
  final_data['top_scorer_prem_goals'] = topScorer_prem.Goals
  final_data['top_scorer_prem_url'] = topScorer_prem.url
  final_data['top_scorer_prem_first_name'] = topScorer_prem.First_Name
  final_data['top_scorer_prem_last_name'] = topScorer_prem.Last_Name

  final_data['top_assist_prem_assist'] = topAssist_prem.Assists
  final_data['top_assist_prem_url'] = topAssist_prem.url
  final_data['top_assist_prem_first_name'] = topAssist_prem.First_Name
  final_data['top_assist_prem_last_name'] = topAssist_prem.Last_Name

  final_data['top_clean_sheet_prem_clean_sheets'] = topCleanSheet_prem.Clean_Sheets
  final_data['top_clean_sheet_prem_url'] = topCleanSheet_prem.url
  final_data['top_clean_sheet_prem_first_name'] = topCleanSheet_prem.First_Name
  final_data['top_clean_sheet_prem_last_name'] = topCleanSheet_prem.Last_Name
  // End of Premier League Major Stats

  // 1st Div league top

  if(dfa_division_one_stats.length != 0){
    let topScorer_div1 = dfa_division_one_stats.length == 0 ? dfa_division_one_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Goals > maxPlayer.Goals ? currentPlayer : maxPlayer): [];


    let topAssist_div1 = dfa_division_one_stats.length == 0 ? dfa_division_one_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Assists > maxPlayer.Assists ? currentPlayer : maxPlayer): [];

    let topCleanSheet_div1 = dfa_division_one_stats.length == 0 ? dfa_division_one_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Clean_Sheets > maxPlayer.Clean_Sheets ? currentPlayer : maxPlayer): [];

    // Start of Division One League Major Stats
    final_data['top_scorer_div_1_goals'] = topScorer_div1.Goals
    final_data['top_scorer_div_1_url'] = topScorer_div1.url
    final_data['top_scorer_div_1_first_name'] = topScorer_div1.First_Name
    final_data['top_scorer_div_1_last_name'] = topScorer_div1.Last_Name

    final_data['top_scorer_div_1_assist'] = topAssist_div1.Assists
    final_data['top_scorer_div_1_url'] = topAssist_div1.url
    final_data['top_scorer_div_1_first_name'] = topAssist_div1.First_Name
    final_data['top_scorer_div_1_last_name'] = topAssist_div1.Last_Name

    final_data['top_scorer_div_1_clean_sheets'] = topCleanSheet_div1.Clean_Sheets
    final_data['top_scorer_div_1_url'] = topCleanSheet_div1.url
    final_data['top_scorer_div_1_first_name'] = topCleanSheet_div1.First_Name
    final_data['top_scorer_div_1_last_name'] = topCleanSheet_div1.Last_Name
    // End of Division One Major Stats
  }

// Womens league top
  if(dfa_women_stats.length != 0 ){
    let topScorer_women = dfa_women_stats.length == 0 ? dfa_women_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Goals > maxPlayer.Goals ? currentPlayer : maxPlayer): [];

    let topAssist_women = dfa_women_stats.length == 0 ? dfa_women_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Assists > maxPlayer.Assists ? currentPlayer : maxPlayer): [];

    let topCleanSheet_women = dfa_women_stats.length == 0 ? dfa_women_stats.reduce((maxPlayer, currentPlayer) => currentPlayer.Clean_Sheets > maxPlayer.Clean_Sheets ? currentPlayer : maxPlayer): [];

    // Start of Women League Major Stats
    final_data['top_scorer_women_goals'] = topScorer_women.Goals
    final_data['top_scorer_women_url'] = topScorer_women.url
    final_data['top_scorer_women_first_name'] = topScorer_women.First_Name
    final_data['top_scorer_women_last_name'] = topScorer_women.Last_Name

    final_data['top_scorer_women_assist'] = topAssist_women.Assists
    final_data['top_scorer_women_url'] = topAssist_women.url
    final_data['top_scorer_women_first_name'] = topAssist_women.First_Name
    final_data['top_scorer_women_last_name'] = topAssist_women.Last_Name

    final_data['top_scorer_women_clean_sheets'] = topCleanSheet_women.Clean_Sheets
    final_data['top_scorer_women_url'] = topCleanSheet_women.url
    final_data['top_scorer_women_first_name'] = topCleanSheet_women.First_Name
    final_data['top_scorer_women_last_name'] = topCleanSheet_women.Last_Name
    // End of Women Major Stats
  }

  return final_data
}

