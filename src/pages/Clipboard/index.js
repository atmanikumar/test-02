import * as React from 'react';

import DOMPurify from 'dompurify';

import './index.css';

const Clipboard = () => {

    const [copyText, updateCopyText] = React.useState('');
    const [inputText, updateText] = React.useState('');

    const copyToClipboard = () => {

        const parsedText = DOMPurify.sanitize(inputText)

        const url = new URL(window.location);
        url.searchParams.set('query', parsedText);
        window.history.pushState({}, '', url);

        updateCopyText(parsedText)

        if(!window.navigator.clipboard){
            /* If navigator.clipboard not supported */
            const textarea = document.createElement('textarea');
            textarea.innerText = parsedText;
            textarea.select()
            textarea.execCommand('copy')

            textarea.parentElement.removeChild(textarea);
        }else{
            navigator.clipboard.writeText(parsedText)
        }
    }

    const handleChange = (event) => {
        const value = event.target.value;
        
        updateText(value)
    }

    return(
        <div className="container">
            <label htmlFor='clipboard'>Entext text here</label>
            <br/>
            <input onChange={handleChange} value={inputText} id='clipboard' type="text" />
            <br/>
            <br/>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
            <br/>
            {copyText && <p>Text copied: {copyText}</p>}
        </div>
    )
}

export default Clipboard;