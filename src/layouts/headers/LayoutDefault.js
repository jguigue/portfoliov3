import Link from "next/link";
import { useState } from "react";
import appData from "@data/app.json";
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

const DefaultHeader = ({ extraClass }) => {
  const [toggle, setToggle] = useState(false);
  const { asPath, locale } = useRouter();
  const currentLocale = locale || 'fr';

  // Récupérer le menu pour la langue actuelle
  const menuItems = Array.isArray(appData.header.menu) ? 
    appData.header.menu : 
    appData.header.menu[currentLocale];

  const navItems = menuItems.map(item => {
    let s_class1 = '';
    if (item.children != 0) {
      s_class1 = 'mil-has-children';
    }
    if ((asPath.indexOf(item.link) != -1 && item.link != '/') || asPath == item.link) {
      s_class1 += ' mil-active';
    }
    return { ...item, classes: s_class1 };
  });

  return (
    <>
      <div className="mil-top-panel">
        <Link href={appData.header.logo.link} className="mil-logo">
          <span className=""><img src="/img/logos/logo_blanc.svg" alt="Logo" /></span>
        </Link>

        <div className={`mil-navigation ${toggle ? "mil-active" : ""}`}>
          <nav id="swupMenu" className="mil-menu-transition">
            <ul>
              {navItems.map((item, key) => (
                <li className={item.classes} key={`header-menu-item-${key}`}>
                  <a href={item.link} target={item.target}>{item.label}</a>
                  {item.children != 0 &&
                    <ul>
                      {item.children.map((subitem, key2) => (
                        <li key={`header-submenu${key}-item-${key2}`}>
                          <Link href={subitem.link}>{subitem.label}</Link>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mil-top-panel-btns">
          <div className="mil-language-switcher">
            <Link
              href={asPath}
              locale="fr"
              className={`mil-lang-link ${currentLocale === 'fr' ? 'mil-active' : ''}`}
            >
              FR
            </Link>
            <span className="mil-lang-separator">|</span>
            <Link
              href={asPath}
              locale="en"
              className={`mil-lang-link ${currentLocale === 'en' ? 'mil-active' : ''}`}
            >
              EN
            </Link>
          </div>

          <Link href={appData.header.button.link} className="mil-contact-btn">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </Link>

          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .mil-language-switcher {
          display: flex;
          align-items: center;
          margin-right: 15px;
        }
        .mil-lang-link {
          color: var(--text-color, #fff);
          text-decoration: none;
          padding: 5px 8px;
          font-size: 14px;
          transition: opacity 0.3s;
        }
        .mil-lang-link:hover {
          opacity: 0.8;
        }
        .mil-lang-link.mil-active {
          font-weight: 600;
        }
        .mil-lang-separator {
          color: var(--text-color, #fff);
          opacity: 0.5;
          margin: 0 2px;
        }
      `}</style>
    </>
  );
};

export default DefaultHeader;