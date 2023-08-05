import Login from "../components/Login";
import edificio from "../assets/edificio.png";
function App() {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="relative sm:w-[90%]  flex justify-center">
          <div className="flex flex-col sm:flex-row max-w-[55rem] shadow-md shadow-black">
            <div className="w-[50%] hidden sm:block">
              <img src={edificio} alt="" />
            </div>
            <div className="max-sm:w-[17rem] max-sm:h-[23rem]  sm:w-[50%] ">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
