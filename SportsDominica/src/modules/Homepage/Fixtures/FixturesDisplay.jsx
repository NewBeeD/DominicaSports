import fixtureDisplayStructure from '../Fixtures/fixtureDisplayStructure'


let required_data_fields = {Home: '', Away: '', Date: '', Time: '', Venue: '', League: '', HomeScore: 0, AwayScore: 0};

let final_data = []

// This function identifies the entries in the array/oject that will be used for display in the cards on the Homepage
export default function GroupingFixturesByDate(league_fixtures_data){

  

  let articles_data = league_fixtures_data.data

  // articles_data = upcomingFixtures(articles_data)

  


  for (var item of articles_data){

    required_data_fields ={
      Home: item.attributes['Home_Team'],
      Away: item.attributes['Away_Team'],
      Date: getOnlyDate(item.attributes['Date']),
      Time: getTimeOnly(item.attributes['Date']),
      Venue: item.attributes['venue'].data['attributes']['Name'],
      League: leagueNameChange(item.attributes['all_league'].data['attributes']['name']),
      HomeScore:item.attributes['Home_Team_Score'],
      AwayScore: item.attributes['Away_Team_Score']
    }

    final_data.push(required_data_fields)
  }
  // let data_ready = fixtureDisplayStructure(final_data)

  return final_data
}


function getOnlyDate(fixture_date){

  // let new_Date = Date.parse(fixture_date)
  let new_Date = new Date(fixture_date)

  new_Date = new_Date.toDateString().toString();
  new_Date = new_Date.replace(/\d{4}/, '')

  let date_split = new_Date.split(' ')
  let proper_month = right_month(date_split[1])

  date_split = date_split[0] + ' ' + date_split[2] + ' ' + proper_month
  return date_split
}

function getTimeOnly(fixture_date){

  let new_Time = new Date(fixture_date)

  // Format the time portion in 12-hour format
  new_Time = new_Time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });


  // new_Time = new_Time.toTimeString().split(' ')[0].slice(0, -3);

  return new_Time
}

function right_month(month){

  switch(month){

    case 'Jan':
      return 'January';
    
    case 'Feb':
      return 'February';
    
    case 'Mar':
      return 'March';
    
    case "Apr":
      return 'April';
    
    case 'Jun':
      return 'June';
    
    case 'Jul':
      return 'July';

    case 'Aug':
      return 'August';

    case 'Sep':
      return 'September';

    case 'Oct':
      return 'October';

    case 'Nov':
      return 'November';

    case 'Dec':
      return 'December';

    default:
      return '';
  }
}


function leagueNameChange(leagueName){

  switch(leagueName){

    case 'DFA_First_Division':     
    case 'DFA_Women':
    case 'DFA_Premier_League':
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

function upcomingFixtures(fixtures){

  let today_date = new Date().toISOString()

  let upcoming_fixtures = fixtures.filter(item => item['attributes']['Date'] > today_date)

  return upcoming_fixtures
}


