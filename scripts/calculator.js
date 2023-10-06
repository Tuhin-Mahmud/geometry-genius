function calculatorTriangleArea() {
    // base
    const baseField = getInputValue('triangle-base');
    // height 
    const heightField = getInputValue('triangle-height');
    // triangle area 
    const area = 0.5 * baseField * heightField;
    const areaTwoDecimal = area.toFixed(2);
    // show triAngel area 
    setElementInnerText('triangle-area', areaTwoDecimal)
}
// rectAngle
function calculateRectAngleArea() {
    const widthField = getInputValue('rectangle-width')
    // length area 
    const lengthField = getInputValue('rectangle-length');;
    // calculate rectAngle area 
    const area = widthField * lengthField;
    const areaTwoDecimal = area.toFixed(2)
    // show calculate area 
    setElementInnerText('rectangle-area', areaTwoDecimal);
}
// parallelogram area 
function calculateParalleloGramArea() {
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')
    const area = base * height;
    const areaTwoDecimal = area.toFixed(2);
    setElementInnerText('parallelogram-area', areaTwoDecimal)
}
// Ellipse area 
function calculateEllipseArea() {
    const ellipseMajor = getInputValue('ellipse-major');
    const ellipseMinor = getInputValue('ellipse-minor');
    const ellipseArea = 3.41 * ellipseMajor * ellipseMinor;
    const areaTwoDecimal = ellipseArea.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal)
}

// reusable function getField
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
// set element innerText
function setElementInnerText(setElement, area) {
    const element = document.getElementById(setElement);
    element.innerText = area;
}