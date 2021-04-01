function encodeAndDecodeMessages() {
    let senderButton=document.querySelectorAll('button')[0].addEventListener('click',send);
    let receivedButton=document.querySelectorAll('button')[1].addEventListener('click',decode);
    let textareas=document.querySelectorAll('textarea');

    function send (ev) {
        let text=textareas[0].value;
        let encodedMessage='';
        for (let i = 0; i < text.length; i++) {
            const currentSymbol=text[i];
            const nextSymbolAscii=currentSymbol.charCodeAt(0)+1;
            const nextSymbol=String.fromCharCode(nextSymbolAscii);
            encodedMessage+=nextSymbol;
        }
        textareas[0].value='';
        textareas[1].value= encodedMessage;
    }

    function decode (ev) {
        let encodedMessage=textareas[1].value;
        let text='';
        for (let i = 0; i < encodedMessage.length; i++) {
            const currentSymbol=encodedMessage[i];
            const nextSymbolAscii=currentSymbol.charCodeAt(0)-1;
            const nextSymbol=String.fromCharCode(nextSymbolAscii);
            text+=nextSymbol;
        }
        textareas[1].value=text;
    }
    
}