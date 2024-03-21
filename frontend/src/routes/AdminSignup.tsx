import AdminSignupInt from "../components/AdminSignup";
import Quote from "../components/Quote";


export function AdminSignup(){

    return <div className="grid grid-cols-1 lg:grid-cols-2">
    <div className="">
    <AdminSignupInt/>
     </div>
    <div className="hidden lg:block ">
        <Quote></Quote>

    </div>
</div>
}