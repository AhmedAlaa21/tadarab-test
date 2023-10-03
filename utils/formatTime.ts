export const formatTime = (totalSeconds: number) => {
  const hours = Math.floor(totalSeconds / 3600);
  const remainingSeconds = totalSeconds % 3600;
  const minutes = Math.round(remainingSeconds / 60);

  // Convert numbers to Arabic numerals
  const arabicHours = new Intl.NumberFormat("ar-EG").format(hours);
  const arabicMinutes = new Intl.NumberFormat("ar-EG").format(minutes);

  return ` ${arabicHours}س \: ${arabicMinutes}د`;
};
