import './index.css'

const LatestMatch = props => {
  const {latestmatches} = props
  const changelatestcase = each => ({
    umpires: each.umpires,
    result: each.result,
    manOfTheMatch: each.man_of_the_match,
    id: each.id,
    date: each.date,
    venue: each.venue,
    competingTeam: each.competing_team,
    competingTeamLogo: each.competing_team_logo,
    firstInnings: each.first_innings,
    secondInnings: each.second_innings,
    matchStatus: each.match_status,
  })
  const updatedlatestdetails = changelatestcase(latestmatches)
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = updatedlatestdetails

  return (
    <div className="latestmatchContainer">
      <div className="competitngTeamSection">
        <div>
          <p className="comppetingTeamHeading">{competingTeam}</p>
          <p className="comppetingTeamHeading">{date}</p>
          <p className="competingTeamPara">{venue}</p>
          <p className="competingTeamPara">{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competingLogo"
          />
        </div>
      </div>
      <hr />
      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
