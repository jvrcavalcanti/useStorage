function useStoreage() {
  update()

  function update() {
    Object.keys(localStorage).forEach(key => {
      const item = get(key);
  
      if (item.expires < Date.now()) {
        localStorage.removeItem(key);
      }
    });
  }

  function get(key) {
    update();
    return JSON.parse(localStorage.getItem(key));
  }

  function set(key, data, expires = 3600000) {
    update();
    localStorage.setItem(key, JSON.stringify({
      expires: Date.now() + expires,
      data
    }));
  }

  return {
    get,
    set,
    update
  };
}

module.exports = {
  useStoreage
};