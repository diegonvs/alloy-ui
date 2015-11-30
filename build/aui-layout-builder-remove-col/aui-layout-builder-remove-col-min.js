YUI.add("aui-layout-builder-remove-col",function(e,t){var n=e.getClassName("layout","builder","remove","col","button"),r=".col",i=".layout-row",s='<span class="glyphicon glyphicon-remove '+n+'" tabindex="7"></span>';e.LayoutBuilderRemoveCol=function(){},e.LayoutBuilderRemoveCol.prototype={initializer:function(){this._eventHandles.push(this.after("enableRemoveColsChange",this._afterEnableRemoveColsChange),this.after("layout-col:removableChange",this._afterRemoveColRemovableChange)),this._uiSetEnableRemoveCols(this.get("enableRemoveCols"))},destructor:function(){this._unbindRemoveColEvents()},_afterEnableRemoveColsChange:function(){this._uiSetEnableRemoveCols(this.get("enableRemoveCols"))},_afterRemoveColLayoutColsChange:function(e){var t,i=e.target.get("node");i.all("."+n).remove(),t=i.all(r),this._appendRemoveButtonToCols(t)},_afterRemoveColRemovableChange:function(t){var r=t.target.get("node");t.newVal?r.append(e.Node.create(s)):r.one("."+n)&&r.one("."+n).remove()},_afterRemoveColRowsChange:function(){this._removeColButton(),this._appendRemoveButtonToCols()},_appendRemoveButtonToCols:function(t){var n,i;t=t||this._layoutContainer.all(r),t.each(function(t){n=t.getData("layout-col"),n.get("removable")&&(i=e.Node.create(s),t.append(i))})},_bindRemoveColEvents:function(){var t=this.get("container");this._removeColsEventHandles=[t.delegate("click",e.bind(this._onMouseClickRemoveColEvent,this),"."+n),t.delegate("key",e.bind(this._onKeyPressRemoveColEvent,this),"press:13","."+n),this.after("layout-row:colsChange",this._afterRemoveColLayoutColsChange),this.after("layout:rowsChange",e.bind(this._afterRemoveColRowsChange,this))]},_onKeyPressRemoveColEvent:function(e){this._removeCol(e.target.ancestor(r))},_onMouseClickRemoveColEvent:function(e){var t,n=e.target.ancestor(i);t=n.all(r).size(),t>1?this._removeCol(e.target.ancestor(r)):this.get("layout").removeRow(n.getData("layout-row"))},_removeCol:function(e){var t=e.ancestor().getData("layout-row");t.removeCol(e.getData("layout-col"))},_removeColButton:function(){this._layoutContainer.all("."+n).remove()},_uiSetEnableRemoveCols:function(e){e?(this._appendRemoveButtonToCols(),this._bindRemoveColEvents()):(this._removeColButton(),this._unbindRemoveColEvents())},_unbindRemoveColEvents:function(){this._removeColsEventHandles&&(new e.EventHandle(this._removeColsEventHandles)).detach()}},e.LayoutBuilderRemoveCol.ATTRS={enableRemoveCols:{validator:e.Lang.isBoolean,value:!0}}},"3.0.1",{requires:["event-key","node-base"],skinnable:!0});