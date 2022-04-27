import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
const Register = () => {
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (user) {
    navigate("/");
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    e.target.reset();
  };
  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.ibb.co/hXXNPxJ/Group-1329.png"
              alt="volunteer website logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Register as a Volunteer
            </h2>
          </div>
          <form
            onSubmit={handleRegister}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="date" className="sr-only">
                  date
                </label>
                <input
                  id="date"
                  name="date"
                  type="date"
                  autoComplete="current-date"
                  className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="date"
                />
              </div>
              <div>
                <label htmlFor="Desicription" className="sr-only">
                  date
                </label>
                <input
                  id="Desicription"
                  name="Desicription"
                  type="Desicription"
                  autoComplete="current-Desicription"
                  className="mt-3 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Desicription"
                />
              </div>
              <div>
                <label htmlFor="Organize" className="sr-only">
                  Organize books at the library
                </label>
                <input
                  id="Organize"
                  name="Organize"
                  type="text"
                  autoComplete="current-Organize"
                  className="mt-3  appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Organize books at the library."
                />
              </div>
              <div
                style={{ marginTop: "18px", textDecoration: "underline" }}
                className="flex items-center  "
              >
                <div className="text-sm">
                  <Link
                    to="/login"
                    className=" font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Already have an account
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className=" group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
