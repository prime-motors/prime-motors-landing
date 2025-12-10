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
    eyebrow: string;
    titleMain: string;
    descriptionMain: string;
    titleTransmission: string;
    descriptionTransmission: string;
    titleElectronics: string;
    descriptionElectronics: string;
    cta: string;
  };
  about: {
    title: string;
    text: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
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
    servicesList: string[];
    newsTitle: string;
    scheduleTitle: string;
    newsItems: { title: string; date: string }[];
    monFriLabel: string;
    satLabel: string;
    sunLabel: string;
    phoneLabel: string;
    emailLabel: string;
    addressLabel: string;
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
      eyebrow: 'Service auto hibrid & electric',
      titleMain:
        'Service auto pentru vehicule hibride și electrice în Chișinău',
      descriptionMain:
        'Diagnostică, întreținere și reparații pentru vehicule hibride și electrice, cutii automate și electronică modernă.',
      titleTransmission: 'Servicii pentru cutii de viteze automate',
      descriptionTransmission:
        'Schimb de ulei, diagnostică și reparații pentru cutii automate și CVT.',
      titleElectronics: 'Diagnostică electronică avansată',
      descriptionElectronics:
        'Diagnostică computerizată pentru sisteme hibride, unități ECU, ABS, airbag și altele.',
      cta: 'Programează o consultație',
    },
    about: {
      title: 'Despre Prime Motors',
      text: 'Prime Motors SRL este un service auto modern din Chișinău, specializat în întreținerea și repararea autovehiculelor hibride, electrice și a sistemelor electronice complexe. Combinăm experiența tehnică cu echipamente de ultimă generație pentru a oferi soluții sigure și durabile pentru orice marcă de mașină.',
      bullet1:
        'Specializați în hibride, electrice și electronică auto avansată',
      bullet2: 'Diagnoză computerizată de ultimă generație',
      bullet3: 'Piese de schimb de calitate și intervenții documentate',
      bullet4: 'Servicii adaptate nevoilor fiecărui client',
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
      servicesList: [
        'Deservirea tehnică și reparația auto',
        'Servicii sisteme hibride și electrice',
        'Diagnosticarea computerizată',
        'Reparații ale sistemului de frânare',
        'Electricitate',
        'Reparații ale trenului de rulare',
      ],
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
      phoneLabel: 'Tel:',
      emailLabel: 'Email:',
      addressLabel: 'Adresă:',
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
      eyebrow: 'Hybrid & Electric Car Service',
      titleMain: 'Hybrid and Electric Car Service in Chișinău',
      descriptionMain:
        'Diagnostics, maintenance and repair for hybrid and electric vehicles, automatic transmissions and modern electronics.',
      titleTransmission: 'Automatic transmission service and repair',
      descriptionTransmission:
        'Professional diagnostics, oil changes and repairs for modern automatic and CVT gearboxes.',
      titleElectronics: 'Modern vehicle electronics diagnostics',
      descriptionElectronics:
        'Advanced computer diagnostics for hybrid systems, ECUs, ABS, airbag units and more.',
      cta: 'Schedule a consultation',
    },
    about: {
      title: 'About Prime Motors',
      text: 'Prime Motors SRL is a modern auto service in Chișinău, focused on hybrid, electric and electronics-intensive vehicles. Our certified technicians and advanced equipment allow us to diagnose and repair even the most complex systems, for any brand, quickly and safely.',
      bullet1:
        'Specialised in hybrid, electric and advanced automotive electronics',
      bullet2: 'State-of-the-art computer diagnostics',
      bullet3: 'Quality spare parts and fully documented work',
      bullet4: 'Services tailored to each customer’s needs',
    },
    services: {
      title: 'Our services',
      subtitle:
        'We provide a complete range of services to maintain and repair your vehicle.',
      readMore: 'Read more',
      readLess: 'Read less',
      items: [
        {
          id: 'general',
          title: 'General maintenance & repairs',
          short:
            'Routine maintenance, computer diagnostics and full repairs for any type of vehicle.',
          long: `
Welcome to our auto service for general maintenance and repairs. Our experienced technicians handle everything from routine servicing and oil changes to complex mechanical repairs.

We work with all types of vehicles and focus on reliability, safety and long-term performance. Whether you need a quick check or major repairs, we are here to keep your car in perfect working condition.`.trim(),
        },
        {
          id: 'hybridElectric',
          title: 'Hybrid & electric systems service',
          short:
            'Diagnostics and repair for hybrid and electric drive systems, batteries and charging.',
          long: `
We are specialized in service and repair for hybrid and electric vehicles. Using modern equipment and trained technicians, we diagnose and repair hybrid drive systems, high-voltage batteries and charging systems.

We also offer scheduled maintenance to keep hybrid and electric systems healthy and to prevent expensive failures in the future.`.trim(),
        },
        {
          id: 'diagnostics',
          title: 'Computer diagnostics',
          short:
            'Advanced diagnostics for all electronic systems – engine, ABS, airbag, hybrid modules.',
          long: `
Modern vehicles rely on complex electronics. With advanced diagnostic tools we can quickly read fault codes, analyze live data and accurately identify both electronic and mechanical issues.

Computer diagnostics are also included in our preventive maintenance, helping us detect potential problems early and avoid costly repairs later on.`.trim(),
        },
        {
          id: 'brakes',
          title: 'Brake system repairs',
          short:
            'Inspection and complete service for discs, pads and brake fluid – safety first.',
          long: `
Your brake system is critical for safety. We inspect, service and repair brake components such as pads, discs and hydraulic lines, and we replace brake fluid when needed.

After every repair we test the system to make sure your vehicle brakes efficiently and predictably in all situations.`.trim(),
        },
        {
          id: 'electricity',
          title: 'Auto electrical services',
          short:
            'Battery, alternator, wiring and electrical consumers – reliable electrical systems.',
          long: `
We handle all types of electrical problems: battery and alternator issues, poor charging, lighting faults, wiring problems and more.

With modern diagnostic tools we find faults quickly and repair them correctly, restoring the comfort and safety features your car depends on.`.trim(),
        },
        {
          id: 'drivetrain',
          title: 'Suspension & drivetrain repairs',
          short:
            'Suspension, steering and running gear for a stable, comfortable ride.',
          long: `
We repair suspension, steering and other drivetrain components that affect comfort, stability and tire wear.

If you notice vibrations, noises, unstable behavior in corners or uneven tire wear, our technicians can diagnose the cause and restore the vehicle’s handling and safety.`.trim(),
        },
      ],
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
      servicesList: [
        'General maintenance and repair',
        'Hybrid and electric system services',
        'Computer diagnostics',
        'Brake system repair',
        'Electrical services',
        'Drivetrain and suspension repair',
      ],
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
      phoneLabel: 'Phone:',
      emailLabel: 'Email:',
      addressLabel: 'Address:',
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
      eyebrow: 'Сервис гибридных и электрических авто',
      titleMain: 'Сервис гибридных и электрических автомобилей в Кишинэу',
      descriptionMain:
        'Диагностика, обслуживание и ремонт гибридных и электрических авто, автоматических коробок передач и современной электроники.',
      titleTransmission: 'Сервис и ремонт АКПП и вариаторов',
      descriptionTransmission:
        'Профессиональная диагностика, замена масла и ремонт современных автоматических коробок.',
      titleElectronics: 'Диагностика современной электроники авто',
      descriptionElectronics:
        'Компьютерная диагностика гибридных систем, блоков управления, ABS, подушек безопасности и других систем.',
      cta: 'Записаться на консультацию',
    },
    about: {
      title: 'О Prime Motors',
      text: 'Prime Motors SRL — современный автосервис в Кишинёве, специализирующийся на гибридных, электрических и высокоэлектрифицированных автомобилях. Мы используем сертифицированное оборудование и опыт наших мастеров, чтобы безопасно и качественно обслуживать автомобили любых марок.',
      bullet1:
        'Специализация на гибридных, электрических авто и современной электронике',
      bullet2: 'Современная компьютерная диагностика',
      bullet3: 'Качественные запчасти и прозрачная фиксация всех работ',
      bullet4: 'Индивидуальный подход к каждому клиенту',
    },
    services: {
      title: 'Наши услуги',
      subtitle:
        'Мы предлагаем полный комплекс работ по обслуживанию и ремонту вашего автомобиля.',
      readMore: 'Подробнее',
      readLess: 'Свернуть',
      items: [
        {
          id: 'general',
          title: 'Техническое обслуживание и ремонт',
          short:
            'Плановое ТО, компьютерная диагностика и полный ремонт для любых типов автомобилей.',
          long: `
Добро пожаловать в наш автосервис. Мы выполняем плановое техническое обслуживание, замену масел и фильтров, а также сложный механический ремонт.

Работаем со всеми типами автомобилей и уделяем особое внимание надежности и безопасности. Нужна быстрая проверка или серьёзный ремонт — мы готовы помочь.`.trim(),
        },
        {
          id: 'hybridElectric',
          title: 'Сервисы для гибридных и электрических авто',
          short:
            'Диагностика и ремонт гибридных систем, высоковольтных батарей и систем зарядки.',
          long: `
Наш сервис специализируется на обслуживании гибридных и электрических автомобилей. Используем современное оборудование и обученных специалистов.

Мы диагностируем и ремонтируем гибридные приводы, проверяем и заменяем высоковольтные батареи и системы зарядки, а также выполняем плановое обслуживание, чтобы избежать дорогих поломок в будущем.`.trim(),
        },
        {
          id: 'diagnostics',
          title: 'Компьютерная диагностика',
          short:
            'Продвинутая диагностика электронных систем: двигатель, ABS, подушки безопасности, гибридные модули.',
          long: `
Современные автомобили насыщены электроникой. С помощью профессиональных диагностических сканеров мы быстро считываем ошибки, анализируем параметры и точно определяем неисправности.

Компьютерная диагностика также используется как профилактика, чтобы вовремя обнаружить потенциальные проблемы и избежать дорогостоящего ремонта.`.trim(),
        },
        {
          id: 'brakes',
          title: 'Ремонт тормозной системы',
          short:
            'Проверка и обслуживание дисков, колодок и тормозной жидкости — ваша безопасность прежде всего.',
          long: `
Тормозная система напрямую отвечает за вашу безопасность. Мы проверяем и ремонтируем тормозные механизмы, заменяем колодки и диски, обновляем тормозную жидкость.

После ремонта мы обязательно проверяем эффективность тормозов, чтобы вы чувствовали себя уверенно на дороге.`.trim(),
        },
        {
          id: 'electricity',
          title: 'Автоэлектрика',
          short:
            'Аккумулятор, генератор, проводка и электрооборудование — решаем любые задачи по электрике.',
          long: `
Мы занимаемся всеми видами электрических неисправностей: проблемы с зарядкой, запуском двигателя, освещением, проводкой и другими потребителями.

Современное диагностическое оборудование помогает быстро находить причину и качественно устранять неисправности.`.trim(),
        },
        {
          id: 'drivetrain',
          title: 'Ремонт ходовой части',
          short:
            'Подвеска, рулевое управление и элементы ходовой для комфортной и стабильной езды.',
          long: `
Мы ремонтируем элементы подвески и рулевого управления, которые отвечают за комфорт и устойчивость автомобиля.

Если вы чувствуете вибрации, стуки, неустойчивость в поворотах или видите неравномерный износ шин, мы найдём причину и восстановим правильную работу ходовой части.`.trim(),
        },
      ],
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
      servicesList: [
        'Техническое обслуживание и ремонт автомобилей',
        'Услуги по обслуживанию гибридных и электрических систем',
        'Компьютерная диагностика',
        'Ремонт тормозной системы',
        'Электрика',
        'Ремонт ходовой части',
      ],
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
      phoneLabel: 'Телефон:',
      emailLabel: 'Электронная почта:',
      addressLabel: 'Адрес:',
      rights: '© 2019 - 2025, Prime Motors. Все права защищены.',
    },
  },
} as const;

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
