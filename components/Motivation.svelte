<script>
  import { Bar } from 'svelte-chartjs';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );

export const data = {
  labels: ['Saving money', ['Contacting people in', 'destination country'], 'Asking for a loan', ['Hiring/contacting', 'a coyote'], ['Prepare migration', 'documents']],
  datasets: [
    {
      label: 'Biparental Families',
      backgroundColor: 'rgba(128, 128, 128, 0.4)',
      borderColor: 'rgba(128, 128, 128, 1)',
      borderWidth: 2,
      data: [25, 10, 8, 2, 7],
    },
    {
      label: 'Single Mother Families',
      backgroundColor: 'rgba(128,0,128,0.4)',
      borderColor: 'rgba(128,0,128, 1)',
      borderWidth: 2,
      data: [25, 15, 15, 7, 4],
    },
  ],
};

export const options = {
  plugins: {
      datalabels: {
        display: true,
        color: 'white',
        font: {
          weight: 'bold'
        },
        formatter: function(value) {
          return value + '%';
        }
      }
    },
  responsive: true,
  animation: {
      x: {
        duration: 1000,
        from: 0
      },
      y: {
        duration: 8000,
        from: 1000,
      }
    },
    scales: {
    y: {
      display: false
    }
  },
  grid: {
    display: false
  }

  };

</script>
<br>
<br>
<br>
<br>

<h2>And the preparation begins by...</h2> 
<br>
<br>


<Bar {data} {options} />
  



<style>


  h2 {
        text-align: center;
        font-size: 1.5em;
        color: purple;
        margin-top: 0.1em;
        margin-bottom: 0.3em;        
  }

</style>