function formatBody() {
    if (window.__JSON_FORMATTED_RBZL) return;
    const content = document.body.innerText;

    try {
        let formatted = JSON.stringify(JSON.parse(content), (key, value) => {
            if (typeof value === 'boolean') return `%b%${value}%/b%`;
            if (typeof value === 'number') return `%n%${value}%/n%`;
            if (typeof value === 'string') return `%s%${value}%/s%`;
            if (value === null) return `%0%${value}%/0%`;
            return value;
        }, 2);
        formatted = formatted.replace(/"%(\w)%(.*?)%\/\w%"/g, (match, type, value) => {
            if (type === 's') return `"<span style="color: red">${value}</span>"`;
            if (type === 'n') return `<span style="color: green">${value}</span>`;
            if (type === 'b') return `<span style="color: blue">${value}</span>`;
            if (type === '0') return `<span style="color: orange">${value}</span>`;
            return value;
        });
        formatted = formatted.replace(/"(.*?)":/g, '<span style="color: purple">$1</span>:');
        document.body.innerHTML = '<pre>' + formatted + '</pre>';
    } catch (e) {
        alert(e.message);
    }
    window.__JSON_FORMATTED_RBZL = true;
}