<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;

    var Construciton = {
      y: [100.,  20.,  35.,  20.,  30.,  50.,  50.],
      type: 'box',
      name: 'Construction/Repair',
      jitter: 0.5, //jitt controls the width of the box
      pointpos: -1.8, // control the box position
      marker: {
          color: 'rgba(128, 0, 255, 0.5)'
      },
      boxpoints: 'all'
      };

    var Rental = {
        y: [25., 30., 60., 20., 30., 80.],
        type: 'box',
        name: 'Rental',
        jitter: 0.3,
        pointpos: -1.8,
        marker: {
            color: 'rgba(191, 0, 255, 0.5)'
        },
        boxpoints: 'all'
        };

    var Purchase = {
        y: [20., 20.],
        type: 'box',
        name: 'Purchase',
        jitter: 0.3, 
        pointpos: -1.8,
        marker: {
            color: 'rgba(220, 0, 255, 0.5)'
        },
        boxpoints: 'all'
        };


  var Data = [Construciton,Rental,Purchase];

  var layout = {
  title: 'Fraction of remittances spent on housing by single mothers',
  yaxis: {
    autorange: true,
    showgrid: true,
    zeroline: true,
    range: [0,100],
    dtick: 10,
    gridcolor: 'rgb(255, 255, 255)',
    gridwidth: 1,
    zerolinecolor: 'rgb(255, 255, 255)',
    zerolinewidth: 2,
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 100,
  },
  paper_bgcolor: 'rgba(0,0,0,0)',
  plot_bgcolor: 'rgba(0,0,0,0)',
  showlegend: false,
  };

  onMount(async () => {
    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv, Data, layout);
  });

</script>

<div bind:this="{myDiv}"></div>

