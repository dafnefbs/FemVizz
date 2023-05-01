<!-- ConditionalText.svelte -->
<script>
    export let progress = 0;
    export let minProgress = 0;
    export let maxProgress = 1;
    export let text = "";
    export let textColor = "black"; // Add this line for textColor
    export let fontSize = "20px"; // Add this line for fontSize
    export let containerWidth = "auto"; // Add this line for containerWidth
    export let isBold = true; 
  </script>
  
  <style>
    .conditional-text {
      font-family: 'Times New Roman', Times, serif; /* Change the font-family as desired */
      width: 100%;
    }
  </style>
  

  {#if progress >= minProgress && progress <= maxProgress}
  <div
    style="width: {containerWidth}; font-weight: {isBold ? 'bold' : 'normal'};" 
  >
    <p
      class="conditional-text"
      style="font-size: {fontSize}; color: {textColor};"
    >
      {text}
    </p>
  </div>
{/if}
  