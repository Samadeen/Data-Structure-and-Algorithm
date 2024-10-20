// To find the volume (centimeters cubed) of a cuboid you use the formula:

// volume = Length * Width * Height

// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!

// It's up to you to find out whether the cuboid has equal sides (= is a cube).

// Return true if the cuboid could have equal sides, return false otherwise.

// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

// Note: side will be an integer

function cubeChecker(volume: number, side: number): boolean {
  return volume > 0 && side > 0 && volume % Math.pow(side, 3) === 0;
}

function cubeCheckerTwo(volume: number, side: number): boolean {
  // Check if the side length and volume are valid positive numbers
  if (volume <= 0 || side <= 0) return false;

  // Calculate the expected volume of a cube with the given side length
  const expectedVolume = Math.pow(side, 3);

  // Return true if the expected volume matches the given volume
  return volume === expectedVolume;
}
