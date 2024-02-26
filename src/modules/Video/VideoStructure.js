


export default function VideoStructure(video_data){

  let data = video_data.data

  let videos = data.map(item => {

    let video = {}

    video['title'] = item.attributes['Title']
    video['url'] = item.attributes['Video'].data['attributes'].url

    return video   
  })

  return videos
}



 


