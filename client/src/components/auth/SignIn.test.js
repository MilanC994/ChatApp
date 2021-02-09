import React from 'react'
import { shallow } from 'enzyme'
import SignIn from './SignIn'
import toJson from 'enzyme-to-json'
import cridentialsValidation from '../utils/cridentialsValidation'

describe('SignIn Component test', () => {
  const wrapper = shallow(<SignIn />)

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  //Mock funkcije
  it('should have an empty email and password state', () => {
    //Optionally test to check if password and email are empty strings on
    //  setup
    expect(wrapper.dive().state('email')).toEqual('')
    expect(wrapper.dive().state('password')).toEqual('')
  })

  it('test email and password pressence', () => {
    //no input
    expect(cridentialsValidation('name', '', '', 'login')).toEqual(false)
    //wrong email
    expect(cridentialsValidation('name', 'wrongEmail', '', 'login')).toEqual(
      false
    )

    expect(
      cridentialsValidation('name', 'email@email.com', 'somepassword', 'login')
    ).toEqual(true)
  })

  it('onButtonClick sign user in or output error', () => {
    wrapper.dive().setState({
      email: 'goodemail@email.com',
      password: 'somegoodpassword',
    })

    wrapper.dive().find('#signInBtn').simulate('click')
    expect(wrapper.dive().state('signedIn')).toEqual(true)
  })
})
