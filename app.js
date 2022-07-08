
var app = new function() {
  this.el = document.getElementById('datas');
  this.datas = [];
  this.Count = function(data) {
    var el   = document.getElementById('counter');
    var name = 'data';
    if (data) {
      if (data > 1) {
        name = 'datas';
      }

    } 
  };
  
  this.FetchAll = function() {
    var data = '';
    if (this.datas.length > 0) {
      for (i = 0; i < this.datas.length; i++) {
        data += '<tr>';
        data += '<td>' + this.datas[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
        data += '</tr>';
      }
    }
    this.Count(this.datas.length);
    return this.el.innerHTML = data;
  };
  this.Add = function () {
    el = document.getElementById('add-name');
    // Get the value
    var data = el.value;
    if (data) {
      // Add the new value
      this.datas.push(data.trim());
      // Reset input value
      el.value = '';
      // Dislay the new list
      this.FetchAll();
    }
  };
  this.Edit = function (item) {
    var el = document.getElementById('edit-name');
    // Display value in the field
    el.value = this.datas[item];
    // Display fields
    document.getElementById('spoiler').style.display = 'block';
    self = this;
    document.getElementById('saveEdit').onsubmit = function() {
      // Get value
      var data = el.value;
      if (data) {
        // Edit value
        self.datas.splice(item, 1, data.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    }
  };
  this.Delete = function (item) {
    // Delete the current row
    this.datas.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
  
}
app.FetchAll();
function CloseInput() {
  document.getElementById('spoiler').style.display = 'none';
}
