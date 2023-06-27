import { useState } from "react";
import { SignUpForm } from "@/components/SignUpForm";
import { SuccessPage } from "@/components/SuccessPage";

export default function Home() {
  const [email, setEmail] = useState("");

  const submitSignupForm = (email) => {
    //setEmail(event.target.value)
    console.log("parent function called"+email);
    setEmail(email)
  };

  return (
    <>{email != "" ? <SuccessPage newEmail={email} /> : <SignUpForm signUp={submitSignupForm}/>};</>
  );
}
