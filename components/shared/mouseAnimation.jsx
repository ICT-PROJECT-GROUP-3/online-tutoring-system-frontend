/**
 * MouseAnimation component for creating a mouse animation effect with circles.
 * @component
 */
import React, { useEffect, useRef, useState } from 'react';

/**
 * MouseAnimation component.
 * @returns {JSX.Element} MouseAnimation component.
 */
const MouseAnimation = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circles = useRef([]);
  const [isHovered, setIsHovered] = useState(false);

  const colors = [
    // Array of colors for the circles
  ];

  useEffect(() => {
    /**
     * Initialize the circles and assign colors to them.
     */
    circles.current.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });
  }, []);

  useEffect(() => {
    /**
     * Update the mouse coordinates on mousemove.
     * @param {MouseEvent} e - Mouse event object.
     */
    const handleMouseMove = (e) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    /**
     * Cleanup the event listener.
     */
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  /**
   * Event handler for mouse hover.
   */
  const handleMouseHover = () => {
    setIsHovered(true);
  };

  /**
   * Event handler for mouse leave.
   */
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    /**
     * Animation function to update circle positions and create the animation effect.
     */
    const animateCircles = () => {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.current.forEach((circle, index) => {
        circle.style.left = x - 12 + 'px';
        circle.style.top = y - 12 + 'px';

        circle.style.scale =
          (circles.current.length - index) / circles.current.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles.current[index + 1] || circles.current[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    // Start the animation loop
    animateCircles();
  }, []);

  /**
   * Callback function to handle circle references.
   * @param {HTMLDivElement} circle - Circle reference.
   */
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
