<script>

import Scroller from "@sveltejs/svelte-scroller";
import Title from "./Title.svelte";
import BarChart from './Chart.svelte';
import PropertyType from './propertyType.svelte';
import PropertyTypesm from './propertyTypesm.svelte';
import PropertyTypebp from './propertyTypebp.svelte';
import Sexownerbp from './sexownerbp.svelte';
import Sexownersm from './sexownersm.svelte';
import DensityPlot from "./DensityPlot.svelte";
import StaticCircle from "./StaticCircle.svelte";
import { fly } from 'svelte/transition';
import SideBySideText from './SideBySideText.svelte';
import ExpandingCircle from "./ExpandingCircles.svelte";
import ShrinkingCircle from './ShrinkingCircles.svelte';
import ConditionalText from "./ConditionalText.svelte";
// import BasicNeedsSm from "./BasicNeedsSM.svelte";
// import BasicNeedsBip from "./BasicNeedsBIP.svelte";
// import HousingSm from "./HousingSM.svelte";
// import HousingBip from "./HousingBIP.svelte";
// import BusinessSm from "./BusinessSM.svelte";
// import BusinessBip from "./BusinessBIP.svelte";
import { fade } from 'svelte/transition';
import BoxPlotWrapper from "./BoxPlotWrapper.svelte";
import Intermediary from "./Intermediary.svelte";
// import FoodCompare from "./FoodCompare.svelte";
// import HealthCompare from "./HealthCompare.svelte";
// import ClothesCompare from "./ClothesCompare.svelte";
// import ConstructionCompare from "./ConstructionCompare.svelte";
// import RentalCompare from "./RentalCompare.svelte";
// import PurchaseCompare from "./PurchaseCompare.svelte";
import BusinessCompare from "./BusinessCompare.svelte";
import BasicNeedsCompare from "./BasicNeedsCompare.svelte";
import HousingCompare from "./HousingCompare.svelte";
import Chart from "./Chart.svelte";
import Motivation from "./Motivation.svelte";

//import Comp from './HTMLComponent.svelte';


const data1 = [
  { label: 'Item 1', value: 85 },
    { label: 'Item 2', value: 31 },
    { label: 'Item 3', value: 17 },
    { label: 'Item 4', value: 25 },
    { label: 'Item 5', value: 19 },
];

const data2 = [
  { label: 'Item 1', value: 85 },
    { label: 'Item 2', value: 33 },
    { label: 'Item 3', value: 20 },
    { label: 'Item 4', value: 23 },
    { label: 'Item 5', value: 15 },
];

const data3 = [
  { label: 'Item 1', value: 15 },

];

const data4 = [
  { label: 'Item 1', value: 8 },

];


let chartWidth = 500;

let container;

let isVisible = false;
let isVisible7 = false; //for background picture of remittances
let isVisible8 = false; //for background picture of caravan smuggler
let isVisible3 = false; //for background picture of basic needs
let isVisible4 = false; //for background picture of housing
let isVisible5 = false; //for background picture of business
let isVisible1 = false; 
let isVisible2 = false;


$: {
  if (index === 0) {
    isVisible = true;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  } else if (index === 8) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = true;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  } else if (index === 9) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = true;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  } else if (index === 10) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = true;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  } else if (index === 3) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = true;
    isVisible4 = false;
    isVisible5 = false;
  }else if (index === 4) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = true;
    isVisible5 = false;
  }else if (index === 5) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = true;
  } else if (index === 1) {
    isVisible = false;
    isVisible1 = true;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  }else if (index === 2) {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = true;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  }
  else {
    isVisible = false;
    isVisible1 = false;
    isVisible2 = false;
    isVisible7 = false;
    isVisible8 = false;
    isVisible3 = false;
    isVisible4 = false;
    isVisible5 = false;
  }
}



import { geoMercator } from "d3-geo";
  


let count, index, offset, progress;
let width, height;

let geoJsonToFit = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [1, 0],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [0, 1],
        },
      },
    ],
  };

  $: projection = geoMercator().fitSize([width, height], geoJsonToFit);


</script>

<style>
  .background {
    width: 100%;
    height: 100vh;
    position: relative;
    /*outline: purple 3px;*/
    
  }

  .foreground {
    width: 50%;
    margin: 0 auto;
    height: auto;
    position: relative;
    /*outline: red solid 3px;*/
  }

  .progress-bars {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background: purple;
    /*visibility: visible;  */
  }

  section {
    height: 70vh;
    background-color: rgba(0, 0, 0, 0.01); 
    /* color: white; */
    /*outline: magenta solid 3px;*/
    text-align: center;
    max-width: 750px; /* adjust at will */
    color: black;
    padding: 1em;
    margin: 0 0 0 0;
  }

  /* sectionBasicNeeds {
    height: 180vh;
    background-color: rgba(0, 0, 0, 0.01); 
    background-image: url('./src/components/img/Food.png'); 
    background-size: cover; 
    background-repeat: no-repeat; 
    background-position: center center; 
    text-align: center;
    max-width: 750px; 
    color: black;
    padding: 1em;
    margin: 0 0 0 0;
  } */
  
  /* sectionHousing {
  height: 180vh;
  background-color: rgba(0, 0, 0, 0.01);
  background-image: url('./src/components/img/Housing.jpeg'); 
  background-size: cover; 
  background-repeat: no-repeat; 
  background-position: center center; 
  text-align: center;
  color: black;
  padding: 1em;
  margin: 0 0 0 0;
} */
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
        margin-top: 7em;
        margin-bottom: 1em; 
        opacity:0;
        visibility:hidden;
        transition: opacity 2s, visibility 2s;
        font-style: italic;       
  }

  h3.visible1 {
    opacity:1;
    visibility:visible;
  }

  h4 {
    text-align: center;
    font-size: 2em;
    color: gray;
    font-style: italic;
  }

  h5 {
    text-align: center;
    font-size: 1.5em;
    color: gray;
    font-style: italic;
  }

  .text {
    visibility: hidden;
    margin-top: 5em;
  }
  .text2 {
    visibility: hidden;
    margin-top: 2em;
  }
  .text.visible2 {
    visibility: visible;
  }
  .text2.visible2 {
    visibility: visible;
  }

.image {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    opacity: 1;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }

  .image.visible {
    opacity: 0.2;
    visibility: visible;
    background-image: url('./src/components/img/mujerencampo.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

  }
  .image1 {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    opacity: 1;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }
  
.image1.visible1 {
    opacity: 0.2;
    visibility: visible;
    background-image: url('./src/components/img/housing_est.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
  .image2 {
    width: 100%;
    height: 100vh; /* check problem when setting width */
    position: absolute;
    opacity: 1;
    visibility: hidden;
    transition: opacity 2s, visibility 2s;
  }
  
.image2.visible2 {
    opacity: 0.2;
    visibility: visible;
    background-image: url('./src/components/img/housing_sm.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible7 {
    opacity: 0.1;
    visibility: visible;
    background-image: url('./src/components/img/budgetspending.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible8 {
    opacity: 0.1;
    visibility: visible;
    background-image: url('./src/components/img/caravan.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible3 {
    opacity: 0.1;
    visibility: visible;
    background-image: url('./src/components/img/Food.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible4 {
    opacity: 0.1;
    visibility: visible;
    background-image: url('./src/components/img/Housing.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .image.visible5 {
    opacity: 0.1;
    visibility: visible;
    background-image: url('./src/components/img/Business.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .propertyType1-container {
  position: relative;
  z-index: 1;
  margin-bottom: -500px;
}

.propertyType2-container{
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0px;
}

.propertyTypebp {
  width: 300px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 0px;
  margin-top: 0px;
}

.propertyTypesm {
  width: 300px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 0px;
  margin-top: 0px;
}

.sexowners-container {
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
}

.Sexownerbp {
  width: 500px;
  height: 100px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 150px;
  margin-top: 50px;
}

.Sexownersm {
  width: 500px;
  height: 100px;
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 150px;
  margin-top: 50px;
}

.Circles-container-equalsize{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin-top: 20px;
  gap: 460px; 
}

.Circles-container-animated {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin-top: 20px;
  gap: 460px; /* Add this line to create space between the circles */
}

/* .Circle{
  flex-grow: 1; 
  max-width: 30%; 
  background-color: var(--color-bg);
  box-shadow: 0 0 4px var(--color-shadow);
  padding: 20px;
  margin-top: 1px;
  margin-left: 10px; 
  margin-right: 10px; 
} */

.text-columns {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 50px;
}

/* .Boxplots-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 150px;
  margin-left: 40px;
  margin-right: 40px;
  height:auto;
  overflow:visible;
  gap: 250px;
} */


</style>

<Scroller
  top={0.0}
  bottom={1}
  threshold={0.5}
  bind:count
  bind:index
  bind:offset
  bind:progress
>

  <div 
  class="background" 
  slot="background"
  bind:clientWidth={width}
  bind:clientHeight={height}>

  <div class="image" class:visible={isVisible} />
  <div class="image" class:visible7={isVisible7} />
  <div class="image" class:visible8={isVisible8} />
  <div class="image" class:visible3={isVisible3} />
  <div class="image" class:visible4={isVisible4} />
  <div class="image" class:visible5={isVisible5} />
  <div class="image1" class:visible1={isVisible1} /> <!--background image for section 1-->
  <div class="image2" class:visible2={isVisible2} /> <!--background image for section 2-->

  <div class="sexowners-container">
    <div class="Sexownerbp">
      <Sexownerbp {index} />
    </div>

  <div class="text">
    <h5 class="text2" class:visible2={isVisible2} >Click to see the proportion of property ownership by sex.</h5>
    <h4 class="text" class:visible2={isVisible2} >Even in single mother households, 18% of property owners are men</h4>
  </div>

  <div class="Sexownersm">
    <Sexownersm {index} />
  </div>
  </div>

  <!-- <div class="progress-bars">
    <p>current section: <strong>{index + 1}/{count}</strong></p>
    <progress value={count ? (index + 1) / count : 0} />

    <p>offset in current section</p>
    <progress value={offset || 0} />

    <p>total progress</p>
    <progress value={progress || 0} />
  </div> -->

  <!-- <section>
    <div class="Boxplots-container">
      <BoxPlotWrapper {progress} startProgress={0.28} endProgress={0.34}>
        <BasicNeedsBip />
      </BoxPlotWrapper>
      <BoxPlotWrapper {progress} startProgress={0.28} endProgress={0.34}>
        <BasicNeedsSm />
      </BoxPlotWrapper>
    </div>
  </section>

<section>
    <div class="Boxplots-container">
      <BoxPlotWrapper {progress} startProgress={0.35} endProgress={0.4}>
        <HousingBip />
      </BoxPlotWrapper>
      <BoxPlotWrapper {progress} startProgress={0.35} endProgress={0.4}>
        <HousingSm />
      </BoxPlotWrapper>
    </div>
  </section>

<section>
    <div class="Boxplots-container">
      <BoxPlotWrapper {progress} startProgress={0.43} endProgress={0.5}>
        <BusinessBip />
      </BoxPlotWrapper>
      <BoxPlotWrapper {progress} startProgress={0.43} endProgress={0.5}>
        <BusinessSm />
      </BoxPlotWrapper>
    </div>
  </section> -->


  <section>
    <div class="Circles-container-equalsize">
      {#if progress >= 0.79 && progress <= 0.82}
        <StaticCircle circleColor="rgba(60, 60, 60, 0.5)" circleRadius="50" text="" />
      {/if}
      {#if progress >= 0.79 && progress <= 0.82}
      <StaticCircle circleColor="rgba(128, 0, 255, 0.5)" circleRadius="50" text="" />
      {/if}
    </div>

    <div class="Circles-container-animated">
      <div>
        {#if progress && progress >= 0.82 && progress <= 0.93}
          <ShrinkingCircle progress={progress - 0.82} initialRadius={50} circleColor="rgba(60, 60, 60, 0.5)" />
        {/if}
      </div>
      <div>
        {#if progress && progress >= 0.82 && progress <= 0.93}
          <ExpandingCircle progress={progress - 0.82} initialRadius={50} circleColor="rgba(128, 0, 255, 0.5)" />
        {/if}
      </div>
    </div>

  </section>

    <div >
      <progress class="progress-bars" value={progress || 0} />
    </div>

  </div>

  <div class="foreground" slot="foreground">

    
    <section>
    <Title />
    
    </section>
    
  
    <section>

    <div class="propertyType1-container">
      <PropertyType {index} />
    </div>
 
    <div class="propertyType2-container">
      <div class="propertyTypebp">
        <PropertyTypebp {index} />
      </div>

      <h3 class="h3" class:visible1={isVisible1}>Single mother households are more likely to rent than own</h3>

      <div class="propertyTypesm">
        <PropertyTypesm {index} />
        </div>
      </div> 

    </section>
    
    <section>
   
    </section>



    <section>
      <h2>Why is that? Are they financially different?</h2>
      <h2>Let's look into how they spend their remittances for example.</h2>
      <BasicNeedsCompare />
      <!-- <ConditionalText progress="{progress}" minProgress="0.45" maxProgress="0.5" textColor='black' 
      text="Although biparental households and single mother households spend similar fraction of their remittances on basic needs," /> -->
      <h2>Biparental households and single mother households spend similar fraction of their remittances on basic needs</h2>
    </section>

    <section>
      <h2>However, in terms of housing, they become different</h2>
      <h2>Biparental families are able to spend more in constructing or purchasing their own housing</h2>
      <HousingCompare />
      <!-- <ConditionalText progress="{progress}" minProgress="0.45" maxProgress="0.5" textColor='black' 
      text="Although biparental households and single mother households spend similar fraction of their remittances on basic needs," /> -->
      <h2>While single mothers need to rent</h2>
      </section>

    <section>
      <h2>Biparental families are also able to spend more on business</h2>
      <h2>They can accumulate more capital for basic needs, housing, or even migration</h2>
      <BusinessCompare />
      <!-- <ConditionalText progress="{progress}" minProgress="0.45" maxProgress="0.5" textColor='black' 
      text="Although biparental households and single mother households spend similar fraction of their remittances on basic needs," /> -->
      <h2>Single mothers are unable to do that, leading to a viscious cycle.</h2>
    </section>

    
    
    <section>
    <Chart data1={data1} data2={data2} data3={data3} data4={data4} progress={progress*1.6}/>  
    </section>


    <section>
    <Motivation/>   
    </section>

    <section>
      <h2>Cost of migration versus awareness </h2>
      <h2>For those who are aware of the migration cost beforehand, </h2>
      <div class="text-columns">
        <ConditionalText progress="{progress}" minProgress="0.79" maxProgress="0.86" textColor='black' text="The average cost is $2894" />
        <ConditionalText progress="{progress}" minProgress="0.79" maxProgress="0.86" textColor='black' fontSize='22px' containerWidth="50%" text="Biparental hosueholds and sinlge mother households spend similar amount of money for migration" />
        <ConditionalText progress="{progress}" minProgress="0.79" maxProgress="0.86" textColor='purple' text="The average cost is $3244" />
      </div>


      <div class="text-columns">
      <ConditionalText progress="{progress}" minProgress="0.78" maxProgress="0.86" textColor='black' text=" " />
      <ConditionalText progress="{progress}" minProgress="0.82" maxProgress="0.86" textColor='black' fontSize='22px' containerWidth="50%" text="What if they are unware of the cost?" />
      <ConditionalText progress="{progress}" minProgress="0.78" maxProgress="0.86" textColor='purple' text=" " />
      </div>
    </section>

    <section>
      <h2>Discrepancy emerges</h2>
      <div class="text-columns">
        <ConditionalText progress="{progress}" minProgress="0.90" maxProgress="0.96" textColor='black' text="The average cost decreases to $2700" />
        <ConditionalText progress="{progress}" minProgress="0.90" maxProgress="0.96" textColor='black' fontSize='22px' containerWidth="50%" text="Single mothers spend more" />
        <ConditionalText progress="{progress}" minProgress="0.90" maxProgress="0.96" textColor='purple' text="The average cost increases to $8260" />
      </div>
      
    </section>


    <section>
      <h2>Cost of Knowledge: Single mothers spend more on intemediaries</h2>
      <Intermediary />
    </section>

  
  </div>

</Scroller>

