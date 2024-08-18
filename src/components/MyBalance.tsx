import { FunctionComponent } from "react";
import logo from '../assets/logo.svg';

interface MyBalanceProps {}

const MyBalance: FunctionComponent<MyBalanceProps> = () => {
    return (
        <div className="flex justify-between items-center max-w-[450px] w-full h-[100px] 
            p-7 box-border bg-primary-soft-red rounded-xl"
        >
            <div className="flex flex-col justify-center text-white font-dm-sans">
                <p className="text-base">My balance</p>
                <p className="text-2xl font-bold">$921.48</p>
            </div>
            <img src={logo} alt="Logo" className="w-16" />
        </div>
    );
}

export default MyBalance;