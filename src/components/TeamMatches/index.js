import {Component} from 'react'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {matchesObject: {}, isLoading: true}

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
      this.setState({matchesObject: updateddata, isLoading: false})
    }
  }

  render() {
    const {matchesObject, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchesObject

    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="team banner" />
            <p>Latest Matches</p>
            <LatestMatch latestmatches={latestMatchDetails} />
            <ul className="recentcricket">
              {recentMatches.map(each => (
                <MatchCard recentmatches={each} key={each.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
