'use strict'

import React, { Component } from 'react'

class HoursForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      volunteer: '',
      hours: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChangeTitle = this.handleChange.bind(this, 'title')
    this.handleChangeDescription = this.handleChange.bind(this, 'description')
    this.handleChangeHours = this.handleChange.bind(this, 'hours')
    this.handleChangeVolunteer = this.handleChangeVolunteer.bind(this)
    this.handleBlurHours = this.handleBlurHours.bind(this)
  }

  beginsWith (prefix) {
    prefix = prefix.toLowerCase()
    return this.props.volunteer
      .map((x) => x.title.toLowerCase())
      .filter((x) => x.indexOf(prefix) === 0)
  }

  sharedStart (theSet) {
    if (!theSet.length) { return }
    const A = theSet.sort()
    const a1 = A[0]
    const a2 = A[A.length - 1]
    const L = a1.length
    let i = 0
    while ((i < L) && (a1.charAt(i) === a2.charAt(i))) { ++i }
    return a1.slice(0, i)
  }

  handleBlurHours (event) {
    this.setState({ hours: parseFloat(event.target.value.replace(/,/, '.')) || '' })
  }

  handleChangeVolunteer (event) {
    // magic autocomplete
    this.setState({
      volunteer: (!(this.state.volunteer.length > event.target.value.length) &&
      this.sharedStart(this.beginsWith(event.target.value))) ||
      event.target.value
    })
  }

  handleChange (it, event) {
    const obj = { }
    obj[it] = event.target.value
    this.setState(obj)
  }

  handleSubmit (event) {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      title: '',
      volunteer: '',
      hours: '',
      description: ''
    })
  }

  render () {
    return <form onSubmit={this.handleSubmit}>
      <p>Hello {this.props.user.name}</p>.
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Title</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className='input' type='text' value={this.state.title} onChange={this.handleChangeTitle} />
            </div>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Volontaire</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className='input' required type='text' value={this.state.volunteer} onChange={this.handleChangeVolunteer} />
            </div>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Heures</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className='input' required type='text' value={this.state.hours} onChange={this.handleChangeHours} onBlur={this.handleBlurHours} />
            </div>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label is-normal'>
          <label className='label'>Description</label>
        </div>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <textarea className='textarea' value={this.state.description} onChange={this.handleChangeDescription} />
            </div>
          </div>
        </div>
      </div>
      <div className='field is-horizontal'>
        <div className='field-label' />
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input className='button is-primary' type='submit' value='Submit' />
            </div>
          </div>
        </div>
      </div>
    </form>
  }
}

export default HoursForm