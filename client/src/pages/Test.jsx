import React, { useState } from "react";

const Test = () => {
  const [password, setPassword] = useState(false);
  const handlePassword = () => {
    setPassword(!password);
  };
  return (
    <>
      <input type={password ? "password" : "text"} />
      {password ? (
        <i class="fa-solid fa-lock " onClick={handlePassword}></i>
      ) : (
        <i class="fa-solid fa-unlock" onClick={handlePassword}></i>
      )}
    </>
  );
};

export default Test;
