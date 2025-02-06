
import img from "../assets/p4.jpg";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section className="min-h-screen bg-black">
      <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
       
        

        {/* Right Section (Form) */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="w-full max-w-xl lg:max-w-3xl">
            <h1 className="text-center text-3xl font-medium text-[#faa307] mb-10">
              Log in to Your Account
            </h1>
            <form className="grid grid-cols-6 gap-6">
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
              <div className="col-span-6">
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

              {/* Remember Me */}
              <div className="col-span-6">
                <label htmlFor="RememberMe" className="flex gap-2">
                  <input
                    type="checkbox"
                    id="RememberMe"
                    name="remember_me"
                    className="h-5 w-5 rounded border-gray-200 bg-gray-200 text-[#faa307] focus:ring-[#faa307]"
                  />
                  <span className="text-sm text-gray-300">Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block w-full shrink-0 rounded-md border border-[#faa307] bg-[#faa307] px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-[#faa307] focus:outline-none focus:ring-2 focus:ring-[#faa307] sm:w-auto"
                >
                  Log in
                </button>
                <p className="mt-4 text-sm text-gray-300 sm:mt-0">
                  Don’t have an account?{" "}
                  <Link to="/signup" className="text-[#faa307] underline">
                    Sign up
                  </Link>
                  .
                </p>
              </div>

              {/* Forgot Password */}
              <div className="col-span-6 text-center">
                <a href="#" className="text-sm text-[#faa307] underline">
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </main>
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            src={img}
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
         
        </section>
      </div>
    </section>
  );
}