<template>
  <v-card class="mx-auto">
    <v-toolbar color="primary" dark>
      <v-toolbar-title>BOOST-ontwikkeling uitgezet over de tijd</v-toolbar-title>

      <div class="flex-grow-1"></div>

      <v-btn icon>
        <v-icon>mdi-information</v-icon>
      </v-btn>
    </v-toolbar>
    <v-row justify="center">
      <v-col col="12">
        <apexchart
          style="marginLeft: 50%; transform: translateX(-70%);"
          width="600"
          type="line"
          height="372"
          :options="chartOptions"
          :series="series"
        />
      </v-col>
    </v-row>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      chartOptions: {
        toolbar: {
          show: true,
          tools: {
            download: true,
            selection: true,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: false | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          }
        },
        annotations: {
          yaxis: [
            {
              // y: 10,
              // borderColor: "#00E396",
              // label: {
              //   borderColor: "#00E396",
              //   style: {
              //     color: "#fff",
              //     background: "#00E396",
              //     fontSize: "15px"
              //   },
              //   text: "Minimum"
              // }
            },
            {
              // y: 30,
              // y2: 50,
              // borderColor: "#FEB019",
              // fillColor: "#FEB019",
              // opacity: 0.4,
              // label: {
              //   borderColor: "#333",
              //   style: {
              //     fontSize: "15px",
              //     color: "#333",
              //     background: "#FEB019"
              //   },
              //   text: "BOOST-zone"
              // }
            }
          ],
          xaxis: [
            {
              x: 3,
              strokeDashArray: 0,
              borderColor: "#FF4560",
              label: {
                borderColor: "#FF4560",
                style: {
                  color: "#fff",
                  background: "#FF4560",
                  fontSize: "15px"
                },
                text: "Nudge 1"
              }
            },
            {
              x: 4,
              x2: 6,
              borderColor: "#FF4560",
              opacity: 0.5,
              label: {
                borderColor: "#FF4560",
                style: {
                  fontSize: "15px",
                  color: "#fff",
                  background: "#FF4560"
                },
                offsetY: -10,
                text: "Nudge 2"
              }
            }
          ],
          points: [
            {
              x: 2,
              y: 40,
              marker: {
                size: 8,
                fillColor: "#fff",
                strokeColor: "red",
                radius: 2,
                cssClass: "apexcharts-custom-class"
              },
              label: {
                borderColor: "#FF4560",
                offsetY: 0,
                style: {
                  color: "#fff",
                  background: "#FF4560",
                  fontSize: "15px"
                },

                text: "Workshop"
              }
            }
          ]
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "straight"
        },
        grid: {
          padding: {
            right: 30,
            left: 20
          }
        },
        title: {
          text: "",
          align: "left"
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep"
          ]
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
        }
      },
      series: [
        {
          name: "Actual BOOSTS",
          data: [10, 41, 35, 51, 49, 62, 69, 91, null]
        },
        {
          name: "Predicted BOOSTs",
          data: [10, 20, 40, 55, 56, 66, 68, 70, 75]
        }
      ]
    };
  }
};
</script>

<style>
</style>
