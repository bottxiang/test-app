import CreateComment from './create_comment.js'
import {Post, Comment} from './post.js'

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

const App = React.createElement(Post, {
  id: 1,
  user: 'mark',
  content: ' said: Let\'s say this is a post!'
},
React.createElement(
  Comment,
  {
    id: 2,
    user: 'bob',
    content: ' commented: Wow! How cool!'
  }),
  React.createElement(CreateComment)
);

const node = document.querySelector("#root")

ReactDOM.render(App, node)