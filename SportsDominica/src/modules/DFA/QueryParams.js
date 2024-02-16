

export const queryParams_div1_teams = {
  
  populate: {
    dfa_players: {
      populate: true
    },
  }   
}

export const queryParams_prem_teams = {
  
  populate: {
    dfa_players: {
      populate: true
    },
  }   
}

export const queryParams_women_teams = {
  
  populate: {
    dfa_players: {
      populate: true
    },
  }  
}

export const queryParams_div1_table = {
  
  populate: {
    dfa_division_one_team: {
      populate: true
    },
  }   
}

export const queryParams_women_table = {
  
  populate: {
    dfa_women_team: {
      populate: true
    },
  }   
}

export const queryParams_prem_table = {
  
  populate: {
    dfa_team: {
      populate: true
    },
  }   
}

export const queryParams_fixtures = {
  
  populate: {
    all_league: {
      populate: true
    },
    venue:{
      populate: true
    },
  }   
}

export const queryParams_prem_players = {
  
  populate: {
    dfa_team: {
      populate: true
    },
    all_league:{
      populate: true
    },
    Profile_Pic:{
      populate: true
    }
  }   
}


export const queryParams_prem_players_stats = {
  
  populate: {
    dfa_player: {
      populate: true
    },
    all_league:{
      populate: true
    },
    Profile_Pic:{
      populate: true
    },
    dfa_team:{
      populate: true
    }
  }   
}





