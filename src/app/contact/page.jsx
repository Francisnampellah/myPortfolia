"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
 
const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState();
  const [preloader, setPreloader] = useState(false);
  const text = "For Work Or Just saying Hello.";

  const form = useRef();
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const checkValidity = () => {
    const emailInput = form.current.elements.user_email.value;
    const messageInput = form.current.elements.message.value;

    if (!validateEmail(emailInput) && !messageInput) {
      setError("Please enter a valid email and message");
      return false;
    } else if (!validateEmail(emailInput)) {
      setError("Please enter a valid email");
      return false;
    } else if (!messageInput) {
      setError("Please enter a message");
      return false;
    }

    return true;
  };

  if(success){
     setTimeout(() => {
      setSuccess(false);
    }, 5000);
    
  }

  const sendEmail = (e) => {
    e.preventDefault();
    setPreloader(true);
    setError(false);
    setSuccess(false);

    if (!checkValidity()) {
      setPreloader(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setError(false)
          setSuccess(true);
          setPreloader(false);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* FORM CONTAINER */}
        <div className="flex w-[80%] md:w-[45%] flex-col self-center justify-center  bg-slate-800/30 rounded-lg shadow-md backdrop-blur border border-slate-800/30 rounded-lg shadow-md backdrop-blur border border-white/30 p-4 self-center">
          {error ? (
            <div
              class=" flex flex-col text-red-800 my-2 px-4 py-3 rounded relative  bg-slate-600/30 rounded-lg shadow-md backdrop-blur border border-slate-600/30 rounded-lg shadow-md backdrop-blur border border-white/30 p-4"
              role="alert"
            >
              <div className="flex flex-row justify-between">
                <strong class="font-bold">An Error has Occur </strong>
                <span
                  class="absolute top-0 bottom-0 right-0 px-4 py-3"
                  onClick={() => setError(false)}
                >
                  <svg
                    class="fill-current h-6 w-6 text-red-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
              <span class="block sm:inline">{error}</span>
            </div>
          ) : (
            ""
          )}
           {success ? (
            <motion.div
             initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
              class=" flex flex-col text-green-800 my-2 px-4 py-3 rounded relative  bg-slate-600/30 rounded-lg shadow-md backdrop-blur border border-green-600/30 rounded-lg shadow-md backdrop-blur border border-white/30 p-4"
              role="alert"
            >
              <div className="flex flex-row justify-between">
                <strong class="font-bold">Email Send  </strong>
                <span
                  class="absolute top-0 bottom-0 right-0 px-4 py-3"
                 >
                  <svg
                    class="fill-current h-6 w-6 text-green-500"
                    role="button"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
             </motion.div >
          ) : (
            ""
          )}
          <form ref={form} onSubmit={sendEmail}>
            <label
              for="input-group-1"
              class="block mb-2 text-sm font-medium text-gray-600 dark:text-white"
            >
              Your Email
            </label>
            <div class="relative mb-6">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                name="user_email"
                type="email"
                id="input-group-1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div class="mb-6">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <input
                name="message"
                type="text"
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <button
             type="submit"
               class={
                preloader
                  ? "text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  p-4 text-white bg-green-400/100 focus:bg-green-700/60 rounded-lg shadow-md border border-slate-400/100 "
                  : "text-white font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  p-4 text-white bg-blue-400/100 focus:bg-blue-700/60 rounded-lg shadow-md border border-slate-400/100 "
              }
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
