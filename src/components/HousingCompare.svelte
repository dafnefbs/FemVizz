<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';

  let myDiv;
  //let Plotly;

  // x labels of single mother
  let xsm = [];
  var consmcount = 7;
  var rensmcount = 6;
  var pursmcount = 2;
    for (let i = 0; i < consmcount; i++) {
    xsm.push('Construction and repair');
    }
  for (let i = 0; i < rensmcount; i++) {
    xsm.push('Rental');
  }
  for (let i = 0; i < pursmcount; i++) {
    xsm.push('Purchase');
  }

  var SM = {
    y: [100.,  20.,  35.,  20.,  30.,  50.,  50., //construction

    25., 30., 60., 20., 30., 80.,//rental

    20., 20.], //purchase
    x: xsm,
    name: 'Single Mother',
    type: 'box',
    jitter: 0.5, //jitt controls the width of the box
    pointpos: -1.8, // control the box position
    marker: {
        color: 'rgba(128, 0, 255, 0.5)'
    },
    boxpoints: 'all',
    };

      // x labels of biparental
  let xbip = [];
  var conbipcount = 29;
  var renbipcount = 2;
  var purbipcount = 2;
    for (let i = 0; i < conbipcount; i++) {
    xbip.push('Construction and repair');
    }
  for (let i = 0; i < renbipcount; i++) {
    xbip.push('Rental');
  }
  for (let i = 0; i < purbipcount; i++) {
    xbip.push('Purchase');
  }

  var BIP = {
    y: [ 25.,  50.,  20.,  25., 100., 100.,  25.,  70.,  50.,  20.,  75.,
        75.,  30., 100., 100.,  50.,  25.,  80., 100.,  25.,  50., 100.,
       100.,  70.,  20., 100.,  65.,  20.,  50.,//construction

       30., 20., //rental

       75., 100.], //purchase
    x: xbip,
    name: 'Biparental Households',
    type: 'box',
    jitter: 0.5, //jitt controls the width of the box
    pointpos: -1.8, // control the box position
    marker: {
        color: 'rgba(120, 120, 120, 0.5)'
    },
    boxpoints: 'all'
    };


  var Data = [BIP,SM];

  var layout = {
  title: 'Fraction of remittances spent on housing',
  yaxis: {
    autorange: false,
    showgrid: true,
    zeroline: false,
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
  boxmode: 'group',
  boxgroupgap: 0.5
  };

  onMount(async () => {
    const { default: PlotlyModule } = await import("plotly.js-dist");
    const Plotly = PlotlyModule;
    Plotly.newPlot(myDiv, Data, layout);
  });

</script>

<div bind:this="{myDiv}"></div>

