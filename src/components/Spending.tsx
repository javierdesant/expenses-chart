import { FunctionComponent } from "react";
import type { chartData } from '../types';
import { formatCurrency } from "../helpers";
import useChart from "../hooks/useChart";

interface SpendingProps {
    data: chartData[]
    monthExpenses: number
}

const Spending: FunctionComponent<SpendingProps> = ({ data, monthExpenses }) => {
    
    const { chartHeight, isBarBlue } = useChart();

    return (

        <div className="flex flex-col max-w-[450px] min-w-[340px] w-full h-[420px] py-7 p-2 box-border bg-neutral-very-pale-orange rounded-xl">
            <div className="w-11/12 h-full self-center">

                <h1 className="text-2xl text-left font-dm-sans font-bold text-neutral-dark-brown mb-7">Spending - Last 7 days</h1>
                
                <div className="flex flex-col h-full">
                    <div className="h-36 w-full flex items-end space-x-3 my-3">
                        {data.map((item: chartData) => (
                            <div 
                                key={item.day} 
                                className={`flex-1 rounded-sm`} 
                                style={{ height: `${chartHeight(item.amount)}`, backgroundColor: isBarBlue(item.day) ? '#76b5bc' : '#ec775f' }}
                            ></div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-2 text-xs text-neutral-medium-brown">
                        {data.map((item: chartData) => (
                            <span key={item.day} className="flex justify-center">{item.day}</span>
                        ))}
                    </div>
                </div>
            </div>

            <hr className="w-11/12 mt-2 border-neutral-light-brown self-center" />

            <div className="flex flex-col font-dm-sans w-11/12 self-center">
                <div className="grid grid-cols-2 grid-rows-4 items-end">
                    <div></div>
                    <p className=" col-span-2 text-neutral-medium-brown">Total this month</p>
                    <h1 className=" row-span-2 text-left text-4xl font-bold text-neutral-dark-brown">
                        {formatCurrency(monthExpenses)}
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