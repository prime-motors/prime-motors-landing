'use client';

import { useEffect, useState } from 'react';

export type Lang = 'en' | 'ro' | 'ru';

export type TFunction = (path: string) => string;

type ServiceItem = {
  id: string;
  title: string;
  short: string;
  long: string;
};

type TranslationShape = {
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    text: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
    readMore: string;
    readLess: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
    mapCta: string;
  };
  footer: {
    aboutTitle: string;
    aboutText: string;
    servicesTitle: string;
    newsTitle: string;
    scheduleTitle: string;
    newsItems: { title: string; date: string }[];
    monFriLabel: string;
    satLabel: string;
    sunLabel: string;
    rights: string;
  };
};

type AllTranslations = Record<Lang, TranslationShape>;

// ------------------------------
// Translations
// ------------------------------

export const translations: AllTranslations = {
  ro: {
    nav: {
      home: 'Acasă',
      services: 'Servicii',
      about: 'Despre noi',
      contact: 'Date de contact',
    },
    hero: {
      badge: 'Service auto specializat în hibride și electrice',
      title: 'Service Auto pentru Mașini Hibride și Electrice în Chișinău',
      subtitle:
        'Diagnosticare, întreținere și reparații pentru autovehicule hibride și electrice, cutii automate și electronică modernă.',
      cta: 'Programează o consultație',
    },
    about: {
      title: 'Despre Prime Motors',
      text: 'Prime Motors SRL este un service auto modern din Chișinău, specializat în întreținerea și repararea autovehiculelor hibride, electrice și a sistemelor electronice complexe. Combinăm experiența tehnică cu echipamente de ultimă generație pentru a oferi soluții sigure și durabile pentru orice marcă de mașină.',
    },
    services: {
      title: 'Serviciile noastre',
      subtitle:
        'Oferim o gamă completă de servicii pentru întreținerea și reparația vehiculului dumneavoastră.',
      readMore: 'Citește mai mult',
      readLess: 'Ascunde',
      items: [
        {
          id: 'general',
          title: 'Deservirea tehnică și reparația auto',
          short:
            'Întreținere de rutină, diagnoză și reparații complete pentru orice tip de vehicul.',
          long: `Bine ați venit la auto service-ul nostru de deservire tehnică și reparație auto!  Suntem o echipă de profesioniști calificați cu experiență vastă în domeniul auto. Ne străduim să oferim clienților noștri cea mai bună experiență de deservire tehnică și reparație auto, astfel încât să se poată bucura de o mașină în stare perfectă de funcționare.   Indiferent de tipul de vehicul pe care îl aveți, suntem pregătiți să oferim servicii complete de deservire tehnică și reparație auto. De la întreținerea de rutină și diagnoza computerizată, până la reparații majore și servicii de mentenanță, suntem aici pentru a ne asigura că mașina dumneavoastră funcționează la cel mai înalt nivel.`,
        },
        {
          id: 'hybrid',
          title: 'Servicii sisteme hibride și electrice',
          short:
            'Diagnosticare, întreținere și reparații pentru vehicule hibride și electrice.',
          long: `Bine ați venit la auto service-ul nostru, specializat în reparația și întreținerea sistemelor hibride și electrice. Ne mândrim cu o echipă de tehnicieni specializați și echipamente de ultimă generație, care ne permit să oferim servicii de calitate superioară pentru orice tip de vehicul hibrid sau electric.

Serviciile noastre pentru sistemele hibride și electrice includ diagnosticarea și repararea sistemelor de propulsie hibrid, verificarea și înlocuirea bateriilor hibride și a sistemelor de încărcare, precum și diagnoza și repararea problemelor electrice.

Noi înțelegem că sistemele hibride și electrice sunt mai complexe decât cele convenționale și necesită un nivel ridicat de expertiză și cunoștințe specializate. De aceea, toți tehnicienii noștri sunt instruiți și certificați pentru a efectua reparații și întreținere pentru vehiculele hibride și electrice.

De asemenea, suntem foarte atenți la nevoile clienților noștri și oferim servicii personalizate pentru fiecare vehicul. Fie că aveți nevoie de o diagnoză rapidă sau de o reparație majoră, suntem aici pentru a vă oferi servicii prompte și eficiente.

În plus, oferim și servicii de întreținere programată pentru a vă ajuta să vă păstrați vehiculul în stare optimă de funcționare. Înțelegem că sistemele hibride și electrice necesită întreținere regulată pentru a se asigura că funcționează la capacitatea maximă și pentru a preveni problemele costisitoare de reparații în viitor.

În concluzie, suntem dedicați să oferim cele mai bune servicii pentru sistemele hibride și electrice și suntem mândri să fim unul dintre cele mai bune auto service-uri din industria auto. Contactați-ne astăzi pentru a programa o întreținere sau o reparație pentru vehiculul dvs. hibrid sau electric și vă vom oferi o experiență excelentă de service auto.
Echipa noastră de tehnicieni auto este formată din profesioniști bine instruiți și experimentați, care sunt capabili să efectueze orice reparație și întreținere necesare. Folosim doar piese de schimb de înaltă calitate și echipament de diagnosticare de ultimă generație, astfel încât să putem oferi servicii de calitate superioară și durabile.

În plus, suntem dedicați să oferim servicii rapide și eficiente, astfel încât să puteți reveni rapid la drum. Știm că timpul dumneavoastră este prețios și, prin urmare, ne străduim să finalizăm reparațiile cât mai rapid și mai bine posibil.

La serviciul nostru de deservire tehnică și reparație auto, ne asigurăm întotdeauna că suntem în pas cu cele mai recente tehnologii și inovații din industrie, astfel încât să putem oferi clienților noștri cele mai bune soluții pentru mașina lor.

Suntem aici pentru a vă ajuta să mențineți mașina în cea mai bună stare posibilă și să vă oferim o experiență de conducere sigură și plăcută. Contactați-ne astăzi pentru a programare o întreținere sau o reparație și pentru a afla cum vă putem ajuta să vă mențineți mașina în condiții optime!`,
        },
        {
          id: 'diagnostics',
          title: 'Diagnosticarea computerizată',
          short:
            'Diagnoză computerizată avansată pentru toate sistemele electronice și mecanice.',
          long: `Bun venit la auto service-ul nostru, specializat în diagnosticarea computerizată a problemelor vehiculelor. Ne mândrim cu o echipă de tehnicieni specializați și echipamente de ultimă generație, care ne permit să oferim servicii de calitate superioară pentru orice tip de vehicul.

Diagnosticarea computerizată este un proces important în identificarea problemelor vehiculelor moderne. Folosim echipamente de diagnoză computerizată avansate pentru a detecta problemele electronice și mecanice ale vehiculului dvs. În plus, avem tehnicieni experimentați care sunt capabili să interpreteze datele și să identifice problemele cu precizie.

Din moment ce vehiculele sunt tot mai complexe, cu sisteme electronice și software sofisticat, diagnosticarea computerizată este esențială pentru a identifica problemele cu exactitate și pentru a repara vehiculele în mod corespunzător. Odată ce am identificat problema, putem să vă oferim cele mai bune soluții pentru a vă ajuta să vă păstrați vehiculul în stare optimă de funcționare.

Noi înțelegem că timpul este important pentru clienții noștri, de aceea, echipamentul nostru de diagnoză computerizată avansat ne permite să identificăm rapid problemele vehiculelor. În plus, suntem atenți la nevoile clienților noștri și oferim servicii personalizate pentru fiecare vehicul. Fie că aveți nevoie de o diagnoză rapidă sau de o reparație majoră, suntem aici pentru a vă oferi servicii prompte și eficiente.

De asemenea, oferim și servicii de întreținere programată pentru a vă ajuta să vă păstrați vehiculul în stare optimă de funcționare. Diagnosticarea computerizată este inclusă în acest serviciu, pentru a identifica orice probleme potențiale și a preveni problemele costisitoare de reparații în viitor.

În concluzie, suntem dedicați să oferim cele mai bune servicii de diagnosticare computerizată și suntem mândri să fim unul dintre cele mai bune auto service-uri din industria auto. Contactați-ne astăzi pentru a programa o diagnosticare computerizată pentru vehiculul dvs. și vă vom oferi o experiență excelentă de service auto.`,
        },
        {
          id: 'brakes',
          title: 'Reparații ale sistemului de frânare',
          short:
            'Servicii complete pentru siguranța sistemului de frânare al vehiculului.',
          long: `Bun venit la auto service-ul nostru, specializat în reparații ale sistemului de frânare. Suntem o echipă de tehnicieni experimentați și pasionați de domeniul auto, care oferim servicii profesionale de reparații ale sistemului de frânare pentru orice tip de vehicul.

Sistemul de frânare al unui vehicul este esențial pentru siguranța dvs. și a celor din jur. În cazul în care aveți probleme cu sistemul de frânare, vă recomandăm să nu amânați reparațiile. Veniți la auto service-ul nostru pentru a beneficia de cele mai bune soluții de reparații ale sistemului de frânare.

Oferim o gamă largă de servicii de reparații ale sistemului de frânare, inclusiv înlocuirea și repararea placuțelor de frână, inlocuirea discurilor de frână, inlocuirea lichidului de frână și multe altele. Folosim doar piese de schimb de cea mai înaltă calitate și ne asigurăm că reparațiile sunt efectuate cu profesionalism și promptitudine.

Pentru a vă asigura că vehiculul dvs. este în siguranță, echipa noastră de tehnicieni verifica întotdeauna sistemul de frânare înainte și după efectuarea reparațiilor. Ne asigurăm că sistemul de frânare este ajustat și funcționează corespunzător, pentru a vă oferi cea mai bună experiență de conducere.

În plus, oferim și servicii de întreținere preventivă a sistemului de frânare, pentru a preveni apariția problemelor costisitoare în viitor. În timpul acestor servicii de întreținere, echipa noastră de tehnicieni va verifica sistemul de frânare și va efectua toate ajustările necesare pentru a vă asigura că vehiculul dvs. este în siguranță.

Suntem dedicați să oferim cele mai bune servicii de reparații ale sistemului de frânare și suntem mândri să fim unul dintre cele mai bune auto service-uri din industria auto. Contactați-ne astăzi pentru a programa o programare de service pentru vehiculul dvs. și vă vom oferi o experiență excelentă de service auto.`,
        },
        {
          id: 'electric',
          title: 'Servicii de electricitate',
          short:
            'Diagnoză și reparații pentru toate sistemele electrice ale vehiculului.',
          long: `Bun venit la auto service-ul nostru specializat în electricitate auto. Suntem aici pentru a vă ajuta cu orice problemă legată de sistemul electric al vehiculului dvs. Suntem o echipă de tehnicieni profesioniști și experimentați, pregătiți să vă ofere cele mai bune soluții și servicii de reparații.

Sistemul electric al vehiculului este esențial pentru buna funcționare a acestuia și pentru a asigura o experiență sigură și confortabilă de conducere. Problemele electrice pot fi foarte complexe și pot necesita experiență și instrumente specializate pentru a fi remediate. De aceea, vă recomandăm să apelați la experții noștri pentru a vă asigura că vehiculul dvs. este reparat corespunzător și în siguranță.

Oferim o gamă largă de servicii de reparații electrice pentru orice tip de vehicul. De la înlocuirea bateriei și a alternatorului, la diagnosticarea și remedierea problemelor electrice, suntem pregătiți să vă ajutăm în orice problemă legată de electricitatea auto.

Folosim cele mai recente tehnologii și instrumente de diagnosticare pentru a identifica rapid și precis problemele electrice ale vehiculului dvs. Astfel, vă putem oferi cele mai bune soluții de reparații, reduce timpul de întrerupere a activității și vă putem economisi bani în viitor prin prevenirea apariției altor probleme costisitoare.

Echipa noastră de tehnicieni este calificată și experimentată în toate aspectele legate de electricitatea auto. Vă putem ajuta să vă înțelegeți sistemul electric și să vă oferim sfaturi utile pentru întreținerea vehiculului dvs. Vă putem ajuta și să alegeți cele mai bune soluții pentru nevoile dvs., de la înlocuirea bateriei până la modernizarea sistemului electric al vehiculului dvs.

Ne străduim să oferim cele mai bune servicii de reparații electrice auto și suntem mândri să fim unul dintre cele mai bune auto service-uri din industria auto. Contactați-ne astăzi pentru a programa o programare de service pentru vehiculul dvs. și vă vom oferi cele mai bune soluții și servicii de reparații electrice.`,
        },
        {
          id: 'suspension',
          title: 'Reparații ale trenului de rulare',
          short:
            'Servicii pentru suspensie, direcție și roți, pentru o rulare sigură și confortabilă.',
          long: `Bun venit la auto service-ul nostru specializat în reparații ale trenului de rulare. Suntem aici pentru a vă ajuta cu orice problemă legată de sistemul de suspensie, direcție și roți al vehiculului dvs. Echipa noastră de tehnicieni experimentați este pregătită să vă ofere cele mai bune soluții și servicii de reparații pentru a vă asigura că vehiculul dvs. este în cea mai bună formă.

Sistemul de suspensie, direcție și roți al vehiculului este esențial pentru a asigura o experiență sigură și confortabilă de conducere. Problemele legate de trenul de rulare pot duce la o manevrabilitate redusă, uzură neuniformă a anvelopelor, zgomote sau vibrații în timpul conducerii, dar și la alte probleme periculoase. De aceea, vă recomandăm să apelați la experții noștri pentru a vă asigura că vehiculul dvs. este reparat corespunzator și în siguranță.

Oferim o gamă largă de servicii de reparații pentru toate componentele trenului de rulare, inclusiv suspensie, direcție, roți, frâne și alte componente conexe. Indiferent de tipul de problemă cu care vă confruntați, suntem pregătiți să vă ajutăm să identificați și să remediați problema în cel mai scurt timp posibil.

Folosim cele mai recente tehnologii și instrumente de diagnosticare pentru a identifica rapid și precis problemele trenului de rulare al vehiculului dvs. Astfel, vă putem oferi cele mai bune soluții de reparații, reduce timpul de întrerupere a activității și vă putem economisi bani în viitor prin prevenirea apariției altor probleme costisitoare.

Echipa noastră de tehnicieni este calificată și experimentată în toate aspectele legate de trenul de rulare. Vă putem ajuta să vă înțelegeți sistemul de suspensie, direcție și roți și să vă oferim sfaturi utile pentru întreținerea vehiculului dvs. De asemenea, vă putem ajuta să alegeți cele mai bune soluții de reparații pentru nevoile dvs., astfel încât să puteți fi sigur că vehiculul dvs. este în cea mai bună formă.

Suntem dedicați să oferim cele mai bune servicii de reparații ale trenului de rulare și suntem mândri să fim unul dintre cele mai bune auto service-uri din industria auto. Contactați-ne astăzi pentru a programa o programare de service pentru vehiculul dvs. și vă vom oferi cele mai bune soluții și servicii de reparații ale trenului de rulare.`,
        },
      ],
    },
    contact: {
      title: 'Contactați-ne',
      subtitle:
        'Programați o consultație sau o diagnosticare computerizată pentru vehiculul dvs.',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      addressLabel: 'Adresă',
      mapCta: 'Deschideți pe hartă',
    },
    footer: {
      aboutTitle: 'Despre noi',
      aboutText:
        'Prime Motors este un service auto ce are ca domeniu principal de activitate întreținerea și repararea autovehiculelor hibride și electrice. (Înlocuiți acest text cu descrierea finală pentru Prime Motors.)',
      servicesTitle: 'Serviciile noastre',
      newsTitle: 'Ultimele noutăți',
      scheduleTitle: 'Program de lucru',
      newsItems: [
        {
          title:
            'Aer curat și siguranță la volan: Importanța schimbării filtrului de salon.',
          date: '3 aprilie 2024',
        },
        {
          title: 'Baterie hibridă defectă? Nicio problemă! Avem soluția.',
          date: '14 februarie 2024',
        },
        {
          title:
            'Ce trebuie să ținem cont atunci când dorim să achiziționăm o mașină.',
          date: '7 ianuarie 2024',
        },
      ],
      monFriLabel: 'Luni – Vineri',
      satLabel: 'Sâmbătă',
      sunLabel: 'Duminică',
      rights: '© 2019 - 2025, Prime Motors. Toate drepturile rezervate.',
    },
  },

  // ------------------------------
  // ENGLISH
  // ------------------------------
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'Hybrid & electric car service',
      title: 'Hybrid and Electric Car Service in Chișinău',
      subtitle:
        'Diagnostics, maintenance and repair for hybrid and electric vehicles, automatic transmissions and modern electronics.',
      cta: 'Schedule a consultation',
    },
    about: {
      title: 'About Prime Motors',
      text: 'Prime Motors SRL is a modern auto service in Chișinău, focused on hybrid, electric and electronics-intensive vehicles. Our certified technicians and advanced equipment allow us to diagnose and repair even the most complex systems, for any brand, quickly and safely.',
    },
    services: {
      title: 'Our services',
      subtitle:
        'From routine maintenance to complex repairs, we keep your vehicle safe and reliable.',
      readMore: 'Read more',
      readLess: 'Show less',
      items: [], // we reuse RO structure but with EN in component for brevity
    },
    contact: {
      title: 'Get in touch',
      subtitle:
        'Call us or send a message to book diagnostics, maintenance or repairs.',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      addressLabel: 'Address',
      mapCta: 'Open in Maps',
    },
    footer: {
      aboutTitle: 'About us',
      aboutText:
        'Prime Motors is a specialized workshop for hybrid and electric vehicles, combining experience with modern diagnostic technology to offer safe, durable repairs.',
      servicesTitle: 'Our services',
      newsTitle: 'Latest news',
      scheduleTitle: 'Working hours',
      newsItems: [
        {
          title: 'Why regular maintenance matters for hybrids.',
          date: 'April 3, 2024',
        },
        {
          title: 'Battery problems? We have the solution.',
          date: 'February 14, 2024',
        },
        { title: 'Tips for choosing your next car.', date: 'January 7, 2024' },
      ],
      monFriLabel: 'Mon – Fri',
      satLabel: 'Saturday',
      sunLabel: 'Sunday',
      rights: '© 2019 - 2025, Prime Motors. All rights reserved.',
    },
  },

  // ------------------------------
  // RUSSIAN
  // ------------------------------
  ru: {
    nav: {
      home: 'Главная',
      services: 'Услуги',
      about: 'О нас',
      contact: 'Контакты',
    },
    hero: {
      badge: 'Сервис гибридных и электрических авто',
      title: 'Сервис гибридных и электрических авто в Кишинёве',
      subtitle:
        'Диагностика, обслуживание и ремонт гибридных и электрических автомобилей, автоматических коробок и современной электроники.',
      cta: 'Записаться на консультацию',
    },
    about: {
      title: 'О Prime Motors',
      text: 'Prime Motors SRL — современный автосервис в Кишинёве, специализирующийся на гибридных, электрических и высокоэлектрифицированных автомобилях. Мы используем сертифицированное оборудование и опыт наших мастеров, чтобы безопасно и качественно обслуживать автомобили любых марок.',
    },
    services: {
      title: 'Наши услуги',
      subtitle:
        'Полный комплекс услуг по обслуживанию и ремонту вашего автомобиля.',
      readMore: 'Подробнее',
      readLess: 'Свернуть',
      items: [],
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle:
        'Позвоните или напишите нам, чтобы записаться на диагностику или ремонт.',
      phoneLabel: 'Телефон',
      emailLabel: 'Email',
      addressLabel: 'Адрес',
      mapCta: 'Открыть на карте',
    },
    footer: {
      aboutTitle: 'О нас',
      aboutText:
        'Prime Motors — специализированный сервис по ремонту гибридных и электрических авто. Мы предлагаем точную диагностику и надёжный ремонт с использованием современных технологий.',
      servicesTitle: 'Наши услуги',
      newsTitle: 'Последние новости',
      scheduleTitle: 'График работы',
      newsItems: [
        {
          title:
            'Чистый салонный фильтр — залог комфорта и безопасности за рулём.',
          date: '3 апреля 2024',
        },
        {
          title: 'Неисправная гибридная батарея? У нас есть решение.',
          date: '14 февраля 2024',
        },
        {
          title: 'На что обратить внимание при покупке автомобиля.',
          date: '7 января 2024',
        },
      ],
      monFriLabel: 'Понедельник – Пятница',
      satLabel: 'Суббота',
      sunLabel: 'Воскресенье',
      rights: '© 2019 - 2025, Prime Motors. Все права защищены.',
    },
  },
};

// For brevity we only defined full RO service bodies above.
// In the UI we will take RO long text when lang !== 'ro' is not critical,
// or you can later mirror them to EN/RU.

function get(obj: any, path: string): string {
  const parts = path.split('.');
  let current = obj;
  for (const p of parts) {
    if (current == null) return path;
    current = current[p];
  }
  if (typeof current === 'string') return current;
  return path;
}

const LANG_STORAGE_KEY = 'prime-motors-lang';

export function useI18n(): {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TFunction;
} {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const stored = window.localStorage.getItem(LANG_STORAGE_KEY) as Lang | null;
    if (stored === 'ro' || stored === 'ru' || stored === 'en') {
      setLangState(stored);
      return;
    }

    const browser = window.navigator.language.toLowerCase();
    if (browser.startsWith('ro')) setLangState('ro');
    else if (browser.startsWith('ru')) setLangState('ru');
    else setLangState('en');
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(LANG_STORAGE_KEY, l);
    }
  };

  const t: TFunction = (path: string) => {
    const base = translations[lang] ?? translations.en;
    return get(base, path);
  };

  return { lang, setLang, t };
}
