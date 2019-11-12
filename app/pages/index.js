import React from 'react'
import {Link} from 'react-router-dom'
import pageNames from '../routing/pageNames'

const IndexPage = () => {
  return (
    <div>
      <h1>React styled jsx dojo</h1>
      <ul>
        <li>
          <Link to={pageNames.LOGIN}>Login page</Link>
        </li>
        <li>
          <Link to={pageNames.ADMIN_SIDE_MENU}>Admin side menu</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage