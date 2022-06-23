export function formatDate(dateISO?: Date | string) {
  let pasedDateobject;
  if (typeof dateISO === "object") {
    pasedDateobject = dateISO;
  } else if (typeof dateISO === "string") {
    pasedDateobject = new Date(dateISO);
  } else {
    throw new Error(
      "Type not suport, check how the date type is being passed."
    );
  }
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(pasedDateobject);
}
