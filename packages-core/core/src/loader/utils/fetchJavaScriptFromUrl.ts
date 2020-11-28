export default function fetchJavaScriptUrl(
  url: string,
  {
    async = true,
  }: {
    async?: boolean;
  } = {}
) {
  return new Promise((resolve, reject) => {
    const element = window.document.createElement("script");
    element.src = url;
    element.type = "text/javascript";
    if (async) {
      element.async = async;
    }
    element.onload = () => {
      resolve();
    };
    element.onerror = (error) => {
      reject(error); // TODO: handle error
    };
    document.head.appendChild(element);
  });
}
