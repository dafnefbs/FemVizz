<script>
    export let circleColor = "red";
    export let circleRadius = 50;
    export let text = "Average price is 500"; // Add this line to create a new prop for the text
  </script>
  
  <style>
    .circle-container {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    /* .circle-text {
      font-size: 18px;
      font-weight: bold;
      margin-top: 10px;
    } */
  </style>
  
  <div class="circle-container">
    <svg width="{2 * circleRadius}" height="{2 * circleRadius}">
      <circle
        cx="{circleRadius}"
        cy="{circleRadius}"
        r="{circleRadius}"
        fill="{circleColor}"
      />
    </svg>
    <!-- <div class="circle-text">
      {text}
    </div> -->
  </div>
  