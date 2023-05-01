<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;


      var BIP = {
          y: [ 10.,  40.,  20.,  10.,  10.,  20.,  50., 100.,  30.,  20.,  15.,25.,  25.,  20.,  20.,  25.,  20.,  25.,  10.,  50.,  20.,  40.,
        15.,   0.,  25.,  20.,  50.,  10.,  50.,  40.,  20.,  50.,  20., 15.,  20.,  25.,  20.,  10.,  25.,  20.,  40.],
          type: 'box',
          name: 'Biparental Households',
          jitter: 0.3,
          pointpos: -1.8,
          marker: {
              color: 'rgba(60, 60, 60, 0.5)'
          },
          boxpoints: 'all'
          };

    var SM = {
      y: [25., 50., 40., 20., 10., 20., 35., 20., 34., 15., 20., 25., 50., 20., 25., 50.,  3., 10., 20., 25., 25., 25., 20.],
      type: 'box',
      name: 'Single Mother',
      jitter: 0.5, //jitt controls the width of the box
      pointpos: -1.8, // control the box position
      marker: {
          color: 'rgba(128, 0, 255, 0.5)'
      },
      boxpoints: 'all'
      };


  var Data = [BIP,SM];

  var layout = {
  title: 'Fraction of remittances spent on clothes and shoes',
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