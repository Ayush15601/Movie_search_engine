import { useState, useEffect, useContext, createContext } from "react";

const Moviecontext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext = () => useContext(Moviecontext);

export const Movieprovider = ({ children }) => {
  const [fav, setfav] = useState(() => {
    const stored = localStorage.getItem("fav");
    return stored ? JSON.parse(stored) : [];
  });

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