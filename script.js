window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Reveal animations on scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Translations
const translations = {
    ro: {
        "nav.home": "Acasă",
        "nav.about": "Despre Noi",
        "nav.menu": "Meniu",
        "nav.gallery": "Galerie",
        "nav.contact": "Contact",
        "nav.reservations": "Rezervări",
        "hero.subtitle": "Bun venit la Câmpulung Moldovenesc",
        "hero.title": "Gustul Autentic al <br><span>Bucovinei</span>",
        "hero.desc": "Descoperă tradiția culinară românească într-un ambient modern, unde lemnul și ospitalitatea se întâlnesc.",
        "hero.btn_menu": "Vezi Meniul",
        "hero.btn_gallery": "Explorează Localul",
        "about.tag": "Povestea Noastră",
        "about.title": "O Popas în Inima <span>Bucovinei</span>",
        "about.p1": "La Popasul Drumețului, tradiția se împletește cu rafinamentul contemporan. Situat într-un cadru natural spectacol, restaurantul nostru oferă o evadare culinară autentică.",
        "about.p2": "Fiecare preparat este gătit cu ingrediente proaspete, locale, după rețete transmise din generație în generație, dar prezentate într-o formă modernă care să încânte toate simțurile.",
        "about.f1": "Tradițional Românesc",
        "about.f_pizza": "Cuptor pe Lemne",
        "about.f3": "Vinuri Alese",
        "menu.tag": "Meniul Nostru",
        "menu.title": "Arome Care Te <span>Încântă</span>",
        "reviews.tag": "Recenzii",
        "reviews.title": "Ce Spun <span>Clienții</span> Noștri",
        "reviews.cta": "Vezi Toate Recenziile",
        "contact.title": "Te Așteptăm cu <span>Drag</span>",
        "reviews.r1_text": '"Foarte bună mâncarea la popasul drumețului 🫶🏼 Fetele foarte amabile și drăguțe ! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"O experiență foarte plăcută! Am mâncat o ciorbă gustoasă, bine condimentată, și un crispy excelent. Servirea a fost rapidă."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Restaurantul este spațios, servirea promptă, mâncare diversificată și preturi decente. Recomand!"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_tradition": "Tradițional",
        "menu.tab_italian": "Italian",
        "menu.tab_grill": "Grătar & Burgeri",
        "gallery.tag": "Galerie",
        "gallery.title": "Momente de <span>Neuitat</span>",
        "contact.address_label": "Adresă:",
        "contact.address": "Calea Bucovinei Nr 335C, Câmpulung Moldovenesc, România",
        "contact.phone_label": "Telefon:",
        "contact.program_label": "Program:",
        "contact.program": "Zilnic: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Toate drepturile rezervate.",
        "services.title": "Serviciile <span>Noastre</span>",
        "services.s1_title": "Accessible",
        "services.s1_desc": "Spațiu adaptat pentru persoane cu mobilitate redusă",
        "services.s2_title": "Aer condiționat",
        "services.s2_desc": "Temperatura ideală în toate anotimpurile",
        "services.s3_title": "Parcare",
        "services.s3_desc": "Parcare proprie pentru clienți",
        "services.s4_title": "WiFi Gratuit",
        "services.s4_desc": "Conexiune internet rapidă și sigură",
        "payment.title": "Opțiuni de <span>Plată</span>",
        "payment.p1_title": "Contactless",
        "payment.p1_desc": "Plată contactless sigură",
        "payment.p2_title": "Mastercard",
        "payment.p2_desc": "Acceptă cărți Mastercard",
        "payment.p3_title": "VISA",
        "payment.p3_desc": "Acceptă cărți VISA",
        "payment.p4_title": "Debit Card",
        "payment.p4_desc": "Acceptă cărți de debit"
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About Us",
        "nav.menu": "Menu",
        "nav.gallery": "Gallery",
        "nav.contact": "Contact",
        "nav.reservations": "Reservations",
        "hero.subtitle": "Welcome to Câmpulung Moldovenesc",
        "hero.title": "Authentic Taste of <br><span>Bucovina</span>",
        "hero.desc": "Discover traditional Romanian cuisine in a modern setting, where wood and hospitality meet.",
        "hero.btn_menu": "View Menu",
        "hero.btn_gallery": "Explore Venue",
        "about.tag": "Our Story",
        "about.title": "A Break in the Heart of <span>Bucovina</span>",
        "about.p1": "At Popasul Drumețului, tradition intertwines with contemporary refinement. Located in a spectacular natural setting, our restaurant offers an authentic culinary escape.",
        "about.p2": "Each dish is cooked with fresh, local ingredients, following recipes passed down through generations, but presented in a modern way to delight all senses.",
        "about.f1": "Traditional Romanian",
        "about.f_pizza": "Wood-fired Oven",
        "about.f3": "Selected Wines",
        "menu.tag": "Our Menu",
        "menu.title": "Flavors That <span>Delight</span> You",
        "reviews.tag": "Reviews",
        "reviews.title": "What Our <span>Customers</span> Say",
        "reviews.cta": "See All Reviews",
        "contact.title": "We Are <span>Waiting</span> For You",
        "reviews.r1_text": '"The food is very good at Popasul Drumețului 🫶🏼 The girls are very kind and sweet! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"A very pleasant experience! I ate a tasty, well-seasoned soup, and an excellent crispy. The service was fast."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"The restaurant is spacious, the service prompt, diversified food and decent prices. I recommend!"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_tradition": "Traditional",
        "menu.tab_italian": "Italian",
        "menu.tab_grill": "Grill & Burgers",
        "gallery.tag": "Gallery",
        "gallery.title": "Unforgettable <span>Moments</span>",
        "contact.address_label": "Address:",
        "contact.address": "335C Bucovina Way, Câmpulung Moldovenesc, Romania",
        "contact.phone_label": "Phone:",
        "contact.program_label": "Opening Hours:",
        "contact.program": "Daily: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. All rights reserved.",
        "services.title": "Our <span>Services</span>",
        "services.s1_title": "Accessible",
        "services.s1_desc": "Space adapted for people with reduced mobility",
        "services.s2_title": "Air conditioning",
        "services.s2_desc": "Ideal temperature in all seasons",
        "services.s3_title": "Self parking",
        "services.s3_desc": "Own parking for customers",
        "services.s4_title": "Free WiFi",
        "services.s4_desc": "Fast and secure internet connection",
        "payment.title": "Payment <span>Options</span>",
        "payment.p1_title": "Contactless payment",
        "payment.p1_desc": "Secure contactless payment",
        "payment.p2_title": "Mastercard",
        "payment.p2_desc": "Accept Mastercard cards",
        "payment.p3_title": "VISA",
        "payment.p3_desc": "Accept VISA cards",
        "payment.p4_title": "Debit Card",
        "payment.p4_desc": "Accept debit cards"
    },
    fr: {
        "nav.home": "Accueil",
        "nav.about": "À propos",
        "nav.menu": "Menu",
        "nav.gallery": "Galerie",
        "nav.contact": "Contact",
        "nav.reservations": "Réservations",
        "hero.subtitle": "Bienvenue à Câmpulung Moldovenesc",
        "hero.title": "Le Goût Authentique de <br><span>Bucovine</span>",
        "hero.desc": "Découvrez la cuisine roumaine traditionnelle dans un cadre moderne, où le bois et l'hospitalité se rencontrent.",
        "hero.btn_menu": "Voir le Menu",
        "hero.btn_gallery": "Explorer le Lieu",
        "about.tag": "Notre Histoire",
        "about.title": "Une Pause au Cœur de <span>Bucovine</span>",
        "about.p1": "Au Popasul Drumețului, la tradition se mêle au raffinement contemporain. Situé dans un cadre naturel spectaculaire, notre restaurant offre une escapade culinaire authentique.",
        "about.p2": "Chaque plat est préparé avec des ingrédients locaux et frais, selon des recettes transmises de génération en génération, présentées de manière moderne pour ravir tous les sens.",
        "about.f1": "Tradition Roumaine",
        "about.f_pizza": "Four à Bois",
        "about.f3": "Vins Sélectionnés",
        "menu.tag": "Notre Menu",
        "menu.title": "Des Saveurs qui <span>Vous Enchantent</span>",
        "reviews.tag": "Avis",
        "reviews.title": "Ce que disent nos <span>Clients</span>",
        "reviews.cta": "Voir Tous les Avis",
        "contact.title": "Nous Vous <span>Attendons</span>",
        "reviews.r1_text": '"La nourriture est très bonne au Popasul Drumețului 🫶🏼 Les filles sont très sympathiques et adorables ! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"Une expérience très agréable ! Jai dégusté une soupe savoureuse, bien assaisonnée, et un crispy excellent.Le service était rapide."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Le restaurant est spacieux, le service réactif, la nourriture variée et les prix raisonnables. Je recommande !"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_tradition": "Traditionnel",
        "menu.tab_italian": "Italien",
        "menu.tab_grill": "Grill & Burgers",
        "gallery.tag": "Galerie",
        "gallery.title": "Moments <span>Inoubliables</span>",
        "contact.address_label": "Adresse:",
        "contact.address": "Calea Bucovinei Nr 335C, Câmpulung Moldovenesc, Roumanie",
        "contact.phone_label": "Téléphone:",
        "contact.program_label": "Horaires:",
        "contact.program": "Tous les jours : 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Tous droits réservés.",
        "services.title": "Nos <span>Services</span>",
        "services.s1_title": "Accessible",
        "services.s1_desc": "Espace adapté aux personnes à mobilité réduite",
        "services.s2_title": "Climatisation",
        "services.s2_desc": "Température idéale en toutes saisons",
        "services.s3_title": "Parking",
        "services.s3_desc": "Parking privé pour les clients",
        "services.s4_title": "WiFi Gratuit",
        "services.s4_desc": "Connexion internet rapide et sécurisée",
        "payment.title": "Options de <span>Paiement</span>",
        "payment.p1_title": "Paiement sans contact",
        "payment.p1_desc": "Paiement sans contact sécurisé",
        "payment.p2_title": "Mastercard",
        "payment.p2_desc": "Accepte les cartes Mastercard",
        "payment.p3_title": "VISA",
        "payment.p3_desc": "Accepte les cartes VISA",
        "payment.p4_title": "Carte de Débit",
        "payment.p4_desc": "Accepte les cartes de débit"
    },
    pl: {
        "nav.home": "Dom",
        "nav.about": "O nas",
        "nav.menu": "Menu",
        "nav.gallery": "Galeria",
        "nav.contact": "Kontakt",
        "nav.reservations": "Rezerwacje",
        "hero.subtitle": "Witamy w Câmpulung Moldovenesc",
        "hero.title": "Autentyczny smak <br><span>Bukowiny</span>",
        "hero.desc": "Odkryj tradycyjną kuchnię rumuńską w nowoczesnym wydaniu, gdzie drewno spotyka się z gościnnością.",
        "hero.btn_menu": "Zobacz Menu",
        "hero.btn_gallery": "Eksploruj lokal",
        "about.tag": "Nasza historia",
        "about.title": "Przystanek w sercu <span>Bukowiny</span>",
        "about.p1": "W Popasul Drumețului tradycja przeplata się z nowoczesną wyrafinowaniem. Położona w spektakularnej scenerii przyrody nasza restauracja oferuje autentyczną ucieczkę kulinarną.",
        "about.p2": "Każde danie przygotowywane jest ze świeżych, lokalnych składników, według przepisów przekazywanych z pokolenia na pokolenie, ale podane w nowoczesnej formie.",
        "about.f1": "Tradycyjna rumuńska",
        "about.f_pizza": "Piec opalany drewnem",
        "about.f3": "Wyselekcjonowane wina",
        "menu.tag": "Nasze Menu",
        "menu.title": "Smaki, które Cię <span>zachwycą</span>",
        "reviews.tag": "Opinie",
        "reviews.title": "Co mówią nasi <span>klienci</span>",
        "reviews.cta": "Zobacz wszystkie opinie",
        "contact.title": "Czekamy na <span>Ciebie</span>",
        "reviews.r1_text": '"Jedzenie w Popasul Drumețului jest bardzo dobre 🫶🏼 Dziewczyny są bardzo miłe i kochane! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"Bardzo miłe doświadczenie! Zjadłem smaczną, dobrze przyprawioną zupę i doskonały chrupiący kurczak. Obsługa była szybka."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Restauracja jest przestronna, obsługa sprawna, jedzenie urozmaicone i przystępne ceny. Polecam!"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_tradition": "Tradycyjny",
        "menu.tab_italian": "Włoski",
        "menu.tab_grill": "Grill i burgery",
        "gallery.tag": "Galeria",
        "gallery.title": "Niezapomniane <span>chwile</span>",
        "contact.address_label": "Adres:",
        "contact.address": "Calea Bucovinei 335C, Câmpulung Moldovenesc, Rumunia",
        "contact.phone_label": "Telefon:",
        "contact.program_label": "Godziny otwarcia:",
        "contact.program": "Codziennie: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Wszelkie prawa zastrzeżone.",
        "services.title": "Nasze <span>Usługi</span>",
        "services.s1_title": "Dostępne",
        "services.s1_desc": "Przestrzeń dostosowana dla osób o ograniczonej mobilności",
        "services.s2_title": "Klimatyzacja",
        "services.s2_desc": "Idealna temperatura o każdej porze roku",
        "services.s3_title": "Parking",
        "services.s3_desc": "Własny parking dla klientów",
        "services.s4_title": "Bezpłatny WiFi",
        "services.s4_desc": "Szybkie i bezpieczne połączenie internetowe",
        "payment.title": "Opcje <span>Płatności</span>",
        "payment.p1_title": "Płatność zbliżeniowa",
        "payment.p1_desc": "Bezpieczna płatność zbliżeniowa",
        "payment.p2_title": "Mastercard",
        "payment.p2_desc": "Akceptuje karty Mastercard",
        "payment.p3_title": "VISA",
        "payment.p3_desc": "Akceptuje karty VISA",
        "payment.p4_title": "Karta Debetowa",
        "payment.p4_desc": "Akceptuje karty debetowe"
    },
    ua: {
        "nav.home": "Головна",
        "nav.about": "Про нас",
        "nav.menu": "Меню",
        "nav.gallery": "Галерея",
        "nav.contact": "Контакти",
        "nav.reservations": "Бронювання",
        "hero.subtitle": "Ласкаво просимо до Кимпулунг-Молдовенеск",
        "hero.title": "Автентичний смак <br><span>Буковини</span>",
        "hero.desc": "Відкрийте для себе традиційну румунську кухню в сучасній обстановці, де дерево поєднується з гостинністю.",
        "hero.btn_menu": "Переглянути меню",
        "hero.btn_gallery": "Дослідити заклад",
        "about.tag": "Наша історія",
        "about.title": "Зупинка в серці <span>Буковини</span>",
        "about.p1": "У Popasul Drumețului традиція переплітається з сучасною вишуканістю. Розташований у вражаючому природному оточенні, наш ресторан пропонує автентичну кулінарну втечу.",
        "about.p2": "Кожна страва готується зі свіжих місцевих інгредієнтів за рецептами, що передаються з покоління в покоління, але подається в сучасній формі.",
        "about.f1": "Традиційна румунська",
        "about.f_pizza": "Піч на дровах",
        "about.f3": "Добірні вина",
        "menu.tag": "Наше меню",
        "menu.title": "Смаки, які вас <span>зачарують</span>",
        "reviews.tag": "Відгуки",
        "reviews.title": "Що говорять наші <span>клієнти</span>",
        "reviews.cta": "Переглянути всі відгуки",
        "contact.title": "Ми чекаємо на <span>вас</span>",
        "reviews.r1_text": '"У Popasul Drumețului дуже смачна їжа 🫶🏼 Дівчата дуже привітні та милі! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"Дуже приємний досвід! Я з\'їв смачний, добре приправлений суп і чудовий кріспі. Обслуговування було швидким."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Ресторан просторий, обслуговування оперативне, їжа різноманітна, а ціни нормальні. Рекомендую!"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_tradition": "Традиційна кухня",
        "menu.tab_italian": "Італійська кухня",
        "menu.tab_grill": "Гриль та бургери",
        "gallery.tag": "Галерея",
        "gallery.title": "Незабутні <span>моменти</span>",
        "contact.address_label": "Адреса:",
        "contact.address": "Calea Bucovinei 335C, Кимпулунг-Молдовенеск, Румунія",
        "contact.phone_label": "Телефон:",
        "contact.program_label": "Графік роботи:",
        "contact.program": "Щодня: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Усі права захищені.",
        "services.title": "Наші <span>Послуги</span>",
        "services.s1_title": "Доступний",
        "services.s1_desc": "Простір, пристосований для осіб з обмеженою мобільністю",
        "services.s2_title": "Кондиціонування",
        "services.s2_desc": "Ідеальна температура у всі сезони",
        "services.s3_title": "Парковка",
        "services.s3_desc": "Власна парковка для клієнтів",
        "services.s4_title": "Безкоштовний WiFi",
        "services.s4_desc": "Швидке та безпечне інтернет-з'єднання",
        "payment.title": "Варіанти <span>Оплати</span>",
        "payment.p1_title": "Безконтактна оплата",
        "payment.p1_desc": "Безпечна безконтактна оплата",
        "payment.p2_title": "Mastercard",
        "payment.p2_desc": "Прийматимуть карти Mastercard",
        "payment.p3_title": "VISA",
        "payment.p3_desc": "Прийматимуть карти VISA",
        "payment.p4_title": "Дебетова карта",
        "payment.p4_desc": "Прийматимуть дебетові карти"
    },
};

let currentLang = 'ro';

function changeLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update active button
    document.querySelectorAll('.lang-switcher button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update main button text
    const mainBtn = document.querySelector('.lang-btn');
    if (mainBtn) mainBtn.textContent = lang.toUpperCase();

    // Re-render menu with current language
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        renderMenu(activeTab.getAttribute('data-target'));
    }
}

// Lang Switcher Events
document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const lang = e.target.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// Menu Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const categorySelect = document.getElementById('menuCategorySelect');
const menuGrid = document.querySelector('.menu-grid');

const breakfastImages = {
    1: "images/micdejun.jpg",
    2: "images/papanasi.jpg",
    3: "images/omleta.jpg",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
};

const soupImages = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: ""
};

const fastfoodImages = {
    1: "",
    2: "",
    3: "",
    4: ""
};

const grillImages = {
    grill: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "" },
    sides: { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" },
    sauces: { 1: "", 2: "", 3: "", 4: "", 5: "" }
};

const traditionImages = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: "",
    20: "",
};

const salateImages = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: ""
};

const dessertImages = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: ""
};



const menuTranslations = {
    ro: {
        breakfast: [
            { name: "DEJUNUL BUNICII", desc: "Doua ochiuri, pastramă, cartofi prăjiți, telemea, roșii 350g", price: "26 RON", image: breakfastImages[1] },
            { name: "CASCAVAL PANE", desc: "Pregătit 150g", price: "19 RON", image: breakfastImages[2] },
            { name: "OMLETĂ", desc: "Cu șuncă și cașcaval 200g", price: "18 RON", image: breakfastImages[3] },
            { name: "OMLETĂ", desc: "Cu cașcaval 150g", price: "15 RON", image: breakfastImages[4] },
            { name: "OUĂ OCHIURI", desc: "2 bucăți", price: "6 RON", image: breakfastImages[5] },
            { name: "BRÂNZĂ TELEMEA", desc: "Sau burduf 100g", price: "10 RON", image: breakfastImages[6] },
            { name: "DULCEAȚĂ", desc: "100g", price: "6 RON", image: breakfastImages[7] },
            { name: "UNT", desc: "50g", price: "8 RON", image: breakfastImages[8] },
            { name: "IAURT", desc: "200g", price: "8 RON", image: breakfastImages[9] }
        ],
        soup: {
            soup: [
                { name: "CIORBĂ RĂDĂUȚEANĂ", desc: "70g/430 ml", price: "20 RON", image: soupImages[1] },
                { name: "CIORBĂ DE BURTĂ", desc: "70g/430 ml", price: "20 RON", image: soupImages[2] },
                { name: "CIORBĂ DE VĂCUȚĂ", desc: "40g/460g", price: "22 RON", image: soupImages[3] },
                { name: "CIORBĂ DE GĂINĂ", desc: "Cu tăiței 60g/430 ml", price: "19 RON", image: soupImages[4] },
                { name: "CIORBĂ DE PERIȘOARE", desc: "60g/430 ml", price: "19 RON", image: soupImages[5] },
                { name: "CIORBĂ DE FASOLE", desc: "Cu afumătură  80g/420 ml", price: "20 RON", image: soupImages[6] },
                { name: "SOLEANCA", desc: "Ciorbă moldoveneasca 100g/400 ml", price: "20 RON", image: soupImages[7] },
                { name: "CIORBĂ BUNICII", desc: "Ciorba de legume 100g/400 ml", price: "17 RON", image: soupImages[8] },
                { name: "DRESALĂ DE CARTOFI CU AFUMĂTURĂ", desc: "60g/440 ml", price: "21 RON", image: soupImages[9] },
                { name: "DRESALĂ DE CARTOFI CU HRIBI", desc: "40g/460 ml", price: "22 RON", image: soupImages[10] }
            ],
            extra: [
                { name: "PÂINE", desc: "100g", price: "3 RON" },
                { name: "SMÂNTÂNĂ", desc: "50g", price: "5 RON" },
                { name: "ARDEI IUTE", desc: "1 buc", price: "1.5 RON" },
                { name: "LĂMÂIE", desc: "", price: "1 RON" }
            ],
            onthego: [
                { name: "AMBALAJ", desc: "", price: "1 RON" }
            ]
        },
        fastfood: [
            { name: "BURGER DIN VITĂ ANGUS", desc: "Cu cartofi prăjiți și sos 450g", price: "38 RON", image: fastfoodImages[1] },
            { name: "PIEPT DE PUI CRISPY", desc: "Cu cartofi prăjiți și sos 450g", price: "40 RON", image: fastfoodImages[2] },
            { name: "ARIPIOARE", desc: "Picante/Nepicante, cu cartofi prăjiți și sos 450g", price: "40 RON", image: fastfoodImages[3] },
            { name: "SHAORMA LA FARFURIE", desc: "450g", price: "30 RON", image: fastfoodImages[4] },
        ],
        grill:
        {
            grill: [
                { name: "PĂSTRĂV", desc: "La grătar / prăjit 100g", price: "15 RON", image: grillImages.grill[1] },
                { name: "CĂRNÂCIORI LA GRĂTAR", desc: "150g", price: "18 RON", image: grillImages.grill[2] },
                { name: "CÂRNAȚI DE CASĂ", desc: "150g", price: "18 RON", image: grillImages.grill[3] },
                { name: "CEAFĂ DE PORC", desc: "200g", price: "28 RON", image: grillImages.grill[4] },
                { name: "PIEPT DE PUI LA GRĂTAR", desc: "200g", price: "24 RON", image: grillImages.grill[5] },
                { name: "COTLET DE PORC", desc: "200g", price: "26 RON", image: grillImages.grill[6] },
                { name: "PULPĂ DE PUI DEZOSATĂ", desc: "200g", price: "24 RON", image: grillImages.grill[7] },
                { name: "MICI", desc: "50g/buc", price: "6 RON", image: grillImages.grill[8] }
            ],
            sides: [
                { name: "SCIRJELE", desc: "Cu usturoi sau ceapa 200g", price: "18 RON", image: grillImages.sides[1] },
                { name: "CARTOFI PRAJIȚI", desc: "200g", price: "12 RON", image: grillImages.sides[2] },
                { name: "PILAF DE OREZ", desc: "200g", price: "10 RON", image: grillImages.sides[3] },
                { name: "CARTOFI NATUR", desc: "200g", price: "10 RON", image: grillImages.sides[4] },
                { name: "CARTOFI AURII", desc: "200g", price: "15 RON", image: grillImages.sides[5] },
                { name: "CIUPERCI CHAMPIGNON", desc: "La tigaie 200g", price: "17 RON", image: grillImages.sides[6] },
                { name: "MĂMĂLIGĂ", desc: "200g", price: "8 RON", image: grillImages.sides[7] },
                { name: "FASOLE SCĂZUTĂ", desc: "250g", price: "15 RON", image: grillImages.sides[8] },
                { name: "FASOLE BĂTUTĂ", desc: "250g", price: "15 RON", image: grillImages.sides[9] }
            ],
            sauces: [
                { name: "SOS DE USTUROI", desc: "5g", price: "5 RON", image: grillImages.sauces[1] },
                { name: "SOS TZATZIKI", desc: "50g", price: "5 RON", image: grillImages.sauces[2] },
                { name: "SOSUL BUCĂTARULUI ROȘU PICANT", desc: "50g", price: "5 RON", image: grillImages.sauces[3] },
                { name: "SOSUL BUCĂTARULUI ROȘU DULCE", desc: "50g", price: "5 RON", image: grillImages.sauces[4] },
                { name: "KETCHUP DULCE", desc: "50g", price: "4 RON", image: grillImages.sauces[5] },
                { name: "MUȘTAR", desc: "50g", price: "4 RON", image: grillImages.sauces[6] }
            ]
        },
        traditional: [
            { name: "PLATOUL CÂMPULUNGEAN", desc: "Ciolan de porc, cârnăciori, coaste de porc, mici, telemea, brânză de burduf, cartofi aurii, murături, sfeclă cu hrean, sos usturoi — 2 persoane", price: "120 RON", image: traditionImages[1] },
            { name: "PLATOUL DRUMEȚULUI", desc: "Cârnăciori la grătar, ceafă, piept de pui, mici, brânză telemea, scrijele, murături, sos usturoi  550g", price: "46 RON", image: traditionImages[2] },
            { name: "PLATOUL BUCOVINEAN", desc: "Cârnați de casă, coaste, kaizer, scrijele, brânză de burduf, murături, sos de usturoi  550g", price: "46 RON", image: traditionImages[3] },
            { name: "PLATOUL CU PUI", desc: "Piept de pui, copanele picante, crispy, cașcaval pane, cartofi prăjiți  550g", price: "45 RON", image: traditionImages[4] },
            { name: "PLATOUL BUCOVINEAN VEGETARIAN", desc: "Fasole bătută, zacuscă, șnițel vegetarian, chiftea, murături, pâine prăjită  500g", price: "30 RON", image: traditionImages[5] },
            { name: "PLATOUL CU SCRIJELE", desc: "Cartofi (scrijele în sezon / rondele), brânză de burduf, slănină, costiță prăjită, sos de usturoi, murături  700g", price: "35 RON", image: traditionImages[6] },
            { name: "TOCHITURA CASEI", desc: "Pulpa de porc afumată, cârnați, kaizer, brânză de burduf, ou, mămăligă, murături  500g", price: "49 RON", image: traditionImages[7] },
            { name: "TOCHITURĂ BUCOVINEANĂ DE PUI", desc: "Pulpa de pui dezosată, ficatei de pui, brânză de burduf, ou, mămăligă  500g", price: "45 RON", image: traditionImages[8] },
            { name: "BULZ BUCOVINEAN", desc: "300g", price: "39 RON", image: traditionImages[9] },
            { name: "CIOLAN DE PORC CU MĂMĂLIGUȚĂ", desc: "700g", price: "56 RON", image: traditionImages[10] },
            { name: "CIOLAN DE PORC CU FASOLE/RONDELE DE CARTOFI PRĂJIȚI", desc: "700g", price: "58 RON", image: traditionImages[11] },
            { name: "CIULAMA DE PUI CU CIUPERCI ȘI MĂMĂLIGUȚĂ", desc: "350g", price: "35 RON", image: traditionImages[12] },
            { name: "COASTE DE PORC LA CEAUN", desc: "300g", price: "36 RON", image: traditionImages[13] },
            { name: "SNITEL DE PORC", desc: "200g", price: "25 RON", image: traditionImages[14] },
            { name: "SNITEL DIN PIEPT DE PUI", desc: "200g", price: "25 RON", image: traditionImages[15] },
            { name: "FICATEI CU USTUROI SI MAMALIGA", desc: "300g", price: "28 RON", image: traditionImages[16] },
            { name: "HRIBI SOTE", desc: "250g", price: "40 RON", image: traditionImages[17] },
            { name: "HRIBI SOTE CU SMÂNTÂNĂ", desc: "350g", price: "50 RON", image: traditionImages[18] },
            { name: "FASOLE CU CÂRNAȚI", desc: "350g", price: "32 RON", image: traditionImages[19] },
            { name: "MĂMĂLIGĂ CU BRÂNZĂ ȘI SMÂNTÂNĂ", desc: "400g", price: "20 RON", image: traditionImages[20] },

        ],
        salat: [
            { name: "SALATĂ CU TON", desc: "Salată verde, roșii, ceapă, ton, ardei, lămâie, porumb, maioneză 300 g", price: "25 RON", image: salateImages[1] },
            { name: "SALATĂ CU PUI", desc: "Salată verde, roșii, ceapă, castraveți, măsline, ou, șuncă, telemea 300 g", price: "25 RON", image: salateImages[2] },
            { name: "SALATĂ BULGĂREASCĂ", desc: "300 g", price: "22 RON", image: salateImages[3] },
            { name: "SALATĂ DE FASOLE CU CEAPĂ", desc: "150 g", price: "14 RON", image: salateImages[4] },
            { name: "SALATĂ DE ROȘII CU TELEMEA", desc: "150 g", price: "12 RON", image: salateImages[5] },
            { name: "SALATĂ DE SFECLĂ CU HREAN", desc: "200 g", price: "10 RON", image: salateImages[6] },
            { name: "SALATĂ ASORTATĂ", desc: "Varza, rosii, castraveti, ceapă 150 g", price: "9 RON", image: salateImages[7] },
            { name: "SALATĂ DE VARZĂ", desc: "150 g", price: "8 RON", image: salateImages[8] },
            { name: "SALATĂ DE ROȘII", desc: "200 g", price: "8 RON", image: salateImages[9] },
            { name: "SALATĂ DE ROȘII CU CASTRAVEȚI", desc: "200 g", price: "9 RON", image: salateImages[10] },
            { name: "SALATĂ DE MURĂTURI", desc: "200 g", price: "9 RON", image: salateImages[11] },
        ],
        dessert: [
            { name: "PAPANAȘI CU SMÂNTÂNĂ ȘI DULCEAȚĂ", desc: "200g", price: "32 RON", image: dessertImages[1] },
            { name: "CLĂTITE CU BRÂNZĂ ȘI SMÂNTÂNĂ", desc: "200g", price: "26 RON", image: dessertImages[2] },
            { name: "CHIROSTE CU BRANZA DULCE", desc: "200g", price: "23 RON", image: dessertImages[3] },
            { name: "CLĂTITE CU DULCEAȚĂ", desc: "200g", price: "19 RON", image: dessertImages[4] },
            { name: "CLĂTITE CU CIOCOLATĂ", desc: "200g", price: "19 RON", image: dessertImages[5] },
            { name: "GĂLUȘTE CU PRUNE", desc: "200g", price: "20 RON", image: dessertImages[6] },
            { name: "TOCINEI CU SMÂNTÂNĂ", desc: "200g", price: "25 RON", image: dessertImages[7] }
        ],
        drinks: {
            soft: [
                { name: "COCA-COLA 250 ml", desc: "", price: "8 RON" },
                { name: "COCA-COLA 500 ml", desc: "", price: "10 RON" },
                { name: "COCA-COLA ZERO 500 ml", desc: "", price: "10 RON" },
                { name: "FANTA 250 ml", desc: "", price: "8 RON" },
                { name: "FANTA 500 ml", desc: "", price: "10 RON" },
                { name: "SPRITE 500 ml", desc: "", price: "10 RON" },
                { name: "CAPPY NECTAR 250 ml", desc: "", price: "10 RON" },
                { name: "CAPPY PULPY 330 ml", desc: "", price: "9 RON" },
                { name: "FUZETEA 500 ml", desc: "", price: "8 RON" },
                { name: "SCHWEPPES 250 ml", desc: "", price: "8 RON" },
                { name: "SCHWEPPES 500 ml", desc: "", price: "10 RON" },
                { name: "ALOE VERA 500 ml", desc: "", price: "10 RON" },
                { name: "REDBULL 500 ml", desc: "", price: "12 RON" },
                { name: "TIGER ENERGY 500 ml", desc: "", price: "7 RON" },
                { name: "BURN 500 ml", desc: "", price: "10 RON" },
                { name: "APĂ MINERALĂ 500 ml", desc: "", price: "8 RON" },
                { name: "APĂ PLATĂ 500 ml", desc: "", price: "8 RON" },
                { name: "VITAMIN AQUA 500 ml", desc: "", price: "12 RON" },
                { name: "APĂ PLATĂ 750 ml", desc: "", price: "10 RON" },
                { name: "APĂ MINERALĂ 750 ml", desc: "", price: "10 RON" },
                { name: "LIMONADĂ CU MENTĂ 500 ml", desc: "", price: "14 RON" }
            ],
            hot: [
                { name: "ESPRESSO", desc: "", price: "7 RON" },
                { name: "CAPPUCCINO", desc: "", price: "9 RON" },
                { name: "CIOLATĂ CALDĂ", desc: "", price: "8 RON" },
                { name: "CEAI (INFUZIE)", desc: "", price: "8 RON" }
            ],
            wines: [
                { name: "SAUVIGNON BLANC 750 ml", desc: "", price: "65 RON" },
                { name: "RARA NEAGRĂ 750 ml", desc: "", price: "65 RON" },
                { name: "ROZE 750 ml", desc: "", price: "65 RON" },
                { name: "VINUL CASEI - ALB 200 ml", desc: "", price: "10 RON" },
                { name: "VINUL CASEI - ROSU 200 ml", desc: "", price: "10 RON" },
                { name: "VINUL CASEI - ROZE 200 ml", desc: "", price: "10 RON" }
            ],
            spirits: [
                { name: "PALINCĂ 100 ml", desc: "", price: "12 RON" },
                { name: "AFINATĂ 100 ml", desc: "", price: "14 RON" },
                { name: "VIȘINATĂ 100 ml", desc: "", price: "14 RON" },
                { name: "STALINSKAYA 100 ml", desc: "Vodka", price: "15 RON" },
                { name: "FINLANDIA 100 ml", desc: "Vodka", price: "16 RON" },
                { name: "ABSOLUT 100 ml", desc: "Vodka", price: "18 RON" },
                { name: "VORONA 100 ml", desc: "Vodka", price: "11 RON" },
                { name: "STEFAN CEL MARE 100 ml", desc: "Vodka", price: "18 RON" },
                { name: "ALEXANDER 100 ml", desc: "Vodka", price: "15 RON" },
                { name: "VORONSKAYA 100 ml", desc: "Vodka", price: "15 RON" },
                { name: "CAVA D'ORO 100 ml", desc: "Coniac", price: "12 RON" },
                { name: "UNIREA 100 ml", desc: "Coniac", price: "10 RON" },
                { name: "ALEXANDRION 5* 100 ml", desc: "Coniac", price: "15 RON" },
                { name: "METAXA 5* 100 ml", desc: "Coniac", price: "20 RON" },
                { name: "JIDVEI VS 100 ml", desc: "", price: "20 RON" },
                { name: "JIDVEI VSOP 100 ml", desc: "", price: "25 RON" },
                { name: "J&B 100 ml", desc: "Whiskey", price: "18 RON" },
                { name: "JACK DANIEL'S 100 ml", desc: "Whiskey", price: "22 RON" },
                { name: "WEMBLEY 100 ml", desc: "Gin", price: "10 RON" }
            ],
            beers: [
                { name: "BECK'S 330 ml", desc: "", price: "12 RON" },
                { name: "BECK'S DOZĂ 500 ml", desc: "", price: "10 RON" },
                { name: "STELLA ARTOIS 330 ml", desc: "", price: "12 RON" },
                { name: "STELLA ARTOIS 500 ml", desc: "", price: "14 RON" },
                { name: "BERE DE CASA HALBĂ 400 ml", desc: "", price: "8 RON" },
                { name: "BERGENBIER 330 ml", desc: "", price: "9 RON" }
            ]
        }
    },
    en: {
        tradition: [
            { name: "Rădăuțeană Soup", desc: "Traditional soup", price: "20 RON" },
            { name: "Tripe Soup", desc: "Traditional tripe", price: "22 RON" },
            { name: "Beef Soup", desc: "With noodles", price: "19 RON" },
            { name: "Chicken Soup", desc: "Homemade", price: "20 RON" },
            { name: "Meatball Soup", desc: "With meatballs", price: "19 RON" },
            { name: "Bean Soup", desc: "With smoked meat", price: "20 RON" },
            { name: "Grandma's Soup", desc: "Traditional", price: "17 RON" },
            { name: "Potato Stew", desc: "With smoked meat", price: "21 RON" },
            { name: "Porcini Stew", desc: "With mushrooms", price: "22 RON" },
            { name: "Câmpulung Platter", desc: "For 2 people", price: "120 RON" },
            { name: "Traveler's Platter", desc: "Mixed grill", price: "46 RON" },
            { name: "Bucovina Platter", desc: "House special", price: "46 RON" },
            { name: "Chicken Platter", desc: "Grilled chicken", price: "45 RON" },
            { name: "Vegetarian Platter", desc: "Healthy choice", price: "30 RON" },
            { name: "House Tochitură", desc: "Pork stew", price: "49 RON" },
            { name: "Chicken Tochitură", desc: "Chicken stew", price: "45 RON" }
        ],
        italian: [
            { name: "Pasta Carbonara", desc: "Pancetta, egg, parmesan", price: "38 RON" },
            { name: "Pizza Quattro Stagioni", desc: "Mozzarella, ham, mushrooms", price: "44 RON" },
            { name: "Porcini Risotto", desc: "With wild mushrooms", price: "46 RON" }
        ],
        grill: [
            { name: "Angus Beef Burger", desc: "With fries and sauce", price: "38 RON" },
            { name: "Crispy Chicken Breast", desc: "With fries and sauce", price: "40 RON" },
            { name: "Wings", desc: "Spicy or not", price: "40 RON" },
            { name: "House Sausages", desc: "Grilled", price: "18 RON" },
            { name: "Grilled Pork Neck", desc: "200g", price: "28 RON" },
            { name: "Grilled Chicken Breast", desc: "200g", price: "24 RON" },
            { name: "Pork Chop", desc: "200g", price: "26 RON" },
            { name: "Boneless Chicken", desc: "200g thigh", price: "24 RON" },
            { name: "Mici", desc: "Traditional sausages", price: "32 RON" }
        ]
    },
    fr: {
        tradition: [
            { name: "Soupe Rădăuțeană", desc: "Soupe traditionnelle", price: "20 RON" },
            { name: "Soupe aux Tripes", desc: "Soupe classique", price: "22 RON" },
            { name: "Soupe de Boeuf", desc: "Avec nouilles", price: "19 RON" },
            { name: "Soupe au Poulet", desc: "Maison", price: "20 RON" },
            { name: "Soupe aux Boulettes", desc: "Avec boulettes", price: "19 RON" },
            { name: "Soupe aux Haricots", desc: "Avec viande fumée", price: "20 RON" },
            { name: "Soupe Grand-mère", desc: "Traditionnelle", price: "17 RON" },
            { name: "Ragoût de Patates", desc: "Avec viande fumée", price: "21 RON" },
            { name: "Ragoût aux Cèpes", desc: "Avec champignons", price: "22 RON" },
            { name: "Plateau Câmpulung", desc: "Pour 2 personnes", price: "120 RON" },
            { name: "Plateau du Voyageur", desc: "Grillade mixte", price: "46 RON" },
            { name: "Plateau Bucovine", desc: "Spécialité maison", price: "46 RON" },
            { name: "Plateau Poulet", desc: "Poulet grillé", price: "45 RON" },
            { name: "Plateau Végétarien", desc: "Choix sain", price: "30 RON" },
            { name: "Tochitură Maison", desc: "Ragoût de porc", price: "49 RON" },
            { name: "Tochitură Poulet", desc: "Ragoût de poulet", price: "45 RON" }
        ],
        italian: [
            { name: "Pâtes Carbonara", desc: "Pancetta, oeuf, parmesan", price: "38 RON" },
            { name: "Pizza Quattro Stagioni", desc: "Mozzarella, jambon, champignons", price: "44 RON" },
            { name: "Risotto aux Cèpes", desc: "Avec champignons sauvages", price: "46 RON" }
        ],
        grill: [
            { name: "Burger Angus", desc: "Avec frites et sauce", price: "38 RON" },
            { name: "Blanc de Poulet Croustillant", desc: "Avec frites", price: "40 RON" },
            { name: "Ailes", desc: "Piquantes ou non", price: "40 RON" },
            { name: "Saucisses Maison", desc: "Grillées", price: "18 RON" },
            { name: "Porc Grillé", desc: "200g", price: "28 RON" },
            { name: "Blanc de Poulet Grillé", desc: "200g", price: "24 RON" },
            { name: "Côte de Porc", desc: "200g", price: "26 RON" },
            { name: "Cuisse de Poulet", desc: "200g désossée", price: "24 RON" },
            { name: "Mici", desc: "Saucisses traditionnelles", price: "32 RON" }
        ]
    },
    pl: {
        tradition: [
            { name: "Zupa Rădăuțeană", desc: "Zupa tradycyjna", price: "20 RON" },
            { name: "Zupa z Flaczków", desc: "Zupa klasyczna", price: "22 RON" },
            { name: "Zupa Wołowa", desc: "Z makaronem", price: "19 RON" },
            { name: "Zupa Drobiowa", desc: "Domowa", price: "20 RON" },
            { name: "Zupa z Kluski", desc: "Z kluskami", price: "19 RON" },
            { name: "Zupa Fasolowa", desc: "Z mięsem wądzonym", price: "20 RON" },
            { name: "Zupa Babci", desc: "Tradycyjna", price: "17 RON" },
            { name: "Bigos z Kartofli", desc: "Z mięsem wądzonym", price: "21 RON" },
            { name: "Bigos z Grzybami", desc: "Z grzybami leśnymi", price: "22 RON" },
            { name: "Talerz Câmpulung", desc: "Na 2 osoby", price: "120 RON" },
            { name: "Talerz Podróżnika", desc: "Miks grilla", price: "46 RON" },
            { name: "Talerz Bukowiny", desc: "Specjał domu", price: "46 RON" },
            { name: "Talerz Drobiowy", desc: "Kurczak grillowany", price: "45 RON" },
            { name: "Talerz Wegetariański", desc: "Zdrowy wybór", price: "30 RON" },
            { name: "Tochitură Domu", desc: "Żurek wieprzowy", price: "49 RON" },
            { name: "Tochitură Drobiowa", desc: "Żurek drobiowy", price: "45 RON" }
        ],
        italian: [
            { name: "Makaron Carbonara", desc: "Pancetta, jajko, parmezan", price: "38 RON" },
            { name: "Pizza Quattro Stagioni", desc: "Mozzarella, szynka, grzyby", price: "44 RON" },
            { name: "Risotto z Grzybami", desc: "Z grzybami leśnymi", price: "46 RON" }
        ],
        grill: [
            { name: "Burger Angus", desc: "Z frykami i sosem", price: "38 RON" },
            { name: "Pierś Kurczaka Chrupiąca", desc: "Z frykami i sosem", price: "40 RON" },
            { name: "Skrzydełka", desc: "Ostre lub nie", price: "40 RON" },
            { name: "Kiełbaski Domowe", desc: "Grillowane", price: "18 RON" },
            { name: "Schab Grillowany", desc: "200g", price: "28 RON" },
            { name: "Pierś Kurczaka Grillowana", desc: "200g", price: "24 RON" },
            { name: "Kotlet Mielony", desc: "200g", price: "26 RON" },
            { name: "Udo Kurczaka", desc: "200g bez kości", price: "24 RON" },
            { name: "Mici", desc: "Tradycyjne kiełbaski", price: "32 RON" }
        ]
    },
    ua: {
        tradition: [
            { name: "Радауцька чорба", desc: "Традиційна чорба", price: "20 RON" },
            { name: "Флякова суп", desc: "Класична суп", price: "22 RON" },
            { name: "Яловича суп", desc: "З локшиною", price: "19 RON" },
            { name: "Курячий суп", desc: "Домашняя", price: "20 RON" },
            { name: "Суп з фрикадельками", desc: "З фрикадельками", price: "19 RON" },
            { name: "Суп з квасолею", desc: "З копченою м'ясом", price: "20 RON" },
            { name: "Суп бабусі", desc: "Традиційна", price: "17 RON" },
            { name: "Рагу з картоплею", desc: "З копченою м'ясом", price: "21 RON" },
            { name: "Рагу з грибами", desc: "З лісовими грибами", price: "22 RON" },
            { name: "Платер Кимпулунг", desc: "На 2 особи", price: "120 RON" },
            { name: "Платер подорожника", desc: "Змішана гриль", price: "46 RON" },
            { name: "Платер Буковини", desc: "Фірмова спеціальність", price: "46 RON" },
            { name: "Платер з курки", desc: "Груль курка", price: "45 RON" },
            { name: "Овочевий платер", desc: "Здоровий вибір", price: "30 RON" },
            { name: "Точитура дому", desc: "Свинячий рагу", price: "49 RON" },
            { name: "Точитура з курки", desc: "Курячий рагу", price: "45 RON" }
        ],
        italian: [
            { name: "Паста Карбонара", desc: "Панчета, яйце, пармезан", price: "38 RON" },
            { name: "Піца Кватро Стаджіоні", desc: "Моцарела, шинка, гриби", price: "44 RON" },
            { name: "Різотто з грибами", desc: "З лісовими грибами", price: "46 RON" }
        ],
        grill: [
            { name: "Бургер Angus", desc: "З картоплею фрі та соусом", price: "38 RON" },
            { name: "Курина грудка хрусткий", desc: "З фрі та соусом", price: "40 RON" },
            { name: "Крила", desc: "Гострі або ні", price: "40 RON" },
            { name: "Домашні ковбаски", desc: "На грилі", price: "18 RON" },
            { name: "Свинячий ошийок", desc: "200g", price: "28 RON" },
            { name: "Курина грудка на грилі", desc: "200g", price: "24 RON" },
            { name: "Свинячий котлет", desc: "200g", price: "26 RON" },
            { name: "Куриця стегно", desc: "200g без кісток", price: "24 RON" },
            { name: "Мічі", desc: "Традиційні ковбаски", price: "32 RON" }
        ]
    }
};



function setActiveCategory(category) {
    tabBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-target') === category);
    });
    if (categorySelect) {
        categorySelect.value = category;
    }
    renderMenu(category);
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-target');
        setActiveCategory(category);
    });
});

if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
        const category = e.target.value;
        setActiveCategory(category);
    });
}

// Lightbox functionality
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = `
    <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <img class="lightbox-image" src="" alt="Menu item">
    </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector('.lightbox-image');
const lightboxClose = lightbox.querySelector('.lightbox-close');

function openLightbox(imageSrc) {
    if (imageSrc) {
        lightboxImage.src = imageSrc;
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});

function renderMenu(category) {
    if (!menuGrid) return;
    menuGrid.style.opacity = '0';
    setTimeout(() => {
        const roItems = (menuTranslations['ro'] && menuTranslations['ro'][category]) ? menuTranslations['ro'][category] : [];
        const langItems = (menuTranslations[currentLang] && menuTranslations[currentLang][category]) ? menuTranslations[currentLang][category] : roItems;

        // Helper to render an array of items
        const renderItemsArray = (itemsArray, roArray) => {
            return (itemsArray || []).map((item, index) => {
                const roName = (Array.isArray(roArray) && roArray[index] && roArray[index].name) ? roArray[index].name : (item.name || '');
                const translatedName = (item && item.name) ? item.name : roName;
                const showBoth = currentLang !== 'ro' && translatedName && translatedName !== roName;
                const nameHtml = showBoth
                    ? `<h3><span class="menu-name-ro">${roName}</span><br><span class="menu-name-translated">${translatedName}</span></h3>`
                    : `<h3>${roName}</h3>`;

                const imageHtml = item.image ? `<img src="${item.image}" alt="${item.name}" class="menu-item-image">` : '';

                return `
                <div class="menu-item">
                    ${imageHtml}
                    <div class="menu-item-info">
                        ${nameHtml}
                        <p>${item.desc}</p>
                    </div>
                    <span class="menu-price">${item.price}</span>
                </div>
            `;
            }).join('');
        };

        // If langItems is an array, render as before
        if (Array.isArray(langItems)) {
            menuGrid.classList.remove('grouped');
            menuGrid.innerHTML = renderItemsArray(langItems, roItems);
        } else if (langItems && typeof langItems === 'object') {
            // mark grid as grouped so CSS can stack subcategories
            menuGrid.classList.add('grouped');
            // langItems is an object with subcategories (e.g., drinks: {soft:[], hot:[], wines:[]})
            const subcategoryLabels = {
                soft: 'Răcoritoare',
                hot: 'Băuturi Calde',
                wines: 'Vinuri',
                spirits: 'Spirtoase',
                beers: 'Bere',
                soup: 'Ciorbe',
                extra: 'Extra Savoare',
                onthego: 'La Pachet'
            };

            let html = '';
            Object.keys(langItems).forEach(subKey => {
                const subItems = langItems[subKey] || [];
                const roSubItems = (roItems && typeof roItems === 'object') ? roItems[subKey] || [] : [];
                if (subItems.length === 0) return; // skip empty categories
                const label = subcategoryLabels[subKey] || subKey;
                html += `<div class="menu-subcategory"><h3 class="subcategory-title">${label}</h3>`;
                html += `<div class="menu-subitems">${renderItemsArray(subItems, roSubItems)}</div>`;
                html += `</div>`;
            });
            menuGrid.innerHTML = html;
        } else {
            menuGrid.classList.remove('grouped');
            menuGrid.innerHTML = '';
        }

        // Attach click handlers to all images
        menuGrid.querySelectorAll('.menu-item-image').forEach(img => {
            img.addEventListener('click', (e) => {
                openLightbox(img.src);
            });
        });

        menuGrid.style.opacity = '1';
    }, 300);
}

// Initial menu render on page load
window.addEventListener('load', () => {
    setActiveCategory('breakfast');
});
