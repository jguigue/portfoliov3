import { useTranslation } from 'next-i18next';

const Story = () => {
    const { t } = useTranslation('story');

    const renderEducation = () => (
        <div className="col-xl-6">
            <div className="mil-section-title mil-up mil-left mil-mb-90">
                <div className="mil-divider"></div>
                <h3>{t('education.title')}</h3>
            </div>

            <div className="mil-timeline mil-mb-90">
                <div className="mil-timeline-track"></div>
                <ul>
                    {Object.entries(t('education.schools', { returnObjects: true })).map(([key, school]) => (
                        <li className="mil-up" key={key}>
                            <div className="mil-item-head mil-mb-5">
                                <h4>{school.name}</h4>
                                <div className="mil-text-sm">{school.period}</div>
                            </div>
                            <p className="mil-text-sm mil-mb-15">{school.degree}</p>
                            <p>{school.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const renderProfessional = () => (
        <div className="col-xl-6">
            <div className="mil-section-title mil-up mil-left mil-mb-90">
                <div className="mil-divider"></div>
                <h3>{t('professional.title')}</h3>
            </div>

            <div className="mil-timeline mil-mb-90">
                <div className="mil-timeline-track"></div>
                <ul>
                    {Object.entries(t('professional.experiences', { returnObjects: true })).map(([key, exp]) => (
                        <li className="mil-up" key={key}>
                            <div className="mil-item-head mil-mb-5">
                                <h4>{exp.title}</h4>
                                <div className="mil-text-sm">{exp.period}</div>
                            </div>
                            <p className="mil-text-sm mil-mb-15">{exp.company}</p>
                            <p>{exp.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    return (
        <section>
            <div className="row">
                {renderEducation()}
                {renderProfessional()}
            </div>
        </section>
    );
};

export default Story;