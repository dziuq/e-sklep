import { useState, useContext} from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import '../sign-up-form/sign-up-form.styles.scss'
import Button from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password != confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("Email jest już w użyciu");
      }
      console.log("Error while creating an account", error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Nie masz konta?</h2>
      <span>Zarejsteruj się!</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nazwa użytkownika"
          type="text"
          id="name"
          name="displayName"
          required
          value={displayName}
          onChange={handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          id="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="Hasło"
          type="password"
          id="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />

        <FormInput
          label="Powtórz hasło"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          required
          value={confirmPassword}
          onChange={handleChange}
        />

        <Button  type="submit">Zarejestruj się</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
