import { FunctionComponent } from "react";

interface SpendingProps {
    
}
 
const Spending: FunctionComponent<SpendingProps> = () => {
    return ( 

        <div>
            Spending - Last 7 days

            mon
            tue
            wed
            thu
            fri
            sat
            sun

            Total this month
            $478.33

            +2.4%
            from last month
        </div>
        
     );
}
 
export default Spending;