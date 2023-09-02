import clsx from "clsx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import InputWithLabel from "../components/global/inputWithLabel";
import { auth, firestore } from "../firebase/firebase";

const SignUp = () => {
  const [valueMail, setValueMail] = useState("");
  const [usernameValue, setUsernameValue] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const [message, setMessage] = useState({ type: "none", content: "" });

  const onSubmitLogIn = async (e: any) => {
    e.preventDefault();
    setMessage({ type: "none", content: "" });
    try {
      const newUser = await createUserWithEmailAndPassword(
        auth,
        valueMail,
        valuePassword
      );
      const newID = newUser.user.uid;
      await setDoc(doc(firestore, "users", newID), {
        username: usernameValue,
      });
      setMessage({ type: "success", content: "You successfully signed up" });
    } catch (e: any) {
      setMessage({ type: "error", content: e.message });
    }
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-8">
      <h1 className="text-4xl">Sign up</h1>
      <form
        className="flex flex-col space-y-4 items-center"
        onSubmit={onSubmitLogIn}
      >
        <InputWithLabel
          value={usernameValue}
          setValue={setUsernameValue}
          type="text"
          title="Username"
        />
        <InputWithLabel
          value={valueMail}
          setValue={setValueMail}
          type="email"
          title="Email address"
        />
        <InputWithLabel
          value={valuePassword}
          setValue={setValuePassword}
          type="password"
          title="Password"
        />
        <InputWithLabel
          value={confirmPasswordValue}
          setValue={setConfirmPasswordValue}
          type="password"
          title="Confirm password"
        />
        <button
          type="submit"
          className="py-2 w-1/2 px-4 rounded-lg font-bold bg-poke-red text-poke-white"
        >
          Sign up
        </button>
      </form>
      {message.type !== "none" && (
        <h3
          className={clsx({
            "text-poke-light-green": message.type === "success",
            "text-poke-red": message.type === "error",
          })}
        >
          {message.content}
        </h3>
      )}
    </div>
  );
};

export default SignUp;
