YUI.add("aui-form-field",function(e,t){var n=e.getClassName("form","field"),r=e.getClassName("form","field","content"),i=e.getClassName("form","field","content","inner"),s=e.getClassName("form","field","help"),o=e.getClassName("form","field","nested"),u=e.getClassName("form","field","title");e.FormField=e.Base.create("form-field",e.Base,[],{TPL_FIELD:'<div class="'+n+'">'+'<div class="'+r+'"></div>'+'<div class="'+o+'"></div>'+"</div>",TPL_FIELD_CONTENT_MAIN:'<div class="form-group"><label class="'+u+'"></label>'+'<div class="'+s+'"></div>'+'<div class="'+i+'">{innerContent}</div>'+"</div>",TPL_FIELD_CONTENT:"<div></div>",initializer:function(){var e=this.get("content");this.renderUI(),e.setData("field-instance",this),this._fieldEventHandles=[this.after({helpChange:this._afterHelpChange,nestedFieldsChange:this._afterNestedFieldsChange,titleChange:this._afterTitleChange})]},renderUI:function(){var t=this.get("content");t.one("."+r).setHTML(e.Lang.sub(this.TPL_FIELD_CONTENT_MAIN,{innerContent:this.TPL_FIELD_CONTENT})),this._uiSetHelp(this.get("help")),this._uiSetNestedFields(this.get("nestedFields")),this._uiSetTitle(this.get("title"))},destructor:function(){this.get("content").remove(!0),(new e.EventHandle(this._fieldEventHandles)).detach()},addNestedField:function(e,t){var n=this.get("nestedFields");n.splice(e,0,t),this.set("nestedFields",n)},removeNestedField:function(t){var n,r=this.get("nestedFields");n=e.Array.indexOf(r,t),n!==-1&&r.splice(n,1),this.set("nestedFields",r)},_afterHelpChange:function(){this._uiSetHelp(this.get("help"))},_afterNestedFieldsChange:function(){this._uiSetNestedFields(this.get("nestedFields"))},_afterTitleChange:function(){this._uiSetTitle(this.get("title"))},_uiSetHelp:function(e){var t=this.get("content").one("."+s);t.set("text",e),t.toggleView(e!=="")},_uiSetNestedFields:function(t){var n=this.get("content").one("."+o);n.empty(),e.Array.each(t,function(e){n.append(e.get("content"))})},_uiSetTitle:function(e){this.get("content").one("."+u).set("text",e)},_validateNestedFields:function(t){var n;if(!e.Lang.isArray(t))return!1;for(n=0;n<t.length;n++)if(!e.instanceOf(t[n],e.FormField))return!1;return!0}},{ATTRS:{content:{validator:function(t){return e.instanceOf(t,e.Node)},valueFn:function(){return e.Node.create(this.TPL_FIELD)},writeOnce:"initOnly"},help:{setter:e.Lang.trim,validator:e.Lang.isString,value:""},nestedFields:{validator:"_validateNestedFields",value:[]},title:{validator:e.Lang.isString,value:""}}})},"3.0.3-deprecated.17",{requires:["aui-classnamemanager","aui-node-base","base-build"],skinnable:!0});
