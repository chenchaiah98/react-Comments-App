// Write your code here

import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  state = {name: '', comment: '', commentsCount: 0, commentsList: []}

  addBtn = e => {
    e.preventDefault()
    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
    }

    if (name !== '' && comment !== '') {
      this.setState(prevState => ({
        commentsList: [...prevState.commentsList, newComment],
        commentsCount: prevState.commentsCount + 1,
        name: '',
        comment: '',
      }))
    }
  }

  nameInput = nameEvent => {
    this.setState({name: nameEvent.target.value})
  }

  commentInput = commentEvent => {
    this.setState({comment: commentEvent.target.value})
  }

  render() {
    const {name, comment, commentsCount, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <div className="comments-input">
            <h1>Comments</h1>
            <form>
              <p>say something about 4.0Technologies</p>
              <input
                type="text"
                value={name}
                id="name"
                placeholder="your name"
                className="name"
                onChange={this.nameInput}
              />

              <br />
              <textarea
                name="comment"
                id="comment"
                placeholder="Your Comment"
                rows="4"
                cols="19"
                value={comment}
                className="comment"
                onChange={this.commentInput}
              />

              <br />
              <button type="button" className="button" onClick={this.addBtn}>
                Add Comment
              </button>
            </form>
          </div>
          <div className="comment-img">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr />
        <div>
          <p>
            <span className="comments-count">{commentsCount}</span>comments
          </p>
        </div>
        <div>
          {commentsList.map(each => (
            <div className="user-comments-container" key={each.id}>
              <div className="profile">
                <div>
                  <h2 className="profile-img">{each.name[0]}</h2>
                </div>
                <div>
                  <h3 className="profile-name">{each.name}</h3>
                </div>
                <div>
                  <p className="time">{`${new Date().getMinutes()} ago`}</p>
                </div>
              </div>
              <div>
                <p>{each.comment}</p>
              </div>
              <ul className="like-comment">
                <li>
                  {each.isLiked ? (
                    <div className="like-img">
                      <div>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png"
                          alt="like"
                        />
                      </div>
                      <div>
                        <h6>like</h6>
                      </div>
                    </div>
                  ) : (
                    <div className="like-img">
                      <div>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
                          alt="liked"
                        />
                      </div>
                      <div>
                        <h6>like</h6>
                      </div>
                    </div>
                  )}
                </li>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                    alt="delete"
                  />
                </div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Comments
