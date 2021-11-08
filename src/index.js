import CreateComment from './create_comment.js'
import {Post, Comment} from './post.js'
import { CommentBox } from './commentbox.js';
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

const App = React.createElement(CommentBox, {
  post: data.post,
  comments: data.comments
});

const node = document.querySelector("#root")

ReactDOM.render(App, node)