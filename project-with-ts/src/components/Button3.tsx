type ButtonProps = {
  children: React.ReactNode;
  //   children: React.JSX.Element; // for jsx like <div></div> etc.
};
function Button3({ children }: ButtonProps) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}
export default Button3;
