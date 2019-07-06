<template>
  <section class="circle-packing">
    <h1>Circle Packing</h1>
    <div ref="container"></div>
  </section>
</template>

<script>
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import data from './data';

const colors = [
  '#f3ecf4',
  '#2ec7c9',
  '#5ab1ef',
  '#b6a2de',
  '#d87a80',
  '#ffb980',
  '#e5cf0d',
  '#8080da',
  '#ef77e2',
  '#66cc66',
  '#b7bf5d',
];

export default {
  name: 'circle-packing',
  data() {
    return {
      data,
      dataView: undefined,
      chart: undefined,
      diameter: 600, // 直径
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.createDateView();
      this.createChart();
      this.sourceChart();
      this.setChartOption();
      this.setEvent();
      this.chart.render();
    },
    createDateView() {
      const dv = new DataSet.View().source(data, {
        type: 'hierarchy',
      });
      dv.transform({
        type: 'hierarchy.circle-packing',
      });
      this.dataView = dv;
    },
    createChart() {
      const chart = new G2.Chart({
        container: this.$refs['container'],
        height: this.diameter,
        width: this.diameter,
        padding: 0,
      });
      chart.axis(false); // 坐标轴
      chart.legend(false); // legend
      chart.tooltip({
        // tooltip
        showTitle: false, // 不显示标题
      });
      this.chart = chart;
    },
    sourceChart() {
      const nodes = this.dataView.getAllNodes().map(function(node) {
        return {
          hasChildren: !!(node.data.children && node.data.children.length),
          name: node.data.name,
          value: node.value,
          depth: node.depth,
          x: node.x,
          y: node.y,
          r: node.r,
          category: node.data.category,
        };
      });
      this.chart.source(nodes, {
        x: { max: 1 }, // 防止溢出
        y: { max: 1 }, // 防止溢出
      });
    },
    setChartOption() {
      this.chart
        .point()
        .position('x*y') // 圆的中心点
        .shape('circle')
        .active(false)
        .tooltip('name*value', (name, value) => {
          return {
            name: name,
            value: value,
          };
        })
        .size('r', r => {
          return r * this.diameter; // 圆的大小
        })
        .color('category', colors) // 根据分类设置颜色
        .style({
          opacity: 0.4,
        })
        .label('name', {
          offset: 0,
          textStyle: function textStyle(text, item) {
            if (item.point.hasChildren) {
              return {
                fontSize: 0,
              };
            }
            return {
              textBaseline: 'middle',
              fill: 'grey',
              fontSize: 11,
              textAlign: 'center',
            };
          },
        });
    },
    setEvent() {
      this.chart.on('point:click', ev => {
        console.log(ev);
      });
    },
  },
};
</script>

<style scoped></style>
