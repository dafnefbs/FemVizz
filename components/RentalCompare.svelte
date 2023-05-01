<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;


      var BIP = {
          y: [30., 20.],
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
      y: [25., 30., 60., 20., 30., 80.],
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
  title: 'Fraction of remittances spent on housing rental',
  yaxis: {
    autorange: false,
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