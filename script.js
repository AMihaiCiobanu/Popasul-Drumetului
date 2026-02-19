// @ts-nocheck
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
        "reviews.cta": "Lasă-ne o Recenzie",
        "contact.tag": "Contact",
        "contact.title": "Te Așteptăm cu <span>Drag</span>",
        "reviews.r1_text": '"Foarte bună mâncarea la popasul drumețului 🫶🏼 Fetele foarte amabile și drăguțe ! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"O experiență foarte plăcută! Am mâncat o ciorbă gustoasă, bine condimentată, și un crispy excelent. Servirea a fost rapidă."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Restaurantul este spațios, servirea promptă, mâncare diversificată și preturi decente. Recomand!"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_breakfast": "Mic Dejun",
        "menu.tab_soup": "Ciorbe",
        "menu.tab_fastfood": "Fast Food",
        "menu.tab_grill": "Grătar",
        "menu.tab_traditional": "Tradițional",
        "menu.tab_salat": "Salate",
        "menu.tab_dessert": "Desert",
        "menu.tab_drinks": "Băuturi",
        "menu.category_label": "Categorie Meniu",
        "gallery.tag": "Galerie",
        "gallery.title": "Momente de <span>Neuitat</span>",
        "contact.address_label": "Adresă:",
        "contact.address": "Calea Bucovinei Nr 335C, Câmpulung Moldovenesc, România",
        "contact.phone_label": "Telefon:",
        "contact.program_label": "Program:",
        "contact.program": "Zilnic: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Toate drepturile rezervate.",
        "footer.tagline": "Tradiție și gust în inima Bucovinei",
        "footer.links_title": "Link-uri Utile",
        "footer.legal_title": "Informații Legale",
        "footer.contact_title": "Contact",
        "footer.company": "Operator:",
        "footer.terms": "Termeni și Condiții",
        "footer.privacy": "Politica de Confidențialitate",
        "footer.cookies": "Politica de Cookies",
        "footer.anpc": "ANPC - Protecția Consumatorului",
        "footer.sol": "SOL - Soluționare Online Litigii",
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
        "reviews.cta": "Leave Us a Review",
        "contact.tag": "Contact",
        "contact.title": "We Are <span>Waiting</span> For You",
        "reviews.r1_text": '"The food is very good at Popasul Drumețului 🫶🏼 The girls are very kind and sweet! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"A very pleasant experience! I ate a tasty, well-seasoned soup, and an excellent crispy. The service was fast."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"The restaurant is spacious, the service prompt, diversified food and decent prices. I recommend!"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_breakfast": "Breakfast",
        "menu.tab_soup": "Soups",
        "menu.tab_fastfood": "Fast Food",
        "menu.tab_grill": "Grill",
        "menu.tab_traditional": "Traditional",
        "menu.tab_salat": "Salads",
        "menu.tab_dessert": "Desserts",
        "menu.tab_drinks": "Drinks",
        "menu.category_label": "Menu Category",
        "gallery.tag": "Gallery",
        "gallery.title": "Unforgettable <span>Moments</span>",
        "contact.address_label": "Address:",
        "contact.address": "335C Bucovina Way, Câmpulung Moldovenesc, Romania",
        "contact.phone_label": "Phone:",
        "contact.program_label": "Opening Hours:",
        "contact.program": "Daily: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. All rights reserved.",
        "footer.tagline": "Tradition and taste in the heart of Bucovina",
        "footer.links_title": "Useful Links",
        "footer.legal_title": "Legal Information",
        "footer.contact_title": "Contact",
        "footer.company": "Operator:",
        "footer.terms": "Terms and Conditions",
        "footer.privacy": "Privacy Policy",
        "footer.cookies": "Cookie Policy",
        "footer.anpc": "ANPC - Consumer Protection",
        "footer.sol": "ODR - Online Dispute Resolution",
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
        "reviews.cta": "Laissez-nous un Avis",
        "contact.tag": "Contact",
        "contact.title": "Nous Vous <span>Attendons</span>",
        "reviews.r1_text": '"La nourriture est très bonne au Popasul Drumețului 🫶🏼 Les filles sont très sympathiques et adorables ! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"Une expérience très agréable ! J\'ai dégusté une soupe savoureuse, bien assaisonnée, et un crispy excellent. Le service était rapide."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Le restaurant est spacieux, le service réactif, la nourriture variée et les prix raisonnables. Je recommande !"',
        "reviews.r3_author": "Ionut C.",
        "menu.tab_breakfast": "Petit Déjeuner",
        "menu.tab_soup": "Soupes",
        "menu.tab_fastfood": "Fast Food",
        "menu.tab_grill": "Grill",
        "menu.tab_traditional": "Traditionnel",
        "menu.tab_salat": "Salades",
        "menu.tab_dessert": "Desserts",
        "menu.tab_drinks": "Boissons",
        "menu.category_label": "Catégorie Menu",
        "gallery.tag": "Galerie",
        "gallery.title": "Moments <span>Inoubliables</span>",
        "contact.address_label": "Adresse:",
        "contact.address": "Calea Bucovinei Nr 335C, Câmpulung Moldovenesc, Roumanie",
        "contact.phone_label": "Téléphone:",
        "contact.program_label": "Horaires:",
        "contact.program": "Tous les jours : 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Tous droits réservés.",
        "footer.tagline": "Tradition et goût au cœur de Bucovine",
        "footer.links_title": "Liens Utiles",
        "footer.legal_title": "Informations Légales",
        "footer.contact_title": "Contact",
        "footer.company": "Opérateur:",
        "footer.terms": "Conditions Générales",
        "footer.anpc": "ANPC - Protection des Consommateurs",
        "footer.sol": "RLL - Règlement en Ligne des Litiges",
        "footer.privacy": "Politique de Confidentialité",
        "footer.cookies": "Politique des Cookies",
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
        "reviews.cta": "Zostaw nam opinię",
        "contact.tag": "Kontakt",
        "contact.title": "Czekamy na <span>Ciebie</span>",
        "menu.tab_breakfast": "Śniadanie",
        "menu.tab_soup": "Zupy",
        "menu.tab_fastfood": "Fast Food",
        "menu.tab_grill": "Grill",
        "menu.tab_traditional": "Tradycyjny",
        "menu.tab_salat": "Sałatki",
        "menu.tab_dessert": "Desery",
        "menu.tab_drinks": "Napoje",
        "menu.category_label": "Kategoria Menu",
        "reviews.r1_text": '"Jedzenie w Popasul Drumețului jest bardzo dobre 🫶🏼 Dziewczyny są bardzo miłe i kochane! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"Bardzo miłe doświadczenie! Zjadłem smaczną, dobrze przyprawioną zupę i doskonały chrupiący kurczak. Obsługa była szybka."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Restauracja jest przestronna, obsługa sprawna, jedzenie urozmaicone i przystępne ceny. Polecam!"',
        "reviews.r3_author": "Ionut C.",
        "gallery.tag": "Galeria",
        "gallery.title": "Niezapomniane <span>chwile</span>",
        "contact.address_label": "Adres:",
        "contact.address": "Calea Bucovinei 335C, Câmpulung Moldovenesc, Rumunia",
        "contact.phone_label": "Telefon:",
        "contact.program_label": "Godziny otwarcia:",
        "contact.program": "Codziennie: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Wszelkie prawa zastrzeżone.",
        "footer.tagline": "Tradycja i smak w sercu Bukowiny",
        "footer.links_title": "Przydatne Linki",
        "footer.legal_title": "Informacje Prawne",
        "footer.contact_title": "Kontakt",
        "footer.company": "Operator:",
        "footer.terms": "Regulamin",
        "footer.anpc": "ANPC - Ochrona Konsumentów",
        "footer.sol": "SOL - Rozstrzyganie Sporów Online",
        "footer.privacy": "Polityka Prywatności",
        "footer.cookies": "Polityka Cookies",
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
        "menu.tab_breakfast": "Сніданок",
        "menu.tab_soup": "Супи",
        "menu.tab_fastfood": "Фаст-фуд",
        "menu.tab_grill": "Гриль",
        "menu.tab_traditional": "Традиційна кухня",
        "menu.tab_salat": "Салати",
        "menu.tab_dessert": "Десерти",
        "menu.tab_drinks": "Напої",
        "menu.category_label": "Категорія Меню",
        "reviews.tag": "Відгуки",
        "reviews.title": "Що говорять наші <span>клієнти</span>",
        "reviews.cta": "Залиште нам відгук",
        "contact.tag": "Контакти",
        "contact.title": "Ми чекаємо на <span>вас</span>",
        "reviews.r1_text": '"У Popasul Drumețului дуже смачна їжа 🫶🏼 Дівчата дуже привітні та милі! ❤️"',
        "reviews.r1_author": "Georgiana G.",
        "reviews.r2_text": '"Дуже приємний досвід! Я з\'їв смачний, добре приправлений суп і чудовий кріспі. Обслуговування було швидким."',
        "reviews.r2_author": "Alina P.",
        "reviews.r3_text": '"Ресторан просторий, обслуговування оперативне, їжа різноманітна, а ціни нормальні. Рекомендую!"',
        "reviews.r3_author": "Ionut C.",
        "gallery.tag": "Галерея",
        "gallery.title": "Незабутні <span>моменти</span>",
        "contact.address_label": "Адреса:",
        "contact.address": "Calea Bucovinei 335C, Кимпулунг-Молдовенеск, Румунія",
        "contact.phone_label": "Телефон:",
        "contact.program_label": "Графік роботи:",
        "contact.program": "Щодня: 07:30 - 00:30",
        "footer.rights": "&copy; 2026 Popasul Drumețului. Усі права захищені.",
        "footer.tagline": "Традиція і смак у серці Буковини",
        "footer.links_title": "Корисні Посилання",
        "footer.legal_title": "Правова Інформація",
        "footer.contact_title": "Контакти",
        "footer.company": "Оператор:",
        "footer.terms": "Умови використання",
        "footer.anpc": "ANPC - Захист Прав Споживачів",
        "footer.sol": "SOL - Онлайн Вирішення Спорів",
        "footer.privacy": "Політика Конфіденційності",
        "footer.cookies": "Політика Cookies",
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
    }
};

let currentLang = 'ro';

/**
 * Converts analytics labels to Romanian regardless of current language
 * Ensures all analytics tags appear in Romanian for consistent reporting
 */
function getRomanianAnalyticsLabel(label) {
    if (!label) return label;
    
    const labelStr = String(label).toLowerCase().trim();
    
    // Language code mappings
    const languageMap = {
        'ro': 'Română',
        'en': 'Engleză',
        'fr': 'Franceză',
        'pl': 'Poloneză',
        'ua': 'Ucraineană',
        'uk': 'Ucraineană'
    };
    
    // Menu category mappings
    const categoryMap = {
        'breakfast': 'Mic Dejun',
        'soup': 'Ciorbe',
        'fastfood': 'Fast Food',
        'grill': 'Grătar',
        'traditional': 'Tradițional',
        'salat': 'Salate',
        'dessert': 'Desert',
        'drinks': 'Băuturi'
    };
    
    // Section name mappings
    const sectionMap = {
        'home': 'Acasă',
        'about': 'Despre Noi',
        'menu': 'Meniu',
        'gallery': 'Galerie',
        'contact': 'Contact',
        'services': 'Servicii',
        'payment': 'Plată',
        'reviews': 'Recenzii'
    };
    
    // Event label mappings
    const eventLabelMap = {
        'header_reservation_button': 'Buton Rezervări Header',
        'view_menu_hero': 'Vezi Meniul Hero',
        'explore_restaurant_hero': 'Explorează Localul Hero',
        'google_maps_review': 'Google Maps Recenzie',
        'google_maps_view': 'Google Maps Vizualizare',
        'google_maps_loaded': 'Google Maps Încărcat',
        'recenzie': 'Recenzie',
        'review': 'Recenzie',
        '30_seconds': '30 Secunde',
        'contact_section_visible': 'Secțiune Contact Vizibilă',
        'cookies_accepted': 'Cookies Acceptate',
        'cookies_declined': 'Cookies Refuzate'
    };
    
    // Check language codes first
    if (languageMap[labelStr]) {
        return languageMap[labelStr];
    }
    
    // Check menu categories
    if (categoryMap[labelStr]) {
        return categoryMap[labelStr];
    }
    
    // Check section names
    if (sectionMap[labelStr]) {
        return sectionMap[labelStr];
    }
    
    // Check event labels
    if (eventLabelMap[labelStr]) {
        return eventLabelMap[labelStr];
    }
    
    // Check if label contains known patterns
    if (labelStr.includes('google_maps')) {
        if (labelStr.includes('review') || labelStr.includes('recenzie')) {
            return 'Google Maps Recenzie';
        }
        return 'Google Maps Vizualizare';
    }
    
    // For link text that might be translated, try to detect common patterns.
    // Use array order so more specific patterns are checked first (e.g. "cookies"
    // before "politica" so "Politica de Cookies" maps correctly, not to Confidențialitate).
    const linkTextMap = [
        ['anpc', 'ANPC - Protecția Consumatorului'],
        ['sol', 'SOL - Soluționare Online Litigii'],
        ['termeni', 'Termeni și Condiții'],
        ['cookies', 'Politica de Cookies'],
        ['politica', 'Politica de Confidențialitate']
    ];
    
    for (const [key, value] of linkTextMap) {
        if (labelStr.includes(key)) {
            return value;
        }
    }
    
    // Return original label if no mapping found (fallback)
    return label;
}

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
    if (mainBtn) {
        mainBtn.textContent = lang.toUpperCase();
        mainBtn.setAttribute('data-lang', lang);
    }

    // Re-render menu with current language
    const activeTab = document.querySelector('.tab-btn.active');
    if (activeTab) {
        renderMenu(activeTab.getAttribute('data-target'));
    }

    // Track language selection in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'language_change', {
            'event_category': 'engagement',
            'event_label': getRomanianAnalyticsLabel(lang),
            'language': lang
        });
    }
}

// Lang Switcher Events
const langSwitcher = document.querySelector('.lang-switcher');
const langBtn = langSwitcher ? langSwitcher.querySelector('.lang-btn') : null;
const langDropdown = langSwitcher ? langSwitcher.querySelector('.lang-dropdown') : null;

function closeLangDropdown() {
    if (!langSwitcher || !langBtn) return;
    langSwitcher.classList.remove('open');
    langBtn.setAttribute('aria-expanded', 'false');
}

if (langBtn) {
    langBtn.setAttribute('type', 'button');
    langBtn.setAttribute('aria-haspopup', 'true');
    langBtn.setAttribute('aria-expanded', 'false');
    langBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = langSwitcher.classList.toggle('open');
        langBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
}

if (langDropdown) {
    langDropdown.querySelectorAll('button[data-lang]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = btn.getAttribute('data-lang');
            if (lang) changeLanguage(lang);
            closeLangDropdown();
            btn.blur();
        });
    });
}

document.addEventListener('click', (e) => {
    if (!langSwitcher || langSwitcher.contains(e.target)) return;
    closeLangDropdown();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLangDropdown();
    }
});

// Menu Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const categorySelect = document.getElementById('menuCategorySelect');
const menuGrid = document.querySelector('.menu-grid');

/**
 * Creates an image map object with empty string values
 * @param {number} count - Number of image slots to create
 * @returns {Object} Object with numeric keys (1, 2, 3...) and empty string values
 */
function createImageMap(count) {
    const imageMap = {};
    for (let i = 1; i <= count; i++) {
        imageMap[i] = "";
    }
    return imageMap;
}

// Image maps using factory function for consistency
const breakfastImages = createImageMap(9);
breakfastImages[1] = "images/micdejun.jpg"; // Preserve existing image

const soupImages = createImageMap(10);

const fastfoodImages = createImageMap(4);

const grillImages = {
    grill: createImageMap(8),
    sides: createImageMap(9),
    sauces: createImageMap(5)
};

const traditionImages = createImageMap(20);

const salateImages = createImageMap(11);

const dessertImages = createImageMap(7);

const menuTranslations = {
    ro: {
        breakfast: [
            { id: 1, name: "DEJUNUL BUNICII", desc: "Doua ochiuri, pastramă, cartofi prăjiți, telemea, roșii 350g", price: "26 RON", image: breakfastImages[1] },
            { id: 2, name: "CASCAVAL PANE", desc: "Pregătit 150g", price: "19 RON", image: breakfastImages[2] },
            { id: 3, name: "OMLETĂ", desc: "Cu șuncă și cașcaval 200g", price: "18 RON", image: breakfastImages[3] },
            { id: 4, name: "OMLETĂ", desc: "Cu cașcaval 150g", price: "15 RON", image: breakfastImages[4] },
            { id: 5, name: "OUĂ OCHIURI", desc: "2 bucăți", price: "6 RON", image: breakfastImages[5] },
            { id: 6, name: "BRÂNZĂ TELEMEA", desc: "Sau burduf 100g", price: "10 RON", image: breakfastImages[6] },
            { id: 7, name: "DULCEAȚĂ", desc: "100g", price: "6 RON", image: breakfastImages[7] },
            { id: 8, name: "UNT", desc: "50g", price: "8 RON", image: breakfastImages[8] },
            { id: 9, name: "IAURT", desc: "200g", price: "8 RON", image: breakfastImages[9] }
        ],
        soup: {
            soup: [
                { id: 1, name: "CIORBĂ RĂDĂUȚEANĂ", desc: "70g/430 ml", price: "20 RON", image: soupImages[1] },
                { id: 2, name: "CIORBĂ DE BURTĂ", desc: "70g/430 ml", price: "20 RON", image: soupImages[2] },
                { id: 3, name: "CIORBĂ DE VĂCUȚĂ", desc: "40g/460g", price: "22 RON", image: soupImages[3] },
                { id: 4, name: "CIORBĂ DE GĂINĂ", desc: "Cu tăiței 60g/430 ml", price: "19 RON", image: soupImages[4] },
                { id: 5, name: "CIORBĂ DE PERIȘOARE", desc: "60g/430 ml", price: "19 RON", image: soupImages[5] },
                { id: 6, name: "CIORBĂ DE FASOLE", desc: "Cu afumătură  80g/420 ml", price: "20 RON", image: soupImages[6] },
                { id: 7, name: "SOLEANCA", desc: "Ciorbă moldoveneasca 100g/400 ml", price: "20 RON", image: soupImages[7] },
                { id: 8, name: "CIORBĂ BUNICII", desc: "Ciorba de legume 100g/400 ml", price: "17 RON", image: soupImages[8] },
                { id: 9, name: "DRESALĂ DE CARTOFI CU AFUMĂTURĂ", desc: "60g/440 ml", price: "21 RON", image: soupImages[9] },
                { id: 10, name: "DRESALĂ DE CARTOFI CU HRIBI", desc: "40g/460 ml", price: "22 RON", image: soupImages[10] }
            ],
            extra: [
                { id: 1, name: "PÂINE", desc: "100g", price: "3 RON" },
                { id: 2, name: "SMÂNTÂNĂ", desc: "50g", price: "5 RON" },
                { id: 3, name: "ARDEI IUTE", desc: "1 buc", price: "1.5 RON" },
                { id: 4, name: "LĂMÂIE", desc: "", price: "1 RON" }
            ],
            onthego: [
                { id: 1, name: "AMBALAJ", desc: "", price: "1 RON" }
            ]
        },
        fastfood: [
            { id: 1, name: "BURGER DIN VITĂ ANGUS", desc: "Cu cartofi prăjiți și sos 450g", price: "38 RON", image: fastfoodImages[1] },
            { id: 2, name: "PIEPT DE PUI CRISPY", desc: "Cu cartofi prăjiți și sos 450g", price: "40 RON", image: fastfoodImages[2] },
            { id: 3, name: "ARIPIOARE", desc: "Picante/Nepicante, cu cartofi prăjiți și sos 450g", price: "40 RON", image: fastfoodImages[3] },
            { id: 4, name: "SHAORMA LA FARFURIE", desc: "450g", price: "30 RON", image: fastfoodImages[4] },
        ],
        grill:
        {
            grill: [
                { id: 1, name: "PĂSTRĂV", desc: "La grătar / prăjit 100g", price: "15 RON", image: grillImages.grill[1] },
                { id: 2, name: "CĂRNÂCIORI LA GRĂTAR", desc: "150g", price: "18 RON", image: grillImages.grill[2] },
                { id: 3, name: "CÂRNAȚI DE CASĂ", desc: "150g", price: "18 RON", image: grillImages.grill[3] },
                { id: 4, name: "CEAFĂ DE PORC", desc: "200g", price: "28 RON", image: grillImages.grill[4] },
                { id: 5, name: "PIEPT DE PUI LA GRĂTAR", desc: "200g", price: "24 RON", image: grillImages.grill[5] },
                { id: 6, name: "COTLET DE PORC", desc: "200g", price: "26 RON", image: grillImages.grill[6] },
                { id: 7, name: "PULPĂ DE PUI DEZOSATĂ", desc: "200g", price: "24 RON", image: grillImages.grill[7] },
                { id: 8, name: "MICI", desc: "50g/buc", price: "6 RON", image: grillImages.grill[8] }
            ],
            sides: [
                { id: 1, name: "SCIRJELE", desc: "Cu usturoi sau ceapa 200g", price: "18 RON", image: grillImages.sides[1] },
                { id: 2, name: "CARTOFI PRAJIȚI", desc: "200g", price: "12 RON", image: grillImages.sides[2] },
                { id: 3, name: "PILAF DE OREZ", desc: "200g", price: "10 RON", image: grillImages.sides[3] },
                { id: 4, name: "CARTOFI NATUR", desc: "200g", price: "10 RON", image: grillImages.sides[4] },
                { id: 5, name: "CARTOFI AURII", desc: "200g", price: "15 RON", image: grillImages.sides[5] },
                { id: 6, name: "CIUPERCI CHAMPIGNON", desc: "La tigaie 200g", price: "17 RON", image: grillImages.sides[6] },
                { id: 7, name: "MĂMĂLIGĂ", desc: "200g", price: "8 RON", image: grillImages.sides[7] },
                { id: 8, name: "FASOLE SCĂZUTĂ", desc: "250g", price: "15 RON", image: grillImages.sides[8] },
                { id: 9, name: "FASOLE BĂTUTĂ", desc: "250g", price: "15 RON", image: grillImages.sides[9] }
            ],
            sauces: [
                { id: 1, name: "SOS DE USTUROI", desc: "5g", price: "5 RON", image: grillImages.sauces[1] },
                { id: 2, name: "SOS TZATZIKI", desc: "50g", price: "5 RON", image: grillImages.sauces[2] },
                { id: 3, name: "SOSUL BUCĂTARULUI ROȘU PICANT", desc: "50g", price: "5 RON", image: grillImages.sauces[3] },
                { id: 4, name: "SOSUL BUCĂTARULUI ROȘU DULCE", desc: "50g", price: "5 RON", image: grillImages.sauces[4] },
                { id: 5, name: "KETCHUP DULCE", desc: "50g", price: "4 RON", image: grillImages.sauces[5] },
                { id: 6, name: "MUȘTAR", desc: "50g", price: "4 RON", image: grillImages.sauces[6] }
            ]
        },
        traditional: [
            { id: 1, name: "PLATOUL CÂMPULUNGEAN", desc: "Ciolan de porc, cârnăciori, coaste de porc, mici, telemea, brânză de burduf, cartofi aurii, murături, sfeclă cu hrean, sos usturoi — 2 persoane", price: "120 RON", image: traditionImages[1] },
            { id: 2, name: "PLATOUL DRUMEȚULUI", desc: "Cârnăciori la grătar, ceafă, piept de pui, mici, brânză telemea, scrijele, murături, sos usturoi  550g", price: "46 RON", image: traditionImages[2] },
            { id: 3, name: "PLATOUL BUCOVINEAN", desc: "Cârnați de casă, coaste, kaizer, scrijele, brânză de burduf, murături, sos de usturoi  550g", price: "46 RON", image: traditionImages[3] },
            { id: 4, name: "PLATOUL CU PUI", desc: "Piept de pui, copanele picante, crispy, cașcaval pane, cartofi prăjiți  550g", price: "45 RON", image: traditionImages[4] },
            { id: 5, name: "PLATOUL BUCOVINEAN VEGETARIAN", desc: "Fasole bătută, zacuscă, șnițel vegetarian, chiftea, murături, pâine prăjită  500g", price: "30 RON", image: traditionImages[5] },
            { id: 6, name: "PLATOUL CU SCRIJELE", desc: "Cartofi (scrijele în sezon / rondele), brânză de burduf, slănină, costiță prăjită, sos de usturoi, murături  700g", price: "35 RON", image: traditionImages[6] },
            { id: 7, name: "TOCHITURA CASEI", desc: "Pulpa de porc afumată, cârnați, kaizer, brânză de burduf, ou, mămăligă, murături  500g", price: "49 RON", image: traditionImages[7] },
            { id: 8, name: "TOCHITURĂ BUCOVINEANĂ DE PUI", desc: "Pulpa de pui dezosată, ficatei de pui, brânză de burduf, ou, mămăligă  500g", price: "45 RON", image: traditionImages[8] },
            { id: 9, name: "BULZ BUCOVINEAN", desc: "300g", price: "39 RON", image: traditionImages[9] },
            { id: 10, name: "CIOLAN DE PORC CU MĂMĂLIGUȚĂ", desc: "700g", price: "56 RON", image: traditionImages[10] },
            { id: 11, name: "CIOLAN DE PORC CU FASOLE/RONDELE DE CARTOFI PRĂJIȚI", desc: "700g", price: "58 RON", image: traditionImages[11] },
            { id: 12, name: "CIULAMA DE PUI CU CIUPERCI ȘI MĂMĂLIGUȚĂ", desc: "350g", price: "35 RON", image: traditionImages[12] },
            { id: 13, name: "COASTE DE PORC LA CEAUN", desc: "300g", price: "36 RON", image: traditionImages[13] },
            { id: 14, name: "SNITEL DE PORC", desc: "200g", price: "25 RON", image: traditionImages[14] },
            { id: 15, name: "SNITEL DIN PIEPT DE PUI", desc: "200g", price: "25 RON", image: traditionImages[15] },
            { id: 16, name: "FICATEI CU USTUROI SI MAMALIGA", desc: "300g", price: "28 RON", image: traditionImages[16] },
            { id: 17, name: "HRIBI SOTE", desc: "250g", price: "40 RON", image: traditionImages[17] },
            { id: 18, name: "HRIBI SOTE CU SMÂNTÂNĂ", desc: "350g", price: "50 RON", image: traditionImages[18] },
            { id: 19, name: "FASOLE CU CÂRNAȚI", desc: "350g", price: "32 RON", image: traditionImages[19] },
            { id: 20, name: "MĂMĂLIGĂ CU BRÂNZĂ ȘI SMÂNTÂNĂ", desc: "400g", price: "20 RON", image: traditionImages[20] },

        ],
        salat: [
            { id: 1, name: "SALATĂ CU TON", desc: "Salată verde, roșii, ceapă, ton, ardei, lămâie, porumb, maioneză 300 g", price: "25 RON", image: salateImages[1] },
            { id: 2, name: "SALATĂ CU PUI", desc: "Salată verde, roșii, ceapă, castraveți, măsline, ou, șuncă, telemea 300 g", price: "25 RON", image: salateImages[2] },
            { id: 3, name: "SALATĂ BULGĂREASCĂ", desc: "300 g", price: "22 RON", image: salateImages[3] },
            { id: 4, name: "SALATĂ DE FASOLE CU CEAPĂ", desc: "150 g", price: "14 RON", image: salateImages[4] },
            { id: 5, name: "SALATĂ DE ROȘII CU TELEMEA", desc: "150 g", price: "12 RON", image: salateImages[5] },
            { id: 6, name: "SALATĂ DE SFECLĂ CU HREAN", desc: "200 g", price: "10 RON", image: salateImages[6] },
            { id: 7, name: "SALATĂ ASORTATĂ", desc: "Varza, rosii, castraveti, ceapă 150 g", price: "9 RON", image: salateImages[7] },
            { id: 8, name: "SALATĂ DE VARZĂ", desc: "150 g", price: "8 RON", image: salateImages[8] },
            { id: 9, name: "SALATĂ DE ROȘII", desc: "200 g", price: "8 RON", image: salateImages[9] },
            { id: 10, name: "SALATĂ DE ROȘII CU CASTRAVEȚI", desc: "200 g", price: "9 RON", image: salateImages[10] },
            { id: 11, name: "SALATĂ DE MURĂTURI", desc: "200 g", price: "9 RON", image: salateImages[11] },
        ],
        dessert: [
            { id: 1, name: "PAPANAȘI CU SMÂNTÂNĂ ȘI DULCEAȚĂ", desc: "200g", price: "32 RON", image: dessertImages[1] },
            { id: 2, name: "CLĂTITE CU BRÂNZĂ ȘI SMÂNTÂNĂ", desc: "200g", price: "26 RON", image: dessertImages[2] },
            { id: 3, name: "CHIROSTE CU BRANZA DULCE", desc: "200g", price: "23 RON", image: dessertImages[3] },
            { id: 4, name: "CLĂTITE CU DULCEAȚĂ", desc: "200g", price: "19 RON", image: dessertImages[4] },
            { id: 5, name: "CLĂTITE CU CIOCOLATĂ", desc: "200g", price: "19 RON", image: dessertImages[5] },
            { id: 6, name: "GĂLUȘTE CU PRUNE", desc: "200g", price: "20 RON", image: dessertImages[6] },
            { id: 7, name: "TOCINEI CU SMÂNTÂNĂ", desc: "200g", price: "25 RON", image: dessertImages[7] }
        ],
        drinks: {
            soft: [
                { name: "COCA-COLA", desc: "250ml", price: "8 RON" },
                { name: "COCA-COLA", desc: "500ml", price: "10 RON" },
                { name: "COCA-COLA ZERO", desc: "500ml", price: "10 RON" },
                { name: "FANTA", desc: "250ml", price: "8 RON" },
                { name: "FANTA", desc: "500ml", price: "10 RON" },
                { name: "SPRITE", desc: "500ml", price: "10 RON" },
                { name: "CAPPY NECTAR", desc: "250ml", price: "10 RON" },
                { name: "CAPPY PULPY", desc: "330ml", price: "9 RON" },
                { name: "FUZETEA", desc: "500ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "250ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "500ml", price: "10 RON" },
                { name: "ALOE VERA", desc: "500ml", price: "10 RON" },
                { name: "REDBULL", desc: "500ml", price: "12 RON" },
                { name: "TIGER ENERGY", desc: "500ml", price: "7 RON" },
                { name: "BURN", desc: "500ml", price: "10 RON" },
                { name: "APĂ MINERALĂ", desc: "500ml", price: "8 RON" },
                { name: "APĂ PLATĂ", desc: "500ml", price: "8 RON" },
                { name: "VITAMIN AQUA", desc: "500ml", price: "12 RON" },
                { name: "APĂ PLATĂ", desc: "750ml", price: "10 RON" },
                { name: "APĂ MINERALĂ", desc: "750ml", price: "10 RON" },
                { name: "LIMONADĂ CU MENTĂ", desc: "500ml", price: "14 RON" }
            ],
            hot: [
                { name: "ESPRESSO", desc: "", price: "7 RON" },
                { name: "CAPPUCCINO", desc: "", price: "9 RON" },
                { name: "CIOLATĂ CALDĂ", desc: "", price: "8 RON" },
                { name: "CEAI INFUZIE", desc: "", price: "8 RON" }
            ],
            wines: [
                { name: "SAUVIGNON BLANC", desc: "750ml", price: "65 RON" },
                { name: "RARA NEAGRĂ", desc: "750ml", price: "65 RON" },
                { name: "ROZE", desc: "750ml", price: "65 RON" },
                { name: "VINUL CASEI - ALB", desc: "200ml", price: "10 RON" },
                { name: "VINUL CASEI - ROSU", desc: "200ml", price: "10 RON" },
                { name: "VINUL CASEI - ROZE", desc: "200ml", price: "10 RON" }
            ],
            spirits: [
                { name: "PALINCĂ", desc: "100ml", price: "12 RON" },
                { name: "AFINATĂ", desc: "100ml", price: "14 RON" },
                { name: "VIȘINATĂ", desc: "100ml", price: "14 RON" },
                { name: "STALINSKAYA", desc: " Vodka 100ml", price: "15 RON" },
                { name: "FINLANDIA", desc: " Vodka 100ml", price: "16 RON" },
                { name: "ABSOLUT", desc: " Vodka 100ml", price: "18 RON" },
                { name: "VORONA", desc: " Vodka 100ml", price: "11 RON" },
                { name: "STEFAN CEL MARE", desc: " Vodka 100ml", price: "18 RON" },
                { name: "ALEXANDER", desc: " Vodka 100ml", price: "15 RON" },
                { name: "VORONSKAYA", desc: " Vodka 100ml", price: "15 RON" },
                { name: "CAVA D'ORO", desc: " Coniac 100ml", price: "12 RON" },
                { name: "UNIREA", desc: " Coniac 100ml", price: "10 RON" },
                { name: "ALEXANDRION 5*", desc: " Coniac 100ml", price: "15 RON" },
                { name: "METAXA 5*", desc: " Coniac 100ml", price: "20 RON" },
                { name: "JIDVEI VS", desc: " 100ml", price: "20 RON" },
                { name: "JIDVEI VSOP", desc: " 100ml", price: "25 RON" },
                { name: "J&B", desc: " Whiskey 100ml", price: "18 RON" },
                { name: "JACK DANIEL'S", desc: " Whiskey 100ml", price: "22 RON" },
                { name: "WEMBLEY", desc: " Gin 100ml", price: "10 RON" }
            ],
            beers: [
                { name: "BERGENBIER TWIST", desc: "330ml", price: "9 RON" },
                { name: "BERGENBIER", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER F.A", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER LA HALBA", desc: "400ml", price: "8 RON" },
                { name: "BERGENBIER FRESH GRAPEFRUIT LA DOZA", desc: "500ml", price: "9 RON" },
                { name: "BERE DE CASA HALBĂ 400 ml", desc: "", price: "8 RON" },
                { name: "STAROPRAMEN TWIST", desc: "330ml", price: "10 RON" },
                { name: "STAROPRAMEN", desc: "500ml", price: "10 RON" },
                { name: "STAROPRAMEN F.A DOZĂ", desc: "330ml", price: "10 RON" },
                { name: "BEKS", desc: "330ml", price: "10 RON" },
                { name: "BEKS", desc: "500ml", price: "12 RON" },
                { name: "BEKS DOZĂ", desc: "500ml", price: "10 RON" },
                { name: "STELA ARTOIS", desc: "330ml", price: "12 RON" },
                { name: "STELA ARTOIS", desc: "500ml", price: "14 RON" },
                { name: "STELA ARTOIS DOZĂ", desc: "500ml", price: "12 RON" },
                { name: "MADRI STICLĂ", desc: "500ml", price: "10 RON" },
                { name: "MADRI DOZĂ", desc: "500ml", price: "10 RON" },
                { name: "CARAIMAN STICLĂ", desc: "500ml", price: "10 RON" },
                { name: "BERE DE CASĂ HALBĂ", desc: "400ml", price: "8 RON" },
                { name: "BERE FRESH F.A.", desc: "330ml", price: "9 RON" }
            ]
        }
    },
    en: {
        breakfast: [
            { id: 1, name: "GRANDMA'S BREAKFAST", desc: "Two fried eggs, pastrami, fried potatoes, cheese, tomatoes 350g", price: "26 RON", image: breakfastImages[1] },
            { id: 2, name: "BREADEDCHEESE", desc: "Prepared 150g", price: "19 RON", image: breakfastImages[2] },
            { id: 3, name: "OMELETTE", desc: "With ham and cheese 200g", price: "18 RON", image: breakfastImages[3] },
            { id: 4, name: "OMELETTE", desc: "With cheese 150g", price: "15 RON", image: breakfastImages[4] },
            { id: 5, name: "FRIED EGGS", desc: "2 pieces", price: "6 RON", image: breakfastImages[5] },
            { id: 6, name: "CHEESE", desc: "Telemea or burduf 100g", price: "10 RON", image: breakfastImages[6] },
            { id: 7, name: "JAM", desc: "100g", price: "6 RON", image: breakfastImages[7] },
            { id: 8, name: "BUTTER", desc: "50g", price: "8 RON", image: breakfastImages[8] },
            { id: 9, name: "YOGURT", desc: "200g", price: "8 RON", image: breakfastImages[9] }
        ],
        soup: {
            soup: [
                { id: 1, name: "RĂDĂUȚEANĂ SOUP", desc: "70g/430 ml", price: "20 RON", image: soupImages[1] },
                { id: 2, name: "TRIPE SOUP", desc: "70g/430 ml", price: "20 RON", image: soupImages[2] },
                { id: 3, name: "BEEF SOUP", desc: "40g/460g", price: "22 RON", image: soupImages[3] },
                { id: 4, name: "CHICKEN SOUP", desc: "With noodles 60g/430 ml", price: "19 RON", image: soupImages[4] },
                { id: 5, name: "MEATBALL SOUP", desc: "60g/430 ml", price: "19 RON", image: soupImages[5] },
                { id: 6, name: "BEAN SOUP", desc: "With smoked meat 80g/420 ml", price: "20 RON", image: soupImages[6] },
                { id: 7, name: "SOLEANCA", desc: "Moldavian soup 100g/400 ml", price: "20 RON", image: soupImages[7] },
                { id: 8, name: "GRANDMA'S SOUP", desc: "Vegetable soup 100g/400 ml", price: "17 RON", image: soupImages[8] },
                { id: 9, name: "POTATO STEW WITH SMOKED MEAT", desc: "60g/440 ml", price: "21 RON", image: soupImages[9] },
                { id: 10, name: "POTATO STEW WITH PORCINI", desc: "40g/460 ml", price: "22 RON", image: soupImages[10] }
            ],
            extra: [
                { id: 1, name: "BREAD", desc: "100g", price: "3 RON" },
                { id: 2, name: "SOUR CREAM", desc: "50g", price: "5 RON" },
                { id: 3, name: "HOT PEPPER", desc: "1 pc", price: "1.5 RON" },
                { id: 4, name: "LEMON", desc: "", price: "1 RON" }
            ],
            onthego: [
                { id: 1, name: "PACKAGING", desc: "", price: "1 RON" }
            ]
        },
        fastfood: [
            { id: 1, name: "ANGUS BEEF BURGER", desc: "With fries and sauce 450g", price: "38 RON", image: fastfoodImages[1] },
            { id: 2, name: "CRISPY CHICKEN BREAST", desc: "With fries and sauce 450g", price: "40 RON", image: fastfoodImages[2] },
            { id: 3, name: "WINGS", desc: "Spicy/Non-spicy, with fries and sauce 450g", price: "40 RON", image: fastfoodImages[3] },
            { id: 4, name: "SHAWARMA PLATE", desc: "450g", price: "30 RON", image: fastfoodImages[4] },
        ],
        grill: {
            grill: [
                { id: 1, name: "TROUT", desc: "Grilled / fried 100g", price: "15 RON", image: grillImages.grill[1] },
                { id: 2, name: "GRILLED SAUSAGES", desc: "150g", price: "18 RON", image: grillImages.grill[2] },
                { id: 3, name: "HOMEMADE SAUSAGES", desc: "150g", price: "18 RON", image: grillImages.grill[3] },
                { id: 4, name: "PORK NECK", desc: "200g", price: "28 RON", image: grillImages.grill[4] },
                { id: 5, name: "GRILLED CHICKEN BREAST", desc: "200g", price: "24 RON", image: grillImages.grill[5] },
                { id: 6, name: "PORK CHOP", desc: "200g", price: "26 RON", image: grillImages.grill[6] },
                { id: 7, name: "BONELESS CHICKEN THIGH", desc: "200g", price: "24 RON", image: grillImages.grill[7] },
                { id: 8, name: "MICI", desc: "50g/pc", price: "6 RON", image: grillImages.grill[8] }
            ],
            sides: [
                { id: 1, name: "GRILLED POTATOES", desc: "With garlic or onions 200g", price: "18 RON", image: grillImages.sides[1] },
                { id: 2, name: "FRENCH FRIES", desc: "200g", price: "12 RON", image: grillImages.sides[2] },
                { id: 3, name: "RICE PILAF", desc: "200g", price: "10 RON", image: grillImages.sides[3] },
                { id: 4, name: "BOILED POTATOES", desc: "200g", price: "10 RON", image: grillImages.sides[4] },
                { id: 5, name: "ROASTED POTATOES", desc: "200g", price: "15 RON", image: grillImages.sides[5] },
                { id: 6, name: "CHAMPIGNON MUSHROOMS", desc: "Pan-fried 200g", price: "17 RON", image: grillImages.sides[6] },
                { id: 7, name: "POLENTA", desc: "200g", price: "8 RON", image: grillImages.sides[7] },
                { id: 8, name: "STEWED BEANS", desc: "250g", price: "15 RON", image: grillImages.sides[8] },
                { id: 9, name: "MASHED BEANS", desc: "250g", price: "15 RON", image: grillImages.sides[9] }
            ],
            sauces: [
                { id: 1, name: "GARLIC SAUCE", desc: "50g", price: "5 RON", image: grillImages.sauces[1] },
                { id: 2, name: "TZATZIKI SAUCE", desc: "50g", price: "5 RON", image: grillImages.sauces[2] },
                { id: 3, name: "CHEF'S RED SPICY SAUCE", desc: "50g", price: "5 RON", image: grillImages.sauces[3] },
                { id: 4, name: "CHEF'S RED SWEET SAUCE", desc: "50g", price: "5 RON", image: grillImages.sauces[4] },
                { id: 5, name: "SWEET KETCHUP", desc: "50g", price: "4 RON", image: grillImages.sauces[5] },
                { id: 6, name: "MUSTARD", desc: "50g", price: "4 RON", image: grillImages.sauces[6] }
            ]
        },
        traditional: [
            { id: 1, name: "CÂMPULUNG PLATTER", desc: "Pork shank, sausages, pork ribs, mici, cheese, burduf cheese, roasted potatoes, pickles, horseradish beet, garlic sauce — 2 persons", price: "120 RON", image: traditionImages[1] },
            { id: 2, name: "TRAVELER'S PLATTER", desc: "Grilled sausages, neck, chicken breast, mici, cheese, grilled potatoes, pickles, garlic sauce 550g", price: "46 RON", image: traditionImages[2] },
            { id: 3, name: "BUCOVINA PLATTER", desc: "Homemade sausages, ribs, kaizer, grilled potatoes, burduf cheese, pickles, garlic sauce 550g", price: "46 RON", image: traditionImages[3] },
            { id: 4, name: "CHICKEN PLATTER", desc: "Chicken breast, spicy wings, crispy, breaded cheese, fries 550g", price: "45 RON", image: traditionImages[4] },
            { id: 5, name: "VEGETARIAN BUCOVINA PLATTER", desc: "Mashed beans, zacusca, veggie schnitzel, patty, pickles, toasted bread 500g", price: "30 RON", image: traditionImages[5] },
            { id: 6, name: "GRILLED POTATO PLATTER", desc: "Potatoes (grilled/sliced), burduf cheese, bacon, fried ribs, garlic sauce, pickles 700g", price: "35 RON", image: traditionImages[6] },
            { id: 7, name: "HOUSE TOCHITURĂ", desc: "Smoked pork leg, sausages, kaizer, burduf cheese, egg, polenta, pickles 500g", price: "49 RON", image: traditionImages[7] },
            { id: 8, name: "BUCOVINA CHICKEN TOCHITURĂ", desc: "Boneless chicken thigh, chicken liver, burduf cheese, egg, polenta 500g", price: "45 RON", image: traditionImages[8] },
            { id: 9, name: "BUCOVINA BULZ", desc: "300g", price: "39 RON", image: traditionImages[9] },
            { id: 10, name: "PORK SHANK WITH POLENTA", desc: "700g", price: "56 RON", image: traditionImages[10] },
            { id: 11, name: "PORK SHANK WITH BEANS/FRIED POTATO SLICES", desc: "700g", price: "58 RON", image: traditionImages[11] },
            { id: 12, name: "CHICKEN CIULAMA WITH MUSHROOMS AND POLENTA", desc: "350g", price: "35 RON", image: traditionImages[12] },
            { id: 13, name: "PORK RIBS IN CAULDRON", desc: "300g", price: "36 RON", image: traditionImages[13] },
            { id: 14, name: "PORK SCHNITZEL", desc: "200g", price: "25 RON", image: traditionImages[14] },
            { id: 15, name: "CHICKEN BREAST SCHNITZEL", desc: "200g", price: "25 RON", image: traditionImages[15] },
            { id: 16, name: "LIVER WITH GARLIC AND POLENTA", desc: "300g", price: "28 RON", image: traditionImages[16] },
            { id: 17, name: "SAUTÉED PORCINI", desc: "250g", price: "40 RON", image: traditionImages[17] },
            { id: 18, name: "SAUTÉED PORCINI WITH CREAM", desc: "350g", price: "50 RON", image: traditionImages[18] },
            { id: 19, name: "BEANS WITH SAUSAGES", desc: "350g", price: "32 RON", image: traditionImages[19] },
            { id: 20, name: "POLENTA WITH CHEESE AND SOUR CREAM", desc: "400g", price: "20 RON", image: traditionImages[20] },
        ],
        salat: [
            { id: 1, name: "TUNA SALAD", desc: "Lettuce, tomatoes, onions, tuna, peppers, lemon, corn, mayo 300 g", price: "25 RON", image: salateImages[1] },
            { id: 2, name: "CHICKEN SALAD", desc: "Lettuce, tomatoes, onions, cucumbers, olives, egg, ham, cheese 300 g", price: "25 RON", image: salateImages[2] },
            { id: 3, name: "BULGARIAN SALAD", desc: "300 g", price: "22 RON", image: salateImages[3] },
            { id: 4, name: "BEAN SALAD WITH ONIONS", desc: "150 g", price: "14 RON", image: salateImages[4] },
            { id: 5, name: "TOMATO SALAD WITH CHEESE", desc: "150 g", price: "12 RON", image: salateImages[5] },
            { id: 6, name: "HORSERADISH BEET SALAD", desc: "200 g", price: "10 RON", image: salateImages[6] },
            { id: 7, name: "MIXED SALAD", desc: "Cabbage, tomatoes, cucumbers, onions 150 g", price: "9 RON", image: salateImages[7] },
            { id: 8, name: "CABBAGE SALAD", desc: "150 g", price: "8 RON", image: salateImages[8] },
            { id: 9, name: "TOMATO SALAD", desc: "200 g", price: "8 RON", image: salateImages[9] },
            { id: 10, name: "TOMATO AND CUCUMBER SALAD", desc: "200 g", price: "9 RON", image: salateImages[10] },
            { id: 11, name: "PICKLES SALAD", desc: "200 g", price: "9 RON", image: salateImages[11] },
        ],
        dessert: [
            { id: 1, name: "PAPANAȘI WITH SOUR CREAM AND JAM", desc: "200g", price: "32 RON", image: dessertImages[1] },
            { id: 2, name: "CHEESE PANCAKES WITH SOUR CREAM", desc: "200g", price: "26 RON", image: dessertImages[2] },
            { id: 3, name: "SWEET CHEESE PIES", desc: "200g", price: "23 RON", image: dessertImages[3] },
            { id: 4, name: "JAM PANCAKES", desc: "200g", price: "19 RON", image: dessertImages[4] },
            { id: 5, name: "CHOCOLATE PANCAKES", desc: "200g", price: "19 RON", image: dessertImages[5] },
            { id: 6, name: "PLUM DUMPLINGS", desc: "200g", price: "20 RON", image: dessertImages[6] },
            { id: 7, name: "TOCINEI WITH SOUR CREAM", desc: "200g", price: "25 RON", image: dessertImages[7] }
        ],
        drinks: {
            soft: [
                { name: "COCA-COLA", desc: "250ml", price: "8 RON" },
                { name: "COCA-COLA", desc: "500ml", price: "10 RON" },
                { name: "COCA-COLA ZERO", desc: "500ml", price: "10 RON" },
                { name: "FANTA", desc: "250ml", price: "8 RON" },
                { name: "FANTA", desc: "500ml", price: "10 RON" },
                { name: "SPRITE", desc: "500ml", price: "10 RON" },
                { name: "CAPPY NECTAR", desc: "250ml", price: "10 RON" },
                { name: "CAPPY PULPY", desc: "330ml", price: "9 RON" },
                { name: "FUZETEA", desc: "500ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "250ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "500ml", price: "10 RON" },
                { name: "ALOE VERA", desc: "500ml", price: "10 RON" },
                { name: "REDBULL", desc: "500ml", price: "12 RON" },
                { name: "TIGER ENERGY", desc: "500ml", price: "7 RON" },
                { name: "BURN", desc: "500ml", price: "10 RON" },
                { name: "MINERAL WATER", desc: "500ml", price: "8 RON" },
                { name: "STILL WATER", desc: "500ml", price: "8 RON" },
                { name: "VITAMIN AQUA", desc: "500ml", price: "12 RON" },
                { name: "STILL WATER", desc: "750ml", price: "10 RON" },
                { name: "MINERAL WATER", desc: "750ml", price: "10 RON" },
                { name: "MINT LEMONADE", desc: "500ml", price: "14 RON" }
            ],
            hot: [
                { name: "ESPRESSO", desc: "", price: "7 RON" },
                { name: "CAPPUCCINO", desc: "", price: "9 RON" },
                { name: "HOT CHOCOLATE", desc: "", price: "8 RON" },
                { name: "TEA INFUSION", desc: "", price: "8 RON" }
            ],
            wines: [
                { name: "SAUVIGNON BLANC", desc: "750ml", price: "65 RON" },
                { name: "RARA NEAGRĂ", desc: "750ml", price: "65 RON" },
                { name: "ROSÉ", desc: "750ml", price: "65 RON" },
                { name: "HOUSE WINE - WHITE", desc: "200ml", price: "10 RON" },
                { name: "HOUSE WINE - RED", desc: "200ml", price: "10 RON" },
                { name: "HOUSE WINE - ROSÉ", desc: "200ml", price: "10 RON" }
            ],
            spirits: [
                { name: "PALINCĂ", desc: "100ml", price: "12 RON" },
                { name: "BLUEBERRY LIQUEUR", desc: "100ml", price: "14 RON" },
                { name: "CHERRY LIQUEUR", desc: "100ml", price: "14 RON" },
                { name: "STALINSKAYA", desc: "Vodka 100ml", price: "15 RON" },
                { name: "FINLANDIA", desc: "Vodka 100ml", price: "16 RON" },
                { name: "ABSOLUT", desc: "Vodka 100ml", price: "18 RON" },
                { name: "VORONA", desc: "Vodka 100ml", price: "11 RON" },
                { name: "STEFAN CEL MARE", desc: "Vodka 100ml", price: "18 RON" },
                { name: "ALEXANDER", desc: "Vodka 100ml", price: "15 RON" },
                { name: "VORONSKAYA", desc: "Vodka 100ml", price: "15 RON" },
                { name: "CAVA D'ORO", desc: "Cognac 100ml", price: "12 RON" },
                { name: "UNIREA", desc: "Cognac 100ml", price: "10 RON" },
                { name: "ALEXANDRION 5*", desc: "Cognac 100ml", price: "15 RON" },
                { name: "METAXA 5*", desc: "Cognac 100ml", price: "20 RON" },
                { name: "JIDVEI VS", desc: "100ml", price: "20 RON" },
                { name: "JIDVEI VSOP", desc: "100ml", price: "25 RON" },
                { name: "J&B", desc: "Whiskey 100ml", price: "18 RON" },
                { name: "JACK DANIEL'S", desc: "Whiskey 100ml", price: "22 RON" },
                { name: "WEMBLEY", desc: "Gin 100ml", price: "10 RON" }
            ],
            beers: [
                { name: "BERGENBIER TWIST", desc: "330ml", price: "9 RON" },
                { name: "BERGENBIER", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER N.A", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER DRAFT", desc: "400ml", price: "8 RON" },
                { name: "BERGENBIER FRESH GRAPEFRUIT CAN", desc: "500ml", price: "9 RON" },
                { name: "HOUSE BEER DRAFT", desc: "400 ml", price: "8 RON" },
                { name: "STAROPRAMEN TWIST", desc: "330ml", price: "10 RON" },
                { name: "STAROPRAMEN", desc: "500ml", price: "10 RON" },
                { name: "STAROPRAMEN N.A CAN", desc: "330ml", price: "10 RON" },
                { name: "BECK'S", desc: "330ml", price: "10 RON" },
                { name: "BECK'S", desc: "500ml", price: "12 RON" },
                { name: "BECK'S CAN", desc: "500ml", price: "10 RON" },
                { name: "STELLA ARTOIS", desc: "330ml", price: "12 RON" },
                { name: "STELLA ARTOIS", desc: "500ml", price: "14 RON" },
                { name: "STELLA ARTOIS CAN", desc: "500ml", price: "12 RON" },
                { name: "MADRI BOTTLE", desc: "500ml", price: "10 RON" },
                { name: "MADRI CAN", desc: "500ml", price: "10 RON" },
                { name: "CARAIMAN BOTTLE", desc: "500ml", price: "10 RON" },
                { name: "HOUSE BEER DRAFT", desc: "400ml", price: "8 RON" },
                { name: "FRESH BEER N.A.", desc: "330ml", price: "9 RON" }
            ]
        }
    },
    fr: {
        breakfast: [
            { id: 1, name: "PETIT-DÉJEUNER DE GRAND-MÈRE", desc: "Deux œufs au plat, pastrami, pommes de terre frites, fromage telemea, tomates 350g", price: "26 RON", image: breakfastImages[1] },
            { id: 2, name: "FROMAGE PANÉ", desc: "Préparé 150g", price: "19 RON", image: breakfastImages[2] },
            { id: 3, name: "OMELETTE", desc: "Avec jambon et fromage 200g", price: "18 RON", image: breakfastImages[3] },
            { id: 4, name: "OMELETTE", desc: "Avec fromage 150g", price: "15 RON", image: breakfastImages[4] },
            { id: 5, name: "ŒUFS AU PLAT", desc: "2 pièces", price: "6 RON", image: breakfastImages[5] },
            { id: 6, name: "FROMAGE TELEMEA", desc: "Ou burduf 100g", price: "10 RON", image: breakfastImages[6] },
            { id: 7, name: "CONFITURE", desc: "100g", price: "6 RON", image: breakfastImages[7] },
            { id: 8, name: "BEURRE", desc: "50g", price: "8 RON", image: breakfastImages[8] },
            { id: 9, name: "YAOURT", desc: "200g", price: "8 RON", image: breakfastImages[9] }
        ],
        soup: {
            soup: [
                { id: 1, name: "SOUPE RĂDĂUȚEANĂ", desc: "Soupe traditionnelle roumaine 70g/430 ml", price: "20 RON", image: soupImages[1] },
                { id: 2, name: "SOUPE DE TRIPES", desc: "70g/430 ml", price: "20 RON", image: soupImages[2] },
                { id: 3, name: "SOUPE DE BŒUF", desc: "40g/460g", price: "22 RON", image: soupImages[3] },
                { id: 4, name: "SOUPE DE POULE", desc: "Avec nouilles 60g/430 ml", price: "19 RON", image: soupImages[4] },
                { id: 5, name: "SOUPE AUX BOULETTES", desc: "60g/430 ml", price: "19 RON", image: soupImages[5] },
                { id: 6, name: "SOUPE AUX HARICOTS", desc: "Avec viande fumée 80g/420 ml", price: "20 RON", image: soupImages[6] },
                { id: 7, name: "SOLEANCA", desc: "Soupe moldave 100g/400 ml", price: "20 RON", image: soupImages[7] },
                { id: 8, name: "SOUPE DE GRAND-MÈRE", desc: "Soupe de légumes 100g/400 ml", price: "17 RON", image: soupImages[8] },
                { id: 9, name: "SOUPE DE POMMES DE TERRE FUMÉES", desc: "60g/440 ml", price: "21 RON", image: soupImages[9] },
                { id: 10, name: "SOUPE DE POMMES DE TERRE AUX CÈPES", desc: "40g/460 ml", price: "22 RON", image: soupImages[10] }
            ],
            extra: [
                { id: 1, name: "PAIN", desc: "100g", price: "3 RON" },
                { id: 2, name: "CRÈME FRAÎCHE", desc: "50g", price: "5 RON" },
                { id: 3, name: "PIMENT FORT", desc: "1 pièce", price: "1.5 RON" },
                { id: 4, name: "CITRON", desc: "", price: "1 RON" }
            ],
            onthego: [
                { id: 1, name: "EMBALLAGE", desc: "", price: "1 RON" }
            ]
        },
        fastfood: [
            { id: 1, name: "BURGER DE BŒUF ANGUS", desc: "Avec pommes de terre frites et sauce 450g", price: "38 RON", image: fastfoodImages[1] },
            { id: 2, name: "BLANC DE POULET CRISPY", desc: "Avec pommes de terre frites et sauce 450g", price: "40 RON", image: fastfoodImages[2] },
            { id: 3, name: "AILES DE POULET", desc: "Épicées/Non épicées, avec pommes de terre frites et sauce 450g", price: "40 RON", image: fastfoodImages[3] },
            { id: 4, name: "SHAWARMA EN ASSIETTE", desc: "450g", price: "30 RON", image: fastfoodImages[4] }
        ],
        grill: {
            grill: [
                { id: 1, name: "TRUITE", desc: "Grillée / frite 100g", price: "15 RON", image: grillImages.grill[1] },
                { id: 2, name: "SAUCISSES GRILLÉES", desc: "150g", price: "18 RON", image: grillImages.grill[2] },
                { id: 3, name: "SAUCISSES MAISON", desc: "150g", price: "18 RON", image: grillImages.grill[3] },
                { id: 4, name: "ÉCHINE DE PORC", desc: "200g", price: "28 RON", image: grillImages.grill[4] },
                { id: 5, name: "BLANC DE POULET GRILLÉ", desc: "200g", price: "24 RON", image: grillImages.grill[5] },
                { id: 6, name: "CÔTELETTE DE PORC", desc: "200g", price: "26 RON", image: grillImages.grill[6] },
                { id: 7, name: "CUISSE DE POULET DÉSOSSÉE", desc: "200g", price: "24 RON", image: grillImages.grill[7] },
                { id: 8, name: "MICI", desc: "Rouleaux de viande grillée 50g/pièce", price: "6 RON", image: grillImages.grill[8] }
            ],
            sides: [
                { id: 1, name: "POMMES DE TERRE SAUTÉES", desc: "Avec ail ou oignon 200g", price: "18 RON", image: grillImages.sides[1] },
                { id: 2, name: "POMMES DE TERRE FRITES", desc: "200g", price: "12 RON", image: grillImages.sides[2] },
                { id: 3, name: "RIZ PILAF", desc: "200g", price: "10 RON", image: grillImages.sides[3] },
                { id: 4, name: "POMMES DE TERRE NATURE", desc: "200g", price: "10 RON", image: grillImages.sides[4] },
                { id: 5, name: "POMMES DE TERRE DORÉES", desc: "200g", price: "15 RON", image: grillImages.sides[5] },
                { id: 6, name: "CHAMPIGNONS DE PARIS", desc: "À la poêle 200g", price: "17 RON", image: grillImages.sides[6] },
                { id: 7, name: "MAMALIGA", desc: "Polenta roumaine 200g", price: "8 RON", image: grillImages.sides[7] },
                { id: 8, name: "HARICOTS MIJOTÉS", desc: "250g", price: "15 RON", image: grillImages.sides[8] },
                { id: 9, name: "HARICOTS EN PURÉE", desc: "250g", price: "15 RON", image: grillImages.sides[9] }
            ],
            sauces: [
                { id: 1, name: "SAUCE À L'AIL", desc: "50g", price: "5 RON", image: grillImages.sauces[1] },
                { id: 2, name: "SAUCE TZATZIKI", desc: "50g", price: "5 RON", image: grillImages.sauces[2] },
                { id: 3, name: "SAUCE DU CHEF ROUGE ÉPICÉE", desc: "50g", price: "5 RON", image: grillImages.sauces[3] },
                { id: 4, name: "SAUCE DU CHEF ROUGE DOUCE", desc: "50g", price: "5 RON", image: grillImages.sauces[4] },
                { id: 5, name: "KETCHUP DOUX", desc: "50g", price: "4 RON", image: grillImages.sauces[5] },
                { id: 6, name: "MOUTARDE", desc: "50g", price: "4 RON", image: grillImages.sauces[6] }
            ]
        },
        traditional: [
            { id: 1, name: "PLATEAU CÂMPULUNGEAN", desc: "Jarret de porc, saucisses, côtes de porc, mici, fromage telemea, fromage burduf, pommes de terre dorées, pickles, betteraves au raifort, sauce à l'ail — 2 personnes", price: "120 RON", image: traditionImages[1] },
            { id: 2, name: "PLATEAU DU RANDONNEUR", desc: "Saucisses grillées, échine, blanc de poulet, mici, fromage telemea, pommes de terre sautées, pickles, sauce à l'ail 550g", price: "46 RON", image: traditionImages[2] },
            { id: 3, name: "PLATEAU BUCOVINÉEN", desc: "Saucisses maison, côtes, kaizer, pommes de terre sautées, fromage burduf, pickles, sauce à l'ail 550g", price: "46 RON", image: traditionImages[3] },
            { id: 4, name: "PLATEAU DE POULET", desc: "Blanc de poulet, pilons épicés, crispy, fromage pané, pommes de terre frites 550g", price: "45 RON", image: traditionImages[4] },
            { id: 5, name: "PLATEAU BUCOVINÉEN VÉGÉTARIEN", desc: "Haricots en purée, zacusca, escalope végétarienne, boulette, pickles, pain grillé 500g", price: "30 RON", image: traditionImages[5] },
            { id: 6, name: "PLATEAU DE POMMES DE TERRE SAUTÉES", desc: "Pommes de terre (sautées en saison / rondelles), fromage burduf, lard, côtelette frite, sauce à l'ail, pickles 700g", price: "35 RON", image: traditionImages[6] },
            { id: 7, name: "TOCHITURA MAISON", desc: "Cuisse de porc fumée, saucisses, kaizer, fromage burduf, œuf, mamaliga, pickles 500g", price: "49 RON", image: traditionImages[7] },
            { id: 8, name: "TOCHITURA BUCOVINÉEN DE POULET", desc: "Cuisse de poulet désossée, foies de poulet, fromage burduf, œuf, mamaliga 500g", price: "45 RON", image: traditionImages[8] },
            { id: 9, name: "BULZ BUCOVINÉEN", desc: "Boule de polenta fourrée au fromage 300g", price: "39 RON", image: traditionImages[9] },
            { id: 10, name: "JARRET DE PORC AVEC MAMALIGA", desc: "700g", price: "56 RON", image: traditionImages[10] },
            { id: 11, name: "JARRET DE PORC AVEC HARICOTS/RONDELLES DE POMMES DE TERRE FRITES", desc: "700g", price: "58 RON", image: traditionImages[11] },
            { id: 12, name: "CIULAMA DE POULET AUX CHAMPIGNONS ET MAMALIGA", desc: "Ragoût de poulet 350g", price: "35 RON", image: traditionImages[12] },
            { id: 13, name: "CÔTES DE PORC AU CHAUDRON", desc: "300g", price: "36 RON", image: traditionImages[13] },
            { id: 14, name: "ESCALOPE DE PORC", desc: "200g", price: "25 RON", image: traditionImages[14] },
            { id: 15, name: "ESCALOPE DE BLANC DE POULET", desc: "200g", price: "25 RON", image: traditionImages[15] },
            { id: 16, name: "FOIES À L'AIL ET MAMALIGA", desc: "300g", price: "28 RON", image: traditionImages[16] },
            { id: 17, name: "CÈPES SAUTÉS", desc: "250g", price: "40 RON", image: traditionImages[17] },
            { id: 18, name: "CÈPES SAUTÉS À LA CRÈME", desc: "350g", price: "50 RON", image: traditionImages[18] },
            { id: 19, name: "HARICOTS AUX SAUCISSES", desc: "350g", price: "32 RON", image: traditionImages[19] },
            { id: 20, name: "MAMALIGA AU FROMAGE ET CRÈME FRAÎCHE", desc: "400g", price: "20 RON", image: traditionImages[20] }
        ],
        salat: [
            { id: 1, name: "SALADE AU THON", desc: "Salade verte, tomates, oignon, thon, poivron, citron, maïs, mayonnaise 300 g", price: "25 RON", image: salateImages[1] },
            { id: 2, name: "SALADE AU POULET", desc: "Salade verte, tomates, oignon, concombres, olives, œuf, jambon, telemea 300 g", price: "25 RON", image: salateImages[2] },
            { id: 3, name: "SALADE BULGARE", desc: "300 g", price: "22 RON", image: salateImages[3] },
            { id: 4, name: "SALADE DE HARICOTS À L'OIGNON", desc: "150 g", price: "14 RON", image: salateImages[4] },
            { id: 5, name: "SALADE DE TOMATES AU FROMAGE TELEMEA", desc: "150 g", price: "12 RON", image: salateImages[5] },
            { id: 6, name: "SALADE DE BETTERAVES AU RAIFORT", desc: "200 g", price: "10 RON", image: salateImages[6] },
            { id: 7, name: "SALADE ASSORTIE", desc: "Chou, tomates, concombres, oignon 150 g", price: "9 RON", image: salateImages[7] },
            { id: 8, name: "SALADE DE CHOU", desc: "150 g", price: "8 RON", image: salateImages[8] },
            { id: 9, name: "SALADE DE TOMATES", desc: "200 g", price: "8 RON", image: salateImages[9] },
            { id: 10, name: "SALADE DE TOMATES AUX CONCOMBRES", desc: "200 g", price: "9 RON", image: salateImages[10] },
            { id: 11, name: "SALADE DE PICKLES", desc: "200 g", price: "9 RON", image: salateImages[11] }
        ],
        dessert: [
            { id: 1, name: "PAPANAȘI À LA CRÈME ET CONFITURE", desc: "Beignets roumains 200g", price: "32 RON", image: dessertImages[1] },
            { id: 2, name: "CRÊPES AU FROMAGE ET CRÈME FRAÎCHE", desc: "200g", price: "26 RON", image: dessertImages[2] },
            { id: 3, name: "CHIROSTE AU FROMAGE DOUX", desc: "Crêpes roulées 200g", price: "23 RON", image: dessertImages[3] },
            { id: 4, name: "CRÊPES À LA CONFITURE", desc: "200g", price: "19 RON", image: dessertImages[4] },
            { id: 5, name: "CRÊPES AU CHOCOLAT", desc: "200g", price: "19 RON", image: dessertImages[5] },
            { id: 6, name: "QUENELLES AUX PRUNES", desc: "200g", price: "20 RON", image: dessertImages[6] },
            { id: 7, name: "TOCINEI À LA CRÈME", desc: "Crêpes épaisses 200g", price: "25 RON", image: dessertImages[7] }
        ],
        drinks: {
            soft: [
                { name: "COCA-COLA", desc: "250ml", price: "8 RON" },
                { name: "COCA-COLA", desc: "500ml", price: "10 RON" },
                { name: "COCA-COLA ZERO", desc: "500ml", price: "10 RON" },
                { name: "FANTA", desc: "250ml", price: "8 RON" },
                { name: "FANTA", desc: "500ml", price: "10 RON" },
                { name: "SPRITE", desc: "500ml", price: "10 RON" },
                { name: "CAPPY NECTAR", desc: "250ml", price: "10 RON" },
                { name: "CAPPY PULPY", desc: "330ml", price: "9 RON" },
                { name: "FUZETEA", desc: "500ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "250ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "500ml", price: "10 RON" },
                { name: "ALOE VERA", desc: "500ml", price: "10 RON" },
                { name: "REDBULL", desc: "500ml", price: "12 RON" },
                { name: "TIGER ENERGY", desc: "500ml", price: "7 RON" },
                { name: "BURN", desc: "500ml", price: "10 RON" },
                { name: "EAU MINÉRALE", desc: "500ml", price: "8 RON" },
                { name: "EAU PLATE", desc: "500ml", price: "8 RON" },
                { name: "VITAMIN AQUA", desc: "500ml", price: "12 RON" },
                { name: "EAU PLATE", desc: "750ml", price: "10 RON" },
                { name: "EAU MINÉRALE", desc: "750ml", price: "10 RON" },
                { name: "LIMONADE À LA MENTHE", desc: "500ml", price: "14 RON" }
            ],
            hot: [
                { name: "ESPRESSO", desc: "", price: "7 RON" },
                { name: "CAPPUCCINO", desc: "", price: "9 RON" },
                { name: "CHOCOLAT CHAUD", desc: "", price: "8 RON" },
                { name: "THÉ INFUSION", desc: "", price: "8 RON" }
            ],
            wines: [
                { name: "SAUVIGNON BLANC", desc: "750ml", price: "65 RON" },
                { name: "RARA NEAGRĂ", desc: "750ml", price: "65 RON" },
                { name: "ROSÉ", desc: "750ml", price: "65 RON" },
                { name: "VIN DE LA MAISON - BLANC", desc: "200ml", price: "10 RON" },
                { name: "VIN DE LA MAISON - ROUGE", desc: "200ml", price: "10 RON" },
                { name: "VIN DE LA MAISON - ROSÉ", desc: "200ml", price: "10 RON" }
            ],
            spirits: [
                { name: "PALINCĂ", desc: "Eau-de-vie 100ml", price: "12 RON" },
                { name: "AFINATĂ", desc: "Liqueur de myrtilles 100ml", price: "14 RON" },
                { name: "VIȘINATĂ", desc: "Liqueur de cerises 100ml", price: "14 RON" },
                { name: "STALINSKAYA", desc: "Vodka 100ml", price: "15 RON" },
                { name: "FINLANDIA", desc: "Vodka 100ml", price: "16 RON" },
                { name: "ABSOLUT", desc: "Vodka 100ml", price: "18 RON" },
                { name: "VORONA", desc: "Vodka 100ml", price: "11 RON" },
                { name: "STEFAN CEL MARE", desc: "Vodka 100ml", price: "18 RON" },
                { name: "ALEXANDER", desc: "Vodka 100ml", price: "15 RON" },
                { name: "VORONSKAYA", desc: "Vodka 100ml", price: "15 RON" },
                { name: "CAVA D'ORO", desc: "Cognac 100ml", price: "12 RON" },
                { name: "UNIREA", desc: "Cognac 100ml", price: "10 RON" },
                { name: "ALEXANDRION 5*", desc: "Cognac 100ml", price: "15 RON" },
                { name: "METAXA 5*", desc: "Cognac 100ml", price: "20 RON" },
                { name: "JIDVEI VS", desc: "100ml", price: "20 RON" },
                { name: "JIDVEI VSOP", desc: "100ml", price: "25 RON" },
                { name: "J&B", desc: "Whiskey 100ml", price: "18 RON" },
                { name: "JACK DANIEL'S", desc: "Whiskey 100ml", price: "22 RON" },
                { name: "WEMBLEY", desc: "Gin 100ml", price: "10 RON" }
            ],
            beers: [
                { name: "BERGENBIER TWIST", desc: "330ml", price: "9 RON" },
                { name: "BERGENBIER", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER F.A", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER LA HALBA", desc: "400ml", price: "8 RON" },
                { name: "BERGENBIER FRESH GRAPEFRUIT LA DOZA", desc: "500ml", price: "9 RON" },
                { name: "BIÈRE MAISON CHOPE", desc: "400 ml", price: "8 RON" },
                { name: "STAROPRAMEN TWIST", desc: "330ml", price: "10 RON" },
                { name: "STAROPRAMEN", desc: "500ml", price: "10 RON" },
                { name: "STAROPRAMEN F.A CANETTE", desc: "330ml", price: "10 RON" },
                { name: "BEKS", desc: "330ml", price: "10 RON" },
                { name: "BEKS", desc: "500ml", price: "12 RON" },
                { name: "BEKS CANETTE", desc: "500ml", price: "10 RON" },
                { name: "STELA ARTOIS", desc: "330ml", price: "12 RON" },
                { name: "STELA ARTOIS", desc: "500ml", price: "14 RON" },
                { name: "STELA ARTOIS CANETTE", desc: "500ml", price: "12 RON" },
                { name: "MADRI BOUTEILLE", desc: "500ml", price: "10 RON" },
                { name: "MADRI CANETTE", desc: "500ml", price: "10 RON" },
                { name: "CARAIMAN BOUTEILLE", desc: "500ml", price: "10 RON" },
                { name: "BIÈRE MAISON CHOPE", desc: "400ml", price: "8 RON" },
                { name: "BIÈRE FRESH F.A.", desc: "330ml", price: "9 RON" }
            ]
        }
    },
    pl: {
        breakfast: [
            { id: 1, name: "ŚNIADANIE BABCI", desc: "Dwa jajka sadzone, pastrami, smażone ziemniaki, ser telemea, pomidory 350g", price: "26 RON", image: breakfastImages[1] },
            { id: 2, name: "SER PANIEROWANY", desc: "Przygotowany 150g", price: "19 RON", image: breakfastImages[2] },
            { id: 3, name: "OMLET", desc: "Z szynką i serem żółtym 200g", price: "18 RON", image: breakfastImages[3] },
            { id: 4, name: "OMLET", desc: "Z serem żółtym 150g", price: "15 RON", image: breakfastImages[4] },
            { id: 5, name: "JAJKA SADZONE", desc: "2 sztuki", price: "6 RON", image: breakfastImages[5] },
            { id: 6, name: "SER TELEMEA", desc: "Lub burduf 100g", price: "10 RON", image: breakfastImages[6] },
            { id: 7, name: "DŻEM", desc: "100g", price: "6 RON", image: breakfastImages[7] },
            { id: 8, name: "MASŁO", desc: "50g", price: "8 RON", image: breakfastImages[8] },
            { id: 9, name: "JOGURT", desc: "200g", price: "8 RON", image: breakfastImages[9] }
        ],
        soup: {
            soup: [
                { id: 1, name: "CIORBA RADAUCIANA", desc: "Tradycyjna rumuńska zupa 70g/430 ml", price: "20 RON", image: soupImages[1] },
                { id: 2, name: "CIORBA DE BURTA", desc: "Flaki rumuńskie 70g/430 ml", price: "20 RON", image: soupImages[2] },
                { id: 3, name: "CIORBA DE VACUTA", desc: "Kwaśna zupa wołowa 40g/460g", price: "22 RON", image: soupImages[3] },
                { id: 4, name: "ROSÓŁ Z KURCZAKA", desc: "Z makaronem 60g/430 ml", price: "19 RON", image: soupImages[4] },
                { id: 5, name: "ZUPA Z KLOPSIKAMI", desc: "60g/430 ml", price: "19 RON", image: soupImages[5] },
                { id: 6, name: "ZUPA FASOLOWA", desc: "Z wędzonym mięsem 80g/420 ml", price: "20 RON", image: soupImages[6] },
                { id: 7, name: "SOLJANKA", desc: "Mołdawska zupa kwaśna 100g/400 ml", price: "20 RON", image: soupImages[7] },
                { id: 8, name: "ZUPA BABCI", desc: "Zupa jarzynowa 100g/400 ml", price: "17 RON", image: soupImages[8] },
                { id: 9, name: "ZUPA ZIEMNIACZANA Z WĘDZONYM MIĘSEM", desc: "60g/440 ml", price: "21 RON", image: soupImages[9] },
                { id: 10, name: "ZUPA ZIEMNIACZANA Z GRZYBAMI", desc: "40g/460 ml", price: "22 RON", image: soupImages[10] }
            ],
            extra: [
                { id: 1, name: "CHLEB", desc: "100g", price: "3 RON" },
                { id: 2, name: "ŚMIETANA", desc: "50g", price: "5 RON" },
                { id: 3, name: "PAPRYCZKA OSTRA", desc: "1 szt", price: "1.5 RON" },
                { id: 4, name: "CYTRYNA", desc: "", price: "1 RON" }
            ],
            onthego: [
                { id: 1, name: "OPAKOWANIE", desc: "", price: "1 RON" }
            ]
        },
        fastfood: [
            { id: 1, name: "BURGER Z WOŁOWINY ANGUS", desc: "Z frytkami i sosem 450g", price: "38 RON", image: fastfoodImages[1] },
            { id: 2, name: "PIERŚ KURCZAKA CRISPY", desc: "Z frytkami i sosem 450g", price: "40 RON", image: fastfoodImages[2] },
            { id: 3, name: "SKRZYDEŁKA", desc: "Pikantne/Niepikantne, z frytkami i sosem 450g", price: "40 RON", image: fastfoodImages[3] },
            { id: 4, name: "SHAORMA NA TALERZU", desc: "450g", price: "30 RON", image: fastfoodImages[4] }
        ],
        grill: {
            grill: [
                { id: 1, name: "PSTRĄG", desc: "Z grilla / smażony 100g", price: "15 RON", image: grillImages.grill[1] },
                { id: 2, name: "KIEŁBASKI Z GRILLA", desc: "150g", price: "18 RON", image: grillImages.grill[2] },
                { id: 3, name: "KIEŁBASA DOMOWA", desc: "150g", price: "18 RON", image: grillImages.grill[3] },
                { id: 4, name: "KARKÓWKA WIEPRZOWA", desc: "200g", price: "28 RON", image: grillImages.grill[4] },
                { id: 5, name: "PIERŚ KURCZAKA Z GRILLA", desc: "200g", price: "24 RON", image: grillImages.grill[5] },
                { id: 6, name: "KOTLET SCHABOWY", desc: "200g", price: "26 RON", image: grillImages.grill[6] },
                { id: 7, name: "UDKO KURCZAKA BEZ KOŚCI", desc: "200g", price: "24 RON", image: grillImages.grill[7] },
                { id: 8, name: "MICI", desc: "Rumuńskie kiełbaski 50g/szt", price: "6 RON", image: grillImages.grill[8] }
            ],
            sides: [
                { id: 1, name: "SCIRJELE", desc: "Ziemniaki z czosnkiem lub cebulą 200g", price: "18 RON", image: grillImages.sides[1] },
                { id: 2, name: "FRYTKI", desc: "200g", price: "12 RON", image: grillImages.sides[2] },
                { id: 3, name: "PILAF Z RYŻU", desc: "200g", price: "10 RON", image: grillImages.sides[3] },
                { id: 4, name: "ZIEMNIAKI GOTOWANE", desc: "200g", price: "10 RON", image: grillImages.sides[4] },
                { id: 5, name: "ZIEMNIAKI PIECZONE", desc: "200g", price: "15 RON", image: grillImages.sides[5] },
                { id: 6, name: "PIECZARKI", desc: "Na patelni 200g", price: "17 RON", image: grillImages.sides[6] },
                { id: 7, name: "MAMALYGA", desc: "Polenta 200g", price: "8 RON", image: grillImages.sides[7] },
                { id: 8, name: "FASOLA DUSZONA", desc: "250g", price: "15 RON", image: grillImages.sides[8] },
                { id: 9, name: "FASOLA TŁUCZONA", desc: "250g", price: "15 RON", image: grillImages.sides[9] }
            ],
            sauces: [
                { id: 1, name: "SOS CZOSNKOWY", desc: "50g", price: "5 RON", image: grillImages.sauces[1] },
                { id: 2, name: "SOS TZATZIKI", desc: "50g", price: "5 RON", image: grillImages.sauces[2] },
                { id: 3, name: "SOS SZEFA CZERWONY PIKANTNY", desc: "50g", price: "5 RON", image: grillImages.sauces[3] },
                { id: 4, name: "SOS SZEFA CZERWONY SŁODKI", desc: "50g", price: "5 RON", image: grillImages.sauces[4] },
                { id: 5, name: "KETCHUP SŁODKI", desc: "50g", price: "4 RON", image: grillImages.sauces[5] },
                { id: 6, name: "MUSZTARDA", desc: "50g", price: "4 RON", image: grillImages.sauces[6] }
            ]
        },
        traditional: [
            { id: 1, name: "TALERZ CAMPULUNGEAN", desc: "Golonka wieprzowa, kiełbaski, żeberka wieprzowe, mici, ser telemea, ser burduf, pieczone ziemniaki, pikle, buraki z chrzanem, sos czosnkowy — 2 osoby", price: "120 RON", image: traditionImages[1] },
            { id: 2, name: "TALERZ WĘDROWCA", desc: "Kiełbaski z grilla, karkówka, pierś kurczaka, mici, ser telemea, scirjele, pikle, sos czosnkowy 550g", price: "46 RON", image: traditionImages[2] },
            { id: 3, name: "TALERZ BUKOWIŃSKI", desc: "Kiełbasa domowa, żeberka, kaizer, scirjele, ser burduf, pikle, sos czosnkowy 550g", price: "46 RON", image: traditionImages[3] },
            { id: 4, name: "TALERZ Z KURCZAKIEM", desc: "Pierś kurczaka, pikantne skrzydełka, crispy, ser panierowany, frytki 550g", price: "45 RON", image: traditionImages[4] },
            { id: 5, name: "TALERZ BUKOWIŃSKI WEGETARIAŃSKI", desc: "Fasola tłuczona, bakłażan, kotlet wegetariański, pulpety, pikle, pieczywo opiekane 500g", price: "30 RON", image: traditionImages[5] },
            { id: 6, name: "TALERZ ZE SCIRJELE", desc: "Ziemniaki (scirjele sezonowo / plastry), ser burduf, słonina, smażony boczek, sos czosnkowy, pikle 700g", price: "35 RON", image: traditionImages[6] },
            { id: 7, name: "TOCHITURA DOMOWA", desc: "Udko wieprzowe wędzone, kiełbasa, kaizer, ser burduf, jajko, mamaliga, pikle 500g", price: "49 RON", image: traditionImages[7] },
            { id: 8, name: "TOCHITURA BUKOWIŃSKI Z KURCZAKA", desc: "Udko kurczaka bez kości, wątróbki drobiowe, ser burduf, jajko, mamaliga 500g", price: "45 RON", image: traditionImages[8] },
            { id: 9, name: "BULZ BUKOWIŃSKI", desc: "Tradycyjne danie z mamaligą i serem 300g", price: "39 RON", image: traditionImages[9] },
            { id: 10, name: "GOLONKA WIEPRZOWA Z MAMALIGĄ", desc: "700g", price: "56 RON", image: traditionImages[10] },
            { id: 11, name: "GOLONKA WIEPRZOWA Z FASOLĄ/PLASTRAMI ZIEMNIAKÓW", desc: "700g", price: "58 RON", image: traditionImages[11] },
            { id: 12, name: "POTRAWKA Z KURCZAKA Z GRZYBAMI I MAMALIGĄ", desc: "350g", price: "35 RON", image: traditionImages[12] },
            { id: 13, name: "ŻEBERKA WIEPRZOWE Z KOTŁA", desc: "300g", price: "36 RON", image: traditionImages[13] },
            { id: 14, name: "SZNYCEL WIEPRZOWY", desc: "200g", price: "25 RON", image: traditionImages[14] },
            { id: 15, name: "SZNYCEL Z PIERSI KURCZAKA", desc: "200g", price: "25 RON", image: traditionImages[15] },
            { id: 16, name: "WĄTRÓBKA Z CZOSNKIEM I MAMALIGĄ", desc: "300g", price: "28 RON", image: traditionImages[16] },
            { id: 17, name: "GRZYBY PRAWDZIWKI SMAŻONE", desc: "250g", price: "40 RON", image: traditionImages[17] },
            { id: 18, name: "GRZYBY PRAWDZIWKI ZE ŚMIETANĄ", desc: "350g", price: "50 RON", image: traditionImages[18] },
            { id: 19, name: "FASOLA Z KIEŁBASĄ", desc: "350g", price: "32 RON", image: traditionImages[19] },
            { id: 20, name: "MAMALIGA Z SEREM I ŚMIETANĄ", desc: "400g", price: "20 RON", image: traditionImages[20] }
        ],
        salat: [
            { id: 1, name: "SAŁATKA Z TUŃCZYKIEM", desc: "Sałata zielona, pomidory, cebula, tuńczyk, papryka, cytryna, kukurydza, majonez 300g", price: "25 RON", image: salateImages[1] },
            { id: 2, name: "SAŁATKA Z KURCZAKIEM", desc: "Sałata zielona, pomidory, cebula, ogórki, oliwki, jajko, szynka, telemea 300g", price: "25 RON", image: salateImages[2] },
            { id: 3, name: "SAŁATKA BUŁGARSKA", desc: "300g", price: "22 RON", image: salateImages[3] },
            { id: 4, name: "SAŁATKA Z FASOLI Z CEBULĄ", desc: "150g", price: "14 RON", image: salateImages[4] },
            { id: 5, name: "SAŁATKA Z POMIDORÓW Z SEREM TELEMEA", desc: "150g", price: "12 RON", image: salateImages[5] },
            { id: 6, name: "SAŁATKA Z BURAKÓW Z CHRZANEM", desc: "200g", price: "10 RON", image: salateImages[6] },
            { id: 7, name: "SAŁATKA MIESZANA", desc: "Kapusta, pomidory, ogórki, cebula 150g", price: "9 RON", image: salateImages[7] },
            { id: 8, name: "SAŁATKA Z KAPUSTY", desc: "150g", price: "8 RON", image: salateImages[8] },
            { id: 9, name: "SAŁATKA Z POMIDORÓW", desc: "200g", price: "8 RON", image: salateImages[9] },
            { id: 10, name: "SAŁATKA Z POMIDORÓW I OGÓRKÓW", desc: "200g", price: "9 RON", image: salateImages[10] },
            { id: 11, name: "SAŁATKA Z MARYNOWANYCH WARZYW", desc: "200g", price: "9 RON", image: salateImages[11] }
        ],
        dessert: [
            { id: 1, name: "PAPANASI ZE ŚMIETANĄ I DŻEMEM", desc: "Tradycyjny rumuński deser 200g", price: "32 RON", image: dessertImages[1] },
            { id: 2, name: "NALEŚNIKI Z SEREM I ŚMIETANĄ", desc: "200g", price: "26 RON", image: dessertImages[2] },
            { id: 3, name: "CHIROSTE Z SEREM SŁODKIM", desc: "Tradycyjne rumunskie ciasto 200g", price: "23 RON", image: dessertImages[3] },
            { id: 4, name: "NALEŚNIKI Z DŻEMEM", desc: "200g", price: "19 RON", image: dessertImages[4] },
            { id: 5, name: "NALEŚNIKI Z CZEKOLADĄ", desc: "200g", price: "19 RON", image: dessertImages[5] },
            { id: 6, name: "KNEDLE ZE ŚLIWKAMI", desc: "200g", price: "20 RON", image: dessertImages[6] },
            { id: 7, name: "TOCINEI ZE ŚMIETANĄ", desc: "Tradycyjne danie rumuńskie 200g", price: "25 RON", image: dessertImages[7] }
        ],
        drinks: {
            soft: [
                { name: "COCA-COLA", desc: "250ml", price: "8 RON" },
                { name: "COCA-COLA", desc: "500ml", price: "10 RON" },
                { name: "COCA-COLA ZERO", desc: "500ml", price: "10 RON" },
                { name: "FANTA", desc: "250ml", price: "8 RON" },
                { name: "FANTA", desc: "500ml", price: "10 RON" },
                { name: "SPRITE", desc: "500ml", price: "10 RON" },
                { name: "CAPPY NEKTAR", desc: "250ml", price: "10 RON" },
                { name: "CAPPY PULPY", desc: "330ml", price: "9 RON" },
                { name: "FUZETEA", desc: "500ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "250ml", price: "8 RON" },
                { name: "SCHWEPPES", desc: "500ml", price: "10 RON" },
                { name: "ALOE VERA", desc: "500ml", price: "10 RON" },
                { name: "REDBULL", desc: "500ml", price: "12 RON" },
                { name: "TIGER ENERGY", desc: "500ml", price: "7 RON" },
                { name: "BURN", desc: "500ml", price: "10 RON" },
                { name: "WODA MINERALNA", desc: "500ml", price: "8 RON" },
                { name: "WODA NIEGAZOWANA", desc: "500ml", price: "8 RON" },
                { name: "VITAMIN AQUA", desc: "500ml", price: "12 RON" },
                { name: "WODA NIEGAZOWANA", desc: "750ml", price: "10 RON" },
                { name: "WODA MINERALNA", desc: "750ml", price: "10 RON" },
                { name: "LEMONIADA Z MIĘTĄ", desc: "500ml", price: "14 RON" }
            ],
            hot: [
                { name: "ESPRESSO", desc: "", price: "7 RON" },
                { name: "CAPPUCCINO", desc: "", price: "9 RON" },
                { name: "GORĄCA CZEKOLADA", desc: "", price: "8 RON" },
                { name: "HERBATA ZIOŁOWA", desc: "", price: "8 RON" }
            ],
            wines: [
                { name: "SAUVIGNON BLANC", desc: "750ml", price: "65 RON" },
                { name: "RARA NEAGRA", desc: "750ml", price: "65 RON" },
                { name: "RÓŻOWE", desc: "750ml", price: "65 RON" },
                { name: "WINO DOMOWE - BIAŁE", desc: "200ml", price: "10 RON" },
                { name: "WINO DOMOWE - CZERWONE", desc: "200ml", price: "10 RON" },
                { name: "WINO DOMOWE - RÓŻOWE", desc: "200ml", price: "10 RON" }
            ],
            spirits: [
                { name: "PALINKA", desc: "100ml", price: "12 RON" },
                { name: "AFINATA", desc: "Nalewka jagodowa 100ml", price: "14 RON" },
                { name: "VISINATA", desc: "Nalewka wiśniowa 100ml", price: "14 RON" },
                { name: "STALINSKAYA", desc: "Wódka 100ml", price: "15 RON" },
                { name: "FINLANDIA", desc: "Wódka 100ml", price: "16 RON" },
                { name: "ABSOLUT", desc: "Wódka 100ml", price: "18 RON" },
                { name: "VORONA", desc: "Wódka 100ml", price: "11 RON" },
                { name: "STEFAN CEL MARE", desc: "Wódka 100ml", price: "18 RON" },
                { name: "ALEXANDER", desc: "Wódka 100ml", price: "15 RON" },
                { name: "VORONSKAYA", desc: "Wódka 100ml", price: "15 RON" },
                { name: "CAVA D'ORO", desc: "Koniak 100ml", price: "12 RON" },
                { name: "UNIREA", desc: "Koniak 100ml", price: "10 RON" },
                { name: "ALEXANDRION 5*", desc: "Koniak 100ml", price: "15 RON" },
                { name: "METAXA 5*", desc: "Koniak 100ml", price: "20 RON" },
                { name: "JIDVEI VS", desc: "100ml", price: "20 RON" },
                { name: "JIDVEI VSOP", desc: "100ml", price: "25 RON" },
                { name: "J&B", desc: "Whisky 100ml", price: "18 RON" },
                { name: "JACK DANIEL'S", desc: "Whisky 100ml", price: "22 RON" },
                { name: "WEMBLEY", desc: "Gin 100ml", price: "10 RON" }
            ],
            beers: [
                { name: "BERGENBIER TWIST", desc: "330ml", price: "9 RON" },
                { name: "BERGENBIER", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER BEZALKOHOLOWE", desc: "500ml", price: "9 RON" },
                { name: "BERGENBIER KUFEL", desc: "400ml", price: "8 RON" },
                { name: "BERGENBIER FRESH GRAPEFRUIT PUSZKA", desc: "500ml", price: "9 RON" },
                { name: "PIWO DOMOWE KUFEL", desc: "400ml", price: "8 RON" },
                { name: "STAROPRAMEN TWIST", desc: "330ml", price: "10 RON" },
                { name: "STAROPRAMEN", desc: "500ml", price: "10 RON" },
                { name: "STAROPRAMEN BEZALKOHOLOWE PUSZKA", desc: "330ml", price: "10 RON" },
                { name: "BEKS", desc: "330ml", price: "10 RON" },
                { name: "BEKS", desc: "500ml", price: "12 RON" },
                { name: "BEKS PUSZKA", desc: "500ml", price: "10 RON" },
                { name: "STELLA ARTOIS", desc: "330ml", price: "12 RON" },
                { name: "STELLA ARTOIS", desc: "500ml", price: "14 RON" },
                { name: "STELLA ARTOIS PUSZKA", desc: "500ml", price: "12 RON" },
                { name: "MADRI BUTELKA", desc: "500ml", price: "10 RON" },
                { name: "MADRI PUSZKA", desc: "500ml", price: "10 RON" },
                { name: "CARAIMAN BUTELKA", desc: "500ml", price: "10 RON" },
                { name: "PIWO DOMOWE KUFEL", desc: "400ml", price: "8 RON" }
            ]
        }
    },
    ua: {
        breakfast: [
            { id: 1, name: "СНІДАНОК БАБУСІ", desc: "Два яйця-глазуні, пастрама, смажена картопля, бринза телемя, помідори 350г", price: "26 RON", image: breakfastImages[1] },
            { id: 2, name: "СМАЖЕНИЙ СИР", desc: "Панірований 150г", price: "19 RON", image: breakfastImages[2] },
            { id: 3, name: "ОМЛЕТ", desc: "З шинкою та сиром 200г", price: "18 RON", image: breakfastImages[3] },
            { id: 4, name: "ОМЛЕТ", desc: "З сиром 150г", price: "15 RON", image: breakfastImages[4] },
            { id: 5, name: "ЯЄЧНЯ-ГЛАЗУНЬЯ", desc: "2 штуки", price: "6 RON", image: breakfastImages[5] },
            { id: 6, name: "БРИНЗА ТЕЛЕМЯ", desc: "Або бурдуф 100г", price: "10 RON", image: breakfastImages[6] },
            { id: 7, name: "ДЖЕМ", desc: "100г", price: "6 RON", image: breakfastImages[7] },
            { id: 8, name: "МАСЛО", desc: "50г", price: "8 RON", image: breakfastImages[8] },
            { id: 9, name: "ЙОГУРТ", desc: "200г", price: "8 RON", image: breakfastImages[9] }
        ],
        soup: {
            soup: [
                { id: 1, name: "ЧОРБА РАДЕУЦЯНСЬКА", desc: "70г/430 мл", price: "20 RON", image: soupImages[1] },
                { id: 2, name: "ЧОРБА З РУБЦЯ", desc: "70г/430 мл", price: "20 RON", image: soupImages[2] },
                { id: 3, name: "ЧОРБА З ЯЛОВИЧИНИ", desc: "40г/460г", price: "22 RON", image: soupImages[3] },
                { id: 4, name: "КУРЯЧИЙ БУЛ'ЙОН", desc: "З локшиною 60г/430 мл", price: "19 RON", image: soupImages[4] },
                { id: 5, name: "ЧОРБА З ФРИКАДЕЛЬКАМИ", desc: "60г/430 мл", price: "19 RON", image: soupImages[5] },
                { id: 6, name: "КВАСОЛЕВИЙ СУП", desc: "З копченостями 80г/420 мл", price: "20 RON", image: soupImages[6] },
                { id: 7, name: "СОЛЯНКА", desc: "Молдавська чорба 100г/400 мл", price: "20 RON", image: soupImages[7] },
                { id: 8, name: "ЧОРБА БАБУСІ", desc: "Овочевий суп 100г/400 мл", price: "17 RON", image: soupImages[8] },
                { id: 9, name: "КАРТОПЛЯНИЙ СУП З КОПЧЕНОСТЯМИ", desc: "60г/440 мл", price: "21 RON", image: soupImages[9] },
                { id: 10, name: "КАРТОПЛЯНИЙ СУП З БІЛИМИ ГРИБАМИ", desc: "40г/460 мл", price: "22 RON", image: soupImages[10] }
            ],
            extra: [
                { id: 1, name: "ХЛІБ", desc: "100г", price: "3 RON" },
                { id: 2, name: "СМЕТАНА", desc: "50г", price: "5 RON" },
                { id: 3, name: "ГОСТРИЙ ПЕРЕЦЬ", desc: "1 шт", price: "1.5 RON" },
                { id: 4, name: "ЛИМОН", desc: "", price: "1 RON" }
            ],
            onthego: [
                { id: 1, name: "УПАКОВКА", desc: "", price: "1 RON" }
            ]
        },
        fastfood: [
            { id: 1, name: "БУРГЕР З ЯЛОВИЧИНИ АНГУС", desc: "Зі смаженою картоплею та соусом 450г", price: "38 RON", image: fastfoodImages[1] },
            { id: 2, name: "ХРУСТКА КУРЯЧА ГРУДКА", desc: "Зі смаженою картоплею та соусом 450г", price: "40 RON", image: fastfoodImages[2] },
            { id: 3, name: "КРИЛЬЦЯ", desc: "Гострі/Негострі, зі смаженою картоплею та соусом 450г", price: "40 RON", image: fastfoodImages[3] },
            { id: 4, name: "ШАУРМА НА ТАРІЛЦІ", desc: "450г", price: "30 RON", image: fastfoodImages[4] }
        ],
        grill: {
            grill: [
                { id: 1, name: "ФОРЕЛЬ", desc: "На грилі / смажена 100г", price: "15 RON", image: grillImages.grill[1] },
                { id: 2, name: "КОВБАСКИ НА ГРИЛІ", desc: "150г", price: "18 RON", image: grillImages.grill[2] },
                { id: 3, name: "ДОМАШНІ КОВБАСИ", desc: "150г", price: "18 RON", image: grillImages.grill[3] },
                { id: 4, name: "СВИНЯЧА ШИЯ", desc: "200г", price: "28 RON", image: grillImages.grill[4] },
                { id: 5, name: "КУРЯЧА ГРУДКА НА ГРИЛІ", desc: "200г", price: "24 RON", image: grillImages.grill[5] },
                { id: 6, name: "СВИНЯЧА ВІДБИВНА", desc: "200г", price: "26 RON", image: grillImages.grill[6] },
                { id: 7, name: "КУРЯЧЕ СТЕГНО БЕЗ КІСТКИ", desc: "200г", price: "24 RON", image: grillImages.grill[7] },
                { id: 8, name: "МІЧІ", desc: "50г/шт", price: "6 RON", image: grillImages.grill[8] }
            ],
            sides: [
                { id: 1, name: "СКІРЖЕЛІ", desc: "З часником або цибулею 200г", price: "18 RON", image: grillImages.sides[1] },
                { id: 2, name: "СМАЖЕНА КАРТОПЛЯ", desc: "200г", price: "12 RON", image: grillImages.sides[2] },
                { id: 3, name: "РИСОВИЙ ПЛОВ", desc: "200г", price: "10 RON", image: grillImages.sides[3] },
                { id: 4, name: "ВІДВАРНА КАРТОПЛЯ", desc: "200г", price: "10 RON", image: grillImages.sides[4] },
                { id: 5, name: "ЗОЛОТИСТА КАРТОПЛЯ", desc: "200г", price: "15 RON", image: grillImages.sides[5] },
                { id: 6, name: "ПЕЧЕРИЦІ ШАМПІНЬЙОНИ", desc: "На сковороді 200г", price: "17 RON", image: grillImages.sides[6] },
                { id: 7, name: "МАМАЛИГА", desc: "200г", price: "8 RON", image: grillImages.sides[7] },
                { id: 8, name: "КВАСОЛЯ ТУШКОВАНА", desc: "250г", price: "15 RON", image: grillImages.sides[8] },
                { id: 9, name: "КВАСОЛЕВА ПАСТА", desc: "250г", price: "15 RON", image: grillImages.sides[9] }
            ],
            sauces: [
                { id: 1, name: "ЧАСНИКОВИЙ СОУС", desc: "50г", price: "5 RON", image: grillImages.sauces[1] },
                { id: 2, name: "СОУС ДЗАДЗИКИ", desc: "50г", price: "5 RON", image: grillImages.sauces[2] },
                { id: 3, name: "ГОСТРИЙ ЧЕРВОНИЙ СОУС КУХАРЯ", desc: "50г", price: "5 RON", image: grillImages.sauces[3] },
                { id: 4, name: "СОЛОДКИЙ ЧЕРВОНИЙ СОУС КУХАРЯ", desc: "50г", price: "5 RON", image: grillImages.sauces[4] },
                { id: 5, name: "КЕТЧУП СОЛОДКИЙ", desc: "50г", price: "4 RON", image: grillImages.sauces[5] },
                { id: 6, name: "ГІРЧИЦЯ", desc: "50г", price: "4 RON", image: grillImages.sauces[6] }
            ]
        },
        traditional: [
            { id: 1, name: "ПЛАТО КИМПУЛУНГУ", desc: "Поросяча гомілка, ковбаски, свинячі ребра, мічі, бринза телемя, бринза бурдуф, золотиста картопля, соління, буряк з хроном, часниковий соус — 2 персони", price: "120 RON", image: traditionImages[1] },
            { id: 2, name: "ПЛАТО МАНДРІВНИКА", desc: "Ковбаски на грилі, свиняча шия, куряча грудка, мічі, бринза телемя, скіржелі, соління, часниковий соус 550г", price: "46 RON", image: traditionImages[2] },
            { id: 3, name: "ПЛАТО БУКОВИНСЬКЕ", desc: "Домашні ковбаси, ребра, кайзер, скіржелі, бринза бурдуф, соління, часниковий соус 550г", price: "46 RON", image: traditionImages[3] },
            { id: 4, name: "ПЛАТО З КУРКИ", desc: "Куряча грудка, гострі ніжки, хруст, смажений сир, смажена картопля 550г", price: "45 RON", image: traditionImages[4] },
            { id: 5, name: "БУКОВИНСЬКЕ ВЕГЕТАРІАНСЬКЕ ПЛАТО", desc: "Квасолева паста, закуска, вегетаріанський шніцель, котлета, соління, підсмажений хліб 500г", price: "30 RON", image: traditionImages[5] },
            { id: 6, name: "ПЛАТО ЗІ СКІРЖЕЛІ", desc: "Картопля (скіржелі в сезон / скибочки), бринза бурдуф, сало, смажене ребро, часниковий соус, соління 700г", price: "35 RON", image: traditionImages[6] },
            { id: 7, name: "ТОЧІТУРА ДОМАШНЯ", desc: "Копчена свиняча гомілка, ковбаси, кайзер, бринза бурдуф, яйце, мамалига, соління 500г", price: "49 RON", image: traditionImages[7] },
            { id: 8, name: "ТОЧІТУРА БУКОВИНСЬКА З КУРКИ", desc: "Куряче стегно без кістки, куряча печінка, бринза бурдуф, яйце, мамалига 500г", price: "45 RON", image: traditionImages[8] },
            { id: 9, name: "БУЛЗ БУКОВИНСЬКИЙ", desc: "300г", price: "39 RON", image: traditionImages[9] },
            { id: 10, name: "ПОРОСЯЧА ГОМІЛКА З МАМАЛИГОЮ", desc: "700г", price: "56 RON", image: traditionImages[10] },
            { id: 11, name: "ПОРОСЯЧА ГОМІЛКА З КВАСОЛЕЮ/СМАЖЕНОЮ КАРТОПЛЕЮ", desc: "700г", price: "58 RON", image: traditionImages[11] },
            { id: 12, name: "ЧУЛЯМА З КУРКИ З ГРИБАМИ ТА МАМАЛИГОЮ", desc: "350г", price: "35 RON", image: traditionImages[12] },
            { id: 13, name: "СВИНЯЧІ РЕБРА В КАЗАНІ", desc: "300г", price: "36 RON", image: traditionImages[13] },
            { id: 14, name: "СВИНЯЧА ВІДБИВНА", desc: "200г", price: "25 RON", image: traditionImages[14] },
            { id: 15, name: "ВІДБИВНА З КУРЯЧОЇ ГРУДКИ", desc: "200г", price: "25 RON", image: traditionImages[15] },
            { id: 16, name: "ПЕЧІНКА З ЧАСНИКОМ ТА МАМАЛИГОЮ", desc: "300г", price: "28 RON", image: traditionImages[16] },
            { id: 17, name: "БІЛІ ГРИБИ СОТЕ", desc: "250г", price: "40 RON", image: traditionImages[17] },
            { id: 18, name: "БІЛІ ГРИБИ СОТЕ ЗІ СМЕТАНОЮ", desc: "350г", price: "50 RON", image: traditionImages[18] },
            { id: 19, name: "КВАСОЛЯ З КОВБАСКАМИ", desc: "350г", price: "32 RON", image: traditionImages[19] },
            { id: 20, name: "МАМАЛИГА З БРИНЗОЮ ТА СМЕТАНОЮ", desc: "400г", price: "20 RON", image: traditionImages[20] }
        ],
        salat: [
            { id: 1, name: "САЛАТ З ТУНЦЕМ", desc: "Зелений салат, помідори, цибуля, тунець, перець, лимон, кукурудза, майонез 300 г", price: "25 RON", image: salateImages[1] },
            { id: 2, name: "САЛАТ З КУРКОЮ", desc: "Зелений салат, помідори, цибуля, огірки, оливки, яйце, шинка, бринза 300 г", price: "25 RON", image: salateImages[2] },
            { id: 3, name: "БОЛГАРСЬКИЙ САЛАТ", desc: "300 г", price: "22 RON", image: salateImages[3] },
            { id: 4, name: "САЛАТ З КВАСОЛІ З ЦИБУЛЕЮ", desc: "150 г", price: "14 RON", image: salateImages[4] },
            { id: 5, name: "САЛАТ З ПОМІДОРІВ ТА БРИНЗИ", desc: "150 г", price: "12 RON", image: salateImages[5] },
            { id: 6, name: "САЛАТ З БУРЯКА З ХРОНОМ", desc: "200 г", price: "10 RON", image: salateImages[6] },
            { id: 7, name: "АСОРТІ САЛАТ", desc: "Капуста, помідори, огірки, цибуля 150 г", price: "9 RON", image: salateImages[7] },
            { id: 8, name: "САЛАТ З КАПУСТИ", desc: "150 г", price: "8 RON", image: salateImages[8] },
            { id: 9, name: "САЛАТ З ПОМІДОРІВ", desc: "200 г", price: "8 RON", image: salateImages[9] },
            { id: 10, name: "САЛАТ З ПОМІДОРІВ ТА ОГІРКІВ", desc: "200 г", price: "9 RON", image: salateImages[10] },
            { id: 11, name: "САЛАТ ІЗ СОЛІНЬ", desc: "200 г", price: "9 RON", image: salateImages[11] }
        ],
        dessert: [
            { id: 1, name: "ПАПАНАШІ ЗІ СМЕТАНОЮ ТА ВАРЕННЯМ", desc: "200г", price: "32 RON", image: dessertImages[1] },
            { id: 2, name: "МЛИНЦІ З СИРОМ ТА СМЕТАНОЮ", desc: "200г", price: "26 RON", image: dessertImages[2] },
            { id: 3, name: "ХІРОСТЕ З СОЛОДКИМ СИРОМ", desc: "200г", price: "23 RON", image: dessertImages[3] },
            { id: 4, name: "МЛИНЦІ З ВАРЕННЯМ", desc: "200г", price: "19 RON", image: dessertImages[4] },
            { id: 5, name: "МЛИНЦІ З ШОКОЛАДОМ", desc: "200г", price: "19 RON", image: dessertImages[5] },
            { id: 6, name: "ГАЛУШКИ ЗІ СЛИВАМИ", desc: "200г", price: "20 RON", image: dessertImages[6] },
            { id: 7, name: "ТОЧІНЕЙ ЗІ СМЕТАНОЮ", desc: "200г", price: "25 RON", image: dessertImages[7] }
        ],
        drinks: {
            soft: [
                { name: "COCA-COLA", desc: "250мл", price: "8 RON" },
                { name: "COCA-COLA", desc: "500мл", price: "10 RON" },
                { name: "COCA-COLA ZERO", desc: "500мл", price: "10 RON" },
                { name: "FANTA", desc: "250мл", price: "8 RON" },
                { name: "FANTA", desc: "500мл", price: "10 RON" },
                { name: "SPRITE", desc: "500мл", price: "10 RON" },
                { name: "CAPPY NECTAR", desc: "250мл", price: "10 RON" },
                { name: "CAPPY PULPY", desc: "330мл", price: "9 RON" },
                { name: "FUZETEA", desc: "500мл", price: "8 RON" },
                { name: "SCHWEPPES", desc: "250мл", price: "8 RON" },
                { name: "SCHWEPPES", desc: "500мл", price: "10 RON" },
                { name: "ALOE VERA", desc: "500мл", price: "10 RON" },
                { name: "REDBULL", desc: "500мл", price: "12 RON" },
                { name: "TIGER ENERGY", desc: "500мл", price: "7 RON" },
                { name: "BURN", desc: "500мл", price: "10 RON" },
                { name: "ВОДА МІНЕРАЛЬНА", desc: "500мл", price: "8 RON" },
                { name: "ВОДА НЕГАЗОВАНА", desc: "500мл", price: "8 RON" },
                { name: "VITAMIN AQUA", desc: "500мл", price: "12 RON" },
                { name: "ВОДА НЕГАЗОВАНА", desc: "750мл", price: "10 RON" },
                { name: "ВОДА МІНЕРАЛЬНА", desc: "750мл", price: "10 RON" },
                { name: "ЛИМОНАД З М'ЯТОЮ", desc: "500мл", price: "14 RON" }
            ],
            hot: [
                { name: "ЕСПРЕСО", desc: "", price: "7 RON" },
                { name: "КАПУЧИНО", desc: "", price: "9 RON" },
                { name: "ГАРЯЧИЙ ШОКОЛАД", desc: "", price: "8 RON" },
                { name: "ТРАВ'ЯНИЙ ЧАЙ", desc: "", price: "8 RON" }
            ],
            wines: [
                { name: "SAUVIGNON BLANC", desc: "750мл", price: "65 RON" },
                { name: "RARA NEAGRĂ", desc: "750мл", price: "65 RON" },
                { name: "ROZE", desc: "750мл", price: "65 RON" },
                { name: "ВИНО ЗАКЛАДУ - БІЛЕ", desc: "200мл", price: "10 RON" },
                { name: "ВИНО ЗАКЛАДУ - ЧЕРВОНЕ", desc: "200мл", price: "10 RON" },
                { name: "ВИНО ЗАКЛАДУ - РОЖЕВЕ", desc: "200мл", price: "10 RON" }
            ],
            spirits: [
                { name: "ПАЛІНКА", desc: "100мл", price: "12 RON" },
                { name: "АФІНЯТА", desc: "100мл", price: "14 RON" },
                { name: "ВИШНЯТА", desc: "100мл", price: "14 RON" },
                { name: "STALINSKAYA", desc: " Горілка 100мл", price: "15 RON" },
                { name: "FINLANDIA", desc: " Горілка 100мл", price: "16 RON" },
                { name: "ABSOLUT", desc: " Горілка 100мл", price: "18 RON" },
                { name: "VORONA", desc: " Горілка 100мл", price: "11 RON" },
                { name: "STEFAN CEL MARE", desc: " Горілка 100мл", price: "18 RON" },
                { name: "ALEXANDER", desc: " Горілка 100мл", price: "15 RON" },
                { name: "VORONSKAYA", desc: " Горілка 100мл", price: "15 RON" },
                { name: "CAVA D'ORO", desc: " Коньяк 100мл", price: "12 RON" },
                { name: "UNIREA", desc: " Коньяк 100мл", price: "10 RON" },
                { name: "ALEXANDRION 5*", desc: " Коньяк 100мл", price: "15 RON" },
                { name: "METAXA 5*", desc: " Коньяк 100мл", price: "20 RON" },
                { name: "JIDVEI VS", desc: " 100мл", price: "20 RON" },
                { name: "JIDVEI VSOP", desc: " 100мл", price: "25 RON" },
                { name: "J&B", desc: " Віскі 100мл", price: "18 RON" },
                { name: "JACK DANIEL'S", desc: " Віскі 100мл", price: "22 RON" },
                { name: "WEMBLEY", desc: " Джин 100мл", price: "10 RON" }
            ],
            beers: [
                { name: "BERGENBIER TWIST", desc: "330мл", price: "9 RON" },
                { name: "BERGENBIER", desc: "500мл", price: "9 RON" },
                { name: "BERGENBIER БЕЗ АЛКОГОЛЮ", desc: "500мл", price: "9 RON" },
                { name: "BERGENBIER У КУХЛІ", desc: "400мл", price: "8 RON" },
                { name: "BERGENBIER FRESH GRAPEFRUIT В БАНЦІ", desc: "500мл", price: "9 RON" },
                { name: "ПИВО ЗАКЛАДУ КУХОЛЬ 400 мл", desc: "", price: "8 RON" },
                { name: "STAROPRAMEN TWIST", desc: "330мл", price: "10 RON" },
                { name: "STAROPRAMEN", desc: "500мл", price: "10 RON" },
                { name: "STAROPRAMEN БЕЗ АЛКОГОЛЮ БАНКА", desc: "330мл", price: "10 RON" },
                { name: "BEKS", desc: "330мл", price: "10 RON" },
                { name: "BEKS", desc: "500мл", price: "12 RON" },
                { name: "BEKS БАНКА", desc: "500мл", price: "10 RON" },
                { name: "STELA ARTOIS", desc: "330мл", price: "12 RON" },
                { name: "STELA ARTOIS", desc: "500мл", price: "14 RON" },
                { name: "STELA ARTOIS БАНКА", desc: "500мл", price: "12 RON" },
                { name: "MADRI ПЛЯШКА", desc: "500мл", price: "10 RON" },
                { name: "MADRI БАНКА", desc: "500мл", price: "10 RON" },
                { name: "CARAIMAN ПЛЯШКА", desc: "500мл", price: "10 RON" },
                { name: "ПИВО ЗАКЛАДУ КУХОЛЬ", desc: "400мл", price: "8 RON" },
                { name: "BERE FRESH БЕЗ АЛКОГОЛЮ", desc: "330мл", price: "9 RON" }
            ]
        }
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

    // Track menu category selection in Google Analytics
    if (typeof gtag !== 'undefined') {
        gtag('event', 'menu_category_view', {
            'event_category': 'menu',
            'event_label': getRomanianAnalyticsLabel(category),
            'menu_category': category
        });
    }
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

// Subcategory labels for menu categories (moved outside function for better performance)
const subcategoryLabels = {
    ro: {
        soft: 'Răcoritoare',
        hot: 'Băuturi Calde',
        wines: 'Vinuri',
        spirits: 'Spirtoase',
        beers: 'Bere',
        soup: 'Ciorbe',
        extra: 'Extra Savoare',
        onthego: 'La Pachet',
        grill: 'Grill',
        sides: 'Garnituri',
        sauces: 'Sosuri'
    },
    en: {
        soft: 'Soft Drinks',
        hot: 'Hot Drinks',
        wines: 'Wines',
        spirits: 'Spirits',
        beers: 'Beer',
        soup: 'Soups',
        extra: 'Extra Flavor',
        onthego: 'To Go',
        grill: 'Grill',
        sides: 'Side Dishes',
        sauces: 'Sauces'
    },
    fr: {
        soft: 'Boissons Rafraîchissantes',
        hot: 'Boissons Chaudes',
        wines: 'Vins',
        spirits: 'Spiritueux',
        beers: 'Bière',
        soup: 'Soupes',
        extra: 'Supplément Saveur',
        onthego: 'À Emporter',
        grill: 'Grill',
        sides: 'Accompagnements',
        sauces: 'Sauces'
    },
    pl: {
        soft: 'Napoje Chłodzące',
        hot: 'Napoje Gorące',
        wines: 'Wina',
        spirits: 'Alkohole Mocne',
        beers: 'Piwo',
        soup: 'Zupy',
        extra: 'Dodatkowy Smak',
        onthego: 'Na Wynos',
        grill: 'Grill',
        sides: 'Dodatki',
        sauces: 'Sosy'
    },
    ua: {
        soft: 'Безалкогольні напої',
        hot: 'Гарячі напої',
        wines: 'Вино',
        spirits: 'Міцні напої',
        beers: 'Пиво',
        soup: 'Супи',
        extra: 'Додатковий смак',
        onthego: 'На винос',
        grill: 'Гриль',
        sides: 'Гарніри',
        sauces: 'Соуси'
    }
};

/**
 * Creates HTML for a single menu item
 * @param {Object} item - Menu item data
 * @param {string} roName - Romanian name for the item
 * @returns {string} HTML string for the menu item
 */
function createMenuItemHTML(item, roName) {
    const translatedName = item && item.name ? item.name : roName;
    const showBoth = currentLang !== 'ro' && translatedName && translatedName !== roName;
    const nameHtml = showBoth
        ? `<h3>${translatedName} <span class="menu-name-ro">(${roName})</span></h3>`
        : `<h3>${roName}</h3>`;
    const imageHtml = item.image ? `<img src="${item.image}" alt="${item.name || roName}" class="menu-item-image">` : '';

    return `
        <div class="menu-item">
            ${imageHtml}
            <div class="menu-item-info">
                ${nameHtml}
                <p>${item.desc || ''}</p>
            </div>
            <span class="menu-price">${item.price || ''}</span>
        </div>
    `;
}

/**
 * Renders an array of menu items
 * @param {Array} itemsArray - Array of menu items
 * @param {Array} roArray - Romanian array for fallback names
 * @returns {string} HTML string for all menu items
 */
function renderItemsArray(itemsArray, roArray) {
    return (itemsArray || []).map((item, index) => {
        const roName = (Array.isArray(roArray) && roArray[index] && roArray[index].name)
            ? roArray[index].name
            : (item.name || '');
        return createMenuItemHTML(item, roName);
    }).join('');
}

/**
 * Gets subcategory labels for the current language
 * @returns {Object} Object with subcategory labels
 */
function getSubcategoryLabels() {
    return subcategoryLabels[currentLang] || subcategoryLabels['ro'];
}

/**
 * Attaches click handlers to menu item images for lightbox
 * @param {HTMLElement} container - Container element to search for images
 */
function attachImageClickHandlers(container) {
    container.querySelectorAll('.menu-item-image').forEach(img => {
        img.addEventListener('click', () => {
            openLightbox(img.src);
        });
    });
}

// Close lightbox on Escape key using utility function
setupEscapeKeyHandler(closeLightbox);

function renderMenu(category) {
    if (!menuGrid) return;
    menuGrid.style.opacity = '0';
    setTimeout(() => {
        const roItems = (menuTranslations['ro'] && menuTranslations['ro'][category])
            ? menuTranslations['ro'][category]
            : [];
        const langItems = (menuTranslations[currentLang] && menuTranslations[currentLang][category])
            ? menuTranslations[currentLang][category]
            : roItems;

        // If langItems is an array, render as simple list
        if (Array.isArray(langItems)) {
            menuGrid.classList.remove('grouped');
            menuGrid.innerHTML = renderItemsArray(langItems, roItems);
        } else if (langItems && typeof langItems === 'object') {
            // Mark grid as grouped so CSS can stack subcategories
            menuGrid.classList.add('grouped');
            const currentLabels = getSubcategoryLabels();
            let html = '';

            Object.keys(langItems).forEach(subKey => {
                const subItems = langItems[subKey] || [];
                const roSubItems = (roItems && typeof roItems === 'object')
                    ? roItems[subKey] || []
                    : [];
                if (subItems.length === 0) return; // Skip empty categories

                const label = currentLabels[subKey] || subKey;
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
        attachImageClickHandlers(menuGrid);

        menuGrid.style.opacity = '1';
    }, 300);
}

// ============================================
// Helper Functions for HTML Generation
// ============================================

/**
 * Creates a social media link HTML element
 * @param {string} platform - 'facebook' or 'tiktok'
 * @param {string} url - The social media URL
 * @param {string} label - The link label text
 * @param {string} ariaLabel - Optional aria-label attribute
 * @returns {string} HTML string for the social link
 */
function createSocialLink(platform, url, label, ariaLabel = '') {
    const svgPaths = {
        facebook: 'M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z',
        tiktok: 'M16.7 5.1a4.5 4.5 0 0 0 2.8 1.2V9a7.4 7.4 0 0 1-4.3-1.4v6.5a5.7 5.7 0 1 1-5.7-5.7c.4 0 .8 0 1.2.1v2.8a2.8 2.8 0 1 0 2.6 2.8V2h2.4a4.5 4.5 0 0 0 1 3.1z'
    };

    const ariaLabelAttr = ariaLabel ? ` aria-label="${ariaLabel}"` : '';
    const svgPath = svgPaths[platform] || '';

    return `
        <a class="social-link" href="${url}" target="_blank" rel="noreferrer"${ariaLabelAttr}>
            <span class="social-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" role="img" focusable="false">
                    <path d="${svgPath}" />
                </svg>
            </span>
            <span>${label}</span>
        </a>
    `;
}

/**
 * Creates a review card HTML element
 * @param {Object} review - Review data object
 * @param {string} review.textKey - Translation key for review text (data-i18n)
 * @param {string} review.text - Default review text
 * @param {string} review.authorKey - Translation key for author (data-i18n)
 * @param {string} review.author - Default author name
 * @param {string} review.source - Review source (e.g., "Google Maps")
 * @param {number} review.stars - Number of stars (default: 5)
 * @returns {string} HTML string for the review card
 */
function createReviewCard(review) {
    const stars = '★'.repeat(review.stars || 5);
    const textAttr = review.textKey ? ` data-i18n="${review.textKey}"` : '';
    const authorAttr = review.authorKey ? ` data-i18n="${review.authorKey}"` : '';

    return `
        <div class="review-card">
            <div class="review-stars">${stars}</div>
            <p class="review-text"${textAttr}>${review.text}</p>
            <h4 class="review-author"${authorAttr}>${review.author}</h4>
            <span class="review-source">${review.source}</span>
        </div>
    `;
}

/**
 * Creates a feature item HTML element (for services or payments)
 * @param {Object} item - Feature item data
 * @param {string} item.icon - Icon emoji or text
 * @param {string} item.titleKey - Translation key for title (data-i18n)
 * @param {string} item.title - Default title text
 * @param {string} item.descKey - Translation key for description (data-i18n)
 * @param {string} item.desc - Default description text
 * @param {string} item.className - CSS class name ('service-item' or 'payment-item')
 * @returns {string} HTML string for the feature item
 */
function createFeatureItem(item) {
    const titleAttr = item.titleKey ? ` data-i18n="${item.titleKey}"` : '';
    const descAttr = item.descKey ? ` data-i18n="${item.descKey}"` : '';
    const className = item.className || 'service-item';

    return `
        <div class="${className}">
            <span class="${className.replace('-item', '-icon')}">${item.icon}</span>
            <h3${titleAttr}>${item.title}</h3>
            <p${descAttr}>${item.desc}</p>
        </div>
    `;
}

/**
 * Utility function to setup Escape key handler
 * @param {Function} callback - Function to call when Escape is pressed
 */
function setupEscapeKeyHandler(callback) {
    const handler = (e) => {
        if (e.key === 'Escape') {
            callback();
        }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
}

/**
 * Initialize social media links in about section and footer
 */
function initializeSocialLinks() {
    const socialData = {
        facebook: {
            url: 'https://www.facebook.com/p/Popasul-Drumetului-Campulung-Moldovenesc-61556556680444/',
            label: 'Facebook'
        },
        tiktok: {
            url: 'https://www.tiktok.com/@popasul.drumetului',
            label: 'TikTok'
        }
    };

    // About section
    const aboutSocial = document.querySelector('.about-social');
    if (aboutSocial) {
        aboutSocial.innerHTML =
            createSocialLink('facebook', socialData.facebook.url, socialData.facebook.label) +
            createSocialLink('tiktok', socialData.tiktok.url, socialData.tiktok.label);
    }

    // Footer section
    const footerSocial = document.querySelector('.footer-social');
    if (footerSocial) {
        footerSocial.innerHTML =
            createSocialLink('facebook', socialData.facebook.url, socialData.facebook.label, 'Facebook') +
            createSocialLink('tiktok', socialData.tiktok.url, socialData.tiktok.label, 'TikTok');
    }
}

/**
 * Initialize review cards dynamically
 */
function initializeReviewCards() {
    const reviewsData = [
        {
            textKey: 'reviews.r1_text',
            text: '"Foarte bună mâncarea la popasul drumețului 🫶🏼 Fetele foarte amabile și drăguțe ! ❤️"',
            authorKey: 'reviews.r1_author',
            author: 'Georgiana G.',
            source: 'Google Maps',
            stars: 5
        },
        {
            textKey: 'reviews.r2_text',
            text: '"O experiență foarte plăcută! Am mâncat o ciorbă gustoasă, bine condimentată, și un crispy excelent. Servirea a fost rapidă."',
            authorKey: 'reviews.r2_author',
            author: 'Alina P.',
            source: 'Google Maps',
            stars: 5
        },
        {
            textKey: 'reviews.r3_text',
            text: '"Restaurantul este spațios, servirea promptă, mâncare diversificată și preturi decente. Recomand!"',
            authorKey: 'reviews.r3_author',
            author: 'Ionut C.',
            source: 'Google Maps',
            stars: 5
        }
    ];

    const reviewsGrid = document.querySelector('.reviews-grid');
    if (reviewsGrid) {
        reviewsGrid.innerHTML = reviewsData.map(review => createReviewCard(review)).join('');
    }
}

/**
 * Initialize service and payment items dynamically
 */
function initializeFeatureItems() {
    const servicesData = [
        {
            icon: '♿',
            titleKey: 'services.s1_title',
            title: 'Accessible',
            descKey: 'services.s1_desc',
            desc: 'Spațiu adaptat pentru persoane cu mobilitate redusă',
            className: 'service-item'
        },
        {
            icon: '❄️',
            titleKey: 'services.s2_title',
            title: 'Aer condiționat',
            descKey: 'services.s2_desc',
            desc: 'Temperatura ideală în toate anotimpurile',
            className: 'service-item'
        },
        {
            icon: '🅿️',
            titleKey: 'services.s3_title',
            title: 'Parcare',
            descKey: 'services.s3_desc',
            desc: 'Parcare proprie pentru clienți',
            className: 'service-item'
        },
        {
            icon: '📶',
            titleKey: 'services.s4_title',
            title: 'WiFi Gratuit',
            descKey: 'services.s4_desc',
            desc: 'Conexiune internet rapidă și sigură',
            className: 'service-item'
        }
    ];

    const paymentsData = [
        {
            icon: '💵',
            titleKey: 'payment.p3_title',
            title: 'Numerar',
            descKey: 'payment.p3_desc',
            desc: 'Acceptă plata numerar',
            className: 'payment-item'
        },
        {
            icon: '📳',
            titleKey: 'payment.p1_title',
            title: 'Contactless',
            descKey: 'payment.p1_desc',
            desc: 'Plată contactless sigură',
            className: 'payment-item'
        },
        {
            icon: '💳',
            titleKey: 'payment.p2_title',
            title: 'Card',
            descKey: 'payment.p2_desc',
            desc: 'Acceptă cărți Mastercard, Visa',
            className: 'payment-item'
        }
    ];

    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        servicesGrid.innerHTML = servicesData.map(item => createFeatureItem(item)).join('');
    }

    const paymentGrid = document.querySelector('.payment-grid');
    if (paymentGrid) {
        paymentGrid.innerHTML = paymentsData.map(item => createFeatureItem(item)).join('');
    }
}

// Initial menu render on page load
window.addEventListener('load', () => {
    setActiveCategory('breakfast');

    // Initialize social media links
    initializeSocialLinks();

    // Initialize review cards
    initializeReviewCards();

    // Initialize feature items (services and payments)
    initializeFeatureItems();

    // Initialize Google Analytics event tracking
    initializeGATracking();
});

// ============================================
// GOOGLE ANALYTICS EVENT TRACKING
// ============================================

function initializeGATracking() {
    if (typeof gtag === 'undefined') return;

    // Track Phone Call Clicks
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function () {
            const phoneNumber = this.getAttribute('href').replace('tel:', '');
            gtag('event', 'phone_call_click', {
                'event_category': 'contact',
                'event_label': phoneNumber,
                'value': 1
            });
            gtag('event', 'conversion', {
                'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with actual conversion ID
                'event_category': 'lead'
            });
        });
    });

    // Track Email Clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', function () {
            const email = this.getAttribute('href').replace('mailto:', '');
            gtag('event', 'email_click', {
                'event_category': 'contact',
                'event_label': email,
                'value': 1
            });
        });
    });

    // Track Reservation Button Clicks
    document.querySelectorAll('.btn-reserv, [data-i18n="nav.reservations"]').forEach(btn => {
        btn.addEventListener('click', function () {
            gtag('event', 'reservation_click', {
                'event_category': 'engagement',
                'event_label': getRomanianAnalyticsLabel('header_reservation_button'),
                'value': 1
            });
        });
    });

    // Track CTA Button Clicks (Hero Section)
    const menuBtn = document.querySelector('a[href="#menu"].btn-primary');
    if (menuBtn) {
        menuBtn.addEventListener('click', function () {
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': getRomanianAnalyticsLabel('view_menu_hero'),
                'button_location': 'hero'
            });
        });
    }

    const galleryBtn = document.querySelector('a[href="#gallery"].btn-secondary');
    if (galleryBtn) {
        galleryBtn.addEventListener('click', function () {
            gtag('event', 'cta_click', {
                'event_category': 'engagement',
                'event_label': getRomanianAnalyticsLabel('explore_restaurant_hero'),
                'button_location': 'hero'
            });
        });
    }

    // Track Google Review Link Clicks
    document.querySelectorAll('a[href*="google.com/maps"]').forEach(link => {
        link.addEventListener('click', function () {
            const isReview = this.textContent.toLowerCase().includes('recenzie') ||
                this.textContent.toLowerCase().includes('review');
            const labelKey = 'google_maps_' + (isReview ? 'review' : 'view');
            gtag('event', isReview ? 'review_click' : 'map_click', {
                'event_category': 'engagement',
                'event_label': getRomanianAnalyticsLabel(labelKey),
                'value': isReview ? 2 : 1
            });
        });
    });

    // Track Social Media Link Clicks
    document.addEventListener('click', function (e) {
        const socialLink = e.target.closest('a[href*="facebook.com"], a[href*="instagram.com"], a[href*="tiktok.com"], a[href*="youtube.com"]');
        if (socialLink) {
            const platform = socialLink.href.includes('facebook') ? 'facebook' :
                socialLink.href.includes('instagram') ? 'instagram' :
                    socialLink.href.includes('tiktok') ? 'tiktok' : 'youtube';
            gtag('event', 'social_click', {
                'event_category': 'social_media',
                'event_label': platform,
                'link_url': socialLink.href
            });
        }
    });

    // Track External Links (ANPC, SOL, etc.)
    document.querySelectorAll('a[target="_blank"][rel*="noopener"]').forEach(link => {
        link.addEventListener('click', function () {
            const linkText = this.textContent.trim();
            const linkUrl = this.getAttribute('href');
            if (!linkUrl.includes('google.com') && !linkUrl.includes('facebook.com') &&
                !linkUrl.includes('instagram.com')) {
                gtag('event', 'external_link_click', {
                    'event_category': 'outbound',
                    'event_label': getRomanianAnalyticsLabel(linkText || linkUrl),
                    'link_url': linkUrl
                });
            }
        });
    });

    // Track Navigation Menu Clicks
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(link => {
        link.addEventListener('click', function () {
            const section = this.getAttribute('href').replace('#', '');
            gtag('event', 'navigation_click', {
                'event_category': 'navigation',
                'event_label': getRomanianAnalyticsLabel(section),
                'nav_location': 'main_menu'
            });
        });
    });

    // Track Footer Link Clicks
    document.querySelectorAll('.footer-links a').forEach(link => {
        link.addEventListener('click', function () {
            const linkText = this.textContent.trim();
            gtag('event', 'footer_link_click', {
                'event_category': 'navigation',
                'event_label': getRomanianAnalyticsLabel(linkText),
                'nav_location': 'footer'
            });
        });
    });

    // Track Scroll Depth
    let scrollDepth = 0;
    const scrollMilestones = [25, 50, 75, 90, 100];
    let trackedMilestones = new Set();

    window.addEventListener('scroll', function () {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

        scrollMilestones.forEach(milestone => {
            if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                gtag('event', 'scroll_depth', {
                    'event_category': 'engagement',
                    'event_label': milestone + '%',
                    'value': milestone
                });
            }
        });
    });

    // Track Gallery Image Views (Intersection Observer)
    const galleryImages = document.querySelectorAll('.gallery-item img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const imgAlt = entry.target.getAttribute('alt') || 'unknown';
                gtag('event', 'image_view', {
                    'event_category': 'gallery',
                    'event_label': getRomanianAnalyticsLabel(imgAlt),
                    'image_location': 'gallery_section'
                });
                imageObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    galleryImages.forEach(img => imageObserver.observe(img));

    // Track Time on Page (send event after 30 seconds)
    setTimeout(() => {
        gtag('event', 'time_on_page', {
            'event_category': 'engagement',
            'event_label': getRomanianAnalyticsLabel('30_seconds'),
            'value': 30
        });
    }, 30000);

    // Track Contact Section Visibility
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gtag('event', 'contact_section_view', {
                        'event_category': 'engagement',
                        'event_label': getRomanianAnalyticsLabel('contact_section_visible')
                    });
                    contactObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        contactObserver.observe(contactSection);
    }

    // Track Map Interactions (iframe)
    const mapIframe = document.querySelector('.contact-map iframe');
    if (mapIframe) {
        mapIframe.addEventListener('load', function () {
            gtag('event', 'map_load', {
                'event_category': 'engagement',
                'event_label': getRomanianAnalyticsLabel('google_maps_loaded')
            });
        });
    }
}

// ============================================
// GDPR COOKIE CONSENT MANAGEMENT
// ============================================
// Cookie Expiration Policy:
// - Accepted: 12 months (GDPR compliant)
// - Declined: 30 days (re-ask sooner to capture opt-ins)
// ============================================

// Check cookie consent status on page load
document.addEventListener('DOMContentLoaded', function () {
    initCookieConsent();
});

function initCookieConsent() {
    const consentStatus = getCookieConsent();

    // If no consent decision has been made, show the banner
    if (consentStatus === null) {
        setTimeout(() => {
            document.getElementById('cookieConsent').style.display = 'block';
        }, 1000); // Show after 1 second
    } else if (consentStatus === true) {
        // User has accepted cookies, grant consent
        grantConsent();
    }

    // Setup event listeners
    setupCookieEventListeners();
}

function getCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    const consentDate = localStorage.getItem('cookieConsentDate');
    const expirationDate = localStorage.getItem('cookieConsentExpiration');

    // If no consent exists, return null
    if (consent === null || consentDate === null) return null;

    // Check if consent has expired
    if (expirationDate) {
        const now = new Date().getTime();
        const expiration = new Date(expirationDate).getTime();

        if (now > expiration) {
            // Consent has expired, clear it and return null
            clearCookieConsent();
            return null;
        }
    }

    return consent === 'accepted';
}

function setCookieConsent(accepted) {
    const now = new Date();
    const expirationDate = new Date();

    // If accepted: 12 months, if declined: 30 days
    if (accepted) {
        expirationDate.setMonth(expirationDate.getMonth() + 12); // 12 months
    } else {
        expirationDate.setDate(expirationDate.getDate() + 30); // 30 days
    }

    localStorage.setItem('cookieConsent', accepted ? 'accepted' : 'declined');
    localStorage.setItem('cookieConsentDate', now.toISOString());
    localStorage.setItem('cookieConsentExpiration', expirationDate.toISOString());
}

function clearCookieConsent() {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookieConsentDate');
    localStorage.removeItem('cookieConsentExpiration');
    localStorage.removeItem('returning_visitor'); // GDPR: Clear visitor tracking
}

function grantConsent() {
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'granted',
            'ad_storage': 'denied' // Keep ad storage denied
        });

        // Track consent acceptance
        gtag('event', 'cookie_consent', {
            'event_category': 'engagement',
            'event_label': getRomanianAnalyticsLabel('cookies_accepted')
        });

        // Update user properties AFTER consent (GDPR compliant)
        const isReturning = localStorage.getItem('returning_visitor') ? 'returning' : 'new';
        gtag('set', 'user_properties', {
            'visitor_type': isReturning
        });

        // Mark as returning visitor for next time
        localStorage.setItem('returning_visitor', 'true');
    }
}

function revokeConsent() {
    if (typeof gtag !== 'undefined') {
        gtag('consent', 'update', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied'
        });
    }
}

function setupCookieEventListeners() {
    // Accept button
    const acceptBtn = document.getElementById('cookieAccept');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function () {
            setCookieConsent(true);
            grantConsent();
            document.getElementById('cookieConsent').style.display = 'none';

            // Show thank you message (optional)
            showCookieNotification('Mulțumim! Preferințele tale au fost salvate.', 'success');
        });
    }

    // Decline button
    const declineBtn = document.getElementById('cookieDecline');
    if (declineBtn) {
        declineBtn.addEventListener('click', function () {
            setCookieConsent(false);
            revokeConsent();
            document.getElementById('cookieConsent').style.display = 'none';

            showCookieNotification('Preferințele tale au fost salvate. Funcționalitatea analytics nu va fi activată.', 'info');
        });
    }

    // Settings button
    const settingsBtn = document.getElementById('cookieSettings');
    if (settingsBtn) {
        settingsBtn.addEventListener('click', function () {
            document.getElementById('cookieConsent').style.display = 'none';
            document.getElementById('cookieSettingsModal').style.display = 'flex';

            // Set current preferences
            const consent = getCookieConsent();
            const analyticsCheckbox = document.getElementById('analyticsCookies');
            if (analyticsCheckbox) {
                analyticsCheckbox.checked = consent === true;
            }
        });
    }

    // Close settings modal
    const closeSettings = document.getElementById('closeSettings');
    if (closeSettings) {
        closeSettings.addEventListener('click', function () {
            document.getElementById('cookieSettingsModal').style.display = 'none';
        });
    }

    // Save settings button
    const saveSettings = document.getElementById('saveSettings');
    if (saveSettings) {
        saveSettings.addEventListener('click', function () {
            const analyticsEnabled = document.getElementById('analyticsCookies').checked;

            setCookieConsent(analyticsEnabled);

            if (analyticsEnabled) {
                grantConsent();
            } else {
                revokeConsent();
            }

            document.getElementById('cookieSettingsModal').style.display = 'none';
            showCookieNotification('Preferințele tale au fost salvate cu succes!', 'success');
        });
    }

    // Close modal when clicking outside
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

// Show notification toast
function showCookieNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        z-index: 10002;
        max-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add translations for cookie consent
if (typeof translations !== 'undefined') {
    // Romanian
    translations.ro = translations.ro || {};
    Object.assign(translations.ro, {
        "cookies.title": "🍪 Acest site folosește cookies",
        "cookies.message": "Folosim cookies pentru a îmbunătăți experiența ta pe site și pentru a analiza traficul. Continuând să navighezi, ești de acord cu utilizarea cookies.",
        "cookies.learn_more": "Aflați mai multe",
        "cookies.accept": "Accept",
        "cookies.decline": "Refuz",
        "cookies.settings": "Setări",
        "cookies.settings_title": "Setări Cookie",
        "cookies.essential_title": "Cookies Esențiale",
        "cookies.essential_desc": "Necesare pentru funcționarea corectă a site-ului. Nu pot fi dezactivate.",
        "cookies.analytics_title": "Cookies Analitice",
        "cookies.analytics_desc": "Ne ajută să înțelegem cum vizitatorii interactionează cu site-ul nostru (Google Analytics).",
        "cookies.save": "Salvează Preferințele"
    });

    // English
    translations.en = translations.en || {};
    Object.assign(translations.en, {
        "cookies.title": "🍪 This site uses cookies",
        "cookies.message": "We use cookies to improve your experience and analyze traffic. By continuing to browse, you agree to the use of cookies.",
        "cookies.learn_more": "Learn more",
        "cookies.accept": "Accept",
        "cookies.decline": "Decline",
        "cookies.settings": "Settings",
        "cookies.settings_title": "Cookie Settings",
        "cookies.essential_title": "Essential Cookies",
        "cookies.essential_desc": "Required for proper site functionality. Cannot be disabled.",
        "cookies.analytics_title": "Analytics Cookies",
        "cookies.analytics_desc": "Help us understand how visitors interact with our website (Google Analytics).",
        "cookies.save": "Save Preferences"
    });

    // French
    translations.fr = translations.fr || {};
    Object.assign(translations.fr, {
        "cookies.title": "🍪 Ce site utilise des cookies",
        "cookies.message": "Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En continuant à naviguer, vous acceptez l'utilisation de cookies.",
        "cookies.learn_more": "En savoir plus",
        "cookies.accept": "Accepter",
        "cookies.decline": "Refuser",
        "cookies.settings": "Paramètres",
        "cookies.settings_title": "Paramètres des Cookies",
        "cookies.essential_title": "Cookies Essentiels",
        "cookies.essential_desc": "Nécessaires au bon fonctionnement du site. Ne peuvent pas être désactivés.",
        "cookies.analytics_title": "Cookies Analytiques",
        "cookies.analytics_desc": "Nous aident à comprendre comment les visiteurs interagissent avec notre site (Google Analytics).",
        "cookies.save": "Enregistrer les Préférences"
    });

    // Polish
    translations.pl = translations.pl || {};
    Object.assign(translations.pl, {
        "cookies.title": "🍪 Ta strona używa plików cookie",
        "cookies.message": "Używamy plików cookie, aby poprawić Twoje wrażenia i analizować ruch. Kontynuując przeglądanie, zgadzasz się na użycie plików cookie.",
        "cookies.learn_more": "Dowiedz się więcej",
        "cookies.accept": "Akceptuj",
        "cookies.decline": "Odrzuć",
        "cookies.settings": "Ustawienia",
        "cookies.settings_title": "Ustawienia Cookie",
        "cookies.essential_title": "Niezbędne pliki cookie",
        "cookies.essential_desc": "Wymagane do prawidłowego działania witryny. Nie można ich wyłączyć.",
        "cookies.analytics_title": "Pliki cookie analityczne",
        "cookies.analytics_desc": "Pomagają nam zrozumieć, jak odwiedzający wchodzą w interakcję z naszą witryną (Google Analytics).",
        "cookies.save": "Zapisz preferencje"
    });

    // Ukrainian
    translations.ua = translations.ua || {};
    Object.assign(translations.ua, {
        "cookies.title": "🍪 Цей сайт використовує cookies",
        "cookies.message": "Ми використовуємо файли cookie для покращення вашого досвіду та аналізу трафіку. Продовжуючи перегляд, ви погоджуєтеся на використання файлів cookie.",
        "cookies.learn_more": "Дізнатися більше",
        "cookies.accept": "Прийняти",
        "cookies.decline": "Відхилити",
        "cookies.settings": "Налаштування",
        "cookies.settings_title": "Налаштування Cookie",
        "cookies.essential_title": "Основні файли cookie",
        "cookies.essential_desc": "Необхідні для правильної роботи сайту. Не можуть бути вимкнені.",
        "cookies.analytics_title": "Аналітичні файли cookie",
        "cookies.analytics_desc": "Допомагають нам зрозуміти, як відвідувачі взаємодіють з нашим сайтом (Google Analytics).",
        "cookies.save": "Зберегти налаштування"
    });
}
