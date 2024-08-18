import { FunctionComponent } from "react";

interface SpendingProps {
    
}
 
const Spending: FunctionComponent<SpendingProps> = () => {
    return (
        <div className="flex flex-col items-center max-w-[800px] w-full h-[420px] p-4 box-border bg-neutral-very-pale-orange rounded-xl">
            <h1 className="text-xl font-dm-sans font-bold">Spending - Last 7 days</h1>
            <p className="font-dm-sans text-xs">
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
    );
}
 
export default Spending;