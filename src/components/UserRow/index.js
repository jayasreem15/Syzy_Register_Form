import React from "react";
import { ActionButton } from "./styledComponents";

const UserRow = ({ user, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{user.username}</td>
      <td>{user.fullname}</td>
      <td>{user.phone}</td>
      <td>{user.email}</td>
      <td>{user.education}</td>
      <td>{user.languages}</td>

      <td>
        {user.resume ? (
          <a
            href={URL.createObjectURL(user.resume)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#007bff", textDecoration: "none" }}
          >
            View Resume
          </a>
        ) : (
          "—"
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        <ActionButton className="edit" onClick={() => onEdit(user.id)}>
          Edit
        </ActionButton>
        <ActionButton className="delete" onClick={() => onDelete(user.id)}>
          Delete
        </ActionButton>
      </td>
    </tr>
  );
};

export default UserRow;
