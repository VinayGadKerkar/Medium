import Quote from "../components/Quote";
import SigninInt from "../components/SigninInt";

export function Signin() {
    return <div className="grid grid-cols-1 lg:grid-cols-2">
        <SigninInt></SigninInt>
        <div className="hidden lg:block">
            <Quote></Quote>

        </div>
    </div>
}