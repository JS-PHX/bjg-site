
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
      <h3>BJG Trucking Inc. is a family owned business founded in 2003 by sister company BJG Grading Inc.</h3>
    </div>
  </div>
  <div class="text-container2 reveal">
    <div class="secondBox">
      <h3>We bring our customers over 15 years of experience in the industry, keeping quality and competitive prices a priority.</h3>
    </div>
  </div>
  <div class="text-container3 reveal">
    <div class="thirdBox">
      <h3>Our plant accounts throughout the valley, and a fleet of dump trucks allow us to arrive at job site in a timely manner, and keep costs down. We are here to serve your trucking needs.</h3>
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