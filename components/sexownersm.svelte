<!-- App.svelte -->
<script>
  import { onMount } from 'svelte';
  import { select } from 'd3';

  const width = 400;
  const height = 400;
  const numRows = 10;
  const numCols = 10;
  const bothPercent = 2;
  const malePercent = 18;

  const cellWidth = width / numCols;
  const cellHeight = height / numRows;
  const radius = Math.min(cellWidth, cellHeight) / 2.5;
  const cellData = [];

  const bothCount = Math.round((numCols * numRows * bothPercent) / 100);
  const maleCount = Math.round((numCols * numRows * malePercent) / 100);
  const femaleCount = numCols * numRows - bothCount - maleCount;

  const widthLegend = 300;
  const heightLegend = 20;

  export let index;

  let colorIndex = 0;

  for (let i = 0; i < numCols; i++) {
    for (let j = 0; j < numRows; j++) {
      let color = '#6F2DA8'; //grape (medium)
      if (colorIndex < bothCount) {
        color = '#E4A0F7'; //lavender (light)
      } else if (colorIndex < bothCount + maleCount) {
        color = '#702963'; //byzantine (dark)
      }
      colorIndex++;
      cellData.push({id: `${i}-${j}`, cx: (j + 0.5) * cellWidth, cy: (i + 0.5) * cellHeight, color: color});
    }
  }

  let container;
  let currentColorIndex = 0;
  const colors = ['#E4A0F7', '#702963', '#6F2DA8'];
  
  onMount(() => {
    const svg = select(container)
        .append('svg')
        .attr("viewBox", "0 0 " + width + " " + height)
        .attr("preserveAspectRatio", "xMidYMid meet");

  function animateCircles(color) {
    svg.selectAll('circle').remove();
    if (color === null) {
      svg.selectAll('circle')
        .data(cellData)
        .enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', d => d.cy)
        .attr('r', radius)
        .attr('fill', d => d.color);
    } else {
      svg
        .selectAll('circle')
        .data(cellData.filter(d => d.color === color))
        .enter()
        .append('circle')
        .attr('cx', d => d.cx)
        .attr('cy', -radius)
        .attr('r', radius)
        .attr('fill', color)
        .transition()
        .delay((d, index) => index * 50)
        .duration(1000)
        .attr('cy', d => d.cy)
        .on('click', function() {
          currentColorIndex = (currentColorIndex + 1) % colors.length;
          animateCircles(colors[currentColorIndex]);
        });
    }
  }

  window.addEventListener('click', () => {
    currentColorIndex = (currentColorIndex + 1) % (colors.length + 1);
    animateCircles(currentColorIndex === colors.length ? null : colors[currentColorIndex]);
  });

  window.addEventListener('scroll', () => {
    const rect = svg.node().getBoundingClientRect();

    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      animateCircles(colors[currentColorIndex]);
    }
  });

    const group = select(container)
      .append('svg')
      //.attr('width', 200)
      //.attr('height', 20)
      .attr("viewBox", "0 0 " + widthLegend + " " + heightLegend)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append('g')
      .attr('transform', `translate(${width / 4 + 12}, 10)`)
      .attr('text-anchor', 'start')
      .style('font-size', '14px');

    group.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', '#E4A0F7');

    group.append('text')
      .attr('x', 16)
      .attr('y', 5)
      .text('Both');

    const group2 = select(container)
      .append('svg')
      //.attr('width', 200)
      //.attr('height', 20)
      .attr("viewBox", "0 0 " + widthLegend + " " + heightLegend)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append('g')
      .attr('transform', `translate(${width / 4 + 12}, 10)`)
      .attr('text-anchor', 'start')
      .style('font-size', '14px');

    group2.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', '#702963');

    group2.append('text')
      .attr('x', 16)
      .attr('y', 5)
      .text('Man');

    const group3 = select(container)
      .append('svg')
      //.attr('width', 200)
      //.attr('height', 20)
      .attr("viewBox", "0 0 " + widthLegend + " " + heightLegend)
      .attr("preserveAspectRatio", "xMidYMid meet")
      .append('g')
      .attr('transform', `translate(${width / 4 + 12}, 10)`)
      .attr('text-anchor', 'start')
      .style('font-size', '14px');

    group3.append('circle')
      .attr('cx', 0)
      .attr('cy', 0)
      .attr('r', 8)
      .attr('fill', '#6F2DA8');

    group3.append('text')
      .attr('x', 16)
      .attr('y', 5)
      .text('Woman');
  });

  let isVisible = false;

  $: if (index === 2) {
    isVisible = true;
  } else {
    isVisible = false;
  }

</script>

<div class="sex" class:visible={isVisible} bind:this={container}>
  <h1>Single Mothers</h1>
</div>

<style>
  .sex {
    width: 100%;
    height: 100vh;
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }

  .sex.visible {
    opacity: 1;
    visibility: visible;
  }

  h1 {
    color: purple;
  }

</style>