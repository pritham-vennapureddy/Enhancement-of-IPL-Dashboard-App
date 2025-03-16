import './index.css'

import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamdetails} = props
  const {name, teamImageUrl, id} = teamdetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamcard">
        <img src={teamImageUrl} alt={name} />
        <p className="maihead">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
