/*
 * @Author: your name
 * @Date: 2021-11-06 09:33:48
 * @LastEditTime: 2021-11-06 10:34:00
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react17-hooks-ts/src/screens/project-list/list.js
 */
import React from "react";
export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>项目负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
