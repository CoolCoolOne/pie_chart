// const div1 = document;
// const exampleAttr = div1.getAttribute("data-slider-totalslides");
const el = document.querySelector('[data-slider-totalslides]');
// let item = el.getAttribute("data-slider-totalslidese");
item = el.dataset.sliderTotalslides;
// console.log(el);
console.log(item);

const ctx = document.getElementById('myChart');

// const bgColors = [];
// for (let i = 0; i <= 4; i++) {
//   bgColors[i] = Math.floor(170+Math.random()*85);
// }
// console.log(bgColors[0]);

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Добрая работа',
      'Место под Солнцем',
      'Будь собой',
      'Блог',
      'Главный поток'
    ],
    datasets: [{
      label: 'Публикаций по этому тэгу',
      data: [11, 5, 3, 5, 7],
      backgroundColor: [
        'rgb(255, 255, 0)',
        'rgb(255, 235, 0)',
        'rgb(255, 215, 0)',
        'rgb(255, 205, 0)',
        'rgb(255, 185, 0)'
      ],
      hoverOffset: 4
    }]
  },
});
