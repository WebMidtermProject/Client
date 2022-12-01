/* eslint-disable react/prop-types */
import React from 'react'

const RightNavBar = (props) => {
  return (
    <nav className="nav nav--right">
      {!props.user && (
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/sign-in">Sign in</a>
          </li>
          <li className="nav__item">
            <a href="/sign-up">Sign up</a>
          </li>
        </ul>
      )}
      {props.user && (
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/profile">
              <h2>{props.user}</h2>
              <img src={props.user.img} alt="" />
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default RightNavBar
