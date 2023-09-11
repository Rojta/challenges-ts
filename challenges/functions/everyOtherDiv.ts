/**
 * From: https://youtu.be/t3qZR6Qjy-c?si=sqbCNg72IG70Yj3P&t=2956
 * Run: bun run ./challenges/functions/everyOtherDiv.ts
 */

export function everyOtherDiv(string: string) {
  let newString = string.split("");
  let openingTag = false;
  // loop over a string characters
  for (let index = 0; index < string.length; index++) {
    if (string[index] !== ">") continue;
    // check if last 4 characters ware <div
    const last4Charact =
      string[index - 4] +
      string[index - 3] +
      string[index - 2] +
      string[index - 1];

    // Check if last 4 characters exist and if they are <div
    if (!last4Charact) continue;

    // Note: In the video they did it so every 2nd div tag gets closed, this if makes it so only div tags that have opening tags get closed.
    if (last4Charact === "/div" && openingTag) {
      openingTag = false;
      continue;
    }
    if (last4Charact !== "<div") continue;

    // If opening tag exists close the tag.
    if (openingTag) {
      newString[index - 3] = "/d";
      openingTag = false;
    } else {
      // If opening tag dosen't exist then this is a opening tag.
      openingTag = true;
    }
  }
  return newString.join("");
}

console.log(everyOtherDiv("<div><p>Here is a <div> tag</p>")); // <div><p>Here is a </div> tag</p>
console.log(everyOtherDiv("<div><div><div>")); // <div></div><div>
console.log(everyOtherDiv("<div><div><p>Hello</p><div><div>")); // <div></div><p>Hello</p><div></div>
console.log(everyOtherDiv("<div></div><p>Hello</p><div></div>")); // <div></div><p>Hello</p></div></div>
