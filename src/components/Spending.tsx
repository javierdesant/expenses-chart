import { FunctionComponent } from "react";

interface SpendingProps {
    
}
 
const Spending: FunctionComponent<SpendingProps> = () => {
    return (
        <div className="flex flex-col max-w-[800px] w-full h-[420px] p-4 box-border bg-neutral-very-pale-orange rounded-xl">
            <div className="w-11/12 self-center">
                <h1 className="text-xl font-dm-sans font-bold text-neutral-dark-brown">Spending - Last 7 days</h1>
                <p className="font-dm-sans text-xs">
                    mon
                    tue
                    wed
                    thu
                    fri
                    sat
                    sun 
                </p>
            </div>
            <hr className="my-4 w-11/12 border-neutral-light-brown self-center" />
            <div className="flex flex-col font-dm-sans w-11/12 self-center">
                <p className="text-neutral-medium-brown mb-2">
                    Total this month
                </p>
                <div className="flex justify-between">
                    <h1 className=" text-left text-5xl font-bold text-neutral-dark-brown">
                        $478.33
                    </h1>
                    <div>
                        <h6 className=" text-right font-bold text-neutral-dark-brown">
                            +2.4% 
                        </h6>
                        <p className=" text-right text-neutral-medium-brown">
                            from last month
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Spending;