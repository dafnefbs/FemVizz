<script>
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    let ref;
  
    // Import any additional D3 modules required for the density plot
    let margin = {top: 80, right: 30, bottom: 50, left: 110};
    let width = 460 - margin.left - margin.right;
    let height = 400 - margin.top - margin.bottom;

    onMount(async() => {
    // Add your D3.js code for the density plot here
    // Make sure to select an appropriate DOM element for your plot, e.g., using a ref
    // set the dimensions and margins of the graph
    var margin = {top: 80, right: 30, bottom: 50, left:110},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;
    
    // append the svg object to the body of the page
    var svg = d3
      .select(ref)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);
    
    var data = [
        { type: "Single Mother", value: 100 },
        { type: "Single Mother", value: 100},
        { type: "Single Mother", value: 100 },
        { type: "Single Mother", value: 100 },
        { type: "Single Mother", value: 100 },
        { type: "Single Mother", value: 100},
        { type: "Single Mother", value: 95 },
        { type: "Single Mother", value: 90 },
        { type: "Single Mother", value: 90 },
        { type: "Single Mother", value: 90},
        { type: "Single Mother", value: 30 },
        { type: "Single Mother", value: 30 },
        { type: "Single Mother", value: 20 },
        { type: "Single Mother", value: 20},
        { type: "Single Mother", value: 20},
        { type: "Single Mother", value: 10 },
        { type: "Single Mother", value: 10 },
        { type: "Single Mother", value: 6 },
        { type: "Single Mother", value: 5},
        { type: "Single Mother", value: 0 },
        { type: "Single Mother", value: 0 },
        { type: "Single Mother", value: 0 },
        { type: "Single Mother", value: 0},
        { type: "Single Mother", value: 0},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 100},
        { type: "Biparental Family", value: 80},
        { type: "Biparental Family", value: 50},
        { type: "Biparental Family", value: 50},
        { type: "Biparental Family", value: 50},
        { type: "Biparental Family", value: 50},
        { type: "Biparental Family", value: 50},
        { type: "Biparental Family", value: 40},
        { type: "Biparental Family", value: 40},
        { type: "Biparental Family", value: 40},
        { type: "Biparental Family", value: 35},
        { type: "Biparental Family", value: 30},
        { type: "Biparental Family", value: 30},
        { type: "Biparental Family", value: 25},
        { type: "Biparental Family", value: 25},
        { type: "Biparental Family", value: 20},
        { type: "Biparental Family", value: 20},
        { type: "Biparental Family", value: 20},
        { type: "Biparental Family", value: 20},
        { type: "Biparental Family", value: 15},
        { type: "Biparental Family", value: 15},
        { type: "Biparental Family", value: 15},
        { type: "Biparental Family", value: 15},
        { type: "Biparental Family", value: 15},
        { type: "Biparental Family", value: 15},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 10},
        { type: "Biparental Family", value: 7},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 5},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0},
        { type: "Biparental Family", value: 0}
    ];
    

    // add the x Axis
    var x = d3.scaleLinear()
        .domain([-20,120])
        .range([0, width]);
    svg.append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0," + height + ")")
        //.call(d3.axisBottom(x));
        .call(d3.axisBottom(x).tickValues([0,25, 50, 75, 100]).tickSize(-height) )
        .select(".domain").remove();
    // Add X axis label:
    svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", width)
      .attr("y", height + 40)
      .text("Fraction (%)");
 
    // Compute kernel density estimation
    var kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(60))
    var density1 =  kde( data
        .filter( function(d){return d.type === "Single Mother"} )
        .map(function(d){  return d.value; }) )
    var density2 =  kde( data
        .filter( function(d){return d.type === "Biparental Family"} )
        .map(function(d){  return d.value; }) )
    
    // Compute the maximum density value
    var maxDensity = Math.max(
    ...density1.map(d => d[1]),
    ...density2.map(d => d[1])
    );
    
    // Update the y-axis domain to go from 0 to maxDensity
    var y = d3.scaleLinear()
                .range([height, 0])
                .domain([0, maxDensity]);
    svg.append("g")
        .call(d3.axisLeft(y));

    // Plot the area
    svg.append("path")
        .attr("class", "mypath")
        .datum(density1)
        .attr("fill", "purple")
        .attr("opacity", ".6")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("stroke-linejoin", "round")
        .attr("d",  d3.line()
            .curve(d3.curveBasis)
            .x(function(d) { return x(d[0]); })
            .y(function(d) { return y(d[1]); })
        );

    // Plot the area
    svg.append("path")
        .attr("class", "mypath")
        .datum(density2)
        .attr("fill", "grey")
        .attr("opacity", ".6")
        .attr("stroke", "#000")
        .attr("stroke-width", 1)
        .attr("stroke-linejoin", "round")
        .attr("d",  d3.line()
            .curve(d3.curveBasis)
            .x(function(d) { return x(d[0]); })
            .y(function(d) { return y(d[1]); })
        );

    // Handmade legend
    // svg.append("circle").attr("cx",300).attr("cy",30).attr("r", 6).style("fill", "purple")
    // svg.append("circle").attr("cx",300).attr("cy",60).attr("r", 6).style("fill", "grey")
    // svg.append("text").attr("x", 320).attr("y", 30).text("Single Mother").style("font-size", "15px").attr("alignment-baseline","middle")
    // svg.append("text").attr("x", 320).attr("y", 60).text("Biparental Family").style("font-size", "15px").attr("alignment-baseline","middle")

    // Function to compute density
    function kernelDensityEstimator(kernel, X) {
    return function(V) {
        return X.map(function(x) {
        return [x, d3.mean(V, function(v) { return kernel(x - v); })];
        });
    };
    }
    function kernelEpanechnikov(k) {
    return function(v) {
        return 1 / Math.sqrt(2 * Math.PI) * Math.exp(-0.5 * Math.pow(v / k, 2));
    };
    }

});
</script>

<svg bind:this={ref} width="{width + margin.left + margin.right}" height="{height + margin.top + margin.bottom}"></svg>
