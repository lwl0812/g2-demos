<template>
  <div class="bubble" ref="container"></div>
</template>

<script>
import G2 from '@antv/g2';
import data from './data';

export default {
  name: 'bubble',
  mounted() {
    this.render();
  },
  methods: {
    render() {
      const chart = new G2.Chart({
        container: this.$refs['container'],
        forceFit: true,
        height: window.innerHeight,
        padding: [20, 20, 50, 80],
        plotBackground: {
          stroke: '#ccc', // 边颜色
          lineWidth: 1, // 边框粗细
        }, // 绘图区域背景设置
      });
      chart.source(data, {
        name: {
          alias: 'KOL名称',
        },
        value: {
          alias: 'KOL关注度', // 定义别名
        },
        percent: {
          alias: '关注渗透率',
          formatter: val => {
            return val + '%';
          },
        },
      });
      // 开始配置坐标轴
      chart.axis('value', {
        label: {
          formatter: function formatter(val) {
            return val; // 格式化坐标轴显示文本
          },
        },
        grid: {
          lineStyle: {
            stroke: '#d9d9d9',
            lineWidth: 1,
            lineDash: [2, 2],
          },
        },
      });
      chart.axis('percent', {
        title: {
          offset: 64,
        },
      });
      chart.legend(false);
      chart.tooltip({
        showTitle: false,
        containerTpl: '<div class="g2-tooltip">' + '<ul class="g2-tooltip-list"></ul></div>', // tooltip 容器模板
        itemTpl:
          '<li data-index={index} style="text-align: left;"><span style="background-color:{color}; width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 8px;"></span><span style="display: inline-block; width: 100px;">{name}</span> {value}</li>', // tooltip 每项记录的默认模板
      });
      chart
        .point()
        .position('percent*value')
        .color('#1890ff')
        .size(30)
        .label('name*value*percent', {
          offset: 0, // 文本距离图形的距离
          textStyle: {
            fill: '#1890FF',
          },
          formatter: text => {
            return text.length > 4 ? text.slice(0, 4) + '...' : text;
          },
        })
        .opacity(0.3)
        .shape('circle')
        .tooltip('name*value*percent')
        .style({
          lineWidth: 1,
          stroke: '#1890ff',
        });
      chart.render();
    },
  },
};
</script>

<style scoped></style>
