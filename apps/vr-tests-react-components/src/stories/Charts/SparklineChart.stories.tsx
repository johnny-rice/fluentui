import * as React from 'react';
import type { Meta } from '@storybook/react';
import { DARK_MODE, getStoryVariant, RTL, TestWrapperDecorator } from '../../utilities';
import { Steps, StoryWright } from 'storywright';
import { ChartProps, Sparkline } from '@fluentui/react-charts';

export default {
  title: 'Charts/SparkLineChart',

  decorators: [
    (story, context) => TestWrapperDecorator(story, context),
    (story, context) => {
      const steps = new Steps().snapshot('default', { cropTo: '.testWrapper' }).end();
      return <StoryWright steps={steps}>{story(context)}</StoryWright>;
    },
  ],
} satisfies Meta<typeof Sparkline>;

export const Basic = () => {
  const sl1: ChartProps = {
    chartTitle: '10.21',
    lineChartData: [
      {
        legend: '19.64',
        color: '#00AA00',
        data: [
          {
            x: 1,
            y: 58.13,
          },
          {
            x: 2,
            y: 140.98,
          },
          {
            x: 3,
            y: 20,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 99,
          },
          {
            x: 6,
            y: 13.28,
          },
          {
            x: 7,
            y: 31.32,
          },
          {
            x: 8,
            y: 10.21,
          },
        ],
      },
    ],
  };
  const sl2: ChartProps = {
    chartTitle: '49.44',
    lineChartData: [
      {
        legend: '19.64',
        color: '#E60000',
        data: [
          {
            x: 1,
            y: 29.13,
          },
          {
            x: 2,
            y: 70.98,
          },
          {
            x: 3,
            y: 60,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 19,
          },
          {
            x: 6,
            y: 49.44,
          },
        ],
      },
    ],
  };
  const sl3: ChartProps = {
    chartTitle: '49.44',
    lineChartData: [
      {
        legend: '19.64',
        color: '#00AA00',
        data: [
          {
            x: 1,
            y: 29.13,
          },
          {
            x: 2,
            y: 70.98,
          },
          {
            x: 3,
            y: 60,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 19,
          },
          {
            x: 6,
            y: 49.44,
          },
        ],
      },
    ],
  };
  const sl4: ChartProps = {
    chartTitle: '49.44',
    lineChartData: [
      {
        legend: '464.64',
        color: '#E60000',
        data: [
          {
            x: 1,
            y: 29.13,
          },
          {
            x: 2,
            y: 70.98,
          },
          {
            x: 3,
            y: 60,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 19,
          },
          {
            x: 6,
            y: 49.44,
          },
        ],
      },
    ],
  };
  const sl5: ChartProps = {
    chartTitle: '49.44',
    lineChartData: [
      {
        legend: '46.49',
        color: '#E3008C',
        data: [
          {
            x: 1,
            y: 29.13,
          },
          {
            x: 2,
            y: 70.98,
          },
          {
            x: 3,
            y: 60,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 19,
          },
          {
            x: 6,
            y: 49.44,
          },
        ],
      },
    ],
  };
  const sl6: ChartProps = {
    chartTitle: '49.44',
    lineChartData: [
      {
        legend: '49.44',
        color: '#627CEF',
        data: [
          {
            x: new Date('2020-03-03T00:00:00.000Z'),
            y: 29.13,
          },
          {
            x: new Date('2020-03-04T00:00:00.000Z'),
            y: 70.98,
          },
          {
            x: new Date('2020-03-05T00:00:00.000Z'),
            y: 60,
          },
          {
            x: new Date('2020-03-07T00:00:00.000Z'),
            y: 89.7,
          },
          {
            x: new Date('2020-03-12T00:00:00.000Z'),
            y: 19,
          },
          {
            x: new Date('2020-03-15T00:00:00.000Z'),
            y: 49.44,
          },
        ],
      },
    ],
  };
  const sl7: ChartProps = {
    chartTitle: '49.44',
    lineChartData: [
      {
        legend: '49.44',
        color: '#0078D4',
        data: [
          {
            x: 1,
            y: 29.13,
          },
          {
            x: 2,
            y: 70.98,
          },
          {
            x: 3,
            y: 60,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 19,
          },
          {
            x: 6,
            y: 49.44,
          },
        ],
      },
    ],
  };
  const sl8: ChartProps = {
    chartTitle: '541.44',
    lineChartData: [
      {
        legend: '541.44',
        color: '#0078D4',
        data: [
          {
            x: 1,
            y: 291.13,
          },
          {
            x: 2,
            y: 170.98,
          },
          {
            x: 3,
            y: 260,
          },
          {
            x: 4,
            y: 89.7,
          },
          {
            x: 5,
            y: 664,
          },
          {
            x: 6,
            y: 66.44,
          },
          {
            x: 7,
            y: 541.44,
          },
          {
            x: 8,
            y: 32.44,
          },
          {
            x: 9,
            y: 499.14,
          },
          {
            x: 10,
            y: 350.48,
          },
          {
            x: 11,
            y: 32.44,
          },
          {
            x: 12,
            y: 400.44,
          },
        ],
      },
    ],
  };

  return (
    <div style={{ padding: 10 }}>
      <table>
        <tbody>
          <tr style={{ borderBottom: '1pt solid black' }}>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 1</td>
            <td>
              <Sparkline data={sl1} showLegend={true} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 2</td>
            <td>
              <Sparkline data={sl2} showLegend={true} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 3</td>
            <td>
              <Sparkline data={sl3} showLegend={false} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 4</td>
            <td>
              <Sparkline data={sl4} showLegend={false} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 5</td>
            <td>
              <Sparkline data={sl5} showLegend={false} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 6</td>
            <td>
              <Sparkline data={sl6} showLegend={true} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 7</td>
            <td>
              <Sparkline data={sl7} showLegend={true} />
            </td>
          </tr>
          <tr>
            <td style={{ paddingRight: '15px', paddingBottom: '5px', paddingTop: '5px' }}>Row 8</td>
            <td>
              <Sparkline data={sl8} showLegend={true} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const BasicDarkMode = getStoryVariant(Basic, DARK_MODE);

export const BasicRTL = getStoryVariant(Basic, RTL);
