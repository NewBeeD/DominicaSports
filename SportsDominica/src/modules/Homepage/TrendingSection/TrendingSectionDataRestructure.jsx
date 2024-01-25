






// This function identifies the entries in the array/oject that will be used for display in the cards on the Homepage
export default function ArticlesStructuredDisplay(data){

  let articles_data = data.data 

  let final_data = articles_data.map(item => {

    

    let required_data_fields = {}

    required_data_fields['title'] = item.attributes['Title']
    required_data_fields['time'] = daysElapsed(item.attributes['publishedAt'])
    required_data_fields['author'] = item.attributes['Author']
    required_data_fields['body_content'] = item.attributes['Body_Content']
    required_data_fields['league'] = leagueNameChange(articles_data[0].attributes['all_league'].data.attributes['name'])

    required_data_fields['url'] = item.attributes['Article_Img'].data[0].attributes['formats']['small']['url']


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
          return 'DAVA'
      
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