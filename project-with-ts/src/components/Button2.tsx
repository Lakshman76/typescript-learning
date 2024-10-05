type ButtonProps = {
  borderRadius: Record<string, number>;
};
function Button2({ borderRadius }: ButtonProps) {
  return (
    <>
      <button style={borderRadius}>click me</button>
    </>
  );
}
export default Button2;
