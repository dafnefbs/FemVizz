<script>

  //import backgroundImage from './src/components/img/mujerencampo.png';
  export let index;

  let container;

</script>



<h1>A Different Journey</h1>
<h2>Migration through the lens of a single mother</h2>
<h3>How different is the migration experience for Central Americans depending on their family type?</h3>     

<br>
<br>
<br>

<div class="row">
  <div class="col-6" style="float: left; width: 50%;">
    <h2>Biparental Family</h2>
    <div class="image-container" style="float: center">
      <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 50%;" title="This is a tooltip."/> 
      <div class="overlay"> 5 people family group (on avg.). Both parents are present.</div>
    </div>
  </div>
  <div class="col-6" style="float: right; width: 50%;">
    <h2>Single Mothers</h2>
    <div class="image-container">
      <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 50%;" title="This is a tooltip."/> 
      <div class="overlay">4 people family group (on avg.). Only the mother is present, does not seek family reunification.</div>
    </div>
  </div>
</div>

<style>

  h1 {
        text-align: center;
        font-size: 3em;
        margin-top: 1em;
        margin-bottom: 0.1em;
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
        margin-top: 3em;
        margin-bottom: 1em; 
        font-style: italic;       
  }

.image-container {
  position: relative;
  width: 300px;
  height: 100px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding-top: 80px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s ease-in-out;
}

.image-container:hover .overlay {
  visibility: visible;
  opacity: 1;
}
</style>





