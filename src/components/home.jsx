import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const RevealBox = ({ children, className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} reveal-blur`}>
      {children}
    </div>
  );
};

export default function Home() {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 0.01 } }}
    >
      <body>
        <section className="container">
          <div className="text-container">
            <p>
              <span className="underline-hover">Welcome to BJG Trucking</span>
            </p>
          </div>

          <div className="text-container1">
            <RevealBox className="firstBox">
              <h3>
              BJG Trucking Inc. is a family-owned and operated company proudly serving the Greater Phoenix area since 2003. Founded as a sister company to BJG Grading Inc., we bring over 20 years of hands-on experience in the construction and hauling industry.
              </h3>
            </RevealBox>
          </div>

          <div className="text-container2">
            <RevealBox className="secondBox">
              <h3>
              We are committed to providing dependable, high-quality trucking services with both service excellence and competitive pricing as our top priorities. Whether it's a small residential job or a large-scale commercial project, we have the experience and resources to get it done right.
              </h3>
            </RevealBox>
          </div>

          <div className="text-container3">
            <RevealBox className="thirdBox">
              <h3>
              Our well-maintained fleet of dump trucks and extensive network of plant accounts throughout the Valley allow us to deliver materials efficiently and on time. From bulk hauling and construction material transport to custom trucking needs, we are equipped to support projects of any size and scale.
              </h3>
            </RevealBox>
          </div>

          <div className="text-container4">
            <RevealBox className="contactBox">
              <h3>Contact</h3>
              <span className="contactNum">
                <p>Phone: (602) 200-7028</p>
                <p>Fax: (602) 200-7029</p>
              </span>
            </RevealBox>
          </div>
        </section>
      </body>
    </motion.div>
  );
}