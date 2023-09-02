import clsx from "clsx";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import InputWithLabel from "../components/global/inputWithLabel";
import { auth } from "../firebase/firebase";

const LogIn = () => {
  const [valueMail, setValueMail] = useState("");
  const [valuePassword, setValuePassword] = useState("");
  const [message, setMessage] = useState({ type: "none", content: "" });

  const onSubmitLogIn = async (e: any) => {
    e.preventDefault();
    setMessage({ type: "none", content: "" });
    try {
      await signInWithEmailAndPassword(auth, valueMail, valuePassword);
      setMessage({ type: "success", content: "You successfully signed in" });
    } catch (e: any) {
      setMessage({ type: "error", content: e.message });
    }
  };

  return (
    <div className="flex items-center justify-center flex-col space-y-8">
      <h1 className="text-4xl">Log in</h1>
      <form
        className="flex flex-col space-y-4 items-center"
        onSubmit={onSubmitLogIn}
      >
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
        <button
          type="submit"
          className="py-2 w-1/2 px-4 rounded-lg font-bold bg-poke-red text-poke-white"
        >
          Log in
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

export default LogIn;
