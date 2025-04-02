import { useTranslation } from 'next-i18next';

const SkillsTwo = () => {
  const { t } = useTranslation('skills');
  
  // Récupérer directement le tableau de skills
  const skills = t('skills', { returnObjects: true });
  const title = t('title');


  return (
    <>
      <div className="mil-section-title mil-up">
        <div className="mil-divider" />
        <h3>{title}</h3>
      </div>

      <section className="mil-p-90-60">
        <div className="row justify-content-between align-items-center">
          {Array.isArray(skills) && skills.map((skill, key) => (
            <div className="col-lg-6" key={`skills2-item-${key}`}>
              <div className="mil-lang-skills-item mil-mb-30">
                <h6 className="mil-up mil-mb-30">{skill.label}</h6>
                <div className="mil-line-progress mil-up">
                  <div 
                    className="mil-bar" 
                    style={{width: `${skill.value}%`}}
                    data-value={`${skill.value}%`} 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SkillsTwo;