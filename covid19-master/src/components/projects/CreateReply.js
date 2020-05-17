import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'
import firebase from '../../config/fbConfig.js'

class CreateReply extends Component {
    constructor(id) {
        super()
        this.state = {
            title: '',
            content: '',
            parentId: firebase.firestore().doc('/projects/' + id.id)
          }
//        console.log(this.state.parentId)
    }

    handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
 //   this.props.history.push('/');
    window.location.reload(false)
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to={'/signin'}/>
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
        <div className="card-content">
            <div className="input-field">
                <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                <label htmlFor="content">reply...</label>
            </div>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <button className="btn pink lighten-1">reply</button>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateReply)