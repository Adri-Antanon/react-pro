import '../styles/styles.css';

export const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Repeat password" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
