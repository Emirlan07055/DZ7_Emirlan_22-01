class TrafficLight {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }
}
class Circle extends TrafficLight {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
        this.$element.style.width = this.$element.style.height = options.size + 'px'
        this.$element.style.borderRadius = '50%'
    }
}

let color = prompt('Введите цвет ').toLowerCase().trim()
if (color === 'red' || color === 'красный'){
    const red = new Circle({
        selector: '#red',
        color: 'red',
        size: 75
    })
}else if(color === 'желтый'|| color === 'yellow' ){
    const yellow = new Circle({
        selector: '#yellow',
        color: 'yellow',
        size: 75
    })
}else if (color === 'green' || color === 'зеленный'){
    const green = new Circle({
        selector: '#green',
        color: 'green',
        size: 75
    })
}else {
    alert('ERROR')
}
