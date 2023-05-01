<script>
    import { onMount } from 'svelte';
    
    export let data;
  
    let chartContainer;
  
    function animateBars() {
      const bars = chartContainer.querySelectorAll(".bar");
      bars.forEach(bar => bar.classList.add(".grow"));
    }
  
    onMount(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateBars();
            observer.unobserve(chartContainer);
          }
        });
      }, { threshold: 0 });
  
      observer.observe(chartContainer);
    });
  </script>
  
  <div class="chart" bind:this={chartContainer}>
    {#each data as item}
      <div class="bar-container">
        <div class="bar" style="width: {item.value}px; height: 40px;"></div>
        <div class="label">{item.label}</div>
      </div>
    {/each}
  </div>
  
  <style>
    .chart {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      white-space: nowrap;
      position: relative;
      height: 400px;
    }
  
    .bar {
      height: 100%;
      background-color: purple;
      margin-right: 10px;
      margin-bottom: 40px;
      position: relative;
      transform-origin: left;
      transform: scaleX(0);
      
    }
  
    .grow {
      animation: grow 0.5s forwards;
    }
  
    @keyframes grow {
      to {
        transform: scaleX(1);
      }
    }
  
    .label {
      position: absolute;
      right: calc(100% + 5px);
      top: 50%;
      transform: translateY(-50%);
      padding-right: 5px;
      color: purple;
    }
  </style>