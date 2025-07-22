import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocFromAuth,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "../sign-in-form/sign-in-form.styles.scss";
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      console.log(error.code);
      if (error.code == "auth/invalid-credential")
        alert("Nieprawidłowe dane logownia");
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Masz już konto?</h2>
      <span>Zaloguj się za pomocą emaila i hasła</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Zaloguj</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Zaloguj za pomocą Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
