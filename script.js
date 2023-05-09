const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const hideCheckboxesBtn = document.getElementById("hide-checkboxes-btn");

hideCheckboxesBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  checkboxes.forEach((checkbox) => {
    checkbox.style.display = checkbox.style.display === "none" ? "block" : "none";
  });
});


checkboxes.forEach(checkbox => {
  const cell = checkbox.parentNode;
  if (checkbox.checked) {
    cell.style.backgroundColor = 'blue';
  } else {
    cell.style.backgroundColor = 'red';
  }

  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      cell.style.backgroundColor = 'blue';
    } else {
      cell.style.backgroundColor = 'red';
    }
  });
});

$(document).ready(function(){
      // Сортування за зростанням
      $("#sort-asc").click(function(){
        var rows = $("tbody > tr").get();
        rows.sort(function(a, b) {
          var keyA = parseInt($(a).children("th").text());
          var keyB = parseInt($(b).children("th").text());
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        $.each(rows, function(index, row) {
          $("tbody").append(row);
        });
      });
      
      // Сортування за спаданням
      $("#sort-desc").click(function(){
        var rows = $("tbody > tr").get();
        rows.sort(function(a, b) {
          var keyA = parseInt($(a).children("th").text());
          var keyB = parseInt($(b).children("th").text());
          if (keyA > keyB) return -1;
          if (keyA < keyB) return 1;
          return 0;
          });
        $.each(rows, function(index, row) {
          $("tbody").append(row);
        });
      });
    });

function saveCheckboxes() {
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      let states = [];
      for (let i = 0; i < checkboxes.length; i++) {
        states.push(checkboxes[i].checked);
      }
      localStorage.setItem('checkboxStates', JSON.stringify(states));

      // create text file
      let data = JSON.stringify(states);
      let filename = 'checkbox_states.txt';
      let file = new Blob([data], {type: 'text/plain'});
      let a = document.createElement('a');
      a.href = URL.createObjectURL(file);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    let states = JSON.parse(localStorage.getItem('checkboxStates'));
    if (states) {
      let checkboxes = document.querySelectorAll('input[type="checkbox"]');
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = states[i];
      }
    }
