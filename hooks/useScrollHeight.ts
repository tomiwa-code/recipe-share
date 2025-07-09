import React from "react";

const useScrollHeight = (scrollHeight: number) => {
  // HOOKS
  const [inRange, setInRange] = React.useState<boolean>(false);
  const [scrollValue, setScrollValue] = React.useState<number>(0);

  // FUNCTIONS
  const handleStickyNavbar = () => {
    if (window.scrollY > scrollHeight) {
      setInRange(true);
      setScrollValue(window.scrollY);
    } else {
      setInRange(false);
      setScrollValue(window.scrollY);
    }
  };

  //   USE EFFECTS
  React.useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return { inRange, scrollHeight: scrollValue };
};

export default useScrollHeight;
