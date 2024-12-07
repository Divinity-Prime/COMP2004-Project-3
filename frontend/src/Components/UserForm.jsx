export default function UserForm({
  handleOnSubmit,
  handleOnChange,
  formData,
  postResponse,
  btnText,
}) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <p>Username</p>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleOnChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleOnChange}
          />
        </div>

        <br />
        <button>{btnText}</button>
      </form>
      <br />
      {postResponse}
    </div>
  );
}
