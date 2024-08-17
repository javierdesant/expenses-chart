import { FunctionComponent } from "react";
import logo from '../assets/logo.svg';

interface MyBalanceProps {
    
}
 
const MyBalance: FunctionComponent<MyBalanceProps> = () => {
    return (
        <div className="flex justify-between items-center h-auto w-auto mx-auto bg-primary-soft-red rounded-xl">
            <div className="flex flex-col mx-5 text-white font-dm-sans">
                    <p className=" text-xs my-1">My balance</p>
                    <p className=" text-xl font-bold">$921.48</p>
            </div>
            <img src={logo} alt="Logo" className="w-10 h-10 m-4" />
        </div>
    );
}
 
export default MyBalance;