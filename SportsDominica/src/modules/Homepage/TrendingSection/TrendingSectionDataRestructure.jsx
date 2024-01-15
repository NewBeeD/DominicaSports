


let required_data_fields = {title: '', time: 0, body_content: '', url: '', league: ''};

let final_data = []

// This function identifies the entries in the array/oject that will be used for display in the cards on the Homepage
export default function ArticlesStructuredDisplay(data){

  // console.log('Im inside here',data.data);

  let articles_data = data.data


  for (var item of articles_data){

    required_data_fields ={
      title: item.attributes['Title'],
      time: item.attributes['publishedAt'],
      body_content: item.attributes['Body_Content'],
      url: `http://localhost:1337${item.attributes['Article_img'].data[0].attributes['formats']['medium'].url}`,
      league: item.attributes['dfa_leagues'].data[0].attributes['League_Name']
    }

    final_data.push(required_data_fields)
  }

  return final_data
}