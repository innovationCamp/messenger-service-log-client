function appendListFlush(flushTarget, appendList) {
    appendList.map((node) => flushTarget.appendChild(node));
    appendList.length = 0;
}

function CreatePElement(text, inputClass){
    const res = document.createElement("p");
    if (inputClass) res.classList.add(inputClass);
    res.textContent = text;
    return res;
}

export {appendListFlush, CreatePElement};