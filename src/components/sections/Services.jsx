import Data from "@data/sections/services.json";
import { useRouter } from 'next/router';
import Link from 'next/link';

const ServicesSection = () => {

    const { locale } = useRouter();
  const currentLocale = locale || 'fr';
  const sectionData = Data[currentLocale];
  return (
    <>
        <div className="mil-section-title mil-up">
            <div className="mil-divider"></div>
            <h3>{sectionData.title}</h3>
        </div>

        {/* services */}
        <section className="mil-p-90-30">
            <div className="row justify-content-between align-items-center">
                {sectionData.items.map((item, key) => (
                <div key={`services-item-${key}`} className="col-lg-4">
                    <div className="mil-icon-box mil-center mil-mb-60">
                        <div className="mil-service-icon mil-up">
                            <img src={item.icon} alt={item.title} className="mil-mb-30" />
                        </div>
                        <h5 className="mil-up mil-mb-30">{item.title}</h5>
                        <p className="mil-up mil-mb-30">{item.text}</p>
                        <div className="mil-up">

                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
        {/* services end */}
    </>
  );
};

export default ServicesSection;