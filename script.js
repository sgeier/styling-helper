
const breadCrumbs = document.querySelector('.breadcrumb-selectors');
const changeDialog = document.querySelector('.changeDialog');

let currentSelector = '';

const mapping = {
    teaser:
    {
        '.cmp-teaser':
        {
            '.cmp-teaser__image': ['.cmp-image__image'],
            '.cmp-teaser__content': [
                '.cmp-teaser__title',
                '.cmp-teaser__pretitle',
                {
                    '.cmp-teaser__description': 'p'
                },
            ],
            '.cmp-teaser__action-container': [
                '.cmp-teaser__action-link'
            ]
        }
    }
}


const propPresets = [{
    'font-weight': {
        'select': ['100', '200', '300', '400', '500', '600', '700', '800', '900']
    },
    'align-items': {
        'select': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch']
    },
    'display': {
        'select': ['block', 'inline', 'flex', 'inline-flex', 'inline-block', 'grid'],
    },
    'overflow': {
        'select': ['hidden', 'visible', 'initial'],
    },
    'position': {
        'select': ['relative', 'absolute', 'static', 'initial'],
    },
    'justify-content': {
        'select': ['flex-start', 'flex-end', 'center', ' space-between', 'space-around'],
    },
    'flex-direction': {
        'select': ['row', 'row-reverse', 'column', 'column-reverse', 'unset'],
    },
    'text-transform': {
        'select': ['uppercase', 'camelcase', 'none'],
    },
    'text-align': {
        'select': ['left', 'center', 'right', 'justify'],
    },
    'font-size': {
        'input-number': {
            min: 0,
            max: 100,
            value: 0,
            unit: 'rem'
        },
    },
    'border-radius': {
        'input-number': {
            min: 0,
            max: 100,
            value: 0,
            unit: 'rem'
        },
    },
    
   
    'margin-bottom': {
        'input-number': {
            min: 0,
            max: 100,
            value: 0,
            unit: 'rem'
        },
    },
    'left': {
        'input-number': {
            min: 0,
            max: 100,
            value: 0,
            unit: 'rem'
        },
    },
    'top': {
        'input-number': {
            min: 0,
            max: 100,
            value: 0,
            unit: 'rem'
        },
    }
}]

/* 
  'padding': {
    'slider': {
      min: 0,
      max: 100,
      value: 0, 
      step: 4
    }
  }

*/



const propsMapping = {
    '.cmp-teaser__content': [
        { 'propName': 'padding', 'class': '$teaser-content-padding' },
        { 'propName': 'margin', 'class': '$teaser-color' },
        { 'propName': 'display', 'class': '$teaser-content-display' },
        { 'propName': 'align-items', 'class': '$teaser-content-align-items' },
        { 'propName': 'flex-direction', 'class': '$teaser-content-flex-direction' },
        { 'propName': 'justify-content', 'class': '$teaser-content-justify-content' },
        { 'propName': 'left', 'class': '$teaser-content-left' },
        { 'propName': 'overflow', 'class': '$teaser-content-overflow' },
        { 'propName': 'position', 'class': '$teaser-content-position' },
        { 'propName': 'top', 'class': '$teaser-content-top' },
        { 'propName': 'transform', 'class': '$teaser-content-transform' },
        { 'propName': 'width', 'class': '$teaser-content-width' },
    ],

    '.cmp-teaser': [
        { 'propName': 'background', 'class': '$teaser-bg' },
        { 'propName': 'color', 'class': '$teaser-color' },
        { 'propName': 'display', 'class': '$teaser-display' },
        { 'propName': 'flex-direction', 'class': '$teaser-flex-direction' },
        { 'propName': 'position', 'class': '$teaser-position' },
        { 'propName': 'width', 'class': '$teaser-width' },
    ],
    '.cmp-teaser__image': [
        { 'propName': 'background', 'class': '$teaser-image-background' },
        { 'propName': 'display', 'class': '$teaser-image-display' },
        { 'propName': 'align-items', 'class': '$teaser-image-align-items' }
    ],
    '.cmp-image__image': [
        { 'propName': 'width', 'class': '$teaser-cmp-teaser__image-cmp-image-width' }
    ],
    '.cmp-teaser__pretitle': [
        { 'propName': 'color', 'class': '$teaser-pretitle-color' },
        { 'propName': 'font-family', 'class': '$teaser-pretitle-font-family' },
        { 'propName': 'font-size', 'class': '$teaser-pretitle-font-size' },
        { 'propName': 'font-weight', 'class': '$teaser-pretitle-font-weight' },
        { 'propName': 'letter-spacing', 'class': '$teaser-pretitle-letter-spacing' },
        { 'propName': 'line-height', 'class': '$teaser-pretitle-line-height' },
        { 'propName': 'opacity', 'class': '$teaser-pretitle-opacity' },
        { 'propName': 'padding', 'class': '$teaser-pretitle-padding' },
        { 'propName': 'text-transform', 'class': '$teaser-pretitle-text-transform' },
    ],
    '.cmp-teaser__title': [
        { 'propName': 'color', 'class': '$teaser-title-color' },
        { 'propName': 'font-family', 'class': '$teaser-title-font-family' },
        { 'propName': 'font-size', 'class': '$teaser-title-font-size' },
        { 'propName': 'font-weight', 'class': '$teaser-title-font-weight' },
        { 'propName': 'letter-spacing', 'class': '$teaser-title-letter-spacing' },
        { 'propName': 'line-height', 'class': '$teaser-title-line-height' },
        { 'propName': 'opacity', 'class': '$teaser-title-opacity' },
        { 'propName': 'margin', 'class': '$teaser-title-margin' },
        { 'propName': 'text-align', 'class': '$teaser-title-text-align' },
    ],
    '.cmp-teaser__description': [
        { 'propName': 'margin-bottom', 'class': '$teaser-desc-margin-bottom' },
    ],
    '.cmp-teaser__description p': [
        { 'propName': 'font-family', 'class': '$teaser-desc-p-font-family' },
        { 'propName': 'font-size', 'class': '$teaser-desc-p-font-size' },
        { 'propName': 'letter-spacing', 'class': '$teaser-desc-p-letter-spacing' },
        { 'propName': 'line-height', 'class': '$teaser-desc-p-line-height' },
        { 'propName': 'margin', 'class': '$teaser-desc-p-margin' },
        { 'propName': 'padding', 'class': '$teaser-desc-p-padding' },
        { 'propName': 'opacity', 'class': '$teaser-desc-p-opacity' },
        { 'propName': 'color', 'class': '$teaser-desc-p-color' },
    ],
    '.cmp-teaser__action-link': [
        { 'propName': 'border', 'class': '$teaser-action-link-border' },
        { 'propName': 'border-radius', 'class': '$teaser-action-link-border-radius' },
        { 'propName': 'color', 'class': '$teaser-action-link-color' },
        { 'propName': 'display', 'class': '$teaser-action-link-display' },
        { 'propName': 'font-family', 'class': '$teaser-action-link-font-family' },
        { 'propName': 'font-size', 'class': '$teaser-action-link-font-size' },
        { 'propName': 'font-weight', 'class': '$teaser-action-link-font-weight' },
        { 'propName': 'letter-spacing', 'class': '$teaser-action-link-letter-spacing' },
        { 'propName': 'line-height', 'class': '$teaser-action-link-line-height' },
        { 'propName': 'margin', 'class': '$teaser-action-link-margin' },
        { 'propName': 'opacity', 'class': '$teaser-action-link-opacity' },
        { 'propName': 'padding', 'class': '$teaser-action-link-padding' },
        { 'propName': 'text-align', 'class': '$teaser-action-link-text-align' },
        { 'propName': 'text-decoration', 'class': '$teaser-action-link-text-decoration' },
        { 'propName': 'background', 'class': '$teaser-action-link-background' },
        { 'propName': 'color', 'class': '$teaser-action-link-color' },
        { 'propName': 'hover-background', 'class': '$teaser-action-link-hover-background' },
        { 'propName': 'hover-border-color', 'class': '$teaser-action-link-hover-border-color' },
    ],
}



const buildUi = () => {
    Object.entries(mapping.teaser).forEach(([key, value]) => {
        // do something with key and val
        let level_1 = 0;
        //console.log('key', key)
        //console.log('value', value)

        $(breadCrumbs).append(`<button onclick="handleSelectorChange(this)" value="${key}" title="${key} ">${key}</button>`);

        if (value !== null && typeof value == "object") {
            let level_2 = 1;

            Object.entries(value).forEach(([key2, value2]) => {
                //console.log('key 2', key2)
                //console.log('value 2', value2)
                $(breadCrumbs).append(`<button class="indent-1" onclick="handleSelectorChange(this)" value="${key} ${key2}" title="${key} ${key2}">${key2}</button>`);

                if (value2 !== null && Array.isArray(value2)) {
                    value2.forEach((item) => {

                        if (item !== null && typeof item == "object") {
                            Object.entries(item).forEach(([key3, value3]) => {
                                // console.log('key 3', key3)
                                //console.log('value 3', value3)

                                $(breadCrumbs).append(`<button class="indent-3" onclick="handleSelectorChange(this)" value="${key} ${key2} ${key3}" title="${key} ${key2} ${key3}">${key3}</button>`);

                                if (typeof value3 === 'string') {
                                    $(breadCrumbs).append(`<button class="indent-4" value="${key} ${key2} ${key3} ${value3}" onclick="handleSelectorChange(this)" title="${key} ${key2} ${key3} ${value3}">${value3}</button>`);
                                }

                            })
                        } else {
                            $(breadCrumbs).append(`<button class="indent-3" onclick="handleSelectorChange(this)" value="${key} ${key2} ${item}" title="${key} ${key2} ${item}">${item}</button>`);
                        }
                    })
                }
            })
        }

    });
}

function getCurrentSelector() {
    return currentSelector;
}
function getPropPresets() {
    return propPresets;
}


function setCurrentSelector(selector) {
    currentSelector = selector;

}

const handleComponentChange = (e) => {
    console.log(e)
}

const handlePropChange = (inputNode, suffix) => {
    const value = $(inputNode).val();
    const name = $(inputNode).attr('name');

    console.log(value, name);

    //console.log(getCurrentSelector());

    const node = document.querySelector(getCurrentSelector());
    node.style.setProperty(`--${name}`, suffix ? `${value}${suffix}` : `${value}`);

}

const handleSelectorChange = (button) => {
    // searches only for class notation
    let currentSelector = button.value.substring(button.value.lastIndexOf('.'), button.value.length);
    //console.log(currentSelector)
    document.querySelectorAll('.button-selected').forEach((node) => node.classList.remove('button-selected'));
    button.classList.add('button-selected')
    setCurrentSelector(currentSelector);
    document.querySelectorAll('.node-selected').forEach((node) => node.classList.remove('node-selected'));

    const node = document.querySelector(currentSelector);
    node.classList.add('node-selected');

    buildChangeDialog(currentSelector);
}

const printAllVariables = async () => {
    const buttons = document.querySelectorAll('.breadcrumb-selectors button');
    console.log('%cPrinting all variables', 'background: #222; color: #bada55');
    console.log('-------------------------------------------------------\n')
    for (const node of buttons) {
        const selector = node.value;
        await buildChangeDialog(selector, true, 'multi');
    }
    console.log('-------------------------------------------------------\n')
}

const printVariables = async () => {
    const currentSelector = getCurrentSelector();
    await buildChangeDialog(currentSelector, print)
}

const buildChangeDialog = (currentSelector = undefined, print, mode = 'single') => {
    
    return new Promise((resolve, reject) => {

        let variablesHolder = [];
        //console.log(propsMapping[currentSelector])

        const currentNode = document.querySelector(currentSelector || getCurrentSelector());

        // convert so short selector with last class name.
        currentSelector = currentSelector.substring(currentSelector.lastIndexOf('.'), currentSelector.length);

        $(changeDialog).empty()


        if (!propsMapping[currentSelector]) resolve(true);
        propsMapping[currentSelector].forEach((propGroup, index) => {
            let prop;

            if (typeof propGroup === 'object') {
                prop = propGroup.propName
            } else {
                prop = propGroup
            }

            const currentValue = getComputedStyle(currentNode)[prop];

            if (getPropPresets()[0][prop]) {
                const type = Object.keys(getPropPresets()[0][prop])
                const values = Object.values(getPropPresets()[0][prop])
                const propsRow = $(`<div class="propsRow"><div>${prop}</div></div>`)

                if (type[0] === 'select') {
                    const select = $(`<select name="${prop}"></select>`);
                    select.on('change', function () { handlePropChange(this) });
                    values[0].forEach((value) => {
                        select.append(`<option value="${value}">${value}</value>`)
                    })
                    select.val(currentValue);

                    propsRow.append(select)
                    propsRow.append(`<div class="className">${propGroup.class}</div>`)
                    $(changeDialog).append(propsRow);

                    if (print) {
                        const finalClass = propGroup['class'];
                        const finalValue = currentValue;

                        //printValues(finalClass,finalValue);
                        variablesHolder.push({ finalClass, finalValue })
                    }
                    //$(changeDialog).append(select);
                }

                if (type[0] === 'input-number') {
                    const inpWrapper = $(`<div></div>`);
                    const inp = $(`<input type="number" name="${prop}"></input>`);
                    inp.on('change', function () { handlePropChange(this, 'px') });
                    inp.min = 0;
                    inp.val(currentValue.replace('px', ''));

                    const unit = $(`<span>&nbsp;(px)</input>`);

                    inpWrapper.append(inp)
                    inpWrapper.append(unit)

                    propsRow.append(inpWrapper)

                    propsRow.append(`<div class="className">${propGroup.class}</div>`)
                    $(changeDialog).append(propsRow);

                    if (print) {
                        const finalClass = propGroup['class'];
                        const finalValue = currentValue;

                        //printValues(finalClass,finalValue);
                        variablesHolder.push({ finalClass, finalValue })
                    }
                    //$(changeDialog).append(select);
                }

                if (type[0] === 'slider') {
                    const inp = $(`<input type="range" name="${prop}"></input>`);
                    inp.on('change', function () { handlePropChange(this, 'px') });
                    inp.min = 0;
                    inp.max = 100;
                    inp.val(currentValue);
                    inp.step = 2;

                    propsRow.append(inp)
                    propsRow.append(`<div class="className">${propGroup.class}</div>`)
                    $(changeDialog).append(propsRow);

                    if (print) {
                        const finalClass = propGroup['class'];
                        const finalValue = currentValue;

                        //printValues(finalClass,finalValue);
                        variablesHolder.push({ finalClass, finalValue })
                    }
                    //$(changeDialog).append(select);
                }

            } else {
                const propsRow = $(`<div class="propsRow"><div>${prop}</div></div>`)
                const inputElem = $(`<input type="text" onchange="handlePropChange(this)" value="${currentValue}" data-propName="${prop}" name="${prop}"/>`);
                propsRow.append(inputElem)
                propsRow.append(`<div class="className">${propGroup.class}</div>`)
                if (print) {
                    const finalClass = propGroup['class'];
                    const finalValue = currentValue;

                    //printValues(finalClass,finalValue);
                    variablesHolder.push({ finalClass, finalValue })

                }
                $(changeDialog).append(propsRow)
            }
        })

        const printVariablesButton = $(`<button onclick="printVariables()">Print vars</button>`)
        const printAllVariablesButton = $(`<button onclick="printAllVariables()">Print All vars</button>`)
        const printVariablesSpace = $(`<code id="code-variableSpace"></code>`);
        $(changeDialog).append(printVariablesSpace);
        $(changeDialog).append(printVariablesButton);
        $(changeDialog).append(printAllVariablesButton);
        //console.log(variablesHolder);

        if (print) {
            if(mode !== 'multi'){
                console.log(`%cPrinting variables for ${currentSelector}`, 'background: #222; color: #bada55');
            }
            
            let string = mode === 'single' ? '-------------------------------------------------------\n' : '';
            variablesHolder.forEach((item) => {
                string += `${item.finalClass}: ${item.finalValue};\n`
            })
            string += mode === 'single' ? '-------------------------------------------------------\n' : '';

            console.log(string);
        }

        resolve(true);
    })

}

const printValues = (prop, value) => {

    // $('#code-variableSpace').innerHTML += `${prop}: ${value}`


}


const currentNodeSelector = '';

//const updateStyle = (propName, value) => doStuff();

const highlightNode = () => {

}



const init = () => {

    buildUi();

}

init()