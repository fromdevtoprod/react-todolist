export function isEmpty(text) {
  return text.trim() === "";
}

export function isEnterKey(e) {
  return e.key === "Enter";
}

export function isEscapeKey(e) {
  return e.key === "Escape";
}
