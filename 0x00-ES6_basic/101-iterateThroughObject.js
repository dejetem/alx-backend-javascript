export default function createReportObject(employeesList) {
  return {
    allNewEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
