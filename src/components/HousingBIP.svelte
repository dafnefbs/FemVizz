<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;

  var Construction = {
      y: [ 25.,  50.,  20.,  25., 100., 100.,  25.,  70.,  50.,  20.,  75.,
        75.,  30., 100., 100.,  50.,  25.,  80., 100.,  25.,  50., 100.,
       100.,  70.,  20., 100.,  65.,  20.,  50.],
      type: 'box',
      name: 'Construction/Repair',
      jitter: 0.5, //jitt controls the width of the box
      pointpos: -1.8, // control the box position
      marker: {
          color: 'rgba(60, 60, 60, 0.5)'
      },
      boxpoints: 'all'
      };

      var Rental = {
          y: [30., 20.],
          type: 'box',
          name: 'Rental',
          jitter: 0.3,
          pointpos: -1.8,
          marker: {
              color: 'rgba(90, 90, 90, 0.5)'
          },
          boxpoints: 'all'
          };

      var Purchase = {
          y: [ 75., 100.],
          type: 'box',
          name: 'Purchase',
          jitter: 0.3, 
          pointpos: -1.8,
          marker: {
              color: 'rgba(120, 120, 120, 0.5)'
          },
          boxpoints: 'all'
          };


  var Data = [Construction,Rental,Purchase];

  var layout = {
  title: 'Fraction of remittances spent on housing by biparental families',
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