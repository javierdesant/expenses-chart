import { FunctionComponent } from "react";

interface SpendingProps {
    
}
 
const Spending: FunctionComponent<SpendingProps> = () => {
    return (
        <div className="flex">
            <div className=" bg-neutral-very-pale-orange h-60 w-96 mx-auto bg border-solid border-2 border-black">
                <p className="font-dm-sans text-xs">
                    Spending - Last 7 days
                    <br />
                    mon
                    tue
                    wed
                    thu
                    fri
                    sat
                    sun
                    
                    Total this month
                    $478.33
                    
                    +2.4% from last month
                </p>
            </div>
        </div>
    );
}
 
export default Spending;