import { useTranslation } from 'next-i18next';
import Link from "next/link";

const CallToActionSection = ( { bg } ) => {
    const { t } = useTranslation('cta');

  return (
    <>
        <div className="mil-divider mil-up mil-mb-90" />

        {/* call to action */}
        <div className="mil-p-0-90">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="mil-center">
                        <h3 className="mil-up mil-mb-30">{t('title')}</h3>
                        <div className="mil-up">
                            <Link href={t('button.link')} className="mil-btn mil-sm-btn">{t('button.label')}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* call to action end */}
    </>
  );
};

export default CallToActionSection;