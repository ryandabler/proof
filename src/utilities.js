export function extractFormValues(elements, initObj = {}) {
    const newValues = {}
    Object.keys(elements).forEach(key => {
        const name = elements[key].name;
        if (name) newValues[name] = elements[key].value;
    });
    return Object.assign(newValues, initObj);
}

export function showMenu(domElem) {
    domElem.classList.remove("hidden");
}

export function hideMenu(domElem) {
    domElem.classList.add("hidden");
}

export function toggleMenu(event, groupName, refs) {
    event.stopPropagation();
    const ref = refs[groupName];

    // Hide any other open menu
    Object.keys(refs)
        .filter(_ref => refs[_ref] !== ref)
        .forEach(_ref => hideMenu(refs[_ref]));

    // Toggle current menu
    if (ref.classList.contains("hidden")) {
        showMenu(ref);

        document.addEventListener(
            "mousedown",
            () => {
                Object.keys(refs).forEach(ref => 
                    hideMenu(refs[ref])
                );
            },
            { once: true }
        );
    } else {
        hideMenu(ref);
    }
    
}