import { Tooltip } from "@mantine/core";
import styles from "./styles.module.css";
import { UserCard } from "./UserCard";

const AboutMe = () => {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.aboutHeader}>
        <Tooltip
          label={<UserCard />}
          color="#333"
          transitionProps={{ transition: "pop" }}
          p={0}
        >
          <img src="/me.HEIC" alt="Profile" className={styles.profilePic} />
        </Tooltip>
        <h1>About Me</h1>
      </div>

      <h2 className={styles.subheading}>Introduction</h2>
      <p className={styles.text}>
        Hi, I’m Andrei Tkachev, a Full Stack Developer with over 3 years of
        experience in creating scalable web applications and leading development
        teams. My expertise in both frontend and backend development allows me
        to deliver efficient and innovative solutions tailored to project needs.
      </p>
      <h2 className={styles.subheading} id="education">
        Education
      </h2>
      <div className={styles.education}>
        <div className={styles.educationItem}>
          <h3 className={styles.educationTitle}>
            Bachelor’s Degree in Applied Informatics in Corporate Information
            Systems
          </h3>
          <p className={styles.educationInstitution}>
            Moscow University named after S.Y. Witte — Graduated in 2024
          </p>
          <ul className={styles.educationDetails}>
            <li>
              Earned a Bachelor's degree in Applied Informatics with a focus on
              corporate information systems.
            </li>
            <li>
              Completed coursework in software engineering, database design, and
              systems analysis.
            </li>
            <li>
              Gained a strong foundation in programming, data management, and
              information system design.
            </li>
          </ul>
        </div>
      </div>

      <h2 className={styles.subheading} id="skills">
        Technical Skills
      </h2>
      <ul className={styles.skillsList}>
        <li>TypeScript</li>
        <li>Docker</li>
        <li>Jest</li>
        <li>NestJS</li>
        <li>Swagger</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>PostgreSQL</li>
        <li>Redis</li>
        <li>ClickHouse</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Redux</li>
        <li>Zustand</li>
        <li>MobX</li>
        <li>RTK Query</li>
        <li>React Query</li>
      </ul>
      <h2 className={styles.subheading} id="experience">
        Professional Journey
      </h2>
      <div className={styles.professionalJourney}>
        <div className={styles.job}>
          <h3 className={styles.jobTitle}>Senior Fullstack Developer</h3>
          <p className={styles.company}>
            Crossnetics — December 2024 – Present
          </p>
          <ul className={styles.jobDetails}>
            <li>
              Built a <strong>notification system</strong> for user messages
              with automated email notifications.
            </li>
            <li>
              Fixed critical bugs, improving <strong>stability</strong> and{" "}
              <strong>user experience</strong>.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3 className={styles.jobTitle}>Tech Lead Fullstack Developer</h3>
          <p className={styles.company}>NIKIFILINI — October 2023 – Present</p>
          <ul className={styles.jobDetails}>
            <li>
              Designed and implemented scalable{" "}
              <strong>microservice architecture</strong>, ensuring system
              flexibility and fault tolerance.
            </li>
            <li>
              Developed a reusable <strong>UI kit</strong> with Mantine,
              enhancing the design system with custom components.
            </li>
            <li>
              Engineered a <strong>real-time notification system</strong> using
              WebSocket for instant updates.
            </li>
            <li>
              Designed a robust <strong>database architecture</strong> for
              PostgreSQL and ClickHouse.
            </li>
            <li>
              Integrated secure <strong>authentication mechanisms</strong>,
              including RBAC and token-based authentication.
            </li>
          </ul>
        </div>

        <div className={styles.job}>
          <h3 className={styles.jobTitle}>Middle Fullstack Developer</h3>
          <p className={styles.company}>NIKIFILINI — May 2022 – October 2023</p>
          <ul className={styles.jobDetails}>
            <li>
              Enhanced the company's <strong>ERP system</strong> by adding new
              modules and optimizing existing functionality.
            </li>
            <li>
              Refactored legacy services, improving{" "}
              <strong>maintainability</strong> and <strong>stability</strong>.
            </li>
            <li>
              Developed and integrated <strong>APIs</strong> and third-party
              services to expand system capabilities.
            </li>
            <li>
              Configured and optimized the project build process with{" "}
              <strong>Vite</strong>, reducing build times.
            </li>
            <li>
              Increased code reliability by implementing{" "}
              <strong>unit tests</strong> with Jest.
            </li>
          </ul>
        </div>
      </div>
      <h2 className={styles.subheading}>Opportunities</h2>
      <p className={styles.text}>
        In addition to being open to freelance opportunities, I lead a small
        team of talented developers ready to take on freelance and outsourcing
        projects of moderate scope. Our team specializes in delivering
        high-quality, innovative solutions tailored to your needs, ensuring
        efficiency and precision at every step. Whether you're looking for
        assistance with a project, a dedicated development team, or someone to
        bring your ideas to life, we’re here to help. Feel free to reach out via
        the contact form or links on this page. Let’s collaborate and make your
        vision a reality!
      </p>
    </div>
  );
};

export default AboutMe;
