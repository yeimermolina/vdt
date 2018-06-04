'use strict'

import React, { Component } from 'react'
import { initStore } from '../../shared/store'
import withRematch from '../../shared/utils/withRematch'
import Header from '../../shared/components/header'
import OrgDisplay from '../../shared/components/org-display'
import VolunteerForm from '../../shared/components/volunteer-form'
import ListOf from '../../shared/components/list-of'
import Summary from '../../shared/components/summary'

class Volunteers extends Component {
  constructor (props) {
    super(props)
    this.save = this.props.addVolunteerAsync.bind(this)
  }

  render () {
    return <section className='section'>
      <div className='container'>
        <Header title='Les volontaires' />
        <Summary />
        <VolunteerForm username={this.props.username} save={this.save} />
        <ListOf items={this.props.volunteer} type='volunteer' />
        <OrgDisplay />
      </div>
    </section>
  }
}

const mapState = (state) => ({
  volunteer: state.volunteer,
  username: state.auth.name
})

const mapDispatch = ({ volunteer: { addVolunteerAsync } }) => ({
  addVolunteerAsync: (volunteer) => addVolunteerAsync(volunteer)
})

export default withRematch(initStore, mapState, mapDispatch)(Volunteers)