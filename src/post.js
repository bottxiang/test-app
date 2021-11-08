class Post extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return React.createElement(
      'div',
      {
        className: 'post'
      },
      React.createElement(
        'h2',
        {
          className: 'postAuthor',
          id: this.props.id
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'postBody'
          },
          this.props.content
        ),
        this.props.children
      )
    );
  }
}

class Comment extends React.Component {
  render() {
    return React.createElement(
      'div',
      {
        className: 'comment'
      },
      React.createElement(
        'h2',
        {
          className: 'commentAuthor'
        },
        this.props.user,
        React.createElement(
          'span',
          {
            className: 'commentContent'
          },
          this.props.content
        )
      )
    );
  }
}

Post.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
}

export {Post, Comment}
