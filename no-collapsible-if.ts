if (foo)
  if (bar);
  
/* 2 */
if (foo) {
  if (bar) {
  }
}

/* 3 */
if (foo) {
} else {
  if (bar) {
  } else {
  }
}
