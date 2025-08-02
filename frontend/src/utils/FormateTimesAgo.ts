export default function FormatTimesAgo(date: Date): string {
  const now = new Date();
  const timeInMs = now.getTime() - date.getTime();

  const seconds = Math.floor(timeInMs / 1000);
  const minutes = Math.floor(timeInMs / (1000 * 60));
  const hours = Math.floor(timeInMs / (1000 * 60 * 60));
  const days = Math.floor(timeInMs / (1000 * 60 * 60 * 24));

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
}
