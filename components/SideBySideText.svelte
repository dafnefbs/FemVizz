<script>
    export let text1 = "";
    export let text2 = "";
    export let translateY = 0;
  </script>
  
  <style>
    .text-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 20px;
      transform: translateY(var(--translateY));
    }
  
    .text-box {
      width: 45%;
      text-align: center;
    }
  </style>
  
  <div class="text-container" style="--translateY: {translateY}px">
    <div class="text-box">
      <p>{text1}</p>
    </div>
    <div class="text-box">
      <p>{text2}</p>
    </div>
  </div>

  
  
  
  