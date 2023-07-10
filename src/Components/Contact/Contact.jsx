import React, { useState } from "react";
import emailjs from "emailjs-com";
import { BiMailSend } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import Footer from "../Footer/Footer"

function EmailForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isFormEmpty, setIsFormEmpty] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    if (isFormEmpty) {
      // Form boş ise gönderme işlemi yapma
      return;
    }

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      email,
      phone_number: phoneNumber,
      message,
    };

    emailjs
      .send(
        "service_tf2ilnl",
        "template_8aagaia",
        templateParams,
        "0-2zDV5GlkmWiPD02"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Gönderme başarılı mesajını göster
          alert("Mail gönderildi!");

          // Formu sıfırla
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhoneNumber("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleInputChange = (e) => {
    // Form alanlarının değişikliklerini takip et
    const { name, value } = e.target;

    if (name === "first-name") {
      setFirstName(value);
    } else if (name === "last-name") {
      setLastName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone-number") {
      setPhoneNumber(value);
    } else if (name === "message") {
      setMessage(value);
    }

    // Formun boş olup olmadığını kontrol et
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      phoneNumber.trim() === "" ||
      message.trim() === ""
    ) {
      setIsFormEmpty(true);
    } else {
      setIsFormEmpty(false);
    }
  };

  return (
    <div>
    <div className="mx-auto max-w-xl sm:mt-20 ">
      <div className="flex justify-center mb-20">
        <div className="text-center  drop-shadow-2xl flex flex-col items-center border-8 rounded-md  text-black bg-blue-gray-50 mx-4">
          <div className="w-60 h-6  flex justify-center items-center">
            <BiMailSend className="h-6 w-6 mt-6" />
          </div>
          <a href="mailto:ismailldmirr@gmail.com" className="mt-4 text-lg">
            E-Posta
          </a>
          <p className="text-sm">ismailldmirr@gmail.com</p>
        </div>
        <div className="text-center  w-72 drop-shadow-2xl flex flex-col items-center border-8 rounded-md text-black bg-blue-gray-50 mx-4">
          <div className="w-12 h-6 flex justify-center items-center">
            <BiPhone className="h-6 w-6 mt-6" />
          </div>
          <p className="mt-4 text-lg">Telefon</p>
          <p className="text-sm">0506 756 35 22</p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Bize Ulaşın
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Sizinle ilgilenmek için buradayız.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
        <div className="sm:col-span-2">
          <form
            onSubmit={sendEmail}
            className="mx-auto mt-16 max-w-xl sm:mt-20"
          >
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="first-name"
                  className=" mx-2 block text-sm border-gray-300 font-semibold leading-6  text-gray-900"
                >
                  Adınız
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block  w-full rounded-md border-gray-300 border-2 h-9  shadow-sm  sm:text-base mt-2"
                  value={firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="mx-2 block text-sm font-semibold leading-6 text-gray-900"
                >
                  Soyadınız
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-gray-300 border-2 h-9 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-base mt-2"
                  value={lastName}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="mx-2 block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-gray-300 border-2 h-9 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-base mt-2"
                  value={email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="mx-2 block text-sm  font-semibold leading-6 text-gray-900"
                >
                  Telefon
                </label>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-gray-300 border-2 h-9 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-base mt-2"
                  value={phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className=" block mx-2 text-sm font-semibold leading-6 text-gray-900"
                >
                  Mesaj
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className=" block w-full rounded-md border-gray-300 border-2  h-20 shadow-sm focus:ring-indigo-600 focus:border-indigo-600 sm:text-base mt-2"
                  value={message}
                  onChange={handleInputChange}
                ></textarea>
              </div>
            </div>

            <div className="mb-16 mt-2">
              <button
                type="submit"
                className={`cursor-pointer block w-full rounded-md ${
                  isFormEmpty
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-700 hover:bg-green-800"
                } px-4 py-3 text-center text-base font-semibold text-white shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600`}
                disabled={isFormEmpty}
              >
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
    <Footer  />
    </div>
  );
}

export default EmailForm;
