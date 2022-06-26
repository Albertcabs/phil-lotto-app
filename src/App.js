import { Outlet, NavLink } from "react-router-dom";
import LottoLists from "./Components/LottoList/LottoLists";
import Img_PCSO from "./Components/image/Img_PCSO.png";
function App() {
      return (
            <div className="w-screen p-0 m-0 flex ">
                  <div className="w-20 h-screen flex flex-col  text-center text-white text-sm bg-slate-800 ">
                        <img
                              src={Img_PCSO}
                              alt="PCSO ICON"
                              width={40}
                              height={40}
                              className=" py-5 bg-slate-800  mx-auto  "
                        />
                        {LottoLists().map((lists) => (
                              <NavLink
                                    key={lists.id}
                                    to={`/${lists.path}`}
                                    className={({ isActive }) =>
                                          isActive
                                                ? " text-green-500 bg-slate-700 py-6 border-r-2 border-green-500"
                                                : " py-6  w-full  "
                                    }
                              >
                                    {lists.title}
                              </NavLink>
                        ))}
                  </div>

                  <main className="w-11/12 border border-yellow-500">
                        <Outlet />
                  </main>
            </div>
      );
}

export default App;
