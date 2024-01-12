import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { signUpBg } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Footer from "../../components/footer/Footer";

export default function SignUpPage() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Create User
  const registerWithEmail = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password, confirmPassword);
      // Sign in
      const user = result.user;
      await updateProfile(user, { displayName: name });
      user && navigate('/');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-center py-28 lg:p-0 lg:w-full">
          <div className="w-[80vw] sm:w-1/2 max-w-[400px]">
            <h1 className="text-[1.5rem] font-bold mb-6"> CREATE AN ACCOUNT AND LET'S GET STARTED </h1>
            <form className="flex flex-col gap-3">
              <input
                className="pb-2 outline-none border-b-2 border-gray-300 hover:border-gray-400
                focus:border-gray-500"
                onChange={e => setName(e.target.value)}
                type="text"
                name="name" id="name" placeholder="Name"
                required
              />
              <input
                className="pb-2 outline-none border-b-2 border-gray-300 hover:border-gray-400
                focus:border-gray-500"
                onChange={e => setEmail(e.target.value)}
                type="email"
                name="email" id="email" placeholder="Email"
                required
              />
              <input
                className="pb-2 outline-none border-b-2 border-gray-300 hover:border-gray-400
                focus:border-gray-500"
                onChange={e => setPassword(e.target.value)}
                type="password"
                name="pasword" id="pasword" placeholder="Password"
                required
              />
              <input
                className="pb-2 outline-none border-b-2 border-gray-300 hover:border-gray-400
                focus:border-gray-500"
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
                name="confirm-password" id="confirm-password" placeholder="Confirm password"
                required
              />
              <button
                className="bg-gray-200 rounded font-semibold py-2 hover:bg-gray-300"
                onClick={registerWithEmail}
                type="submit"
              >
                CREATE
              </button>
              <button
                className="border-2 border-blue-400 rounded text-blue-400 font-semibold py-2
              hover:bg-blue-400 hover:text-white transition"
                onClick={() => navigate('/sign-in')}
              >
                I ALREADY HAVE AN ACCOUNT
              </button>
            </form>
          </div>
        </div>

        <div className="hidden lg:block lg:w-full">
          <img src={signUpBg} alt="REGISTER IMAGE" />
        </div>
      </section>
      <Footer />
    </>
  );
}
