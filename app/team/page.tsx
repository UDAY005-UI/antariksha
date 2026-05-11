'use client';
import { useRef, useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import Image from "next/image";
import { motion } from "framer-motion";

type RowItem = {
    title: string;
    subtitle: string;
    maskTitle: string;
    maskSubtitle: string;
};

const isMouse = () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function HoverRow({ title, subtitle, maskTitle, maskSubtitle, align = "left" }: RowItem & { align?: "left" | "right" }) {
    const [hovered, setHovered] = useState(false);

    const textClass = `w-full ${align === "right" ? "lg:pr-60 lg:pl-[40%] pr-6 pl-6 text-end" : "px-6 lg:px-60"}`;

    return (
        <div
            className="flex-1 flex items-center border-b border-neutral-800 relative overflow-hidden cursor-pointer"
            onMouseEnter={() => { if (isMouse()) setHovered(true); }}
            onMouseLeave={() => { if (isMouse()) setHovered(false); }}
        >
            {/* Orange fill */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "#f97316",
                    transform: hovered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "center",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    zIndex: 0,
                }}
            />

            {/* Ghost div — holds row height */}
            <div className={`relative ${textClass}`}>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold opacity-0 pointer-events-none select-none">
                    {title}
                </div>
                <div className="text-xs sm:text-sm opacity-0 pointer-events-none select-none">
                    {subtitle}
                </div>
            </div>

            {/* Base text */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    opacity: hovered ? 0 : 1,
                    transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className={textClass}>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">{title}</div>
                    <div className="text-xs sm:text-sm">{subtitle}</div>
                </div>
            </div>

            {/* Masked text */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    transform: hovered ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "center",
                    transition: "transform 1s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <div className={textClass}>
                    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-black">{maskTitle}</div>
                    <div className="text-xs sm:text-sm text-black/60">{maskSubtitle}</div>
                </div>
            </div>
        </div>
    );
}

const tuhinRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Cutting Frames,", maskSubtitle: "Crafting Stories" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Eyes Behind the Lens", maskSubtitle: "Light, Shadow, Motion" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Every Frame Speaks", maskSubtitle: "Without a Word" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Scroll-Stopping Work", maskSubtitle: "Made to Be Felt" },
];

const annyeshaRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Rhythm in the Cut", maskSubtitle: "Flow Over Perfection" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Framing the Unseen", maskSubtitle: "Vision Without Limits" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Stories That Linger", maskSubtitle: "Long After the Screen" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Raw. Real. Resonant.", maskSubtitle: "Audiences Remember" },
];

const dipangshuRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Precision in Post", maskSubtitle: "Frame by Frame" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Motion with Meaning", maskSubtitle: "Intentional Every Shot" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Narrative Through", maskSubtitle: "Color and Composition" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Built to Engage", maskSubtitle: "Designed to Convert" },
];

const dishaRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Time Well Spent", maskSubtitle: "In Every Second" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Mood Over Method", maskSubtitle: "Feel It First" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Worlds Built", maskSubtitle: "From a Single Frame" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Authentic Always", maskSubtitle: "No Filter Needed" },
];

const udayRows: RowItem[] = [
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Sharper Cuts", maskSubtitle: "Stronger Impact" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Chasing Golden Hour", maskSubtitle: "Every Single Day" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "The Quiet Details", maskSubtitle: "Make the Loudest Noise" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Consistent. Bold.", maskSubtitle: "Unmistakably Original" },
];

export default function Team() {
    const maskedHero = useRef<HTMLDivElement>(null);
    const maskedContact = useRef<HTMLDivElement>(null);

    return (
        <main>
            <SmoothScroll />

            <StackScroll>
                {/* Hero */}
                <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay muted loop playsInline preload="auto"
                    >
                        <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1778490652/enhanced_mtigi5.mp4" type="video/mp4"/>
                    </video>
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
                        <div data-cursor="expand">
                            <motion.h1
                                className="text-sm sm:text-base md:text-lg font-semibold tracking-widest"
                                initial={{ y: 60, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1] }}
                            >
                                The Crew
                            </motion.h1>
                            <motion.p
                                className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold opacity-80 leading-none"
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.6, ease: [0.25, 0.1, 0, 1], delay: 0.25 }}
                            >
                                FACES
                                <br />OF
                                <br />THE
                                <br />PROCESS
                            </motion.p>
                        </div>
                    </div>
                    <div
                        ref={maskedHero}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center justify-center text-center px-6"
                    >
                        <div>
                            <h1 className="text-sm sm:text-base md:text-lg font-semibold text-black tracking-widest">Our Team</h1>
                            <p className="mt-4 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black leading-none">
                                THE
                                <br />CORE
                                <br />OF
                                <br />ANTARIKSHA
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tuhin */}
                <section data-cursor="none" className="bg-[#141414] stack-panel absolute inset-0 h-screen w-full flex flex-col overflow-hidden">
                    <Image src="/tuhin.png" alt="Tuhin" width={500} height={500} className="absolute bottom-0 right-0 opacity-40 pointer-events-none w-[70vw] sm:w-[50vw] lg:w-[500px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {tuhinRows.map((row) => (<HoverRow key={row.title} {...row} align="left" />))}
                    </div>
                </section>

                {/* Annyesha */}
                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image src="/annyesha.png" alt="Annyesha" width={400} height={400} className="absolute bottom-0 opacity-40 pointer-events-none w-[60vw] sm:w-[40vw] lg:w-[400px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {annyeshaRows.map((row) => (<HoverRow key={row.title} {...row} align="right" />))}
                    </div>
                </section>

                {/* Dipangshu */}
                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image src="/dipangshu.png" alt="Dipangshu" width={400} height={400} className="absolute bottom-0 right-0 opacity-40 pointer-events-none w-[60vw] sm:w-[40vw] lg:w-[400px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {dipangshuRows.map((row) => (<HoverRow key={row.title} {...row} align="left" />))}
                    </div>
                </section>

                {/* Disha */}
                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image src="/disha.png" alt="Disha" width={500} height={500} className="absolute bottom-0 opacity-40 pointer-events-none w-[70vw] sm:w-[50vw] lg:w-[500px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {dishaRows.map((row) => (<HoverRow key={row.title} {...row} align="right" />))}
                    </div>
                </section>

                {/* Uday */}
                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image src="/uday.png" alt="Uday" width={500} height={500} className="absolute bottom-0 right-0 opacity-40 pointer-events-none w-[70vw] sm:w-[50vw] lg:w-[500px] h-auto" priority />
                    <div className="w-full h-full flex flex-col">
                        {udayRows.map((row) => (<HoverRow key={row.title} {...row} align="left" />))}
                    </div>
                </section>

                {/* CONTACT */}
                <section className="z-30 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center">
                    <div className="relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20">
                        <h1 data-cursor="expand" className="font-bold text-lg sm:text-2xl mb-4">
                            Ready to start your journey?
                        </h1>
                        <h1 data-cursor="expand" className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold mb-8 max-w-[900px]">
                            We design and build digital experiences...
                        </h1>
                        <div data-cursor="expand" className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                            <div className="cursor-pointer hover:opacity-70">See our work →</div>
                            <div className="cursor-pointer hover:opacity-70">Contact us →</div>
                        </div>
                    </div>

                    <div
                        ref={maskedContact}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
                    >
                        <div className="text-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20">
                            <div className="font-bold text-lg sm:text-2xl mb-4 text-[#0D0C0B]">
                                Want something people watch?
                            </div>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0D0C0B] mb-8 max-w-[900px]">
                                We craft visuals that hit and don&apos;t fade out...
                            </h1>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm uppercase tracking-wide">
                                <div className="cursor-pointer hover:opacity-70">Explore work →</div>
                                <div className="cursor-pointer hover:opacity-70">Get in touch →</div>
                            </div>
                        </div>
                    </div>
                </section>

            </StackScroll>
        </main>
    );
}