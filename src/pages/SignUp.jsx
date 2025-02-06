import img from "../assets/p8.jpg";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <section className="min-h-screen  bg-black">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
        {/* Left Section (Image) */}
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        
          <img
            src={img}
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          
        </section>

        {/* Right Section (Form) */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-full max-w-xl lg:max-w-3xl">
            <h1 className="text-center text-4xl font-medium text-white mb-10">
              Create an Account
            </h1>
            <form className="grid grid-cols-6 gap-6">
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  className="mt-2 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#faa307]"
                  required
                />
              </div>

              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  className="mt-2 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#faa307]"
                  required
                />
              </div>

              {/* Email */}
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  className="mt-2 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#faa307]"
                  required
                />
              </div>

              {/* Password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  className="mt-2 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#faa307]"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  className="mt-2 w-full rounded-lg bg-gray-200 px-4 py-2 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-[#faa307]"
                  required
                />
              </div>

              {/* Terms and Conditions */}
              <div className="col-span-6">
                <label htmlFor="Terms" className="flex gap-2">
                  <input
                    type="checkbox"
                    id="Terms"
                    name="terms"
                    className="h-5 w-5 rounded border-gray-200 bg-gray-200 text-[#faa307] focus:ring-[#faa307]"
                    required
                  />
                  <span className="text-sm text-gray-300">
                    I agree to the{" "}
                    <a href="#" className="text-[#faa307] underline">
                      terms and conditions
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block w-full shrink-0 rounded-md border border-[#faa307] bg-[#faa307] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#faa307] focus:outline-none focus:ring-2 focus:ring-[#faa307] sm:w-auto"
                >
                  Create an Account
                </button>
                <p className="mt-4 text-sm text-gray-300 sm:mt-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#faa307] underline">
                    Log in
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}
