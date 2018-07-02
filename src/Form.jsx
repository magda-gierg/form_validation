import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      colour: '',
      animal: [],
      tiger_type: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {

    return (
      <div className="Form">
        <form method='post' action=''>
          <h1>Fill out this awesome form</h1>

          <fieldset>
            <h3>Your details</h3>

            <p>
              <label className='label' htmlFor='email'>
                Email
              </label>
              <input type='text' id='email' name='email' onChange={this.handleChange} />
            </p>

            <p>
              <label className='label' htmlFor='password'>
                Password
              </label>
              <input className='error' type='password' id='password' name='username' onChange={this.handleChange} />
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
