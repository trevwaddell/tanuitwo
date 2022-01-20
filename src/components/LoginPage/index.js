import React, { useCallback } from "react";
import { useIdentityContext } from "react-netlify-identity";

export default function LoginPage() {
  const { loginUser, signupUser } = useIdentityContext();
  const formRef = React.useRef();
  const [msg, setMsg] = React.useState("");

  const signup = () => {
    const email = formRef.current.email.value;
    const password = formRef.current.password.value;

    signupUser(email, password).then((user) => {
      console.log("Success! Signed up", user);
    });
  };

  const login = useCallback(async (email, password) => {
    try {
      const user = await loginUser(email, password, true);
      console.log({ user });
    } catch (error) {
      console.log("login error", error);
    }
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login(email, password);
      }}
    >
      <div>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
      </div>
      <div>
        <input type="submit" value="Log in" />
        <button onClick={signup}>Sign Up </button>
        {msg && <pre>{msg}</pre>}
      </div>
    </form>
  );
}
