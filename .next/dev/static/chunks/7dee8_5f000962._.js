(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/OneDrive/Desktop/Divine Kitchen/node_modules/@vue/shared/dist/shared.esm-bundler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMPTY_ARR",
    ()=>EMPTY_ARR,
    "EMPTY_OBJ",
    ()=>EMPTY_OBJ,
    "NO",
    ()=>NO,
    "NOOP",
    ()=>NOOP,
    "PatchFlagNames",
    ()=>PatchFlagNames,
    "PatchFlags",
    ()=>PatchFlags,
    "ShapeFlags",
    ()=>ShapeFlags,
    "SlotFlags",
    ()=>SlotFlags,
    "camelize",
    ()=>camelize,
    "capitalize",
    ()=>capitalize,
    "cssVarNameEscapeSymbolsRE",
    ()=>cssVarNameEscapeSymbolsRE,
    "def",
    ()=>def,
    "escapeHtml",
    ()=>escapeHtml,
    "escapeHtmlComment",
    ()=>escapeHtmlComment,
    "extend",
    ()=>extend,
    "genCacheKey",
    ()=>genCacheKey,
    "genPropsAccessExp",
    ()=>genPropsAccessExp,
    "generateCodeFrame",
    ()=>generateCodeFrame,
    "getEscapedCssVarName",
    ()=>getEscapedCssVarName,
    "getGlobalThis",
    ()=>getGlobalThis,
    "hasChanged",
    ()=>hasChanged,
    "hasOwn",
    ()=>hasOwn,
    "hyphenate",
    ()=>hyphenate,
    "includeBooleanAttr",
    ()=>includeBooleanAttr,
    "invokeArrayFns",
    ()=>invokeArrayFns,
    "isArray",
    ()=>isArray,
    "isBooleanAttr",
    ()=>isBooleanAttr,
    "isBuiltInDirective",
    ()=>isBuiltInDirective,
    "isDate",
    ()=>isDate,
    "isFunction",
    ()=>isFunction,
    "isGloballyAllowed",
    ()=>isGloballyAllowed,
    "isGloballyWhitelisted",
    ()=>isGloballyWhitelisted,
    "isHTMLTag",
    ()=>isHTMLTag,
    "isIntegerKey",
    ()=>isIntegerKey,
    "isKnownHtmlAttr",
    ()=>isKnownHtmlAttr,
    "isKnownMathMLAttr",
    ()=>isKnownMathMLAttr,
    "isKnownSvgAttr",
    ()=>isKnownSvgAttr,
    "isMap",
    ()=>isMap,
    "isMathMLTag",
    ()=>isMathMLTag,
    "isModelListener",
    ()=>isModelListener,
    "isObject",
    ()=>isObject,
    "isOn",
    ()=>isOn,
    "isPlainObject",
    ()=>isPlainObject,
    "isPromise",
    ()=>isPromise,
    "isRegExp",
    ()=>isRegExp,
    "isRenderableAttrValue",
    ()=>isRenderableAttrValue,
    "isReservedProp",
    ()=>isReservedProp,
    "isSSRSafeAttrName",
    ()=>isSSRSafeAttrName,
    "isSVGTag",
    ()=>isSVGTag,
    "isSet",
    ()=>isSet,
    "isSpecialBooleanAttr",
    ()=>isSpecialBooleanAttr,
    "isString",
    ()=>isString,
    "isSymbol",
    ()=>isSymbol,
    "isVoidTag",
    ()=>isVoidTag,
    "looseEqual",
    ()=>looseEqual,
    "looseIndexOf",
    ()=>looseIndexOf,
    "looseToNumber",
    ()=>looseToNumber,
    "makeMap",
    ()=>makeMap,
    "normalizeClass",
    ()=>normalizeClass,
    "normalizeCssVarValue",
    ()=>normalizeCssVarValue,
    "normalizeProps",
    ()=>normalizeProps,
    "normalizeStyle",
    ()=>normalizeStyle,
    "objectToString",
    ()=>objectToString,
    "parseStringStyle",
    ()=>parseStringStyle,
    "propsToAttrMap",
    ()=>propsToAttrMap,
    "remove",
    ()=>remove,
    "slotFlagsText",
    ()=>slotFlagsText,
    "stringifyStyle",
    ()=>stringifyStyle,
    "toDisplayString",
    ()=>toDisplayString,
    "toHandlerKey",
    ()=>toHandlerKey,
    "toNumber",
    ()=>toNumber,
    "toRawType",
    ()=>toRawType,
    "toTypeString",
    ()=>toTypeString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
* @vue/shared v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ // @__NO_SIDE_EFFECTS__
function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    for (const key of str.split(","))map[key] = 1;
    return (val)=>val in map;
}
const EMPTY_OBJ = ("TURBOPACK compile-time truthy", 1) ? Object.freeze({}) : "TURBOPACK unreachable";
const EMPTY_ARR = ("TURBOPACK compile-time truthy", 1) ? Object.freeze([]) : "TURBOPACK unreachable";
const NOOP = ()=>{};
const NO = ()=>false;
const isOn = (key)=>key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
    (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
const isModelListener = (key)=>key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el)=>{
    const i = arr.indexOf(el);
    if (i > -1) {
        arr.splice(i, 1);
    }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key)=>hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val)=>toTypeString(val) === "[object Map]";
const isSet = (val)=>toTypeString(val) === "[object Set]";
const isDate = (val)=>toTypeString(val) === "[object Date]";
const isRegExp = (val)=>toTypeString(val) === "[object RegExp]";
const isFunction = (val)=>typeof val === "function";
const isString = (val)=>typeof val === "string";
const isSymbol = (val)=>typeof val === "symbol";
const isObject = (val)=>val !== null && typeof val === "object";
const isPromise = (val)=>{
    return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value)=>objectToString.call(value);
const toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val)=>toTypeString(val) === "[object Object]";
const isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(// the leading comma is intentional so empty string "" is also included
",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const isBuiltInDirective = /* @__PURE__ */ makeMap("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo");
const cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
const camelizeRE = /-\w/g;
const camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (c)=>c.slice(1).toUpperCase());
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
});
const toHandlerKey = cacheStringFunction((str)=>{
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
});
const hasChanged = (value, oldValue)=>!Object.is(value, oldValue);
const invokeArrayFns = (fns, ...arg)=>{
    for(let i = 0; i < fns.length; i++){
        fns[i](...arg);
    }
};
const def = (obj, key, value, writable = false)=>{
    Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: false,
        writable,
        value
    });
};
const looseToNumber = (val)=>{
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
};
const toNumber = (val)=>{
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
};
let _globalThis;
const getGlobalThis = ()=>{
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : ("TURBOPACK compile-time truthy", 1) ? /*TURBOPACK member replacement*/ __turbopack_context__.g : "TURBOPACK unreachable");
};
const identRE = /^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;
function genPropsAccessExp(name) {
    return identRE.test(name) ? `__props.${name}` : `__props[${JSON.stringify(name)}]`;
}
function genCacheKey(source, options) {
    return source + JSON.stringify(options, (_, val)=>typeof val === "function" ? val.toString() : val);
}
const PatchFlags = {
    "TEXT": 1,
    "1": "TEXT",
    "CLASS": 2,
    "2": "CLASS",
    "STYLE": 4,
    "4": "STYLE",
    "PROPS": 8,
    "8": "PROPS",
    "FULL_PROPS": 16,
    "16": "FULL_PROPS",
    "NEED_HYDRATION": 32,
    "32": "NEED_HYDRATION",
    "STABLE_FRAGMENT": 64,
    "64": "STABLE_FRAGMENT",
    "KEYED_FRAGMENT": 128,
    "128": "KEYED_FRAGMENT",
    "UNKEYED_FRAGMENT": 256,
    "256": "UNKEYED_FRAGMENT",
    "NEED_PATCH": 512,
    "512": "NEED_PATCH",
    "DYNAMIC_SLOTS": 1024,
    "1024": "DYNAMIC_SLOTS",
    "DEV_ROOT_FRAGMENT": 2048,
    "2048": "DEV_ROOT_FRAGMENT",
    "CACHED": -1,
    "-1": "CACHED",
    "BAIL": -2,
    "-2": "BAIL"
};
const PatchFlagNames = {
    [1]: `TEXT`,
    [2]: `CLASS`,
    [4]: `STYLE`,
    [8]: `PROPS`,
    [16]: `FULL_PROPS`,
    [32]: `NEED_HYDRATION`,
    [64]: `STABLE_FRAGMENT`,
    [128]: `KEYED_FRAGMENT`,
    [256]: `UNKEYED_FRAGMENT`,
    [512]: `NEED_PATCH`,
    [1024]: `DYNAMIC_SLOTS`,
    [2048]: `DEV_ROOT_FRAGMENT`,
    [-1]: `CACHED`,
    [-2]: `BAIL`
};
const ShapeFlags = {
    "ELEMENT": 1,
    "1": "ELEMENT",
    "FUNCTIONAL_COMPONENT": 2,
    "2": "FUNCTIONAL_COMPONENT",
    "STATEFUL_COMPONENT": 4,
    "4": "STATEFUL_COMPONENT",
    "TEXT_CHILDREN": 8,
    "8": "TEXT_CHILDREN",
    "ARRAY_CHILDREN": 16,
    "16": "ARRAY_CHILDREN",
    "SLOTS_CHILDREN": 32,
    "32": "SLOTS_CHILDREN",
    "TELEPORT": 64,
    "64": "TELEPORT",
    "SUSPENSE": 128,
    "128": "SUSPENSE",
    "COMPONENT_SHOULD_KEEP_ALIVE": 256,
    "256": "COMPONENT_SHOULD_KEEP_ALIVE",
    "COMPONENT_KEPT_ALIVE": 512,
    "512": "COMPONENT_KEPT_ALIVE",
    "COMPONENT": 6,
    "6": "COMPONENT"
};
const SlotFlags = {
    "STABLE": 1,
    "1": "STABLE",
    "DYNAMIC": 2,
    "2": "DYNAMIC",
    "FORWARDED": 3,
    "3": "FORWARDED"
};
const slotFlagsText = {
    [1]: "STABLE",
    [2]: "DYNAMIC",
    [3]: "FORWARDED"
};
const GLOBALS_ALLOWED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol";
const isGloballyAllowed = /* @__PURE__ */ makeMap(GLOBALS_ALLOWED);
const isGloballyWhitelisted = isGloballyAllowed;
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
    start = Math.max(0, Math.min(start, source.length));
    end = Math.max(0, Math.min(end, source.length));
    if (start > end) return "";
    let lines = source.split(/(\r?\n)/);
    const newlineSequences = lines.filter((_, idx)=>idx % 2 === 1);
    lines = lines.filter((_, idx)=>idx % 2 === 0);
    let count = 0;
    const res = [];
    for(let i = 0; i < lines.length; i++){
        count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
        if (count >= start) {
            for(let j = i - range; j <= i + range || end > count; j++){
                if (j < 0 || j >= lines.length) continue;
                const line = j + 1;
                res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
                const lineLength = lines[j].length;
                const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
                if (j === i) {
                    const pad = start - (count - (lineLength + newLineSeqLength));
                    const length = Math.max(1, end > count ? lineLength - pad : end - start);
                    res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
                } else if (j > i) {
                    if (end > count) {
                        const length = Math.max(Math.min(end - count, lineLength), 1);
                        res.push(`   |  ` + "^".repeat(length));
                    }
                    count += lineLength + newLineSeqLength;
                }
            }
            break;
        }
    }
    return res.join("\n");
}
function normalizeStyle(value) {
    if (isArray(value)) {
        const res = {};
        for(let i = 0; i < value.length; i++){
            const item = value[i];
            const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
            if (normalized) {
                for(const key in normalized){
                    res[key] = normalized[key];
                }
            }
        }
        return res;
    } else if (isString(value) || isObject(value)) {
        return value;
    }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:([^]+)/;
const styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item)=>{
        if (item) {
            const tmp = item.split(propertyDelimiterRE);
            tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
        }
    });
    return ret;
}
function stringifyStyle(styles) {
    if (!styles) return "";
    if (isString(styles)) return styles;
    let ret = "";
    for(const key in styles){
        const value = styles[key];
        if (isString(value) || typeof value === "number") {
            const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
            ret += `${normalizedKey}:${value};`;
        }
    }
    return ret;
}
function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
        res = value;
    } else if (isArray(value)) {
        for(let i = 0; i < value.length; i++){
            const normalized = normalizeClass(value[i]);
            if (normalized) {
                res += normalized + " ";
            }
        }
    } else if (isObject(value)) {
        for(const name in value){
            if (value[name]) {
                res += name + " ";
            }
        }
    }
    return res.trim();
}
function normalizeProps(props) {
    if (!props) return null;
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
    }
    if (style) {
        props.style = normalizeStyle(style);
    }
    return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
    return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
    if (attrValidationCache.hasOwnProperty(name)) {
        return attrValidationCache[name];
    }
    const isUnsafe = unsafeAttrCharRE.test(name);
    if (isUnsafe) {
        console.error(`unsafe attribute name: ${name}`);
    }
    return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv"
};
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
const isKnownMathMLAttr = /* @__PURE__ */ makeMap(`accent,accentunder,actiontype,align,alignmentscope,altimg,altimg-height,altimg-valign,altimg-width,alttext,bevelled,close,columnsalign,columnlines,columnspan,denomalign,depth,dir,display,displaystyle,encoding,equalcolumns,equalrows,fence,fontstyle,fontweight,form,frame,framespacing,groupalign,height,href,id,indentalign,indentalignfirst,indentalignlast,indentshift,indentshiftfirst,indentshiftlast,indextype,justify,largetop,largeop,lquote,lspace,mathbackground,mathcolor,mathsize,mathvariant,maxsize,minlabelspacing,mode,other,overflow,position,rowalign,rowlines,rowspan,rquote,rspace,scriptlevel,scriptminsize,scriptsizemultiplier,selection,separator,separators,shift,side,src,stackalign,stretchy,subscriptshift,superscriptshift,symmetric,voffset,width,widths,xlink:href,xlink:show,xlink:type,xmlns`);
function isRenderableAttrValue(value) {
    if (value == null) {
        return false;
    }
    const type = typeof value;
    return type === "string" || type === "number" || type === "boolean";
}
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
    const str = "" + string;
    const match = escapeRE.exec(str);
    if (!match) {
        return str;
    }
    let html = "";
    let escaped;
    let index;
    let lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escaped = "&quot;";
                break;
            case 38:
                escaped = "&amp;";
                break;
            case 39:
                escaped = "&#39;";
                break;
            case 60:
                escaped = "&lt;";
                break;
            case 62:
                escaped = "&gt;";
                break;
            default:
                continue;
        }
        if (lastIndex !== index) {
            html += str.slice(lastIndex, index);
        }
        lastIndex = index + 1;
        html += escaped;
    }
    return lastIndex !== index ? html + str.slice(lastIndex, index) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
    return src.replace(commentStripRE, "");
}
const cssVarNameEscapeSymbolsRE = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function getEscapedCssVarName(key, doubleEscape) {
    return key.replace(cssVarNameEscapeSymbolsRE, (s)=>doubleEscape ? s === '"' ? '\\\\\\"' : `\\\\${s}` : `\\${s}`);
}
function looseCompareArrays(a, b) {
    if (a.length !== b.length) return false;
    let equal = true;
    for(let i = 0; equal && i < a.length; i++){
        equal = looseEqual(a[i], b[i]);
    }
    return equal;
}
function looseEqual(a, b) {
    if (a === b) return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
        return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
        return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
        if (!aValidType || !bValidType) {
            return false;
        }
        const aKeysCount = Object.keys(a).length;
        const bKeysCount = Object.keys(b).length;
        if (aKeysCount !== bKeysCount) {
            return false;
        }
        for(const key in a){
            const aHasKey = a.hasOwnProperty(key);
            const bHasKey = b.hasOwnProperty(key);
            if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
                return false;
            }
        }
    }
    return String(a) === String(b);
}
function looseIndexOf(arr, val) {
    return arr.findIndex((item)=>looseEqual(item, val));
}
const isRef = (val)=>{
    return !!(val && val["__v_isRef"] === true);
};
const toDisplayString = (val)=>{
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val)=>{
    if (isRef(val)) {
        return replacer(_key, val.value);
    } else if (isMap(val)) {
        return {
            [`Map(${val.size})`]: [
                ...val.entries()
            ].reduce((entries, [key, val2], i)=>{
                entries[stringifySymbol(key, i) + " =>"] = val2;
                return entries;
            }, {})
        };
    } else if (isSet(val)) {
        return {
            [`Set(${val.size})`]: [
                ...val.values()
            ].map((v)=>stringifySymbol(v))
        };
    } else if (isSymbol(val)) {
        return stringifySymbol(val);
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
        return String(val);
    }
    return val;
};
const stringifySymbol = (v, i = "")=>{
    var _a;
    return(// Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v);
};
function normalizeCssVarValue(value) {
    if (value == null) {
        return "initial";
    }
    if (typeof value === "string") {
        return value === "" ? " " : value;
    }
    if (typeof value !== "number" || !Number.isFinite(value)) {
        if ("TURBOPACK compile-time truthy", 1) {
            console.warn("[Vue warn] Invalid value used for CSS binding. Expected a string or a finite number but received:", value);
        }
    }
    return String(value);
}
;
}),
"[project]/OneDrive/Desktop/Divine Kitchen/node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARRAY_ITERATE_KEY",
    ()=>ARRAY_ITERATE_KEY,
    "EffectFlags",
    ()=>EffectFlags,
    "EffectScope",
    ()=>EffectScope,
    "ITERATE_KEY",
    ()=>ITERATE_KEY,
    "MAP_KEY_ITERATE_KEY",
    ()=>MAP_KEY_ITERATE_KEY,
    "ReactiveEffect",
    ()=>ReactiveEffect,
    "ReactiveFlags",
    ()=>ReactiveFlags,
    "TrackOpTypes",
    ()=>TrackOpTypes,
    "TriggerOpTypes",
    ()=>TriggerOpTypes,
    "WatchErrorCodes",
    ()=>WatchErrorCodes,
    "computed",
    ()=>computed,
    "customRef",
    ()=>customRef,
    "effect",
    ()=>effect,
    "effectScope",
    ()=>effectScope,
    "enableTracking",
    ()=>enableTracking,
    "getCurrentScope",
    ()=>getCurrentScope,
    "getCurrentWatcher",
    ()=>getCurrentWatcher,
    "isProxy",
    ()=>isProxy,
    "isReactive",
    ()=>isReactive,
    "isReadonly",
    ()=>isReadonly,
    "isRef",
    ()=>isRef,
    "isShallow",
    ()=>isShallow,
    "markRaw",
    ()=>markRaw,
    "onEffectCleanup",
    ()=>onEffectCleanup,
    "onScopeDispose",
    ()=>onScopeDispose,
    "onWatcherCleanup",
    ()=>onWatcherCleanup,
    "pauseTracking",
    ()=>pauseTracking,
    "proxyRefs",
    ()=>proxyRefs,
    "reactive",
    ()=>reactive,
    "reactiveReadArray",
    ()=>reactiveReadArray,
    "readonly",
    ()=>readonly,
    "ref",
    ()=>ref,
    "resetTracking",
    ()=>resetTracking,
    "shallowReactive",
    ()=>shallowReactive,
    "shallowReadArray",
    ()=>shallowReadArray,
    "shallowReadonly",
    ()=>shallowReadonly,
    "shallowRef",
    ()=>shallowRef,
    "stop",
    ()=>stop,
    "toRaw",
    ()=>toRaw,
    "toReactive",
    ()=>toReactive,
    "toReadonly",
    ()=>toReadonly,
    "toRef",
    ()=>toRef,
    "toRefs",
    ()=>toRefs,
    "toValue",
    ()=>toValue,
    "track",
    ()=>track,
    "traverse",
    ()=>traverse,
    "trigger",
    ()=>trigger,
    "triggerRef",
    ()=>triggerRef,
    "unref",
    ()=>unref,
    "watch",
    ()=>watch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
* @vue/reactivity v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/@vue/shared/dist/shared.esm-bundler.js [app-client] (ecmascript)");
;
function warn(msg, ...args) {
    console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
    // TODO isolatedDeclarations "__v_skip"
    constructor(detached = false){
        this.detached = detached;
        /**
     * @internal
     */ this._active = true;
        /**
     * @internal track `on` calls, allow `on` call multiple times
     */ this._on = 0;
        /**
     * @internal
     */ this.effects = [];
        /**
     * @internal
     */ this.cleanups = [];
        this._isPaused = false;
        this.__v_skip = true;
        this.parent = activeEffectScope;
        if (!detached && activeEffectScope) {
            this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(this) - 1;
        }
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = true;
            let i, l;
            if (this.scopes) {
                for(i = 0, l = this.scopes.length; i < l; i++){
                    this.scopes[i].pause();
                }
            }
            for(i = 0, l = this.effects.length; i < l; i++){
                this.effects[i].pause();
            }
        }
    }
    /**
   * Resumes the effect scope, including all child scopes and effects.
   */ resume() {
        if (this._active) {
            if (this._isPaused) {
                this._isPaused = false;
                let i, l;
                if (this.scopes) {
                    for(i = 0, l = this.scopes.length; i < l; i++){
                        this.scopes[i].resume();
                    }
                }
                for(i = 0, l = this.effects.length; i < l; i++){
                    this.effects[i].resume();
                }
            }
        }
    }
    run(fn) {
        if (this._active) {
            const currentEffectScope = activeEffectScope;
            try {
                activeEffectScope = this;
                return fn();
            } finally{
                activeEffectScope = currentEffectScope;
            }
        } else if ("TURBOPACK compile-time truthy", 1) {
            warn(`cannot run an inactive effect scope.`);
        }
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ on() {
        if (++this._on === 1) {
            this.prevScope = activeEffectScope;
            activeEffectScope = this;
        }
    }
    /**
   * This should only be called on non-detached scopes
   * @internal
   */ off() {
        if (this._on > 0 && --this._on === 0) {
            activeEffectScope = this.prevScope;
            this.prevScope = void 0;
        }
    }
    stop(fromParent) {
        if (this._active) {
            this._active = false;
            let i, l;
            for(i = 0, l = this.effects.length; i < l; i++){
                this.effects[i].stop();
            }
            this.effects.length = 0;
            for(i = 0, l = this.cleanups.length; i < l; i++){
                this.cleanups[i]();
            }
            this.cleanups.length = 0;
            if (this.scopes) {
                for(i = 0, l = this.scopes.length; i < l; i++){
                    this.scopes[i].stop(true);
                }
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !fromParent) {
                const last = this.parent.scopes.pop();
                if (last && last !== this) {
                    this.parent.scopes[this.index] = last;
                    last.index = this.index;
                }
            }
            this.parent = void 0;
        }
    }
}
function effectScope(detached) {
    return new EffectScope(detached);
}
function getCurrentScope() {
    return activeEffectScope;
}
function onScopeDispose(fn, failSilently = false) {
    if (activeEffectScope) {
        activeEffectScope.cleanups.push(fn);
    } else if (!!(("TURBOPACK compile-time value", "development") !== "production") && !failSilently) {
        warn(`onScopeDispose() is called when there is no active effect scope to be associated with.`);
    }
}
let activeSub;
const EffectFlags = {
    "ACTIVE": 1,
    "1": "ACTIVE",
    "RUNNING": 2,
    "2": "RUNNING",
    "TRACKING": 4,
    "4": "TRACKING",
    "NOTIFIED": 8,
    "8": "NOTIFIED",
    "DIRTY": 16,
    "16": "DIRTY",
    "ALLOW_RECURSE": 32,
    "32": "ALLOW_RECURSE",
    "PAUSED": 64,
    "64": "PAUSED",
    "EVALUATED": 128,
    "128": "EVALUATED"
};
const pausedQueueEffects = /* @__PURE__ */ new WeakSet();
class ReactiveEffect {
    constructor(fn){
        this.fn = fn;
        /**
     * @internal
     */ this.deps = void 0;
        /**
     * @internal
     */ this.depsTail = void 0;
        /**
     * @internal
     */ this.flags = 1 | 4;
        /**
     * @internal
     */ this.next = void 0;
        /**
     * @internal
     */ this.cleanup = void 0;
        this.scheduler = void 0;
        if (activeEffectScope && activeEffectScope.active) {
            activeEffectScope.effects.push(this);
        }
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        if (this.flags & 64) {
            this.flags &= -65;
            if (pausedQueueEffects.has(this)) {
                pausedQueueEffects.delete(this);
                this.trigger();
            }
        }
    }
    /**
   * @internal
   */ notify() {
        if (this.flags & 2 && !(this.flags & 32)) {
            return;
        }
        if (!(this.flags & 8)) {
            batch(this);
        }
    }
    run() {
        if (!(this.flags & 1)) {
            return this.fn();
        }
        this.flags |= 2;
        cleanupEffect(this);
        prepareDeps(this);
        const prevEffect = activeSub;
        const prevShouldTrack = shouldTrack;
        activeSub = this;
        shouldTrack = true;
        try {
            return this.fn();
        } finally{
            if (!!(("TURBOPACK compile-time value", "development") !== "production") && activeSub !== this) {
                warn("Active effect was not restored correctly - this is likely a Vue internal bug.");
            }
            cleanupDeps(this);
            activeSub = prevEffect;
            shouldTrack = prevShouldTrack;
            this.flags &= -3;
        }
    }
    stop() {
        if (this.flags & 1) {
            for(let link = this.deps; link; link = link.nextDep){
                removeSub(link);
            }
            this.deps = this.depsTail = void 0;
            cleanupEffect(this);
            this.onStop && this.onStop();
            this.flags &= -2;
        }
    }
    trigger() {
        if (this.flags & 64) {
            pausedQueueEffects.add(this);
        } else if (this.scheduler) {
            this.scheduler();
        } else {
            this.runIfDirty();
        }
    }
    /**
   * @internal
   */ runIfDirty() {
        if (isDirty(this)) {
            this.run();
        }
    }
    get dirty() {
        return isDirty(this);
    }
}
let batchDepth = 0;
let batchedSub;
let batchedComputed;
function batch(sub, isComputed = false) {
    sub.flags |= 8;
    if (isComputed) {
        sub.next = batchedComputed;
        batchedComputed = sub;
        return;
    }
    sub.next = batchedSub;
    batchedSub = sub;
}
function startBatch() {
    batchDepth++;
}
function endBatch() {
    if (--batchDepth > 0) {
        return;
    }
    if (batchedComputed) {
        let e = batchedComputed;
        batchedComputed = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            e = next;
        }
    }
    let error;
    while(batchedSub){
        let e = batchedSub;
        batchedSub = void 0;
        while(e){
            const next = e.next;
            e.next = void 0;
            e.flags &= -9;
            if (e.flags & 1) {
                try {
                    ;
                    e.trigger();
                } catch (err) {
                    if (!error) error = err;
                }
            }
            e = next;
        }
    }
    if (error) throw error;
}
function prepareDeps(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        link.version = -1;
        link.prevActiveLink = link.dep.activeLink;
        link.dep.activeLink = link;
    }
}
function cleanupDeps(sub) {
    let head;
    let tail = sub.depsTail;
    let link = tail;
    while(link){
        const prev = link.prevDep;
        if (link.version === -1) {
            if (link === tail) tail = prev;
            removeSub(link);
            removeDep(link);
        } else {
            head = link;
        }
        link.dep.activeLink = link.prevActiveLink;
        link.prevActiveLink = void 0;
        link = prev;
    }
    sub.deps = head;
    sub.depsTail = tail;
}
function isDirty(sub) {
    for(let link = sub.deps; link; link = link.nextDep){
        if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
            return true;
        }
    }
    if (sub._dirty) {
        return true;
    }
    return false;
}
function refreshComputed(computed) {
    if (computed.flags & 4 && !(computed.flags & 16)) {
        return;
    }
    computed.flags &= -17;
    if (computed.globalVersion === globalVersion) {
        return;
    }
    computed.globalVersion = globalVersion;
    if (!computed.isSSR && computed.flags & 128 && (!computed.deps && !computed._dirty || !isDirty(computed))) {
        return;
    }
    computed.flags |= 2;
    const dep = computed.dep;
    const prevSub = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = computed;
    shouldTrack = true;
    try {
        prepareDeps(computed);
        const value = computed.fn(computed._value);
        if (dep.version === 0 || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(value, computed._value)) {
            computed.flags |= 128;
            computed._value = value;
            dep.version++;
        }
    } catch (err) {
        dep.version++;
        throw err;
    } finally{
        activeSub = prevSub;
        shouldTrack = prevShouldTrack;
        cleanupDeps(computed);
        computed.flags &= -3;
    }
}
function removeSub(link, soft = false) {
    const { dep, prevSub, nextSub } = link;
    if (prevSub) {
        prevSub.nextSub = nextSub;
        link.prevSub = void 0;
    }
    if (nextSub) {
        nextSub.prevSub = prevSub;
        link.nextSub = void 0;
    }
    if (!!(("TURBOPACK compile-time value", "development") !== "production") && dep.subsHead === link) {
        dep.subsHead = nextSub;
    }
    if (dep.subs === link) {
        dep.subs = prevSub;
        if (!prevSub && dep.computed) {
            dep.computed.flags &= -5;
            for(let l = dep.computed.deps; l; l = l.nextDep){
                removeSub(l, true);
            }
        }
    }
    if (!soft && !--dep.sc && dep.map) {
        dep.map.delete(dep.key);
    }
}
function removeDep(link) {
    const { prevDep, nextDep } = link;
    if (prevDep) {
        prevDep.nextDep = nextDep;
        link.prevDep = void 0;
    }
    if (nextDep) {
        nextDep.prevDep = prevDep;
        link.nextDep = void 0;
    }
}
function effect(fn, options) {
    if (fn.effect instanceof ReactiveEffect) {
        fn = fn.effect.fn;
    }
    const e = new ReactiveEffect(fn);
    if (options) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(e, options);
    }
    try {
        e.run();
    } catch (err) {
        e.stop();
        throw err;
    }
    const runner = e.run.bind(e);
    runner.effect = e;
    return runner;
}
function stop(runner) {
    runner.effect.stop();
}
let shouldTrack = true;
const trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function onEffectCleanup(fn, failSilently = false) {
    if (activeSub instanceof ReactiveEffect) {
        activeSub.cleanup = fn;
    } else if (!!(("TURBOPACK compile-time value", "development") !== "production") && !failSilently) {
        warn(`onEffectCleanup() was called when there was no active effect to associate with.`);
    }
}
function cleanupEffect(e) {
    const { cleanup } = e;
    e.cleanup = void 0;
    if (cleanup) {
        const prevSub = activeSub;
        activeSub = void 0;
        try {
            cleanup();
        } finally{
            activeSub = prevSub;
        }
    }
}
let globalVersion = 0;
class Link {
    constructor(sub, dep){
        this.sub = sub;
        this.dep = dep;
        this.version = dep.version;
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
}
class Dep {
    // TODO isolatedDeclarations "__v_skip"
    constructor(computed){
        this.computed = computed;
        this.version = 0;
        /**
     * Link between this dep and the current active effect
     */ this.activeLink = void 0;
        /**
     * Doubly linked list representing the subscribing effects (tail)
     */ this.subs = void 0;
        /**
     * For object property deps cleanup
     */ this.map = void 0;
        this.key = void 0;
        /**
     * Subscriber counter
     */ this.sc = 0;
        /**
     * @internal
     */ this.__v_skip = true;
        if ("TURBOPACK compile-time truthy", 1) {
            this.subsHead = void 0;
        }
    }
    track(debugInfo) {
        if (!activeSub || !shouldTrack || activeSub === this.computed) {
            return;
        }
        let link = this.activeLink;
        if (link === void 0 || link.sub !== activeSub) {
            link = this.activeLink = new Link(activeSub, this);
            if (!activeSub.deps) {
                activeSub.deps = activeSub.depsTail = link;
            } else {
                link.prevDep = activeSub.depsTail;
                activeSub.depsTail.nextDep = link;
                activeSub.depsTail = link;
            }
            addSub(link);
        } else if (link.version === -1) {
            link.version = this.version;
            if (link.nextDep) {
                const next = link.nextDep;
                next.prevDep = link.prevDep;
                if (link.prevDep) {
                    link.prevDep.nextDep = next;
                }
                link.prevDep = activeSub.depsTail;
                link.nextDep = void 0;
                activeSub.depsTail.nextDep = link;
                activeSub.depsTail = link;
                if (activeSub.deps === link) {
                    activeSub.deps = next;
                }
            }
        }
        if (!!(("TURBOPACK compile-time value", "development") !== "production") && activeSub.onTrack) {
            activeSub.onTrack((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
                effect: activeSub
            }, debugInfo));
        }
        return link;
    }
    trigger(debugInfo) {
        this.version++;
        globalVersion++;
        this.notify(debugInfo);
    }
    notify(debugInfo) {
        startBatch();
        try {
            if ("TURBOPACK compile-time truthy", 1) {
                for(let head = this.subsHead; head; head = head.nextSub){
                    if (head.sub.onTrigger && !(head.sub.flags & 8)) {
                        head.sub.onTrigger((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])({
                            effect: head.sub
                        }, debugInfo));
                    }
                }
            }
            for(let link = this.subs; link; link = link.prevSub){
                if (link.sub.notify()) {
                    ;
                    link.sub.dep.notify();
                }
            }
        } finally{
            endBatch();
        }
    }
}
function addSub(link) {
    link.dep.sc++;
    if (link.sub.flags & 4) {
        const computed = link.dep.computed;
        if (computed && !link.dep.subs) {
            computed.flags |= 4 | 16;
            for(let l = computed.deps; l; l = l.nextDep){
                addSub(l);
            }
        }
        const currentTail = link.dep.subs;
        if (currentTail !== link) {
            link.prevSub = currentTail;
            if (currentTail) currentTail.nextSub = link;
        }
        if (!!(("TURBOPACK compile-time value", "development") !== "production") && link.dep.subsHead === void 0) {
            link.dep.subsHead = link;
        }
        link.dep.subs = link;
    }
}
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = /* @__PURE__ */ Symbol(("TURBOPACK compile-time truthy", 1) ? "Object iterate" : "TURBOPACK unreachable");
const MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(("TURBOPACK compile-time truthy", 1) ? "Map keys iterate" : "TURBOPACK unreachable");
const ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(("TURBOPACK compile-time truthy", 1) ? "Array iterate" : "TURBOPACK unreachable");
function track(target, type, key) {
    if (shouldTrack && activeSub) {
        let depsMap = targetMap.get(target);
        if (!depsMap) {
            targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
        }
        let dep = depsMap.get(key);
        if (!dep) {
            depsMap.set(key, dep = new Dep());
            dep.map = depsMap;
            dep.key = key;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            dep.track({
                target,
                type,
                key
            });
        } else //TURBOPACK unreachable
        ;
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        globalVersion++;
        return;
    }
    const run = (dep)=>{
        if (dep) {
            if ("TURBOPACK compile-time truthy", 1) {
                dep.trigger({
                    target,
                    type,
                    key,
                    newValue,
                    oldValue,
                    oldTarget
                });
            } else //TURBOPACK unreachable
            ;
        }
    };
    startBatch();
    if (type === "clear") {
        depsMap.forEach(run);
    } else {
        const targetIsArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(target);
        const isArrayIndex = targetIsArray && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntegerKey"])(key);
        if (targetIsArray && key === "length") {
            const newLength = Number(newValue);
            depsMap.forEach((dep, key2)=>{
                if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"])(key2) && key2 >= newLength) {
                    run(dep);
                }
            });
        } else {
            if (key !== void 0 || depsMap.has(void 0)) {
                run(depsMap.get(key));
            }
            if (isArrayIndex) {
                run(depsMap.get(ARRAY_ITERATE_KEY));
            }
            switch(type){
                case "add":
                    if (!targetIsArray) {
                        run(depsMap.get(ITERATE_KEY));
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(target)) {
                            run(depsMap.get(MAP_KEY_ITERATE_KEY));
                        }
                    } else if (isArrayIndex) {
                        run(depsMap.get("length"));
                    }
                    break;
                case "delete":
                    if (!targetIsArray) {
                        run(depsMap.get(ITERATE_KEY));
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(target)) {
                            run(depsMap.get(MAP_KEY_ITERATE_KEY));
                        }
                    }
                    break;
                case "set":
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(target)) {
                        run(depsMap.get(ITERATE_KEY));
                    }
                    break;
            }
        }
    }
    endBatch();
}
function getDepFromReactive(object, key) {
    const depMap = targetMap.get(object);
    return depMap && depMap.get(key);
}
function reactiveReadArray(array) {
    const raw = toRaw(array);
    if (raw === array) return raw;
    track(raw, "iterate", ARRAY_ITERATE_KEY);
    return isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
    track(arr = toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
    return arr;
}
function toWrapped(target, item) {
    if (isReadonly(target)) {
        return isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
    }
    return toReactive(item);
}
const arrayInstrumentations = {
    __proto__: null,
    [Symbol.iterator] () {
        return iterator(this, Symbol.iterator, (item)=>toWrapped(this, item));
    },
    concat (...args) {
        return reactiveReadArray(this).concat(...args.map((x)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(x) ? reactiveReadArray(x) : x));
    },
    entries () {
        return iterator(this, "entries", (value)=>{
            value[1] = toWrapped(this, value[1]);
            return value;
        });
    },
    every (fn, thisArg) {
        return apply(this, "every", fn, thisArg, void 0, arguments);
    },
    filter (fn, thisArg) {
        return apply(this, "filter", fn, thisArg, (v)=>v.map((item)=>toWrapped(this, item)), arguments);
    },
    find (fn, thisArg) {
        return apply(this, "find", fn, thisArg, (item)=>toWrapped(this, item), arguments);
    },
    findIndex (fn, thisArg) {
        return apply(this, "findIndex", fn, thisArg, void 0, arguments);
    },
    findLast (fn, thisArg) {
        return apply(this, "findLast", fn, thisArg, (item)=>toWrapped(this, item), arguments);
    },
    findLastIndex (fn, thisArg) {
        return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
    },
    // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
    forEach (fn, thisArg) {
        return apply(this, "forEach", fn, thisArg, void 0, arguments);
    },
    includes (...args) {
        return searchProxy(this, "includes", args);
    },
    indexOf (...args) {
        return searchProxy(this, "indexOf", args);
    },
    join (separator) {
        return reactiveReadArray(this).join(separator);
    },
    // keys() iterator only reads `length`, no optimization required
    lastIndexOf (...args) {
        return searchProxy(this, "lastIndexOf", args);
    },
    map (fn, thisArg) {
        return apply(this, "map", fn, thisArg, void 0, arguments);
    },
    pop () {
        return noTracking(this, "pop");
    },
    push (...args) {
        return noTracking(this, "push", args);
    },
    reduce (fn, ...args) {
        return reduce(this, "reduce", fn, args);
    },
    reduceRight (fn, ...args) {
        return reduce(this, "reduceRight", fn, args);
    },
    shift () {
        return noTracking(this, "shift");
    },
    // slice could use ARRAY_ITERATE but also seems to beg for range tracking
    some (fn, thisArg) {
        return apply(this, "some", fn, thisArg, void 0, arguments);
    },
    splice (...args) {
        return noTracking(this, "splice", args);
    },
    toReversed () {
        return reactiveReadArray(this).toReversed();
    },
    toSorted (comparer) {
        return reactiveReadArray(this).toSorted(comparer);
    },
    toSpliced (...args) {
        return reactiveReadArray(this).toSpliced(...args);
    },
    unshift (...args) {
        return noTracking(this, "unshift", args);
    },
    values () {
        return iterator(this, "values", (item)=>toWrapped(this, item));
    }
};
function iterator(self, method, wrapValue) {
    const arr = shallowReadArray(self);
    const iter = arr[method]();
    if (arr !== self && !isShallow(self)) {
        iter._next = iter.next;
        iter.next = ()=>{
            const result = iter._next();
            if (!result.done) {
                result.value = wrapValue(result.value);
            }
            return result;
        };
    }
    return iter;
}
const arrayProto = Array.prototype;
function apply(self, method, fn, thisArg, wrappedRetFn, args) {
    const arr = shallowReadArray(self);
    const needsWrap = arr !== self && !isShallow(self);
    const methodFn = arr[method];
    if (methodFn !== arrayProto[method]) {
        const result2 = methodFn.apply(self, args);
        return needsWrap ? toReactive(result2) : result2;
    }
    let wrappedFn = fn;
    if (arr !== self) {
        if (needsWrap) {
            wrappedFn = function(item, index) {
                return fn.call(this, toWrapped(self, item), index, self);
            };
        } else if (fn.length > 2) {
            wrappedFn = function(item, index) {
                return fn.call(this, item, index, self);
            };
        }
    }
    const result = methodFn.call(arr, wrappedFn, thisArg);
    return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self, method, fn, args) {
    const arr = shallowReadArray(self);
    let wrappedFn = fn;
    if (arr !== self) {
        if (!isShallow(self)) {
            wrappedFn = function(acc, item, index) {
                return fn.call(this, acc, toWrapped(self, item), index, self);
            };
        } else if (fn.length > 3) {
            wrappedFn = function(acc, item, index) {
                return fn.call(this, acc, item, index, self);
            };
        }
    }
    return arr[method](wrappedFn, ...args);
}
function searchProxy(self, method, args) {
    const arr = toRaw(self);
    track(arr, "iterate", ARRAY_ITERATE_KEY);
    const res = arr[method](...args);
    if ((res === -1 || res === false) && isProxy(args[0])) {
        args[0] = toRaw(args[0]);
        return arr[method](...args);
    }
    return res;
}
function noTracking(self, method, args = []) {
    pauseTracking();
    startBatch();
    const res = toRaw(self)[method].apply(self, args);
    endBatch();
    resetTracking();
    return res;
}
const isNonTrackableKeys = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["makeMap"])(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key)=>key !== "arguments" && key !== "caller").map((key)=>Symbol[key]).filter(__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"]));
function hasOwnProperty(key) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"])(key)) key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
    constructor(_isReadonly = false, _isShallow = false){
        this._isReadonly = _isReadonly;
        this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
        if (key === "__v_skip") return target["__v_skip"];
        const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
        if (key === "__v_isReactive") {
            return !isReadonly2;
        } else if (key === "__v_isReadonly") {
            return isReadonly2;
        } else if (key === "__v_isShallow") {
            return isShallow2;
        } else if (key === "__v_raw") {
            if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
            // this means the receiver is a user proxy of the reactive proxy
            Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
                return target;
            }
            return;
        }
        const targetIsArray = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(target);
        if (!isReadonly2) {
            let fn;
            if (targetIsArray && (fn = arrayInstrumentations[key])) {
                return fn;
            }
            if (key === "hasOwnProperty") {
                return hasOwnProperty;
            }
        }
        const res = Reflect.get(target, key, // if this is a proxy wrapping a ref, return methods using the raw ref
        // as receiver so that we don't have to call `toRaw` on the ref in all
        // its class methods
        isRef(target) ? target : receiver);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"])(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
            return res;
        }
        if (!isReadonly2) {
            track(target, "get", key);
        }
        if (isShallow2) {
            return res;
        }
        if (isRef(res)) {
            const value = targetIsArray && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntegerKey"])(key) ? res : res.value;
            return isReadonly2 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) ? readonly(value) : value;
        }
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(res)) {
            return isReadonly2 ? readonly(res) : reactive(res);
        }
        return res;
    }
}
class MutableReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(false, isShallow2);
    }
    set(target, key, value, receiver) {
        let oldValue = target[key];
        const isArrayWithIntegerKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(target) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntegerKey"])(key);
        if (!this._isShallow) {
            const isOldValueReadonly = isReadonly(oldValue);
            if (!isShallow(value) && !isReadonly(value)) {
                oldValue = toRaw(oldValue);
                value = toRaw(value);
            }
            if (!isArrayWithIntegerKey && isRef(oldValue) && !isRef(value)) {
                if (isOldValueReadonly) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target[key]);
                    }
                    return true;
                } else {
                    oldValue.value = value;
                    return true;
                }
            }
        }
        const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(target, key);
        const result = Reflect.set(target, key, value, isRef(target) ? target : receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) {
                trigger(target, "add", key, value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(value, oldValue)) {
                trigger(target, "set", key, value, oldValue);
            }
        }
        return result;
    }
    deleteProperty(target, key) {
        const hadKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(target, key);
        const oldValue = target[key];
        const result = Reflect.deleteProperty(target, key);
        if (result && hadKey) {
            trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
    }
    has(target, key) {
        const result = Reflect.has(target, key);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSymbol"])(key) || !builtInSymbols.has(key)) {
            track(target, "has", key);
        }
        return result;
    }
    ownKeys(target) {
        track(target, "iterate", (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(target) ? "length" : ITERATE_KEY);
        return Reflect.ownKeys(target);
    }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
    constructor(isShallow2 = false){
        super(true, isShallow2);
    }
    set(target, key) {
        if ("TURBOPACK compile-time truthy", 1) {
            warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    }
    deleteProperty(target, key) {
        if ("TURBOPACK compile-time truthy", 1) {
            warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        }
        return true;
    }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
const shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
const toShallow = (value)=>value;
const getProto = (v)=>Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
        !isReadonly2 && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(// inheriting all iterator properties
        Object.create(innerIterator), {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            }
        });
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        if ("TURBOPACK compile-time truthy", 1) {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            warn(`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"])(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
}
function createInstrumentations(readonly, shallow) {
    const instrumentations = {
        get (key) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const rawKey = toRaw(key);
            if (!readonly) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(key, rawKey)) {
                    track(rawTarget, "get", key);
                }
                track(rawTarget, "get", rawKey);
            }
            const { has } = getProto(rawTarget);
            const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
            if (has.call(rawTarget, key)) {
                return wrap(target.get(key));
            } else if (has.call(rawTarget, rawKey)) {
                return wrap(target.get(rawKey));
            } else if (target !== rawTarget) {
                target.get(key);
            }
        },
        get size () {
            const target = this["__v_raw"];
            !readonly && track(toRaw(target), "iterate", ITERATE_KEY);
            return target.size;
        },
        has (key) {
            const target = this["__v_raw"];
            const rawTarget = toRaw(target);
            const rawKey = toRaw(key);
            if (!readonly) {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(key, rawKey)) {
                    track(rawTarget, "has", key);
                }
                track(rawTarget, "has", rawKey);
            }
            return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
        },
        forEach (callback, thisArg) {
            const observed = this;
            const target = observed["__v_raw"];
            const rawTarget = toRaw(target);
            const wrap = shallow ? toShallow : readonly ? toReadonly : toReactive;
            !readonly && track(rawTarget, "iterate", ITERATE_KEY);
            return target.forEach((value, key)=>{
                return callback.call(thisArg, wrap(value), wrap(key), observed);
            });
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extend"])(instrumentations, readonly ? {
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear")
    } : {
        add (value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) {
                value = toRaw(value);
            }
            const target = toRaw(this);
            const proto = getProto(target);
            const hadKey = proto.has.call(target, value);
            if (!hadKey) {
                target.add(value);
                trigger(target, "add", value, value);
            }
            return this;
        },
        set (key, value) {
            if (!shallow && !isShallow(value) && !isReadonly(value)) {
                value = toRaw(value);
            }
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = toRaw(key);
                hadKey = has.call(target, key);
            } else if ("TURBOPACK compile-time truthy", 1) {
                checkIdentityKeys(target, has, key);
            }
            const oldValue = get.call(target, key);
            target.set(key, value);
            if (!hadKey) {
                trigger(target, "add", key, value);
            } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(value, oldValue)) {
                trigger(target, "set", key, value, oldValue);
            }
            return this;
        },
        delete (key) {
            const target = toRaw(this);
            const { has, get } = getProto(target);
            let hadKey = has.call(target, key);
            if (!hadKey) {
                key = toRaw(key);
                hadKey = has.call(target, key);
            } else if ("TURBOPACK compile-time truthy", 1) {
                checkIdentityKeys(target, has, key);
            }
            const oldValue = get ? get.call(target, key) : void 0;
            const result = target.delete(key);
            if (hadKey) {
                trigger(target, "delete", key, void 0, oldValue);
            }
            return result;
        },
        clear () {
            const target = toRaw(this);
            const hadItems = target.size !== 0;
            const oldTarget = ("TURBOPACK compile-time truthy", 1) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(target) ? new Map(target) : new Set(target) : "TURBOPACK unreachable";
            const result = target.clear();
            if (hadItems) {
                trigger(target, "clear", void 0, void 0, oldTarget);
            }
            return result;
        }
    });
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        instrumentations[method] = createIterableMethod(method, readonly, shallow);
    });
    return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = createInstrumentations(isReadonly2, shallow);
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") {
            return !isReadonly2;
        } else if (key === "__v_isReadonly") {
            return isReadonly2;
        } else if (key === "__v_raw") {
            return target;
        }
        return Reflect.get((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
const mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
const readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
const shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has.call(target, rawKey)) {
        const type = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRawType"])(target);
        warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1 /* COMMON */ ;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2 /* COLLECTION */ ;
        default:
            return 0 /* INVALID */ ;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 /* INVALID */  : targetTypeMap((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRawType"])(value));
}
// @__NO_SIDE_EFFECTS__
function reactive(target) {
    if (/* @__PURE__ */ isReadonly(target)) {
        return target;
    }
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
// @__NO_SIDE_EFFECTS__
function shallowReactive(target) {
    return createReactiveObject(target, false, shallowReactiveHandlers, shallowCollectionHandlers, shallowReactiveMap);
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
// @__NO_SIDE_EFFECTS__
function shallowReadonly(target) {
    return createReactiveObject(target, true, shallowReadonlyHandlers, shallowReadonlyCollectionHandlers, shallowReadonlyMap);
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(target)) {
        if ("TURBOPACK compile-time truthy", 1) {
            warn(`value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(target)}`);
        }
        return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
        return target;
    }
    const targetType = getTargetType(target);
    if (targetType === 0 /* INVALID */ ) {
        return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
        return existingProxy;
    }
    const proxy = new Proxy(target, targetType === 2 /* COLLECTION */  ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
    if (/* @__PURE__ */ isReadonly(value)) {
        return /* @__PURE__ */ isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasOwn"])(value, "__v_skip") && Object.isExtensible(value)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["def"])(value, "__v_skip", true);
    }
    return value;
}
const toReactive = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) ? /* @__PURE__ */ reactive(value) : value;
const toReadonly = (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef(r) {
    return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref(value) {
    return createRef(value, false);
}
// @__NO_SIDE_EFFECTS__
function shallowRef(value) {
    return createRef(value, true);
}
function createRef(rawValue, shallow) {
    if (/* @__PURE__ */ isRef(rawValue)) {
        return rawValue;
    }
    return new RefImpl(rawValue, shallow);
}
class RefImpl {
    constructor(value, isShallow2){
        this.dep = new Dep();
        this["__v_isRef"] = true;
        this["__v_isShallow"] = false;
        this._rawValue = isShallow2 ? value : toRaw(value);
        this._value = isShallow2 ? value : toReactive(value);
        this["__v_isShallow"] = isShallow2;
    }
    get value() {
        if ("TURBOPACK compile-time truthy", 1) {
            this.dep.track({
                target: this,
                type: "get",
                key: "value"
            });
        } else //TURBOPACK unreachable
        ;
        return this._value;
    }
    set value(newValue) {
        const oldValue = this._rawValue;
        const useDirectValue = this["__v_isShallow"] || isShallow(newValue) || isReadonly(newValue);
        newValue = useDirectValue ? newValue : toRaw(newValue);
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(newValue, oldValue)) {
            this._rawValue = newValue;
            this._value = useDirectValue ? newValue : toReactive(newValue);
            if ("TURBOPACK compile-time truthy", 1) {
                this.dep.trigger({
                    target: this,
                    type: "set",
                    key: "value",
                    newValue,
                    oldValue
                });
            } else //TURBOPACK unreachable
            ;
        }
    }
}
function triggerRef(ref2) {
    if (ref2.dep) {
        if ("TURBOPACK compile-time truthy", 1) {
            ref2.dep.trigger({
                target: ref2,
                type: "set",
                key: "value",
                newValue: ref2._value
            });
        } else //TURBOPACK unreachable
        ;
    }
}
function unref(ref2) {
    return /* @__PURE__ */ isRef(ref2) ? ref2.value : ref2;
}
function toValue(source) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(source) ? source() : unref(source);
}
const shallowUnwrapHandlers = {
    get: (target, key, receiver)=>key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver)=>{
        const oldValue = target[key];
        if (/* @__PURE__ */ isRef(oldValue) && !/* @__PURE__ */ isRef(value)) {
            oldValue.value = value;
            return true;
        } else {
            return Reflect.set(target, key, value, receiver);
        }
    }
};
function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
class CustomRefImpl {
    constructor(factory){
        this["__v_isRef"] = true;
        this._value = void 0;
        const dep = this.dep = new Dep();
        const { get, set } = factory(dep.track.bind(dep), dep.trigger.bind(dep));
        this._get = get;
        this._set = set;
    }
    get value() {
        return this._value = this._get();
    }
    set value(newVal) {
        this._set(newVal);
    }
}
function customRef(factory) {
    return new CustomRefImpl(factory);
}
// @__NO_SIDE_EFFECTS__
function toRefs(object) {
    if (!!(("TURBOPACK compile-time value", "development") !== "production") && !isProxy(object)) {
        warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(object) ? new Array(object.length) : {};
    for(const key in object){
        ret[key] = propertyToRef(object, key);
    }
    return ret;
}
class ObjectRefImpl {
    constructor(_object, _key, _defaultValue){
        this._object = _object;
        this._key = _key;
        this._defaultValue = _defaultValue;
        this["__v_isRef"] = true;
        this._value = void 0;
        this._raw = toRaw(_object);
        let shallow = true;
        let obj = _object;
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(_object) || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isIntegerKey"])(String(_key))) {
            do {
                shallow = !isProxy(obj) || isShallow(obj);
            }while (shallow && (obj = obj["__v_raw"]))
        }
        this._shallow = shallow;
    }
    get value() {
        let val = this._object[this._key];
        if (this._shallow) {
            val = unref(val);
        }
        return this._value = val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
        if (this._shallow && /* @__PURE__ */ isRef(this._raw[this._key])) {
            const nestedRef = this._object[this._key];
            if (/* @__PURE__ */ isRef(nestedRef)) {
                nestedRef.value = newVal;
                return;
            }
        }
        this._object[this._key] = newVal;
    }
    get dep() {
        return getDepFromReactive(this._raw, this._key);
    }
}
class GetterRefImpl {
    constructor(_getter){
        this._getter = _getter;
        this["__v_isRef"] = true;
        this["__v_isReadonly"] = true;
        this._value = void 0;
    }
    get value() {
        return this._value = this._getter();
    }
}
// @__NO_SIDE_EFFECTS__
function toRef(source, key, defaultValue) {
    if (/* @__PURE__ */ isRef(source)) {
        return source;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(source)) {
        return new GetterRefImpl(source);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(source) && arguments.length > 1) {
        return propertyToRef(source, key, defaultValue);
    } else {
        return /* @__PURE__ */ ref(source);
    }
}
function propertyToRef(source, key, defaultValue) {
    return new ObjectRefImpl(source, key, defaultValue);
}
class ComputedRefImpl {
    constructor(fn, setter, isSSR){
        this.fn = fn;
        this.setter = setter;
        /**
     * @internal
     */ this._value = void 0;
        /**
     * @internal
     */ this.dep = new Dep(this);
        /**
     * @internal
     */ this.__v_isRef = true;
        // TODO isolatedDeclarations "__v_isReadonly"
        // A computed is also a subscriber that tracks other deps
        /**
     * @internal
     */ this.deps = void 0;
        /**
     * @internal
     */ this.depsTail = void 0;
        /**
     * @internal
     */ this.flags = 16;
        /**
     * @internal
     */ this.globalVersion = globalVersion - 1;
        /**
     * @internal
     */ this.next = void 0;
        // for backwards compat
        this.effect = this;
        this["__v_isReadonly"] = !setter;
        this.isSSR = isSSR;
    }
    /**
   * @internal
   */ notify() {
        this.flags |= 16;
        if (!(this.flags & 8) && // avoid infinite self recursion
        activeSub !== this) {
            batch(this, true);
            return true;
        } else if (!!(("TURBOPACK compile-time value", "development") !== "production")) ;
    }
    get value() {
        const link = ("TURBOPACK compile-time truthy", 1) ? this.dep.track({
            target: this,
            type: "get",
            key: "value"
        }) : "TURBOPACK unreachable";
        refreshComputed(this);
        if (link) {
            link.version = this.dep.version;
        }
        return this._value;
    }
    set value(newValue) {
        if (this.setter) {
            this.setter(newValue);
        } else if ("TURBOPACK compile-time truthy", 1) {
            warn("Write operation failed: computed value is readonly");
        }
    }
}
// @__NO_SIDE_EFFECTS__
function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(getterOrOptions)) {
        getter = getterOrOptions;
    } else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, isSSR);
    if (!!(("TURBOPACK compile-time value", "development") !== "production") && debugOptions && !isSSR) {
        cRef.onTrack = debugOptions.onTrack;
        cRef.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
}
const TrackOpTypes = {
    "GET": "get",
    "HAS": "has",
    "ITERATE": "iterate"
};
const TriggerOpTypes = {
    "SET": "set",
    "ADD": "add",
    "DELETE": "delete",
    "CLEAR": "clear"
};
const ReactiveFlags = {
    "SKIP": "__v_skip",
    "IS_REACTIVE": "__v_isReactive",
    "IS_READONLY": "__v_isReadonly",
    "IS_SHALLOW": "__v_isShallow",
    "RAW": "__v_raw",
    "IS_REF": "__v_isRef"
};
const WatchErrorCodes = {
    "WATCH_GETTER": 2,
    "2": "WATCH_GETTER",
    "WATCH_CALLBACK": 3,
    "3": "WATCH_CALLBACK",
    "WATCH_CLEANUP": 4,
    "4": "WATCH_CLEANUP"
};
const INITIAL_WATCHER_VALUE = {};
const cleanupMap = /* @__PURE__ */ new WeakMap();
let activeWatcher = void 0;
function getCurrentWatcher() {
    return activeWatcher;
}
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
    if (owner) {
        let cleanups = cleanupMap.get(owner);
        if (!cleanups) cleanupMap.set(owner, cleanups = []);
        cleanups.push(cleanupFn);
    } else if (!!(("TURBOPACK compile-time value", "development") !== "production") && !failSilently) {
        warn(`onWatcherCleanup() was called when there was no active watcher to associate with.`);
    }
}
function watch(source, cb, options = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMPTY_OBJ"]) {
    const { immediate, deep, once, scheduler, augmentJob, call } = options;
    const warnInvalidSource = (s)=>{
        (options.onWarn || warn)(`Invalid watch source: `, s, `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`);
    };
    const reactiveGetter = (source2)=>{
        if (deep) return source2;
        if (isShallow(source2) || deep === false || deep === 0) return traverse(source2, 1);
        return traverse(source2);
    };
    let effect;
    let getter;
    let cleanup;
    let boundCleanup;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
        getter = ()=>source.value;
        forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
        getter = ()=>reactiveGetter(source);
        forceTrigger = true;
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(source)) {
        isMultiSource = true;
        forceTrigger = source.some((s)=>isReactive(s) || isShallow(s));
        getter = ()=>source.map((s)=>{
                if (isRef(s)) {
                    return s.value;
                } else if (isReactive(s)) {
                    return reactiveGetter(s);
                } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(s)) {
                    return call ? call(s, 2) : s();
                } else {
                    !!(("TURBOPACK compile-time value", "development") !== "production") && warnInvalidSource(s);
                }
            });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"])(source)) {
        if (cb) {
            getter = call ? ()=>call(source, 2) : source;
        } else {
            getter = ()=>{
                if (cleanup) {
                    pauseTracking();
                    try {
                        cleanup();
                    } finally{
                        resetTracking();
                    }
                }
                const currentEffect = activeWatcher;
                activeWatcher = effect;
                try {
                    return call ? call(source, 3, [
                        boundCleanup
                    ]) : source(boundCleanup);
                } finally{
                    activeWatcher = currentEffect;
                }
            };
        }
    } else {
        getter = __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NOOP"];
        !!(("TURBOPACK compile-time value", "development") !== "production") && warnInvalidSource(source);
    }
    if (cb && deep) {
        const baseGetter = getter;
        const depth = deep === true ? Infinity : deep;
        getter = ()=>traverse(baseGetter(), depth);
    }
    const scope = getCurrentScope();
    const watchHandle = ()=>{
        effect.stop();
        if (scope && scope.active) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["remove"])(scope.effects, effect);
        }
    };
    if (once && cb) {
        const _cb = cb;
        cb = (...args)=>{
            _cb(...args);
            watchHandle();
        };
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = (immediateFirstRun)=>{
        if (!(effect.flags & 1) || !effect.dirty && !immediateFirstRun) {
            return;
        }
        if (cb) {
            const newValue = effect.run();
            if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(v, oldValue[i])) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasChanged"])(newValue, oldValue))) {
                if (cleanup) {
                    cleanup();
                }
                const currentWatcher = activeWatcher;
                activeWatcher = effect;
                try {
                    const args = [
                        newValue,
                        // pass undefined as the old value when it's changed for the first time
                        oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
                        boundCleanup
                    ];
                    oldValue = newValue;
                    call ? call(cb, 3, args) : // @ts-expect-error
                    cb(...args);
                } finally{
                    activeWatcher = currentWatcher;
                }
            }
        } else {
            effect.run();
        }
    };
    if (augmentJob) {
        augmentJob(job);
    }
    effect = new ReactiveEffect(getter);
    effect.scheduler = scheduler ? ()=>scheduler(job, false) : job;
    boundCleanup = (fn)=>onWatcherCleanup(fn, false, effect);
    cleanup = effect.onStop = ()=>{
        const cleanups = cleanupMap.get(effect);
        if (cleanups) {
            if (call) {
                call(cleanups, 4);
            } else {
                for (const cleanup2 of cleanups)cleanup2();
            }
            cleanupMap.delete(effect);
        }
    };
    if ("TURBOPACK compile-time truthy", 1) {
        effect.onTrack = options.onTrack;
        effect.onTrigger = options.onTrigger;
    }
    if (cb) {
        if (immediate) {
            job(true);
        } else {
            oldValue = effect.run();
        }
    } else if (scheduler) {
        scheduler(job.bind(null, true), true);
    } else {
        effect.run();
    }
    watchHandle.pause = effect.pause.bind(effect);
    watchHandle.resume = effect.resume.bind(effect);
    watchHandle.stop = watchHandle;
    return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isObject"])(value) || value["__v_skip"]) {
        return value;
    }
    seen = seen || /* @__PURE__ */ new Map();
    if ((seen.get(value) || 0) >= depth) {
        return value;
    }
    seen.set(value, depth);
    depth--;
    if (isRef(value)) {
        traverse(value.value, depth, seen);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isArray"])(value)) {
        for(let i = 0; i < value.length; i++){
            traverse(value[i], depth, seen);
        }
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSet"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMap"])(value)) {
        value.forEach((v)=>{
            traverse(v, depth, seen);
        });
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$shared$2f$dist$2f$shared$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"])(value)) {
        for(const key in value){
            traverse(value[key], depth, seen);
        }
        for (const key of Object.getOwnPropertySymbols(value)){
            if (Object.prototype.propertyIsEnumerable.call(value, key)) {
                traverse(value[key], depth, seen);
            }
        }
    }
    return value;
}
;
}),
"[project]/OneDrive/Desktop/Divine Kitchen/node_modules/vue/dist/vue.runtime.esm-bundler.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compile",
    ()=>compile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
* vue v3.5.28
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/ var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$core$2f$dist$2f$runtime$2d$core$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js [app-client] (ecmascript) <locals>");
;
;
function initDev() {
    {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$core$2f$dist$2f$runtime$2d$core$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initCustomFormatter"])();
    }
}
if ("TURBOPACK compile-time truthy", 1) {
    initDev();
}
const compile = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$core$2f$dist$2f$runtime$2d$core$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["warn"])(`Runtime compilation is not supported in this build of Vue.` + ` Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`);
    }
};
;
}),
"[project]/OneDrive/Desktop/Divine Kitchen/node_modules/vue/dist/vue.runtime.esm-bundler.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseTransition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransition"],
    "BaseTransitionPropsValidators",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseTransitionPropsValidators"],
    "Comment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Comment"],
    "DeprecationTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DeprecationTypes"],
    "EffectScope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectScope"],
    "ErrorCodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorCodes"],
    "ErrorTypeStrings",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ErrorTypeStrings"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
    "KeepAlive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KeepAlive"],
    "ReactiveEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactiveEffect"],
    "Static",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Static"],
    "Suspense",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"],
    "Teleport",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Teleport"],
    "Text",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"],
    "TrackOpTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrackOpTypes"],
    "Transition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transition"],
    "TransitionGroup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransitionGroup"],
    "TriggerOpTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TriggerOpTypes"],
    "VueElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VueElement"],
    "assertNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["assertNumber"],
    "callWithAsyncErrorHandling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callWithAsyncErrorHandling"],
    "callWithErrorHandling",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callWithErrorHandling"],
    "camelize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["camelize"],
    "capitalize",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["capitalize"],
    "cloneVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cloneVNode"],
    "compatUtils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["compatUtils"],
    "compile",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$vue$2f$dist$2f$vue$2e$runtime$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["compile"],
    "computed",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computed"],
    "createApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createApp"],
    "createBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBlock"],
    "createCommentVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createCommentVNode"],
    "createElementBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementBlock"],
    "createElementVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElementVNode"],
    "createHydrationRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createHydrationRenderer"],
    "createPropsRestProxy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPropsRestProxy"],
    "createRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRenderer"],
    "createSSRApp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSSRApp"],
    "createSlots",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSlots"],
    "createStaticVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStaticVNode"],
    "createTextVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTextVNode"],
    "createVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createVNode"],
    "customRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["customRef"],
    "defineAsyncComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineAsyncComponent"],
    "defineComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineComponent"],
    "defineCustomElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineCustomElement"],
    "defineEmits",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineEmits"],
    "defineExpose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineExpose"],
    "defineModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineModel"],
    "defineOptions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineOptions"],
    "defineProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineProps"],
    "defineSSRCustomElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineSSRCustomElement"],
    "defineSlots",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineSlots"],
    "devtools",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["devtools"],
    "effect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effect"],
    "effectScope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["effectScope"],
    "getCurrentInstance",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentInstance"],
    "getCurrentScope",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentScope"],
    "getCurrentWatcher",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentWatcher"],
    "getTransitionRawChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransitionRawChildren"],
    "guardReactiveProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["guardReactiveProps"],
    "h",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"],
    "handleError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["handleError"],
    "hasInjectionContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasInjectionContext"],
    "hydrate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrate"],
    "hydrateOnIdle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrateOnIdle"],
    "hydrateOnInteraction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrateOnInteraction"],
    "hydrateOnMediaQuery",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrateOnMediaQuery"],
    "hydrateOnVisible",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hydrateOnVisible"],
    "initCustomFormatter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initCustomFormatter"],
    "initDirectivesForSSR",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initDirectivesForSSR"],
    "inject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inject"],
    "isMemoSame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMemoSame"],
    "isProxy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProxy"],
    "isReactive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReactive"],
    "isReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isReadonly"],
    "isRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRef"],
    "isRuntimeOnly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRuntimeOnly"],
    "isShallow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isShallow"],
    "isVNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isVNode"],
    "markRaw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markRaw"],
    "mergeDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDefaults"],
    "mergeModels",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeModels"],
    "mergeProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"],
    "nextTick",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextTick"],
    "nodeOps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeOps"],
    "normalizeClass",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeClass"],
    "normalizeProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeProps"],
    "normalizeStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeStyle"],
    "onActivated",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onActivated"],
    "onBeforeMount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBeforeMount"],
    "onBeforeUnmount",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBeforeUnmount"],
    "onBeforeUpdate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onBeforeUpdate"],
    "onDeactivated",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onDeactivated"],
    "onErrorCaptured",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onErrorCaptured"],
    "onMounted",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onMounted"],
    "onRenderTracked",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onRenderTracked"],
    "onRenderTriggered",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onRenderTriggered"],
    "onScopeDispose",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onScopeDispose"],
    "onServerPrefetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onServerPrefetch"],
    "onUnmounted",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUnmounted"],
    "onUpdated",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onUpdated"],
    "onWatcherCleanup",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["onWatcherCleanup"],
    "openBlock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openBlock"],
    "patchProp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchProp"],
    "popScopeId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["popScopeId"],
    "provide",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["provide"],
    "proxyRefs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["proxyRefs"],
    "pushScopeId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pushScopeId"],
    "queuePostFlushCb",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queuePostFlushCb"],
    "reactive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reactive"],
    "readonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readonly"],
    "ref",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ref"],
    "registerRuntimeCompiler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerRuntimeCompiler"],
    "render",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["render"],
    "renderList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderList"],
    "renderSlot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderSlot"],
    "resolveComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveComponent"],
    "resolveDirective",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDirective"],
    "resolveDynamicComponent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveDynamicComponent"],
    "resolveFilter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFilter"],
    "resolveTransitionHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveTransitionHooks"],
    "setBlockTracking",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setBlockTracking"],
    "setDevtoolsHook",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setDevtoolsHook"],
    "setTransitionHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setTransitionHooks"],
    "shallowReactive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowReactive"],
    "shallowReadonly",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowReadonly"],
    "shallowRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shallowRef"],
    "ssrContextKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ssrContextKey"],
    "ssrUtils",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ssrUtils"],
    "stop",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stop"],
    "toDisplayString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toDisplayString"],
    "toHandlerKey",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHandlerKey"],
    "toHandlers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHandlers"],
    "toRaw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRaw"],
    "toRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRef"],
    "toRefs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRefs"],
    "toValue",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toValue"],
    "transformVNodeArgs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["transformVNodeArgs"],
    "triggerRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["triggerRef"],
    "unref",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unref"],
    "useAttrs",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAttrs"],
    "useCssModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCssModule"],
    "useCssVars",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCssVars"],
    "useHost",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHost"],
    "useId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"],
    "useModel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useModel"],
    "useSSRContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSSRContext"],
    "useShadowRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useShadowRoot"],
    "useSlots",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSlots"],
    "useTemplateRef",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTemplateRef"],
    "useTransitionState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransitionState"],
    "vModelCheckbox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vModelCheckbox"],
    "vModelDynamic",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vModelDynamic"],
    "vModelRadio",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vModelRadio"],
    "vModelSelect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vModelSelect"],
    "vModelText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vModelText"],
    "vShow",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vShow"],
    "version",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"],
    "warn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["warn"],
    "watch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watch"],
    "watchEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchEffect"],
    "watchPostEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchPostEffect"],
    "watchSyncEffect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["watchSyncEffect"],
    "withAsyncContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withAsyncContext"],
    "withCtx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withCtx"],
    "withDefaults",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withDefaults"],
    "withDirectives",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withDirectives"],
    "withKeys",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withKeys"],
    "withMemo",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withMemo"],
    "withModifiers",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withModifiers"],
    "withScopeId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withScopeId"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f$vue$2f$dist$2f$vue$2e$runtime$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/vue/dist/vue.runtime.esm-bundler.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$OneDrive$2f$Desktop$2f$Divine__Kitchen$2f$node_modules$2f40$vue$2f$runtime$2d$dom$2f$dist$2f$runtime$2d$dom$2e$esm$2d$bundler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/OneDrive/Desktop/Divine Kitchen/node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=7dee8_5f000962._.js.map