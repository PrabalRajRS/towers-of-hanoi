let moves = 0
let discMove = false
let selectedDock = null
let scoreDiv = document.getElementById('score')

function init() {
if (document.getElementById) {
var diskno = document.hanoi.diskno;
diskno.options.selectedIndex = 0;
drawTowers();
drawDisks(parseInt(diskno.options[diskno.options.selectedIndex].text));
}
}

function getFirstDisc(div) {
return div.getElementsByTagName('div')[0]
}

function checkDiscSizes(divOne, divTwo) {
return getFirstDisc(divOne).dataset.size > divTwo.dataset.size
}

function checkIfDisc(div) {
return div.getElementsByTagName('div').length === 0
}

function toggleMoveType() {
discMove = !discMove
}

function selectDock(div) {
selectedDock = getFirstDisc(div)

if (!selectedDock) return
origDiv = div
div.className += ' selected'
toggleMoveType()
}

function moveToDock(div) {
if (checkIfDisc(div) || checkDiscSizes(div, selectedDock)) {
moves++
div.insertBefore(selectedDock, div.firstChild)
console.log(scoreDiv)
scoreDiv.innerHTML = moves
}
origDiv.classList.remove('selected')
toggleMoveType()
}

function handleClick(e) {
discMove ? moveToDock(this) : selectDock(this)
}

Array.from(document.getElementsByClassName('container')).forEach(container => {
container.addEventListener('click', handleClick)
})