/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "../css/MemberList.css";

const MemberList = (props) => {
  const memberApi = "";
  const [members, setMembers] = useState(null);

  useEffect(() => {
    /*     const getMembers = async () => {
      try {
        const res = await fetch(memberApi);
        const data = await res.json();
        setMembers(data);
        getMembers();
      } catch (err) {
        console.log(err.message);
      }
    }; */
  }, []);

  return (
    <Container className="section-member-list">
      <div className="div-member-list">
        <ul className="member-list">
          <li className="member-list__item">
            <span className="member-name">Member 1</span>
            <select className="member-role">
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
              <option value="role3">Role 3</option>
            </select>
          </li>
          <li className="member-list__item">
            <span className="member-name">Member 2</span>
            <select className="member-role">
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
              <option value="role3">Role 3</option>
            </select>
          </li>
          <li className="member-list__item">
            <span className="member-name">Member 3</span>
            <select className="member-role">
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
              <option value="role3">Role 3</option>
            </select>
          </li>
          <li className="member-list__item">
            <span className="member-name">Member 4</span>
            <select className="member-role">
              <option value="role1">Role 1</option>
              <option value="role2">Role 2</option>
              <option value="role3">Role 3</option>
            </select>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default MemberList;
