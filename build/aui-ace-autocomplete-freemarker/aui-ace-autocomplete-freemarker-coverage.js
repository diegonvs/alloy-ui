if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-ace-autocomplete-freemarker/aui-ace-autocomplete-freemarker.js']) {
   __coverage__['build/aui-ace-autocomplete-freemarker/aui-ace-autocomplete-freemarker.js'] = {"path":"build/aui-ace-autocomplete-freemarker/aui-ace-autocomplete-freemarker.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":43},"end":{"line":1,"column":62}}},"2":{"name":"(anonymous_2)","line":38,"loc":{"start":{"line":38,"column":18},"end":{"line":38,"column":36}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":229,"column":84}},"2":{"start":{"line":10,"column":0},"end":{"line":224,"column":7}},"3":{"start":{"line":39,"column":12},"end":{"line":41,"column":27}},"4":{"start":{"line":43,"column":12},"end":{"line":64,"column":13}},"5":{"start":{"line":44,"column":16},"end":{"line":44,"column":56}},"6":{"start":{"line":46,"column":16},"end":{"line":52,"column":17}},"7":{"start":{"line":47,"column":20},"end":{"line":51,"column":22}},"8":{"start":{"line":54,"column":17},"end":{"line":64,"column":13}},"9":{"start":{"line":55,"column":16},"end":{"line":55,"column":56}},"10":{"start":{"line":57,"column":16},"end":{"line":63,"column":17}},"11":{"start":{"line":58,"column":20},"end":{"line":62,"column":22}},"12":{"start":{"line":66,"column":12},"end":{"line":66,"column":25}},"13":{"start":{"line":226,"column":0},"end":{"line":226,"column":48}}},"branchMap":{"1":{"line":43,"type":"if","locations":[{"start":{"line":43,"column":12},"end":{"line":43,"column":12}},{"start":{"line":43,"column":12},"end":{"line":43,"column":12}}]},"2":{"line":46,"type":"if","locations":[{"start":{"line":46,"column":16},"end":{"line":46,"column":16}},{"start":{"line":46,"column":16},"end":{"line":46,"column":16}}]},"3":{"line":54,"type":"if","locations":[{"start":{"line":54,"column":17},"end":{"line":54,"column":17}},{"start":{"line":54,"column":17},"end":{"line":54,"column":17}}]},"4":{"line":57,"type":"if","locations":[{"start":{"line":57,"column":16},"end":{"line":57,"column":16}},{"start":{"line":57,"column":16},"end":{"line":57,"column":16}}]}},"code":["(function () { YUI.add('aui-ace-autocomplete-freemarker', function (A, NAME) {","","/**"," * The ACE Editor Freemarker Plugin"," *"," * @module aui-ace-editor"," * @submodule aui-ace-autocomplete-freemarker"," */","","var Lang = A.Lang,","","    MATCH_DIRECTIVES = 0,","    MATCH_VARIABLES = 1,","","    /**","     * A base class for Freemarker plugin.","     *","     * @class A.AceEditor.AutoCompleteFreemarker","     * @extends A.AceEditor.TemplateProcessor","     * @param {Object} config Object literal specifying configuration","     *     properties.","     * @constructor","     */","    Freemarker = A.Base.create('aui-ace-autocomplete-freemarker', A.AceEditor.TemplateProcessor, [","], {","","        /**","         * Checks if the provided content contains directive or variable.","         *","         * @method getMatch","         * @param {String} content The content which should be traversed for","         *     matches","         * @return {Object} An Object which contains the following properties:","         * content - the found content","         * start - the start index of the match","         * type - match type, could be 0 (DIRECTIVES) or 1 (VARIABLES)","         */","        getMatch: function(content) {","            var instance = this,","                match,","                matchIndex;","","            if ((matchIndex = content.lastIndexOf('<')) >= 0) {","                content = content.substring(matchIndex);","","                if (instance.get('directivesMatcher').test(content)) {","                    match = {","                        content: content.substring(2),","                        start: matchIndex,","                        type: MATCH_DIRECTIVES","                    };","                }","            }","            else if ((matchIndex = content.lastIndexOf('$')) >= 0) {","                content = content.substring(matchIndex);","","                if (instance.get('variablesMatcher').test(content)) {","                    match = {","                        content: content.substring(2),","                        start: matchIndex,","                        type: MATCH_VARIABLES","                    };","                }","            }","","            return match;","        }","    }, {","","        /**","         * Static property which provides a string to identify the class.","         *","         * @property NAME","         * @type String","         * @static","         */","        NAME: 'aui-ace-autocomplete-freemarker',","","        /**","         * Static property provides a string to identify the namespace.","         *","         * @property NS","         * @type String","         * @static","         */","        NS: 'aui-ace-autocomplete-freemarker',","","        /**","         * Static property used to define the default attribute","         * configuration for the Freemarker.","         *","         * @property ATTRS","         * @type Object","         * @static","         */","        ATTRS: {","","            /**","             * Contains the list of supported directives according to Freemarker","             * specification.","             *","             * @attribute directives","             * @default","             * value: [","             *  'assign',","             *  'attempt',","             *  'break',","             *  'case',","             *  'compress',","             *  'default',","             *  'else',","             *  'elseif',","             *  'escape',","             *  'fallback',","             *  'flush',","             *  'ftl',","             *  'function',","             *  'global',","             *  'if',","             *  'import',","             *  'include',","             *  'list',","             *  'local',","             *  'lt',","             *  'macro',","             *  'nested',","             *  'noescape',","             *  'nt',","             *  'recover',","             *  'recurse',","             *  'return',","             *  'rt',","             *  'setting',","             *  'stop',","             *  'switch',","             *  't',","             *  'visit'","             *]","             * @type Array","             */","            directives: {","                validator: Lang.isArray,","                value: [","                'assign',","                'attempt',","                'break',","                'case',","                'compress',","                'default',","                'else',","                'elseif',","                'escape',","                'fallback',","                'flush',","                'ftl',","                'function',","                'global',","                'if',","                'import',","                'include',","                'list',","                'local',","                'lt',","                'macro',","                'nested',","                'noescape',","                'nt',","                'recover',","                'recurse',","                'return',","                'rt',","                'setting',","                'stop',","                'switch',","                't',","                'visit'","            ]","            },","","            /**","             * Contains the regular expression which checks for directive","             * presence.","             *","             * @attribute directivesMatcher","             * @default /<#[\\w]*[^<#]*$/","             */","            directivesMatcher: {","                setter: '_setRegexValue',","                value: /<#[\\w]*[^<#]*$/","            },","","            /**","             * The Editor in which the current instance is plugged.","             *","             * @attribute host","             * @type Object","             */","            host: {","                validator: Lang.isObject","            },","","            /**","             * Contains the supported variables.","             *","             * @attribute variables","             * @type Object","             */","            variables: {","                validator: Lang.isObject","            },","","            /**","             * Contains the regular expression which will check for variable","             * match.","             *","             * @attribute variablesMatcher","             * @default /\\${[\\w., ()\"]*(?:[^$]|\\\\\\$)*$/","             */","            variablesMatcher: {","                setter: '_setRegexValue',","                value: /\\${[\\w., ()\"]*(?:[^$]|\\\\\\$)*$/","            }","        }","    });","","A.AceEditor.AutoCompleteFreemarker = Freemarker;","","","}, '3.0.3-deprecated.17', {\"requires\": [\"aui-ace-autocomplete-templateprocessor\"]});","","}());"]};
}
var __cov_PH_8f9ZonjMs4aOWKmHBgg = __coverage__['build/aui-ace-autocomplete-freemarker/aui-ace-autocomplete-freemarker.js'];
__cov_PH_8f9ZonjMs4aOWKmHBgg.s['1']++;YUI.add('aui-ace-autocomplete-freemarker',function(A,NAME){__cov_PH_8f9ZonjMs4aOWKmHBgg.f['1']++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['2']++;var Lang=A.Lang,MATCH_DIRECTIVES=0,MATCH_VARIABLES=1,Freemarker=A.Base.create('aui-ace-autocomplete-freemarker',A.AceEditor.TemplateProcessor,[],{getMatch:function(content){__cov_PH_8f9ZonjMs4aOWKmHBgg.f['2']++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['3']++;var instance=this,match,matchIndex;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['4']++;if((matchIndex=content.lastIndexOf('<'))>=0){__cov_PH_8f9ZonjMs4aOWKmHBgg.b['1'][0]++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['5']++;content=content.substring(matchIndex);__cov_PH_8f9ZonjMs4aOWKmHBgg.s['6']++;if(instance.get('directivesMatcher').test(content)){__cov_PH_8f9ZonjMs4aOWKmHBgg.b['2'][0]++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['7']++;match={content:content.substring(2),start:matchIndex,type:MATCH_DIRECTIVES};}else{__cov_PH_8f9ZonjMs4aOWKmHBgg.b['2'][1]++;}}else{__cov_PH_8f9ZonjMs4aOWKmHBgg.b['1'][1]++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['8']++;if((matchIndex=content.lastIndexOf('$'))>=0){__cov_PH_8f9ZonjMs4aOWKmHBgg.b['3'][0]++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['9']++;content=content.substring(matchIndex);__cov_PH_8f9ZonjMs4aOWKmHBgg.s['10']++;if(instance.get('variablesMatcher').test(content)){__cov_PH_8f9ZonjMs4aOWKmHBgg.b['4'][0]++;__cov_PH_8f9ZonjMs4aOWKmHBgg.s['11']++;match={content:content.substring(2),start:matchIndex,type:MATCH_VARIABLES};}else{__cov_PH_8f9ZonjMs4aOWKmHBgg.b['4'][1]++;}}else{__cov_PH_8f9ZonjMs4aOWKmHBgg.b['3'][1]++;}}__cov_PH_8f9ZonjMs4aOWKmHBgg.s['12']++;return match;}},{NAME:'aui-ace-autocomplete-freemarker',NS:'aui-ace-autocomplete-freemarker',ATTRS:{directives:{validator:Lang.isArray,value:['assign','attempt','break','case','compress','default','else','elseif','escape','fallback','flush','ftl','function','global','if','import','include','list','local','lt','macro','nested','noescape','nt','recover','recurse','return','rt','setting','stop','switch','t','visit']},directivesMatcher:{setter:'_setRegexValue',value:/<#[\w]*[^<#]*$/},host:{validator:Lang.isObject},variables:{validator:Lang.isObject},variablesMatcher:{setter:'_setRegexValue',value:/\${[\w., ()"]*(?:[^$]|\\\$)*$/}}});__cov_PH_8f9ZonjMs4aOWKmHBgg.s['13']++;A.AceEditor.AutoCompleteFreemarker=Freemarker;},'3.0.3-deprecated.17',{'requires':['aui-ace-autocomplete-templateprocessor']});
