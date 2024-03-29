import React, { Component } from 'react';

export default class FormMCheckboxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checkboxes: [
            { id: 1, label: 'Checkbox 1', isChecked: false },
            { id: 2, label: 'Checkbox 2', isChecked: false },
            // Add more checkboxes as needed
          ],
        };
      }
    
      handleCheckboxChange = (id) => {
        this.setState((prevState) => ({
          checkboxes: prevState.checkboxes.map((checkbox) =>
            checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
          ),
        }));
      };
    
      render() {
        return (
          <div>
            {this.state.checkboxes.map((checkbox) => (
              <label key={checkbox.id}>
                <input
                  type="checkbox"
                  checked={checkbox.isChecked}
                  onChange={() => this.handleCheckboxChange(checkbox.id)}
                />
                {checkbox.label}
              </label>
            ))}
          </div>
        );
      }
    
}
