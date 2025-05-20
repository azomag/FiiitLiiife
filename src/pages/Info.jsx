import { Dumbbell, ShoppingCart, User, HeartPulse, Mail, Phone } from "lucide-react";

export default function Info() {
  return (
    <div className="min-h-screen pt-40 bg-black flex flex-col items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full bg-zinc-900/90 rounded-2xl shadow-2xl border border-[#faa307] p-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#faa307] mb-4 text-center tracking-tight">
          Welcome to <span className="text-white">FiitLife</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 text-center">
          Your all-in-one fitness companion. We empower you to achieve your health and fitness goals with the best tools, expert guidance, and a supportive community.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="flex items-start gap-4">
            <Dumbbell className="text-[#faa307] w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Personalized Workouts</h2>
              <p className="text-gray-400 text-sm">
                Access a variety of workout programs tailored to your fitness level and goals, from strength training to cardio and flexibility.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ShoppingCart className="text-[#faa307] w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Quality Equipment & Supplements</h2>
              <p className="text-gray-400 text-sm">
                Shop top-quality fitness equipment and premium supplements. Enjoy a seamless shopping experience with a persistent cart.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <User className="text-[#faa307] w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Expert Trainers</h2>
              <p className="text-gray-400 text-sm">
                Connect with certified personal trainers for guidance, motivation, and custom plans to maximize your results.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <HeartPulse className="text-[#faa307] w-8 h-8 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-bold text-white mb-1">Track Your Progress</h2>
              <p className="text-gray-400 text-sm">
                Monitor your workouts, nutrition, and achievements. Stay motivated as you see your progress over time.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-[#faa307] pt-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-[#faa307] mb-2">Contact Us</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#faa307]" />
              <a href="mailto:support@fiitlife.com" className="hover:underline text-[#faa307]">support@fiitlife.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#faa307]" />
              <a href="tel:+1234567890" className="hover:underline text-[#faa307]">+1 234 567 890</a>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-500">
            &copy; {new Date().getFullYear()} FiitLife. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
