






// This function identifies the entries in the array/oject that will be used for display in the cards on the Homepage
export default function ArticlesStructuredDisplay(data){

  let articles_data = data.data 

  let final_data = articles_data.map(item => {

    

    let required_data_fields = {}

    required_data_fields['id'] = item.id
    required_data_fields['title'] = item.attributes['Title'],
    required_data_fields['time'] = daysElapsed(item.attributes['publishedAt'])
    required_data_fields['author'] = item.attributes['Author']
    required_data_fields['body_content'] = item.attributes['Body_Content']
    required_data_fields['league'] = leagueNameChange(articles_data[0].attributes['all_league'].data.attributes['name'])

    required_data_fields['league_name'] = SpecificleagueName(articles_data[0].attributes['all_league'].data.attributes['name'])

    required_data_fields['url'] = item.attributes['Article_Img'].data[0].attributes['formats']['small']['url']

    required_data_fields['date'] = formatDate(item.attributes['publishedAt'])


    return required_data_fields
  })


  return final_data
}

function leagueNameChange(leagueName){

    switch(leagueName){

      case 'DFA_Division_One':     
      case 'DFA_Women':
      case 'DFA_Premier_League_Men':
        return 'DFA';
      
      case 'DABA_Division_One':
      case 'DABA_Premier_League_One':
      case 'DABA_Women':
        return 'DABA';

      case 'DAVA_MEN':
      case 'DAVA_WOMEN':
          return 'DAVA';
      
      case 'DNA_Men':
      case 'DNA_Women':
        return 'DNA';
      
      default:
        return '';

    }

}


function SpecificleagueName(league){

  switch(league){

    case 'DFA_Division_One':
      return 'DFA Division One';

    case 'DFA_Women':
      return 'DFA Women';

    case 'DFA_Premier_League_Men':
      return 'DFA Premier League Men';
    
    case 'DABA_Division_One':
      return 'DABA Division One';

    case 'DABA_Premier_League':
      return 'DABA Premier League';

    case 'DABA_Women':
      return 'DABA Women';

    case 'DAVA_Men':
      return 'DAVA Men';

    case 'DAVA_Women':
        return 'DAVA Women';
    
    case 'DNA_Men':
      return 'DNA Men';
        
    default:
      return '';

  }


}

function daysElapsed(datePublished){

  const parsingDate = Date.parse(datePublished)

  let todayDate = new Date();

  const oneDay = 24 * 60 * 60 * 1000;

  let age = Math.floor((todayDate - parsingDate) / oneDay)


  if(age > 1){
    
    return `${age} days ago`
  }
  else if ( age > 0.0001){
    const hours = age * 24;
    return `${hours} hours ago`
  }
  else{

    const minutes = age * 24 * 60;
    return `${minutes} minutes ago`
  }
 
}


function formatDate(date) {
  
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };


  const parsingDate = Date.parse((date))

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(parsingDate);

  // Add the ordinal suffix for the day (1st, 2nd, 3rd, etc.)
  const dayWithSuffix = formattedDate.replace(
    /(\d{1,2})(st|nd|rd|th)/,
    (_, day, suffix) => {
      const dayNumber = parseInt(day);
      if (dayNumber >= 11 && dayNumber <= 13) {
        return day + 'th';
      }
      switch (dayNumber % 10) {
        case 1:
          return day + 'st';
        case 2:
          return day + 'nd';
        case 3:
          return day + 'rd';
        default:
          return day + 'th';
      }
    }
  );

  return dayWithSuffix;
}

