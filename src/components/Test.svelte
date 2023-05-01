<svelte:head>
  <script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  //import { Plotly } from 'plotly.js'
	
	let headerText;

  export let plotHeader = '';

  export let data = [{
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    type: 'bar'
  }];

  onMount(() => {
		headerText = 'On Mount Called !';
		let plotDiv = document.getElementById('plotDiv');				
		let Plot = new Plotly.newPlot(plotDiv, data, {}, {showSendToCloud:true}); 
  });
            
</script>

<h3>{headerText}</h3>
<div id="plotly">
  <div>
    <h1>{plotHeader}</h1>
  </div>
  <div id="plotDiv"><!-- Plotly chart will be drawn inside this DIV --></div>
</div>