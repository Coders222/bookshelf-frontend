import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [pswd, setPswd] = useState("");
  const navigate = useNavigate()
  function onSubmit() {
    if (email === "" || pswd === "") {
      console.log("Incomplete fields");
    } else {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email,
                password: pswd,
              })
        };
      fetch("http://localhost:5000/account/login", requestOptions).then((res) => {
        console.log(res);
        if(res != undefined){
            res.json().then((authkey)=>{
                console.log(authkey)
                if(authkey == undefined) {

                }
                localStorage.setItem("authkey", JSON.stringify(authkey));
                
                navigate("/")
            })    
        }
      }).catch(()=>{
        "cant login"
        navigate("/")
      });
    }
  }

  return (
    <div className = "bg-slate-700 h-full">
      
      <div className="content-center justify-center flex min-h-[calc(100vh-4rem)]">
        <div class= "shadow-2xl bg-[#111827] text-white rounded-3xl p-8 w-3/5 md:w-2/5 lg:w-1/3 lg:p-16  m-auto">
          <h1 class="text-center font-bold text-3xl">
            Sign in
          </h1>
          <div className ="grid grid-rows-2 gap-8 text-md xl:text-xl xl:px-16">
            <div>
              <label
                class="px-2 py-2 font-sans text-lg"
              >
                Email
              </label>
              <input
                value={email}
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="Lebron"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                class="px-2 py-2 font-sans text-lg"
              >
                Password
              </label>
              <input
                type="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2"
                placeholder="James"
                onChange={(e) => setPswd(e.target.value)}
                value={pswd}
                required
              />
            </div>
          </div>
          <div class="grid grid-rows-3 justify-items-center mt-4">
            <div class="self-center">
              <button
                type="submit"
                onClick={() => onSubmit()}
                class="text-md lg:text-xl self-center rounded-lg bg-indigo-600 px-8 py-4 md:px-16 md:py-5 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div class="flex items-start mb-5">
              <a href="/#/PasswordReset">
                <p class="text-blue-400 md:text-lg xl:text-xl"> Forgot password? </p>
              </a>
            </div>
            <div class="mt-10">
              <p class="text-center text-sm md:text-md lg:text-lg xl:text-xl">
                Not a member?&nbsp;
                <br></br>
                <a href="/Register" class="text-blue-400">
                  Register now
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
