import MyBalance from "./components/MyBalance"
import Spending from "./components/Spending"

function App() {

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center m-4">

          <MyBalance />
          <div className="m-2"></div>
          <Spending />
        <div className="attribution text-center mt-4 text-xs">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:underline">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/javierdesant" className="hover:underline">JavierDeSant</a>.
        </div>

      </div>
    
    </>

  )
}

export default App
