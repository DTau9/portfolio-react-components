(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{159:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0),__webpack_require__(828);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(17),SocialNet=function SocialNet(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"socialnet",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:"socialnet__item socialnet__item_github",href:"https://github.com/DTau9",target:"_blank"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:"socialnet__item socialnet__item_mail",href:"mailto:di.tau9@gmail.com",target:"_blank"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:"socialnet__item socialnet__item_linkedin",href:"https://www.linkedin.com/in/дмитрий-тау-97a0311b9/",target:"_blank"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{className:"socialnet__item socialnet__item_telegram",href:"https://tlgg.ru/DmitrjTau",target:"_blank"})]})};SocialNet.displayName="SocialNet",SocialNet.__docgenInfo={description:"",methods:[],displayName:"SocialNet"},__webpack_exports__.a=SocialNet,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\socialNet\\SocialNet.jsx"]={name:"SocialNet",docgenInfo:SocialNet.__docgenInfo,path:"src\\components\\socialNet\\SocialNet.jsx"})},160:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=[{name:"contacts",screenName:"Контакты"},{name:"lmarkt",screenName:"Lmarkt",dateCreation:"15.06.2020",annotation:"Магазин музыкальных инструментов",adaptiveDesign:!0,device:["phone","tablet","desktop"],url:"https://dtau9.github.io/lmarkt/",description:["Адаптивная резиновая валидная семантичная верстка","Лайоут - комбинация Grid + Flexbox","Подключены кастомные шрифты","БЭМ, как нотация именования классов","Реализация выпадающего меню на чистом CSS","Карусели выполнены 2-я разными способами:",["- на ванильном JS","- c использованием плагина OwlCarousel"]]},{name:"russgaz",screenName:"Руссгаз",dateCreation:"15.06.2020",annotation:"Магазин продажи газа",device:["phone","tablet","desktop"],url:"https://dtau9.github.io/russgaz/",description:["Адаптивная резиновая семантичная верстка","Реализация выпадающего меню и карусели на чистом CSS","Гибкая настройка количества элементов в строке","Подключены кастомные шрифты"]},{name:"kvast",screenName:"Кваст",dateCreation:"15.06.2020",annotation:"Выпускная работа в HTML Academy",device:["desktop"],adaptiveDesign:!0,url:"https://dtau9.github.io/kvast/"},{name:"cm-expert",screenName:"Car Market",dateCreation:"15.06.2020",annotation:'ТЗ "cm.expert"',url:"https://dtau9.github.io/task_logo-autoexpert/"},{name:"snake-js-native",screenName:"Игра Змейка",dateCreation:"15.06.2020",annotation:"Написана на native JS",url:"https://dtau9.github.io/game-snake/"},{name:"snake-react",screenName:"Игра Змейка",dateCreation:"15.06.2020",annotation:"Написана на React",url:"https://dtau9.github.io/react-snake-component/"}]},464:function(module,exports,__webpack_require__){__webpack_require__(465),__webpack_require__(619),__webpack_require__(620),__webpack_require__(850),__webpack_require__(851),__webpack_require__(855),__webpack_require__(856),__webpack_require__(853),__webpack_require__(852),__webpack_require__(857),__webpack_require__(858),module.exports=__webpack_require__(822)},532:function(module,exports){},620:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(331)},820:function(module,exports,__webpack_require__){var api=__webpack_require__(127),content=__webpack_require__(821);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},821:function(module,exports,__webpack_require__){(exports=__webpack_require__(128)(!1)).push([module.i,":root {\n  --projects_width: 22.8vw;\n  --description_width: 65.3vw;\n  --projects_bg: #6BBAA3;\n  --projects-item_color: #FFE6FF;\n  --projects-item_color_active: #A0148E;\n  --description_bg: #AE7AA3;\n  --mediaMaxL: 1600px;\n  --mediaMaxM: 1250px;\n  --mediaMaxS: 767px;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  font-family: 'Roboto Condensed', sans-serif;\n  font-size: 10px;\n}\n\nbody {\n  color: #313628;\n  height: 100vh;\n  margin: 0;\n  overflow: hidden;\n  width: 100vw;\n}\n\n.theme-lmarkt {\n  --projects_bg: #6BBAA3;\n  --projects-item_color: #FFE6FF;\n  --projects-item_color_active: #A0148E;\n  --description_bg: #AE7AA3;\n}\n\n.theme-russgaz {\n  --projects_bg: #017DD8;\n  --projects-item_color: #E6F4F1;\n  --projects-item_color_active: #002670;\n  --description_bg: #A4ABBD;\n}\n\n.theme-kvast {\n  --projects_bg: #B08969;\n  --projects-item_color: #DFE0DF;\n  --projects-item_color_active: #834700;\n}\n\n.theme-contacts {\n  --projects_bg: #C3BAD8;\n  --projects-item_color: #D7E5E8;\n  --projects-item_color_active: #00486D;\n}\n\n.theme-cm-expert {\n  --projects_bg: #579395;\n  --projects-item_color: #BEFCFE;\n  --projects-item_color_active: #891F00;\n}\n\n.theme-snake-js-native {\n  --projects_bg: #B5B5B5;\n  --projects-item_color: #DDEEEF;\n  --projects-item_color_active: #474554;\n}\n\n.theme-snake-react {\n  --projects_bg: #9A6387;\n  --projects-item_color: #EFEFDC;\n  --projects-item_color_active: #5e3d19;\n}\n",""]),module.exports=exports},822:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(331).configure)([__webpack_require__(823),__webpack_require__(824)],module,!1)}).call(this,__webpack_require__(188)(module))},823:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=823},824:function(module,exports,__webpack_require__){var map={"./contacts/Contacts.stories.jsx":859,"./deviceSwitcher/DeviceSwitcher.stories.jsx":860,"./navMenu/NavMenu.stories.jsx":854,"./socialNet/socialNet.stories.jsx":845,"./viewSiteForDifferentDevices/ViewSiteForDifferentDevices.stories.jsx":861};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=824},828:function(module,exports,__webpack_require__){var api=__webpack_require__(127),content=__webpack_require__(829);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},829:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(128),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(194),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(830),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(831),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__(832),___CSS_LOADER_URL_IMPORT_3___=__webpack_require__(833);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___),___CSS_LOADER_URL_REPLACEMENT_3___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);exports.push([module.i,".socialnet {\n  display: flex;\n  gap: 2rem;\n}\n\n.socialnet__item {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  display: block;\n  height: 9rem;\n  opacity: 0.5;\n  width: 9rem;\n}\n\n.socialnet__item:hover {\n  opacity: 1;\n}\n\n.socialnet__item_github {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_0___+");\n}\n\n.socialnet__item_telegram {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_1___+");\n}\n\n.socialnet__item_linkedin {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_2___+");\n}\n\n.socialnet__item_mail {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_3___+");\n}\n",""]),module.exports=exports},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/github_black_circle.7a3a3a06.svg"},831:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/telegram_black_circle.bc1bc398.svg"},832:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/linkedin_black_circle.bdd2c4dd.svg"},833:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/email_black_circle.90d5d4d9.svg"},835:function(module,exports,__webpack_require__){var api=__webpack_require__(127),content=__webpack_require__(836);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},836:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(128),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(194),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(837);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);exports.push([module.i,".my-contacts {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  gap: 8%;\n  height: 100%;\n  justify-content: center;\n  position: absolute;\n  width: 100%;\n}\n\n.my-contacts__photo {\n  background: url("+___CSS_LOADER_URL_REPLACEMENT_0___+") center/contain no-repeat;\n  border-radius: 2rem;\n  box-shadow: 0px 5px 10px;\n  height: 50rem;\n  width: 50rem;\n}\n",""]),module.exports=exports},837:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/avatar.915698d9.png"},838:function(module,exports,__webpack_require__){var api=__webpack_require__(127),content=__webpack_require__(839);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},839:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(128),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(194),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(840),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(841),___CSS_LOADER_URL_IMPORT_2___=__webpack_require__(842);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___),___CSS_LOADER_URL_REPLACEMENT_2___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);exports.push([module.i,".device-switcher {\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  gap: 10%;\n  height: 10%;\n  justify-content: center;\n  width: 35rem;\n  z-index: 2;\n}\n\n.device-switcher__item {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n  flex: 0 0 auto;\n  height: 6.5rem;\n  opacity: 0.4;\n  transition: 0.5s;\n  width: 10rem;\n}\n\n.device-switcher__item_active {\n  cursor: default;\n  opacity: 1;\n}\n\n.device-switcher__item:hover {\n  opacity: 1;\n}\n\n.device-switcher__item_phone {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_0___+");\n  width: 4rem;\n}\n\n.device-switcher__item_tablet {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_1___+");\n  width: 8.9rem;\n}\n\n.device-switcher__item_desktop {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_2___+");\n  width: 10.4rem;\n}\n",""]),module.exports=exports},840:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/phone-small.de0c2fe3.svg"},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/tablet-small.f9d1e9d6.svg"},842:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/desktop-small.04b05662.svg"},843:function(module,exports,__webpack_require__){var api=__webpack_require__(127),content=__webpack_require__(844);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},844:function(module,exports,__webpack_require__){(exports=__webpack_require__(128)(!1)).push([module.i,'.nav-menu {\n  height: 100vh;\n  overflow-y: hidden;\n  position: relative;\n}\n\n.projects, .description {\n  display: flex;\n  flex-direction: column;\n  gap: 1em;\n  height: 100%;\n  justify-content: space-between;\n  letter-spacing: 0.03em;\n  position: absolute;\n  transition: 0.7s;\n}\n\n.projects {\n  padding: 5em 4.3em 5em 2em;\n  width: var(--projects_width);\n  z-index: 10;\n}\n\n.projects::before, .description::before {\n  content: "";\n  display: block;\n  height: 120%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transform: rotate( 3deg);\n  transform-origin: top right;\n  right: 0;\n  width: 100%;\n  z-index: -1;\n}\n\n.projects::before {\n  background-color: var(--projects_bg);\n}\n\n.projects-item {\n  color: var(--projects-item_color);\n  cursor: pointer;\n  display: block;\n  font-size: 2.8em;\n  overflow-wrap: break-word;\n}\n\n.projects-item_active {\n  color: var(--projects-item_color_active);\n  cursor: default;\n}\n\n.annotation {\n  color: #000;\n  font-size: 1.7rem;\n  min-width: 100%;\n  opacity: 0.7;\n  width: 0px;\n}\n\n.description {\n  font-size: 2.2em;\n  justify-content: center;\n  padding: 5rem 4.3rem 5rem;\n  padding-left: calc(1em + var(--projects_width));\n  width: var(--description_width);\n}\n\n.description::before {\n  background-color: var(--description_bg);\n}\n\n.description ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.description ul li {\n  margin-bottom: 1.2em;\n}\n\n.description ul>ul {\n  padding-left: 1em;\n}\n',""]),module.exports=exports},845:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SocialNetStory",(function(){return SocialNetStory}));__webpack_require__(8),__webpack_require__(0);var _src_components_socialNet_SocialNet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(159),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(17);__webpack_exports__.default={title:"SocialNet",component:_src_components_socialNet_SocialNet__WEBPACK_IMPORTED_MODULE_2__.a};var SocialNetStory=function SocialNetStory(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_src_components_socialNet_SocialNet__WEBPACK_IMPORTED_MODULE_2__.a,{})};SocialNetStory.displayName="SocialNetStory",SocialNetStory.parameters=Object.assign({storySource:{source:"() => <SocialNet />"}},SocialNetStory.parameters),SocialNetStory.__docgenInfo={description:"",methods:[],displayName:"SocialNetStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\socialNet\\socialNet.stories.jsx"]={name:"SocialNetStory",docgenInfo:SocialNetStory.__docgenInfo,path:"stories\\socialNet\\socialNet.stories.jsx"})},846:function(module,exports,__webpack_require__){var api=__webpack_require__(127),content=__webpack_require__(847);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},847:function(module,exports,__webpack_require__){var ___CSS_LOADER_API_IMPORT___=__webpack_require__(128),___CSS_LOADER_GET_URL_IMPORT___=__webpack_require__(194),___CSS_LOADER_URL_IMPORT_0___=__webpack_require__(848),___CSS_LOADER_URL_IMPORT_1___=__webpack_require__(849);exports=___CSS_LOADER_API_IMPORT___(!1);var ___CSS_LOADER_URL_REPLACEMENT_0___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___),___CSS_LOADER_URL_REPLACEMENT_1___=___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);exports.push([module.i,".site-on-device {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  position: relative;\n}\n\n.iframe-wrapper {\n  border: 2px solid #000;\n  overflow: hidden;\n  position: absolute;\n}\n\n.iframe-wrapper iframe {\n  height: 100%;\n  width: 100%;\n}\n\n/* styles for devices */\n\n.site-on-device_phone {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_0___+");\n  height: 607px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 355px;\n}\n\n.site-on-device_phone .iframe-wrapper {\n  height: 480px;\n  left: 4.3%;\n  top: 5.4%;\n  width: 320px;\n}\n\n.site-on-device_tablet {\n  background-image: url("+___CSS_LOADER_URL_REPLACEMENT_1___+");\n  height: 835px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale(0.8);\n  width: 1209px;\n}\n\n.site-on-device_tablet .iframe-wrapper {\n  height: 768px;\n  left: 3.1%;\n  top: 4%;\n  width: 1028px;\n}\n\n.site-on-device_desktop {\n  height: 100%;\n  width: 100%;\n}\n\n.site-on-device_desktop .iframe-wrapper {\n  border: none;\n  height: 100vh;\n  width: 100%;\n}\n",""]),module.exports=exports},848:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/phone.2296a9a6.svg"},849:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default=__webpack_require__.p+"static/media/tablet.5c7b6ab4.svg"},854:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NavMenuStory",(function(){return NavMenuStory}));__webpack_require__(16),__webpack_require__(8),__webpack_require__(280),__webpack_require__(0),__webpack_require__(14),__webpack_require__(9),__webpack_require__(32),__webpack_require__(36),__webpack_require__(92),__webpack_require__(843);var themesToProjects={contacts:"theme-contacts",lmarkt:"theme-lmarkt",russgaz:"theme-russgaz",kvast:"theme-kvast","cm-expert":"theme-cm-expert","snake-js-native":"theme-snake-js-native","snake-react":"theme-snake-react"},dataProjects=__webpack_require__(160),jsx_runtime=__webpack_require__(17),NavMenu_createList=function createList(el,index){return"string"!=typeof el?Object(jsx_runtime.jsx)("ul",{children:el.map((function(el,index){return createList(el,index)}))},index):Object(jsx_runtime.jsx)("li",{children:el},index)},NavMenu_NavMenu=function NavMenu(_ref){var onItemMenuClick=_ref.onItemMenuClick,currentMenuItem=_ref.currentMenuItem,listItem=Object(jsx_runtime.jsx)("div",{className:"projects",children:dataProjects.a.map((function(item){var name=item.name,screenName=item.screenName,annotation=item.annotation,active=name===currentMenuItem?"projects-item_active":"";return Object(jsx_runtime.jsxs)("div",{onClick:function onClick(){return function handleClick(name){onItemMenuClick&&onItemMenuClick(name)}(name)},className:"projects-item ".concat(active),"data-item":name,"data-hover":screenName,children:[Object(jsx_runtime.jsx)("div",{children:screenName}),Object(jsx_runtime.jsx)("div",{className:"annotation",children:annotation})]},name)}))}),description=dataProjects.a.find((function(item){return item.name===currentMenuItem})).description,viewDescription=description?Object(jsx_runtime.jsx)("div",{className:"description",children:NavMenu_createList(description)}):null;return Object(jsx_runtime.jsxs)("nav",{className:"nav-menu ".concat(themesToProjects[currentMenuItem]),children:[listItem,viewDescription]})};NavMenu_NavMenu.displayName="NavMenu",NavMenu_NavMenu.__docgenInfo={description:"",methods:[],displayName:"NavMenu"};var navMenu_NavMenu=NavMenu_NavMenu;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\navMenu\\NavMenu.jsx"]={name:"NavMenu",docgenInfo:NavMenu_NavMenu.__docgenInfo,path:"src\\components\\navMenu\\NavMenu.jsx"});__webpack_exports__.default={title:"NavMenu",component:navMenu_NavMenu,argTypes:{currentMenuItem:{options:Object.keys(themesToProjects),control:{type:"inline-radio"}},onItemMenuClick:{table:{disable:!0}}}};var NavMenu_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(navMenu_NavMenu,Object.assign({},args))};NavMenu_stories_Template.displayName="Template";var NavMenuStory=NavMenu_stories_Template.bind({});NavMenuStory.args={currentMenuItem:"lmarkt"},NavMenuStory.parameters=Object.assign({storySource:{source:"(args) => <NavMenu {...args} />"}},NavMenuStory.parameters)},858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__(16),__webpack_require__(32),__webpack_require__(45),__webpack_require__(817),__webpack_require__(37),__webpack_require__(38),__webpack_require__(818),__webpack_require__(819),__webpack_require__(418);var client_api=__webpack_require__(866),esm=__webpack_require__(5),parameters=(__webpack_require__(820),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))},859:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContactsStory",(function(){return Contacts_stories_ContactsStory}));__webpack_require__(8);var react=__webpack_require__(0),SocialNet=(__webpack_require__(825),__webpack_require__(65),__webpack_require__(826),__webpack_require__(827),__webpack_require__(418),__webpack_require__(32),__webpack_require__(36),__webpack_require__(18),__webpack_require__(109),__webpack_require__(42),__webpack_require__(41),__webpack_require__(48),__webpack_require__(159)),jsx_runtime=(__webpack_require__(835),__webpack_require__(17));function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(obj){return typeof obj}:function _typeof(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o})(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}var Contacts_Contacts=function(_Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Contacts,_Component);var _super=_createSuper(Contacts);function Contacts(props){return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Contacts),_super.call(this,props)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Constructor}(Contacts,[{key:"render",value:function render(){return Object(jsx_runtime.jsxs)("div",{className:"my-contacts",children:[Object(jsx_runtime.jsx)(SocialNet.a,{}),Object(jsx_runtime.jsx)("div",{className:"my-contacts__photo"})]})}}]),Contacts}(react.Component);Contacts_Contacts.__docgenInfo={description:"",methods:[],displayName:"Contacts"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\contacts\\Contacts.jsx"]={name:"Contacts",docgenInfo:Contacts_Contacts.__docgenInfo,path:"src\\components\\contacts\\Contacts.jsx"});__webpack_exports__.default={title:"Contacts",component:Contacts_Contacts};var Contacts_stories_ContactsStory=function ContactsStory(){return Object(jsx_runtime.jsx)(Contacts_Contacts,{})};Contacts_stories_ContactsStory.displayName="ContactsStory",Contacts_stories_ContactsStory.parameters=Object.assign({storySource:{source:"() => <Contacts />"}},Contacts_stories_ContactsStory.parameters),Contacts_stories_ContactsStory.__docgenInfo={description:"",methods:[],displayName:"ContactsStory"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories\\contacts\\Contacts.stories.jsx"]={name:"ContactsStory",docgenInfo:Contacts_stories_ContactsStory.__docgenInfo,path:"stories\\contacts\\Contacts.stories.jsx"})},860:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DeviceSwitcherStory",(function(){return DeviceSwitcherStory}));__webpack_require__(8),__webpack_require__(280),__webpack_require__(0),__webpack_require__(14),__webpack_require__(13),__webpack_require__(838);var jsx_runtime=__webpack_require__(17),DeviceSwitcher_DeviceSwitcher=function DeviceSwitcher(_ref){var devicesCurrentMenuItem=_ref.devicesCurrentMenuItem,activeDevice=_ref.activeDevice,onDeviceClick=_ref.onDeviceClick;return devicesCurrentMenuItem?Object(jsx_runtime.jsx)("div",{className:"device-switcher",children:devicesCurrentMenuItem.map((function(dev){var devName=dev;return Object(jsx_runtime.jsx)("i",{onClick:function onClick(){return function handleClick(devName){onDeviceClick&&onDeviceClick(devName)}(devName)},className:"\n        ".concat(activeDevice===dev?"device-switcher__item_active":""," device-switcher__item device-switcher__item_").concat(dev),"data-device":dev},dev)}))}):null};DeviceSwitcher_DeviceSwitcher.__docgenInfo={description:"",methods:[],displayName:"DeviceSwitcher"};var deviceSwitcher_DeviceSwitcher=DeviceSwitcher_DeviceSwitcher;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\deviceSwitcher\\DeviceSwitcher.jsx"]={name:"DeviceSwitcher",docgenInfo:DeviceSwitcher_DeviceSwitcher.__docgenInfo,path:"src\\components\\deviceSwitcher\\DeviceSwitcher.jsx"});__webpack_exports__.default={title:"DeviceSwitcher",component:deviceSwitcher_DeviceSwitcher,argTypes:{activeDevice:{options:["phone","tablet","desktop"],control:{type:"radio"}},devicesCurrentMenuItem:{options:["phone","tablet","desktop"],control:{type:"check"}},onDeviceClick:{table:{disable:!0}}}};var DeviceSwitcher_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(deviceSwitcher_DeviceSwitcher,Object.assign({},args))};DeviceSwitcher_stories_Template.displayName="Template";var DeviceSwitcherStory=DeviceSwitcher_stories_Template.bind({});DeviceSwitcherStory.args={devicesCurrentMenuItem:["phone","tablet","desktop"],activeDevice:"phone"},DeviceSwitcherStory.parameters=Object.assign({storySource:{source:"(args) => <DeviceSwitcher {...args} />"}},DeviceSwitcherStory.parameters)},861:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PhoneViewStory",(function(){return PhoneViewStory})),__webpack_require__.d(__webpack_exports__,"TabletViewStory",(function(){return TabletViewStory})),__webpack_require__.d(__webpack_exports__,"DesktopViewStory",(function(){return DesktopViewStory}));__webpack_require__(52),__webpack_require__(8),__webpack_require__(280),__webpack_require__(0),__webpack_require__(846);var jsx_runtime=__webpack_require__(17),ViewSiteForDifferentDevices_ViewSiteForDifferentDevices=function ViewSiteForDifferentDevices(_ref){var linkToSite=_ref.linkToSite,activeDevice=_ref.activeDevice;return Object(jsx_runtime.jsx)("div",{className:"site-on-device site-on-device_".concat(activeDevice),children:Object(jsx_runtime.jsx)("div",{className:"iframe-wrapper",children:Object(jsx_runtime.jsx)("iframe",{src:linkToSite,frameBorder:"0"})})})};ViewSiteForDifferentDevices_ViewSiteForDifferentDevices.displayName="ViewSiteForDifferentDevices",ViewSiteForDifferentDevices_ViewSiteForDifferentDevices.__docgenInfo={description:"",methods:[],displayName:"ViewSiteForDifferentDevices"};var viewSiteForDifferentDevices_ViewSiteForDifferentDevices=ViewSiteForDifferentDevices_ViewSiteForDifferentDevices;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\viewSiteForDifferentDevices\\ViewSiteForDifferentDevices.jsx"]={name:"ViewSiteForDifferentDevices",docgenInfo:ViewSiteForDifferentDevices_ViewSiteForDifferentDevices.__docgenInfo,path:"src\\components\\viewSiteForDifferentDevices\\ViewSiteForDifferentDevices.jsx"});var linksToSitesList=__webpack_require__(160).a.reduce((function(acc,cur){return cur.device&&acc.push(cur.url),acc}),[]),ViewSiteForDifferentDevices_stories_Template=(__webpack_exports__.default={title:"Different devices",component:viewSiteForDifferentDevices_ViewSiteForDifferentDevices,argTypes:{linkToSite:{options:linksToSitesList,control:{type:"radio"}},activeDevice:{table:{disable:!0}}}},function Template(args){return Object(jsx_runtime.jsx)(viewSiteForDifferentDevices_ViewSiteForDifferentDevices,Object.assign({},args))});ViewSiteForDifferentDevices_stories_Template.displayName="Template";var PhoneViewStory=ViewSiteForDifferentDevices_stories_Template.bind({});PhoneViewStory.args={linkToSite:linksToSitesList[0],activeDevice:"phone"};var TabletViewStory=ViewSiteForDifferentDevices_stories_Template.bind({});TabletViewStory.args={linkToSite:linksToSitesList[0],activeDevice:"tablet"};var DesktopViewStory=ViewSiteForDifferentDevices_stories_Template.bind({});DesktopViewStory.args={linkToSite:linksToSitesList[0],activeDevice:"desktop"},PhoneViewStory.parameters=Object.assign({storySource:{source:"(args) => <ViewSiteForDifferentDevices {...args} />"}},PhoneViewStory.parameters),TabletViewStory.parameters=Object.assign({storySource:{source:"(args) => <ViewSiteForDifferentDevices {...args} />"}},TabletViewStory.parameters),DesktopViewStory.parameters=Object.assign({storySource:{source:"(args) => <ViewSiteForDifferentDevices {...args} />"}},DesktopViewStory.parameters)}},[[464,2,3]]]);