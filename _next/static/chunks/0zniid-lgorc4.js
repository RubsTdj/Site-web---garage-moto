(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95057,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var r in a)Object.defineProperty(s,r,{enumerable:!0,get:a[r]});let n=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:s}=e,a=e.protocol||"",r=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:s&&(c=t+(~s.indexOf(":")?`[${s}]`:s),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==c?(c="//"+(c||""),r&&"/"!==r[0]&&(r="/"+r)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),r=r.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${a}${c}${r}${u}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},18581,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"useMergedRef",{enumerable:!0,get:function(){return r}});let a=e.r(71645);function r(e,t){let s=(0,a.useRef)(null),r=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=s.current;e&&(s.current=null,e());let t=r.current;t&&(r.current=null,t())}else e&&(s.current=n(e,a)),t&&(r.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let s=e(t);return"function"==typeof s?s:()=>e(null)}}("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),t.exports=s.default)},73668,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(18967),r=e.r(52817);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),s=new URL(e,t);return s.origin===t&&(0,r.hasBasePath)(s.pathname)}catch(e){return!1}}},84508,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},22016,(e,t,s)=>{"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a={default:function(){return g},useLinkStatus:function(){return b}};for(var r in a)Object.defineProperty(s,r,{enumerable:!0,get:a[r]});let n=e.r(90809),o=e.r(43476),i=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),u=e.r(18581),d=e.r(18967),x=e.r(5550);e.r(33525);let m=e.r(88540),p=e.r(91949),f=e.r(73668),h=e.r(9396);function g(t){var s,a;let r,n,g,[b,j]=(0,i.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,i.useRef)(null),{href:N,as:w,children:C,prefetch:S=null,passHref:L,replace:q,shallow:P,scroll:k,onClick:R,onMouseEnter:M,onTouchStart:O,legacyBehavior:z=!1,onNavigate:D,transitionTypes:T,ref:A,unstable_dynamicOnHover:E,..._}=t;r=C,z&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let V=i.default.useContext(c.AppRouterContext),G=!1!==S,U=!1!==S?null===(a=S)||"auto"===a?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,$="string"==typeof(s=w||N)?s:(0,l.formatUrl)(s);if(z){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(r)}let I=z?n&&"object"==typeof n&&n.ref:A,B=i.default.useCallback(e=>(null!==V&&(y.current=(0,p.mountLinkInstance)(e,$,V,U,G,j)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[G,$,V,U,j]),F={ref:(0,u.useMergedRef)(B,I),onClick(t){z||"function"!=typeof R||R(t),z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!V||t.defaultPrevented||function(t,s,a,r,n,o,l){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(s)){r&&(t.preventDefault(),location.replace(s));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(99781);i.default.startTransition(()=>{d(s,r?"replace":"push",!1===n?m.ScrollBehavior.NoScroll:m.ScrollBehavior.Default,a.current,l)})}}(t,$,y,q,k,D,T)},onMouseEnter(e){z||"function"!=typeof M||M(e),z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),V&&G&&(0,p.onNavigationIntent)(e.currentTarget,!0===E)},onTouchStart:function(e){z||"function"!=typeof O||O(e),z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),V&&G&&(0,p.onNavigationIntent)(e.currentTarget,!0===E)}};return(0,d.isAbsoluteUrl)($)?F.href=$:z&&!L&&("a"!==n.type||"href"in n.props)||(F.href=(0,x.addBasePath)($)),g=z?i.default.cloneElement(n,F):(0,o.jsx)("a",{..._,...F,children:r}),(0,o.jsx)(v.Provider,{value:b,children:g})}e.r(84508);let v=(0,i.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,i.useContext)(v);("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{value:!0}),Object.assign(s.default,s),t.exports=s.default)},95116,e=>{"use strict";let t=(0,e.i(75254).default)("wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]]);e.s(["Wrench",0,t],95116)},43985,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim()])},23846,81996,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],23846),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],81996)},58541,e=>{"use strict";var t=e.i(71645),s=e.i(23846),a=e.i(81996),r=e.i(43985);let n=(0,t.createContext)({}),o=(0,t.forwardRef)(({color:e,size:o,strokeWidth:i,absoluteStrokeWidth:l,className:c="",children:u,iconNode:d,...x},m)=>{let{size:p=24,strokeWidth:f=2,absoluteStrokeWidth:h=!1,color:g="currentColor",className:v=""}=(0,t.useContext)(n)??{},b=l??h?24*Number(i??f)/Number(o??p):i??f;return(0,t.createElement)("svg",{ref:m,...s.default,width:o??p??s.default.width,height:o??p??s.default.height,stroke:e??g,strokeWidth:b,className:(0,r.mergeClasses)("lucide",v,c),...!u&&!(0,a.hasA11yProp)(x)&&{"aria-hidden":"true"},...x},[...d.map(([e,s])=>(0,t.createElement)(e,s)),...Array.isArray(u)?u:[u]])});e.s(["default",0,o],58541)},75254,e=>{"use strict";var t=e.i(71645),s=e.i(43985);let a=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,s)=>s?s.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var r=e.i(58541);e.s(["default",0,(e,n)=>{let o=(0,t.forwardRef)(({className:o,...i},l)=>(0,t.createElement)(r.default,{ref:l,iconNode:n,className:(0,s.mergeClasses)(`lucide-${a(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...i}));return o.displayName=a(e),o}],75254)},37727,e=>{"use strict";let t=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",0,t],37727)},92161,e=>{"use strict";let t=(0,e.i(75254).default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);e.s(["Menu",0,t],92161)},45678,e=>{"use strict";var t=e.i(43476),s=e.i(71645),a=e.i(22016),r=e.i(92161),n=e.i(37727),o=e.i(95116);let i=[{href:"/#portail-client",label:"Portail client"},{href:"/#dashboard",label:"Dashboard"},{href:"/#fonctionnalites",label:"Comment ça marche"},{href:"/#tarifs",label:"Tarifs"},{href:"/blog",label:"Blog"}];e.s(["default",0,function(){let[e,l]=(0,s.useState)(!1),[c,u]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>u(window.scrollY>20);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsxs)("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${c?"bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100":"bg-transparent"}`,children:[(0,t.jsxs)("nav",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[(0,t.jsxs)(a.default,{href:"/",className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center",children:(0,t.jsx)(o.Wrench,{className:"w-4 h-4 text-orange-400"})}),(0,t.jsxs)("span",{className:"font-bold text-xl text-slate-900",children:["Garage",(0,t.jsx)("span",{className:"text-orange-500",children:"OS"})]})]}),(0,t.jsx)("div",{className:"hidden md:flex items-center gap-8",children:i.map(e=>(0,t.jsx)(a.default,{href:e.href,className:"text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors",children:e.label},e.href))}),(0,t.jsxs)("div",{className:"hidden md:flex items-center gap-3",children:[(0,t.jsx)(a.default,{href:"/login",className:"text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors",children:"Connexion"}),(0,t.jsx)(a.default,{href:"/#contact",className:"text-sm font-semibold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-lg transition-colors",children:"Démo gratuite"})]}),(0,t.jsx)("button",{className:"md:hidden p-2 text-slate-700",onClick:()=>l(!e),"aria-label":"Menu",children:e?(0,t.jsx)(n.X,{className:"w-5 h-5"}):(0,t.jsx)(r.Menu,{className:"w-5 h-5"})})]}),e&&(0,t.jsxs)("div",{className:"md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-1",children:[i.map(e=>(0,t.jsx)(a.default,{href:e.href,onClick:()=>l(!1),className:"block text-sm font-medium text-slate-700 hover:text-orange-500 py-2.5 border-b border-slate-50 last:border-0",children:e.label},e.href)),(0,t.jsx)(a.default,{href:"/login",onClick:()=>l(!1),className:"block text-sm font-medium text-slate-600 py-2.5 border-b border-slate-50",children:"Connexion"}),(0,t.jsx)(a.default,{href:"/#contact",onClick:()=>l(!1),className:"block text-sm font-semibold bg-slate-900 text-white text-center py-3 rounded-xl mt-3",children:"Demander une démo"})]})]})}])},72520,e=>{"use strict";let t=(0,e.i(75254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],72520)},3116,e=>{"use strict";let t=(0,e.i(75254).default)("clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]);e.s(["Clock",0,t],3116)},24414,e=>{"use strict";var t=e.i(43476),s=e.i(22016),a=e.i(45678),r=e.i(95116);let n={Produit:[{label:"Portail client",href:"/#portail-client"},{label:"Dashboard",href:"/#dashboard"},{label:"Automatisations",href:"/#fonctionnalites"},{label:"Tarifs",href:"/#tarifs"}],Ressources:[{label:"Blog",href:"/blog"},{label:"Documentation",href:"/docs"},{label:"Changelog",href:"#"},{label:"Statut",href:"#"}],Entreprise:[{label:"À propos",href:"/about"},{label:"Contact",href:"/#contact"},{label:"Partenaires",href:"#"}],Légal:[{label:"Mentions légales",href:"#"},{label:"Confidentialité",href:"#"},{label:"CGV",href:"#"}]};function o(){return(0,t.jsx)("footer",{className:"bg-slate-900 border-t border-white/10",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-10",children:[(0,t.jsxs)("div",{className:"col-span-2 md:col-span-1",children:[(0,t.jsxs)(s.default,{href:"/",className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)("div",{className:"w-8 h-8 bg-slate-800 border border-white/10 rounded-lg flex items-center justify-center",children:(0,t.jsx)(r.Wrench,{className:"w-4 h-4 text-orange-400"})}),(0,t.jsxs)("span",{className:"font-bold text-lg text-white",children:["Garage",(0,t.jsx)("span",{className:"text-orange-500",children:"OS"})]})]}),(0,t.jsx)("p",{className:"text-sm text-slate-500 leading-relaxed",children:"Le système d'exploitation de votre garage moto."})]}),Object.entries(n).map(([e,a])=>(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"text-white text-xs font-semibold uppercase tracking-widest mb-4",children:e}),(0,t.jsx)("ul",{className:"space-y-2.5",children:a.map(({label:e,href:a})=>(0,t.jsx)("li",{children:(0,t.jsx)(s.default,{href:a,className:"text-sm text-slate-500 hover:text-slate-300 transition-colors",children:e})},e))})]},e))]}),(0,t.jsxs)("div",{className:"mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3",children:[(0,t.jsxs)("p",{className:"text-xs text-slate-600",children:["© ",new Date().getFullYear()," GarageOS. Tous droits réservés."]}),(0,t.jsx)("p",{className:"text-xs text-slate-600",children:"Fait avec passion pour les garages moto français 🏍️"})]})]})})}var i=e.i(72520),l=e.i(3116);let c=[{slug:"fidelisation-clients-moto",title:"5 façons de fidéliser vos clients moto sans effort",excerpt:"La fidélisation client est le nerf de la guerre pour un garage moto. Voici 5 techniques concrètes, applicables immédiatement, qui transforment un client occasionnel en ambassadeur.",category:"Fidélisation",readTime:"6 min",date:"12 mars 2025",author:{name:"Antoine Rousseau",initials:"AR",role:"CEO, GarageOS"},content:`
## Pourquoi la fid\xe9lisation est cruciale pour un garage moto

Un client fid\xe8le d\xe9pense en moyenne **3x plus** qu'un nouveau client sur 3 ans. Pourtant, la plupart des garages moto investissent tout leur \xe9nergie \xe0 en acqu\xe9rir de nouveaux — souvent au d\xe9triment de ceux d\xe9j\xe0 en portefeuille.

Voici 5 leviers concrets pour changer \xe7a.

## 1. Le portail client : donnez-leur le contr\xf4le

La premi\xe8re source de frustration des motards ? Ne pas savoir o\xf9 en est leur moto. Proposez un espace en ligne o\xf9 ils peuvent :
- Suivre l'avancement de l'intervention en temps r\xe9el
- Consulter l'historique complet (depuis quand vous les connaissez)
- T\xe9l\xe9charger leurs factures sans vous appeler

**R\xe9sultat :** moins d'appels entrants, clients rassur\xe9s, sentiment de transparence.

## 2. Les rappels automatiques de r\xe9vision

Votre client ne sait jamais quand faire r\xe9viser sa moto. Lui envoyer un SMS automatique au bon moment (avant la date de r\xe9vision, avant un contr\xf4le technique) vous positionne comme un partenaire de confiance, pas juste un prestataire.

> "J'ai r\xe9cup\xe9r\xe9 30% de mes anciens clients inactifs en 6 mois gr\xe2ce aux rappels automatiques." — Marc G., Girard Racing Bordeaux

## 3. La photo \xe0 la livraison

Prenez une photo de la moto au moment de la restitution. Envoyez-la au client avec un r\xe9sum\xe9 des travaux effectu\xe9s. C'est simple, \xe7a prend 30 secondes, et \xe7a cr\xe9e un souvenir positif associ\xe9 \xe0 votre garage.

## 4. Le suivi des pneus us\xe9s

Lors de chaque r\xe9vision, notez l'\xe9tat des pneus dans le dossier client. Quand ils approchent de l'usure, envoyez un message proactif. Le client commande chez vous avant m\xeame d'y penser.

## 5. L'anniversaire de la moto

Envoyez un message le jour de la date d'achat de la moto (ou de la premi\xe8re visite). Simple, humain, inattendu. \xc7a marque.

---

Ces 5 actions se font toutes automatiquement avec GarageOS. Pas de saisie manuelle, pas de tableur. Juste du temps r\xe9cup\xe9r\xe9 et des clients qui reviennent.
    `},{slug:"automatiser-prise-rdv",title:"Comment automatiser la prise de RDV dans votre garage moto",excerpt:"La prise de RDV par téléphone est chronophage et source d'erreurs. Voici comment passer à un système 100% automatique qui fonctionne même quand vous dormez.",category:"Automatisation",readTime:"5 min",date:"28 février 2025",author:{name:"Clara Morin",initials:"CM",role:"CTO, GarageOS"},content:`
## Le probl\xe8me de l'agenda papier

Combien de fois avez-vous eu une double r\xe9servation ? Combien de clients n'ont pas rappel\xe9 apr\xe8s un message laiss\xe9 ? Combien de cr\xe9neaux vides car le client a oubli\xe9 ?

L'agenda papier (ou l'agenda Google non connect\xe9 \xe0 votre flux client) cr\xe9e des frictions inutiles.

## La prise de RDV en ligne : comment \xe7a marche

Un syst\xe8me de r\xe9servation en ligne bien configur\xe9 permet \xe0 votre client de :
1. Choisir le type d'intervention (r\xe9vision, pneus, diagnostic...)
2. Voir vos cr\xe9neaux disponibles en temps r\xe9el
3. Confirmer son RDV depuis son smartphone en 2 minutes

**Vous recevez** une notification et le RDV s'ajoute \xe0 votre agenda automatiquement.

## Les r\xe8gles \xe0 configurer

Pour que \xe7a fonctionne sans friction :
- **D\xe9lai minimum** : emp\xeachez les r\xe9servations moins de 24h avant
- **Dur\xe9e par type** : r\xe9vision = 2h, pose pneus = 45min, diagnostic = 1h
- **Capacit\xe9 simultan\xe9e** : si vous avez 2 techniciens, 2 motos max en m\xeame temps
- **Rappels automatiques** : SMS \xe0 J-2 et J-1

## Le cas Allopneus / 1001Pneus

C'est l\xe0 que l'automatisation devient vraiment puissante. Quand un client commande ses pneus en ligne et les fait livrer chez vous :

1. Vous recevez un e-mail de confirmation de livraison
2. GarageOS le d\xe9tecte et envoie automatiquement un SMS au client
3. Le client clique sur le lien et choisit son cr\xe9neau
4. L'agenda se met \xe0 jour

**Temps pass\xe9 par vous : 0 seconde.**

## R\xe9sultat mesurable

Les garages qui utilisent la prise de RDV automatis\xe9e constatent :
- **-70%** d'appels entrants pour les r\xe9servations
- **+20%** de taux de pr\xe9sence (moins de no-show gr\xe2ce aux rappels)
- **+40min/jour** r\xe9cup\xe9r\xe9es en moyenne
    `},{slug:"integration-allopneus-garage",title:"Allopneus & 1001Pneus : intégrez vos commandes à votre garage",excerpt:"Vous recevez des livraisons Allopneus tous les jours mais gérez encore tout manuellement ? Voici comment connecter ces flux à votre gestion de garage.",category:"Intégrations",readTime:"7 min",date:"14 février 2025",author:{name:"Raphaël Leclercq",initials:"RL",role:"Customer Success, GarageOS"},content:`
## Le contexte : la mont\xe9e des commandes pneus en ligne

En 2024, plus de 45% des pneus moto en France sont achet\xe9s en ligne. La majorit\xe9 des clients font livrer chez leur garage de confiance pour la pose. C'est une opportunit\xe9 — mais aussi un d\xe9fi logistique.

Chaque commande g\xe9n\xe8re :
- Un e-mail de confirmation de livraison
- Un appel ou SMS \xe0 passer au client
- Un RDV \xe0 cr\xe9er dans l'agenda
- Un stock temporaire \xe0 g\xe9rer
- Une facture de pose \xe0 \xe9mettre

Multipli\xe9 par 3 \xe0 10 commandes par semaine, \xe7a repr\xe9sente **2 \xe0 4 heures de travail administratif** que vous pourriez \xe9liminer.

## Comment fonctionne l'int\xe9gration

GarageOS connecte votre bo\xeete e-mail (ou une adresse d\xe9di\xe9e) aux flux des revendeurs partenaires. Le syst\xe8me :

1. **D\xe9tecte** l'e-mail de confirmation de livraison
2. **Identifie** le client dans votre base (par nom ou num\xe9ro de commande)
3. **Envoie** un SMS automatique avec un lien de r\xe9servation
4. **Cr\xe9e** le RDV dans votre agenda d\xe8s que le client confirme
5. **Pr\xe9-remplit** la fiche intervention avec les r\xe9f\xe9rences des pneus

## Revendeurs support\xe9s

- ✅ Allopneus.com
- ✅ 1001Pneus.fr
- ✅ Moto-Net.Com
- ✅ Motoblouz
- 🔜 Dafy Moto (Q2 2025)
- 🔜 Connexion directe API (plan Entreprise)

## Configuration en 10 minutes

La mise en place se fait en trois \xe9tapes :
1. Connectez votre adresse e-mail fournisseur dans les param\xe8tres GarageOS
2. D\xe9finissez le template de SMS envoy\xe9 au client
3. Activez la r\xe8gle d'automatisation

Aucune comp\xe9tence technique requise. Notre \xe9quipe support vous accompagne si besoin.

## Ce que \xe7a change concr\xe8tement

> "Avant je passais 45 minutes par commande pneu. Maintenant c'est z\xe9ro. Le client re\xe7oit son SMS, il r\xe9serve, et je vois le RDV dans mon agenda le matin. Je ne fais plus rien." — Sandrine L., Leblanc Moto Lyon
    `},{slug:"rgpd-garage-moto-2025",title:"RGPD et garage moto : ce qu'il faut savoir en 2025",excerpt:"Vous collectez des données clients (e-mails, téléphones, historique moto). Le RGPD s'applique à vous. Voici ce que vous devez faire concrètement.",category:"Réglementation",readTime:"8 min",date:"3 janvier 2025",author:{name:"Sophie Bernard",initials:"SB",role:"Head of Product, GarageOS"},content:`
## RGPD : \xeates-vous concern\xe9 ?

Oui. D\xe8s que vous stockez des donn\xe9es personnelles de clients (nom, pr\xe9nom, t\xe9l\xe9phone, e-mail, plaque d'immatriculation), vous \xeates soumis au RGPD. Peu importe la taille de votre garage.

## Ce que le RGPD exige concr\xe8tement

### 1. Une base l\xe9gale pour chaque traitement

Vous devez avoir une raison l\xe9gale pour chaque usage des donn\xe9es :
- **Contrat** : vous utilisez les donn\xe9es pour ex\xe9cuter la prestation (facturation, RDV)
- **Consentement** : pour l'envoi de newsletters ou SMS marketing

### 2. L'information des clients

Vos clients doivent savoir :
- Quelles donn\xe9es vous collectez
- Pourquoi vous les collectez
- Combien de temps vous les conservez
- Leurs droits (acc\xe8s, rectification, suppression)

Une mention dans vos CGV ou sur votre site web suffit.

### 3. La dur\xe9e de conservation

Les donn\xe9es clients doivent \xeatre supprim\xe9es apr\xe8s une certaine p\xe9riode d'inactivit\xe9. La CNIL recommande 3 ans pour les donn\xe9es clients inactifs.

### 4. La s\xe9curit\xe9 des donn\xe9es

Vos donn\xe9es clients ne doivent pas \xeatre stock\xe9es dans un fichier Excel non prot\xe9g\xe9 envoy\xe9 par e-mail. C'est une violation potentielle.

## Ce que GarageOS fait pour vous

GarageOS est con\xe7u avec le RGPD en t\xeate :
- Donn\xe9es h\xe9berg\xe9es en France (OVH Cloud)
- Chiffrement en transit et au repos
- Mentions l\xe9gales et politique de confidentialit\xe9 fournies
- Gestion des droits d'acc\xe8s (qui voit quoi dans votre \xe9quipe)
- Export et suppression des donn\xe9es \xe0 la demande

## La liste de contr\xf4le rapide

- [ ] Politique de confidentialit\xe9 sur votre site web ou dans vos documents
- [ ] Consentement avant envoi de SMS/e-mail marketing
- [ ] Donn\xe9es stock\xe9es dans un outil s\xe9curis\xe9 (pas un Excel partag\xe9)
- [ ] Proc\xe9dure pour r\xe9pondre aux demandes de suppression client

En cas de doute, la CNIL propose un guide gratuit pour les TPE/PME sur son site.
    `}],u=["Tous","Fidélisation","Automatisation","Intégrations","Réglementation"];e.s(["default",0,function(){let[e,...r]=c;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.default,{}),(0,t.jsxs)("main",{children:[(0,t.jsx)("section",{className:"pt-32 pb-16 bg-white",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsxs)("div",{className:"text-center mb-12",children:[(0,t.jsx)("p",{className:"text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3",children:"Le blog GarageOS"}),(0,t.jsx)("h1",{className:"text-5xl font-bold text-slate-900 mb-4",children:"Conseils pour votre garage moto"}),(0,t.jsx)("p",{className:"text-xl text-slate-500 max-w-2xl mx-auto",children:"Fidélisation, automatisation, gestion — tout ce qu'il faut savoir pour faire tourner un garage moderne."})]}),(0,t.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-2",children:u.map(e=>(0,t.jsx)("span",{className:`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors ${"Tous"===e?"bg-slate-900 text-white":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:e},e))})]})}),(0,t.jsx)("section",{className:"pb-12 bg-white",children:(0,t.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,t.jsx)(s.default,{href:`/blog/${e.slug}`,className:"group block",children:(0,t.jsxs)("div",{className:"bg-slate-900 rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center hover:bg-slate-800 transition-colors",children:[(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-5",children:[(0,t.jsx)("span",{className:"bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full",children:e.category}),(0,t.jsxs)("span",{className:"text-slate-500 text-xs flex items-center gap-1",children:[(0,t.jsx)(l.Clock,{className:"w-3.5 h-3.5"}),e.readTime," de lecture"]})]}),(0,t.jsx)("h2",{className:"text-3xl font-bold text-white mb-4 leading-snug group-hover:text-orange-400 transition-colors",children:e.title}),(0,t.jsx)("p",{className:"text-slate-400 leading-relaxed mb-6",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[(0,t.jsx)("div",{className:"w-9 h-9 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0",children:e.author.initials}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-sm font-semibold text-white",children:e.author.name}),(0,t.jsx)("div",{className:"text-xs text-slate-500",children:e.date})]})]})]}),(0,t.jsx)("div",{className:"flex justify-end",children:(0,t.jsxs)("div",{className:"inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl group-hover:bg-orange-600 transition-colors",children:["Lire l'article",(0,t.jsx)(i.ArrowRight,{className:"w-4 h-4"})]})})]})})})}),(0,t.jsx)("section",{className:"pb-24 bg-white",children:(0,t.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,t.jsx)("h2",{className:"text-lg font-semibold text-slate-900 mb-6",children:"Tous les articles"}),(0,t.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:r.map(e=>(0,t.jsx)(s.default,{href:`/blog/${e.slug}`,className:"group",children:(0,t.jsxs)("div",{className:"border border-slate-200 rounded-2xl p-6 hover:border-orange-200 hover:shadow-md transition-all h-full flex flex-col",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,t.jsx)("span",{className:"bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full",children:e.category}),(0,t.jsxs)("span",{className:"text-slate-400 text-xs flex items-center gap-1",children:[(0,t.jsx)(l.Clock,{className:"w-3 h-3"}),e.readTime]})]}),(0,t.jsx)("h3",{className:"font-bold text-slate-900 mb-3 leading-snug group-hover:text-orange-500 transition-colors flex-1",children:e.title}),(0,t.jsx)("p",{className:"text-sm text-slate-500 leading-relaxed mb-5 line-clamp-3",children:e.excerpt}),(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"flex items-center gap-2",children:[(0,t.jsx)("div",{className:"w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold",children:e.author.initials}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"text-xs font-medium text-slate-700",children:e.author.name}),(0,t.jsx)("div",{className:"text-xs text-slate-400",children:e.date})]})]}),(0,t.jsx)(i.ArrowRight,{className:"w-4 h-4 text-slate-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"})]})]})},e.slug))})]})}),(0,t.jsx)("section",{className:"py-16 bg-slate-50",children:(0,t.jsxs)("div",{className:"max-w-xl mx-auto px-4 sm:px-6 text-center",children:[(0,t.jsx)("h2",{className:"text-2xl font-bold text-slate-900 mb-3",children:"Restez informé"}),(0,t.jsx)("p",{className:"text-slate-500 mb-6",children:"Un article par mois, directement dans votre boîte. Pas de spam."}),(0,t.jsxs)("form",{onSubmit:e=>e.preventDefault(),className:"flex gap-3",children:[(0,t.jsx)("input",{type:"email",placeholder:"votre@garage.fr",className:"flex-1 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"}),(0,t.jsx)("button",{type:"submit",className:"bg-slate-900 hover:bg-slate-800 text-white font-semibold px-5 py-3 rounded-xl text-sm transition-colors whitespace-nowrap",children:"S'abonner"})]})]})})]}),(0,t.jsx)(o,{})]})}],24414)}]);