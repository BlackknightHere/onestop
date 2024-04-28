export default function Home() {

  return (
    <main>
      <form 
      action="/profile" 
      className="flex flex-col ">
        <input
          type="text"
          id="stuid"
          name="stuid"
          placeholder="Student ID"
          maxLength={12}
          required
          className="text-center text-black bg-gray-100 mt-20 mx-8 p-4 rounded-xl"
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required
          className="text-center bg-gray-100 mt-4 p-4 px-14 mx-8 rounded-xl"
        />
        <label className="flex mb-6 mx-8 mt-2">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="mr-2 bg-yellow-300" //ทำยังไงให้ check box เปลี่ยนสี
          />
          <p className="flex text-xs">
            Remember Me
          </p>
          <p className="italic flex text-xs ml-auto text-yellow-400 ">
            Forget Password ?
          </p>
        </label>
        <button type="submit" className="text-center text-white font-bold bg-yellow-400 p-3 px-14 mx-10 mt-6 rounded-xl" >
          LOGIN
        </button>
        <p className="text-center mt-4">join TU Community <a className="text-yellow-400 italic underline">Apply Now</a></p>
        <div>
          <img src='https://tu.ac.th/uploads//main-logo.svg' width={368} height={80} className="mx-3 mt-5" />
        </div>
      </form>
    </main>
  );
}