import MyBalance from "./components/MyBalance"
import Spending from "./components/Spending"
import chartData from "../data.json"

function App() {

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center m-4">

        <MyBalance 
          balance={921.48}
        />
        <div className="m-2"></div>
        <Spending 
          data={chartData}
          monthExpenses={478.33}
        />
        
        <div className="attribution text-center mt-4 text-xs">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:underline">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/javierdesant" className="hover:underline">JavierDeSant</a>.
        </div>

      </div>
    
    </>

  )
}

export default App
