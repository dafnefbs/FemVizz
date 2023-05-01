<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { select } from 'd3';

  const width = 200;
  const height = 350;

  const rent = 0.08;
  const own = 0.79;
  const free = 0.12;

  const squareData = [
    { id: 1, x: 0, y: 0, width: height, height: width * rent },
    { id: 2, x: 0, y: width * rent, width: height, height: width * own },
    { id: 3, x: 0, y: width * (rent+own), width: height, height: width * free }
  ];

  export let index;

  let container;

  onMount(() => {
    const svg = select(container)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    svg
      .selectAll('rect')
      .data(squareData)
      .enter()
      .append('rect')
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('fill', d => {
        if (d.id === 1) {
          return '#D3D3D3'; // Light gray
        } else if (d.id === 2) {
          return '#800080'; // Purple
        } else {
          return '#A9A9A9'; // Dark gray
        }
      });

    // Add text element on top of own rectangle
    svg.append("text")
      .attr("x", width * 0.45)
      .attr("y", height * 0.05)
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .attr("fill", "black")
      .text("8% Rented");

    // Add text element on top of own rectangle
    svg.append("foreignObject")
      .attr("x", width * 0.15)
      .attr("y", height * 0.1)
      .attr("width", width * 0.7)
      .attr("height", height * 0.5)
      .attr("font-size", "20px")
      .append("xhtml:p")
      .style("text-wrap", "wrap")
      .html("79% Own and Own paying installments");

    // Add text element on top of free occupant rectangle
    svg.append("text")
      .attr("x", width * 0.45)
      .attr("y", height * 0.55)
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .attr("fill", "black")
      .text("12% Free Occupant");
  });
  
  let isVisible = false;

  $: if (index === 1) {
    isVisible = true;
  } else {
    isVisible = false;
  }
</script>

<div class="house" class:visible={isVisible} bind:this={container}>
  <h1>Both Family Types</h1>
</div>

<style>
  .house {
    width: 100%;
    height: 100vh;
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }

  .house.visible {
    opacity: 1;
    visibility: visible;
  }

  h1 {
       color: black;
  }
</style>

