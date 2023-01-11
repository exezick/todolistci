import React, { useEffect, useState} from 'react';
import axios from 'axios';

function FormToDo() {
  
    const [formValue, setformValue] = React.useState({
      name: '',
    });

    const handleSubmit = async(e) => {
      e.preventDefault();
      // store the states in the form data
      const nameFormData = new FormData();
      nameFormData.append("name", formValue.name)
    
      try {
        // make axios post request
        const response = await axios({
          method: "post",
          url: "http://localhost/todolistci/backend/index.php/create",
          data: nameFormData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      } catch(error) {
        console.log(error)
      }
    }
  
    const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
    }

  return (
    <div>
        <form  onSubmit={handleSubmit} autoComplete="off">
            <input type="text" name="name" id="name" required placeholder="Enter To Do" 
            value={formValue.name} onChange={handleChange} onKeyDown={handleChange} />
            <button type="submit">+</button>
        </form>
    </div>
  )
}

export default FormToDo