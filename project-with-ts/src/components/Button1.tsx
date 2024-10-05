import React from "react";

type ButtonProps = {
  // style: {
  //   backgroundColor: string;
  //   fontSize: number;
  //   color: string;
  // };
  // or
  style: React.CSSProperties;
};

function Button({ style }: ButtonProps) {
  return (
    <>
      <button style={style}>Click me</button>
    </>
  );
}

export default Button;
