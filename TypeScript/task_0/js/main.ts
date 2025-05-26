// Déclaration de l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création de deux étudiants
const student1: Student = {
  firstName: "Alice",
  lastName: "Durand",
  age: 21,
  location: "Paris",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Martin",
  age: 23,
  location: "Lyon",
};

// Tableau contenant les deux étudiants
const studentsList: Student[] = [student1, student2];

// Création du tableau HTML
const table = document.createElement("table");
const tbody = document.createElement("tbody");

// Remplissage du tableau avec les données des étudiants
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);