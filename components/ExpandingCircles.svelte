<script>
  export let progress = 0;
  export let initialRadius = 50;
  export let circleColor = "purple";
</script>

<style>
  .circle-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .circle {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="circle-container">
  <div
    class="circle"
    style="
      width: {initialRadius * 2 + progress * 500}px;
      height: {initialRadius * 2 + progress * 500}px;
      background-color: {circleColor};
      border-radius: 50%;
    "
  ></div>
</div>
