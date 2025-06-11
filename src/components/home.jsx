
import { motion } from "framer-motion"

export default function Home(){
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: .01}}}
        >
        <body>
            {/* <h1 class="greeting">Welcome</h1> */}
           {/* <div class='homepage'>
                {<p class="about" data-hover="BJG Trucking, Inc. is family owned business founded in 2003 by sister company BJG Grading, Inc.
                We bring our customers with over 15 years of experience in the industry. Keeping quality and competitive prices a priority.
                Our plant accounts through out the valley and a fleet of dump trucks allow us to arrive at job site in a timely manner and keep costs down. We are here to serve your trucking needs.">About Us</p>} */}
                <section class="container">
  <div class="text-container">
    <p>
      <span class="underline-hover">Welcome to BJG Trucking</span>
    </p>
  </div>
  <div class="text-container1 reveal fade-bottom">
    <div class="firstBox">
      <h3>BJG Trucking Inc. is a family-owned and operated trucking company founded in 2003 as a sister company to BJG Grading Inc. 
      With a strong foundation in the construction and hauling industry, we proudly serve the Greater Phoenix area and surrounding regions.</h3>
    </div>
  </div>
  <div class="text-container2 reveal">
    <div class="secondBox">
      <h3>With over 15 years of professional experience, BJG Trucking Inc. is committed to providing dependable, high-quality trucking services. 
      We prioritize both service excellence and competitive pricing to meet the demands of today’s commercial and industrial job sites.</h3>
    </div>
  </div>
  <div class="text-container3 reveal">
    <div class="thirdBox">
      <h3>Our well-maintained fleet of dump trucks and strong network of plant accounts throughout the Valley enable us to deliver materials efficiently and on time. 
      Whether it’s bulk hauling, construction material transport, or custom trucking needs, we are equipped to support projects of any scale.</h3>
    </div>
  </div>
  <div class="text-container4 reveal">
    <div class="contactBox">
      <h3>Contact</h3>
        <span className="contactNum">
            <p>Phone: (602) 200-7028</p>
            <p>Fax: (602) 200-7029</p>
        </span>
    </div>
  </div>
</section>
           {/* <div class="number">
                <h3 class="phonenum">
                Contact <br />
                Phone: (602) 200-7028<br />
                Fax: (602) 200-7029
                </h3>

            </div> */}
           {/* </div> */}
        </body>
        </motion.div>
    )
}