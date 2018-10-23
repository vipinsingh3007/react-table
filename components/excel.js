// console.dir(headers);
// console.dir(data);

var Excel = createReactClass({
  displayName: "Excel",
  render: function() {
    return React.createElement(
      "table",
      { className: "table" },
      React.createElement(
        "thead",
        null,
        React.createElement(
          "tr",
          null,
          this.props.headers.map((title, idx) =>
            React.createElement("th", { key: idx }, title)
          )
        )
      ),
      data.map((row, idx) => {
        return React.createElement(
          "tr",
          { key: idx },
          row.map((rd, idx) => {
            return React.createElement("td", { key: idx }, rd);
          })
        );
      })
    );
  }
});
