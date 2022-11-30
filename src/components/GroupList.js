/* eslint-disable react/prop-types */
import React from 'react'

import '../css/GroupList.css'

const GroupList = (props) => {
  return (
    <aside className="main-content__aside my-group">
      <ul className="group-list">
        <h5 className="group-list__title">{props.title}</h5>
        <li className="group-list__item">ABC</li>
        <li className="group-list__item">DEF</li>
        <li className="group-list__item">GHI</li>
        <li className="group-list__item">JKL</li>
        <li className="group-list__item">ABC</li>
        <li className="group-list__item">DEF</li>
        <li className="group-list__item">GHI</li>
        <li className="group-list__item">JKL</li>
        <li className="group-list__item">ABC</li>
        <li className="group-list__item">DEF</li>
        <li className="group-list__item">GHI</li>
        <li className="group-list__item">JKL</li>
        <li className="group-list__item">ABC</li>
        <li className="group-list__item">DEF</li>
        <li className="group-list__item">GHI</li>
        <li className="group-list__item">JKL</li>
        <li className="group-list__item">ABC</li>
        <li className="group-list__item">DEF</li>
        <li className="group-list__item">GHI</li>
        <li className="group-list__item">JKL</li>
      </ul>
    </aside>
  )
}

export default GroupList
