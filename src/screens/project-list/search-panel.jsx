import React from "react";
export const SearchPanel = ({ users, param, setParam }) => {
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="请输入"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
        负责人:
        <select
          value={param.personId || ""}
          onChange={(evt) => {
            return setParam({
              ...param,
              personId: evt.target.value,
            });
          }}
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
