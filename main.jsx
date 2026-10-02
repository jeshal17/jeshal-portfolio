import React, { useEffect, useLayoutEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    type: "DATA + NLP + AI",
    title: "User Analytics\nDashboard",
    problem: "App-store reviews contained useful feedback, but the information was unstructured and difficult to analyse at scale.",
    built: "A Streamlit application that processes 5,000+ reviews and turns them into sentiment, root-cause, feature-request and trend insights.",
    stack: "Python · SQL · Pandas · NumPy · VADER NLP · Groq API · Streamlit",
    flow: ["REVIEWS", "PROCESS", "ANALYSE", "RECOMMEND", "DASHBOARD"]
  },
  {
    number: "02",
    type: "COMPUTER VISION + AI",
    title: "ASL Sign\nLanguage",
    problem: "How can someone communicate during a video call when the other person does not understand sign language?",
    built: "A Chrome extension that detects ASL gestures and converts them into text and speech during video conferences.",
    stack: "JavaScript · Python · MediaPipe · Chrome AI · React",
    flow: ["GESTURE", "DETECT", "RECOGNISE", "TEXT", "SPEECH"]
  },
  {
    number: "03",
    type: "ML + RESEARCH",
    title: "INRI — Navigation\nFailure Classification",
    problem: "Real-world navigation incidents can contain risks that a route alone does not explain.",
    built: "An ongoing research project analysing verified navigation incidents across 17 Indian states using four ML classification models.",
    stack: "Python · Scikit-learn · Excel · Machine Learning",
    flow: ["INCIDENTS", "FEATURES", "CLASSIFY", "EVALUATE", "RISK"]
  }
];

function Lily({ className = "", style }) {
  return (
    <div className={`lily ${className}`} style={style} aria-hidden="true">
      <svg viewBox="0 0 260 210">
        <g fill="#eadfcf" stroke="#6d594d" strokeWidth="2.2">
          <path d="M130 103 C54 115 31 72 42 27 C90 29 123 56 130 103Z"/>
          <path d="M130 103 C95 50 108 13 130 4 C154 18 166 55 130 103Z"/>
          <path d="M130 103 C161 47 204 40 232 55 C218 98 182 118 130 103Z"/>
          <path d="M130 103 C204 98 225 130 220 169 C173 173 145 145 130 103Z"/>
          <path d="M130 103 C151 163 132 196 103 207 C80 169 91 130 130 103Z"/>
          <path d="M130 103 C87 144 48 137 27 113 C48 79 90 76 130 103Z"/>
        </g>
        <g stroke="#6d7a3b" strokeWidth="3" strokeLinecap="round">
          <path d="M128 103 Q88 82 57 55"/>
          <path d="M132 103 Q173 80 205 69"/>
          <path d="M131 106 Q163 130 194 149"/>
          <path d="M127 106 Q105 144 104 177"/>
        </g>
        <g fill="#55352c" stroke="none">
          <circle cx="57" cy="55" r="4"/><circle cx="205" cy="69" r="4"/>
          <circle cx="194" cy="149" r="4"/><circle cx="104" cy="177" r="4"/>
        </g>
      </svg>
    </div>
  );
}

function App() {
  const root = useRef(null);
  const [menu, setMenu] = React.useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-copy > *", {
        y: 45, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out"
      });

      gsap.to(".hero-lily", {
        y: 150, x: 45, rotate: 12,
        ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: 1.4 }
      });

      gsap.utils.toArray(".pop-lily").forEach((el, i) => {
        gsap.fromTo(el,
          { y: 100, opacity: 0, rotate: i % 2 ? -12 : 10, scale: .82 },
          { y: 0, opacity: 1, rotate: i % 2 ? -3 : 3, scale: 1,
            duration: 1.15, ease: "back.out(1.4)",
            scrollTrigger: { trigger: el.closest("section"), start: "top 72%", toggleActions: "play none none reverse" }
          }
        );
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 35, opacity: 0, duration: .9, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 84%" }
        });
      });

      gsap.utils.toArray(".project-card").forEach((card) => {
        gsap.from(card.querySelector(".project-number"), {
          x: -60, opacity: 0, duration: .8,
          scrollTrigger: { trigger: card, start: "top 78%" }
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const close = () => setMenu(false);

  return (
    <div ref={root} className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="fixed top-0 z-50 w-full mix-blend-normal">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10">
          <a href="#top" className="font-display text-2xl italic">JM.</a>
          <nav className="hidden items-center gap-8 rounded-full border border-ink/20 bg-paper/80 px-6 py-3 text-[11px] uppercase tracking-[.22em] backdrop-blur-md md:flex">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#thinking" className="nav-link">How I Think</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button onClick={() => setMenu(!menu)} className="rounded-full border border-ink/20 p-3 md:hidden">
            {menu ? <X size={17}/> : <Menu size={17}/>}
          </button>
        </div>
        {menu && (
          <div className="mx-4 rounded-3xl border border-ink/10 bg-paper/95 p-5 shadow-xl md:hidden">
            {["about", "work", "thinking", "contact"].map(id =>
              <a key={id} onClick={close} href={`#${id}`} className="block border-b border-ink/10 py-4 text-sm uppercase tracking-widest">{id.replace("-", " ")}</a>
            )}
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero relative flex min-h-screen items-center overflow-hidden bg-cocoa px-6 text-paper md:px-12">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 pt-20 md:grid-cols-[1.2fr_.8fr]">
            <div className="hero-copy relative z-10">
              <p className="mb-5 text-[10px] uppercase tracking-[.35em] text-paper/60">Software · Data · AI · Curiosity</p>
              <h1 className="font-display text-[clamp(4.5rem,13vw,11rem)] leading-[.76] tracking-[-.065em]">
                Jeshal<br/><span className="ml-[9vw] italic">Mathias</span>
              </h1>
              <p className="mt-10 max-w-xl font-display text-xl leading-relaxed text-paper/80 md:text-2xl">
                Curiosity is what makes me ask questions, creativity helps me find solutions, and learning is what keeps me moving.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#work" className="rounded-full bg-paper px-5 py-3 text-[10px] font-semibold uppercase tracking-[.2em] text-cocoa transition hover:-translate-y-1">Explore work</a>
                <a href="#about" className="rounded-full border border-paper/30 px-5 py-3 text-[10px] uppercase tracking-[.2em] transition hover:bg-paper hover:text-cocoa">About me</a>
              </div>
            </div>
            <div className="relative flex min-h-[430px] items-center justify-center">
              <div className="portrait-frame relative z-10">
                <img src="/jeshal.jpg" alt="Jeshal Mathias" className="h-[420px] w-[310px] object-cover md:h-[500px] md:w-[370px]" />
                <div className="absolute -bottom-5 -left-5 bg-paper px-4 py-3 font-display text-sm italic text-cocoa">still curious.</div>
              </div>
              <Lily className="hero-lily absolute -right-14 bottom-0 z-20 w-[270px] md:-right-24 md:w-[390px]" />
            </div>
          </div>
          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[.3em] text-paper/50">
            Scroll to explore <ArrowDown size={13}/>
          </div>
        </section>

        <section id="about" className="relative bg-paper px-6 py-28 md:px-12 md:py-40">
          <Lily className="pop-lily absolute -right-20 top-16 w-[280px] opacity-0 md:right-4 md:w-[340px]" />
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[.45fr_1fr]">
            <div className="reveal">
              <p className="text-[10px] uppercase tracking-[.35em] text-cocoa/60">01 / About</p>
              <h2 className="mt-5 font-display text-6xl italic leading-none md:text-8xl">How I<br/>think.</h2>
            </div>
            <div className="grid gap-12 md:grid-cols-2">
              {[
                ["How I think", "I naturally start with questions. I like understanding why something works before immediately jumping into the solution."],
                ["How I learn", "I learn by exploring, building, testing, making mistakes and improving. If I don't understand something, I ask."],
                ["How I work", "I like getting close to the actual problem — breaking it down, understanding requirements, finding gaps and building something practical."],
                ["How I ask", "Why is this happening? What data is involved? What happens if this fails? What does the user actually need? Can this be simpler?"]
              ].map(([title, text]) => (
                <article className="reveal border-t border-ink/20 pt-5" key={title}>
                  <h3 className="font-display text-2xl italic">{title}</h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-ink/65">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="thinking" className="relative overflow-hidden bg-espresso px-6 py-32 text-paper md:px-12 md:py-44">
          <Lily className="pop-lily absolute -left-20 top-1/3 w-[300px] opacity-0 md:left-10 md:w-[390px]" />
          <div className="mx-auto max-w-6xl text-center">
            <p className="reveal text-[10px] uppercase tracking-[.35em] text-paper/45">The way I approach a problem</p>
            <h2 className="reveal mt-8 font-display text-[clamp(3.4rem,9vw,8rem)] leading-[.84] tracking-[-.05em]">
              GOOD WORK<br/><span className="italic">STARTS WITH</span><br/>GOOD QUESTIONS.
            </h2>
            <div className="mx-auto mt-12 max-w-2xl text-sm leading-7 text-paper/60">
              Questions give me direction. Creativity helps me explore possibilities. Testing tells me what needs to change. Learning keeps me moving.
            </div>
            <div className="mt-20 grid gap-3 sm:grid-cols-3">
              {["WHY?", "WHAT IF?", "CAN THIS BE SIMPLER?"].map((q, i) =>
                <div key={q} className="reveal border border-paper/15 px-5 py-8 font-display text-2xl italic">{q}</div>
              )}
            </div>
          </div>
        </section>

        <section id="work" className="relative bg-paper px-6 py-28 md:px-12 md:py-40">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[.35em] text-cocoa/60">02 / Selected work</p>
                <h2 className="mt-4 font-display text-6xl italic md:text-8xl">Things I've<br/>built.</h2>
              </div>
              <p className="hidden max-w-xs text-right text-xs leading-6 text-ink/50 md:block">Three projects. Three different questions. One recurring habit: understand first, then build.</p>
            </div>

            <div className="space-y-28">
              {projects.map((p, index) => (
                <article key={p.number} className="project-card relative border-t border-ink/20 pt-7">
                  <div className="grid gap-10 md:grid-cols-[.18fr_.48fr_.34fr]">
                    <div className="project-number font-display text-6xl italic text-cocoa/50 md:text-8xl">{p.number}</div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[.3em] text-cocoa/60">{p.type}</p>
                      <h3 className="mt-5 whitespace-pre-line font-display text-5xl leading-[.9] tracking-tight md:text-7xl">{p.title}</h3>
                      <div className="mt-10 overflow-hidden rounded-[2rem] bg-cocoa p-8 text-paper md:p-12">
                        <p className="text-[10px] uppercase tracking-[.3em] text-paper/40">The question</p>
                        <p className="mt-4 font-display text-xl leading-relaxed italic">{p.problem}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[.3em] text-cocoa/60">What I built</p>
                        <p className="mt-4 text-sm leading-7 text-ink/65">{p.built}</p>
                        <p className="mt-8 text-[10px] uppercase tracking-[.2em] text-cocoa/60">{p.stack}</p>
                      </div>
                      <div className="mt-12 border-t border-ink/15 pt-5">
                        <p className="text-[9px] uppercase tracking-[.3em] text-ink/40">Process</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.flow.map((x, i) => <span key={x} className="rounded-full border border-ink/15 px-3 py-2 text-[9px] tracking-widest">{x}</span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < projects.length - 1 && (
                    <Lily className={`pop-lily absolute ${index % 2 ? "-right-24" : "right-8"} -bottom-24 w-[230px] opacity-0`} />
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cocoa px-6 py-24 text-paper md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[.4fr_1fr]">
            <p className="text-[10px] uppercase tracking-[.35em] text-paper/50">03 / My process</p>
            <div>
              <h2 className="font-display text-5xl italic md:text-7xl">Question → Understand → Explore → Build → Test → Improve → Learn</h2>
              <p className="mt-8 max-w-2xl text-sm leading-7 text-paper/60">Sometimes testing creates another question — and the process starts again.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-paper px-6 py-32 md:px-12 md:py-48">
          <Lily className="pop-lily absolute -right-10 top-16 w-[330px] opacity-0 md:right-20 md:w-[410px]" />
          <div className="relative z-10 mx-auto max-w-7xl">
            <p className="text-[10px] uppercase tracking-[.35em] text-cocoa/60">04 / Contact</p>
            <h2 className="mt-8 max-w-5xl font-display text-[clamp(4rem,11vw,10rem)] leading-[.78] tracking-[-.06em]">Still<br/><span className="italic">curious?</span></h2>
            <p className="mt-12 max-w-xl font-display text-2xl leading-relaxed">There is always another question to ask, another problem to understand, and something new to learn.</p>
            <div className="mt-12 flex flex-wrap gap-3">
              <a href="mailto:jeshalmathias8@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-cocoa px-6 py-4 text-xs uppercase tracking-[.18em] text-paper transition hover:-translate-y-1">Email me <ArrowUpRight size={15}/></a>
              <a href="https://github.com/jeshal17" target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 px-6 py-4 text-xs uppercase tracking-[.18em]">GitHub</a>
              <a href="https://www.linkedin.com/in/jeshal-mathias" target="_blank" rel="noreferrer" className="rounded-full border border-ink/20 px-6 py-4 text-xs uppercase tracking-[.18em]">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-between bg-espresso px-6 py-6 text-paper/50 md:px-12">
        <span className="font-display italic">JM.</span>
        <span className="text-[9px] uppercase tracking-[.25em]">Made with curiosity</span>
        <a href="#top"><ArrowUp size={14}/></a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);