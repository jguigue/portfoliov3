// pages/contact.js
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import SEO from '@components/SEO';
import { Formik } from "formik";
import appData from "@data/app.json";
import { useTranslation } from 'next-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');
  
  return (
    <Layouts
      rightPanelBackground={"/img/person/bg-2.jpg"}
      rightPanelImg={"/img/person/portrait.jpg"}
    >
      <SEO page="contact" />
      <PageBanner pageTitle={t('title')} align={"center"} />

      {/* info */}
      <div>
        <ul className="mil-puplication-details mil-up mil-mb-90">
          <li>
            <span className="mil-upper mil-accent">{t('info.phone')} </span>
            &nbsp;&nbsp;
            <span className="mil-upper mil-dark">+33 7 69 84 39 53</span>
          </li>
          <li>
            <span className="mil-upper mil-accent">{t('info.mail')} </span>&nbsp;&nbsp;
            <span className="mil-upper mil-dark">contact@louisguigue.com</span>
          </li>
        </ul>
      </div>

      {/* map */}
      <div className="mil-map mil-mb-90">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5824.438087003078!2d5.931329997754011!3d43.12092451654498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c91b0d0ac2a23b%3A0xa5622cb21bbcdcf0!2sPort%20de%20Toulon!5e0!3m2!1sfr!2sfr!4v1695387074414!5m2!1sfr!2sfr"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      {/* map end */}

      <div className="mil-section-title mil-up">
        <div className="mil-divider" />
        <h3>{t('form.title')}</h3>
      </div>

      {/* contact */}
      <div id="contact" className="mil-p-90-60">
        <Formik
          initialValues={{ email: "", name: "", message: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            const form = document.getElementById("contactForm");
            const status = document.getElementById("contactFormStatus");
            const data = new FormData();

            data.append("name", values.name);
            data.append("email", values.email);
            data.append("message", values.message);

            fetch(form.action, {
              method: "POST",
              body: data,
              headers: {
                Accept: "application/json",
              },
            })
              .then((response) => {
                if (response.ok) {
                  status.innerHTML = t('form.success');
                  form.reset();
                } else {
                  response.json().then((data) => {
                    if (Object.hasOwn(data, "errors")) {
                      status.innerHTML = data["errors"]
                        .map((error) => error["message"])
                        .join(", ");
                    } else {
                      status.innerHTML = t('form.error');
                    }
                  });
                }
              })
              .catch((error) => {
                status.innerHTML = t('form.error');
              });

            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form
              onSubmit={handleSubmit}
              id="contactForm"
              action={appData.settings.formspreeURL}
              className="row align-items-center"
            >
              <div className="col-lg-6 mil-up">
                <input
                  type="text"
                  placeholder={t('form.name')}
                  name="name"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <div className="col-lg-6 mil-up">
                <input
                  type="email"
                  placeholder={t('form.email')}
                  name="email"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <div className="col-lg-12 mil-up">
                <textarea
                  placeholder={t('form.message')}
                  name="message"
                  required="required"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </div>
              <div className="col-lg-8">
                <p className="mil-up mil-mb-30">
                  <span className="mil-accent"></span>{" "}
                </p>
              </div>
              <div className="col-lg-4">
                <div className="mil-adaptive-right mil-up mil-mb-30">
                  <button type="submit" className="mil-btn mil-sm-btn">
                    <span>{t('form.submit')}</span>
                  </button>
                </div>
              </div>
              <div className="form-status" id="contactFormStatus" />
            </form>
          )}
        </Formik>
      </div>
      {/* contact end */}
    </Layouts>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'contact'])),
    },
  };
}

export default Contact;