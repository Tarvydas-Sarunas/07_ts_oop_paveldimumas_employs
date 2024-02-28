export default function createHtmlEL(tagName, attrsObj, text = false) {
    const newEl = document.createElement(tagName);
    for (const key in attrsObj) {
        const value = attrsObj[key];
        newEl.setAttribute(key, value);
    }
    if (text !== false) {
        newEl.textContent = text.toString();
    }
    return newEl;
}
//# sourceMappingURL=createEl.js.map