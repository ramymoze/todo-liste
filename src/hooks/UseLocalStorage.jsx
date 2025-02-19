const UseLocalStorage = (key, initialValue) => {
  const setItem = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getItem = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  };

  const removeItem = () => {
    localStorage.removeItem(key);
  };

  return { setItem, getItem, removeItem };
};

export default UseLocalStorage;