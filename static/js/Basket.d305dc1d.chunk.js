(self.webpackChunkpanel=self.webpackChunkpanel||[]).push([[67],{58:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Q}});for(var r,o=n(791),a=n(996),s=n(613),i=n.n(s),u=n(494),c=function(){function t(){}return t.prototype.serializeCacheKey=function(t){try{return JSON.stringify(t)}catch(e){return t.url+String(Math.random())}},t}(),l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._map=new Map,e._ttl=6e5,e}return l(e,t),Object.defineProperty(e,"shared",{get:function(){return e.sharedInstance||(e.sharedInstance=new e),e.sharedInstance},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ttl",{get:function(){return this._ttl},set:function(t){"number"===typeof t&&t>=0&&(this._ttl=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._map.size},enumerable:!1,configurable:!0}),e.prototype.get=function(t){var e=this._map.get(t);return e?e.expires<=Date.now()?(this.delete(t),null):e.data:null},e.prototype.set=function(t,e){return this._map.set(t,{data:e,expires:Date.now()+this.ttl}),this},e.prototype.delete=function(t){return this._map.delete(t),this},e.prototype.reset=function(){return this._map.clear(),this},e}(c),g=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)},f=function(t){function e(e){var n=t.call(this,e)||this;n.loadSuggestionsUrl="",n.dontPerformBlurHandler=!1,n.getSuggestionsUrl=function(){return n.props.url||n.loadSuggestionsUrl},n.setupDebounce=function(t){n.fetchSuggestions="number"===typeof t&&t>0?(0,u.debounce)(n.performFetchSuggestions,t):n.performFetchSuggestions},n.fetchSuggestions=function(){},n.handleInputFocus=function(t){n.setState({isFocused:!0}),0===n.state.suggestions.length&&n.fetchSuggestions();var e=n.props.inputProps;e&&e.onFocus&&e.onFocus(t)},n.handleInputBlur=function(t){var e=n.state,r=e.suggestions,o=e.suggestionIndex,a=n.props,s=a.selectOnBlur,i=a.inputProps;if(n.setState({isFocused:!1}),0===r.length&&n.fetchSuggestions(),s&&!n.dontPerformBlurHandler&&r.length>0){var u=o>=0&&o<r.length?o:0;n.selectSuggestion(u,!0)}n.dontPerformBlurHandler=!1,i&&i.onBlur&&i.onBlur(t)},n.handleInputChange=function(t){var e=t.target.value,r=n.props.inputProps;n.didMount&&n.setState({query:e,inputQuery:e,displaySuggestions:!!e},(function(){n.fetchSuggestions()})),r&&r.onChange&&r.onChange(t)},n.handleInputKeyDown=function(t){n.handleKeyboard(t);var e=n.props.inputProps;e&&e.onKeyDown&&e.onKeyDown(t)},n.handleInputKeyPress=function(t){n.handleKeyboard(t);var e=n.props.inputProps;e&&e.onKeyPress&&e.onKeyPress(t)},n.handleKeyboard=function(t){var e=n.state,r=e.suggestions,o=e.suggestionIndex,a=e.inputQuery;if(40===t.which){if(t.preventDefault(),o<r.length-1){var s=r[i=o+1].value;n.didMount&&n.setState({suggestionIndex:i,query:s})}}else if(38===t.which){if(t.preventDefault(),o>=0){var i;s=-1===(i=o-1)?a:r[i].value;n.didMount&&n.setState({suggestionIndex:i,query:s})}}else 13===t.which&&(t.preventDefault(),o>=0&&n.selectSuggestion(o))},n.performFetchSuggestions=function(){var t=n.props,e=t.minChars,o=t.token,a=n.state.query;"number"===typeof e&&e>0&&a.length<e?n.setState({suggestions:[],suggestionIndex:-1}):function(t,e,n,o,a){var s;if(r&&r.abort(),o){s=o.serializeCacheKey({headers:n.headers,body:n.json,url:e,method:t});var i=o.get(s);if(i)return void a(i)}(r=new XMLHttpRequest).open(t,e),n.headers&&Object.entries(n.headers).forEach((function(t){var e=t[0],n=t[1];r.setRequestHeader(e,n)})),r.send(JSON.stringify(n.json)),r.onreadystatechange=function(){var t;if(r&&4===r.readyState&&200===r.status){var e=null===(t=JSON.parse(r.response))||void 0===t?void 0:t.suggestions;e&&(null===o||void 0===o||o.set(s,e),a(e))}}}("POST",n.getSuggestionsUrl(),{headers:{Accept:"application/json",Authorization:"Token ".concat(o),"Content-Type":"application/json"},json:n.getLoadSuggestionsData()},n.httpCache,(function(t){n.didMount&&n.setState({suggestions:t,suggestionIndex:-1})}))},n.onSuggestionClick=function(t,e){e.stopPropagation(),n.selectSuggestion(t)},n.selectSuggestion=function(t,e){void 0===e&&(e=!1);var r=n.state.suggestions,o=n.props,a=o.selectOnBlur,s=o.onChange;if(r.length>=t-1){var i=r[t];a&&(n.dontPerformBlurHandler=!0),n.setState({query:i.value,inputQuery:i.value,displaySuggestions:!1},(function(){e||(n.fetchSuggestions(),setTimeout((function(){return n.setCursorToEnd(n.textInput)})))})),s&&s(i)}},n.setCursorToEnd=function(t){if(t){var e=t.value.length;(t.selectionStart||0===t.selectionStart)&&(t.selectionStart=e,t.selectionEnd=e,t.focus())}},n.getHighlightWords=function(){var t=n.state.inputQuery,e=["\u0433","\u0440\u0435\u0441\u043f","\u0443\u043b","\u0440-\u043d","\u0441\u0435\u043b\u043e","\u0434\u0435\u0440\u0435\u0432\u043d\u044f","\u043f\u043e\u0441\u0435\u043b\u043e\u043a","\u043f\u0440-\u0434","\u043f\u043b","\u043a","\u043a\u0432","\u043e\u0431\u043b","\u0434"],r=t.replace(",","").split(" ");return r=r.filter((function(t){return e.indexOf(t)<0}))},n.getSuggestionKey=function(t){return t.value},n.focus=function(){n.textInput&&n.textInput.focus()},n.setInputValue=function(t){n.setState({query:t||"",inputQuery:t||""})},n.didMount=!1;var o=n.props,a=o.defaultQuery,s=o.value,i=o.delay,c=s?s.value:void 0;return n.setupDebounce(i),n.state={query:a||c||"",inputQuery:a||c||"",isFocused:!1,displaySuggestions:!0,suggestions:[],suggestionIndex:-1},n}return g(e,t),e.prototype.componentDidMount=function(){this.didMount=!0},e.prototype.componentDidUpdate=function(t){var e=this.props,n=e.value,r=e.delay,o=this.state,a=o.query,s=o.inputQuery;if(!i()(t.value,n)){var u=n?n.value:"";a===u&&s===u||this.setState({query:u,inputQuery:u})}r!==t.delay&&this.setupDebounce(r)},e.prototype.componentWillUnmount=function(){this.didMount=!1},Object.defineProperty(e.prototype,"uid",{get:function(){return this.props.uid?this.props.uid:(this._uid||(this._uid=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}()),this._uid)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"httpCache",{get:function(){var t=this.props,e=t.httpCache,n=t.httpCacheTtl;if(!e)return null;if(e instanceof c)return e;var r=p.shared;return"number"===typeof n&&(r.ttl=n),r},enumerable:!1,configurable:!0}),e.prototype.render=function(){var t=this,e=this.props,n=e.inputProps,r=e.hintText,a=e.containerClassName,s=e.hintClassName,i=e.suggestionsClassName,u=e.suggestionClassName,c=e.currentSuggestionClassName,l=e.customInput,p=e.children,g=this.state,f=g.query,h=g.isFocused,y=g.suggestions,v=g.suggestionIndex,m=g.displaySuggestions,_="undefined"!==typeof l?l:"input",b=h&&y&&m&&y.length>0;return o.createElement("div",{role:"combobox","aria-expanded":b?"true":"false","aria-owns":this.uid,"aria-controls":this.uid,"aria-haspopup":"listbox",className:a||"react-dadata react-dadata__container"},o.createElement("div",null,o.createElement(_,d({autoComplete:"off",className:"react-dadata__input"},n,{value:f,ref:function(e){t.textInput=e},onChange:this.handleInputChange,onKeyPress:this.handleInputKeyPress,onKeyDown:this.handleInputKeyDown,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur}))),b&&o.createElement("ul",{id:this.uid,"aria-expanded":!0,role:"listbox",className:i||"react-dadata__suggestions"},"undefined"!==typeof r&&o.createElement("div",{className:s||"react-dadata__suggestion-note"},r),y.map((function(e,n){var r=u||"react-dadata__suggestion";return n===v&&(r+=" ".concat(c||"react-dadata__suggestion--current")),o.createElement("button",{role:"option","aria-selected":n===v?"true":"false",key:t.getSuggestionKey(e),onMouseDown:t.onSuggestionClick.bind(t,n),className:r},t.renderOption(e))}))),p)},e}(o.PureComponent),h=n(982),y=36,v="";y--;)v+=y.toString(36);function m(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:11,e="",n=t;n--;)e+=v[36*Math.random()|0];return e}var _,b=function(t){var e=t.terms,n=t.matchExactly,r=void 0!==n&&n;try{var o=/^([/~@;%#'])(.*?)\1([gimsuy]*)$/.exec(e);return o?new RegExp(o[2],o[3]):new RegExp(function(t){var e=t.terms,n=t.matchExactly,r=void 0!==n&&n;if("string"!==typeof e)throw new TypeError("Expected a string");var o=e.trim().replace(/[|\\{}()[\]^$+*?.-]/g,(function(t){return"\\".concat(t)}));return"(".concat(r?o:function(t){return t.replace(/\s{2,}/g," ").split(" ").join("|")}(o),")")}({terms:e,matchExactly:r}),"ig")}catch(a){throw new TypeError("Expected terms to be either a string or a RegExp!")}},O=(_="match",function(t){return null!==t&&"undefined"!==typeof t&&_ in t}),w=function(t){return"undefined"!==typeof t};function x(t){var e=t.curr,n=t.next,r=t.prev,o=t.clipBy,a=void 0===o?3:o,s=e.text.split(" "),i=s.length;if(e.match||a>=i)return e.text;var u="...";return w(n)&&w(r)&&O(r)&&O(n)?i>2*a?[].concat((0,h.Z)(s.slice(0,a)),[u],(0,h.Z)(s.slice(-a))).join(" "):e.text:w(n)&&O(n)?[u].concat((0,h.Z)(s.slice(-a))).join(" "):w(r)&&O(r)?[].concat((0,h.Z)(s.slice(0,a)),[u]).join(" "):e.text}var C,S=Object.assign,j=function(t){return t.length>0},E=function(t){var e=t.text,n=t.query,r=t.clipBy,o=t.matchExactly,a=void 0!==o&&o,s="string"===typeof n?n.trim():n;if(""===s)return[{key:m(),text:e,match:!1}];var i=b({terms:n,matchExactly:a});return e.split(i).filter(j).map((function(t){return{key:m(),text:t,match:a?t.toLowerCase()===s.toLowerCase():i.test(t)}})).map((function(t,e,n){return S(S({},t),"number"===typeof r&&{text:x(S(S(S({curr:t},e<n.length-1&&{next:n[e+1]}),e>0&&{prev:n[e-1]}),{clipBy:r}))})}))},P=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return P(e,t),e.prototype.render=function(){var t=this.props,e=t.text,n=t.words,r=t.highlightClassName,a=t.tagName,s=void 0===a?"span":a,i="string"===typeof n?n:n.join(" "),u=E({text:e,query:i});return o.createElement("span",{"aria-label":e},u.map((function(t){if(!t.match)return o.createElement("span",{key:t.key,"aria-hidden":!0},t.text);var e=s;return o.createElement(e,{key:t.key,className:r,"aria-hidden":!0},t.text)})))},e}(o.PureComponent),I=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),q=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,r=t.filterFromBound,o=t.filterToBound,a=t.filterLocations,s=t.filterLocationsBoost,i=t.filterLanguage,u=t.filterRestrictValue,c={query:e.state.query,count:n||10};return r&&o&&(c.from_bound={value:r},c.to_bound={value:o}),i&&(c.language=i),a&&(c.locations=a),s&&(c.locations_boost=s),u&&(c.restrict_value=!0),c},e.renderOption=function(t){var n=e.props,r=n.renderOption,a=n.highlightClassName,s=e.state.query;return r?r(t,s):o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),tagName:"mark",text:t.value})},e}return I(e,t),e}(f),D=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),T=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,r=t.filterStatus,o=t.filterType,a=t.filterOkved,s=t.filterLocations,i=t.filterLocationsBoost,u={query:e.state.query,count:n||10};return r&&(u.status=r),a&&(u.okved=a),o&&(u.type=o),s&&(u.locations=s),i&&(u.locations_boost=i),u},e.getSuggestionKey=function(t){return t.data.hid},e.renderOption=function(t){var n=e.props,r=n.renderOption,a=n.highlightClassName,s=e.state.query;return r?r(t,s):o.createElement("div",null,o.createElement("div",{className:"LIQUIDATED"===t.data.state.status?"react-dadata__suggestion--line-through":void 0},o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value})),o.createElement("div",{className:"react-dadata__suggestion-subtitle"},t.data.inn&&o.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},t.data.inn),t.data.address&&t.data.address.value&&o.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.data.address.value}))))},e}D(e,t)}(f),function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),k=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,r=t.filterStatus,o=t.filterType,a=t.filterLocations,s=t.filterLocationsBoost,i={query:e.state.query,count:n||10};return r&&(i.status=r),o&&(i.type=o),a&&(i.locations=a),s&&(i.locations_boost=s),i},e.getSuggestionKey=function(t){return"".concat(t.data.bic)},e.renderOption=function(t){var n=e.props,r=n.renderOption,a=n.highlightClassName,s=e.state.query;return r?r(t,s):o.createElement("div",null,o.createElement("div",{className:"LIQUIDATED"===t.data.state.status?"react-dadata__suggestion--line-through":void 0},o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value})),o.createElement("div",{className:"react-dadata__suggestion-subtitle"},t.data.bic&&o.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},t.data.bic),t.data.address&&t.data.address.value&&o.createElement("div",{className:"react-dadata__suggestion-subtitle-item"},o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.data.address.value}))))},e}T(e,t)}(f),function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),K=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio",e.getLoadSuggestionsData=function(){var t=e.props,n=t.count,r=t.filterGender,o=t.filterParts,a={query:e.state.query,count:n||10};return r&&(a.gender=r),o&&(a.parts=o),a},e.getSuggestionKey=function(t){return"name:".concat(t.data.name||"","surname:").concat(t.data.surname||"","patronymic:").concat(t.data.patronymic||"")},e.renderOption=function(t){var n=e.props,r=n.renderOption,a=n.highlightClassName,s=e.state.query;return r?r(t,s):o.createElement("div",null,o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value}))},e}k(e,t)}(f),function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),L=(function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loadSuggestionsUrl="https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/email",e.getLoadSuggestionsData=function(){var t=e.props.count;return{query:e.state.query,count:t||10}},e.getSuggestionKey=function(t){return t.value},e.renderOption=function(t){var n=e.props,r=n.renderOption,a=n.highlightClassName,s=e.state.query;return r?r(t,s):o.createElement("div",null,o.createElement(N,{highlightClassName:a||"react-dadata--highlighted",words:e.getHighlightWords(),text:t.value}))},e}K(e,t)}(f),["title","titleId"]);function B(){return B=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B.apply(this,arguments)}function A(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function M(t,e){var n=t.title,r=t.titleId,a=A(t,L);return o.createElement("svg",B({width:32,height:32,viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:e,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,C||(C=o.createElement("path",{d:"M31.9039 29.6999L21.5159 19.3119C23.1279 17.2279 23.9999 14.6799 23.9999 11.9999C23.9999 8.79196 22.7479 5.78397 20.4839 3.51598C18.2199 1.24799 15.2039 0 11.9999 0C8.79596 0 5.77997 1.25199 3.51598 3.51598C1.24799 5.77997 0 8.79196 0 11.9999C0 15.2039 1.25199 18.2199 3.51598 20.4839C5.77997 22.7519 8.79196 23.9999 11.9999 23.9999C14.6799 23.9999 17.2239 23.1279 19.3079 21.5199L29.6959 31.9039C29.7263 31.9343 29.7625 31.9585 29.8023 31.975C29.8421 31.9915 29.8848 32 29.9279 32C29.971 32 30.0136 31.9915 30.0534 31.975C30.0932 31.9585 30.1294 31.9343 30.1599 31.9039L31.9039 30.1639C31.9343 30.1334 31.9585 30.0972 31.975 30.0574C31.9915 30.0176 32 29.975 32 29.9319C32 29.8888 31.9915 29.8461 31.975 29.8063C31.9585 29.7665 31.9343 29.7303 31.9039 29.6999ZM18.3359 18.3359C16.6399 20.0279 14.3919 20.9599 11.9999 20.9599C9.60796 20.9599 7.35997 20.0279 5.66398 18.3359C3.97198 16.6399 3.03999 14.3919 3.03999 11.9999C3.03999 9.60796 3.97198 7.35597 5.66398 5.66398C7.35997 3.97198 9.60796 3.03999 11.9999 3.03999C14.3919 3.03999 16.6439 3.96798 18.3359 5.66398C20.0279 7.35997 20.9599 9.60796 20.9599 11.9999C20.9599 14.3919 20.0279 16.6439 18.3359 18.3359Z",fill:"white"})))}var U=o.forwardRef(M),H=(n.p,n(184)),F=function(){return(0,H.jsxs)("div",{className:"search",children:[(0,H.jsx)("div",{className:"search__title",children:"\u041f\u043e\u0438\u0441\u043a \u0430\u0434\u0440\u0435\u0441\u043e\u0432"}),(0,H.jsx)("div",{className:"search__info",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0432\u0430\u0441 \u0430\u0434\u0440\u0435\u0441"}),(0,H.jsxs)("form",{className:"search__form",action:"",children:[(0,H.jsx)(q,{token:"2788a34c7b313cfc87b32c860232bd54d680d732",minChars:3,inputProps:{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0432\u0430\u0441 \u0430\u0434\u0440\u0435\u0441"},suggestionClassName:"search__li"}),(0,H.jsxs)("button",{className:"search__button",children:[(0,H.jsx)(U,{className:"search__svg"}),(0,H.jsx)("span",{className:"search__span",children:"\u041d\u0430\u0439\u0442\u0438"})]})]})]})},Q=function(t){var e=t.menuActive,n=t.setMenuActive;return(0,H.jsx)("section",{children:(0,H.jsxs)("div",{className:"container",children:[(0,H.jsx)(a.Z,{menuActive:e,setMenuActive:n}),(0,H.jsx)(F,{})]})})}},494:function(t){function e(t,e,n){var r,o,a,s,i;function u(){var c=Date.now()-s;c<e&&c>=0?r=setTimeout(u,e-c):(r=null,n||(i=t.apply(a,o),a=o=null))}null==e&&(e=100);var c=function(){a=this,o=arguments,s=Date.now();var c=n&&!r;return r||(r=setTimeout(u,e)),c&&(i=t.apply(a,o),a=o=null),i};return c.clear=function(){r&&(clearTimeout(r),r=null)},c.flush=function(){r&&(i=t.apply(a,o),a=o=null,clearTimeout(r),r=null)},c}e.debounce=e,t.exports=e},613:function(t){t.exports=function(t,e,n,r){var o=n?n.call(r,t,e):void 0;if(void 0!==o)return!!o;if(t===e)return!0;if("object"!==typeof t||!t||"object"!==typeof e||!e)return!1;var a=Object.keys(t),s=Object.keys(e);if(a.length!==s.length)return!1;for(var i=Object.prototype.hasOwnProperty.bind(e),u=0;u<a.length;u++){var c=a[u];if(!i(c))return!1;var l=t[c],p=e[c];if(!1===(o=n?n.call(r,l,p,c):void 0)||void 0===o&&l!==p)return!1}return!0}}}]);
//# sourceMappingURL=Basket.d305dc1d.chunk.js.map