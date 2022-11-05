import FlexContainer from "../widgets/containers/flex_container.js";
import NoteTitleWidget from "../widgets/note_title.js";
import NoteDetailWidget from "../widgets/note_detail.js";
import QuickSearchWidget_v2 from "../widgets/quick_search_v2.js";
import NoteTreeWidget from "../widgets/note_tree.js";
import MobileGlobalButtonsWidget_v2 from "../widgets/mobile_widgets/mobile_global_buttons_v2.js";
import DisplayDetailButtonWidget from "../widgets/mobile_widgets/disp_detail_button.js";
import DisplayContentButtonWidget from "../widgets/mobile_widgets/disp_content_button.js";
import MobileDetailMenuWidget from "../widgets/mobile_widgets/mobile_detail_menu.js";
import ScreenContainer from "../widgets/mobile_widgets/screen_container.js";
import ScrollingContainer from "../widgets/containers/scrolling_container.js";
import ProtectedSessionPasswordDialog from "../widgets/dialogs/protected_session_password.js";
import ConfirmDialog from "../widgets/dialogs/confirm.js";




const MOBILE_CSS = `
<style>
kbd {
    display: none;
}

.dropdown-menu {
    font-size: larger;
}

.action-button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5em;
    padding-left: 0.5em;
    padding-right: 0.5em;
    color: var(--main-text-color);

}
.quick-search {
    margin: 0px 0px 0px 0px;
}
.quick-search .dropdown-menu {
    max-width: 350px;
}
</style>`;

const FANCYTREE_CSS = `
<style>
.tree-wrapper {
    max-height: 100%;
    margin-top: 0px;
    overflow-y: auto;
    contain: content;
    padding-left: 2px;
}

.fancytree-custom-icon {
    font-size: 1.1em;
}

.fancytree-title {
    font-size: 1.2em;
    margin-left: 0.2em !important;
}

.fancytree-node {
    padding: 5px;
    padding-left: 1px
}

.fancytree-node .fancytree-expander:before {
    font-size: 2em !important;
    background-color: #11111140;  /*增加背景色：接近黑色，透明度40%*/
    padding:1px;
}

span.fancytree-expander {
    width: 40px !important;
    margin-right: 4px;
}

.fancytree-loading span.fancytree-expander {
    width: 24px;
    height: 32px;
}

.fancytree-loading  span.fancytree-expander:after {
    width: 20px;
    height: 20px;
    margin-top: 4px;
    border-width: 2px;
    border-style: solid;
}

.tree-wrapper .collapse-tree-button, 
.tree-wrapper .scroll-to-active-note-button, 
.tree-wrapper .tree-settings-button {    
    position: fixed;
    margin-right: 16px;
    display: none;
}
</style>`;

export default class MobileLayout_v2 {
    getRootWidget(appContext) {
        return new FlexContainer('row').cssBlock(MOBILE_CSS)
            .setParent(appContext)
            .id('root-widget') 
            .css('height', '100%')


            .child(new MobileGlobalButtonsWidget_v2()
                .class("")
                .css("height","40px")                   
            )
              

            .child(new QuickSearchWidget_v2()
                .css("height","40px")
                .css("margin-top","42px")
            )
                    

            .child(new DisplayContentButtonWidget()
                .class("")
                .css("height","40px")
                .css("width","40px")
                .css("padding","0px")
                .css("font-size","larger")
                .css("margin-top","84px")
                .css("margin-left","2px")
               
            )
            .child(new DisplayDetailButtonWidget()
                .class("")
                .css("height","40px")
                .css("width","40px")
                .css("padding","0px")
                .css("font-size","larger") 
                .css("margin-top","84px")
                .css("margin-left","50px")                                                         
               
                        
            ) 
                    
        

            .child(new ScreenContainer("tree", 'column')
                .css("margin-top","126px")
                .class(" d-sm-flex d-md-flex d-lg-flex d-xl-flex col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4")
                .css("max-height", "100%")
                .css('padding-left', 0)
                .css('padding-top', 0)
                .css('contain', 'content')
                .child(new NoteTreeWidget("main")
                    .cssBlock(FANCYTREE_CSS)
                    
                )
            )                
            
 
            .child(new ScreenContainer("detail", "column")
                .css("margin-top","126px")
                .class(" d-sm-flex d-md-flex d-lg-flex d-xl-flex col-12 col-sm-7 col-md-8 col-lg-8")
                .css('max-height', '100%')
                .css("padding-top","0px")
                .css("margin-left","1px")    
                .css('padding-left', "1px")
                

                .child(new FlexContainer('row').overflowing().contentSized()
                    .css('font-size', 'larger')
                    .css('align-items', 'center')
                    .child(new MobileDetailMenuWidget().contentSized())
                    .child(new NoteTitleWidget()
                        .contentSized()
                        .css("position: relative;")
                        .css("top: 5px;")
                    )
                    )
                .child(
                    new ScrollingContainer()
                        .filling()
                        .overflowing()
                        .contentSized()
                        .child(
                            new NoteDetailWidget()
                                .css('padding', '5px 20px 10px 0')
                        )
                )
            )

            .child(new ScreenContainer("tree", 'column')
                .css("margin-top","120px")
                .class(" d-sm-flex d-md-flex d-lg-flex d-xl-flex col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4")
                .css("max-height", "100%")
                .css('padding-left', 0)
                .css('padding-top', 0)

                .css('contain', 'content')
                .child(new NoteTreeWidget("main")
                    .cssBlock(FANCYTREE_CSS)
                    
                    )
            )


            .child(new ProtectedSessionPasswordDialog())
            .child(new ConfirmDialog());
}
}
