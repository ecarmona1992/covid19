import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import CreateReply from './CreateReply'
import ReplyDetails from './ReplyDetails'
import firebase from '../../config/fbConfig.js'
import { Link } from 'react-router-dom'
import ProjectSummary from './ProjectSummary'


class ProjectDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      children: [],
      replyToggle: false,
//      rendered: false
    }
//    console.log(this.props.match.params.id)
  }

/*  shouldComponentUpdate = () => {
    console.log("pass")
    return(!this.state.rendered)
  }*/

  componentDidMount = () => {
    var children = [];
    const db = firebase.firestore().collection("projects")
    const ref = db.doc(this.props.match.params.id)

    db.where("parentId", "==", ref).get().then((snapshot) => (
      snapshot.forEach((doc) => (
        children.push({ 
          id: doc.id,
          data: doc.data()
        })
      ))
    ))

    this.setState({
      children: children,
//      rendered: true
    })

    console.log("This post's children: ", children)
  }

  handleReply = () => {
    this.setState({
      replyToggle: !this.state.replyToggle,
      rendered: false
    })
    console.log("Reply field turned", (this.state.replyToggle ? "off" : "on"))
  }

  render() {
    const { project, auth } = this.props
    if (!auth.uid) return <Redirect to='/signin' />
    if (project) {
      if (this.state.replyToggle) {
        return (
          <div className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                <div>{project.createdAt.toDate().toDateString()}</div>
                <button onClick={this.handleReply} className="btn blue lighten-1">cancel</button>

              </div>
              <div className="reply"><CreateReply id={this.props.match.params.id} /></div>

              <div><ReplyDetails projects={this.state.children} key={this.props.match.params.id} /></div>
            </div>
          </div>
        )
      }

      else {
        return (
          <div className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{project.title}</span>
                <p>{project.content}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                <div>{project.createdAt.toDate().toDateString()}</div>
                <button onClick={this.handleReply} className="btn pink lighten-1">reply</button>

              </div>

            <div className="reply"></div>
            <div><ReplyDetails projects={this.state.children} key={this.props.match.params.id}/></div>

            </div>
          </div>
        )
      }
    } else {
      return (
        <div className="container center">
          <p>Loading project...</p>
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null
  return {
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'projects'
  }])
)(ProjectDetails)
