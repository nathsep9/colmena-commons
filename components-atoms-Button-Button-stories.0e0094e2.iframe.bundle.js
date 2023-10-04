/*! For license information please see components-atoms-Button-Button-stories.0e0094e2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_colmena_commons=self.webpackChunk_colmena_commons||[]).push([[365],{"./src/components/atoms/Button/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BothIcons:()=>BothIcons,Disabled:()=>Disabled,Loading:()=>Loading,PrimaryDefault:()=>PrimaryDefault,SecondaryDefault:()=>SecondaryDefault,StartIcon:()=>StartIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories});const academic_cap_namespaceObject=__webpack_require__.p+"static/media/academic_cap.0cad0e94.svg",download_namespaceObject=__webpack_require__.p+"static/media/download.6114dda2.svg",arrows_namespaceObject=__webpack_require__.p+"static/media/arrows.14c14844.svg";var Button=__webpack_require__("./src/components/atoms/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Button_stories={title:"Components/Button",component:Button.Z,argTypes:{onClick:{action:"clicked"}}},PrimaryDefault={args:{label:"Button text",size:"large",color:"secondary",startIcon:(0,jsx_runtime.jsx)("img",{src:academic_cap_namespaceObject,alt:"academic"}),endIcon:(0,jsx_runtime.jsx)("img",{src:download_namespaceObject,alt:"download"})}},SecondaryDefault={args:{color:"secondary",label:"Button text",size:"medium"}},StartIcon={args:{color:"secondary",startIcon:(0,jsx_runtime.jsx)("img",{src:academic_cap_namespaceObject,alt:"academic"}),label:"Button text",size:"medium"}},BothIcons={args:{...PrimaryDefault.args,color:"secondary",startIcon:(0,jsx_runtime.jsx)("img",{src:academic_cap_namespaceObject,alt:"academic"}),label:"Button text",size:"medium",endIcon:(0,jsx_runtime.jsx)("img",{src:arrows_namespaceObject,alt:"arrows"})}},Loading={args:{color:"secondary",startIcon:(0,jsx_runtime.jsx)("img",{src:academic_cap_namespaceObject,alt:"academic"}),label:"Button text",size:"medium",endIcon:(0,jsx_runtime.jsx)("img",{src:download_namespaceObject,alt:"download"}),loading:!0}},Disabled={args:{color:"secondary",startIcon:(0,jsx_runtime.jsx)("img",{src:academic_cap_namespaceObject,alt:"academic"}),label:"Button text",size:"medium",endIcon:(0,jsx_runtime.jsx)("img",{src:arrows_namespaceObject,alt:"arrow"}),disabled:!0}};PrimaryDefault.parameters={...PrimaryDefault.parameters,docs:{...PrimaryDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Button text',\n    size: 'large',\n    color: 'secondary',\n    startIcon: <img src={academic} alt=\"academic\" />,\n    endIcon: <img src={download} alt=\"download\" />\n  }\n}",...PrimaryDefault.parameters?.docs?.source}}},SecondaryDefault.parameters={...SecondaryDefault.parameters,docs:{...SecondaryDefault.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'secondary',\n    label: 'Button text',\n    size: 'medium'\n  }\n}",...SecondaryDefault.parameters?.docs?.source}}},StartIcon.parameters={...StartIcon.parameters,docs:{...StartIcon.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'secondary',\n    startIcon: <img src={academic} alt=\"academic\" />,\n    label: 'Button text',\n    size: 'medium'\n  }\n}",...StartIcon.parameters?.docs?.source}}},BothIcons.parameters={...BothIcons.parameters,docs:{...BothIcons.parameters?.docs,source:{originalSource:"{\n  args: {\n    ...PrimaryDefault.args,\n    color: 'secondary',\n    startIcon: <img src={academic} alt=\"academic\" />,\n    label: 'Button text',\n    size: 'medium',\n    endIcon: <img src={arrows} alt=\"arrows\" />\n  }\n}",...BothIcons.parameters?.docs?.source}}},Loading.parameters={...Loading.parameters,docs:{...Loading.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'secondary',\n    startIcon: <img src={academic} alt=\"academic\" />,\n    label: 'Button text',\n    size: 'medium',\n    endIcon: <img src={download} alt=\"download\" />,\n    loading: true\n  }\n}",...Loading.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    color: 'secondary',\n    startIcon: <img src={academic} alt=\"academic\" />,\n    label: 'Button text',\n    size: 'medium',\n    endIcon: <img src={arrows} alt=\"arrow\" />,\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["PrimaryDefault","SecondaryDefault","StartIcon","BothIcons","Loading","Disabled"]},"./src/components/atoms/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Spinner=({...rest})=>(0,jsx_runtime.jsxs)("svg",{viewBox:"0 0 500 500",xmlns:"http://www.w3.org/2000/svg",...rest,children:[(0,jsx_runtime.jsx)("path",{d:"M 499.996 251.32 C 499.272 389.386 386.746 500.72 248.681 499.996 C 110.614 499.274 -0.719 386.748 0.004 248.681 C 0.756 110.615 113.253 -0.717 251.318 0.004 C 389.417 0.727 500.75 113.253 499.996 251.32 Z M 45.429 248.932 C 44.831 361.899 135.934 454.007 248.93 454.603 C 361.929 455.199 454.005 364.065 454.604 251.069 C 455.199 138.101 364.096 45.996 251.099 45.399 C 138.1 44.801 46.027 135.935 45.429 248.932 Z",fill:"#25282D"}),(0,jsx_runtime.jsx)("path",{d:"M 470.15 193.422 C 482.31 190.281 489.692 177.873 485.484 166.063 C 477.064 142.373 465.064 120.037 449.89 99.84 C 430.162 73.609 405.47 51.492 377.196 34.78 C 348.955 18.068 317.666 7.103 285.183 2.485 C 260.178 -1.063 234.824 -0.812 209.977 3.24 C 197.599 5.22 190.31 17.722 193.422 29.848 C 196.532 42.005 208.91 49.2 221.351 47.439 C 240.354 44.739 259.707 44.739 278.775 47.439 C 305.383 51.209 330.986 60.194 354.106 73.86 C 377.228 87.557 397.459 105.62 413.574 127.107 C 425.166 142.533 434.496 159.465 441.313 177.433 C 445.742 189.151 457.995 196.532 470.15 193.422 Z",fill:"currentColor"})]});Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/icons/Spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/assets/icons/Spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}var enums=__webpack_require__("./src/enums/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Button/Button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Button_module.Z,options);const Button_Button_module=Button_module.Z&&Button_module.Z.locals?Button_module.Z.locals:void 0;var utils=__webpack_require__("./src/utils/index.ts");const colorsContained={[enums.wL.primary]:classnames_default()("cm-bg-primary cm-border-primary disabled:hover:cm-bg-grey--200 disabled:cm-bg-grey--300","hover:cm-bg-primary-dark"),[enums.wL.secondary]:classnames_default()("cm-bg-secondary-light hover:cm-bg-secondary ","active:cm-border-secondary active:cm-border-2 active:cm-bg-secondary-light ","disabled:hover:cm-bg-grey--200 disabled:cm-bg-grey--300 disabled:cm-border-grey--200"),[enums.wL.secondaryLight]:classnames_default()(["cm-bg-secondary-light cm-border-secondary-light","hover:cm-bg-secondary","active:cm-bg-secondary-light active:cm-border-secondary"])},colorsOutlined={[enums.wL.primary]:classnames_default()(["cm-border-primary","hover:cm-border-primary-dark","disabled:cm-border-grey--200","disabled:hover:cm-border-grey--100"]),[enums.wL.secondary]:classnames_default()(["cm-border-secondary-light","active:cm-border-secondary active:cm-border-2","disabled:cm-border-grey--200  disabled:hover:cm-border-grey--100 disabled:cm-bg-grey--300 disabled:cm-border-1"]),[enums.wL.secondaryLight]:classnames_default()(["cm-border-secondary-light","hover:cm-border-secondary"])},colorsText={[enums.wL.primary]:classnames_default()(["cm-text-grey-500 hover:cm-text-grey-100","disabled:cm-bg-grey--200 disabled:hover:cm-bg-grey--100"]),[enums.wL.secondary]:classnames_default()(["hover:cm-text-grey-100 cm-text-grey-500","active:cm-text-grey-500","disabled:cm-text-grey--200 disabled:hover:cm-text-grey--100"]),[enums.wL.secondaryLight]:classnames_default()(["cm-text-secondary-light","hover:cm-text-secondary"])},loadingColors=(0,utils.w)({[enums.wL.primary]:{[enums.tr.contained]:"cm-text-white",[enums.tr.outlined]:"cm-text-primary",[enums.tr.text]:"cm-text-grey-400"},[enums.wL.secondary]:{[enums.tr.contained]:"cm-text-white",[enums.tr.outlined]:"cm-text-secondary",[enums.tr.text]:"cm-text-grey--100"},[enums.wL.secondaryLight]:{[enums.tr.contained]:"cm-text-white",[enums.tr.outlined]:"cm-text-secondary-light",[enums.tr.text]:"cm-text-grey--100"}}),STYLES_BY_SIZE=(0,utils.w)({[enums.u8.extraSmall]:"cm-text-xs cm-h-34px",[enums.u8.small]:"cm-text-sm cm-h-37px",[enums.u8.medium]:"cm-text-md cm-h-41px",[enums.u8.large]:"cm-text-lg cm-h-48px",[enums.u8.extraLarge]:"cm-text-xl cm-h-52px"}),Button=({label,children,color:type=enums.wL.secondary,size,className,startIcon,endIcon,loading,variant=enums.tr.contained,disabled,...props})=>{const colorContained=colorsContained[type],colorOutlined=colorsOutlined[type],colorText=colorsText[type],loadingColor=loadingColors[type][variant],sizeClass=STYLES_BY_SIZE[size||"medium"];return(0,jsx_runtime.jsxs)("button",{className:classnames_default()("cm-pointer-events-auto cm-px-3 cm-py-2 cm-font-semibold cm-inline-flex","cm-justify-center cm-items-center cm-font-roboto cm-font-bold","cm-leading-5 cm-text-grey-500","cm-rounded-lg",{"disabled:cm-bg-grey--300 disabled:cm-text-grey--100":enums.tr.contained===variant||enums.tr.outlined===variant,"disabled:cm-text-grey--200 disabled:hover:cm-text-grey--100":enums.tr.text===variant},variant===enums.tr.contained&&colorContained,variant===enums.tr.outlined&&[colorOutlined,"cm-border-1"],variant===enums.tr.text&&[colorText,"cm-underline "],sizeClass,className),disabled,...props,children:[startIcon&&(0,jsx_runtime.jsx)("span",{className:"cm-display-none cm-mr-2",children:startIcon}),(0,jsx_runtime.jsxs)("span",{className:classnames_default()(variant===enums.tr.text&&"cm-underline"),children:[label,children]}),endIcon&&(0,jsx_runtime.jsx)("span",{className:"cm-ml-2",children:endIcon}),loading&&(0,jsx_runtime.jsx)("span",{className:"cm-ml-2",children:(0,jsx_runtime.jsx)(Spinner,{className:classnames_default()("cm-animate-spin cm-text-size-inherit",loadingColor,Button_Button_module.loading)})})]})};Button.displayName="Button";const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{color:{defaultValue:{value:"secondary"},description:"Is this the principal call to action on the page?",name:"color",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"secondaryLight"'},{value:'"primary"'},{value:'"secondary"'},{value:'"secondaryLight"'}]}},variant:{defaultValue:{value:"Variants.contained"},description:"What variant of button to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"contained"'},{value:'"outlined"'},{value:'"text"'},{value:'"contained"'},{value:'"outlined"'},{value:'"text"'}]}},size:{defaultValue:null,description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'},{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'}]}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Button contents",name:"label",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},startIcon:{defaultValue:null,description:"",name:"startIcon",required:!1,type:{name:"ReactNode"}},endIcon:{defaultValue:null,description:"",name:"endIcon",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/atoms/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/atoms/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/enums/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{tr:()=>Variants,u8:()=>Sizes,wL:()=>Colors});let Sizes=function(Sizes){return Sizes.extraSmall="extraSmall",Sizes.small="small",Sizes.medium="medium",Sizes.large="large",Sizes.extraLarge="extraLarge",Sizes}({}),Variants=function(Variants){return Variants.contained="contained",Variants.outlined="outlined",Variants.text="text",Variants}({}),Colors=function(Colors){return Colors.primary="primary",Colors.secondary="secondary",Colors.secondaryLight="secondaryLight",Colors}({})},"./src/utils/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>twStyles});const twStyles=styles=>styles},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/atoms/Button/Button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".W5ePqPB9lviP6GMunqHz{-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em;height:1em;display:inline-block;fill:currentColor}","",{version:3,sources:["webpack://./src/components/atoms/Button/Button.module.scss"],names:[],mappings:"AAAA,sBACE,wBAAA,CAAA,qBAAA,CAAA,gBAAA,CACA,SAAA,CACA,UAAA,CACA,oBAAA,CACA,iBAAA",sourcesContent:[".loading {\r\n  user-select: none;\r\n  width: 1em;\r\n  height: 1em;\r\n  display: inline-block;\r\n  fill: currentColor;\r\n}\r\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={loading:"W5ePqPB9lviP6GMunqHz"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);