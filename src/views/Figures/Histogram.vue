<template>
    <div class="Histogram">
        <svg style="width:50vh; height: 50vh;" />
    </div>
</template>
<script>
import data_set from "./dataset.js";
import { select, scaleLinear, max, scaleBand } from "d3";

export default {
    data() {
        return {
            cities: data_set.data
        };
    },
    mounted() {
        this.render();
    },
    methods: {
        render() {
            const data = this.cities.sort(function(b, a) {
                return a.population - b.population;
            });

            const svg = select("svg")

            const width = window.innerWidth * 0.6;
            const height = 200;
            console.log(width);

            const xValue = d => d.population;
            const yValue = d => d.city;

            const xScale = scaleLinear()
                .domain([0, max(data, xValue)])
                .range([0, width]);

            const yScale = scaleBand()
                .domain(data.map(yValue))
                .range([0, height])
                .padding(0.1);

            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("y", d => yScale(yValue(d)))
                .attr("width", d => xScale(d.population))
                .attr("height", yScale.bandwidth())
        },
    }
};
</script>