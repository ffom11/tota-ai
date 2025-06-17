export const formatDuration = (duration: string): string => {
  const parts = duration.split(':').map(Number);
  if (parts.length === 3) {
    const [hours, minutes, seconds] = parts;
    return `${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
  }
  return duration;
};
