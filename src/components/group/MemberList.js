/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./css/MemberList.css";

const AttendeeRole = {
  KICK_OUT: 0,
  OWNER: 1,
  CO_OWNER: 2,
  MEMBER: 3,
}

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
        {typeof props.data == "object" ?
        props.data.map((item)=>{
          return (
            <ul className="member-list">
              <li className="member-list__item">
                <span className="member-name">{item?.first_name} {item?.last_name}</span>
                <select className="member-role">
                  <option value="2" selected={item.role === 2 ? "selected" : ""}>CO_OWNER</option>
                  <option value="3" selected={item.role === 3 ? "selected" : ""}>MEMBER</option>
                  <option value="1" selected={item.role === 1 ? "selected" : ""}>OWNER</option>
                  <option value="0" selected={item.role === 0 ? "selected" : ""}>KICK_OUT</option>

                </select>
              </li>
            </ul>
          )
          
        }
        ): <></>
        }
      </div>
    </Container>
  );
};

export default MemberList;
