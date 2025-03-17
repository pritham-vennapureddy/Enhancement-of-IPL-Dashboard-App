import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import CustomPieChart from '../CustomPieChart'
import MatchCard from '../MatchCard'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {matchesObject: {}, isLoading: true, pieObject: []}

  componentDidMount() {
    this.getmatchdetails()
  }

  getmatchdetails = async () => {
    const {match} = this.props
    console.log(match)
    const {params} = match
    const {id} = params
    console.log(id)
    const url = `https://apis.ccbp.in/ipl/${id}`

    const response = await fetch(url)
    if (response.ok) {
      console.log(response)
      const data = await response.json()
      const changeCase = each => ({
        teamBannerUrl: each.team_banner_url,
        latestMatchDetails: each.latest_match_details,
        recentMatches: each.recent_matches,
      })
      const updateddata = changeCase(data)
      const {latestMatchDetails, recentMatches} = updateddata
      let countOfWins = 0
      let countOfLost = 0
      let countOfDrawn = 0
      const changerecentcase = each => ({
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
      const updatedlatestdetails = changerecentcase(latestMatchDetails)
      const updatedrecent =
        recentMatches.map(each => changerecentcase(each)) || []
      const {matchStatus} = updatedlatestdetails
      switch (matchStatus) {
        case 'Won':
          countOfWins += 1
          break
        case 'Lost':
          countOfLost += 1
          break
        default:
          countOfDrawn += 1
          break
      }
      updatedrecent.forEach(each => {
        switch (each.matchStatus) {
          case 'Won':
            countOfWins += 1
            break
          case 'Lost':
            countOfLost += 1
            break
          default:
            countOfDrawn += 1
            break
        }
      })
      const data2 = [
        {
          count: countOfWins,
          status: 'Won',
        },
        {
          count: countOfLost,
          status: 'Lost',
        },
        {
          count: countOfDrawn,
          status: 'Drawn',
        },
      ]
      console.log(countOfWins)
      this.setState({
        matchesObject: updateddata,
        isLoading: false,
        pieObject: data2,
      })
    }
  }

  render() {
    const {matchesObject, isLoading, pieObject} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesObject
    const {match} = this.props
    const {params} = match
    const {id} = params
    let backgroundColor
    switch (id) {
      case 'RCB':
        backgroundColor = 'rcbColor'
        break
      case 'KKR':
        backgroundColor = 'kkrColor'
        break
      case 'KXP':
        backgroundColor = 'kxpColor'
        break
      case 'CSK':
        backgroundColor = 'cskColor'
        break
      case 'RR':
        backgroundColor = 'rrColor'
        break
      case 'MI':
        backgroundColor = 'miColor'
        break
      case 'SH':
        backgroundColor = 'shColor'
        break
      default:
        backgroundColor = 'ddColor'
    }
    return (
      <div>
        {isLoading ? (
          <div>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className={`teammatchesContainer  ${backgroundColor}`}>
            <img src={teamBannerUrl} alt="team banner" className="teamBanner" />
            <p className="latestmatchititle">Latest Matches</p>
            <LatestMatch latestmatches={latestMatchDetails} />
            <div className="recentContainer">
              <ul className="recentcricket">
                {recentMatches.map(each => (
                  <MatchCard recentmatches={each} key={each.id} />
                ))}
              </ul>
            </div>
            <CustomPieChart details={pieObject} />
            <div className="btnContainer">
              <Link to="/">
                <button type="button" className="backbtn">
                  Back
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
