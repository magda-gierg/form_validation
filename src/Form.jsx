import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      colour: '',
      colourError: '',
      animal: [],
      animalError: '',
      tiger_type: '',
      tigerError: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  validate = () => {
    let isError = false

    const errors = {
      emailError: '',
      passwordError: '',
      colourError: '',
      animalError: '',
      tigerError: ''
    }

    const {password, email, colour, animal, tiger_type} = this.state

    if (password.length < 8) {
      isError = true
      errors.passwordError = 'Password must be at least 8 characters long.'
    }
    if (!/(.+)@(.+){2,}\.(.+){2,}/.test(email)) {
      isError = true
      errors.emailError = 'Invalid email adress.'
    }
    if (!colour.length) {
      isError = true
      errors.colourError = 'Please select a colour.'
    }
    if (animal.length < 2) {
      isError = true
      errors.animalError = 'Please select at least 2 animals.'
    }
    if (animal.includes("tiger") && !tiger_type.length) {
      isError = true
      errors.tigerError = 'Please specify the type of tiger.'
    }

    this.setState({
      ...errors
    })

    return isError
  }


  handleSubmit(event) {
    event.preventDefault()
    const err = this.validate()
    if (err) {
      this.setState({display: 'error'})
    }
  }


  render() {

    return (
      <div className="Form">
        <form method='post' action='' onSubmit={this.handleSubmit}>
          <h1>Fill out this awesome form</h1>

          <fieldset>
            <h3>Your details</h3>

            <p>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input type='text' id='email' name='email' onChange={this.handleChange} />
              <span>{this.state.emailError}</span>
            </p>

            <p>
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input className='error' type='password' id='password' name='password' onChange={this.handleChange} />
              <span>{this.state.passwordError}</span>
            </p>
          </fieldset>

          <fieldset>
            <h3>Your animal</h3>
            <p>
              <label className='label' htmlFor='colour'>
                Colour
              </label>
              <select name='colour' id='colour' onChange={this.handleChange}>
                <option value=''>Choose colour</option>
                <option value='blue'>Blue</option>
                <option value='green'>Green</option>
                <option value='red'>Red</option>
                <option value='black'>Black</option>
                <option value='brown'>Brown</option>
              </select>
              <span>{this.state.colourError}</span>
            </p>

            <p>
              <span className="label">
                Animal
              </span>

              <input type='checkbox' name='animal' value='bear' id='bear' />
              <label htmlFor='bear'>
                Bear
              </label>

              <input type='checkbox' name='animal' value='tiger' id='tiger' />
              <label htmlFor='tiger'>
                Tiger
              </label>

              <input type='checkbox' name='animal' value='snake' id='snake' />
              <label htmlFor='snake'>
                Snake
              </label>

              <input type='checkbox' name='animal' value='donkey' id='donkey' />
              <label htmlFor='donkey'>
                Donkey
              </label>
            </p>

            <p>
              <label className='label' htmlFor='tiger_type'>
                Type of tiger
              </label>
              <input type='text' name='tiger_type' id='tiger_type' onChange={this.handleChange} />
              <span>{this.state.tigerError}</span>
            </p>
          </fieldset>

          <fieldset>
            <p>
              <input type='submit' value='Create account' />
            </p>
          </fieldset>

        </form>
      </div>
    )
  }
}




export default Form
