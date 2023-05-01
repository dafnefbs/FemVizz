import { c as create_ssr_component, d as add_attribute, e as escape, f as each, o as onDestroy, h as spread, i as escape_object, v as validate_component } from "../../chunks/index.js";
import "d3";
import { Chart as Chart$2, BarController, Title as Title$1, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { geoMercator } from "d3-geo";
const Scroller_svelte_svelte_type_style_lang = "";
const css$d = {
  code: "svelte-scroller-outer.svelte-xdbafy{display:block;position:relative}svelte-scroller-background.svelte-xdbafy{display:block;position:relative;width:100%}svelte-scroller-foreground.svelte-xdbafy{display:block;position:relative;z-index:2}svelte-scroller-foreground.svelte-xdbafy::after{content:' ';display:block;clear:both}svelte-scroller-background-container.svelte-xdbafy{display:block;position:absolute;width:100%;max-width:100%;pointer-events:none;will-change:transform}",
  map: null
};
const handlers = [];
if (typeof window !== "undefined") {
  const run_all = () => handlers.forEach((fn) => fn());
  window.addEventListener("scroll", run_all);
  window.addEventListener("resize", run_all);
}
if (typeof IntersectionObserver !== "undefined") {
  const map = /* @__PURE__ */ new Map();
  new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const update = map.get(entry.target);
        const index = handlers.indexOf(update);
        if (entry.isIntersecting) {
          if (index === -1)
            handlers.push(update);
        } else {
          update();
          if (index !== -1)
            handlers.splice(index, 1);
        }
      });
    },
    {
      rootMargin: "400px 0px"
      // TODO why 400?
    }
  );
}
const Scroller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  let widthStyle;
  let { top = 0 } = $$props;
  let { bottom = 1 } = $$props;
  let { threshold = 0.5 } = $$props;
  let { query = "section" } = $$props;
  let { parallax = false } = $$props;
  let { index = 0 } = $$props;
  let { count = 0 } = $$props;
  let { offset = 0 } = $$props;
  let { progress = 0 } = $$props;
  let { visible = false } = $$props;
  let outer;
  let foreground;
  let background;
  let offset_top = 0;
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bottom === void 0 && $$bindings.bottom && bottom !== void 0)
    $$bindings.bottom(bottom);
  if ($$props.threshold === void 0 && $$bindings.threshold && threshold !== void 0)
    $$bindings.threshold(threshold);
  if ($$props.query === void 0 && $$bindings.query && query !== void 0)
    $$bindings.query(query);
  if ($$props.parallax === void 0 && $$bindings.parallax && parallax !== void 0)
    $$bindings.parallax(parallax);
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.count === void 0 && $$bindings.count && count !== void 0)
    $$bindings.count(count);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  $$result.css.add(css$d);
  style = `
		position: ${"absolute"};
		top: 0;
		transform: translate(0, ${offset_top}px);
		z-index: ${1};
	`;
  widthStyle = "";
  return `

<svelte-scroller-outer class="svelte-xdbafy"${add_attribute("this", outer, 0)}><svelte-scroller-background-container class="background-container svelte-xdbafy" style="${escape(style, true) + escape(widthStyle, true)}"><svelte-scroller-background class="svelte-xdbafy"${add_attribute("this", background, 0)}>${slots.background ? slots.background({}) : ``}</svelte-scroller-background></svelte-scroller-background-container>

	<svelte-scroller-foreground class="svelte-xdbafy"${add_attribute("this", foreground, 0)}>${slots.foreground ? slots.foreground({}) : ``}</svelte-scroller-foreground>
</svelte-scroller-outer>`;
});
const Title_svelte_svelte_type_style_lang = "";
const css$c = {
  code: "h1.svelte-7ebweo.svelte-7ebweo{text-align:center;font-size:3em;margin-top:1em;margin-bottom:0.1em}h2.svelte-7ebweo.svelte-7ebweo{text-align:center;font-size:1.5em;color:purple;margin-top:0.1em;margin-bottom:0.3em}h3.svelte-7ebweo.svelte-7ebweo{text-align:center;font-size:1em;color:gray;margin-top:3em;margin-bottom:1em;font-style:italic}.image-container.svelte-7ebweo.svelte-7ebweo{position:relative;width:300px;height:100px}.overlay.svelte-7ebweo.svelte-7ebweo{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(255, 255, 255, 0.9);text-align:center;padding-top:80px;visibility:hidden;opacity:0;transition:visibility 0s, opacity 0.5s ease-in-out}.image-container.svelte-7ebweo:hover .overlay.svelte-7ebweo{visibility:visible;opacity:1}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$c);
  return `<h1 class="svelte-7ebweo">A Different Journey</h1>
<h2 class="svelte-7ebweo">Migration through the lens of a single mother</h2>
<h3 class="svelte-7ebweo">How different is the migration experience for Central Americans depending on their family type?</h3>     

<br>
<br>
<br>

<div class="row"><div class="col-6" style="float: left; width: 50%;"><h2 class="svelte-7ebweo">Biparental Family</h2>
    <div class="image-container svelte-7ebweo" style="float: center"><img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 50%;" title="This is a tooltip."> 
      <div class="overlay svelte-7ebweo">5 people family group (on avg.). Both parents are present.</div></div></div>
  <div class="col-6" style="float: right; width: 50%;"><h2 class="svelte-7ebweo">Single Mothers</h2>
    <div class="image-container svelte-7ebweo"><img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 50%;" title="This is a tooltip."> 
      <div class="overlay svelte-7ebweo">4 people family group (on avg.). Only the mother is present, does not seek family reunification.</div></div></div>
</div>`;
});
const Chart_svelte_svelte_type_style_lang = "";
const css$b = {
  code: ".chart_sm.svelte-73u4qk{display:flex;flex-direction:column;overflow-y:scroll;white-space:nowrap;position:relative}.chart_bp.svelte-73u4qk{display:flex;flex-direction:column;overflow-y:scroll;white-space:nowrap;align-items:end}.bar_sm.svelte-73u4qk{height:100%;background-color:rgba(128,0,128,0.4);border:2px solid rgba(128,0,128, 1);margin-right:10px;margin-bottom:40px;position:relative}.bar_bp.svelte-73u4qk{height:100%;background-color:rgba(128, 128, 128,0.4);border:2px solid rgba(128, 128, 128, 1);margin-left:10px;margin-right:0px;margin-bottom:40px;position:relative;align-items:flex-end}.label_sm.svelte-73u4qk{position:absolute;left:calc(70%);top:25%;transform:translateY(-50%);color:purple}.label_bp.svelte-73u4qk{position:absolute;right:calc(70%);top:25%;transform:translateY(-50%);color:gray}.bar-container.svelte-73u4qk{display:flex;align-items:center;position:relative}.container.svelte-73u4qk{background-color:#f2f2f2;padding:20px;border:4px dashed #ccc;font-size:16px;color:#333;margin-top:3em}h2.svelte-73u4qk{text-align:center;font-size:1.5em;color:purple;margin-top:0.1em;margin-bottom:0.3em}h3.svelte-73u4qk{text-align:center;font-size:1em;color:gray;margin-top:1em;margin-bottom:1em;font-style:italic}p.svelte-73u4qk{text-align:center;font-size:0.8em;color:gray;margin-top:0em;margin-bottom:0em;font-style:italic}",
  map: null
};
const Chart$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data1 } = $$props;
  let { data2 } = $$props;
  let { data3 } = $$props;
  let { data4 } = $$props;
  let { progress = 0 } = $$props;
  if ($$props.data1 === void 0 && $$bindings.data1 && data1 !== void 0)
    $$bindings.data1(data1);
  if ($$props.data2 === void 0 && $$bindings.data2 && data2 !== void 0)
    $$bindings.data2(data2);
  if ($$props.data3 === void 0 && $$bindings.data3 && data3 !== void 0)
    $$bindings.data3(data3);
  if ($$props.data4 === void 0 && $$bindings.data4 && data4 !== void 0)
    $$bindings.data4(data4);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  $$result.css.add(css$b);
  return `<h3 class="svelte-73u4qk">How does migration fit into this narrative?</h3>
<h2 class="svelte-73u4qk">The Top5 reasons for these families to migrate are...</h2> 
<br>
<br>


<div class="row"><div class="col-md-5" style="float: left; width: 40%; justify-content: flex-end;"><div class="chart_bp svelte-73u4qk">${each(data1, (item) => {
    return `<div class="bar-container svelte-73u4qk" style="${"width: " + escape(item.value + 50, true) + "px; justify-content: flex-end;"}"><div class="bar_bp svelte-73u4qk" style="${"width: " + escape(progress * item.value, true) + "px; height: 40px;"}"></div>
          <div class="label_bp svelte-73u4qk">${escape(item.value)}%</div>
        </div>`;
  })}</div></div>

  <div class="col-md-2" style="display: inline-block; width: 20%;"><img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"> 
    <p class="svelte-73u4qk">Item 1</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"> 
    <p class="svelte-73u4qk">Item 2</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"> 
    <p class="svelte-73u4qk">Item 3</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"> 
    <p class="svelte-73u4qk">Item 4</p>
    <br>
    <img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"> 
    <p class="svelte-73u4qk">Item 5</p></div>


  <div class="col-md-5" style="float: right; width: 40%;"><div class="chart_sm svelte-73u4qk">${each(data2, (item) => {
    return `<div class="bar-container svelte-73u4qk" style="${"width: " + escape(item.value + 50, true) + "px"}"><div class="bar_sm svelte-73u4qk" style="${"width: " + escape(progress * item.value, true) + "px; height: 40px;"}"></div>
          <div class="label_sm svelte-73u4qk">${escape(item.value)}%</div>
        </div>`;
  })}</div></div></div>


<div class="container svelte-73u4qk"><h3 class="svelte-73u4qk">The key differences in reasons to stay are related to...</h3>

<div class="row"><div class="col-md-5" style="float: left; width: 40%; justify-content: flex-end;"><div class="chart_bp svelte-73u4qk">${each(data3, (item) => {
    return `<div class="bar-container svelte-73u4qk" style="${"width: " + escape(item.value + 50, true) + "px; justify-content: flex-end;"}"><div class="bar_bp svelte-73u4qk" style="${"width: " + escape(progress * item.value, true) + "px; height: 40px;"}"></div>
          <div class="label_bp svelte-73u4qk">${escape(item.value)}%</div>
        </div>`;
  })}</div></div>

  <div class="col-md-2" style="display: inline-block; width: 20%;"><img src="./src/components/img/people-512.jpg" alt="hola1" style="width: 30%;"> 
    <p class="svelte-73u4qk">Item 1</p></div>

  <div class="col-md-5" style="float: right; width: 40%;"><div class="chart_sm svelte-73u4qk">${each(data4, (item) => {
    return `<div class="bar-container svelte-73u4qk" style="${"width: " + escape(item.value + 50, true) + "px"}"><div class="bar_sm svelte-73u4qk" style="${"width: " + escape(progress * item.value, true) + "px; height: 40px;"}"></div>
          <div class="label_sm svelte-73u4qk">${escape(item.value)}%</div>
        </div>`;
  })}</div></div></div>
</div>`;
});
const propertyType_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".house.svelte-ybp47n{width:100%;height:100vh;position:relative;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s}.house.visible.svelte-ybp47n{opacity:1;visibility:visible}h1.svelte-ybp47n{color:black}",
  map: null
};
const PropertyType = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$a);
  {
    if (index === 1) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `


<div class="${["house svelte-ybp47n", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}><h1 class="svelte-ybp47n">Both Family Types</h1>
</div>`;
});
const propertyTypesm_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".house.svelte-1ot6wxi{width:100%;height:100vh;position:relative;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s}.house.visible.svelte-1ot6wxi{opacity:1;visibility:visible}h1.svelte-1ot6wxi{color:purple}",
  map: null
};
const PropertyTypesm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$9);
  {
    if (index === 1) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `


<div class="${["house svelte-1ot6wxi", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}><h1 class="svelte-1ot6wxi">Single Mother</h1>
</div>`;
});
const propertyTypebp_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".house.svelte-12avpjh{width:100%;height:100vh;position:relative;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s}.house.visible.svelte-12avpjh{opacity:1;visibility:visible}h1.svelte-12avpjh{color:gray}",
  map: null
};
const PropertyTypebp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$8);
  {
    if (index === 1) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `


<div class="${["house svelte-12avpjh", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}><h1 class="svelte-12avpjh">Biparental Family</h1>
</div>`;
});
const sexownerbp_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".sex.svelte-1mfns71{width:100%;height:100vh;position:relative;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s}.sex.visible.svelte-1mfns71{opacity:1;visibility:visible}h1.svelte-1mfns71{color:gray}",
  map: null
};
const Sexownerbp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$7);
  {
    if (index === 2) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `


<div class="${["sex svelte-1mfns71", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}><h1 class="svelte-1mfns71">Biparental</h1>
</div>`;
});
const sexownersm_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".sex.svelte-1i8qoom{width:100%;height:100vh;position:relative;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s}.sex.visible.svelte-1i8qoom{opacity:1;visibility:visible}h1.svelte-1i8qoom{color:purple}",
  map: null
};
const Sexownersm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let container;
  let isVisible = false;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  $$result.css.add(css$6);
  {
    if (index === 2) {
      isVisible = true;
    } else {
      isVisible = false;
    }
  }
  return `


<div class="${["sex svelte-1i8qoom", isVisible ? "visible" : ""].join(" ").trim()}"${add_attribute("this", container, 0)}><h1 class="svelte-1i8qoom">Single Mothers</h1>
</div>`;
});
const StaticCircle_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".circle-container.svelte-jlrhac{display:inline-flex;flex-direction:column;align-items:center;justify-content:center}",
  map: null
};
const StaticCircle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { circleColor = "red" } = $$props;
  let { circleRadius = 50 } = $$props;
  let { text = "Average price is 500" } = $$props;
  if ($$props.circleColor === void 0 && $$bindings.circleColor && circleColor !== void 0)
    $$bindings.circleColor(circleColor);
  if ($$props.circleRadius === void 0 && $$bindings.circleRadius && circleRadius !== void 0)
    $$bindings.circleRadius(circleRadius);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css$5);
  return `<div class="circle-container svelte-jlrhac"><svg${add_attribute("width", 2 * circleRadius, 0)}${add_attribute("height", 2 * circleRadius, 0)}><circle${add_attribute("cx", circleRadius, 0)}${add_attribute("cy", circleRadius, 0)}${add_attribute("r", circleRadius, 0)}${add_attribute("fill", circleColor, 0)}></circle></svg>
    </div>`;
});
const SideBySideText_svelte_svelte_type_style_lang = "";
const ExpandingCircles_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".circle-container.svelte-7lhnw4{display:flex;justify-content:center;width:100%}.circle.svelte-7lhnw4{position:relative;display:flex;justify-content:center;align-items:center}",
  map: null
};
const ExpandingCircles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress = 0 } = $$props;
  let { initialRadius = 50 } = $$props;
  let { circleColor = "purple" } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.initialRadius === void 0 && $$bindings.initialRadius && initialRadius !== void 0)
    $$bindings.initialRadius(initialRadius);
  if ($$props.circleColor === void 0 && $$bindings.circleColor && circleColor !== void 0)
    $$bindings.circleColor(circleColor);
  $$result.css.add(css$4);
  return `<div class="circle-container svelte-7lhnw4"><div class="circle svelte-7lhnw4" style="${"width: " + escape(initialRadius * 2 + progress * 500, true) + "px; height: " + escape(initialRadius * 2 + progress * 500, true) + "px; background-color: " + escape(circleColor, true) + "; border-radius: 50%;"}"></div></div>`;
});
const ShrinkingCircles_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".circle-container.svelte-1np6yes{display:flex;justify-content:center;width:100%}.circle.svelte-1np6yes{position:relative;display:flex;justify-content:center;align-items:center}",
  map: null
};
const ShrinkingCircles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress = 0 } = $$props;
  let { initialRadius = 50 } = $$props;
  let { circleColor = "grey" } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.initialRadius === void 0 && $$bindings.initialRadius && initialRadius !== void 0)
    $$bindings.initialRadius(initialRadius);
  if ($$props.circleColor === void 0 && $$bindings.circleColor && circleColor !== void 0)
    $$bindings.circleColor(circleColor);
  $$result.css.add(css$3);
  return `<div class="circle-container svelte-1np6yes"><div class="circle svelte-1np6yes" style="${"width: " + escape(initialRadius * 2 - progress * 300, true) + "px; height: " + escape(initialRadius * 2 - progress * 300, true) + "px; background-color: " + escape(circleColor, true) + "; border-radius: 50%;"}"></div></div>`;
});
const ConditionalText_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".conditional-text.svelte-4h8z6k{font-family:'Times New Roman', Times, serif;width:100%}",
  map: null
};
const ConditionalText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress = 0 } = $$props;
  let { minProgress = 0 } = $$props;
  let { maxProgress = 1 } = $$props;
  let { text = "" } = $$props;
  let { textColor = "black" } = $$props;
  let { fontSize = "20px" } = $$props;
  let { containerWidth = "auto" } = $$props;
  let { isBold = true } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.minProgress === void 0 && $$bindings.minProgress && minProgress !== void 0)
    $$bindings.minProgress(minProgress);
  if ($$props.maxProgress === void 0 && $$bindings.maxProgress && maxProgress !== void 0)
    $$bindings.maxProgress(maxProgress);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.textColor === void 0 && $$bindings.textColor && textColor !== void 0)
    $$bindings.textColor(textColor);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0)
    $$bindings.containerWidth(containerWidth);
  if ($$props.isBold === void 0 && $$bindings.isBold && isBold !== void 0)
    $$bindings.isBold(isBold);
  $$result.css.add(css$2);
  return `

  
  
  

  ${progress >= minProgress && progress <= maxProgress ? `<div style="${"width: " + escape(containerWidth, true) + "; font-weight: " + escape(isBold ? "bold" : "normal", true) + ";"}"><p class="conditional-text svelte-4h8z6k" style="${"font-size: " + escape(fontSize, true) + "; color: " + escape(textColor, true) + ";"}">${escape(text)}</p></div>` : ``}`;
});
const Intermediary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myDiv;
  return `${$$result.head += `<!-- HEAD_svelte-1fayzoy_START --><script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"><\/script><!-- HEAD_svelte-1fayzoy_END -->`, ""}



<div${add_attribute("this", myDiv, 0)}></div>`;
});
const BusinessCompare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myDiv;
  return `${$$result.head += `<!-- HEAD_svelte-1fayzoy_START --><script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"><\/script><!-- HEAD_svelte-1fayzoy_END -->`, ""}



<div${add_attribute("this", myDiv, 0)}></div>`;
});
const BasicNeedsCompare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myDiv;
  return `${$$result.head += `<!-- HEAD_svelte-1fayzoy_START --><script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"><\/script><!-- HEAD_svelte-1fayzoy_END -->`, ""}



<div${add_attribute("this", myDiv, 0)}></div>`;
});
const HousingCompare = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let myDiv;
  return `${$$result.head += `<!-- HEAD_svelte-1fayzoy_START --><script src="https://cdn.plot.ly/plotly-latest.min.js" type="text/javascript"><\/script><!-- HEAD_svelte-1fayzoy_END -->`, ""}



<div${add_attribute("this", myDiv, 0)}></div>`;
});
const eventPrefix = /^on/;
const events = [];
Object.keys(globalThis).forEach((key) => {
  if (eventPrefix.test(key)) {
    events.push(key.replace(eventPrefix, ""));
  }
});
function useForwardEvents(getRef) {
  const destructors = [];
  onDestroy(() => {
    while (destructors.length) {
      destructors.pop()();
    }
  });
}
function clean(props) {
  let { data, type, options, plugins, children, $$scope, $$slots, ...rest } = props;
  return rest;
}
const Chart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { data = { datasets: [] } } = $$props;
  let { options = {} } = $$props;
  let { plugins = [] } = $$props;
  let { updateMode = void 0 } = $$props;
  let { chart = null } = $$props;
  let canvasRef;
  let props = clean($$props);
  onDestroy(() => {
    if (chart)
      chart.destroy();
    chart = null;
  });
  useForwardEvents();
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.updateMode === void 0 && $$bindings.updateMode && updateMode !== void 0)
    $$bindings.updateMode(updateMode);
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  return `<canvas${spread([escape_object(props)], {})}${add_attribute("this", canvasRef, 0)}></canvas>`;
});
const Bar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$2.register(BarController);
  let { chart = null } = $$props;
  let props;
  let baseChartRef;
  useForwardEvents();
  if ($$props.chart === void 0 && $$bindings.chart && chart !== void 0)
    $$bindings.chart(chart);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    props = $$props;
    $$rendered = `${validate_component(Chart, "Chart").$$render(
      $$result,
      Object.assign({}, { type: "bar" }, props, { this: baseChartRef }, { chart }),
      {
        this: ($$value) => {
          baseChartRef = $$value;
          $$settled = false;
        },
        chart: ($$value) => {
          chart = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Motivation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "h2.svelte-53bn4k{text-align:center;font-size:1.5em;color:purple;margin-top:0.1em;margin-bottom:0.3em}",
  map: null
};
const Motivation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  Chart$2.register(Title$1, Tooltip, Legend, ChartDataLabels);
  const data = {
    labels: [
      "Saving money",
      ["Contacting people in", "destination country"],
      "Asking for a loan",
      ["Hiring/contacting", "a coyote"],
      ["Prepare migration", "documents"]
    ],
    datasets: [
      {
        label: "Biparental Families",
        backgroundColor: "rgba(128, 128, 128, 0.4)",
        borderColor: "rgba(128, 128, 128, 1)",
        borderWidth: 2,
        data: [25, 10, 8, 2, 7]
      },
      {
        label: "Single Mother Families",
        backgroundColor: "rgba(128,0,128,0.4)",
        borderColor: "rgba(128,0,128, 1)",
        borderWidth: 2,
        data: [25, 15, 15, 7, 4]
      }
    ]
  };
  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "white",
        font: { weight: "bold" },
        formatter(value) {
          return value + "%";
        }
      }
    },
    responsive: true,
    animation: {
      x: { duration: 1e3, from: 0 },
      y: { duration: 8e3, from: 1e3 }
    },
    scales: { y: { display: false } },
    grid: { display: false }
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  $$result.css.add(css$1);
  return `<br>
<br>
<br>
<br>

<h2 class="svelte-53bn4k">And the preparation begins by...</h2> 
<br>
<br>


${validate_component(Bar, "Bar").$$render($$result, { data, options }, {}, {})}`;
});
const ScrollyTeller_svelte_svelte_type_style_lang = "";
const css = {
  code: ".background.svelte-1ey5oxa{width:100%;height:100vh;position:relative}.foreground.svelte-1ey5oxa{width:50%;margin:0 auto;height:auto;position:relative}.progress-bars.svelte-1ey5oxa{position:absolute;top:0;left:0;width:100%;height:7px;background:purple}section.svelte-1ey5oxa{height:70vh;background-color:rgba(0, 0, 0, 0.01);text-align:center;max-width:750px;color:black;padding:1em;margin:0 0 0 0}h2.svelte-1ey5oxa{text-align:center;font-size:1.5em;color:purple;margin-top:0.1em;margin-bottom:0.3em}h3.svelte-1ey5oxa{text-align:center;font-size:1em;color:gray;margin-top:7em;margin-bottom:1em;opacity:0;visibility:hidden;transition:opacity 2s, visibility 2s;font-style:italic}h3.visible1.svelte-1ey5oxa{opacity:1;visibility:visible}h4.svelte-1ey5oxa{text-align:center;font-size:2em;color:gray;font-style:italic}h5.svelte-1ey5oxa{text-align:center;font-size:1.5em;color:gray;font-style:italic}.text.svelte-1ey5oxa{visibility:hidden;margin-top:5em}.text2.svelte-1ey5oxa{visibility:hidden;margin-top:2em}.text.visible2.svelte-1ey5oxa{visibility:visible}.text2.visible2.svelte-1ey5oxa{visibility:visible}.image.svelte-1ey5oxa{width:100%;height:100vh;position:absolute;opacity:1;visibility:hidden;transition:opacity 2s, visibility 2s}.image.visible.svelte-1ey5oxa{opacity:0.2;visibility:visible;background-image:url('./src/components/img/mujerencampo.png');background-size:cover;background-repeat:no-repeat;background-position:center center}.image1.svelte-1ey5oxa{width:100%;height:100vh;position:absolute;opacity:1;visibility:hidden;transition:opacity 2s, visibility 2s}.image1.visible1.svelte-1ey5oxa{opacity:0.2;visibility:visible;background-image:url('./src/components/img/housing_est.jpeg');background-size:cover;background-repeat:no-repeat;background-position:center center}.image2.svelte-1ey5oxa{width:100%;height:100vh;position:absolute;opacity:1;visibility:hidden;transition:opacity 2s, visibility 2s}.image2.visible2.svelte-1ey5oxa{opacity:0.2;visibility:visible;background-image:url('./src/components/img/housing_sm.jpeg');background-size:cover;background-repeat:no-repeat;background-position:center center}.image.visible7.svelte-1ey5oxa{opacity:0.1;visibility:visible;background-image:url('./src/components/img/budgetspending.png');background-size:cover;background-repeat:no-repeat;background-position:center center}.image.visible8.svelte-1ey5oxa{opacity:0.1;visibility:visible;background-image:url('./src/components/img/caravan.png');background-size:cover;background-repeat:no-repeat;background-position:center center}.image.visible3.svelte-1ey5oxa{opacity:0.1;visibility:visible;background-image:url('./src/components/img/Food.png');background-size:cover;background-repeat:no-repeat;background-position:center center}.image.visible4.svelte-1ey5oxa{opacity:0.1;visibility:visible;background-image:url('./src/components/img/Housing.jpeg');background-size:cover;background-repeat:no-repeat;background-position:center center}.image.visible5.svelte-1ey5oxa{opacity:0.1;visibility:visible;background-image:url('./src/components/img/Business.jpeg');background-size:cover;background-repeat:no-repeat;background-position:center center}.propertyType1-container.svelte-1ey5oxa{position:relative;z-index:1;margin-bottom:-500px}.propertyType2-container.svelte-1ey5oxa{position:relative;display:flex;justify-content:space-between;width:100%;margin-top:0px}.propertyTypebp.svelte-1ey5oxa{width:300px;background-color:var(--color-bg);box-shadow:0 0 4px var(--color-shadow);padding:0px;margin-top:0px}.propertyTypesm.svelte-1ey5oxa{width:300px;background-color:var(--color-bg);box-shadow:0 0 4px var(--color-shadow);padding:0px;margin-top:0px}.sexowners-container.svelte-1ey5oxa{display:flex;position:relative;justify-content:space-between;width:100%;margin-top:20px}.Sexownerbp.svelte-1ey5oxa{width:500px;height:100px;background-color:var(--color-bg);box-shadow:0 0 4px var(--color-shadow);padding:150px;margin-top:50px}.Sexownersm.svelte-1ey5oxa{width:500px;height:100px;background-color:var(--color-bg);box-shadow:0 0 4px var(--color-shadow);padding:150px;margin-top:50px}.Circles-container-equalsize.svelte-1ey5oxa{display:flex;justify-content:center;align-items:center;position:fixed;top:50%;left:48%;transform:translate(-50%, -50%);width:100%;margin-top:20px;gap:460px}.Circles-container-animated.svelte-1ey5oxa{display:flex;justify-content:center;align-items:center;position:fixed;top:50%;left:48%;transform:translate(-50%, -50%);width:100%;margin-top:20px;gap:460px}.text-columns.svelte-1ey5oxa{display:flex;justify-content:space-between;width:100%;margin-bottom:50px}",
  map: null
};
const ScrollyTeller = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const data1 = [
    { label: "Item 1", value: 85 },
    { label: "Item 2", value: 31 },
    { label: "Item 3", value: 17 },
    { label: "Item 4", value: 25 },
    { label: "Item 5", value: 19 }
  ];
  const data2 = [
    { label: "Item 1", value: 85 },
    { label: "Item 2", value: 33 },
    { label: "Item 3", value: 20 },
    { label: "Item 4", value: 23 },
    { label: "Item 5", value: 15 }
  ];
  const data3 = [{ label: "Item 1", value: 15 }];
  const data4 = [{ label: "Item 1", value: 8 }];
  let isVisible = false;
  let isVisible7 = false;
  let isVisible8 = false;
  let isVisible3 = false;
  let isVisible4 = false;
  let isVisible5 = false;
  let isVisible1 = false;
  let isVisible2 = false;
  let count, index, offset, progress;
  let width, height;
  let geoJsonToFit = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [1, 0] }
      },
      {
        type: "Feature",
        geometry: { type: "Point", coordinates: [0, 1] }
      }
    ]
  };
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
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
        } else if (index === 4) {
          isVisible = false;
          isVisible1 = false;
          isVisible2 = false;
          isVisible7 = false;
          isVisible8 = false;
          isVisible3 = false;
          isVisible4 = true;
          isVisible5 = false;
        } else if (index === 5) {
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
        } else if (index === 2) {
          isVisible = false;
          isVisible1 = false;
          isVisible2 = true;
          isVisible7 = false;
          isVisible8 = false;
          isVisible3 = false;
          isVisible4 = false;
          isVisible5 = false;
        } else {
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
    }
    geoMercator().fitSize([width, height], geoJsonToFit);
    $$rendered = `${validate_component(Scroller, "Scroller").$$render(
      $$result,
      {
        top: 0,
        bottom: 1,
        threshold: 0.5,
        count,
        index,
        offset,
        progress
      },
      {
        count: ($$value) => {
          count = $$value;
          $$settled = false;
        },
        index: ($$value) => {
          index = $$value;
          $$settled = false;
        },
        offset: ($$value) => {
          offset = $$value;
          $$settled = false;
        },
        progress: ($$value) => {
          progress = $$value;
          $$settled = false;
        }
      },
      {
        foreground: () => {
          return `<div class="foreground svelte-1ey5oxa" slot="foreground"><section class="svelte-1ey5oxa">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}</section>
    
  
    <section class="svelte-1ey5oxa"><div class="propertyType1-container svelte-1ey5oxa">${validate_component(PropertyType, "PropertyType").$$render($$result, { index }, {}, {})}</div>
 
    <div class="propertyType2-container svelte-1ey5oxa"><div class="propertyTypebp svelte-1ey5oxa">${validate_component(PropertyTypebp, "PropertyTypebp").$$render($$result, { index }, {}, {})}</div>

      <h3 class="${["h3 svelte-1ey5oxa", isVisible1 ? "visible1" : ""].join(" ").trim()}">Single mother households are more likely to rent than own</h3>

      <div class="propertyTypesm svelte-1ey5oxa">${validate_component(PropertyTypesm, "PropertyTypesm").$$render($$result, { index }, {}, {})}</div></div></section>
    
    <section class="svelte-1ey5oxa"></section>



    <section class="svelte-1ey5oxa"><h2 class="svelte-1ey5oxa">Why is that? Are they financially different?</h2>
      <h2 class="svelte-1ey5oxa">Let&#39;s look into how they spend their remittances for example.</h2>
      ${validate_component(BasicNeedsCompare, "BasicNeedsCompare").$$render($$result, {}, {}, {})}
      
      <h2 class="svelte-1ey5oxa">Biparental households and single mother households spend similar fraction of their remittances on basic needs</h2></section>

    <section class="svelte-1ey5oxa"><h2 class="svelte-1ey5oxa">However, in terms of housing, they become different</h2>
      <h2 class="svelte-1ey5oxa">Biparental families are able to spend more in constructing or purchasing their own housing</h2>
      ${validate_component(HousingCompare, "HousingCompare").$$render($$result, {}, {}, {})}
      
      <h2 class="svelte-1ey5oxa">While single mothers need to rent</h2></section>

    <section class="svelte-1ey5oxa"><h2 class="svelte-1ey5oxa">Biparental families are also able to spend more on business</h2>
      <h2 class="svelte-1ey5oxa">They can accumulate more capital for basic needs, housing, or even migration</h2>
      ${validate_component(BusinessCompare, "BusinessCompare").$$render($$result, {}, {}, {})}
      
      <h2 class="svelte-1ey5oxa">Single mothers are unable to do that, leading to a viscious cycle.</h2></section>

    
    
    <section class="svelte-1ey5oxa">${validate_component(Chart$1, "Chart").$$render(
            $$result,
            {
              data1,
              data2,
              data3,
              data4,
              progress: progress * 1.6
            },
            {},
            {}
          )}</section>


    <section class="svelte-1ey5oxa">${validate_component(Motivation, "Motivation").$$render($$result, {}, {}, {})}</section>

    <section class="svelte-1ey5oxa"><h2 class="svelte-1ey5oxa">Cost of migration versus awareness </h2>
      <h2 class="svelte-1ey5oxa">For those who are aware of the migration cost beforehand, </h2>
      <div class="text-columns svelte-1ey5oxa">${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.79",
              maxProgress: "0.86",
              textColor: "black",
              text: "The average cost is $2894"
            },
            {},
            {}
          )}
        ${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.79",
              maxProgress: "0.86",
              textColor: "black",
              fontSize: "22px",
              containerWidth: "50%",
              text: "Biparental hosueholds and sinlge mother households spend similar amount of money for migration"
            },
            {},
            {}
          )}
        ${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.79",
              maxProgress: "0.86",
              textColor: "purple",
              text: "The average cost is $3244"
            },
            {},
            {}
          )}</div>


      <div class="text-columns svelte-1ey5oxa">${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.78",
              maxProgress: "0.86",
              textColor: "black",
              text: " "
            },
            {},
            {}
          )}
      ${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.82",
              maxProgress: "0.86",
              textColor: "black",
              fontSize: "22px",
              containerWidth: "50%",
              text: "What if they are unware of the cost?"
            },
            {},
            {}
          )}
      ${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.78",
              maxProgress: "0.86",
              textColor: "purple",
              text: " "
            },
            {},
            {}
          )}</div></section>

    <section class="svelte-1ey5oxa"><h2 class="svelte-1ey5oxa">Discrepancy emerges</h2>
      <div class="text-columns svelte-1ey5oxa">${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.90",
              maxProgress: "0.96",
              textColor: "black",
              text: "The average cost decreases to $2700"
            },
            {},
            {}
          )}
        ${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.90",
              maxProgress: "0.96",
              textColor: "black",
              fontSize: "22px",
              containerWidth: "50%",
              text: "Single mothers spend more"
            },
            {},
            {}
          )}
        ${validate_component(ConditionalText, "ConditionalText").$$render(
            $$result,
            {
              progress,
              minProgress: "0.90",
              maxProgress: "0.96",
              textColor: "purple",
              text: "The average cost increases to $8260"
            },
            {},
            {}
          )}</div></section>


    <section class="svelte-1ey5oxa"><h2 class="svelte-1ey5oxa">Cost of Knowledge: Single mothers spend more on intemediaries</h2>
      ${validate_component(Intermediary, "Intermediary").$$render($$result, {}, {}, {})}</section></div>`;
        },
        background: () => {
          return `<div class="background svelte-1ey5oxa" slot="background"><div class="${["image svelte-1ey5oxa", isVisible ? "visible" : ""].join(" ").trim()}"></div>
  <div class="${["image svelte-1ey5oxa", isVisible7 ? "visible7" : ""].join(" ").trim()}"></div>
  <div class="${["image svelte-1ey5oxa", isVisible8 ? "visible8" : ""].join(" ").trim()}"></div>
  <div class="${["image svelte-1ey5oxa", isVisible3 ? "visible3" : ""].join(" ").trim()}"></div>
  <div class="${["image svelte-1ey5oxa", isVisible4 ? "visible4" : ""].join(" ").trim()}"></div>
  <div class="${["image svelte-1ey5oxa", isVisible5 ? "visible5" : ""].join(" ").trim()}"></div>
  <div class="${["image1 svelte-1ey5oxa", isVisible1 ? "visible1" : ""].join(" ").trim()}"></div> 
  <div class="${["image2 svelte-1ey5oxa", isVisible2 ? "visible2" : ""].join(" ").trim()}"></div> 

  <div class="sexowners-container svelte-1ey5oxa"><div class="Sexownerbp svelte-1ey5oxa">${validate_component(Sexownerbp, "Sexownerbp").$$render($$result, { index }, {}, {})}</div>

  <div class="text svelte-1ey5oxa"><h5 class="${["text2 svelte-1ey5oxa", isVisible2 ? "visible2" : ""].join(" ").trim()}">Click to see the proportion of property ownership by sex.</h5>
    <h4 class="${["text svelte-1ey5oxa", isVisible2 ? "visible2" : ""].join(" ").trim()}">Even in single mother households, 18% of property owners are men</h4></div>

  <div class="Sexownersm svelte-1ey5oxa">${validate_component(Sexownersm, "Sexownersm").$$render($$result, { index }, {}, {})}</div></div>

  

  


  <section class="svelte-1ey5oxa"><div class="Circles-container-equalsize svelte-1ey5oxa">${progress >= 0.79 && progress <= 0.82 ? `${validate_component(StaticCircle, "StaticCircle").$$render(
            $$result,
            {
              circleColor: "rgba(60, 60, 60, 0.5)",
              circleRadius: "50",
              text: ""
            },
            {},
            {}
          )}` : ``}
      ${progress >= 0.79 && progress <= 0.82 ? `${validate_component(StaticCircle, "StaticCircle").$$render(
            $$result,
            {
              circleColor: "rgba(128, 0, 255, 0.5)",
              circleRadius: "50",
              text: ""
            },
            {},
            {}
          )}` : ``}</div>

    <div class="Circles-container-animated svelte-1ey5oxa"><div>${progress && progress >= 0.82 && progress <= 0.93 ? `${validate_component(ShrinkingCircles, "ShrinkingCircle").$$render(
            $$result,
            {
              progress: progress - 0.82,
              initialRadius: 50,
              circleColor: "rgba(60, 60, 60, 0.5)"
            },
            {},
            {}
          )}` : ``}</div>
      <div>${progress && progress >= 0.82 && progress <= 0.93 ? `${validate_component(ExpandingCircles, "ExpandingCircle").$$render(
            $$result,
            {
              progress: progress - 0.82,
              initialRadius: 50,
              circleColor: "rgba(128, 0, 255, 0.5)"
            },
            {},
            {}
          )}` : ``}</div></div></section>

    <div><progress class="progress-bars svelte-1ey5oxa"${add_attribute("value", progress || 0, 0)}></progress></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(ScrollyTeller, "ScrollyTeller").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
