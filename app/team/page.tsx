'use client';
import { useRef, useState } from "react";
import SmoothScroll from "../components/SmoothScroll";
import StackScroll from "../components/StackScroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RowItem = {
    title: string;
    subtitle: string;
    maskTitle: string;
    maskSubtitle: string;
};

const isMouse = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;

function HoverRow({
    title,
    subtitle,
    maskTitle,
    maskSubtitle,
    align = "left",
}: RowItem & { align?: "left" | "right" }) {
    const [hovered, setHovered] = useState(false);
    const textClass = `w-full ${align === "right" ? "lg:pr-60 lg:pl-[40%] pr-6 pl-6 text-end" : "px-6 lg:px-60"}`;

    return (
        <div
            className="flex-1 flex items-center border-b border-neutral-800 relative overflow-hidden cursor-pointer"
            onMouseEnter={() => { if (isMouse()) setHovered(true); }}
            onMouseLeave={() => { if (isMouse()) setHovered(false); }}
        >
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
            <div className={`relative ${textClass}`}>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold opacity-0 pointer-events-none select-none">{title}</div>
                <div className="text-xs sm:text-sm opacity-0 pointer-events-none select-none">{subtitle}</div>
            </div>
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
    { title: "Tuhin Adhikary", subtitle: "Frames that feel like feelings.", maskTitle: "The Eye", maskSubtitle: "Motion. Emotion. Story." },
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Cutting Frames,", maskSubtitle: "Crafting Stories" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Eyes Behind the Lens", maskSubtitle: "Light, Shadow, Motion" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Every Frame Speaks", maskSubtitle: "Without a Word" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Scroll-Stopping Work", maskSubtitle: "Made to Be Felt" },
];

const annyeshaRows: RowItem[] = [
    { title: "Annyesha Saha", subtitle: "Vision without a ceiling.", maskTitle: "The Visionary", maskSubtitle: "Light. Depth. Truth." },
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Rhythm in the Cut", maskSubtitle: "Flow Over Perfection" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Framing the Unseen", maskSubtitle: "Vision Without Limits" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Stories That Linger", maskSubtitle: "Long After the Screen" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Raw. Real. Resonant.", maskSubtitle: "Audiences Remember" },
];

const dipangshuRows: RowItem[] = [
    { title: "Dipangshu", subtitle: "Strategy meets creative instinct.", maskTitle: "The Strategist", maskSubtitle: "Growth. Design. Impact." },
    { title: "Social Media Managing", subtitle: "Content Strategy", maskTitle: "Growth Through Strategy", maskSubtitle: "Consistent Branding" },
    { title: "Videography", subtitle: "Visual Storytelling", maskTitle: "Frames with Purpose", maskSubtitle: "Capture Emotion" },
    { title: "Poster Making", subtitle: "Graphic Design", maskTitle: "Design Beyond Aesthetics", maskSubtitle: "Strong Visual Impact" },
    { title: "Editing", subtitle: "Post Production", maskTitle: "Cuts with Precision", maskSubtitle: "Enhanced Narratives" },
];

const dishaRows: RowItem[] = [
    { title: "Disha Dutta", subtitle: "Moods captured, worlds created.", maskTitle: "The Storyteller", maskSubtitle: "Feel. Frame. Forever." },
    { title: "Video Editing", subtitle: "Protonn Media", maskTitle: "Time Well Spent", maskSubtitle: "In Every Second" },
    { title: "Cinematography", subtitle: "Creative Work", maskTitle: "Mood Over Method", maskSubtitle: "Feel It First" },
    { title: "Visual Storytelling", subtitle: "Freelance", maskTitle: "Worlds Built", maskSubtitle: "From a Single Frame" },
    { title: "Content Creation", subtitle: "Social Media", maskTitle: "Authentic Always", maskSubtitle: "No Filter Needed" },
];

const udayRows: RowItem[] = [
    { title: "Uday Senapati", subtitle: "Building the web, one pixel at a time.", maskTitle: "The Architect", maskSubtitle: "Code. Design. Ship." },
    { title: "Modern Web Experiences", subtitle: "Interactive Digital Presence", maskTitle: "Experiences that Engage", maskSubtitle: "Built for Modern Brands" },
    { title: "Web Development", subtitle: "Full Stack Solutions", maskTitle: "Code with Purpose", maskSubtitle: "Scalable and Reliable Systems" },
    { title: "UI/UX Design", subtitle: "User-Centered Interfaces", maskTitle: "Design that Connects", maskSubtitle: "Clean and Intuitive Experiences" },
    { title: "Digital Branding", subtitle: "Visual Identity Systems", maskTitle: "Brands with Presence", maskSubtitle: "Built to Stand Out" },
];

export default function Team() {
    const maskedHero    = useRef<HTMLDivElement>(null);
    const maskedContact = useRef<HTMLDivElement>(null);
    const stackRef      = useRef<HTMLDivElement>(null);
    const router        = useRouter();

    const firedRef = useRef([false, false, false, false, false, false]);

    const tuhinRowsRef     = useRef<HTMLDivElement>(null);
    const annyeshaRowsRef  = useRef<HTMLDivElement>(null);
    const dipangshuRowsRef = useRef<HTMLDivElement>(null);
    const dishaRowsRef     = useRef<HTMLDivElement>(null);
    const udayRowsRef      = useRef<HTMLDivElement>(null);

    const tuhinImgRef     = useRef<HTMLImageElement>(null);
    const annyeshaImgRef  = useRef<HTMLImageElement>(null);
    const dipangshuImgRef = useRef<HTMLImageElement>(null);
    const dishaImgRef     = useRef<HTMLImageElement>(null);
    const udayImgRef      = useRef<HTMLImageElement>(null);

    const contactAccent  = useRef<HTMLDivElement>(null);
    const contactTag     = useRef<HTMLParagraphElement>(null);
    const contactHeading = useRef<HTMLHeadingElement>(null);
    const contactLinks   = useRef<HTMLDivElement>(null);

    function animatePanel(
        rowsEl: HTMLDivElement | null,
        imgEl: HTMLImageElement | null,
    ) {
        if (!rowsEl) return;
        const rows = rowsEl.querySelectorAll<HTMLElement>(".panel-row");

        if (imgEl) {
            gsap.fromTo(imgEl,
                { y: 80, opacity: 0 },
                { y: 0, opacity: 0.5, duration: 2.2, ease: "power3.out" }
            );
        }

        gsap.fromTo(rows,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1.6,
                ease: "power4.out",
                stagger: {
                    each: 0.22,
                    from: "start",
                },
            }
        );
    }

    function animateContact() {
        gsap.fromTo(contactAccent.current,
            { scaleX: 0 },
            { scaleX: 1, duration: 1.4, ease: "expo.out", transformOrigin: "left center" }
        );
        gsap.fromTo(contactTag.current,
            { y: 28, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.3, ease: "power3.out", delay: 0.3 }
        );
        gsap.fromTo(contactHeading.current,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.8, ease: "power4.out", delay: 0.55 }
        );
        const links = contactLinks.current?.querySelectorAll<HTMLElement>(".cta-link");
        if (links?.length) {
            gsap.fromTo(links,
                { y: 24, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.2, delay: 1.0 }
            );
        }
    }

    function handleScrollProgress(progress: number) {
        const step = 1 / 6;
        const fired = firedRef.current;

        if (!fired[0] && progress >= step * 0.85) {
            fired[0] = true;
            animatePanel(tuhinRowsRef.current, tuhinImgRef.current);
        }
        if (!fired[1] && progress >= step * 1.85) {
            fired[1] = true;
            animatePanel(annyeshaRowsRef.current, annyeshaImgRef.current);
        }
        if (!fired[2] && progress >= step * 2.85) {
            fired[2] = true;
            animatePanel(dipangshuRowsRef.current, dipangshuImgRef.current);
        }
        if (!fired[3] && progress >= step * 3.85) {
            fired[3] = true;
            animatePanel(dishaRowsRef.current, dishaImgRef.current);
        }
        if (!fired[4] && progress >= step * 4.85) {
            fired[4] = true;
            animatePanel(udayRowsRef.current, udayImgRef.current);
        }
        if (!fired[5] && progress >= step * 5.85) {
            fired[5] = true;
            animateContact();
        }
    }

    const contactInnerCls = "relative z-10 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 xl:px-40 text-center w-full pt-16 sm:pt-20";

    return (
        <main>
            <SmoothScroll />

            <StackScroll stackRef={stackRef} onScrollProgress={handleScrollProgress}>

                {/* ── HERO ── */}
                <section className="-z-10 stack-panel absolute inset-0 h-screen w-full overflow-hidden">
                    <video
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay muted loop playsInline preload="auto"
                    >
                        <source src="https://res.cloudinary.com/dthpzuhja/video/upload/v1778490652/enhanced_mtigi5.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/40" />

                    <div className="relative z-10 flex h-full items-end justify-center px-8 md:px-35 pb-20 sm:pb-16 md:pb-14">
                        <div data-cursor="expand" className="inline-flex flex-col">
                            <motion.p
                                className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold opacity-60 mb-1 sm:mb-2 text-left"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.6, y: 0 }}
                                transition={{ duration: 1.0, delay: 0.1 }}
                            >
                                The Core Of
                            </motion.p>
                            <div className="flex">
                                {"ANTARIKSHA".split("").map((letter, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <motion.span
                                            className="block font-black leading-none opacity-80"
                                            style={{ fontSize: "clamp(2rem, 9.5vw, 15rem)", letterSpacing: "0.05em", transformOrigin: "bottom" }}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ duration: 1, ease: [0.25, 0.1, 0, 1], delay: 0 }}
                                        >
                                            {letter}
                                        </motion.span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        ref={maskedHero}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-end justify-center px-8 md:px-35 pb-20 sm:pb-16 md:pb-14"
                    >
                        <div className="inline-flex flex-col">
                            <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold text-black opacity-70 mb-1 sm:mb-2 text-left">
                                The Faces Behind
                            </p>
                            <div className="flex">
                                {"ANTARIKSHA".split("").map((letter, i) => (
                                    <div key={i} className="overflow-hidden">
                                        <span
                                            className="block font-black leading-none text-black"
                                            style={{ fontSize: "clamp(2rem, 9.5vw, 15rem)", letterSpacing: "0.05em" }}
                                        >
                                            {letter}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section data-cursor="none" className="bg-[#141414] stack-panel absolute inset-0 h-screen w-full flex flex-col overflow-hidden">
                    <Image
                        ref={tuhinImgRef}
                        src="/tuhin.png" alt="Tuhin" width={500} height={500}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 opacity-50 pointer-events-none w-full sm:w-[65vw] lg:w-[500px] h-auto"
                        style={{ opacity: 0 }}
                        priority
                    />
                    <div ref={tuhinRowsRef} className="w-full h-full flex flex-col">
                        {tuhinRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="left" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image
                        ref={annyeshaImgRef}
                        src="/annyesha.png" alt="Annyesha" width={400} height={400}
                        className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 opacity-50 pointer-events-none w-full sm:w-[55vw] lg:w-[400px] h-auto"
                        style={{ opacity: 0 }}
                        priority
                    />
                    <div ref={annyeshaRowsRef} className="w-full h-full flex flex-col">
                        {annyeshaRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="right" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image
                        ref={dipangshuImgRef}
                        src="/dipangshu.png" alt="Dipangshu" width={400} height={400}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 opacity-50 pointer-events-none w-full sm:w-[55vw] lg:w-[400px] h-auto"
                        style={{ opacity: 0 }}
                        priority
                    />
                    <div ref={dipangshuRowsRef} className="w-full h-full flex flex-col">
                        {dipangshuRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="left" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#0f0f0f] flex flex-col overflow-hidden">
                    <Image
                        ref={dishaImgRef}
                        src="/disha.png" alt="Disha" width={500} height={500}
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 opacity-50 pointer-events-none w-full sm:w-[65vw] lg:w-[500px] h-auto"
                        style={{ opacity: 0 }}
                        priority
                    />
                    <div ref={dishaRowsRef} className="w-full h-full flex flex-col">
                        {dishaRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="right" />
                            </div>
                        ))}
                    </div>
                </section>

                <section data-cursor="none" className="stack-panel absolute inset-0 h-screen w-full bg-[#141414] flex flex-col overflow-hidden">
                    <Image
                        ref={udayImgRef}
                        src="/uday.png" alt="Uday" width={500} height={500}
                        className="grayscale absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-0 opacity-50 pointer-events-none w-full sm:w-[65vw] lg:w-[500px] h-auto"
                        style={{ opacity: 0 }}
                        priority
                    />
                    <div ref={udayRowsRef} className="w-full h-full flex flex-col">
                        {udayRows.map((row) => (
                            <div key={row.title} className="panel-row flex-1 flex flex-col" style={{ opacity: 0 }}>
                                <HoverRow {...row} align="left" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="z-20 stack-panel absolute inset-0 h-screen w-full bg-[#0D0C0B] flex items-center overflow-hidden">

                    <div className={contactInnerCls}>
                        <div
                            ref={contactAccent}
                            className="w-10 h-[2px] bg-orange-500 mb-6"
                            style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
                        />
                        <p
                            ref={contactTag}
                            data-cursor="expand"
                            className="text-xs tracking-[0.3em] mb-4 sm:mb-6"
                            style={{ opacity: 0, transform: "translateY(28px)" }}
                        >
                            GET STARTED
                        </p>
                        <h1
                            ref={contactHeading}
                            data-cursor="expand"
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold mb-10 max-w-[900px]"
                            style={{ opacity: 0, transform: "translateY(60px)" }}
                        >
                            We design and build digital experiences that feel effortless,
                            intentional, and quietly powerful.
                        </h1>
                        <div
                            ref={contactLinks}
                            data-cursor="expand"
                            style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                            className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm uppercase tracking-widest"
                        >
                            <div
                                onClick={() => router.push("/work")}
                                className="cta-link group relative cursor-pointer overflow-hidden"
                                style={{ opacity: 0, transform: "translateY(24px)" }}
                            >
                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">See our work →</span>
                                <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-orange-500">See our work →</span>
                            </div>
                            <div
                                onClick={() => router.push("/contact")}
                                className="cta-link group relative cursor-pointer overflow-hidden"
                                style={{ opacity: 0, transform: "translateY(24px)" }}
                            >
                                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Contact us →</span>
                                <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-orange-500">Contact us →</span>
                            </div>
                        </div>
                    </div>

                    <div
                        ref={maskedContact}
                        className="cursor-text-layer absolute inset-0 w-full h-full bg-orange-500 flex items-center"
                    >
                        <div className={contactInnerCls}>
                            <div className="w-10 h-[2px] bg-[#0D0C0B] mb-6" />
                            <p className="text-xs tracking-[0.3em] mb-4 sm:mb-6 text-[#0D0C0B]">
                                GET STARTED
                            </p>
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-snug font-semibold text-[#0D0C0B] mb-10 max-w-[900px]">
                                We craft visuals that hit and don&apos;t fade out — sharp,
                                intentional work that people remember.
                            </h1>
                            <div
                                style={{ WebkitTouchCallout: "none", WebkitUserSelect: "none", userSelect: "none" }}
                                className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm uppercase tracking-widest"
                            >
                                <div onClick={() => router.push("/work")} className="cursor-pointer hover:opacity-70 text-black">Explore work →</div>
                                <div onClick={() => router.push("/contact")} className="cursor-pointer hover:opacity-70 text-black">Get in touch →</div>
                            </div>
                        </div>
                    </div>
                </section>

            </StackScroll>
        </main>
    );
}