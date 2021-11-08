var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_React$Component) {
  _inherits(Post, _React$Component);

  function Post(props) {
    _classCallCheck(this, Post);

    return _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));
  }

  _createClass(Post, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', {
        className: 'post'
      }, React.createElement('h2', {
        className: 'postAuthor',
        id: this.props.id
      }, this.props.user, React.createElement('span', {
        className: 'postBody'
      }, this.props.content), this.props.children));
    }
  }]);

  return Post;
}(React.Component);

var Comment = function (_React$Component2) {
  _inherits(Comment, _React$Component2);

  function Comment() {
    _classCallCheck(this, Comment);

    return _possibleConstructorReturn(this, (Comment.__proto__ || Object.getPrototypeOf(Comment)).apply(this, arguments));
  }

  _createClass(Comment, [{
    key: 'render',
    value: function render() {
      return React.createElement('div', {
        className: 'comment'
      }, React.createElement('h2', {
        className: 'commentAuthor'
      }, this.props.user, React.createElement('span', {
        className: 'commentContent'
      }, this.props.content)));
    }
  }]);

  return Comment;
}(React.Component);

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

var App = React.createElement(Post, {
  id: 1,
  user: 'mark',
  content: ' said: Let\'s say this is a post!'
}, React.createElement(Comment, {
  id: 2,
  user: 'bob',
  content: ' commented: Wow! How cool!'
}));

var node = document.querySelector("#root");

ReactDOM.render(App, node);