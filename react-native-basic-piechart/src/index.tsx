import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export interface IYKSPieChart {
  dataValues: Array<number>;
  colors?: Array<string>;
  radiusProp?: number;
  noGap?: boolean;
  gapColor?: string;
}

const CustomPieChart: React.FC<IYKSPieChart> = ({
  dataValues,
  colors,
  radiusProp,
  noGap,
  gapColor,
}) => {
  let total = 0;
  let cumulativePercentage = 0;
  const radius = radiusProp ?? 100;
  const newData: Array<number> = [];
  dataValues.forEach((item) => {
    total += Math.abs(item);
    newData.push(Math.abs(item));
  });
  const containerStyle = {
    borderRadius: 9999,
  };

  return (
    <View
      style={[
        containerStyle,
        { backgroundColor: gapColor ?? 'transparent', padding: noGap ? 0 : 1 },
      ]}
    >
      <Svg height={radius * 2} width={radius * 2}>
        {newData.map((value: number, index: number) => {
          const percentage = (value / total) * 360;
          const radian = (cumulativePercentage * Math.PI) / 180;
          const x1 = radius + Math.cos(radian) * radius;
          const y1 = radius + Math.sin(radian) * radius;
          cumulativePercentage += percentage === 360 ? 360 - 0.01 : percentage;
          const x2 =
            radius + Math.cos((cumulativePercentage * Math.PI) / 180) * radius;
          const y2 =
            radius + Math.sin((cumulativePercentage * Math.PI) / 180) * radius;
          const largeArcFlag = percentage > 180 ? 1 : 0;
          const path = `
            M ${radius} ${radius}
            L ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
            Z
          `;
          return (
            <Path
              key={index}
              stroke={percentage === 360 ? 'transparent' : gapColor ?? '#fff'}
              strokeWidth={noGap ? 0 : 2}
              d={path}
              fill={
                colors
                  ? colors[index % colors.length]
                  : `hsl(${index * (360 / newData.length)}, 70%, 50%)`
              }
            />
          );
        })}
      </Svg>
    </View>
  );
};

export default React.memo(CustomPieChart);
