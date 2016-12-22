export default function describeDeadline(timeString) {
  const time = new Date(timeString);
  return `Deadline: ${time.toLocaleDateString()}`;
}
