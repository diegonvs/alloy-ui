YUI.add("aui-template-deprecated",function(A,NAME){var Lang=A.Lang,UA=A.UA,LString=Lang.String,isArray=Lang.isArray,isDate=Lang.isDate,isString=Lang.isString,isObject=Lang.isObject,isValue=Lang.isValue,isUndefined=Lang.isUndefined,REGEX_TPL=/<tpl\b[^>]*?((for|if|exec)="([^"]+)")*?>((?:(?=([^<]+))\5|<(?!tpl\b[^>]*>))*?)<\/tpl>/,REGEX_NEWLINE=/\r\n|\n/g,REGEX_QUOTE=/'/g,REGEX_QUOTE_ESCAPED=/\\'/g,REGEX_PREFIX_GLOBAL_REPLACE=/^(?!\$)/,REGEX_TPL_VAR=/\{([\w-.#$]+)(?:\:([\w.]*)(?:\((.*?)?\))?)?(\s?[+\-*\/]\s?[\d.+\-*\/()]+)?\}/g,REGEX_TPL_SCRIPTLET=/\{\[((?:\\\]|.|\n)*?)\]\}/g,STR_BLANK="",STR_COLON=":",STR_COMMA=",",STR_DOT=".",STR_FOR="for",STR_EXEC="exec",STR_IF="if",STR_QUOTE="'",STR_BRACE_OPEN="{",STR_BRACE_CLOSE="}",STR_PAREN_OPEN="(",STR_PAREN_CLOSE=")",STR_GLOBAL_SYMBOL="$",STR_JOIN_OPEN=STR_QUOTE+STR_COMMA,STR_JOIN_CLOSE=STR_COMMA+STR_QUOTE,STR_JOIN_GROUP_OPEN=STR_JOIN_OPEN+STR_PAREN_OPEN,STR_JOIN_GROUP_CLOSE=STR_PAREN_CLOSE+STR_JOIN_CLOSE,STR_COMPILE_TPL_ARGS="values, parent, $index, $i, $count, $last, $ns, $ans, $yns",BUFFER_HTML=["<tpl>",null,"</tpl>"],BUFFER_STR_COMPILE_SUB_TPL=[STR_JOIN_OPEN+"this._compileSubTpl(",null,STR_COMMA+STR_COMPILE_TPL_ARGS+STR_PAREN_CLOSE+STR_JOIN_CLOSE],BUFFER_COMPILED_TPL_FN=["compiledTplFn = function("+STR_COMPILE_TPL_ARGS+") { return ["+STR_QUOTE,null,STR_QUOTE+'].join("");};'],BUFFER_GLOBAL_PROP=['MAP_GLOBALS["',null,'"]'],BUFFER_VALUES_LOOKUP=['values["',null,'"]'],STR_INVOKE_METHOD_NAME_OPEN='this._invokeMethod("',STR_INVOKE_METHOD_NAME_CLOSE='"'+STR_COMMA,STR_UNDEFINED_OUT=' === undefined ? "" : ',STR_REPLACE_NEWLINE="\\n",STR_REPLACE_QUOTE="\\'",STR_VALUES="values",STR_PARENT="parent",STR_SPECIAL_I="$i",STR_SPECIAL_INDEX="$index",STR_SPECIAL_COUNT="$count",STR_SPECIAL_LAST="$last",STR_SPECIAL_ANS="$ans",STR_SPECIAL_NS="$ns",STR_SPECIAL_YNS="$yns",STR_RETURN="return ",STR_WITHVALUES="with(values){ ",STR_WITHCLOSE="; }",STR_LANGSTRING_VAR="LString.",TOKEN_TPL="AUITPL",TOKEN_TPL_LENGTH=TOKEN_TPL.length,TOKEN_PARENT_PROP=STR_PARENT+STR_DOT,TOKEN_THIS_PROP="this.",TOKEN_THIS_PROP_LENGTH=TOKEN_THIS_PROP.length,TOKEN_VALUES_PROP=STR_VALUES+STR_DOT,MAP_TPL_FN={".":new Function(STR_VALUES,STR_PARENT,STR_WITHVALUES+STR_RETURN+STR_VALUES+STR_WITHCLOSE),"..":new Function(STR_VALUES,STR_PARENT,STR_WITHVALUES+STR_RETURN+STR_PARENT+STR_WITHCLOSE)},MAP_TPL_FILTERED_TYPES={"boolean":!0,number:!0,string:!0},MAP_TPL_VALUES={".":"this._getValidValues(values)","#":STR_SPECIAL_INDEX,$index:STR_SPECIAL_INDEX,$i:STR_SPECIAL_I,$count:STR_SPECIAL_COUNT,$last:STR_SPECIAL_LAST,$ans:STR_SPECIAL_ANS,$ns:STR_SPECIAL_NS,$yns:STR_SPECIAL_YNS},MAP_GLOBALS={},SRC_CREATE={},AUI_NS=A.getClassName(STR_BLANK),YUI_NS=A.ClassNameManager.getClassName(STR_BLANK),_INSTANCES={},Template=function(e,t){var n=this,r,i=t===SRC_CREATE;return i||A.instanceOf(n,Template)?(i||(e=n._parseArgs(arguments)),r=n._parse(e)):(e=Template.prototype._parseArgs(arguments),r=new Template(e,SRC_CREATE)),r};Template.prototype={html:function(e){var t=this,n=t;return isValue(e)?t._parse(t._parseArgs(arguments)):n=t._html,n},parse:function(e){var t=this;return t._parentTpl.compiled.call(t,e,{},1,1,1)},render:function(e,t){var n=this,r=A.Node.create(n.parse(e));return t=t&&A.one(t),t&&t.setContent(r),r},_compile:function(tpl){var instance=this,compiledTplFn,fnBody=tpl.tplBody;fnBody=fnBody.replace(REGEX_NEWLINE,STR_REPLACE_NEWLINE),fnBody=fnBody.replace(REGEX_QUOTE,STR_REPLACE_QUOTE),fnBody=fnBody.replace(REGEX_TPL_VAR,instance._compileTpl),fnBody=fnBody.replace(REGEX_TPL_SCRIPTLET,instance._compileCode),BUFFER_COMPILED_TPL_FN[1]=fnBody;var body=BUFFER_COMPILED_TPL_FN.join(STR_BLANK),$yns=instance.$yns,$ans=instance.$ans,$ns=instance.$ns;return eval(body),tpl.compiled=function(e,t,n,r,i,s){var o=[],u=STR_BLANK,a=tpl.testFn;if(!a||a.call(instance,e,t,n,r,i,s,$ns,$ans,$yns)){var f=e,l=tpl.tplFn;l&&(f=l.call(instance,e,t),t=e);if(l&&isArray(f)){var c=f.length,h=tpl.execFn;for(var p=0;p<c;p++){var d=p+1,v=d==c,m=f[p];o[o.length]=compiledTplFn.call(instance,m,t,d,p,c,v,$ns,$ans,$yns),h&&h.call(instance,f[p])}u=o.join(STR_BLANK)}else u=compiledTplFn.call(instance,f,t,n,r,i,s,$ns,$ans,$yns)}return u},instance},_compileCode:function(e,t){return STR_JOIN_GROUP_OPEN+t.replace(REGEX_QUOTE_ESCAPED,STR_QUOTE)+STR_JOIN_GROUP_CLOSE},_compileSubTpl:function(e,t,n,r,i,s,o,u,a,f){var l=this,c,h=l.tpls[e];return h.compiled.call(l,t,n,r,i,s,o,u,a,f)},_compileTpl:function(e,t,n,r,i,s,o){var u;if(t.indexOf(TOKEN_TPL)===0)BUFFER_STR_COMPILE_SUB_TPL[1]=t.substr(TOKEN_TPL_LENGTH),u=BUFFER_STR_COMPILE_SUB_TPL.join(STR_BLANK);else{var a=MAP_TPL_VALUES[t];a||(t.indexOf(TOKEN_PARENT_PROP)===0?a=t:t.indexOf(STR_DOT)>-1?a=TOKEN_VALUES_PROP+t:t.indexOf(STR_GLOBAL_SYMBOL)===0&&t in MAP_GLOBALS?(BUFFER_GLOBAL_PROP[1]=t,a=BUFFER_GLOBAL_PROP.join(STR_BLANK)):(BUFFER_VALUES_LOOKUP[1]=t,a=BUFFER_VALUES_LOOKUP.join(STR_BLANK))),i&&(a=STR_PAREN_OPEN+a+i+STR_PAREN_CLOSE),n?(r=r?STR_COMMA+r:STR_BLANK,n.indexOf(TOKEN_THIS_PROP)!==0?n=STR_LANGSTRING_VAR+n+STR_PAREN_OPEN:(n=STR_INVOKE_METHOD_NAME_OPEN+n.substr(TOKEN_THIS_PROP_LENGTH)+STR_INVOKE_METHOD_NAME_CLOSE,r=STR_COMMA+STR_VALUES)):(r=STR_BLANK,n=STR_PAREN_OPEN+a+STR_UNDEFINED_OUT),u=STR_JOIN_OPEN+n+a+r+STR_JOIN_GROUP_CLOSE}return u},_getValidValues:function(e){var t=this,n=STR_BLANK;if(MAP_TPL_FILTERED_TYPES[typeof e]||isDate(e))n=e;return n},_invokeMethod:function(e,t,n){var r=this;return r[e](t,n)},_parse:function(e){var t=this;t._html=e;var n,r=0,i=[];BUFFER_HTML[1]=e,e=BUFFER_HTML.join(STR_BLANK);while(n=e.match(REGEX_TPL)){var s=null,o=null,u=null,a=n[2],f=n[3];f&&(a==STR_FOR?u=MAP_TPL_FN[f]||new Function(STR_VALUES,STR_PARENT,STR_WITHVALUES+STR_RETURN+f+STR_WITHCLOSE):(f=LString.unescapeEntities(f),a==STR_IF?s=new Function(STR_VALUES,STR_PARENT,STR_SPECIAL_INDEX,STR_SPECIAL_I,STR_SPECIAL_COUNT,STR_SPECIAL_LAST,STR_SPECIAL_NS,STR_SPECIAL_ANS,STR_SPECIAL_YNS,STR_WITHVALUES+STR_RETURN+f+STR_WITHCLOSE):a==STR_EXEC&&(o=new Function(STR_VALUES,STR_PARENT,STR_SPECIAL_INDEX,STR_SPECIAL_I,STR_SPECIAL_COUNT
,STR_SPECIAL_LAST,STR_SPECIAL_NS,STR_SPECIAL_ANS,STR_SPECIAL_YNS,STR_WITHVALUES+f+STR_WITHCLOSE))));var l=n[4]||STR_BLANK;e=e.replace(n[0],STR_BRACE_OPEN+TOKEN_TPL+r+STR_BRACE_CLOSE),r=i.push({execFn:o,id:r,testFn:s,tplBody:l,tplFn:u})}var c=r-1;while(r--)t._compile(i[r]);return t._parentTpl=i[c],t.tpls=i,t},_parseArgs:function(e){var t=this,n,r=e[0];if(isArray(r))isObject(r[r.length-1])?n=r.pop():isObject(e[1])&&(n=e[1]),r=r.join(STR_BLANK);else if(e.length>1){var i=[];e=A.Array(e,0,!0);var s=e.length,o,u=e[s-1];isObject(u)&&(n=e.pop());for(var a=0;a<s;a++)o=e[a],i.push(o);r=i.join(STR_BLANK)}return n&&A.mix(t,n,!0),r},$ans:AUI_NS,$yns:YUI_NS};var TEMPLATE_PROTO=Template.prototype;TEMPLATE_PROTO.$ns=AUI_NS;var globalVar=function(e,t){var n=null;return isUndefined(t)&&e?n=MAP_GLOBALS[e]:e&&(e=String(e).replace(REGEX_PREFIX_GLOBAL_REPLACE,STR_GLOBAL_SYMBOL),t!==null?(MAP_GLOBALS[e]=t,n=t):delete MAP_GLOBALS[e]),n};Template.globalVar=TEMPLATE_PROTO.globalVar=globalVar,Template._GLOBALS=MAP_GLOBALS;var NODE_PROTO=A.Node.prototype;NODE_PROTO.toTPL=function(){return Template.from(this)},NODE_PROTO.renderTPL=function(e,t){var n=this;if(isString(e)||isArray(e))e=new Template(e);return e&&t&&e.render(n,t),n},A.NodeList.importMethod(NODE_PROTO,["renderTPL"]),A.mix(Template,{from:function(e){e=A.one(e);var t=STR_BLANK;if(e){e=e.getDOM();var n=String(e&&e.nodeName).toLowerCase();n!="script"?t=e.value||e.innerHTML:t=e.text||e.textContent||e.innerHTML}return new Template(t)},get:function(e){var t=_INSTANCES[e];return t&&!A.instanceOf(t,Template)&&(t=new Template(t),_INSTANCES[e]=t),t},parse:function(e,t){var n=Template.get(e);return n&&n.parse(t)},register:function(e,t){var n=this,r=t;return!(e in _INSTANCES)&&(Lang.isArray(t)||A.instanceOf(t,Template))&&(_INSTANCES[e]=t),t},render:function(e,t,n){var r=Template.get(e);return r&&r.render(t,n)},_INSTANCES:_INSTANCES}),A.Template=Template},"3.0.3-deprecated.17",{requires:["aui-base-deprecated"]});
