import { useState } from "react";
import initialData from "../../data.json";
import { chartData } from "../types";



export default function useChart() {
    const [data] = useState<chartData[]>(initialData);
    
    // const weekTotal = data.reduce((acc, item) => acc + item.amount, 0);
    const weekMaxExpenses = Math.max(...data.map(item => item.amount));
        
    const chartHeight = ( amount: number ) => { 
        if (!amount) return "0%";
        return `${amount / weekMaxExpenses * 100}%`;
    }
    
    const isBarBlue = (day: string): boolean => {
        const weekday = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
        return weekday[new Date().getDay()] === day;
    }

    return { data, chartHeight, isBarBlue }
}