var layout = {
  xaxis: {
    title: {
      text: 'Colors',
      font: {
        family: 'Courier New, monospace',
        size: 20,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Reflectance (Percentage)',
      font: {
        family: 'Courier New, monospace',
        size: 15,
        color: '#7f7f7f'
      }
    }
  }
};

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: [
        "Blue",
        "Cyan",
        "Green",
        "Yellow",
        "Orange",
        "Red",
        "Deep Red",
        "IR1",
        "IR2",
        "IR3",
        "IR4"
      ],
      y: [25.411, 32.09, 24.628, 15.017, 13.035, 21.4, 32.943, 27.865, 67.432, 101.603, 110.952]
    }
  ],
  layout
);

