export function generateUniqueHexString(length = 64) {
  // Create a Uint8Array with enough bytes to cover the desired length in hex characters
  const byteLength = length / 2;
  const array = new Uint8Array(byteLength);

  // Fill the array with cryptographically secure random values
  window.crypto.getRandomValues(array);

  // Convert the byte array to a hexadecimal string
  return Array.from(array, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}
