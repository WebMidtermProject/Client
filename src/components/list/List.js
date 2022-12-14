/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";

import GradientCard from "../container/GradientCard";
import GroupItem from "./GroupItem";
import MemberItem from "./MemberItem";

import "./css/List.css";

const List = (props) => {
  return (
    <GradientCard h={props.h} w={props.w} mh={props.mh} mw={props.mw}>
      <ul className="list">
        {/*         {props.type !== "member" &&
          typeof props.list === "object" &&
          props.list.map((item, key) => {
            return (
              <GroupItem
                id={item.id}
                title={item.title}
                total_member={item.total_member}
                owner_first_name={item.owner_first_name}
                owner_last_name={item.owner_last_name}
              ></GroupItem>
            );
          })} */}
        {/*        {props.type === "member" && typeof props.list === "object" &&
          props.list.map((item, key) => {
            return (
              <MemberItem
                id={item.id}
                first_name={item.first_name}
                last_name={item.last_name}
                role={item.role}
              ></MemberItem>
            );
          })} */}
        {props.type !== "member" && (
          <>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>{" "}
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
            <GroupItem
              id="1"
              title="item"
              total_member="69"
              owner_first_name="first"
              owner_last_name="last"
            ></GroupItem>
          </>
        )}

        {props.type === "member" && (
          <>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>{" "}
            <MemberItem
              id="1"
              first_name="user"
              last_name="name"
              role="role"
            ></MemberItem>
          </>
        )}
      </ul>
    </GradientCard>
  );
};

export default List;
