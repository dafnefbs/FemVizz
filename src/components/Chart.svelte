<script>
  export let data1;
  export let data2;
  export let data3;
  export let data4;
  export let progress = 0;
</script>

<h3>How does migration fit into this narrative?</h3>
<h2>The Top5 reasons for these families to migrate are...</h2> 
<br>
<br>


<div class="row">
  <div class="col-md-5" style="float: left; width: 40%; justify-content: flex-end;">
    <div class="chart_bp">
      {#each data1 as item}
        <div class="bar-container" style="width: {item.value + 50}px; justify-content: flex-end;">
          <div class="bar_bp" style="width: {progress *item.value}px; height: 40px;"></div>
          <div class="label_bp">{item.value}%</div>
        </div>
      {/each}
    </div>
  </div>

  <div class="col-md-2" style="display: inline-block; width: 20%;">
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"/> 
    <p>Item 1</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"/> 
    <p>Item 2</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"/> 
    <p>Item 3</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"/> 
    <p>Item 4</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"/> 
    <p>Item 5</p>
  </div>


  <div class="col-md-5" style="float: right; width: 40%;">
    <div class="chart_sm">
      {#each data2 as item}
        <div class="bar-container" style="width: {item.value + 50}px">
          <div class="bar_sm" style="width: {progress*item.value}px; height: 40px;"></div>
          <div class="label_sm">{item.value}%</div>
        </div>
      {/each}
    </div>
  </div>
</div>


<div class="container">
<h3 >The key differences in reasons to stay are related to...</h3>

<div class="row">
  <div class="col-md-5" style="float: left; width: 40%; justify-content: flex-end;">
    <div class="chart_bp">
      {#each data3 as item}
        <div class="bar-container" style="width: {item.value + 50}px; justify-content: flex-end;">
          <div class="bar_bp" style="width: {progress * item.value}px; height: 40px;"></div>
          <div class="label_bp">{item.value}%</div>
        </div>
      {/each}
    </div>
  </div>

  <div class="col-md-2" style="display: inline-block; width: 20%;">
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"/> 
    <p>Item 1</p>
  </div>

  <div class="col-md-5" style="float: right; width: 40%;">
    <div class="chart_sm">
      {#each data4 as item}
        <div class="bar-container" style="width: {item.value + 50}px">
          <div class="bar_sm" style="width: {progress * item.value}px; height: 40px;"></div>
          <div class="label_sm">{item.value}%</div>
        </div>
      {/each}
    </div>
  </div>
</div>
</div>


<style>
  .chart_sm {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    white-space: nowrap;
    position: relative;
    
  }

  .chart_bp {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    white-space: nowrap;
    align-items: end;
    
  }

  .bar_sm {
    height: 100%;
    background-color: rgba(128,0,128,0.4);
    border: 2px solid rgba(128,0,128, 1);
    margin-right: 10px;
    margin-bottom: 40px;
    position: relative;
  }

  .bar_bp {
    height: 100%;
    background-color: rgba(128, 128, 128,0.4);
    border: 2px solid rgba(128, 128, 128, 1);
    margin-left: 10px;
    margin-right: 0px;
    margin-bottom: 40px;
    position: relative;
    align-items: flex-end;
  
  }

  .label_sm {
    position: absolute;
    left: calc(70%);
    top: 25%;
    transform: translateY(-50%);
    color: purple;
  }

  .label_bp {
    position: absolute;
    right: calc(70%);
    top: 25%;
    transform: translateY(-50%);
    color: gray;
  }

  .bar-container {
    display: flex;
    align-items: center;
    position: relative;
  }

  .container {
  background-color: #f2f2f2;
  padding: 20px;
  border: 4px dashed #ccc;
  font-size: 16px;
  color: #333;
  margin-top: 3em;
  }

  h2 {
        text-align: center;
        font-size: 1.5em;
        color: purple;
        margin-top: 0.1em;
        margin-bottom: 0.3em;        
  }

  h3 {
        text-align: center;
        font-size: 1em;
        color: gray;
        margin-top: 1em;
        margin-bottom: 1em; 
        font-style: italic;       
  }

  p {
        text-align: center;
        font-size: 0.8em;
        color: gray;
        margin-top: 0em;
        margin-bottom: 0em; 
        font-style: italic;
        
  
  }
</style>