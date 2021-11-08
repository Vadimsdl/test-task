import { createIcon } from "@chakra-ui/icons"

// using `path`
export const ArrowRightIcon = createIcon({
  displayName: "ArrowRightIcon",
  viewBox: "0 0 18 15",
  // path can also be an array of elements, if you have multiple paths, lines, shapes, etc.
  path: (
    <path d="M11 4V0L18 7L11 14V9.9C6 9.9 2.5 11.5 0 15C1 10 4 5 11 4Z" fill="#5F7495" />
  ),
})