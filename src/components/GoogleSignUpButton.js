// Signup.jsx
import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

// https://developers.google.com/identity/gsi/web/reference/js-reference

const GoogleSignUpButton = () => {
  const { handleGoogle, loading, error } = useFetch(
    'http://localhost:3000/google/sign-up'
  )

  useEffect(() => {
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        callback: handleGoogle
      })
      google.accounts.id.renderButton(document.getElementById('signUpDiv'), {
        // type: "standard",
        theme: 'filled_black',
        // size: "small",
        text: 'continue_with',
        shape: 'pill'
      })

      /* google.accounts.id.prompt(); */
    }
  }, [handleGoogle])

  return (
    <>
      <main
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {loading
          ? (
          <div>Loading....</div>
            )
          : (
          <div id="signUpDiv" data-text="signup_with"></div>
            )}
      </main>
    </>
  )
}

export default GoogleSignUpButton
