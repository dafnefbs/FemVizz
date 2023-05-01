<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;

  var inter_sm = {
      y: [100.,  30.,  30.,  20.,  20., 100., 100., 100.,  20.,   5.,  10.,
       100., 100.,  90.,   0.,   0.,  95.,   0.,  90.,  90.,   0.,   6.,
         0.,  10.],
      type: 'box',
      name: 'Singel Mother',
      jitter: 0.5, //jitt controls the width of the box
      pointpos: -1.8, // control the box position
      marker: {
          color: 'rgba(128, 0, 255, 0.5)'
      },
      boxpoints: 'all'
      };

      var inter_bip = {
          y: [ 25.,  15.,   0.,  10.,  50.,  20.,   5.,  10.,  10.,   0.,   0.,
        40.,   5.,  15.,   5.,  20.,   0.,  10.,  10.,  20.,  35.,   7.,
        50.,   0.,   0.,   5.,  20.,   0.,   0., 100., 100., 100., 100.,
       100., 100., 100.,  15.,   0., 100.,  50., 100., 100., 100., 100.,
        40.,  40., 100.,  10.,  50.,   5.,  10.,  10.,  10.,  10.,   0.,
         0.,  30.,  25.,  15.,   0.,   5.,  50.,   5., 100., 100., 100.,
       100.,  30., 100.,   0.,   0., 100.,  10.,   0.,   0.,  10.,   0.,
        15.,  10.,  80.,  10.,  15.,  15.,  10.,   5., 100.,  10.],
          type: 'box',
          name: 'Biparental Households',
          jitter: 0.3, 
          pointpos: -1.8,
          marker: {
              color: 'rgba(60, 60, 60, 0.5)'
          },
          boxpoints: 'all'
          };


  var Data = [inter_bip,inter_sm];

  var layout = {
  title: 'Fraction of migration costs spent on intermediaries',
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