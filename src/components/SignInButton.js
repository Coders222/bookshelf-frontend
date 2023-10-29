

export default function SignInButton(){

    let auth = localStorage.getItem("authkey") == null || localStorage.getItem("authkey").length > 0
    function handleClick(){
        if (auth){
            console.log('auth reset')
            localStorage.setItem("authkey", '')
        }
    }
    return (
        <div onClick = {() => handleClick()}>
            <a href = {"/Register"}>
                <button class="select-none ml-24 text-3xl w-[175px] font-bold bg-[#111942] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer absolute overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-100 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#111942] before:to-[#32b6e8] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#32b6e8]">
                {!auth ? 'Register': "Log out"}
                </button>
            </a>
        </div>
    )
}  