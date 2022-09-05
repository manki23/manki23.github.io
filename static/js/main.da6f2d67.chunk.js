(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{36:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var o,r,i=t(2),a=t.n(i),c=t(20),s=t.n(c),l=(t(36),t(5)),u=t(4),p=t(3),d=t(16),m=t(1),h=a.a.createContext(),b=function(){var e=Object(i.useContext)(h);if(!e)throw new Error("useWindowWidth must be used within a WindowWidthProvider");return e},f=function(e){var n=Object(i.useState)(0),t=Object(l.a)(n,2),o=t[0],r=t[1],a=Object(i.useMemo)((function(){return[o,r]}),[o]);Object(i.useEffect)((function(){return c(),window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]);var c=function(){var e=window.innerWidth;r(e)};return Object(m.jsx)(h.Provider,Object(d.a)({value:a},e))},g=t(10),x=t(13),j=p.b.div(o||(o=Object(u.a)(["\n  position: fixed;\n  left: 40px;\n  bottom: 0;\n\n  div:hover {\n    color: ",";\n  }\n\n  div {\n    font-size: 23px;\n    margin: 20px 0px;\n    color: ",";\n  }\n\n  div:active {\n    outline: 2px dashed ",";\n    outline-offset: 6px;\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 0.5em;\n    min-height: 6em;\n    border-right: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appSlateColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appSlateColor})),v=function(){var e=b(),n=Object(l.a)(e,1)[0];return n>800?Object(m.jsxs)(j,{width:n,children:[Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"https://github.com/manki23",target:"_blank",title:"GitHub",rel:"noopener noreferrer",children:Object(m.jsx)(g.a,{})})}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"https://www.linkedin.com/in/myriam-anki-8b9258198/",target:"_blank",title:"LinkedIn",rel:"noopener noreferrer",children:Object(m.jsx)(g.b,{})})}),Object(m.jsx)("div",{children:Object(m.jsx)("a",{href:"mailto:myriam.anki.pro@gmail.com",target:"_blank",title:"Mail",rel:"noopener noreferrer",children:Object(m.jsx)(x.a,{})})}),Object(m.jsx)("span",{})]}):Object(m.jsx)(m.Fragment,{})},w=p.b.a(r||(r=Object(u.a)(["\n  color: "," !important;\n  border: 1px solid ",";\n  border-radius: 5px;\n  font-size: 1em;\n  ",";\n\n  &:hover {\n    cursor: pointer;\n    background-color: "," !important;\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n    padding: 10px;\n    margin: 10px;\n    ":"\n      width: fit-content;\n      padding: 15px 50px;\n      margin: 15px 0px;\n      margin-left: auto !important;\n      margin-right: auto !important;\n        "}),(function(e){return e.theme.colors.appGreenTextBackgroundColor})),O=function(e){var n=e.title,t=void 0===n?"Green Button":n,o=e.href,r=void 0===o?"#":o,i=b(),a=Object(l.a)(i,1)[0];return Object(m.jsx)(w,{width:a,href:r,target:"_blank",rel:"noopener noreferrer",children:t})},y=t(9),k=a.a.createContext(),P=function(e){var n=Object(i.useState)(y.a.language),t=Object(l.a)(n,2),o=t[0],r=t[1],a=Object(i.useMemo)((function(){return[o,r]}),[o]);return Object(m.jsx)(k.Provider,Object(d.a)({value:a},e))},C=t(15),L=t(29),N=t(11),S=t(25),I=t(26),T=t.n(I),z={about:"\xc0 propos",experience:"Exp\xe9rience",work:"Projets",contact:"Contact",resume:"CV",homePagePreTitle:"Salut, moi c'est",homePageFullName:"Myriam Anki",homePageWhoami:"Je suis \xe9tudiante \xe0 42Paris",homePageSmallIntro:"J'\xe9tais dev fullstack web Laravel Angular Ionic, maintenant j'explore de nouveaux horizons.",aboutPageTitle:"\xc0 propos de moi",aboutPageParagraphs:["Salut ! Moi c'est Myriam, je suis un esprit passionn\xe9 avec une forte envie d'apprendre. J'aspire \xe0 contribuer \xe0 la cr\xe9ation d'excellents outils qui aideront \xe0 am\xe9liorer la vie de ceux qui m'entourent.","Apr\xe8s presque deux ans d'exp\xe9rience en tant que d\xe9veloppeuse web Fullstack, j'ai d\xe9cid\xe9 de retourner \xe0 l'\xe9cole pour en apprendre d'avantage sur les autres domaines de l'informatique.","Actuellement, je r\xe9alise des projets \xe0 42Paris pour en apprendre plus sur la s\xe9curit\xe9, la data, l'algorithmique, le machine learning... Je suis \xe0 la recherche d'un stage de 6 mois commen\xe7ant id\xe9alement en F\xe9vrier 2023."],aboutPageTechnoListIntro:"Voici quelques technologies avec lesquelles j'ai travaill\xe9 :",aboutPageTechnoList:["Laravel (PHP)","Angular Ionic (Typescript)","React (Javascript)","Python3","C","SQL"],experiencePageTitle:"O\xf9 j'ai travaill\xe9",experiencePageJobs:[{tabName:"Audika Group",jobTitle:"Mission Freelance - D\xe9veloppements divers sur ERP en PHP",companyName:"Audika Group",companyLink:"https://www.audika.fr/",timeframe:"Janvier 2022 -  Mars 2022",content:["\xc9crit des requ\xeates SQL pour filtrer les patients pour faire gagner du temps aux operateurs Audika","Cr\xe9\xe9 de nouvelles fonctionnalit\xe9s sur l'ERP (en PHP). Ex: Agenda, data export","D\xe9bogue de l'ERP"]},{tabName:"Pongo",jobTitle:"D\xe9veloppeuse fullstack Laravel Angular Ionic",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"Novembre 2020 -  Juin 2021",content:["D\xe9bogue de l'application tablette, j'ai aussi ajout\xe9 des pages et de nouvelles options","R\xe9solut un probl\xe8me complexe de perte de paquets sur des connexions wifi instable","Mis en place plusieurs automatisations avec Ionic Appflow : g\xe9n\xe9ration de builds natif (APK, AAB & IPA) synchronis\xe9 avec GitHub, pr\xe9visualisation web, live upate (mise \xe0 jour des tablettes sans passer par les stores), publication de l'app sur les stores Android et Apple.","Cr\xe9\xe9 l'autologin apr\xe8s mise \xe0 jour majeur: j'ai mis en place de la r\xe9cup\xe9ration des donn\xe9es de la tablette \xe0 travers son UDID, login du user, s\xe9lection du restaurant et connexion aux diff\xe9rents websockets. Cela a permis de mettre \xe0 jour pr\xe8s de 400 tablettes sans le besoin d'intervention humaine. Gagnant beaucoup de temps pour nos CSM.","Mis en place de diff\xe9rents canaux PUSHER (websockets) : mise \xe0 jour du local storage (couleur, textes, m\xe9dia...), int\xe9gration caisse (r\xe9cup\xe9rer ses points apr\xe8s un encaissement). Cela a permis d'\xe9viter des latences rendant inutilisables les tablettes lentes.","Cr\xe9\xe9 une nouvelle fonctionnalit\xe9, les num\xe9raux internationaux : modification du clavier pour g\xe9rer l'internationalisation, ajout d'un modal choix du pays c\xf4t\xe9 front, adaptation de la BDD en back et requ\xeates MySQL pour mettre \xe0 jour les data existantes avec les pr\xe9fixes des pays.","\xc9crit de la documentation et des tutoriels sur Notion sur tout ce sur quoi j'ai travaill\xe9."]},{tabName:"Dauphine Junior Consulting",jobTitle:"Mission Fullstack Laravel",companyName:"Dauphine Junior Consulting",companyLink:"https://dauphine-junior-consulting.com/paris/",timeframe:"Avril 2021",content:["Mis \xe0 jour le projet de Laravel 5.8 \xe0 Laravel 8","Modifi\xe9 les formulaires: ajout de champs pour uploader des fichiers","Cr\xe9\xe9 la g\xe9n\xe9ration de document remplis automatiquement : .docx, .xlsx et .pdf avec PhpSpreadsheet","Ajout\xe9 des pr\xe9visualisation des documents, pour \xe9viter d'avoir \xe0 t\xe9l\xe9charger un document pour en voir son contenu.","Chang\xe9 la gestion des r\xf4les avec les Policies de Laravel, modification des droits d'acc\xe8s","Cr\xe9\xe9 une documentation sur le stockage des donn\xe9es sur le serveur, pour le prochain d\xe9velopeur freelance."]},{tabName:"Stage chez Pongo",jobTitle:"Stage Backend Laravel",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"Mai 2020 - Octobre 2020",content:["R\xe9\xe9crit le code backend pour la refactorisation des APIs de Pongo","Mis en place les principes de clean code","S\xe9par\xe9 le code en domaines","Modifi\xe9 la structure de la base de donn\xe9es","\xc9cris une documentation des APIs avec Swagger, puis avec Postman","\xc9cris des scripts de tests Postman"]}],workPageTitle:"Quelques uns de mes projets",workPageWip:"En cours d'\xe9dition: la page projet sera bient\xf4t finie :)",contactPageTitle:"Contact",contactPageParagraph1:"Je suis actuellement ouverte aux propositions, vous avez un projet en t\xeate ou vous voulez juste me saluer ?",contactPageParagraph2:"N'h\xe9sitez pas \xe0 m'envoyer un message !",footerDisclaimerText:"Disclaimer: Je n'ai pas imagin\xe9 le design de ce site.",footerInspiredByText:"Il a \xe9t\xe9 inspir\xe9 par le",footerBrittanyChiangPortfolioText:"portfolio de Brittany Chiang",footerPleaseCheckHerOutText:"Si vous avez aim\xe9 ce design, n'h\xe9sitez pas \xe0 aller voir son travail.",hiMessage:"Salutations !\nN'h\xe9sitez pas \xe0 me laisser un message et n'oubliez pas de laisser vos coordonn\xe9es pour que je puisse vous recontacter :)"},A={about:"About",experience:"Experience",work:"Work",contact:"Contact",resume:"Resume",homePagePreTitle:"Hi, my name is ",homePageFullName:"Myriam Anki",homePageWhoami:"I am a student at 42Paris",homePageSmallIntro:"I was a web fullstack developper in Laravel Angular Ionic, now I am exploring new horizons.",aboutPageTitle:"About me",aboutPageParagraphs:["Hello! I'm Myriam, a passionate spirit with a strong desire to learn. I aspire to contribute to the creation of great tools that will help improve the lives of those around me.","After almost two years of experience as a Fullstack web developer, I decided to go back to school to learn more about the other fields in computer science.","I am currently doing projects at 42Paris to learn more about security, data, algorithm, machine learning... I am looking for a 6-months internship ideally starting February 2023."],aboutPageTechnoListIntro:"Here are a few technologies I\u2019ve been working with:",aboutPageTechnoList:["Laravel (PHP)","Angular Ionic (Typescript)","React (Javascript)","Python3","C","SQL"],experiencePageTitle:"Where I've Worked",experiencePageJobs:[{tabName:"Audika Group",jobTitle:"Freelance - Misc dev on ERP in PHP",companyName:"Audika Group",companyLink:"https://www.audika.fr/",timeframe:"January 2022 -  March 2022",content:["Wrote SQL requests to filter patients for Audika operators to stop loosing time","Created new features in the ERP (in PHP). Ex: Agenda, data export","Debugged the ERP"]},{tabName:"Pongo",jobTitle:"Laravel Angular Ionic fullstack developper",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"November 2020 -  June 2021",content:["Debugged the tablet app and implemented of new features","Fixed package loss problem with unstable wifi connections","Implemented several automation with Ionic Appflow: native builds generation (APK, AAB & IPA) sync with GitHub, web preview, live udpate (update of tablets without going through the app store validation), app publication on the Android and Apple stores.","Created autologin after major store update: I implemented tablet data recovery through its UDID, user login, restaurant selection and connection to different websockets. It allowed to updates around 400 tablets migrating from one app to another without the necessity of human intervention. Saving a lot of time for our CSM.","Implemented PUSHER channels (websockets): local storage update (color, texts, media ...), pos integration (recover your points after a payment). It avoided latencies and unusable slow tablets.","Created international numbers feature: keyboard changed to manage internationalization, modal added to choose the country on the frontend, adaptation of the database in backend and MySQL queries to update existing data with country prefixes.","Wrote documentation and tutorials on Notion on every things I worked on."]},{tabName:"Dauphine Junior Consulting",jobTitle:"Fullstack Laravel Mission",companyName:"Dauphine Junior Consulting",companyLink:"https://dauphine-junior-consulting.com/paris/",timeframe:"April 2021",content:["Updated project code: from Laravel 5.8 to Laravel 8","Changed forms: addition of fields to upload files","Created automatic filled generation of .docx, .xlsx and .pdf with PhpSpreadsheet","Added document preview, to avoid having to download a document to see its content.","Changed role management with Laravel Policies, access rights modified","Wrote a documentation on the server data storage, for the next freelance developer."]},{tabName:"Pongo Internship",jobTitle:"Laravel backend internship",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"May 2020 - October 2020",content:["Rewrite backend code for refactorization of Pongo APIs","Implemented principles of clean code","Separated code into domains","Changed the database structure","Wrote API documentation with Swagger first, then with Postman","Writing Postman test scripts"]}],workPageTitle:"Some Things I've Built",workPageWip:"WIP: work page will be done soon.",contactPageTitle:"Get in touch",contactPageParagraph1:"I a currently open to work, you have a project in mind or just want to say hi ?",contactPageParagraph2:"Feel free to send me a message !",footerDisclaimerText:"Disclaimer: I did not create the design of this website.",footerInspiredByText:"It was inspired by",footerBrittanyChiangPortfolioText:"Brittany Chiang portfolio",footerPleaseCheckHerOutText:"If you liked this design, please check out her work.",hiMessage:"Hi there !\nFeel free to leave me a message and don't forget to leave your contact informations so I can get back to you :)"};y.a.use(S.a).use(N.e).init({resources:{en:{translation:A},fr:{translation:z}},interpolation:{format:function(e,n,t){return e instanceof Date?T()(e).format(n):"number"===typeof e?(new Intl.NumberFormat).format(e):e}}});var B,M,G,D,F,E,J,W,R,q,H,_,Q,U={en:"English",fr:"Fran\xe7ais"},V=p.b.span(B||(B=Object(u.a)(["\n  button {\n    border: 1px solid ",";\n    border-radius: 40px;\n    padding: 0px 7px;\n    margin: 7px 7px;\n    display: inline-flex;\n    align-items: center;\n    font-size: 1em;\n    font-family: monospace;\n    &:hover {\n      color: ",";\n    }\n    svg {\n      font-size: 1.5em;\n      color: ",";\n    }\n    span {\n      margin: 15px 0px;\n    }\n\n    ",";\n      margin-left: auto !important;\n      margin-right: auto !important;\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.md?"\n      & > * { background-color: ".concat(t.colors.appLightNavyColor,"; }\n      "):"\n        background-color: ".concat(t.colors.appNavyColor,";\n      ")})),K=p.b.ul(M||(M=Object(u.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n  li:hover {\n    cursor: pointer;\n    color: ",";\n  }\n  li {\n    padding: 10px 0px;\n  }\n"])),(function(e){return e.theme.colors.appLightestNavyColor}),(function(e){return e.theme.colors.appGreenColor})),X=function(e){var n=e.setShowDropDown,t=e.setLangName;return Object(m.jsx)(K,{children:Object.keys(U).map((function(e){return Object(m.jsx)("li",{onClick:function(){return function(e){n(!1),t(U[e]),y.a.changeLanguage(e)}(e)},children:U[e]},e)}))})},Y=function(){var e=b(),n=Object(l.a)(e,1)[0],t=function(){var e=Object(i.useContext)(k);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e}(),o=Object(l.a)(t,1)[0];o=o.split("-")[0];var r=Object(i.useState)(U[o]),c=Object(l.a)(r,2),s=c[0],u=c[1],p=Object(i.useState)(!1),d=Object(l.a)(p,2),h=d[0],f=d[1],g=a.a.useRef(null);function x(e){var n;!e.target.closest(".".concat(null===(n=g.current)||void 0===n?void 0:n.className))&&h&&f(!1)}return a.a.useEffect((function(){return document.addEventListener("click",x),function(){document.removeEventListener("click",x)}})),Object(m.jsxs)(V,{children:[Object(m.jsxs)("button",{className:"dropdown",ref:g,width:n,onClick:function(){f(!h)},children:[Object(m.jsx)(C.b,{}),"\xa0",Object(m.jsx)("span",{children:s}),"\xa0",Object(m.jsx)(L.a,{})]}),h&&Object(m.jsx)(X,{setShowDropDown:f,setLangName:u})]})},Z=p.b.a(G||(G=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 5px;\n  padding-top: 10px;\n  font-size: 1em;\n  margin: ",';\n  transition: none !important;\n\n  &::before {\n    counter-increment: headerCounter -1;\n    content: "0" counter(headerCounter) ".";\n    margin-right: 5px;\n    color: ',";\n  }\n  ",";\n\n  &:hover {\n    border: 2px dashed ",";\n    margin: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.headerMargin}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.header?"":"\n        display: grid;\n        grid-template-rows: 3fr 2fr;\n        "}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.header?"8px":"13px"}),(function(e){return e.theme.colors.appGreenColor})),$=function(e){var n=e.title,t=void 0===n?"Button":n,o=e.goTo,r=void 0===o?"#":o,i=b(),a=Object(l.a)(i,1)[0];return Object(m.jsx)(Z,{width:a,href:r,children:t})},ee=t.p+"static/media/CV_2022-09-05_Myriam_Anki_en.4e7a0cb3.pdf",ne=t(47),te=p.b.header(D||(D=Object(u.a)(["\n  div {\n    display: flex;\n    right: 0;\n    position: fixed;\n    font-family: monospace;\n    font-size: 16px;\n    z-index: 2;\n    top: 0;\n    opacity: 0.97;\n    text-align: center;\n    ",";\n  }\n  .nav-button {\n    color: ",";\n    background-color: transparent;\n    border: none;\n    position: fixed;\n    top: 10px;\n    right: 10px;\n    font-size: 40px;\n    visibility: ",";\n  }\n"])),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.header?"\n    flex-direction: row-reverse;\n    margin-right: 40px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100vw;\n    height: 80px;\n    background-color: ".concat(t.colors.appNavyColor,";\n    "):"\n    flex-direction: column-reverse;\n    justify-content: center;\n    width: 70vw;\n    height: 100vh;\n    background-color: ".concat(t.colors.appLightNavyColor,";\n    a {\n      margin: 15px;\n    }\n    button, svg, a {\n      background-color: ").concat(t.colors.appLightNavyColor,";\n    }\n    ")}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.header?"hidden":"visible"})),oe=function(e){var n=e.setBlurContent,t=Object(i.useState)(!1),o=Object(l.a)(t,2),r=o[0],c=o[1],s=b(),u=Object(l.a)(s,1)[0],p=Object(ne.a)().t,d=a.a.useRef(null),h=function(){setTimeout((function(){c(!1),n(!1)}),250)};function f(e){var n;e.target.closest(".".concat(null===(n=d.current)||void 0===n?void 0:n.className))||!r||e.target.closest(".dropdown")||h()}return a.a.useEffect((function(){return document.addEventListener("click",f),function(){document.removeEventListener("click",f)}})),Object(m.jsx)(te,{width:u,children:r||u>900?Object(m.jsxs)("div",{children:[Object(m.jsx)(O,{title:p("resume"),href:ee}),Object(m.jsx)($,{title:p("contact"),goTo:"#contact-page"}),Object(m.jsx)($,{title:p("work"),goTo:"#work-page"}),Object(m.jsx)($,{title:p("experience"),goTo:"#experience-page"}),Object(m.jsx)($,{title:p("about"),goTo:"#about-page"}),Object(m.jsx)(Y,{}),Object(m.jsx)("button",{className:"nav-button",onClick:h,children:Object(m.jsx)(C.a,{})})]}):Object(m.jsx)("button",{className:"nav-button",onClick:function(){c(!0),n(!0)},children:Object(m.jsx)(g.c,{})})})},re=t.p+"static/media/manki-bitmoji.719084e1.png",ie=p.b.a(F||(F=Object(u.a)(["\n  img {\n    position: ",";\n    height: 5.9em;\n    z-index: 3;\n  }\n"])),(function(e){return e.width>e.theme.widthBreakpoints.sm?"fixed":"relative"})),ae=function(){var e=b(),n=Object(l.a)(e,1)[0];return n>800?Object(m.jsx)(ie,{href:"#",width:n,children:Object(m.jsx)("img",{src:re,alt:"Logo"})}):Object(m.jsx)(m.Fragment,{})},ce=t.p+"static/media/myriam_profile.e0ef8a37.PNG",se=p.b.div(E||(E=Object(u.a)(["\n  padding: 100px 0px;\n\n  .content {\n    ",";\n    font-size: 0.8em;\n    .text-container {\n      p {\n        margin: 0px 0px 15px;\n      }\n    }\n    .picture-container {\n      #wrapper {\n        border-radius: ",";\n        /* mix-blend-mode: multiply; */\n        /* filter: grayscale(100%) contrast(1); */\n        transition: ",";\n        /* vertical-align: middle; */\n        img {\n          vertical-align: middle;\n          /* mix-blend-mode: multiply; */\n          /* filter: grayscale(100%) contrast(1); */\n          transition: ",";\n          resize: none;\n          width: auto;\n          height: auto;\n          max-height: 250px;\n          position: absolute;\n          text-align: center;\n          ",";\n          border-radius: ",';\n          z-index: 1;\n        }\n      }\n      #wrapper::after {\n        content: "";\n        display: block;\n        position: relative;\n        border-radius: ',";\n        transition: ",";\n\n        top: 20px;\n        left: ",";\n        z-index: 0;\n        width: 200px;\n        height: 250px;\n        ",";\n      }\n    }\n  }\n"])),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        gap: 50px;\n        ":"\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n      "}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.transition}),(function(e){return e.theme.transition}),(function(e){return e.width>e.theme.widthBreakpoints.md?" ":"\n        margin-left: auto;\n        margin-right: auto;\n        left: 0px;\n        right: 0px;\n      "}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.transition}),(function(e){return e.width>e.theme.widthBreakpoints.md?"20px":"0px"}),(function(e){return e.width>e.theme.widthBreakpoints.md?" ":" margin-left: auto; margin-right: auto; "})),le=function(){var e=b(),n=Object(l.a)(e,1)[0],t=Object(ne.a)().t;return Object(m.jsxs)(se,{id:"about-page",width:n,children:[Object(m.jsx)("h2",{children:t("aboutPageTitle")}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsxs)("div",{className:"text-container",children:[t("aboutPageParagraphs",{returnObjects:!0})instanceof Array&&t("aboutPageParagraphs",{returnObjects:!0}).map((function(e,n){return Object(m.jsx)("p",{children:e},n)})),Object(m.jsx)("p",{children:t("aboutPageTechnoListIntro")}),Object(m.jsx)("ul",{className:"styled-list",children:t("aboutPageTechnoList",{returnObjects:!0})instanceof Array&&t("aboutPageTechnoList",{returnObjects:!0}).map((function(e,n){return Object(m.jsx)("li",{children:e},n)}))})]}),Object(m.jsx)("div",{className:"picture-container",children:Object(m.jsx)("div",{id:"wrapper",children:Object(m.jsx)("img",{src:ce,alt:"manki"})})})]})]})},ue=p.b.div(J||(J=Object(u.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  #pre-title {\n    color: ",";\n    font-size: ",";\n  }\n\n  #title-name {\n    color: ",";\n  }\n\n  #title-whoami {\n    color: ",";\n  }\n\n  #title-name,\n  #title-whoami {\n    font-size: 6vw;\n    font-weight: bold;\n  }\n\n  #small-intro {\n    color: ",";\n    margin-top: 20px;\n    font-size: 20px;\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){var n=e.theme;return"clamp(".concat(n.fontSize.sm,", 5vw, ").concat(n.fontSize.md,")")}),(function(e){return e.theme.colors.appLightestSlateColor}),(function(e){return e.theme.colors.appLightSlateColor}),(function(e){return e.theme.colors.appSlateColor})),pe=function(){var e=Object(ne.a)().t;return Object(m.jsxs)(ue,{id:"home-page",children:[Object(m.jsxs)("div",{id:"pre-title",children:[" ",e("homePagePreTitle")," "]}),Object(m.jsxs)("div",{id:"title-name",children:[e("homePageFullName"),"."]}),Object(m.jsxs)("div",{id:"title-whoami",children:[e("homePageWhoami"),"."]}),Object(m.jsxs)("div",{id:"small-intro",children:[e("homePageSmallIntro")," "]})]})},de=p.b.div(W||(W=Object(u.a)(["\n  padding: 100px 0px;\n  .content {\n    ","\n    .job-tabs {\n      ","\n      button {\n        max-width: 90px;\n        min-height: 42px;\n        min-width: ",";\n        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n        display: flex;\n        -webkit-box-align: center;\n        align-items: center;\n        background-color: transparent;\n        color: ",";\n        font-family: monospace;\n        font-size: 15px;\n        text-align: left;\n        padding: ",";\n\n        cursor: pointer;\n        border: 0px;\n        border-radius: 0px;\n        ","\n        ",";\n      }\n\n      button:hover,\n      .selected {\n        color: ",";\n        ","\n        ",";\n      }\n\n      button:hover {\n        background-color: ",";\n      }\n    }\n\n    .job-description {\n      padding: 10px 5px;\n      h3 {\n        margin: 0px;\n        margin-bottom: 2px;\n      }\n      p {\n        font-family: monospace;\n        font-size: 0.7em;\n        margin-top: 0px;\n        margin-bottom: 25px;\n      }\n      a {\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n      display: grid;\n      grid-template-columns: 1fr 3fr;\n    ":""}),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n          ":"\n        display: flex;\n        overflow-x: auto;\n        margin-bottom: 25px;\n      "}),(function(e){return e.width>e.theme.widthBreakpoints.md?"100%":"fit-content"}),(function(e){return e.theme.colors.appSlateColor}),(function(e){return e.width>e.theme.widthBreakpoints.md?"20px 10px":"10px 20px"}),(function(e){return e.width>e.theme.widthBreakpoints.md?"border-left: 2px solid":"border-bottom: 2px solid"}),(function(e){return e.theme.colors.appLightestNavyColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.md?"border-left: 2px solid":"border-bottom: 2px solid"}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appLightestNavyColor}),(function(e){return e.theme.colors.appGreenColor})),me=function(e){var n=e.content,t=void 0===n?[]:n,o=e.title,r=void 0===o?"":o,i=e.companyName,a=void 0===i?"":i,c=e.companyLink,s=void 0===c?"":c,l=e.timeframe,u=void 0===l?"":l,p=e.hidden,d=void 0===p||p;return Object(m.jsxs)("div",{hidden:d,children:[Object(m.jsxs)("h3",{children:[r," ",Object(m.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:["@ ",a]})]}),Object(m.jsx)("p",{children:u}),Object(m.jsx)("div",{children:Object(m.jsx)("ul",{className:"styled-list",children:t.map((function(e,n){return Object(m.jsx)("li",{children:e},n)}))})})]})},he=function(){var e=Object(i.useState)(0),n=Object(l.a)(e,2),t=n[0],o=n[1],r=b(),a=Object(l.a)(r,1)[0],c=Object(ne.a)().t;return Object(m.jsxs)(de,{id:"experience-page",width:a,children:[Object(m.jsx)("h2",{children:c("experiencePageTitle")}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"job-tabs",children:c("experiencePageJobs",{returnObjects:!0})instanceof Array&&c("experiencePageJobs",{returnObjects:!0}).map((function(e,n){var r=e.tabName;return Object(m.jsx)("button",{className:t===n?"selected":"",onClick:function(){return o(n)},children:r},n)}))}),Object(m.jsx)("div",{className:"job-description",children:c("experiencePageJobs",{returnObjects:!0})instanceof Array&&c("experiencePageJobs",{returnObjects:!0}).map((function(e,n){var o=e.jobTitle,r=e.companyName,i=e.companyLink,a=e.timeframe,c=e.content;return Object(m.jsx)(me,{title:o,companyName:r,companyLink:i,timeframe:a,content:c,hidden:t!==n},n)}))})]})]})},be=p.b.div(R||(R=Object(u.a)(["\n  padding: 100px 0px;\n"]))),fe=function(){var e=Object(ne.a)().t;return Object(m.jsxs)(be,{id:"work-page",children:[Object(m.jsx)("h2",{children:e("workPageTitle")}),Object(m.jsx)("p",{children:e("workPageWip")})]})},ge=t(31),xe=p.b.div(q||(q=Object(u.a)(["\n    padding: 100px 0px;\n    text-align: center;\n    div {\n      font-size: ",";\n        display: grid;\n    }\n"])),(function(e){var n=e.theme;return"clamp(".concat(n.fontSize.md,", 5vw, ").concat(n.fontSize.xxl,")")})),je=function(){var e=Object(ne.a)().t;return Object(m.jsxs)(xe,{id:"contact-page",children:[Object(m.jsx)("h2",{children:e("contactPageTitle")}),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:e("contactPageParagraph1")}),Object(m.jsx)("p",{children:e("contactPageParagraph2")}),Object(m.jsxs)("p",{children:[Object(m.jsx)(O,{title:Object(m.jsxs)(m.Fragment,{children:["LinkedIn ",Object(m.jsx)(ge.a,{})]}),href:"https://www.linkedin.com/in/myriam-anki-8b9258198/"}),Object(m.jsx)(O,{title:Object(m.jsxs)(m.Fragment,{children:["Mail ",Object(m.jsx)(x.a,{})]}),href:"mailto:myriam.anki.pro@gmail.com"})]})]})]})},ve=p.b.footer(H||(H=Object(u.a)(["\n  bottom: 0;\n  width: 70vw;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 0.9em;\n  p {\n    font-family: monospace;\n    text-align: center;\n  }\n"]))),we=function(){var e=Object(ne.a)().t;return Object(m.jsx)(ve,{children:Object(m.jsxs)("p",{children:[e("footerDisclaimerText")," ",Object(m.jsx)("br",{}),e("footerInspiredByText")," ",Object(m.jsx)("a",{target:"_blank",href:"https://brittanychiang.com/",rel:"noopener noreferrer",children:e("footerBrittanyChiangPortfolioText")}),".",Object(m.jsx)("br",{}),e("footerPleaseCheckHerOutText")]})})},Oe=p.b.div(_||(_=Object(u.a)(["\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  ",";\n"])),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.md?"0px 150px":n>t.widthBreakpoints.sm?"0px 75px":"0px 25px"}),(function(e){return e.blurContent?"{ div { filter: blur(5px); }":""})),ye=function(e){var n=e.blurContent,t=void 0!==n&&n,o=b(),r=Object(l.a)(o,1)[0];return Object(m.jsxs)(Oe,{width:r,blurContent:t,children:[Object(m.jsx)(pe,{}),Object(m.jsx)(le,{}),Object(m.jsx)(he,{}),Object(m.jsx)(fe,{}),Object(m.jsx)(je,{}),Object(m.jsx)(we,{})]})},ke={colors:{appNavyColor:"#0a192f",appLightNavyColor:"#112240",appLightestNavyColor:"#233554",appNavyShadowColor:"rgba(2,12,27,0.7)",appSlateColor:"#8892b0",appLightSlateColor:"#a8b2d1",appLightestSlateColor:"#ccd6f6",appWhiteColor:"#e6f1ff",appGreenColor:"#64ffda",appGreenTextBackgroundColor:"#133141"},fontSize:{xxs:"12px",xs:"13px",sm:"14px",md:"16px",lg:"18px",xl:"20px",xxl:"22px",heading:"32px"},widthBreakpoints:{sm:640,md:800,header:900,lg:1024},fontMono:'"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',transition:"all 0.25s cubic-bezier(0.645,0.045,0.355,1)",headerMargin:"10px",borderRadius:"4px"},Pe=p.b.div(Q||(Q=Object(u.a)(["\n  & > * { background-color: ","; }\n  * { box-sizing: border-box; } \n  display: flex;\n  counter-reset: headerCounter 5 h2Counter 0;\n  color: ",";\n\n  a,\n  button {\n    color: inherit;\n    text-decoration: none;\n    transition: ",";\n    cursor: pointer;\n  }\n  p > a,\n  h3 > a {\n    color: ",";\n    outline: 0px;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    text-decoration-skip-ink: auto;\n    transition: ",';\n  }\n  p > a::after,\n  h3 > a::after {\n    content: "";\n    display: block;\n    width: 0px;\n    height: 1px;\n    position: relative;\n    background-color: ',";\n    transition: ",";\n    opacity: 0.5;\n    box-sizing: inherit;\n  }\n  p > a:focus,\n  h3 > a:focus,\n  p > a:hover,\n  h3 > a:hover {\n    outline-offset: 3px;\n  }\n  p > a:hover::after,\n  h3 > a:hover::after {\n    width: 100%;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 600;\n    color: ",";\n  }\n\n  h3 {\n    font-size: 22px;\n  }\n\n  div {\n    font-size: 1.1em;\n  }\n\n  p,\n  ol,\n  li {\n    color: ",';\n    font-size: 1.1em;\n  }\n\n  .styled-list {\n    margin: 0px;\n    padding: 0px;\n    li {\n      list-style-type: none;\n      font-size: 18px;\n      position: relative;\n      padding-left: 30px;\n      margin-bottom: 10px;\n    }\n    li::before {\n      content: "\u25b9";\n      position: absolute;\n      left: 0px;\n      color: ',';\n    }\n  }\n\n  h2::before {\n    position: relative;\n    counter-increment: h2Counter 1;\n    content: "0" counter(h2Counter) ".";\n    margin-right: 10px;\n    color: ',";\n    font-family: ",";\n    font-weight: 400;\n  }\n\n  h2 {\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin: 10px 0px 40px;\n    width: 100%;\n    font-size: clamp(26px, 5vw, ",");\n    white-space: nowrap;\n    line-height: 1.1;\n  }\n\n  .slate-color {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.appNavyColor}),(function(e){return e.theme.colors.appWhiteColor}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.appLightestSlateColor}),(function(e){return e.theme.colors.appSlateColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.fontMono}),(function(e){return e.theme.fontSize.heading}),(function(e){return e.theme.colors.appSlateColor}));var Ce=function(){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(m.jsx)(p.a,{theme:ke,children:Object(m.jsx)(Pe,{className:"approot",children:Object(m.jsx)(P,{children:Object(m.jsxs)(f,{children:[Object(m.jsx)(ae,{}),Object(m.jsx)(oe,{setBlurContent:o}),Object(m.jsx)(ye,{blurContent:t}),Object(m.jsx)(v,{})]})})})})},Le=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))};s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(Ce,{})}),document.getElementById("root")),Le()}},[[46,1,2]]]);
//# sourceMappingURL=main.da6f2d67.chunk.js.map