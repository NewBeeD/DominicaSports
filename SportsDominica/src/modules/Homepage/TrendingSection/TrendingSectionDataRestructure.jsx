


let required_data_fields = {title: '', time: 0, body_content: '', url: '', league: ''};

let final_data = []

// This function identifies the entries in the array/oject that will be used for display in the cards on the Homepage
export default function ArticlesStructuredDisplay(data){

  // console.log('Im inside here',data.data);

  let articles_data = data.data


  for (var item of articles_data){

    required_data_fields ={
      title: item.attributes['Title'],
      time: daysElapsed(item.attributes['publishedAt']),
      author: item.attributes['Author'],
      body_content: item.attributes['Body_Content'],
      url: `http://localhost:1337${item.attributes['Article_img'].data[0].attributes['formats']['medium'].url}`,
      league: leagueNameChange(item.attributes['dfa_leagues'].data[0].attributes['League_Name'])
    }

    final_data.push(required_data_fields)
  }

  return final_data
}

function leagueNameChange(leagueName){

    switch(leagueName){

      case 'DFA_Division_One':     
      case 'DFA_League_Women':
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