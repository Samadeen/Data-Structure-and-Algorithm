//You have a quiver of arrows, but some have been damaged.
//The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.

function anyArrows(arrows: any[]) {
  return arrows.some((arrow) => !arrow.damaged);
}
