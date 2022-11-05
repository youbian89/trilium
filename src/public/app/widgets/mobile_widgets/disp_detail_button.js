import BasicWidget from "../basic_widget.js";

const TPL = `
<div id="global-buttons2">
    <style>
    #global-buttons2 {
        font-size: larger;
        position: absolute;

    }

    </style>


<a data-trigger-command="" title="content" class=" icon-action bx bx-message-detail"></a>

</div>`;

class DisplayDetailButtonWidget extends BasicWidget {
   
    

    doRender() {
        this.$widget = $(TPL);
        this.$widget.on('click', () => this.triggerCommand('setActiveScreen', {screen:'detail'}));           
       


    }
}

export default DisplayDetailButtonWidget;
