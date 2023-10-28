

export default function SignInButton(){

    let auth = localStorage.getItem("authkey").length
    function handleClick(){
        if (auth > 0){
            console.log('auth reset')
            localStorage.setItem("authkey", '')
        }
    }
    return (
        <div onClick = {() => handleClick()}>
            <a href = {"/Register"}>
                <button class="ml-24 text-3xl w-[200px] font-bold bg-black h-[70px] my-3 flex items-center justify-center rounded-xl cursor-pointer absolute overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#009b49] before:to-[rgb(105,184,141)] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
                {auth === 0 ? 'Register': "Logged in"}
                </button>
            </a>
        </div>
    )
}