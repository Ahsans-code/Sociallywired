import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true); // Trigger counting animation when in view
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the counter is in view
        );

        if (counterRef.current) {
            observer.observe(counterRef.current); // Start observing the counter element
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current); // Clean up the observer
            }
        };
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        // Calculate the increment per step based on the target and duration
        const increment = target / (duration / 50); // 50ms interval for smoother transition
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev + increment >= target) {
                    clearInterval(interval);
                    return target; // Ensure it does not exceed the target
                }
                return prev + increment;
            });
        }, 50); // Update every 50ms

        return () => clearInterval(interval); // Cleanup on unmount or visibility change
    }, [isVisible, target, duration]);

    return (
        <div
            ref={counterRef}
            className=""
        >
            <h2 className="bg-clip-text text-transparent  ">{Math.floor(count)}</h2>
        </div>
    );
};
export default Counter;