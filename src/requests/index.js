import { API_BASE_URL } from "./utils";

export async function getStudents() {
  const res = await fetch(`${API_BASE_URL}/students.json`);
  const students = await res.json();
  return Object.entries(students);
}

export async function getTeachers() {
  const res = await fetch(`${API_BASE_URL}/teachers.json`);
  const teachers = await res.json();
  return Object.entries(teachers);
}
