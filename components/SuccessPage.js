import Image from "next/image";
export const SuccessPage = ({ newEmail }) => {
  const dismissMessage = () => {
    console.log("hide message");
  };
  return (
    <>
      {newEmail && (
        <>
          <div className="">
            <div className="h-screen flex flex-col justify-center md:items-center">
              <div className="m-5 md:m-7 grid grid-rows-2 md:bg-white md:w-96 md:p-10 md:flex md:flex-col md:rounded md:rounded-2xl md:drop-shadow-lg">
                <div className="space-y-5">
                  <Image
                    src="assets/images/icon-success.svg"
                    width={50}
                    height={50}
                    alt="Sign up illustration"
                  />
                  <h1 className="text-5xl md:text-4xl font-bold text-darkSlateGrey">
                    Thanks for subscribing!
                  </h1>
                  <p className="text-darkSlateGrey font-medium md:text-xs md:tracking-wide">
                    A confirmation email has been sent to{" "}
                    <span className="text-darkSlateGrey font-bold">
                      {newEmail}
                    </span>
                    . Please open it and click the button inside to confirm your
                    subscription.
                  </p>
                </div>
                <div className="self-end md:self-start w-full">
                  <button
                    //className="w-full bg-darkSlateGrey align-end text-white text-center rounded rounded-lg px-4 py-2 text-sm my-5 font-bold hover:bg-gradient-to-r from-tomato to-orange-600"
                    className="bg-darkSlateGrey text-white text-sm tracking-wide font-semibold p-4 my-5 w-full text-center rounded-lg hover:bg-gradient-to-r from-tomato to-orange-600"
                    onClick={dismissMessage}
                  >
                    Dismiss message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
