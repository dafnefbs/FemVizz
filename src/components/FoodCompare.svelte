<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;


      var BIP = {
          y: [ 50., 100.,  60.,  50.,  80.,  75., 100.,  35.,  60.,  50., 100., 100., 100.,  30., 100., 100., 100.,  50.,  75.,  50.,  50., 100.,
        80.,  60.,  50.,  75.,  50., 100.,  50.,  75.,  20.,  70.,  50.,70., 100.,  50., 100.,  50., 100., 100.,  50.,  80., 100.,  75.,
        100.,  50.,  90.,  25.,  50.,  60.,  80.,  50.,  60.,  30.,  70.,60.,  70.,  50.,  60.,  60.,  80., 100., 100.,  80.,  50., 100.,
        80., 100., 100., 100.,  50.,  50., 100.,  50.,  40.,  80., 100.,50.,  80., 100., 100., 100.,  50., 100.,  80.,  25., 100.,  80.,
        100.,  40.,  60.,  50., 100.,  60.,  60.,  50.,  70.,  30.,  50.,100., 100.,  60.,  50., 100., 100.,  50.,  20., 100.,  50., 100.,
        50.,  60.,  70.,  50.,  50.,  60., 100., 100., 100., 100.,  80.,75., 100.,  50., 100.,  60.,  50.,  25.,  50.,  50.,  80.,  70.,
        60.,  50.,  50.,  80.,  50., 100.,  25., 100.,  80., 100.,  50.,100.,  50.,  75.,  50.,  50., 100., 100., 100.,  70.,  60., 100.,
        50.,  60.,  70., 100.,  60.,  50., 100., 100., 100.,  60.,  80.,100.,  50., 100.,  10.,  10., 100.,  80., 100., 100.,  60., 100.,
        70.,  50.,  75.,  50.,  50.,  60.,  50.,  50., 100., 100., 100.,100.,  60.,  80.,  50.,  80.,  70., 100.,  50., 100.,  30.,  50.,
        70.,  85.,  50.,  75.,  50.,  50.,  50.,  60.,  50., 100.,  70.,100.,  50.,  50.,  50.,  30.,  70., 100.,  50.,  75., 100.,  50.,
        50.,  25., 100.,  25.,  25.,  20.,  75.,  60.,  40.,  75.,  50.,80.,  50.,  50.,  50.,  50.,  50.,  80., 100.,  90.,  75., 100.,
        75.,  50.,  50.,  50.,  50., 100., 100.,  70., 100.,  40.,  40.,50., 100., 100., 100., 100., 100.,  70.,  75.,  30.,  50.,  20.,
        80.,  50.,  50.,  25., 100.,  75.,  50.,  75.,  60.,   0., 100., 80.,  80.,  50.,  50.,  50.,  50.,  50.,  50.,  50., 100., 100.,
        50., 100.,  30.,  50.,  50.,  25.,  50.,  25., 100., 100.,  50., 60.,  50.,  60., 100., 100.,  80.,  20.,  30., 100.,  50.,  50.,
        100.,  60.,  50.,  50.,  25.,  50.,  50., 100.,  80.,  75.,  10.,25.,  50.,  50., 100.,  80.,  30.,  30.,  60.,  60., 100.,  80.,
        50.,  60., 100.,  70.,  40.,  80.,  50.,  70.,  50.,  60., 100.,100., 100., 100.,  50.,  50.,  30.,  80.,  30.,  60.,  50.,  10.,
        60.,  50.,  50.,  75.,  50.,  30.,  50.,  50., 100.,  50.,  50.,100.,  75.,  50., 100., 100., 100., 100.,  80.,  70.,  50.,  50.,
        50., 100.,  75.,  60.,  50.,  20.,  50.,  25., 100.,  50.,  50.,50.,  50.,  50.,  80.,  90., 100., 100.,  50.,  50.,  60.,  50.,
        50.,  50., 100.,  60.,  50.,  30.,  60.,  25.,  25.,  35.,  80.,75.,  35.,  50., 100.,  30.,  50.,  24., 100.,  50., 100., 100.,
        100.,  70.,  90.,  50.,  60.,  70.,  60.,  50.,  80.,  75., 100.,80., 100., 100.,  50., 100.,  60.,  60.,  40., 100.,  50.,  50.,
        100.,  70.,  80.,  20.,   0.,  50.,  50., 100.,  50.,  40.,  50.,100.,  20.,   0.,  35.,  40.,  50.,  50.,  70., 100.,  75., 100.,
        100.,  50.,  50.,  60.,  70.,  50., 100.,  50.,  60., 100., 100.,70., 100.,  60.,  50.,  70.,   0., 100.,  50.,  60.,  60.,  50.,
        75.,  25.,  60.,  50.,  50.,  75., 100.,  40.,  50.,  80.,  80.,100.,  80.,  70.,  50.,  80.,  60.,  50., 100.,  50.,  75.,  50.,
        60.,  60.,  50., 100.,  75.,  80.,  50., 100.,  80.,  25.,  25.,50.,  50.,  30.,  90.,  75.,  40., 100.,  75., 100., 100.,  65.,
        60.,  60.,  20.,  60., 100.,  50., 100.,  50.,  50.,  40., 100.,50.,   0., 100.,  50.,  30.],
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
      y: [ 40., 100.,  50.,  60.,  20.,  50.,  80.,  60.,  80.,  50.,  50.,
      40., 100., 100.,  50., 100.,  40.,  80.,  75.,  50.,  50.,  80.,
     100.,  50.,  80.,  70.,  80., 100.,  50.,  80.,  50.,  50.,  30.,
      50.,  15.,  70., 100., 100., 100.,  60.,  60.,  50., 100.,  60.,
      50.,  60.,  30.,  50.,  50., 100.,  30.,  50.,  60., 100.,  50.,
      50.,  50.,  50.,  50.,  50.,  80., 100.,  60.,  80.,  10., 100.,
      50.,  50.,  50., 100.,  50., 100.,  50., 100.,  80.,  40.,  60.,
     100.,  60.,  15.,  80.,  70.,  80.,  50.,  60.,  40., 100.,  75.,
      25.,  50.,  60.,  60.,  70.,  50.,  70.,  50.,  70.,  50.,  80.,
      40.,  50.,  50.,  30.,  70.,  60.,  50.,  80.,  50.,  85., 100.,
      60.,  50.,  50.,  75.,  80.,  25.,  75.,  40.,  50.,  50.,  80.,
      50.,  50.,  50.,  40.,  50.,  50.,  50.,  10.,  50., 100., 100.,
      50.,  50., 100.,  70.,  70.,  50.,  75., 100.,  50.,  70.,  30.,
      50.,  50.,  50.,  50.,  50.,  75.,  60., 100.,  50.,  60., 100.,
      60.,  70.,  70.,  90.,  50., 100.,  70.,  50.,  50.,  50.,  80.,
      50.,  50.,  50., 100., 100.,  75.,  80.,  30., 100., 100., 100.,
      20., 100.,  60.,  50.,  20.,  50.,  50.,  60.,  60.,  20.,  50.,
      50.,  50.,  50.,  60.,  30.,  50.,  50.,  60.,  50.,  50.,  30.,
      40., 100.,  20.,  50.,   8.,  80.,  50.,  25., 100.,  40.,  75.,
      50.,   0.,   0.,  50.,  60.,  50., 100., 100., 100.,  50., 100.,
      80.,  75., 100., 100.,  80.,  60.,  50., 100.,  80.,  15.,  70.,
      80.,  30., 100., 100., 100., 100.,  50., 100.,  50.,  50.,  50.,
      50.,  70.,  50.,  50.,  50., 100.,  50.,  25.,  50.,  50.,  50.,
      60., 100.,  50.],
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
  title: 'Fraction of remittances spent on food',
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