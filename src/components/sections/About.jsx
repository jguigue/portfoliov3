import Data from "@data/sections/about.json";
import { useRouter } from 'next/router';
import Link from 'next/link';

const AboutSection = () => {
  const { locale } = useRouter();
  const currentLocale = locale || 'fr';
  const sectionData = Data[currentLocale];
    return (
        <>
            {/* about */}
            <section id="about" className="mil-p-0-90">
                <div className="mil-oval-frame-2 mil-mb-90">
                    <img src={sectionData.avatar.image} alt={sectionData.avatar.alt} />
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="mil-center">
                            <h2 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{__html : sectionData.title}} />
                            <div className="mil-quote mil-up mil-mb-30"><i className="fas fa-quote-left" /></div>
                            <p className="mil-up mil-description mil-mb-30">{sectionData.description}</p>
                            <img src={sectionData.signature.image} alt={sectionData.signature.alt} className="mil-up mil-sign" />
                        </div>
                    </div>
                </div>
            </section>
            {/* about end */}
        </>
    );
};

export default AboutSection;