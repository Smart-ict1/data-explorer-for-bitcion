 // Data from: http://www.coindesk.com/price/

 window.addEventListener('load', setup);

 async function setup() {
   const ctx = document.getElementById('myChart').getContext('2d');
   const priceofbtcion = await getData();
   const myChart = new Chart(ctx, {
     type: 'line',
     data: {
       labels:  priceofbtcion.date,
       datasets: [
         {
           label: 'price in USD',
           data:  priceofbtcion.price,
           fill: false,
           borderColor: 'rgba(255, 99, 132, 1)',
           backgroundColor: 'rgba(255, 99, 132, 0.5)',
           borderWidth: 1
         }
       ]
     },
     options: {}
   });
 }

 async function getData() {
   const response = await fetch('/coindesk-USD-close.csv');
   const data = await response.text();
   const date = [];
   const price = [];
   const rows = data.split('\n').slice(1);
   rows.forEach(row => {
     const cols = row.split(',');
     date.push(cols[0]);
     price.push(cols[1]);
   });
   return { date, price };
 }