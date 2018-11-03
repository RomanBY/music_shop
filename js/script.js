var color = 'rgba(249, 9, 9, 0.65)';

function change1(identifier) {
    identifier.style.background = color;
    document.getElementById('col2').style.cssText = 'background-color: #673e30';
    document.getElementById('col3').style.cssText = 'background-color: #673e30';
    document.getElementById('col4').style.cssText = 'background-color: #673e30';
}
function change2(identifier) {
    identifier.style.background = color;
    document.getElementById('col1').style.cssText = 'background-color: #673e30';
    document.getElementById('col3').style.cssText = 'background-color: #673e30';
    document.getElementById('col4').style.cssText = 'background-color: #673e30';
}
function change3(identifier) {
    identifier.style.background = color;
    document.getElementById('col2').style.cssText = 'background-color: #673e30';
    document.getElementById('col1').style.cssText = 'background-color: #673e30';
    document.getElementById('col4').style.cssText = 'background-color: #673e30';
}
function change4(identifier) {
    identifier.style.background = color;
    document.getElementById('col2').style.cssText = 'background-color: #673e30';
    document.getElementById('col3').style.cssText = 'background-color: #673e30';
    document.getElementById('col1').style.cssText = 'background-color: #673e30';
}