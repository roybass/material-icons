import React, { Component } from 'react';
import * as icons from '@material-ui/icons';
import './App.css';

const iconNames = Object.keys(icons);
const groupedIcons = {};

const styles = {

  largeIcon: {
    width: 45,
    height: 45,
  },

};

function addToGroup(name, type) {
  if (name.endsWith(type)) {
    const groupName = name.substr(0, name.length - type.length);
    if (!groupedIcons[groupName]) {
      groupedIcons[groupName] = {};
    }
    groupedIcons[groupName][type] = name;
  }

}

iconNames.forEach(name => {
  addToGroup(name, "Outlined");
  addToGroup(name, "Rounded");
  addToGroup(name, "Sharp");
  addToGroup(name, "TwoTone");
});

function createIconElement(group, type) {
  if (!type) {
    return React.createElement(icons[group], {style: styles.largeIcon}); 
  }
  if (!groupedIcons[group]) {
    return (<span/>);
  }
  const iconName = groupedIcons[group][type];
  if (!iconName) {
    return (<span/>);
  }
  return React.createElement(icons[iconName], {style: styles.largeIcon});
}

console.log(groupedIcons);

class App extends Component {
  render() {
    return (

      <div className="App">
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Icon</th>
          <th>Outlined Name</th>
          <th>Outlined Icon</th>
          <th>Rounded Name</th>
          <th>Rounded Icon</th>
          <th>Sharp Name</th>
          <th>Sharp Icon</th>
          <th>Two Tone Name</th>
          <th>Two Tone Icon</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(groupedIcons).map(name => (
          <tr>
            <td>{name}</td>
            <td>{createIconElement(name)} </td>
            <td>{name+"Outlined"}</td>
            <td>{createIconElement(name, "Outlined")} </td>
            <td>{name+"Rounded"}</td>
            <td>{createIconElement(name, "Rounded")} </td>
            <td>{name+"Sharp"}</td>
            <td>{createIconElement(name, "Sharp")} </td>
            <td>{name+"TwoTone"}</td>
            <td>{createIconElement(name, "TwoTone")} </td>
          </tr>
         ))}
         </tbody>
        </table>
      </div>
    );
  }
}

export default App;
