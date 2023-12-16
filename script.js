const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  for(var i=0; i<data.length; i++){
    if(data[i]["profession"] == "developer"){
      console.log(data[i]["name"]);
    }
  }
}

// 2. Add Data
function addData() {}

// 3. Remove Admins
function removeAdmin() {}

// 4. Concatenate Array
function concatenateArray() {}

// 5. Average Age
function averageAge() {
  var averageAge = 0;
  for(var i=0; i<data.length; i++){
    averageAge = averageAge + data[i]["age"];
  }
  averageAge = averageAge/data.length;
  console.log(averageAge);
}

// 6. Age Check
function checkAgeAbove25() {
  var ageAbove25 = false;
  for(var i=0; i<data.length; i++){
    if(data[i]["age"] > 25){
      ageAbove25 = true;
    }
  }
  if(ageAbove25 == true){
    console.log(true);
  }else{
    console.log(false);
  }
}

// 7. Unique Professions
function uniqueProfessions() {}

// 8. Sort by Age
function sortByAge() {}

// 9. Update Profession
function updateJohnsProfession() {
  for(var i=0; i<data.length; i++){
    if(data[i]["name"] == "john"){
      data[i]["profession"] = "manager";
    }
  }
}

// 10. Profession Count
function getTotalProfessions() {
  var developers = 0, admins = 0, total = 0;
  for(var i=0; i<data.length; i++){
    if(data[i]["profession"] == "developer"){
      developers++;
      total++;
    }else if(data[i]["profession"] == "admin"){
      admins++;
      total++;
    }
  }
  console.log("Admins : "+admins);
  console.log("Developers : "+developers);
  console.log("Total : "+total);
}
