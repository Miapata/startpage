function showTime() {
	const date = new Date();

	let today = date.toLocaleString("en", { weekday: "long" });
	time.toLocaleString('en-US', { hour: 'numeric', hour12: true })
	
	let day = date.toLocaleString("en", { day: "2-digit" });
	let month = date.toLocaleString("en", { month: "2-digit" });
	let year = date.toLocaleString("en", { year: "numeric" });
	
function convertTo12HourTime(date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const twelveHour = hours % 12 || 12; // Handles midnight (0) as 12

  const formattedTime = `${String(twelveHour).padStart(0)}:${String(minutes).padStart(0, '0')} ${ampm}`;
  return formattedTime;
}

// Example usage:
const now = new Date(); // Current date and time
const newDate = new Date(now); // Create a new Date object with the same time

const formattedTime = convertTo12HourTime(newDate);

	document.getElementById(
		"date-display"
	).innerHTML = `${formattedTime} | ${month}/${day}/${year}`;
	setTimeout(showTime, 0);
}

function addZero(i) {
	if (i.length < 2) i = "0" + i;
	return i;
}

showTime();
