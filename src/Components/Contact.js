import React, { useState } from "react";
import navsoft from "../assets/navsoft.jpg";
import { sendMessage } from "../apiutils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  let onSave = async () => {
    console.log({
      name: name,
      email: email,
      message: message,
    });
    setLoader(true);
    let res = await sendMessage({
      name: name,
      email: email,
      message: message,
    });
    console.log(res);
    setLoader(false);
    toast.success("Message sent we will contact you soon.");
  };

  return (
    <>
      <ToastContainer />

      <div className="container mx-auto px-4 select-none">
        <div className="grid md:grid-cols-2 gap-4 my-4">
          <img src={navsoft} alt="navsoft" className="aspect-auto rounded" />
          <div className="mx-auto">
            {loader ? (
              <>
                {/* <svg
                  className="animate-spin h-5 w-5 mr-3"
                  viewBox="0 0 24 24"
                  color="black"
                ></svg> */}
                {/* <i class="fa fa-circle animate-spin" aria-hidden="true"></i> */}
                <div className="mx-auto container flex items-center h-64">
                  <i
                    class="fa fa-spinner animate-spin text-emerald-800 mx-auto text-center"
                    aria-hidden="true"
                  ></i>
                </div>
              </>
            ) : (
              <div className="w-full">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Your name
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      onChange={(ev) => setName(ev.target.value)}
                      placeholder="Your name please"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Your email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="john@gmail.com"
                      onChange={(ev) => setEmail(ev.target.value)}
                    />
                    {/* <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                  </div>
                  <div className="mb-6">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="password"
                    >
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="text"
                      placeholder="Your message"
                      onChange={(ev) => setMessage(ev.target.value)}
                    ></textarea>
                    {/* <p className="text-red-500 text-xs italic">
                    Please choose a password.
                  </p> */}
                  </div>
                  <div className="flex items-center justify-end">
                    <button
                      className="bg-teal-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline align-baseline"
                      type="button"
                      onClick={onSave}
                    >
                      Send Request
                    </button>
                    {/* <a
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    href="/"
                  >
                    Forgot Password?
                  </a> */}
                  </div>
                </form>
              </div>
            )}

            <div className="my-4">
              This website is created on my weekend so there might be design and
              detailing flaws. Those, I will be fixing in upcomming days. This
              website is built using reactjs and deployed on digital ocean.
            </div>
            <h4 className="font-bold">
              Some useful links{" "}
              <span className="animate-bounce w-6 h-6">👇</span>
            </h4>
            <div className="grid md:grid-cols-1 gap-4 my-4 mx-auto">
              <a
                href="https://join.skype.com/invite/fqItPGUJBwot"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-800	"
              >
                <i className="fa fa-skype mr-3" aria-hidden="true"></i>
                Join me on skype
              </a>
            </div>
            <div className="grid md:grid-cols-1 gap-4 my-4 mx-auto">
              <a
                href="mailto:satyamsinha8158@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-800	"
              >
                <i className="fa fa-google mr-3" aria-hidden="true"></i>
                satyamsinha8158@gmail.com
              </a>
            </div>
            <div className="grid md:grid-cols-1 gap-4 my-4 mx-auto">
              <a
                href="https://www.youtube.com/c/GeekySatyam"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-800	"
              >
                {" "}
                <i className="fa fa-youtube-play mr-3" aria-hidden="true"></i>
                Geeky Satyam
              </a>
            </div>
            <div className="grid md:grid-cols-1 gap-4 my-4 mx-auto">
              <a
                href="https://www.linkedin.com/in/satyam-sinha-aa5a57161/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-emerald-800	"
              >
                {" "}
                <i className="fa fa-linkedin mr-3" aria-hidden="true"></i>
                My Linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
