import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import "./ticker.scss";

const Ticker = () => {
  const textRef = useRef(null);
  const spanRef = useRef(null);

  useLayoutEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: 0 },
      {
        x: -spanRef.current.clientWidth + "px",
        duration: 5,
        repeat: -1,
        ease: "none",
      }
    );
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <p className="text" ref={textRef}>
            <span ref={spanRef}>Hello, World!!! </span>
            <span>Назар Работай!!!</span>
            <span>Назар Работай!!!</span>
            <span>Назар Работай!!!</span>
            <span>Назар Работай!!!</span>
            <span>Назар Работай!!!</span>
            <span>Назар Работай!!!</span>
          </p>
        </div>
      </section>
    </>
  );
};

export default Ticker;
