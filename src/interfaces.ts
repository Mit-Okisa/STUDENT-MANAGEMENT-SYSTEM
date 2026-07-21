export interface Student {
  name: string,
  email: string,
  id: string,
  courseName: string,
  yearOfStudy: number,
  password: string,
}

export interface Courses {
  name: string;
  code: string;
}

export interface Admin {
  name: string,
  email: string,
  id: string,
  password: string,
  department: string,
}
