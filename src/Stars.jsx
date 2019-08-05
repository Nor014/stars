
import React from 'react'
import Star from './Star'
import PropTypes from 'prop-types'
import App from './App'

class Stars extends React.Component {
  constructor(props) {
    super(props)
  }
  static propTypes = {
    count: PropTypes.instanceOf(App).isRequired
  }

  render() {

    const { count } = this.props;
    let mass = [];

    for (let i = 1; i <= count; i++) {
      mass.push(i)
    }

    return (
      <ul className="card-body-stars u-clearfix">
        {mass.map(el => <li key={el}><Star /></li>)}
      </ul>
    )
  }
}

Stars.defaultProps = {
  count: 0
}

export default Stars