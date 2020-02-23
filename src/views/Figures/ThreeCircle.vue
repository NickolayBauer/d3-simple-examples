<template>
    <div class="ThreeCircle">
        <svg viewBox="0 0 80 30" width="80" height="20">
            <circle cx="10" cy="20" r="10" />
            <circle cx="30" cy="20" r="10" />
            <circle cx="50" cy="20" r="10" />
        </svg>
    </div>
</template>
<script>
import * as d3 from "d3";

export default {
    name: "ThreeCircle",
    data() {
        return {
            radius_mass: [15, 30, 45]
        };
    },
    mounted() {
        this.initCircle();
    },
    methods: {
        initCircle() {
            let circle = d3.selectAll("circle");
            circle.style("fill", "steelblue");
            circle.data(this.radius_mass);
            circle.attr("r", d => {
                return Math.sqrt(d);
            });
            function repeat() {
                let start_radius = 3;
                let to = 6;
                let dur = 150*8;
                let iteration_delay = 350;
                for (let i = 0; i < 3; i++) {
                    d3.select(circle.nodes()[i])
                        .attr("r", start_radius)
                            .transition()
                            .delay(iteration_delay * i)
                            .duration(dur)
                        .attr("r", to)
                            .transition()
                            .duration(dur)
                        .attr("r", start_radius)
                        .on("end", repeat);
                }
            }
            repeat(this.radius_mass);
        }
    }
};
</script>