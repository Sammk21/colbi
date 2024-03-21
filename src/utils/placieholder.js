// import { getPlaiceholder } from "plaiceholder";

// export default async function getBase64(imageUrl) {
//   try {
//     const res = await fetch(imageUrl);
//     if (!res.ok) {
//       throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
//     }
//     const buffer = await res.arrayBuffer();

//     const { base64 } = await getPlaiceholder(Buffer.from(buffer));

//     return base64;
//   } catch (e) {
//     if (e instanceof Error) console.log(e.stack);
//   }
// }

// export async function addBlurDataUrl(products) {
//   const base64Promises = products.data.map((product) =>
//     getBase64(product.attributes.image.data.attributes.formats.small.url)
//   );
//   const base64Results = await Promise.all(base64Promises);
//   const photosWithBlur = products.data.map(product);
// }
