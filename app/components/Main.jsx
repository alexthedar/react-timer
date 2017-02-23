var React = require('react')
var Nav = require('Nav')


var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        Main.jsx rendered

        <div>
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main
