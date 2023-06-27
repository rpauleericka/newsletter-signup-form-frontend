import Image from "next/image";
export const SuccessPage = ({ newEmail }) => {
  const dismissMessage = () => {
    console.log("hide message");
  };
  return (
    <>
      {newEmail && (
        <>
          <div className="h-screen flex justify-center items-center">
            <div className="bg-white p-10 w-80 space-y-3 rounded-2xl drop-shadow-lg flex flex-col">
              <Image
                src="assets/images/icon-success.svg"
                width={50}
                height={50}
                alt="Sign up illustration"
              />
              <h1 className="text-4xl font-bold text-darkSlateGrey">
                Thanks for subscribing!
              </h1>
              <p className="text-xs px-2">
                A confirmation email has been sent to{" "}
                <span className="text-darkSlateGrey font-bold">{newEmail}</span>. Please open it and click the
                button inside to confirm your subscription.
              </p>
              <button 
              className="bg-darkSlateGrey text-white text-center w-full rounded rounded-lg my-5 p-2 text-xs hover:bg-gradient-to-r from-tomato to-orange-600"
              onClick={dismissMessage}>Dismiss message</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
