const Login = () => {
  return (
    <>
      <div
        className="w-full h-full 
      border flex bg-blue-200 
      justify-center items-center"
      >
        <div>
          <h2 className="text-slate-700 mb-10 font-sans text-xl font-bold">
            Login...
          </h2>
          <form action="" className="w-[60%] min-w-[10rem] flex flex-col gap-4">
            <input
              type="text"
              placeholder="nombre"
              className="outline-none text-black
           bg-blue-200 border-b-2 border-slate-500"
            />
            <input
              type="password"
              placeholder="contraseña"
              className="outline-none text-black
             bg-blue-200 border-b-2 border-slate-500"
            />
            <input
              className="rounded bg-blue-400 hover:bg-blue-300"
              type="submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
