document.getElementById('topLeftButton').addEventListener('click', showPopup);

function showPopup(event) {
    event.preventDefault();
    var popup = document.getElementById("popup");
    console.log('This code is working'
    )
    popup.style.display = "block";
}

document.getElementById('close').addEventListener('click', hidePopup);

function hidePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";

  }

  document.getElementById('topLeftButton').addEventListener('click', populateCheckboxOptions);

  async function populateCheckboxOptions() {
    var checkboxOptions = document.getElementById("checkboxOptions");
    checkboxOptions.innerHTML = '';

    try {
      const response = await axios.get('/all-users');
      const users = response.data;
    console.log(users);
      users.forEach(function(user) {
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = "participants";
        checkbox.value = user.name;

        var label = document.createElement("label");
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(user.name));

        checkboxOptions.appendChild(label);
        checkboxOptions.appendChild(document.createElement('br'));
      });
    } catch (error) {
      console.error('Error retrieving users:', error);
    }
  }