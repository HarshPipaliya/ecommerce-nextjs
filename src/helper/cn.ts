export default function cn(...classNames: (string | undefined)[]) {
  return classNames
    ?.filter((className) => {
      if (className) {
        return className;
      }
    })
    ?.join(" ");
}
