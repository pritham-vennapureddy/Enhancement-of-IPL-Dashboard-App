import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamsList: [], isLoading: true}
  componentDidMount() {
    this.getTeamList()
  }
  getTeamList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const changecase = each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    })
    const updatedList = teams.map(each => changecase(each))
    this.setState({teamsList: updatedList, isLoading: false})
  }
  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="bg-container">
            <h1 className="mainhead">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="iplLogoimage"
              />
              IPL Dashboard
            </h1>
            <ul className="teamCards">
              {teamsList.map(each => (
                <TeamCard key={each.id} teamdetails={each} />
              ))}{' '}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
