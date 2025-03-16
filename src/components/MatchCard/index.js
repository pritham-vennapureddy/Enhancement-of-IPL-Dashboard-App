import './index.css'

const MatchCard = props => {
  const {recentmatches} = props
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

  const updatedlatesMatches = changelatestcase(recentmatches)
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
  } = updatedlatesMatches
  const classname = matchStatus === 'Lost' ? 'lostcolor' : 'wincolor'

  return (
    <li className="macthcardContainer">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competinimagerecent"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={classname}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
