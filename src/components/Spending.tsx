import { FunctionComponent } from "react";

interface SpendingProps {
    
}
 
const Spending: FunctionComponent<SpendingProps> = () => {
    return (
        <div className="flex flex-col max-w-[450px] min-w-[340px] w-full h-[420px] py-7 p-2 box-border bg-neutral-very-pale-orange rounded-xl">
            <div className="w-11/12 h-full self-center">

                <h1 className="text-2xl text-left font-dm-sans font-bold text-neutral-dark-brown mb-7">Spending - Last 7 days</h1>
                
                <div className="flex flex-col h-full">
                    <div className="h-36 w-full flex items-end space-x-3 my-3">
                        <div className="flex-1 h-1/2 bg-primary-soft-red rounded-sm "></div>
                        <div className="flex-1 h-1/4 bg-primary-soft-red rounded-sm "></div>
                        <div className="flex-1 h-3/4 bg-primary-soft-red rounded-sm "></div>
                        <div className="flex-1 h-3/5 bg-primary-soft-red rounded-sm "></div>
                        <div className="flex-1 h-4/5 bg-primary-soft-red rounded-sm "></div>
                        <div className="flex-1 h-1/5 bg-primary-soft-red rounded-sm "></div>
                        <div className="flex-1 h-full bg-primary-soft-red rounded-sm "></div>
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-xs text-neutral-medium-brown">
                        <span className="flex justify-center">mon</span>
                        <span className="flex justify-center">tue</span>
                        <span className="flex justify-center">wed</span>
                        <span className="flex justify-center">thu</span>
                        <span className="flex justify-center">fri</span>
                        <span className="flex justify-center">sat</span>
                        <span className="flex justify-center">sun</span>
                    </div>
                </div>
            </div>

            <hr className="w-11/12 mt-2 border-neutral-light-brown self-center" />

            <div className="flex flex-col font-dm-sans w-11/12 self-center">
                <div className="grid grid-cols-2 grid-rows-4 items-end">
                    <div></div>
                    <p className=" col-span-2 text-neutral-medium-brown">Total this month</p>
                    <h1 className=" row-span-2 text-left text-4xl font-bold text-neutral-dark-brown">
                        $478.33
                    </h1>
                    <div className="row-span-2 text-right">
                        <h6 className="font-bold text-neutral-dark-brown">+2.4%</h6>
                        <p className="text-neutral-medium-brown">from last month</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Spending;