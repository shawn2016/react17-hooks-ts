/*
 * @Author: your name
 * @Date: 2021-10-28 13:37:30
 * @LastEditTime: 2021-11-06 10:37:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react17-hooks-ts/src/App.tsx
 */
import React, { useEffect, useState } from "react";
import { List } from "screens/project-list/list";
import { SearchPanel } from "screens/project-list/search-panel";
import qs from "qs";
import { cleanObject } from "utils";
const apiUrl = process.env.REACT_APP_API_URL;
function ProjectListScreen() {
  const [list, setList] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [users, setUsers] = useState([]);
  // 获取项目数据
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [param]);

  // 获取所有用户
  useEffect(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  }, []);
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        users={users}
      ></SearchPanel>
      <List list={list} users={users}></List>
    </div>
  );
}

export default ProjectListScreen;
