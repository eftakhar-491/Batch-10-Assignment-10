import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { firebaseContest } from "../../Context/FirebaseContext";
import { stateContext } from "../../Context/StateContext";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";
export default function Nav() {
  const { userSignOut } = useContext(firebaseContest);
  const { setTheme, user, theme } = useContext(stateContext);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  function handelLogout() {
    userSignOut()
      .then(() => {
        toast("Log out success");
      })
      .catch(() => {
        toast.error("try again with a reload");
      });
  }
  const DrawerList = (
    <Box
      className={`${theme ? "text-white bg-black" : "text-black bg-white"}`}
      sx={{ width: "200px", height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        <Link to={"/"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"/all-visas"}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"All Visas"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"/add-visa"} state={{ his: "/add-visa" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"Add Visa"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to={"/my-added-visa"} state={{ his: "/my-added-visa" }}>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"My Added Visa"} />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link
          to={"/my-visa-application"}
          state={{ his: "/my-visa-application" }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary={"My-Visa Application"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <nav className="text-sm">
      <div className="flex w-11/12 lg:w-4/5 mx-auto justify-between items-center py-2">
        <h1
          className={`text-[16px] md:text-2xl font-bold font-pacifico ${
            theme ? "text-white" : "text-black"
          } flex items-center cursor-pointer`}
        >
          <div className=" xl:hidden">
            <Button onClick={toggleDrawer(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`${theme ? "text-white" : "text-black"} size-6`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
          <Link to={"/"}>Visa's Palace</Link>
        </h1>

        <ul
          className={`${
            theme ? "text-white" : ""
          } hidden xl:flex items-center gap-4 font-semibold`}
        >
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "rounded-md bg-slate-200 text-black" : ""
            }
          >
            <li className="px-3 py-1">Home</li>
          </NavLink>
          <NavLink
            to={"/all-visas"}
            className={({ isActive }) =>
              isActive ? "rounded-md bg-slate-300 text-black" : ""
            }
          >
            <li className="px-3 py-1">All visas</li>
          </NavLink>
          <NavLink
            to={"/add-visa"}
            state={{ his: "/add-visa" }}
            className={({ isActive }) =>
              isActive ? "rounded-md bg-slate-300 text-black" : ""
            }
          >
            <li className="px-3 py-1">Add Visa</li>
          </NavLink>
          <NavLink
            state={{ his: "/my-added-visa" }}
            to={"/my-added-visa"}
            className={({ isActive }) =>
              isActive ? "rounded-md bg-slate-300 text-black" : ""
            }
          >
            <li className="px-3 py-1">My added visas</li>
          </NavLink>
          <NavLink
            state={{ his: "/my-visa-application" }}
            to={"/my-visa-application"}
            className={({ isActive }) =>
              isActive ? "rounded-md bg-slate-300 text-black" : ""
            }
          >
            <li className="px-3 py-1">My Visa applications</li>
          </NavLink>
        </ul>
        {/* darkMood */}
        <div className="flex gap-6 items-center">
          <div className="flex items-center -mr-9 md:m-0 scale-50 md:scale-75 cursor-pointer">
            <label className="inline-flex items-center relative cursor-pointer">
              <input
                onClick={() => {
                  setTheme((pre) => (pre ? false : true));
                }}
                checked={theme}
                className="peer hidden"
                id="toggle"
                type="checkbox"
              />
              <div className="cursor-pointer relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"></div>
              <svg
                height="0"
                width="100"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px] cursor-pointer`}
              >
                <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
              </svg>
              <svg
                height="512"
                width="512"
                viewBox="0 0 24 24"
                data-name="Layer 1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                className={`cursor-pointer fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]`}
              >
                <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
              </svg>
            </label>
          </div>
          {user ? (
            <div onClick={handelLogout} className="hidden md:flex items-center">
              <div className="flex items-center justify-center">
                <div className="relative group flex-shrink-0">
                  <button className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                    <span
                      className={`relative z-10 block px-6 py-2 rounded-xl bg-gray-950 ${
                        theme ? "bg-black" : "bg-white text-black"
                      } `}
                    >
                      <div className="relative z-10 flex items-center space-x-2">
                        <span className="transition-all duration-500 group-hover:translate-x-1">
                          Log Out
                        </span>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="hidden md:flex gap-3 items-center">
              <NavLink to={"/register"}>
                <div className="flex justify-center items-center">
                  <div className="flex items-center justify-center">
                    <div className="relative group flex-shrink-0">
                      <button className=" relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                        <span
                          className={` relative z-10 block px-6 py-2 rounded-xl ${
                            theme ? "bg-black" : "bg-white text-black"
                          } `}
                        >
                          <div className=" relative z-10 flex items-center space-x-2">
                            <span className="w-full transition-all duration-500 group-hover:translate-x-1">
                              Register
                            </span>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </NavLink>
              <NavLink to={"/login"}>
                <div className="flex justify-center items-center">
                  <div className="flex items-center justify-center">
                    <div className="relative group flex-shrink-0">
                      <button className=" relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                        <span
                          className={` relative z-10 block px-6 py-2 rounded-xl ${
                            theme ? "bg-black" : "bg-white text-black"
                          } `}
                        >
                          <div className=" relative z-10 flex items-center space-x-2">
                            <span className="w-full transition-all duration-500 group-hover:translate-x-1">
                              Log In
                            </span>
                          </div>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
          )}
          {/* profile */}
          <div className="relative">
            <p
              className="border-2 w-10 h-10 rounded-full cursor-pointer flex items-center justify-center"
              data-tooltip-id="my-tooltip"
              onClick={() => setMenu((pre) => !pre)}
            >
              {user ? (
                <img className="rounded-full" src={user?.photoURL} alt="" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className={`${theme ? "text-white" : "text-black"} size-10`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </p>
            <Tooltip
              id="my-tooltip"
              content={`${user ? user?.displayName : "Please LogIn"}`}
              place={"bottom"}
            />
            {menu && (
              <div
                className={`absolute md:hidden flex flex-col p-3 z-30 ${
                  theme ? "bg-black text-white" : "bg-slate-300"
                }  right-0 top-14 rounded-md shadow-md w-[130px]`}
              >
                {user ? (
                  <p onClick={handelLogout} className="cursor-pointer">
                    Log Out
                  </p>
                ) : (
                  <div className="flex gap-3  flex-col font-semibold">
                    <NavLink
                      to={"/login"}
                      className={({ isActive }) =>
                        isActive ? "bg-slate-400 w-full py-1 pl-2" : "pl-2 py-1"
                      }
                    >
                      Log In
                    </NavLink>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "bg-slate-400 w-full py-1 pl-2" : "pl-2 py-1"
                      }
                      to={"/register"}
                    >
                      Register
                    </NavLink>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
