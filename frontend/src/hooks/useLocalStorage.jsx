"use client";

const useLocalStorage = () => {
  const setLocalStorage = (value, key) => {
    if (typeof window !== "undefined" && window.localStorage)
      localStorage.setItem(key, JSON.stringify(value));
  };

  const getLocalStorage = (key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const value = localStorage.getItem(key);
      if (value) return JSON.parse(value);
    }
    return null;
  };

  const updateLocalStorage = (value, key) => {
    if (typeof window !== "undefined" && window.localStorage) {
      const oldData = getLocalStorage();
      const newData = { ...oldData, ...value };
      setLocalStorage(newData, key);
    }
  };

  return {
    setLocalStorage,
    getLocalStorage,
    updateLocalStorage,
  };
};

export default useLocalStorage;
