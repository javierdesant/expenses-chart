import { FunctionComponent } from "react";
import logo from '../assets/logo.svg';
import { formatCurrency } from "../helpers";

interface MyBalanceProps {
    balance: number
}

const MyBalance: FunctionComponent<MyBalanceProps> = ({ balance }) => {
    return (
        <div className="flex justify-between items-center max-w-[450px] min-w-[340px] w-full h-[100px] 
            p-7 box-border bg-primary-soft-red rounded-xl"
        >
            <div className="flex flex-col justify-center text-white font-dm-sans">
                <p className="text-base">My balance</p>
                <p className="text-2xl font-bold">{formatCurrency(balance)}</p>
            </div>
            <img src={logo} alt="Logo" className="w-16" />
        </div>
    );
}

export default MyBalance;