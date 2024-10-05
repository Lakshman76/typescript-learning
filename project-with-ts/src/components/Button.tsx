type Color = "red" | "green" | "blue" | "yellow" | "black" | "white";
type ButtonProps = {
  //backgroundColor: string; // or
  //   backgroundColor: "red" | "green" | "blue"; // or
  backgroundColor: Color;
  fontSize: number;
  textColor: Color;
  padding: [number, number, number, number];
};
function AnotherButton({
  backgroundColor,
  fontSize,
  textColor,
  padding,
}: ButtonProps) {
  return (
    <>
      <button
        style={{
          backgroundColor: backgroundColor,
          fontSize: fontSize,
          color: textColor,
          padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        }}
      >
        click me also
      </button>
    </>
  );
}
export default AnotherButton;
