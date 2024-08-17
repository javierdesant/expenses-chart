import MyBalance from "./components/MyBalance"
import Spending from "./components/Spending"

function App() {

  return (
    <>
      <div>

        <MyBalance />

        <Spending />

        <div className="attribution text-center mt-5 text-xs font">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="hover:underline">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/javierdesant" className="hover:underline">JavierDeSant</a>.
        </div>  

      </div>
    </>
  )
}

export default App
