export default class CreateComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
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
    return React.createElement('form', {
        className: 'createComment',
        onSubmit: this.handleSubmit
      },
      React.createElement('input', {
        type: 'text',
        placeholder: 'Your name',
        value: this.state.user,
        onChange: this.handleUserChange
      }),
      React.createElement('input', {
        type: 'text',
        placeholder: 'Thoughts?',
        onChange: this.handleTextChange
      }),
      React.createElement('input', {
        type: 'submit',
        vaule: 'Post'
      })
    );
  }
}