'use client';
import { useEffect, useRef } from "react";
import { useTransition } from "./TransitionContext";

export default function PageTransition() {
    const { overlayRef } = useTransition();
    const enterRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const enter = enterRef.current;
        if (!enter) return;

        enter.animate(
            [{ opacity: 1 }, { opacity: 0 }],
            { duration: 500, easing: "ease-in-out", fill: "forwards", delay: 80 }
        );
    }, []);

    return (
        <>
            <div
                ref={overlayRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9999,
                    backgroundColor: "#000",
                    opacity: 0,
                    pointerEvents: "none",
                }}
            />
            <div
                ref={enterRef}
                style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 9998,
                    backgroundColor: "#000",
                    opacity: 1,
                    pointerEvents: "none",
                }}
            />
        </>
    );
}