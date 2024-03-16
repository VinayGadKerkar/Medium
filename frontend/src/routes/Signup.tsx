import Quote from "../components/Quote";
import SignupInt from "../components/SignupInt";


export function Signup() {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="">
        <SignupInt></SignupInt>
         </div>
        <div className="hidden lg:block ">
            <Quote></Quote>

        </div>
    </div>
}