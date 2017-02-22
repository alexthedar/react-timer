var React = require('react')
var {Link, IndexLink} = require('react-router')

var Nav = () => {
  return (
    <div className="top-bar">
      <div className='top-bar-left'>
        <ul className='menu'>
          <li className="menu-text">React Timer</li>
          <li>
            <IndexLink to='/' activeClassName="active-link" >Timer</IndexLink>
          </li>
          <li>
            <Link to='/' activeClassName="active-link" >Countdown</Link>
          </li>
        </ul>
      </div>
      <div className='top-bar-right show-for-large-up'>
        <ul className='menu '>
          <li className="menu-text show-for-medium-up">
            Created by: <a href="https://github.com/alexthedar" target="_blank" id="nav-credit">AlexTheDar</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

module.exports = Nav
