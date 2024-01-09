



export default function GroupingFixturesByDate(league_fixtures_data){

  let fixture_dates = [];

  for(let x = 0; x < league_fixtures_data.length; x++){

    if(!fixture_dates.includes(league_fixtures_data[x].Date)){
      fixture_dates.push(league_fixtures_data[x].Date)
    }

  }

  

  console.log(fixture_dates);


}