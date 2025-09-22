import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const defaultYears = ['2020', '2021', '2022', '2023', '2024', '2025'];
const defaultValues = [1800000, 2800000, 4200000, 6000000, 7200000, 9200000];

export default function Chart({ years = defaultYears, values = defaultValues, style }) {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chart = echarts.init(containerRef.current, null, { renderer: 'canvas', useDirtyRect: false });
    chartRef.current = chart;

    const option = {
      animationDuration: 4000,
      animationEasing: 'cubicOut',
      animationDurationUpdate: 2000,
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: years,
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: { color: '#ddd', width: 1 }
        }
      },
      yAxis: {
        type: 'value',
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: { color: '#ddd', width: 1 }
        },
        axisLabel: {
          formatter: function (value) { return (value / 1000000) + 'M'; }
        }
      },
      series: [
        {
          data: values,
          type: 'line',
          symbol: 'circle',
          symbolSize: 12,
          lineStyle: { width: 2, color: '#828e51' },
          itemStyle: { color: '#828e51', borderWidth: 1, borderColor: '#fff' },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#4d561540' },
              { offset: 1, color: '#828e5110' }
            ])
          }
        }
      ],
      grid: { left: '0%', right: '6%', top: '6%', bottom: '6%', containLabel: true }
    };

    chart.setOption(option);

    const handleResize = () => { chart.resize(); };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
      chartRef.current = null;
    };
  }, [years, values]);

  return (
    <div ref={containerRef} id="chart-container" style={{ width: '100%', height: 320, ...style }} data-aos="fade-up"/>
  );
}