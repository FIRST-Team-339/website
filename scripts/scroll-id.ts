export default function scrollId(id: string) {
  let element = document.getElementById(id);

  element.scrollIntoView(true);
}
