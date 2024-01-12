import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { signInBg } from "../../data/data";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../../components/footer/Footer";


export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const signIn = async (e) => {
    e.preventDefault()
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      user && navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <>
      <Navbar />
      <section className="lg:flex lg:justify-between lg:items-center">
        <div className="flex justify-center py-32 lg:p-0 lg:w-full">
          <div className="w-[80vw] sm:w-1/2 max-w-[400px]">
            <h1 className="text-[1.5rem] font-bold mb-6"> SIGN IN </h1>
            <form className="flex flex-col gap-3">
              <input
                className="pb-2 outline-none border-b-2 border-gray-300 hover:border-gray-400
                focus:border-gray-500"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="pb-2 outline-none border-b-2 border-gray-300 hover:border-gray-400
                focus:border-gray-500"
                type="password"
                name="pasword"
                id="pasword"
                placeholder="Password"
                required
              />
              <button
                className="bg-gray-200 rounded font-semibold py-2 hover:bg-gray-300"
                onClick={signIn}
                type="submit"
              >
                SIGN IN
              </button>
              <button
                className="border-2 border-blue-400 rounded text-blue-400 font-semibold py-2
                hover:bg-blue-400 hover:text-white transition"
                onClick={() => navigate('/sign-up')}
              >
                CREATE ACCOUNT
              </button>
            </form>
            <a className="flex justify-center cursor-pointer hover:underline mt-6">Forgot password?</a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-full">
          <img src={signInBg} alt="SIGN IN IMAGE" />
        </div>
      </section>
      <Footer />
    </>
  );
}
