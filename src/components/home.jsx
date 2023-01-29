
import { motion } from "framer-motion"

export default function Home(){
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {duration: .01}}}
        >
        <body>
            {/* <h1 className="greeting">Welcome</h1> */}
           {/* <div className='homepage'>
                {<p className="about" data-hover="BJG Trucking, Inc. is family owned business founded in 2003 by sister company BJG Grading, Inc.
                We bring our customers with over 15 years of experience in the industry. Keeping quality and competitive prices a priority.
                Our plant accounts through out the valley and a fleet of dump trucks allow us to arrive at job site in a timely manner and keep costs down. We are here to serve your trucking needs.">About Us</p>} */}
        <section class="container">
            <h2>Welcome</h2>
            <div class="text-container reveal fade-bottom">
                <div class="text-box" style={{float:"left", marginLeft:"5rem"}}>
                    <h3>BJG Trucking, Inc. is a family owned business founded in 2003 by sister company BJG Grading, Inc.</h3>
                </div>
            </div>
            <div class="text-container reveal fade-bottom">
                <div style={{display: "block", marginLeft: "auto", marginRight: "auto"}} class="text-box">
                    <h3 style={{color:"white"}}>We bring our customers over 15 years of experience in the industry. Keeping quality and competitive prices a priority.</h3>
                </div>
            </div>
            <div class="text-container reveal fade-bottom">
                <div class="text-box" style={{float: "right", marginRight: "5rem"}}>
                    <h3 style ={{color:"white"}}>Our plant accounts throughout the valley, and a fleet of dump trucks allow us to arrive at job site in a timely manner, and keep costs down. We are here to serve your trucking needs.</h3>
                </div>
            </div>
            <div class="text-container reveal fade-bottom">
                <div class="text-box" style={{float:"right", marginLeft:"5rem", width:"auto"}}>
                    <h3>Contact</h3>
                    <h3>Phone: (602) 200-7028</h3>
                    <h3>Fax: (602) 200-7029</h3>
                </div>
            </div>
        </section>
           {/* <div className="number">
                <h3 className="phonenum">
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