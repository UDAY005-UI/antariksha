'use client';
import { useTransition } from "./TransitionContext";

export function useNavigate() {
    const { triggerTransition } = useTransition();

    return (href: string) => {
        triggerTransition(href);
    };
}