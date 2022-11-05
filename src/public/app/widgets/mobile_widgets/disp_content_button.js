import BasicWidget from "../basic_widget.js";

const TPL = `
<div id="global-buttons3">
    <style>
    #global-buttons3 {
        font-size: larger;
        position: absolute;
    }


    </style>
    <a data-trigger-command="" title="content" class="icon-action bx bxs-book-content"></a></div>`;

class DisplayContentButtonWidget extends BasicWidget {
   
    

    doRender() {
        this.$widget = $(TPL);
        this.$widget.on('click', () => this.triggerCommand('setActiveScreen', {screen:'tree'}));           
       


    }
}

export default DisplayContentButtonWidget;
