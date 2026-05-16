import { MdOutlineEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Profile = () => {
    return (
        <>
            <h1 id="profile">Hello, I'm Odi</h1>
            <div className="text-justify">
                Software Engineer with 1+ years of experience in full-stack web development, specializing in Laravel, JavaScript, and SQL. Experienced in agile team collaboration, automated reporting pipelines, and UI/UX optimization. Proficient across the full stack — from frontend frameworks (React, Vue.js, Next.js) to backend APIs and relational databases. Passionate about applying technology to create efficient, human-centric solutions. Additionally experienced in IoT systems development, cross-platform mobile applications (Flutter/Dart), and cloud-deployed serverless architecture (Firebase).
            </div>
            <div className="flex justify-center gap-4 m-4">
                <a href="mailto:ignodi@gmail.com" target="_blank">
                    <MdOutlineEmail size={40} />
                </a>
                <a href="https://www.linkedin.com/in/ignatius-odi/" target="_blank">
                    <FaLinkedin size={40} />
                </a>
                <a href="https://github.com/IgnatiusOdi" target="_blank">
                    <FaGithub size={40} />
                </a>
            </div>
        </>
    );
};

export default Profile;
