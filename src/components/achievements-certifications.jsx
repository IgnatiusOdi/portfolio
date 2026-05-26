const ExperienceCertificate = (props) => {
    return (
        <>
            <h1 id={props.id} className="mt-8">{props.title}</h1>

            {props.data.map((d) => (
                <>
                    <h2>{d.year}</h2>
                    <ul className="plus">
                        {d.achievements_certifications.map((ac) => (
                            <li key={ac.title}>
                                <a href={ac.link} target="_blank" rel="noopener noreferrer">
                                    {ac.title} | {ac.issuing_organization} ({ac.issue_date})
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            ))}
        </>
    );
};

export default ExperienceCertificate;