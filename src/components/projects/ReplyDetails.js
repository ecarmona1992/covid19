import React, { Component } from 'react'
//import CreateReply from './CreateReply'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const ReplyDetails = ({ projects }) => {

  return (
    <div className="project-list section">
      {projects && projects.map(project => {
        return (
          <div className="container section project-details">
            <div className="card z-depth-0">
              <div className="card-content">
                <span className="card-title">{project.data.title}</span>
                <p>{project.data.content}</p>
              </div>
              <div className="card-action grey lighten-4 grey-text">
                <div>Posted by {project.data.authorFirstName} {project.data.authorLastName}</div>
                <div>{project.data.createdAt.toDate().toDateString()}</div>

                <Link to={'/project/' + project.id} key={project.id}>
                  <button onClick="window.location.reload(false)" className="btn orange lighten-1">see replies</button>
                </Link>
              </div>
            </div>
          </div>
        )
      })
      }
    </div>
  )



}

export default ReplyDetails