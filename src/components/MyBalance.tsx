import { FunctionComponent } from "react";

interface MyBalanceProps {
    
}
 
const MyBalance: FunctionComponent<MyBalanceProps> = () => {
    return (
        <div className="flex">
            <div className="h-28 w-96 mx-auto bg border-solid border-2 border-black">
                <p className="font-dm-sans text-xs">My balance</p>
                <p className="font-dm-sans font-bold">$921.48</p>
            </div>
        </div>
    );
}
 
export default MyBalance;