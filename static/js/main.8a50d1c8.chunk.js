(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{36:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var o,r,i=t(2),a=t.n(i),c=t(20),s=t.n(c),l=(t(36),t(5)),p=t(4),u=t(3),d=t(16),h=t(1),m=a.a.createContext(),b=function(){var e=Object(i.useContext)(m);if(!e)throw new Error("useWindowWidth must be used within a WindowWidthProvider");return e},f=function(e){var n=Object(i.useState)(0),t=Object(l.a)(n,2),o=t[0],r=t[1],a=Object(i.useMemo)((function(){return[o,r]}),[o]);Object(i.useEffect)((function(){return c(),window.addEventListener("resize",c),function(){return window.removeEventListener("resize",c)}}),[]);var c=function(){var e=window.innerWidth;r(e)};return Object(h.jsx)(m.Provider,Object(d.a)({value:a},e))},g=t(10),x=t(13),j=u.b.div(o||(o=Object(p.a)(["\n  position: fixed;\n  left: 40px;\n  bottom: 0;\n\n  div:hover {\n    color: ",";\n  }\n\n  div {\n    font-size: 23px;\n    margin: 20px 0px;\n    color: ",";\n  }\n\n  div:active {\n    outline: 2px dashed ",";\n    outline-offset: 6px;\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 0.5em;\n    min-height: 6em;\n    border-right: 1px solid ",";\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appSlateColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appSlateColor})),v=function(){var e=b(),n=Object(l.a)(e,1)[0];return n>800?Object(h.jsxs)(j,{width:n,children:[Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://github.com/manki23",target:"_blank",title:"GitHub",rel:"noopener noreferrer",children:Object(h.jsx)(g.a,{})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/myriam-anki-8b9258198/",target:"_blank",title:"LinkedIn",rel:"noopener noreferrer",children:Object(h.jsx)(g.b,{})})}),Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"mailto:myriam.anki.pro@gmail.com",target:"_blank",title:"Mail",rel:"noopener noreferrer",children:Object(h.jsx)(x.a,{})})}),Object(h.jsx)("span",{})]}):Object(h.jsx)(h.Fragment,{})},O=u.b.a(r||(r=Object(p.a)(["\n  color: "," !important;\n  border: 1px solid ",";\n  border-radius: 5px;\n  font-size: 1em;\n  ",";\n\n  &:hover {\n    cursor: pointer;\n    background-color: "," !important;\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n    padding: 10px;\n    margin: 10px;\n    ":"\n      width: fit-content;\n      padding: 15px 50px;\n      margin: 15px 0px;\n      margin-left: auto !important;\n      margin-right: auto !important;\n        "}),(function(e){return e.theme.colors.appGreenTextBackgroundColor})),w=function(e){var n=e.title,t=void 0===n?"Green Button":n,o=e.href,r=void 0===o?"#":o,i=b(),a=Object(l.a)(i,1)[0];return Object(h.jsx)(O,{width:a,href:r,target:"_blank",rel:"noopener noreferrer",children:t})},k=t(9),y=a.a.createContext(),P=function(e){var n=Object(i.useState)(k.a.language),t=Object(l.a)(n,2),o=t[0],r=t[1],a=Object(i.useMemo)((function(){return[o,r]}),[o]);return Object(h.jsx)(y.Provider,Object(d.a)({value:a},e))},C=t(15),L=t(29),N=t(11),T=t(25),S=t(26),z=t.n(S),I={about:"\xc0 propos",experience:"Exp\xe9rience",work:"Projets",contact:"Contact",resume:"CV",homePagePreTitle:"Coucou, moi c'est",homePageFullName:"Myriam Anki",homePageWhoami:"Je suis developpeuse freelance",homePageSmallIntro:"Je suis dev fullstack profil\xe9 backend sur Laravel. C\xf4t\xe9 front, je code sur React en ce moment.",aboutPageTitle:"\xc0 propos de moi",aboutPageParagraphs:["Coucou ! Moi c'est Myriam, je suis un esprit passion\xe9 qui aspire \xe0 contribuer \xe0 la cr\xe9ation d'excellents outils qui am\xe9liorent la vie de ceux qui m'entourent.","\xc9tudiante \xe0 42, j'ai travaill\xe9 un an en tant que developpeuse fullstack chez Pongo ... "],aboutPageTechnoListIntro:"Voici quelques technologies avec lesquelles j'ai travaill\xe9 r\xe9cemment :",aboutPageTechnoList:["Laravel (PHP)","Angular Ionic (Typescript)","React (Javascript)"],experiencePageTitle:"O\xf9 j'ai travaill\xe9",experiencePageJobs:[{tabName:"Pongo",jobTitle:"D\xe9veloppeuse fullstack Laravel Angular Ionic",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"Novembre 2020 -  Ao\xfbt 2021",content:["Debogue g\xe9n\xe9ral de l'application tablette, ajouts de pages et d'options","Gestion de la perte de paquets sur des connexions wifi instables","Mise en place de plusieurs automatisations avec Ionic Appflow : g\xe9n\xe9ration de builds natif (APK, AAB & IPA) synchronis\xe9 avec GitHub, pr\xe9visualisation web, live upate (mise \xe0 jour des tablettes sans passer par les stores), publication de l'app sur les stores Android et Apple.","Autologin : mise en place de la r\xe9cup\xe9ration des donn\xe9es de la tablette \xe0 travers son UDID, login du user, s\xe9lection du restaurant et connexion aux diff\xe9rents websockets","Mise en place de diff\xe9rents cannaux PUSHER (websockets) : mise \xe0 jour du local storage (couleur, texts, media...), int\xe9gration caisse (r\xe9cup\xe9rer ses points apr\xe8s un encaissement)","Num\xe9raux internationaux : modification du clavier pour g\xe9rer l'internationnalisation, ajout d'une modale choix du pays c\xf4t\xe9 front, adaptation de la BDD en back et requ\xeates MySQL pour mettre \xe0 jours les data existantes avec les pr\xe9fix des pays.","Documentation sur Notion"]},{tabName:"Dauphine Junior Consulting",jobTitle:"Mission Fullstack Laravel",companyName:"Dauphine Junior Consulting",companyLink:"https://dauphine-junior-consulting.com/paris/",timeframe:"Avril 2021",content:["Mise \xe0 jour du projet de Laravel 5.8 \xe0 Laravel 8","Modification des formulaires, ajout de champs pour uploader des fichiers","G\xe9n\xe9ration de document .docx, .xlsx et .pdf remplis automatiquement avec PhpSpreadsheet","Ajout de pr\xe9visualisation des documents","Gestion des r\xf4les avec les Policies de Laravel, modification des droits d'acc\xe8s","Cr\xe9ation d'une documentation sur le stockage des donn\xe9es sur le serveur"]},{tabName:"Stage chez Pongo",jobTitle:"Stage Backend Laravel",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"Mai 2020 - Octobre 2020",content:["Refactorisation du code des APIs de Pongo","Mise en place des principes de clean code","S\xe9paration du code en domaines","Modification de la structure de la base de donn\xe9es","\xc9criture d'une documentation des APIs avec Swagger, puis avec Postman","\xc9criture de scripts de tests Postman"]}],workPageTitle:"Quelques uns de mes projets",workPageWip:"En cours d'\xe9dition: la page projet sera bient\xf4t finie :)",contactPageTitle:"Contact",contactPageParagraph1:"Je suis actuellement ouverte aux propositions, vous avez un projet en t\xeate ou vous voulez juste me saluer ?",contactPageParagraph2:"N'h\xe9sitez pas \xe0 m'envoyer un message !",footerDisclaimerText:"Disclaimer: Je n'ai pas imagin\xe9 le design de ce site.",footerInspiredByText:"Il a \xe9t\xe9 inspir\xe9 par le",footerBrittanyChiangPortfolioText:"portfolio de Brittany Chiang",footerPleaseCheckHerOutText:"Si vous avez aim\xe9 ce design, n'h\xe9sitez pas \xe0 aller voir son travail."},B={about:"About",experience:"Experience",work:"Work",contact:"Contact",resume:"Resume",homePagePreTitle:"Hi, my name is ",homePageFullName:"Myriam Anki",homePageWhoami:"I am a freelance developper",homePageSmallIntro:"I am a Laravel backend developper with some frontend skills in React.",aboutPageTitle:"About me",aboutPageParagraphs:["Hello! I'm Myriam, a passionate spirit aspiring to contribute to the creation of great tools that improve the lives of those around me.","Student at 42, I worked a year as a fullstack developer at Pongo ..."],aboutPageTechnoListIntro:"Here are a few technologies I\u2019ve been working with recently:",aboutPageTechnoList:["Laravel (PHP)","Angular Ionic (Typescript)","React (Javascript)"],experiencePageTitle:"Where I've Worked",experiencePageJobs:[{tabName:"Pongo",jobTitle:"Laravel Angular Ionic fullstack developper",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"November 2020 -  August 2021",content:["General tablet app debugg and implementation of new features","Management of package loss on unstable wifi connections","Implementation of several automations with Ionic Appflow: native builds generation (APK, AAB & IPA) synchronized with GitHub, web preview, live upate (update of tablets without going through the app store validation), app publication on the Android and Apple stores","Autologin: implementation of the tablet data recovery through its UDID, user login, restaurant selection and connection to different websockets","Implementation of different PUSHER channels (websockets): local storage update (color, texts, media ...), pos integration (recover your points after a payment)","International numbers: keyboard changed to manage internationalization, modal added to choose the country on the frontend, adaptation of the database in backend and MySQL queries to update existing data with country prefixes.","Documentation on Notion"]},{tabName:"Dauphine Junior Consulting",jobTitle:"Fullstack Laravel Mission",companyName:"Dauphine Junior Consulting",companyLink:"https://dauphine-junior-consulting.com/paris/",timeframe:"April 2021",content:["Project code update: from Laravel 5.8 to Laravel 8","Forms changed, addition of fields to upload files","Generation of .docx, .xlsx and .pdf documents filled automatically with PhpSpreadsheet","Document preview added","Role management with Laravel Policies, access rights modified","Creation of a documentation on the server data storage"]},{tabName:"Pongo Internship",jobTitle:"Laravel backend internship",companyName:"Pongo",companyLink:"https://www.heypongo.com/",timeframe:"May 2020 - October 2020",content:["Code refactoring of Pongo APIs","Implementation of clean code principles","Separation of code into domains","Modification of the database structure","Writing API documentation with Swagger first, then with Postman","Writing Postman test scripts"]}],workPageTitle:"Some Things I've Built",workPageWip:"WIP: work page will be done soon.",contactPageTitle:"Get in touch",contactPageParagraph1:"I a currently open to work, you have a project in mind or just want to say hi ?",contactPageParagraph2:"Feel free to send me a message !",footerDisclaimerText:"Disclaimer: I did not create the design of this website.",footerInspiredByText:"It was inspired by",footerBrittanyChiangPortfolioText:"Brittany Chiang portfolio",footerPleaseCheckHerOutText:"If you liked this design, please check out her work."};k.a.use(T.a).use(N.e).init({resources:{en:{translation:B},fr:{translation:I}},interpolation:{format:function(e,n,t){return e instanceof Date?z()(e).format(n):"number"===typeof e?(new Intl.NumberFormat).format(e):e}}});var A,G,M,D,F,W,E,J,R,H,q,_,U,Q={en:"English",fr:"Fran\xe7ais"},V=u.b.span(A||(A=Object(p.a)(["\n  button {\n    border: 1px solid ",";\n    border-radius: 40px;\n    padding: 0px 7px;\n    margin: 7px 7px;\n    display: inline-flex;\n    align-items: center;\n    font-size: 1em;\n    font-family: monospace;\n    &:hover {\n      color: ",";\n    }\n    svg {\n      font-size: 1.5em;\n      color: ",";\n    }\n    span {\n      margin: 15px 0px;\n    }\n\n    ",";\n      margin-left: auto !important;\n      margin-right: auto !important;\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.md?"\n      & > * { background-color: ".concat(t.colors.appLightNavyColor,"; }\n      "):"\n        background-color: ".concat(t.colors.appNavyColor,";\n      ")})),K=u.b.ul(G||(G=Object(p.a)(["\n  background-color: ",";\n  border-radius: 4px;\n  list-style-type: none;\n  margin: 0px;\n  padding: 0px;\n  li:hover {\n    cursor: pointer;\n    color: ",";\n  }\n  li {\n    padding: 10px 0px;\n  }\n"])),(function(e){return e.theme.colors.appLightestNavyColor}),(function(e){return e.theme.colors.appGreenColor})),X=function(e){var n=e.setShowDropDown,t=e.setLangName;return Object(h.jsx)(K,{children:Object.keys(Q).map((function(e){return Object(h.jsx)("li",{onClick:function(){return function(e){n(!1),t(Q[e]),k.a.changeLanguage(e)}(e)},children:Q[e]},e)}))})},Y=function(){var e=b(),n=Object(l.a)(e,1)[0],t=function(){var e=Object(i.useContext)(y);if(!e)throw new Error("useLanguage must be used within a LanguageProvider");return e}(),o=Object(l.a)(t,1)[0],r=Object(i.useState)(Q[o]),c=Object(l.a)(r,2),s=c[0],p=c[1],u=Object(i.useState)(!1),d=Object(l.a)(u,2),m=d[0],f=d[1],g=a.a.useRef(null);function x(e){var n;!e.target.closest(".".concat(null===(n=g.current)||void 0===n?void 0:n.className))&&m&&f(!1)}return a.a.useEffect((function(){return document.addEventListener("click",x),function(){document.removeEventListener("click",x)}})),Object(h.jsxs)(V,{children:[Object(h.jsxs)("button",{className:"dropdown",ref:g,width:n,onClick:function(){f(!m)},children:[Object(h.jsx)(C.b,{}),"\xa0",Object(h.jsx)("span",{children:s}),"\xa0",Object(h.jsx)(L.a,{})]}),m&&Object(h.jsx)(X,{setShowDropDown:f,setLangName:p})]})},Z=u.b.a(M||(M=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  padding: 5px;\n  padding-top: 10px;\n  font-size: 1em;\n  margin: ",';\n  transition: none !important;\n\n  &::before {\n    counter-increment: headerCounter -1;\n    content: "0" counter(headerCounter) ".";\n    margin-right: 5px;\n    color: ',";\n  }\n  ",";\n\n  &:hover {\n    border: 2px dashed ",";\n    margin: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.headerMargin}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.header?"":"\n        display: grid;\n        grid-template-rows: 3fr 2fr;\n        "}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.header?"8px":"13px"}),(function(e){return e.theme.colors.appGreenColor})),$=function(e){var n=e.title,t=void 0===n?"Button":n,o=e.goTo,r=void 0===o?"#":o,i=b(),a=Object(l.a)(i,1)[0];return Object(h.jsx)(Z,{width:a,href:r,children:t})},ee=t.p+"static/media/CV_2021-09-22_Myriam_Anki.660c9360.pdf",ne=t(47),te=u.b.header(D||(D=Object(p.a)(["\n  div {\n    display: flex;\n    right: 0;\n    position: fixed;\n    font-family: monospace;\n    font-size: 16px;\n    z-index: 2;\n    top: 0;\n    opacity: 0.97;\n    text-align: center;\n    ",";\n  }\n  .nav-button {\n    color: ",";\n    background-color: transparent;\n    border: none;\n    position: fixed;\n    top: 15px;\n    right: 15px;\n    font-size: 40px;\n    visibility: ",";\n  }\n"])),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.header?"\n    flex-direction: row-reverse;\n    margin-right: 40px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    width: 100vw;\n    height: 80px;\n    background-color: ".concat(t.colors.appNavyColor,";\n    "):"\n    flex-direction: column-reverse;\n    justify-content: center;\n    width: 70vw;\n    height: 100vh;\n    background-color: ".concat(t.colors.appLightNavyColor,";\n    a {\n      margin: 15px;\n    }\n    button, svg, a {\n      background-color: ").concat(t.colors.appLightNavyColor,";\n    }\n    ")}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.header?"hidden":"visible"})),oe=function(e){var n=e.setBlurContent,t=Object(i.useState)(!1),o=Object(l.a)(t,2),r=o[0],c=o[1],s=b(),p=Object(l.a)(s,1)[0],u=Object(ne.a)().t,d=a.a.useRef(null),m=function(){setTimeout((function(){c(!1),n(!1)}),250)};function f(e){var n;e.target.closest(".".concat(null===(n=d.current)||void 0===n?void 0:n.className))||!r||e.target.closest(".dropdown")||m()}return a.a.useEffect((function(){return document.addEventListener("click",f),function(){document.removeEventListener("click",f)}})),Object(h.jsx)(te,{width:p,children:r||p>900?Object(h.jsxs)("div",{children:[Object(h.jsx)(w,{title:u("resume"),href:ee}),Object(h.jsx)($,{title:u("contact"),goTo:"#contact-page"}),Object(h.jsx)($,{title:u("work"),goTo:"#work-page"}),Object(h.jsx)($,{title:u("experience"),goTo:"#experience-page"}),Object(h.jsx)($,{title:u("about"),goTo:"#about-page"}),Object(h.jsx)(Y,{}),Object(h.jsx)("button",{className:"nav-button",onClick:m,children:Object(h.jsx)(C.a,{})})]}):Object(h.jsx)("button",{className:"nav-button",onClick:function(){c(!0),n(!0)},children:Object(h.jsx)(g.c,{})})})},re=t.p+"static/media/manki-bitmoji.719084e1.png",ie=u.b.a(F||(F=Object(p.a)(["\n  img {\n    position: ",";\n    height: 5.9em;\n    z-index: 3;\n  }\n"])),(function(e){return e.width>e.theme.widthBreakpoints.sm?"fixed":"relative"})),ae=function(){var e=b(),n=Object(l.a)(e,1)[0];return n>800?Object(h.jsx)(ie,{href:"#",width:n,children:Object(h.jsx)("img",{src:re,alt:"Logo"})}):Object(h.jsx)(h.Fragment,{})},ce=u.b.div(W||(W=Object(p.a)(["\n  padding: 100px 0px;\n\n  .content {\n    ",";\n    font-size: 0.8em;\n    .text-container {\n      p {\n        margin: 0px 0px 15px;\n      }\n    }\n    .picture-container {\n      #wrapper {\n        border-radius: ",";\n        /* mix-blend-mode: multiply; */\n        /* filter: grayscale(100%) contrast(1); */\n        transition: ",";\n        /* vertical-align: middle; */\n        img {\n          vertical-align: middle;\n          /* mix-blend-mode: multiply; */\n          /* filter: grayscale(100%) contrast(1); */\n          transition: ",";\n          resize: none;\n          width: auto;\n          height: auto;\n          position: absolute;\n          text-align: center;\n          ",";\n          background-color: ",";\n          border-radius: ",';\n          z-index: 1;\n        }\n      }\n      #wrapper::after {\n        content: "";\n        display: block;\n        position: relative;\n        border-radius: ',";\n        transition: ",";\n\n        ",";\n        top: 20px;\n        left: ",";\n        z-index: 0;\n        width: 200px;\n        height: 250px;\n        ",";\n      }\n    }\n  }\n"])),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n        display: grid;\n        grid-template-columns: 2fr 1fr;\n        gap: 50px;\n        ":"\n        display: flex;\n        flex-direction: column;\n        flex-wrap: wrap;\n      "}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.transition}),(function(e){return e.theme.transition}),(function(e){return e.width>e.theme.widthBreakpoints.md?" ":"\n        margin-left: auto;\n        margin-right: auto;\n        left: 0px;\n        right: 0px;\n      "}),(function(e){return e.theme.colors.appLightSlateColor}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.borderRadius}),(function(e){return e.theme.transition}),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.md?"\n          border: 2px solid ".concat(t.colors.appGreenColor,";\n        "):""}),(function(e){return e.width>e.theme.widthBreakpoints.md?"20px":"0px"}),(function(e){return e.width>e.theme.widthBreakpoints.md?" ":" margin-left: auto; margin-right: auto; "})),se=function(){var e=b(),n=Object(l.a)(e,1)[0],t=Object(ne.a)().t;return Object(h.jsxs)(ce,{id:"about-page",width:n,children:[Object(h.jsx)("h2",{children:t("aboutPageTitle")}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"text-container",children:[t("aboutPageParagraphs",{returnObjects:!0})instanceof Array&&t("aboutPageParagraphs",{returnObjects:!0}).map((function(e,n){return Object(h.jsx)("p",{children:e},n)})),Object(h.jsx)("p",{children:t("aboutPageTechnoListIntro")}),Object(h.jsx)("ul",{className:"styled-list",children:t("aboutPageTechnoList",{returnObjects:!0})instanceof Array&&t("aboutPageTechnoList",{returnObjects:!0}).map((function(e,n){return Object(h.jsx)("li",{children:e},n)}))})]}),Object(h.jsx)("div",{className:"picture-container",children:Object(h.jsx)("div",{id:"wrapper",children:Object(h.jsx)("img",{src:re,alt:"manki"})})})]})]})},le=u.b.div(E||(E=Object(p.a)(["\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  #pre-title {\n    color: ",";\n    font-size: ",";\n  }\n\n  #title-name {\n    color: ",";\n  }\n\n  #title-whoami {\n    color: ",";\n  }\n\n  #title-name,\n  #title-whoami {\n    font-size: clamp(40px, 8vw, 80px);\n    font-weight: bold;\n  }\n\n  #small-intro {\n    color: ",";\n    margin-top: 20px;\n    font-size: 20px;\n  }\n"])),(function(e){return e.theme.colors.appGreenColor}),(function(e){var n=e.theme;return"clamp(".concat(n.fontSize.sm,", 5vw, ").concat(n.fontSize.md,")")}),(function(e){return e.theme.colors.appLightestSlateColor}),(function(e){return e.theme.colors.appLightSlateColor}),(function(e){return e.theme.colors.appSlateColor})),pe=function(){var e=Object(ne.a)().t;return Object(h.jsxs)(le,{id:"home-page",children:[Object(h.jsxs)("div",{id:"pre-title",children:[" ",e("homePagePreTitle")," "]}),Object(h.jsxs)("div",{id:"title-name",children:[e("homePageFullName"),"."]}),Object(h.jsxs)("div",{id:"title-whoami",children:[e("homePageWhoami"),"."]}),Object(h.jsxs)("div",{id:"small-intro",children:[e("homePageSmallIntro")," "]})]})},ue=u.b.div(J||(J=Object(p.a)(["\n  padding: 100px 0px;\n  .content {\n    ","\n    .job-tabs {\n      ","\n      button {\n        max-width: 90px;\n        height: 42px;\n        min-width: ",";\n        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n        display: flex;\n        -webkit-box-align: center;\n        align-items: center;\n        background-color: transparent;\n        color: ",";\n        font-family: monospace;\n        font-size: 15px;\n        text-align: left;\n        padding: ",";\n\n        cursor: pointer;\n        border: 0px;\n        border-radius: 0px;\n        ","\n        ",";\n      }\n\n      button:hover,\n      .selected {\n        color: ",";\n        ","\n        ",";\n      }\n\n      button:hover {\n        background-color: ",";\n      }\n    }\n\n    .job-description {\n      padding: 10px 5px;\n      h3 {\n        margin: 0px;\n        margin-bottom: 2px;\n      }\n      p {\n        font-family: monospace;\n        font-size: 0.7em;\n        margin-top: 0px;\n        margin-bottom: 25px;\n      }\n      a {\n        color: ",";\n      }\n    }\n  }\n"])),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n      display: grid;\n      grid-template-columns: 1fr 3fr;\n    ":""}),(function(e){return e.width>e.theme.widthBreakpoints.md?"\n          ":"\n        display: flex;\n        overflow-x: auto;\n        margin-bottom: 25px;\n      "}),(function(e){return e.width>e.theme.widthBreakpoints.md?"100%":"fit-content"}),(function(e){return e.theme.colors.appSlateColor}),(function(e){return e.width>e.theme.widthBreakpoints.md?"30px 10px":"10px 30px"}),(function(e){return e.width>e.theme.widthBreakpoints.md?"border-left: 2px solid":"border-bottom: 2px solid"}),(function(e){return e.theme.colors.appLightestNavyColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.width>e.theme.widthBreakpoints.md?"border-left: 2px solid":"border-bottom: 2px solid"}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appLightestNavyColor}),(function(e){return e.theme.colors.appGreenColor})),de=function(e){var n=e.content,t=void 0===n?[]:n,o=e.title,r=void 0===o?"":o,i=e.companyName,a=void 0===i?"":i,c=e.companyLink,s=void 0===c?"":c,l=e.timeframe,p=void 0===l?"":l,u=e.hidden,d=void 0===u||u;return Object(h.jsxs)("div",{hidden:d,children:[Object(h.jsxs)("h3",{children:[r," ",Object(h.jsxs)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:["@ ",a]})]}),Object(h.jsx)("p",{children:p}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"styled-list",children:t.map((function(e,n){return Object(h.jsx)("li",{children:e},n)}))})})]})},he=function(){var e=Object(i.useState)(0),n=Object(l.a)(e,2),t=n[0],o=n[1],r=b(),a=Object(l.a)(r,1)[0],c=Object(ne.a)().t;return Object(h.jsxs)(ue,{id:"experience-page",width:a,children:[Object(h.jsx)("h2",{children:c("experiencePageTitle")}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsx)("div",{className:"job-tabs",children:c("experiencePageJobs",{returnObjects:!0})instanceof Array&&c("experiencePageJobs",{returnObjects:!0}).map((function(e,n){var r=e.tabName;return Object(h.jsx)("button",{className:t===n?"selected":"",onClick:function(){return o(n)},children:r},n)}))}),Object(h.jsx)("div",{className:"job-description",children:c("experiencePageJobs",{returnObjects:!0})instanceof Array&&c("experiencePageJobs",{returnObjects:!0}).map((function(e,n){var o=e.jobTitle,r=e.companyName,i=e.companyLink,a=e.timeframe,c=e.content;return Object(h.jsx)(de,{title:o,companyName:r,companyLink:i,timeframe:a,content:c,hidden:t!==n},n)}))})]})]})},me=u.b.div(R||(R=Object(p.a)(["\n  padding: 100px 0px;\n"]))),be=function(){var e=Object(ne.a)().t;return Object(h.jsxs)(me,{id:"work-page",children:[Object(h.jsx)("h2",{children:e("workPageTitle")}),Object(h.jsx)("p",{children:e("workPageWip")})]})},fe=t(31),ge=u.b.div(H||(H=Object(p.a)(["\n    padding: 100px 0px;\n    text-align: center;\n    div {\n      font-size: ",";\n        display: grid;\n    }\n"])),(function(e){var n=e.theme;return"clamp(".concat(n.fontSize.md,", 5vw, ").concat(n.fontSize.xxl,")")})),xe=function(){var e=Object(ne.a)().t;return Object(h.jsxs)(ge,{id:"contact-page",children:[Object(h.jsx)("h2",{children:e("contactPageTitle")}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:e("contactPageParagraph1")}),Object(h.jsx)("p",{children:e("contactPageParagraph2")}),Object(h.jsxs)("p",{children:[Object(h.jsx)(w,{title:Object(h.jsxs)(h.Fragment,{children:["LinkedIn ",Object(h.jsx)(fe.a,{})]}),href:"https://www.linkedin.com/in/myriam-anki-8b9258198/"}),Object(h.jsx)(w,{title:Object(h.jsxs)(h.Fragment,{children:["Mail ",Object(h.jsx)(x.a,{})]}),href:"mailto:myriam.anki.pro@gmail.com"})]})]})]})},je=u.b.footer(q||(q=Object(p.a)(["\n  bottom: 0;\n  width: 70vw;\n  margin-left: auto;\n  margin-right: auto;\n  font-size: 0.9em;\n  p {\n    font-family: monospace;\n    text-align: center;\n  }\n"]))),ve=function(){var e=Object(ne.a)().t;return Object(h.jsx)(je,{children:Object(h.jsxs)("p",{children:[e("footerDisclaimerText")," ",Object(h.jsx)("br",{}),e("footerInspiredByText")," ",Object(h.jsx)("a",{target:"_blank",href:"https://brittanychiang.com/",rel:"noopener noreferrer",children:e("footerBrittanyChiangPortfolioText")}),".",Object(h.jsx)("br",{}),e("footerPleaseCheckHerOutText")]})})},Oe=u.b.div(_||(_=Object(p.a)(["\n  padding: ",";\n  display: flex;\n  flex-direction: column;\n  ",";\n"])),(function(e){var n=e.width,t=e.theme;return n>t.widthBreakpoints.md?"0px 150px":n>t.widthBreakpoints.sm?"0px 75px":"0px 25px"}),(function(e){return e.blurContent?"{ div { filter: blur(5px); }":""})),we=function(e){var n=e.blurContent,t=void 0!==n&&n,o=b(),r=Object(l.a)(o,1)[0];return Object(h.jsxs)(Oe,{width:r,blurContent:t,children:[Object(h.jsx)(pe,{}),Object(h.jsx)(se,{}),Object(h.jsx)(he,{}),Object(h.jsx)(be,{}),Object(h.jsx)(xe,{}),Object(h.jsx)(ve,{})]})},ke={colors:{appNavyColor:"#0a192f",appLightNavyColor:"#112240",appLightestNavyColor:"#233554",appNavyShadowColor:"rgba(2,12,27,0.7)",appSlateColor:"#8892b0",appLightSlateColor:"#a8b2d1",appLightestSlateColor:"#ccd6f6",appWhiteColor:"#e6f1ff",appGreenColor:"#64ffda",appGreenTextBackgroundColor:"#133141"},fontSize:{xxs:"12px",xs:"13px",sm:"14px",md:"16px",lg:"18px",xl:"20px",xxl:"22px",heading:"32px"},widthBreakpoints:{sm:640,md:800,header:900,lg:1024},fontMono:'"SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace',transition:"all 0.25s cubic-bezier(0.645,0.045,0.355,1)",headerMargin:"10px",borderRadius:"4px"},ye=u.b.div(U||(U=Object(p.a)(["\n  & > * { background-color: ","; }\n  * { box-sizing: border-box; } \n  display: flex;\n  counter-set: headerCounter 5 h2Counter 0;\n  color: ",";\n\n  a,\n  button {\n    color: inherit;\n    text-decoration: none;\n    transition: ",";\n    cursor: pointer;\n  }\n  p > a,\n  h3 > a {\n    color: ",";\n    outline: 0px;\n    display: inline-block;\n    position: relative;\n    text-decoration: none;\n    text-decoration-skip-ink: auto;\n    transition: ",';\n  }\n  p > a::after,\n  h3 > a::after {\n    content: "";\n    display: block;\n    width: 0px;\n    height: 1px;\n    position: relative;\n    background-color: ',";\n    transition: ",";\n    opacity: 0.5;\n    box-sizing: inherit;\n  }\n  p > a:focus,\n  h3 > a:focus,\n  p > a:hover,\n  h3 > a:hover {\n    outline-offset: 3px;\n  }\n  p > a:hover::after,\n  h3 > a:hover::after {\n    width: 100%;\n  }\n\n  h1,\n  h2,\n  h3 {\n    font-weight: 600;\n    color: ",";\n  }\n\n  h3 {\n    font-size: 22px;\n  }\n\n  div {\n    font-size: 1.1em;\n  }\n\n  p,\n  ol,\n  li {\n    color: ",';\n    font-size: 1.1em;\n  }\n\n  .styled-list {\n    margin: 0px;\n    padding: 0px;\n    li {\n      list-style-type: none;\n      font-size: 18px;\n      position: relative;\n      padding-left: 30px;\n      margin-bottom: 10px;\n    }\n    li::before {\n      content: "\u25b9";\n      position: absolute;\n      left: 0px;\n      color: ',';\n    }\n  }\n\n  h2::before {\n    position: relative;\n    counter-increment: h2Counter 1;\n    content: "0" counter(h2Counter) ".";\n    margin-right: 10px;\n    color: ',";\n    font-family: ",";\n    font-weight: 400;\n  }\n\n  h2 {\n    display: flex;\n    align-items: center;\n    position: relative;\n    margin: 10px 0px 40px;\n    width: 100%;\n    font-size: clamp(26px, 5vw, ",");\n    white-space: nowrap;\n    line-height: 1.1;\n  }\n\n  .slate-color {\n    color: ",";\n  }\n"])),(function(e){return e.theme.colors.appNavyColor}),(function(e){return e.theme.colors.appWhiteColor}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.transition}),(function(e){return e.theme.colors.appLightestSlateColor}),(function(e){return e.theme.colors.appSlateColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.colors.appGreenColor}),(function(e){return e.theme.fontMono}),(function(e){return e.theme.fontSize.heading}),(function(e){return e.theme.colors.appSlateColor}));var Pe=function(){var e=Object(i.useState)(!1),n=Object(l.a)(e,2),t=n[0],o=n[1];return Object(h.jsx)(u.a,{theme:ke,children:Object(h.jsx)(ye,{className:"approot",children:Object(h.jsx)(P,{children:Object(h.jsxs)(f,{children:[Object(h.jsx)(ae,{}),Object(h.jsx)(oe,{setBlurContent:o}),Object(h.jsx)(we,{blurContent:t}),Object(h.jsx)(v,{})]})})})})},Ce=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,48)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),o(e),r(e),i(e),a(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(Pe,{})}),document.getElementById("root")),Ce()}},[[46,1,2]]]);
//# sourceMappingURL=main.8a50d1c8.chunk.js.map