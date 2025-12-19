const roles = ["user", "creator", "admin"];

const UserRow = ({ user, index, onChangeRole, loading }) => {
  return (
    <tr>
      <td>{index + 1}</td>

      <td className="flex items-center gap-2">
        <img
          src={user.image}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">{user.name}</span>
      </td>

      <td>{user.email}</td>

      <td>
        <span
          className={`badge ${
            user.role === "admin"
              ? "badge-error"
              : user.role === "creator"
              ? "badge-warning"
              : "badge-info"
          }`}
        >
          {user.role}
        </span>
      </td>

      <td>
        <select
          className="select select-bordered select-sm"
          value={user.role}
          disabled={loading}
          onChange={(e) => onChangeRole(e.target.value)}
        >
          {roles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </td>
    </tr>
  );
};

export default UserRow;
