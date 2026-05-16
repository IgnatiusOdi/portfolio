import { Link } from "react-router";
import { organization_experience } from "@assets/organization_experience";
import { work_experience } from "@assets/work_experience";
import ExperienceCertificate from "@components/achievements-certifications";
import Experience from "@components/experience";
import Navbar from "@components/navbar";
import Profile from "@components/profile";
import ProgrammingTechnologies from "@components/programming-technologies";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto max-w-lg xl:max-w-3xl 2xl:max-w-6xl p-8 m-8 mr-20 rounded-lg shadow-3xl shadow-gray-400 backdrop-brightness-80">
                <Profile />

                <ProgrammingTechnologies id={"programming-technologies"} />

                <Experience
                    title={"WORK EXPERIENCE"}
                    data={work_experience}
                    id={"work-experience"}
                />

                <h1 id="projects" className="mt-8">
                    <Link to="/projects">Projects &gt;</Link>
                </h1>

                <>
                    <h1 id="education" className="mt-8">EDUCATION</h1>
                    <div>
                        <b>Institut Sains dan Teknologi Terpadu Surabaya (ISTTS)</b>
                    </div>
                    <div><i>Bachelor of Informatics</i> | 2020 - 2024</div>
                    <div>GPA: 3.95 / 4.00</div>
                </>

                <ExperienceCertificate
                    title={"ACHIEVEMENTS & CERTIFICATIONS"}
                    id={"achievements-certifications"}
                />

                <Experience
                    title={"ORGANIZATION EXPERIENCE"}
                    data={organization_experience}
                    id={"organization-experience"}
                />

                <>
                    <h1 id="languages" className="mt-8">LANGUAGES</h1>
                    <ul>
                        <li><b>Indonesian</b>: Native</li>
                        <li><b>English</b>: Professional working</li>
                        <li><b>Chinese</b>: Elementary</li>
                    </ul>
                </>

                <>
                    <h1 id="interested" className="mt-8">INTERESTED IN</h1>
                    <ul>
                        <li>Supabase, GraphQL, Unit Testing (etc: Jest)</li>
                        <li>Godot</li>
                        <li>Trail Run</li>
                    </ul>
                </>
            </div>
        </>
    );
};

export default App;
