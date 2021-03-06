// import CreateComment from './create_comment.js'
// import {Post, Comment} from './post.js'
// import { CommentBox } from './commentbox.js';

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {liked: false}
//   }

//   render() {
//     if (this.state.liked == true) {
//       return "You liked this."
//     }
//     return (<button onClick={() => this.setState({liked: true})}>LIKE</button>);
//   }
// }
const data = {
  post: {
    id: 123,
    content:
      "What we hope ever to do with ease, we must first learn to do with diligence. — Samuel Johnson",
    user: "Mark Thomas"
  },
  comments: [
    {
      id: 0,
      user: "David",
      content: "such. win."
    },
    {
      id: 1,
      user: "Haley",
      content: "Love it."
    },
    {
      id: 2,
      user: "Peter",
      content: "Who was Samuel Johnson?"
    },
    {
      id: 3,
      user: "Mitchell",
      content: "@Peter get off Letters and do your homework"
    },
    {
      id: 4,
      user: "Peter",
      content: "@mitchell ok :P"
    }
  ]
};

class CreateComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      user: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUserChange(event) {
    const val = event.target.value;
    this.setState( () => ({
      user: val
    }));
  }

  handleTextChange(event) {
    const val = event.target.value;
    this.setState( () => ({
      content: val
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onCommentSubmit({
      user: this.state.user.trim(),
      content: this.state.content.trim()
    });
    this.setState( () => ({
      user: '',
      content: ''
    }));
  }

  render() {
    return (
      <form className='createComment' onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Your name' onChange={this.handleUserChange}/>
        <input type='text' placeholder='Thoughts?' onChange={this.handleTextChange}/>
        <input type='submit' value='Post' />
      </form>
    )
  }
}

class Post extends React.Component {
  render() {

    return (
      <div className='post'>
        <h2 className='postAuthor' id={this.props.id}>
          {this.props.user}
          <span className='postBody'>{this.props.content}</span>
          {this.props.children}
        </h2>
      </div>
    );
  }
}

class Comment extends React.Component {
  render() {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.user}
          <span className='commentContent'>{this.props.content}</span>
        </h2>
      </div>
    );
  }
}

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(comment) {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  }

  render() {
    return (
      <div className='commentBox'>
        <Post id={this.props.post.id} content={this.props.post.content} user={this.props.post.user}/>
        {
          this.state.comments.map(function(comment) {
            return (
              <Comment key={comment.id}
              id={comment.id}
              content={comment.content}
              user={comment.user}/>
            )
          })
        }
        <CreateComment onCommentSubmit={this.handleCommentSubmit}/>
      </div>
    );
  }
}

CommentBox.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.arrayOf(PropTypes.object)
};

const App = (
  <CommentBox post={data.post} comments={data.comments}/>
)
const node = document.querySelector("#root")

ReactDOM.render(App, node)