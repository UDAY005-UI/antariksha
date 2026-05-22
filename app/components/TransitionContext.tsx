'use client';
import { createContext, useContext, useRef, useState, useCallback, ReactNode } from "react";

type TransitionContextType = {
    isTransitioning: boolean;
    triggerTransition: (href: string) => void;
    overlayRef: React.RefObject<HTMLDivElement | null>;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function useTransition() {
    const ctx = useContext(TransitionContext);
    if (!ctx) throw new Error("useTransition must be used inside TransitionProvider");
    return ctx;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const triggerTransition = useCallback((href: string) => {
        setIsTransitioning(true);

        const overlay = overlayRef.current;
        if (!overlay) return;

        overlay.style.pointerEvents = "all";

        overlay.animate(
            [{ opacity: 0 }, { opacity: 1 }],
            { duration: 400, easing: "ease-in-out", fill: "forwards" }
        ).onfinish = () => {
            window.location.href = href;
        };
    }, []);

    return (
        <TransitionContext.Provider value={{ isTransitioning, triggerTransition, overlayRef }}>
            {children}
        </TransitionContext.Provider>
    );
}