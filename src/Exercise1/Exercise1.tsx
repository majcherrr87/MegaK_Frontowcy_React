export const Exercise1 = () => {
  const handleClick = () => {
    console.log("Click");
  };

  const handleMouseEnter = () => {
    console.log("Hoder");
  };
  const handleMouseLeave = () => {
    console.log("Leave");
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Hover
      </button>
    </>
  );
};
