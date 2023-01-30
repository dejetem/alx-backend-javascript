export default function getListStudentIds(obj) {
  if (Array.isArray(obj)) return obj.map((x) => x.id);
  return [];
}
