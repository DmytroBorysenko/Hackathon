// 
let charts;
let firstChart;
let secondChart;
let thirdChart;
let fourthChart;

let myStorage = window.localStorage;

let isFirstChart = document.getElementById('newTickets').checked;
let isSecondChart = document.getElementById('hourlyStats').checked;
let isThirdChart = document.getElementById('vendorRequests').checked;
let isFourthChart = document.getElementById('team').checked;
getLocalStorage();


function isChek(name) {
    if(name === 'newTickets') {
        isFirstChart = !isFirstChart;
    } else if (name === 'hourlyStats') {
        isSecondChart = !isSecondChart;
    } else if (name === 'vendorRequests') {
        isThirdChart = !isThirdChart;
    } else if (name === 'team') {
        isFourthChart = !isFourthChart
    }
    setLocalStorage();
    hideChartsBlock();
}

function setLocalStorage() {
    myStorage.setItem('newTickets', isFirstChart);
    myStorage.setItem('hourlyStats', isSecondChart);
    myStorage.setItem('vendorRequests', isThirdChart);
    myStorage.setItem('team', isFourthChart);
}

function getLocalStorage() {
    if(myStorage.length > 0) {
        isFirstChart = localStorage.getItem('newTickets')  === 'true';
        isSecondChart = localStorage.getItem('hourlyStats') === 'true';
        isThirdChart = localStorage.getItem('vendorRequests') === 'true';
        isFourthChart = localStorage.getItem('team') === 'true';
    }
    
}

function hideChartsBlock() {
    let one = document.getElementById('firstItem');
    if(isFirstChart) {
        one.style.display ='block'
    } else {
        one.style.display ='none'
    }
    let two = document.getElementById('secondItem');
    if(isSecondChart) {
        two.style.display ='block'
    } else {
        two.style.display ='none'
    }
    let three = document.getElementById('thirdItem');
    if(isThirdChart) {
        three.style.display ='block'
    } else {
        three.style.display ='none'
    }
    let four = document.getElementById('fourthItem');
    if(isFourthChart) {
        four.style.display ='block'
    } else {
        four.style.display ='none'
    }

}

function createCharts() {
    let defaultChartSeting = {
        hide: false,
        chart: {
            chart: {
                renderTo: '',
                type: 'column',
                options3d: {
                    enabled: false,
                }
            },
            title: {
                text: 'New Tickets'
            },
            subtitle: {
                text: 'Test options by dragging the sliders below'
            },
            plotOptions: {
                column: {
                    depth: 25
                }
            },
            series: [{
                data: getRandomArray()
            }]
        },
    };

    firstChart = JSON.parse(JSON.stringify(defaultChartSeting));
    secondChart = JSON.parse(JSON.stringify(defaultChartSeting));
    thirdChart = JSON.parse(JSON.stringify(defaultChartSeting));
    fourthChart = JSON.parse(JSON.stringify(defaultChartSeting));
    charts = [firstChart, secondChart, thirdChart, fourthChart];
}

createCharts();

function getRandomArbitrary() {
    let min = 10;
    let max = 250;
    let random = Math.random() * (max - min) + min
    return random.toFixed(2);
}

function getRandomArray() {
    let items = new Array(12);
    for(let i = 0;  i < items.length; i++ ) {
        items[i] = +getRandomArbitrary();
    };
    return items;
}


function createBlokForChartsInGeneral() {
    const parentBlock = document.getElementsByClassName('charts-item')
    let firstChart = document.createElement('div');
    firstChart.setAttribute('id', 'firstChart');
    firstChart.setAttribute('class', 'chart');
    parentBlock[0].appendChild(firstChart);

    let secondChart = document.createElement('div');
    secondChart.setAttribute('id', 'secondChart');
    secondChart.setAttribute('class', 'chart');
    parentBlock[1].appendChild(secondChart);


    let thirdChart = document.createElement('div');
    thirdChart.setAttribute('id', 'thirdChart');
    thirdChart.setAttribute('class', 'chart');
    parentBlock[2].appendChild(thirdChart);

    let fourthChart = document.createElement('div');
    fourthChart.setAttribute('id', 'fourthChart');
    fourthChart.setAttribute('class', 'chart');
    parentBlock[3].appendChild(fourthChart);


}

function addChartsInBlockGeneral() {
    createBlokForChartsInGeneral();
    firstChart.chart.chart.renderTo = 'firstChart';
    secondChart.chart.chart.renderTo = 'secondChart';
    thirdChart.chart.chart.renderTo = 'thirdChart';
    fourthChart.chart.chart.renderTo = 'fourthChart';
    charts.forEach(item => {
        new Highcharts.Chart(item.chart)
    })
}
addChartsInBlockGeneral();