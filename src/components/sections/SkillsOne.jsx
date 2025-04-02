import Data from "@data/sections/skills-1.json";
import { useRouter } from 'next/router';

const SkillsOneSection = () => {
  const { locale } = useRouter();
  const currentLocale = locale || 'fr';
  const sectionData = Data[currentLocale];

  return (
    <>
      <div className="mil-section-title mil-up">
        <div className="mil-divider"></div>
        <h3>{sectionData.title}</h3>
      </div>

      {/* language */}
      <section className="mil-lang-skills mil-p-90-60">
        <div className="row justify-content-between align-items-center">
          {sectionData.items.map((item, key) => (
            <div key={`skills1-item-${key}`} className="col-6 col-lg-3">
              <div className="mil-lang-skills-item mil-center mil-up mil-mb-30">
                <div className="mil-circular-progress" data-value={`${item.value}%`}>
                  <div className="mil-counter-frame mil-upper mil-dark">
                    <span className="mil-counter" data-number={item.value}>0</span>
                    <span>%</span>
                  </div>
                </div>
                <h6 className="mil-up">{item.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* language end */}
    </>
  );
};

export default SkillsOneSection;