# React Native PieChart Component

A customizable and responsive PieChart component for React Native using `react-native-svg`.
The package `react-native-svg`should be installed in your project.
## Installation

```bash
npm install react-native-basic-piechart
```

## Example Usage

Import the PieChart component in your React Native application and use it as follows:

```JS
import React from 'react';
import { View } from 'react-native';
import PieChart from 'react-native-basic-piechart';

const YourComponent = () => {
  const dataValues = [/* your array of data values */];
  const colors = [/* optional array of colors */];

  return (
    <View>
      <PieChart
        dataValues={dataValues}
        colors={colors}
        radiusProp={/* optional radius value */}
        noGap={/* optional boolean to remove gaps */}
        gapColor={/* optional gap color */}
      />
    </View>
  );
};

export default YourComponent;
```

## Props

| Prop         | Type              | Description                                                                             |
|--------------|-------------------|-----------------------------------------------------------------------------------------|
| **dataValues** | Array\<number\>    | Array of numbers representing the data values for each segment in the pie chart.         |
| **colors**     | Array\<string\>    | Array of strings representing the colors for each segment. If not provided, default colors will be used. |
| **radiusProp** | number (optional)  | Optional number specifying the radius of the pie chart. If not provided, a default value of 100 will be used. |
| **noGap**      | boolean (optional) | Optional boolean to remove gaps between segments. Default is `false`.                     |
| **gapColor**   | string (optional)  | Optional string specifying the color for the gaps between segments. If not provided, default color or transparent will be used. |

## Example

```JS
import React from 'react';
import { View } from 'react-native';
import PieChart from 'react-native-basic-piechart';

const ExampleComponent = () => {
  const dataValues = [25, 50, 75, 100];
  const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33A1'];

  return (
    <View>
      <PieChart
        dataValues={dataValues}
        colors={colors}
        radiusProp={100}
        noGap={true}
        gapColor="#E0E0E0"
      />
    </View>
  );
};

export default ExampleComponent;

```
![4](https://github.com/bahaakyol/react-native-basic-piechart/assets/81897405/62004c32-50cb-483f-9b78-369603f3dcbe)
![5](https://github.com/bahaakyol/react-native-basic-piechart/assets/81897405/30976923-cdf1-46f8-a507-28754be3f147)
![6](https://github.com/bahaakyol/react-native-basic-piechart/assets/81897405/3951c28e-07e8-45b7-a3bf-80fcdfcd170d)







