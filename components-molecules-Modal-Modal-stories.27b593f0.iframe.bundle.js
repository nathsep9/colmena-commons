"use strict";(self.webpackChunk_colmena_commons=self.webpackChunk_colmena_commons||[]).push([[949],{"./src/components/molecules/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ModalWithPositionLeft:()=>ModalWithPositionLeft,WithManyText:()=>WithManyText,WithManyTextScrollPaper:()=>WithManyTextScrollPaper,WithManyTextWithLargeWidth:()=>WithManyTextWithLargeWidth,WithManyTextWithMediumWidth:()=>WithManyTextWithMediumWidth,WithManyTextWithSmallWidth:()=>WithManyTextWithSmallWidth,WithManyTextWithXLargeWidth:()=>WithManyTextWithXLargeWidth,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),assets_icons_Closed__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/assets/icons/Closed.tsx"),components_atoms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/atoms/index.ts"),components_atoms_ModalContent__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/atoms/ModalContent/index.ts"),_Modal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/molecules/Modal/Modal.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Modal/Modal",component:_Modal__WEBPACK_IMPORTED_MODULE_4__.ZP,argTypes:{}},StoryModal=props=>{const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),openProps=props.open;return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setOpen(openProps??!1)}),[openProps]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_atoms__WEBPACK_IMPORTED_MODULE_2__.Button,{label:"Open modal",onClick:()=>setOpen(!0)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Modal__WEBPACK_IMPORTED_MODULE_4__.ZP,{...props,onClose:event=>{setOpen(!1),props.onClose?.(event)},open,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(components_atoms_ModalContent__WEBPACK_IMPORTED_MODULE_3__.h,{dividers:!0,children:props.children})})]})},Default={render:StoryModal,args:{title:"Título del modal",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"cm-mt-2",children:"Este es el contenido del modal"}),fullWidth:!0,closeIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(assets_icons_Closed__WEBPACK_IMPORTED_MODULE_1__.a,{})}},WithTitle={render:StoryModal,args:{title:"Título del modal",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"cm-mt-2",children:"Este es el contenido del modal"}),fullWidth:!0,closeIcon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(assets_icons_Closed__WEBPACK_IMPORTED_MODULE_1__.a,{})}},manyText=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{className:"cm-mt-2",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),WithManyText={render:StoryModal,args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:Array.from(Array(20).keys()).map(((_,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[manyText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]},index)))}),fullWidth:!0}},WithManyTextScrollPaper={render:StoryModal,args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:Array.from(Array(20).keys()).map(((_,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{children:[manyText,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br",{})]},index)))}),maxWidth:"small",scroll:"paper"}},WithManyTextWithSmallWidth={render:StoryModal,args:{children:manyText,fullWidth:!0,maxWidth:"small"}},WithManyTextWithMediumWidth={render:StoryModal,args:{children:manyText,fullWidth:!0,maxWidth:"medium"}},WithManyTextWithLargeWidth={render:StoryModal,args:{children:manyText,fullWidth:!0,maxWidth:"large"}},WithManyTextWithXLargeWidth={render:StoryModal,args:{children:manyText,fullWidth:!0,maxWidth:"extraLarge"}},ModalWithPositionLeft={render:StoryModal,args:{children:manyText,fullWidth:!0,maxWidth:"small"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    title: 'Título del modal',\n    children: <div className=\"cm-mt-2\">Este es el contenido del modal</div>,\n    fullWidth: true,\n    closeIcon: <Closed />\n  }\n}",...Default.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    title: 'Título del modal',\n    children: <div className=\"cm-mt-2\">Este es el contenido del modal</div>,\n    fullWidth: true,\n    closeIcon: <Closed />\n  }\n}",...WithTitle.parameters?.docs?.source}}},WithManyText.parameters={...WithManyText.parameters,docs:{...WithManyText.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: <>\r\n        {Array.from(Array(20).keys()).map((_, index) => <div key={index}>\r\n            {manyText}\r\n            <br />\r\n          </div>)}\r\n      </>,\n    fullWidth: true\n  }\n}",...WithManyText.parameters?.docs?.source}}},WithManyTextScrollPaper.parameters={...WithManyTextScrollPaper.parameters,docs:{...WithManyTextScrollPaper.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: <>\r\n        {Array.from(Array(20).keys()).map((_, index) => <div key={index}>\r\n            {manyText}\r\n            <br />\r\n          </div>)}\r\n      </>,\n    maxWidth: 'small',\n    scroll: 'paper'\n  }\n}",...WithManyTextScrollPaper.parameters?.docs?.source}}},WithManyTextWithSmallWidth.parameters={...WithManyTextWithSmallWidth.parameters,docs:{...WithManyTextWithSmallWidth.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: manyText,\n    fullWidth: true,\n    maxWidth: 'small'\n  }\n}",...WithManyTextWithSmallWidth.parameters?.docs?.source}}},WithManyTextWithMediumWidth.parameters={...WithManyTextWithMediumWidth.parameters,docs:{...WithManyTextWithMediumWidth.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: manyText,\n    fullWidth: true,\n    maxWidth: 'medium'\n  }\n}",...WithManyTextWithMediumWidth.parameters?.docs?.source}}},WithManyTextWithLargeWidth.parameters={...WithManyTextWithLargeWidth.parameters,docs:{...WithManyTextWithLargeWidth.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: manyText,\n    fullWidth: true,\n    maxWidth: 'large'\n  }\n}",...WithManyTextWithLargeWidth.parameters?.docs?.source}}},WithManyTextWithXLargeWidth.parameters={...WithManyTextWithXLargeWidth.parameters,docs:{...WithManyTextWithXLargeWidth.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: manyText,\n    fullWidth: true,\n    maxWidth: 'extraLarge'\n  }\n}",...WithManyTextWithXLargeWidth.parameters?.docs?.source}}},ModalWithPositionLeft.parameters={...ModalWithPositionLeft.parameters,docs:{...ModalWithPositionLeft.parameters?.docs,source:{originalSource:"{\n  render: StoryModal,\n  args: {\n    children: manyText,\n    fullWidth: true,\n    maxWidth: 'small'\n  }\n}",...ModalWithPositionLeft.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithTitle","WithManyText","WithManyTextScrollPaper","WithManyTextWithSmallWidth","WithManyTextWithMediumWidth","WithManyTextWithLargeWidth","WithManyTextWithXLargeWidth","ModalWithPositionLeft"]},"./src/components/molecules/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u_:()=>Modal_Modal_Modal,ZP:()=>molecules_Modal_Modal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),Closed=__webpack_require__("./src/assets/icons/Closed.tsx"),enums=__webpack_require__("./src/enums/index.ts"),utils=__webpack_require__("./src/utils/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/molecules/Modal/Modal.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal.Z,options);Modal.Z&&Modal.Z.locals&&Modal.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");let EventCloseType=function(EventCloseType){return EventCloseType.click="click",EventCloseType.keydown="keydown",EventCloseType.backdrop="backdrop",EventCloseType}({});const SIZES_CLASS=(0,utils.w)({[enums.u8.extraSmall]:"cm-max-w-screen-xs",[enums.u8.small]:"cm-max-w-screen-sm",[enums.u8.medium]:"cm-max-w-screen-md",[enums.u8.large]:"cm-max-w-screen-lg",[enums.u8.extraLarge]:"cm-max-w-screen-xl"}),Modal_Modal_Modal=({open,onClose,closeIcon=(0,jsx_runtime.jsx)(Closed.a,{"data-testid":"close-icon",onClick:()=>onClose?.(EventCloseType.click)}),children,maxWidth,fullWidth,scroll="body",title,className})=>{if((0,react.useEffect)((()=>{if(open)return document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}}),[open,scroll]),!open)return null;const sizeClass=maxWidth&&SIZES_CLASS[maxWidth];return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,react_dom.createPortal)((0,jsx_runtime.jsxs)("div",{className:classnames_default()("cm-modal-root",className),onClick:()=>onClose?.(EventCloseType.backdrop),children:[(0,jsx_runtime.jsx)("div",{className:"cm-modal-backdrop"}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("paper"===scroll&&"cm-max-h-screen cm-modal-scroll-paper","body"===scroll&&"cm-modal-scroll-body","cm-h-full"),role:"dialog","aria-modal":"true",children:(0,jsx_runtime.jsx)("div",{"data-testid":"modal-container",className:classnames_default()("cm-modal-container cm-p-2 cm-modal-cl","paper"===scroll&&"cm-overflow-hidden cm-h-full"),children:(0,jsx_runtime.jsxs)("div",{className:classnames_default()("cm-relative cm-border-neutral-900 cm-transform cm-rounded-lg cm-bg-white cm-text-left cm-shadow-xl cm-transition-all","cm-modal-paper",sizeClass,fullWidth&&"full","paper"===scroll&&"cm-overflow-y-auto cm-max-h-full"),onClick:e=>e.stopPropagation(),children:[(0,jsx_runtime.jsxs)("div",{className:"cm-flex cm-p-4 cm-justify-end",children:[title&&(0,jsx_runtime.jsx)("div",{className:"cm-flex-1 cm-flex",children:(0,jsx_runtime.jsx)("h3",{className:"cm-text-lg cm-font-bold",children:title})}),(0,jsx_runtime.jsx)("div",{className:" ",children:(0,jsx_runtime.jsx)("span",{className:classnames_default()("cm-font-bold","cm-modal-close-icon"),onClick:()=>onClose?.(EventCloseType.click),children:closeIcon})})]}),children]})})})]}),document.body)})},molecules_Modal_Modal=Modal_Modal_Modal;try{Modal_Modal_Modal.displayName="Modal",Modal_Modal_Modal.__docgenInfo={description:"",displayName:"Modal",props:{closeIcon:{defaultValue:{value:'(\r\n    <Closed\r\n      data-testid="close-icon"\r\n      onClick={() => onClose?.(EventCloseType.click)}\r\n    />\r\n  )'},description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((type: EventCloseType) => void)"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"extraSmall"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'},{value:'"extraSmall"'},{value:'"medium"'},{value:'"large"'},{value:'"extraLarge"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},scroll:{defaultValue:{value:"body"},description:"",name:"scroll",required:!1,type:{name:"enum",value:[{value:'"body"'},{value:'"paper"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/molecules/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/molecules/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[13].use[2]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[4]!./src/components/molecules/Modal/Modal.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.cm-modal-root{position:fixed;z-index:1300;inset:0px}.cm-modal-close-icon{-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px;height:24px;display:inline-block;fill:currentColor;cursor:pointer}.cm-modal-backdrop{position:fixed;display:flex;align-items:center;justify-content:center;inset:0px;background-color:rgba(0,0,0,.5);-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:-1}.cm-modal-container{height:100%;outline:0}@media print{.cm-modal-container{height:auto}}.cm-modal-scroll-body .cm-modal-container{height:100%;outline:0px;overflow:hidden auto;text-align:center;vertical-align:middle}.cm-modal-scroll-body .cm-modal-container:after{content:"";display:inline-block;vertical-align:middle;height:100%;width:0}.cm-modal-scroll-paper .cm-modal-container{display:flex;justify-content:center;align-items:center}.cm-modal-paper{margin:32px;position:relative;overflow-y:auto}@media print{.cm-modal-paper{overflow-y:visible;box-shadow:none}}.cm-modal-paper.full{width:calc(100% - 64px)}.cm-modal-scroll-body .cm-modal-paper{display:inline-block;vertical-align:middle;text-align:left}.cm-modal-scroll-paper .cm-modal-paper{display:flex;flex-direction:column;max-height:calc(100% - 64px)}.cm-modal .full{width:100%}',"",{version:3,sources:["webpack://./src/components/molecules/Modal/Modal.scss"],names:[],mappings:"AACE,eACE,cAAA,CACA,YAAA,CACA,SAAA,CAGF,qBAEE,wBAAA,CAAA,qBAAA,CAAA,gBAAA,CACA,UAFO,CAGP,WAHO,CAIP,oBAAA,CACA,iBAAA,CACA,cAAA,CAGF,mBACE,cAAA,CACA,YAAA,CAEA,kBAAA,CAEA,sBAAA,CACA,SAAA,CACA,+BAAA,CACA,yCAAA,CACA,UAAA,CAGF,oBACE,WAAA,CAIA,SAAA,CAHA,aAFF,oBAGI,WAAA,CAAA,CAKJ,0CACE,WAAA,CACA,WAAA,CACA,oBAAA,CACA,iBAAA,CACA,qBAAA,CACA,gDACE,UAAA,CACA,oBAAA,CACA,qBAAA,CACA,WAAA,CACA,OAAA,CAIJ,2CACE,YAAA,CACA,sBAAA,CACA,kBAAA,CAGF,gBAEE,WADS,CAET,iBAAA,CACA,eAAA,CACA,aALF,gBAMI,kBAAA,CACA,eAAA,CAAA,CAGF,qBACE,uBAAA,CAIJ,sCACE,oBAAA,CACA,qBAAA,CACA,eAAA,CAGF,uCACE,YAAA,CACA,qBAAA,CACA,4BAAA,CAGF,gBACE,UAAA",sourcesContent:[".cm-modal {\r\n  &-root {\r\n    position: fixed;\r\n    z-index: 1300;\r\n    inset: 0px;\r\n  }\r\n\r\n  &-close-icon {\r\n    $size: 24px;\r\n    user-select: none;\r\n    width: $size;\r\n    height: $size;\r\n    display: inline-block;\r\n    fill: currentColor;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &-backdrop {\r\n    position: fixed;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: center;\r\n    justify-content: center;\r\n    inset: 0px;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    -webkit-tap-highlight-color: transparent;\r\n    z-index: -1;\r\n  }\r\n\r\n  &-container {\r\n    height: 100%;\r\n    @media print {\r\n      height: auto;\r\n    }\r\n    outline: 0;\r\n  }\r\n\r\n  &-scroll-body &-container {\r\n    height: 100%;\r\n    outline: 0px;\r\n    overflow: hidden auto;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    &:after {\r\n      content: '';\r\n      display: inline-block;\r\n      vertical-align: middle;\r\n      height: 100%;\r\n      width: 0;\r\n    }\r\n  }\r\n\r\n  &-scroll-paper &-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  &-paper {\r\n    $margin: 32px;\r\n    margin: $margin;\r\n    position: relative;\r\n    overflow-y: auto;\r\n    @media print {\r\n      overflow-y: visible;\r\n      box-shadow: none;\r\n    }\r\n\r\n    &.full {\r\n      width: calc(100% - $margin * 2);\r\n    }\r\n  }\r\n\r\n  &-scroll-body &-paper {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: left;\r\n  }\r\n\r\n  &-scroll-paper &-paper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: calc(100% - 64px);\r\n  }\r\n\r\n  .full {\r\n    width: 100%;\r\n  }\r\n}\r\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);