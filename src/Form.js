import React from "react";

const Form = () => {
  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;
