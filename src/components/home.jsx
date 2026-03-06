import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const revealVariants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: "easeOut" },
  },
};

const RevealBox = ({ children, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={isInView ? "visible" : "hidden"}
      variants={revealVariants}
    >
      {children}
    </motion.div>
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
                BJG Trucking Inc. is a family-owned and operated trucking company founded in 2003 as a
                sister company to BJG Grading Inc. With a strong foundation in the construction and hauling
                industry, we proudly serve the Greater Phoenix area and surrounding regions.
              </h3>
            </RevealBox>
          </div>

          <div className="text-container2">
            <RevealBox className="secondBox">
              <h3>
                With over 15 years of professional experience, BJG Trucking Inc. is committed to providing
                dependable, high-quality trucking services. We prioritize both service excellence and competitive
                pricing to meet the demands of today's commercial and industrial job sites.
              </h3>
            </RevealBox>
          </div>

          <div className="text-container3">
            <RevealBox className="thirdBox">
              <h3>
                Our well-maintained fleet of dump trucks and strong network of plant accounts throughout the
                Valley enable us to deliver materials efficiently and on time. Whether it's bulk hauling,
                construction material transport, or custom trucking needs, we are equipped to support projects
                of any scale.
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