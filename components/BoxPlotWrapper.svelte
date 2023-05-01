<!-- BoxplotWrapper.svelte -->
<script>
    import { fade } from "svelte/transition";
    export let progress = 0;
    export let startProgress;
    export let endProgress;
    let showBoxplot = false;
  
    $: {
      if (progress && progress >= startProgress && progress <= endProgress) {
        showBoxplot = true;
      } else {
        showBoxplot = false;
      }
    }
  </script>

{#if showBoxplot}
    <div transition:fade="{{duration: 500}}">
      <slot></slot>
    </div>
{/if}
  
