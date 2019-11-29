<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>BOOST ervaring</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row justify="center">
      <v-col col="12">
        <apexchart width="600" :options="chartOptions" :series="series" style="marginLeft:50%; transform: translateX(-80%);"></apexchart>
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      primary: "#0D47A1",
      series: [
        {
          name: "Scores",
          data: [80, 50, 30, 40]
        },
        {
          name: "Benchmark",
          data: [40, 30, 35, 20]
        }
      ],
      chartOptions: {
        plotOptions: {
          bar: {
            horizontal: true,
            endingShape: "flat",
            columnWidth: "50%",
            barHeight: "70%",
            distributed: false
          }
        },
        xaxis: {
          categories: ["Uitdaging", "Plezier", "Leerzaam", "Relevant"],
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: true,
            minHeight: undefined,
            maxHeight: 120,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "sans-serif",
              cssClass: "apexcharts-xaxis-label"
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            style: {
              colors: [],
              fontSize: "12px",
              fontFamily: "sans-serif",
              cssClass: "apexcharts-xaxis-label"
            },
            offsetX: 0,
            offsetY: 17
          }
        },
        chart: {
          type: "bar",
          fontFamily: "sans-serif",
          toolbar: {
            show: true
          }
        },
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          position: "top",
          horizontalAlign: "right",
          floating: false,
          fontSize: "14px",
          fontFamily: "Helvetica, Arial",
          width: undefined,
          height: undefined,
          formatter: undefined,
          tooltipHoverFormatter: undefined,
          offsetX: 0,
          offsetY: 0,
          labels: {
            colors: undefined,
            useSeriesColors: false
          },
          markers: {
            width: 12,
            height: 12,
            strokeWidth: 0,
            strokeColor: "#fff",
            radius: 12,
            customHTML: undefined,
            onClick: undefined,
            offsetX: 0,
            offsetY: 0
          },
          itemMargin: {
            horizontal: 20,
            vertical: 5
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          }
        },
        tooltip: {
          enabled: true,
          shared: true,
          x: {
            show: true,
            format: "string",
            // formatter: function(val) {
            //   let a;
            //   switch (val) {
            //     case "flag":
            //       a = "Uitdaging";
            //       break;
            //     case "star":
            //       a = "Plezier";
            //       break;
            //     case "book":
            //       a = "Leerzaam";
            //       break;
            //     case "build":
            //       a = "Relevant";
            //       break;
            //   }
            //   return a;
            // }
          }
        }
      }
    };
  }
};
</script>

<style>
</style>
