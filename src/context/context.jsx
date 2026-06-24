import { useState, useEffect, useContext, createContext } from "react";

const Moviecontext = createContext();

export const usemoviecontext = () => useContext(Moviecontext);

export const Movieprovider = ({ children }) => {
  const [fav, setfav] = useState([]);

  useEffect(() => {
    const getfav = localStorage.getItem("fav");
    if (getfav) setfav(JSON.parse(getfav));
  }, []);

  useEffect(() => {
    localStorage.setItem("fav", JSON.stringify(fav));
  }, [fav]);

  const isfav = (movieid) => {
    return fav.some((movie) => movie.id === movieid);
  };

  const addfav = (movie) => {
    return setfav((prev) => [...prev, movie]);
  };

  const remfav = (movieid) => {
    return setfav((prev) => prev.filter((movie) => movie.id !== movieid));
  };

  const value = { fav, isfav, addfav, remfav };

  return (    
    <Moviecontext.Provider value={value}>{children}</Moviecontext.Provider>
  );
};