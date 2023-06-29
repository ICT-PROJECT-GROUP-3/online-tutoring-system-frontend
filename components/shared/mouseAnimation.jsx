import React, { useEffect, useRef, useState } from 'react';

const MouseAnimation = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circles = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    "#f4ab4e",
    "#f4a65b",
    "#f3a14b",
    "#f3a04e",
    "#f1a04c",
    "#ed9449",
    "#eb8e4a",
    "#e98646",
    "#e77f45",
    "#e47642",
    "#e36f43",
    "#e0663f",
    "#de5f3e",
    "#db563b",
    "#d9503c",
    "#d74938",
    "#d64239",
    "#d33e36",
    "#d23a37",
    "#d13735",
    "#d23836",
    "#d03434"
  ];

  useEffect(() => {
    circles.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.current.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.current.length - index) / circles.current.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles.current[index + 1] || circles.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  const handleCircleRef = (circle) => {
    if (circle) {
      circles.current.push(circle);
    }
  };

  return (
    <div className="container h-screen mx-auto">
      <h1
        // onMouseEnter={handleMouseHover}
        // onMouseLeave={handleMouseLeave}
      >
        Hover Me!
      </h1>
      {Array.from(Array(20).keys()).map((_, index) => (
        <div
          key={index}
          className="absolute z-50 w-6 h-6 bg-black rounded-full pointer-events-none circle"
          ref={handleCircleRef}
        />
      ))}
    </div>
  );
};

export default MouseAnimation;