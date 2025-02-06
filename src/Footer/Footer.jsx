export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-xl pt-10 pb-6 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center text-[#faa307] sm:justify-start">
            <h1 className="text-2xl font-bold">FitLife</h1>
          </div>

         
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 border-t-2 border-[#faa307] pt-16 md:grid-cols-4 lg:grid-cols-6">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-[#faa307]">About Us</p>

            <ul className="mt-8 space-y-4 text-sm text-gray-300">
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Programmes
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  About Programmes
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Workouts
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Personal Training
                </a>
              </li>
            </ul>
          </div>

        

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-[#faa307]">Resources</p>

            <ul className="mt-8 space-y-4 text-sm text-gray-300">
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Online Guides
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Conference Notes
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Forum
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Downloads
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Upcoming Events
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-[#faa307]">Helpful Links</p>

            <ul className="mt-8 space-y-4 text-sm text-gray-300">
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  FAQs
                </a>
              </li>
              <li>
                <a className="hover:text-[#faa307]" href="#">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left md:col-span-4 lg:col-span-2">
            <p className="text-lg font-medium text-[#faa307]">Contact</p>

            <div className="mx-auto mt-5 max-w-md sm:ms-0">
           

              <form >
                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <input
                    className="w-full rounded-full bg-white/10 px-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#faa307]"
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />

                  <button
                    className="block rounded-full bg-[#faa307] px-5 py-2 font-medium text-white transition-colors border border-[#faa307] hover:bg-transparent hover:text-[#faa307]"
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t-2 flex flex-col border-[#faa307] pt-6 sm:flex sm:items-center sm:justify-between">
          <p className=" text-sm text-gray-300 sm:text-left">
            <span className='text-[#faa307]'>Copyright  </span>; 2025. All rights reserved.
          
          </p>
        </div>
      </div>
    </footer>
  );
}